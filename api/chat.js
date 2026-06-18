// chat.js — Lumivey API handler
// Vercel serverless function (Node.js — CommonJS)
//
// Laadt:
// 1. brain/brain-v0.1.md
// 2. agents/discovery-agent-v0.8.md
// 3. docs/discovery-exit-preview-entry-v1.0.md
// 4. docs/historische-spiegel-v1.1.md   ← v1.1
// 5. docs/preview-engine-v1.0.md
//
// URL-detectie → Scraper → Website-bewijs in system prompt
// Output-safety-check → rewrite bij interne termen → veilige bezoekerstekst

'use strict';

const fs   = require('fs/promises');
const path = require('path');

// ── Configuratie ──────────────────────────────────────────────────────────────

const CONTEXT_WINDOW_SIZE = 8;
const SCRAPER_TIMEOUT_MS  = 7000;

// ── Veilige fallback wanneer rewrite ook faalt ────────────────────────────────

const SAFE_FALLBACK =
  'Ik heb de website bekeken. Ik zie dat er informatie is die we kunnen gebruiken, ' +
  'maar ik wil dit zorgvuldig formuleren. ' +
  'Kun je kort aangeven wat voor jou het belangrijkste is dat anders moet?';

// ── Output-veiligheidscheck ───────────────────────────────────────────────────

/**
 * Detecteert interne Lumivey-termen in een tekst.
 *
 * Strategie:
 * - Altijd-interne termen (bewijsbeeld, veranderopdracht, etc.) worden direct gedetecteerd.
 * - Gewone Nederlandse werkwoorden (aanpassen, verwijderen, behouden) worden alleen
 *   gedetecteerd wanneer ze als markdown-categorielabel worden gebruikt (**Aanpassen:**).
 * - 'preview' en 'discovery' worden alleen gedetecteerd als procestermen, niet als
 *   gewone woorden in een zin.
 *
 * Dit voorkomt false positives op zinnen als "Wat wil je aanpassen?" of
 * "We kunnen het logo verwijderen als je dat wilt."
 */
function containsInternalTerms(text) {
  if (!text || typeof text !== 'string') return false;

  // 1. Altijd-interne termen — exacte substring match (case-insensitive)
  const alwaysInternal = [
    'bewijsbeeld',
    'veranderopdracht',
    'historische spiegel',
    'completeness engine',
    'toekomstbeeld',
    'relatie tot veranderopdracht',
    'openstaande vragen voor preview',
  ];
  const lower = text.toLowerCase();
  for (const term of alwaysInternal) {
    if (lower.includes(term)) return true;
  }

  // 2. LP-nummers (LP28, LP34, etc.)
  if (/\blp\d+\b/i.test(text)) return true;

  // 3. Categorielabels — alleen als markdown bold header of als label met dubbele punt
  //    Detecteert: **IST:**, **SOLL**, IST: (als regel-start label), ### Bewijsbeeld etc.
  const labelPatterns = [
    /\*\*(?:ist|soll|behouden|aanpassen|verwijderen|onzeker)\*\*/i,
    /\*\*(?:ist|soll|behouden|aanpassen|verwijderen|onzeker):\*\*/i,
    /^-\s+\*\*(?:ist|soll)\*\*:/im,
    /\bist:\s/i,
    /\bsoll:\s/i,
    /^#+\s+/im,               // elke markdown heading (###) is nooit gewenst in bezoekersoutput
  ];
  for (const p of labelPatterns) {
    if (p.test(text)) return true;
  }

  // 4. Preview en Discovery — alleen als procestermen, niet als gewone woorden
  const processTermPatterns = [
    /\*\*preview\*\*/i,                       // **Preview**
    /^preview:/im,                            // Preview: als label
    /naar preview\b/i,                        // overdracht naar Preview
    /discovery.*preview/i,                    // Discovery → Preview
    /openstaande.*preview/i,
    /\*\*discovery\*\*/i,
    /^discovery\b/im,                         // Discovery als eerste woord van regel
    /historische\s+spiegel/i,
  ];
  for (const p of processTermPatterns) {
    if (p.test(text)) return true;
  }

  return false;
}

/**
 * Herschrijft een antwoord dat interne termen bevat naar veilige bezoekerstekst.
 * Gebruikt hetzelfde model maar met lage temperature en een strikte rewrite-instructie.
 */
async function rewriteForVisitor(originalReply, conversationContext) {
  const rewritePrompt = `
Je bent een communicatie-assistent voor Lumivey.

Je ontvangt een interne analyse. Je taak is die te herschrijven voor een ondernemer.

Regels voor de herschrijving:
- Gebruik gewone Nederlandse taal. Geen vakjargon.
- Geen markdown. Geen koppen. Geen opsommingtekens (*, -, #).
- Geen categorieën zoals Behouden, Aanpassen, Verwijderen, Onzeker.
- Geen interne termen: IST, SOLL, Bewijsbeeld, Veranderopdracht, Discovery, Preview, Historische Spiegel, Completeness Engine.
- Geen genummerde of gebulletpointe lijsten.
- Voeg geen nieuwe informatie toe die niet in de oorspronkelijke tekst staat.
- Spreek de ondernemer direct aan met "je" of "jij".
- Maak het korter, rustiger en menselijker.
- Eindig met één concrete vraag of een aanbieding van de volgende stap.
- Maximaal drie alinea's.

Originele tekst om te herschrijven:
${originalReply}
`.trim();

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model:       'gpt-4o-mini',
      temperature: 0.2,
      messages: [
        { role: 'user', content: rewritePrompt },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI rewrite HTTP ${response.status}`);
  }

  const data  = await response.json();
  const reply = data?.choices?.[0]?.message?.content;

  if (!reply) throw new Error('Geen rewrite ontvangen');

  // Veiligheidscontrole op de rewrite zelf
  if (containsInternalTerms(reply)) {
    throw new Error('Rewrite bevat nog steeds interne termen');
  }

  return reply;
}

// ── URL-detectie ──────────────────────────────────────────────────────────────

function detectLatestUrl(messages) {
  const urlPattern = /(?:https?:\/\/[^\s"'<>)\]]+|(?<!\w)www\.[a-z0-9-]+\.[a-z]{2,}[^\s"'<>)\]]*)/gi;
  let lastFound = null;

  for (const msg of messages) {
    if (msg.role !== 'user') continue;
    const matches = msg.content.match(urlPattern);
    if (matches) {
      lastFound = matches[matches.length - 1].replace(/[.,;!?)]+$/, '');
    }
  }

  if (!lastFound) return null;
  if (lastFound.startsWith('www.')) lastFound = 'https://' + lastFound;

  try {
    const parsed = new URL(lastFound);
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function getBaseUrl(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host  = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost:3000';
  return `${proto}://${host}`;
}

async function fetchWebsiteEvidence(url, baseUrl) {
  const scraperEndpoint = `${baseUrl}/api/scraper`;
  try {
    const controller = new AbortController();
    const timer      = setTimeout(() => controller.abort(), SCRAPER_TIMEOUT_MS);

    const response = await fetch(scraperEndpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ url }),
      signal:  controller.signal,
    });

    clearTimeout(timer);

    if (!response.ok) {
      console.warn(`[Lumivey] Scraper HTTP ${response.status} voor: ${url}`);
      return null;
    }

    const data = await response.json();
    console.log(
      `[Lumivey] Scraper gelukt: ${url} — ` +
      `${data.headings?.length ?? 0} headings, ` +
      `${data.images?.length ?? 0} afbeeldingen`
    );
    return data;

  } catch (err) {
    if (err.name === 'AbortError') {
      console.warn(`[Lumivey] Scraper timeout voor: ${url}`);
    } else {
      console.warn(`[Lumivey] Scraper fout voor ${url}: ${err.message}`);
    }
    return null;
  }
}

function formatEvidenceSection(evidence) {
  const lines = [
    '---',
    '',
    '## DEEL 6 — Website-bewijs (intern — niet letterlijk tonen aan bezoeker)',
    `## Bron: ${evidence.url}`,
    `## Gescraped: ${evidence.scraped_at}`,
    '## Rol: Bewijslaag — uitsluitend feitelijke informatie, geen oordelen',
    '',
    'INTERN GEBRUIK: dit bewijs toont de bestaande werkelijkheid van de website.',
    'Vertaal alle observaties naar gewone ondernemerstaal.',
    'Gebruik NOOIT de labels Bewijsbeeld, IST, SOLL, Behouden, Aanpassen, Verwijderen, Onzeker in je antwoord.',
    'Stel geen vragen over informatie die hier al zichtbaar is.',
    '',
  ];

  if (evidence.title)            lines.push(`Paginatitel: ${evidence.title}`);
  if (evidence.meta_description) lines.push(`Meta-omschrijving: ${evidence.meta_description}`);
  if (evidence.meta_keywords)    lines.push(`Meta-trefwoorden: ${evidence.meta_keywords}`);
  if (evidence.og_title)         lines.push(`OG-titel: ${evidence.og_title}`);

  if (evidence.headings?.length) {
    lines.push('', 'Paginastructuur:');
    for (const h of evidence.headings) {
      lines.push(`  ${h.level.toUpperCase()}: ${h.text}`);
    }
  }

  if (evidence.images?.length) {
    lines.push('', 'Afbeeldingen:');
    for (const img of evidence.images.slice(0, 15)) {
      lines.push(`  - ${img.alt || '(geen alt)'} [${img.src}]`);
    }
  }

  if (evidence.visible_text) {
    lines.push('', 'Zichtbare tekst:');
    lines.push(evidence.visible_text.slice(0, 2500));
  }

  lines.push('', '---');
  return lines.join('\n');
}

// ── Hoofdhandler ──────────────────────────────────────────────────────────────

module.exports = async function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin',  '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Gebruik POST.' });
  }

  // ── Berichten uitlezen ───────────────────────────────────────────────────

  const body = req.body || {};
  let allMessages;
  let messagesForOpenAI;

  if (typeof body.message === 'string' && body.message.trim().length > 0) {
    allMessages       = [{ role: 'user', content: body.message.trim() }];
    messagesForOpenAI = allMessages;

  } else if (Array.isArray(body.messages) && body.messages.length > 0) {
    const isValid = body.messages.every(
      (m) =>
        typeof m.role === 'string' &&
        ['user', 'assistant', 'system'].includes(m.role) &&
        typeof m.content === 'string'
    );
    if (!isValid) {
      return res.status(400).json({
        error: 'Elk bericht in "messages" moet een geldige "role" en "content" hebben.',
      });
    }
    allMessages       = body.messages.filter((m) => m.role !== 'system');
    messagesForOpenAI = allMessages.slice(-CONTEXT_WINDOW_SIZE);

  } else {
    return res.status(400).json({
      error: 'Geen bericht ontvangen. Stuur { "message": "..." } of { "messages": [...] }.',
    });
  }

  // ── URL-detectie en scraping ─────────────────────────────────────────────

  const detectedUrl = detectLatestUrl(allMessages);
  let evidenceSection = null;
  let scraperFailed   = false;

  if (detectedUrl) {
    console.log(`[Lumivey] URL gedetecteerd: ${detectedUrl}`);
    console.log(`[Lumivey] Scraper gestart voor: ${detectedUrl}`);

    const baseUrl  = getBaseUrl(req);
    const evidence = await fetchWebsiteEvidence(detectedUrl, baseUrl);

    if (evidence) {
      evidenceSection = formatEvidenceSection(evidence);
    } else {
      scraperFailed = true;
      console.warn(`[Lumivey] Scraper mislukt voor: ${detectedUrl}`);
    }
  }

  // ── Kennisdocumenten laden ───────────────────────────────────────────────

  const brainPath              = path.join(process.cwd(), 'brain',  'brain-v0.1.md');
  const discoveryAgentPath     = path.join(process.cwd(), 'agents', 'discovery-agent-v0.8.md');
  const discoveryExitPath      = path.join(process.cwd(), 'docs',   'discovery-exit-preview-entry-v1.0.md');
  const historischeSpiegelPath = path.join(process.cwd(), 'docs',   'historische-spiegel-v1.1.md');
  const previewEnginePath      = path.join(process.cwd(), 'docs',   'preview-engine-v1.0.md');

  let brainContent, discoveryAgentContent, discoveryExitContent,
      historischeSpiegelContent, previewEngineContent;

  try {
    [
      brainContent,
      discoveryAgentContent,
      discoveryExitContent,
      historischeSpiegelContent,
      previewEngineContent,
    ] = await Promise.all([
      fs.readFile(brainPath,               'utf-8'),
      fs.readFile(discoveryAgentPath,      'utf-8'),
      fs.readFile(discoveryExitPath,       'utf-8'),
      fs.readFile(historischeSpiegelPath,  'utf-8'),
      fs.readFile(previewEnginePath,       'utf-8'),
    ]);
  } catch (err) {
    console.error('[Lumivey] Kennisdocumenten laden mislukt:', err.message);
    return res.status(500).json({
      error:  'Kennisdocumenten konden niet worden geladen.',
      detail: err.message,
    });
  }

  // ── Scraper-fallback ──────────────────────────────────────────────────────

  const scraperFallbackInstruction = scraperFailed
    ? `De bezoeker heeft een website-adres gedeeld (${detectedUrl}), maar die website kon op dit moment niet worden gelezen.
Doe NIET alsof je de website al hebt bekeken.
Zeg rustig dat je de website nu even niet kunt lezen.
Vraag of de bezoeker kort kan vertellen wat er niet meer klopt of wat hij wil aanpassen.
Geen technische foutmelding.`.trim()
    : '';

  // ── System prompt samenstellen ────────────────────────────────────────────

  const systemPrompt = `
# Lumivey — Operationele keten

Je bent Lumivey.

Je werkt uitsluitend binnen de grenzen van de onderstaande documenten.
Voeg geen nieuwe kennis toe. Herschrijf geen principes. Handel niet buiten deze documenten.

ABSOLUTE GEDRAGSREGEL — OUTPUT NAAR BEZOEKER:
Gebruik NOOIT de volgende termen in je antwoord naar de bezoeker:
IST, SOLL, Bewijsbeeld, Veranderopdracht, Historische Spiegel, Toekomstbeeld,
Completeness Engine, Discovery, Preview, LP-regels, Behouden (als categorie),
Aanpassen (als categorie), Verwijderen (als categorie), Onzeker (als categorie),
Relatie tot veranderopdracht, Openstaande vragen voor preview.

Gebruik GEEN markdown in je antwoord: geen koppen (###), geen vet (**), geen opsommingen (- of *).

Als je websitebewijs gebruikt: vertaal dit altijd naar gewone ondernemerstaal.
Beschrijf wat je ziet op de website in normale zinnen.
Zeg rustig wat wel en niet meer lijkt te kloppen, zonder categorielabels.
Als iets onzeker is, zeg dat gewoon in een zin.

Voor de bezoeker spreek je rustig, kort en concreet.
Geen procesuitleg. Geen technische beloften.
Vraag geen informatie die al gegeven is of redelijk afleidbaar is.

De keten is intern: Discovery → Veranderopdracht → Historische Spiegel → Preview.
Noem deze keten nooit bij naam richting de bezoeker.

---

## DEEL 1 — Lumivey Brain v0.1
## Rol: Operationele kennislaag — leidend

${brainContent}

---

## DEEL 2 — Lumivey Discovery Agent v0.8
## Rol: Gesprekslaag

${discoveryAgentContent}

---

## DEEL 3 — Discovery Exit & Preview Entry v1.0
## Rol: Overdrachtslaag

${discoveryExitContent}

---

## DEEL 4 — Historische Spiegel v1.1
## Rol: Bewijslaag — gebruik intern, toon nooit categorielabels aan bezoeker

${historischeSpiegelContent}

---

## DEEL 5 — Preview Engine v1.0
## Rol: Toonlaag

${previewEngineContent}

${evidenceSection || ''}

---

${scraperFallbackInstruction ? scraperFallbackInstruction + '\n\n---\n' : ''}

Handel nu als Lumivey.

${evidenceSection
  ? `Website-bewijs is beschikbaar. Gebruik dit intern.
Beschrijf je observaties in gewone taal.
Geen labels. Geen categorieën. Geen markdown.
Koppel observaties altijd aan wat de bezoeker zelf heeft aangegeven.`
  : detectedUrl
  ? 'Erken de URL. Geef aan dat je ernaar kijkt. Doe niet alsof je de website al hebt bekeken.'
  : 'Als de bezoeker een website noemt maar nog geen URL geeft: vraag rustig om de URL.'}

Als voldoende duidelijk is wat er moet veranderen:
stop met doorvragen en maak de volgende stap concreet in gewone ondernemerstaal.
`.trim();

  // ── Logging ───────────────────────────────────────────────────────────────

  console.log(
    `[Lumivey] berichten: ${allMessages.length} ontvangen, ${messagesForOpenAI.length} naar OpenAI | ` +
    `URL: ${detectedUrl || 'geen'} | ` +
    `bewijs: ${evidenceSection ? 'ja' : scraperFailed ? 'mislukt' : 'n.v.t.'} | ` +
    `~${Math.round(systemPrompt.length / 4)} tokens (schatting)`
  );

  // ── OpenAI aanroepen ──────────────────────────────────────────────────────

  let rawReply;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model:       'gpt-4o-mini',
        temperature: 0.3,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messagesForOpenAI,
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('[Lumivey] OpenAI fout:', response.status, errorBody);
      return res.status(502).json({
        error:  'OpenAI API gaf een fout terug.',
        status: response.status,
      });
    }

    const data = await response.json();
    rawReply   = data?.choices?.[0]?.message?.content;

    if (!rawReply) {
      return res.status(500).json({ error: 'Geen antwoord ontvangen van OpenAI.' });
    }

  } catch (err) {
    console.error('[Lumivey] Netwerkfout OpenAI:', err.message);
    return res.status(500).json({
      error:  'Verbinding met OpenAI mislukt.',
      detail: err.message,
    });
  }

  // ── Output-veiligheidscheck ───────────────────────────────────────────────
  //
  // Stap 1: controleer of het antwoord interne termen bevat.
  // Stap 2: zo ja, herschrijf via een aparte OpenAI-aanroep.
  // Stap 3: als rewrite ook faalt, stuur de veilige fallback.

  let finalReply = rawReply;

  if (containsInternalTerms(rawReply)) {
    console.log('[Lumivey] Interne termen gevonden in output — rewrite gestart');

    try {
      finalReply = await rewriteForVisitor(rawReply, messagesForOpenAI);
      console.log('[Lumivey] Rewrite klaar');
    } catch (err) {
      console.error('[Lumivey] Rewrite mislukt:', err.message);
      console.log('[Lumivey] Fallback wordt gebruikt');
      finalReply = SAFE_FALLBACK;
    }
  } else {
    console.log('[Lumivey] Output veilig');
  }

  return res.status(200).json({ reply: finalReply });
};
