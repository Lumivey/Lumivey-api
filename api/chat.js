// chat.js — Lumivey API handler
// Vercel serverless function (Node.js — CommonJS)
//
// Laadt:
// 1. api/knowledge/brain/brain-v0.2.md
// 2. api/knowledge/agents/discovery-agent-v0.9-corrected.md
// 3. api/knowledge/docs/discovery-exit-preview-entry-v1.0.md
// 4. api/knowledge/docs/historische-spiegel-v1.2.md
// 5. api/knowledge/docs/preview-engine-v1.1.md
//
// URL-detectie → Scraper → Website-bewijs in system prompt
// Output-safety-check → rewrite bij interne termen, LP28-achtige formuleringen
// en meer-dan-één-vraag → veilige bezoekerstekst

'use strict';

const fs = require('fs/promises');
const path = require('path');

// ── Configuratie ──────────────────────────────────────────────────────────────

const CONTEXT_WINDOW_SIZE = 8;
const SCRAPER_TIMEOUT_MS = 7000;


// ── Veilige fallback wanneer rewrite ook faalt ────────────────────────────────

const SAFE_FALLBACK =
  'Ik wil dit zorgvuldig doen. Kun je kort vertellen wat voor jou nu het belangrijkste is?';

// ── Output-veiligheidscheck ───────────────────────────────────────────────────

function containsInternalTerms(text) {
  if (!text || typeof text !== 'string') return false;

  const lower = text.toLowerCase();

  const alwaysInternal = [
    'bewijsbeeld',
    'veranderopdracht',
    'historische spiegel',
    'completeness engine',
    'toekomstbeeld',
    'relatie tot veranderopdracht',
    'openstaande vragen voor preview',
  ];

  for (const term of alwaysInternal) {
    if (lower.includes(term)) return true;
  }

  if (/\blp\d+\b/i.test(text)) return true;

  const labelPatterns = [
    /\*\*(?:ist|soll|behouden|aanpassen|verwijderen|onzeker)\*\*/i,
    /\*\*(?:ist|soll|behouden|aanpassen|verwijderen|onzeker):\*\*/i,
    /^-\s+\*\*(?:ist|soll)\*\*:/im,
    /\bist:\s/i,
    /\bsoll:\s/i,
    /^#+\s+/im,
  ];

  for (const p of labelPatterns) {
    if (p.test(text)) return true;
  }

  const processTermPatterns = [
    /\*\*preview\*\*/i,
    /^preview:/im,
    /naar preview\b/i,
    /discovery.*preview/i,
    /openstaande.*preview/i,
    /\*\*discovery\*\*/i,
    /^discovery\b/im,
    /historische\s+spiegel/i,
  ];

  for (const p of processTermPatterns) {
    if (p.test(text)) return true;
  }

  return false;
}

function containsVisitorOutputRisks(text) {
  if (!text || typeof text !== 'string') return false;

  // Eén vraag per beurt blijft een harde grens.
  const questionMarks = (text.match(/\?/g) || []).length;
  if (questionMarks > 1) return true;

  const trimmed = text.trim();

  // LP28-achtige openingszinnen: ontvangstbevestiging, waardering, compliment,
  // chatbot-enthousiasme. Deze lijst is bewust beperkt tot duidelijke patronen.
  const forbiddenOpenings = [
    /^dat klinkt\b/i,
    /^dat is (een|erg|heel|best)\b/i,
    /^dat lijkt (een|me)\b/i,
    /^mooi\b/i,
    /^goed om te weten\b/i,
    /^helder\b/i,
    /^begrijpelijk\b/i,
    /^prima\b/i,
    /^dank\b/i,
    /^super\b/i,
    /^wat goed\b/i,
    /^fijn dat\b/i,
  ];

  return forbiddenOpenings.some((p) => p.test(trimmed));
}

function requiresRewrite(text) {
  return containsInternalTerms(text) || containsVisitorOutputRisks(text);
}

async function rewriteForVisitor(originalReply) {
  const rewritePrompt = `
Je bent een communicatie-assistent voor Lumivey.

Je ontvangt een antwoord dat herschreven moet worden voor een ondernemer.

Regels voor de herschrijving:
- Gebruik gewone Nederlandse taal.
- Geen vakjargon.
- Geen markdown. Geen koppen. Geen opsommingstekens (*, -, #).
- Geen categorieën zoals Behouden, Aanpassen, Verwijderen, Onzeker.
- Geen interne termen: IST, SOLL, Bewijsbeeld, Veranderopdracht, Discovery, Preview, Historische Spiegel, Completeness Engine, LP-regels.
- Geen ontvangstbevestigingen, complimenten of waarderingen zoals: "Dat klinkt...", "Dat is mooi...", "Helder", "Begrijpelijk", "Dank".
- Spiegel betekenis zonder te waarderen.
- Stel maximaal één vraag.
- Vraag niet naar een URL tenzij de ondernemer duidelijk aangeeft dat er al een bestaande website is die bekeken moet worden.
- Voeg geen nieuwe informatie toe die niet in de oorspronkelijke tekst staat.
- Spreek de ondernemer direct aan met "je" of "jij".
- Maak het kort, rustig en menselijk.
- Maximaal drie korte alinea's.

Originele tekst om te herschrijven:
${originalReply}
`.trim();

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      temperature: 0.2,
      messages: [{ role: 'user', content: rewritePrompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI rewrite HTTP ${response.status}`);
  }

  const data = await response.json();
  const reply = data?.choices?.[0]?.message?.content;

  if (!reply) throw new Error('Geen rewrite ontvangen');
  if (requiresRewrite(reply)) throw new Error('Rewrite bevat nog steeds risicopatroon');

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
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost:3000';
  return `${proto}://${host}`;
}

async function fetchWebsiteEvidence(url, baseUrl) {
  const scraperEndpoint = `${baseUrl}/api/scraper`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), SCRAPER_TIMEOUT_MS);

    const response = await fetch(scraperEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
      signal: controller.signal,
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

  if (evidence.title) lines.push(`Paginatitel: ${evidence.title}`);
  if (evidence.meta_description) lines.push(`Meta-omschrijving: ${evidence.meta_description}`);
  if (evidence.meta_keywords) lines.push(`Meta-trefwoorden: ${evidence.meta_keywords}`);
  if (evidence.og_title) lines.push(`OG-titel: ${evidence.og_title}`);

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Gebruik POST.' });
  }

  const body = req.body || {};
  let allMessages;
  let messagesForOpenAI;

  if (typeof body.message === 'string' && body.message.trim().length > 0) {
    allMessages = [{ role: 'user', content: body.message.trim() }];
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

    allMessages = body.messages.filter((m) => m.role !== 'system');
    messagesForOpenAI = allMessages.slice(-CONTEXT_WINDOW_SIZE);
  } else {
    return res.status(400).json({
      error: 'Geen bericht ontvangen. Stuur { "message": "..." } of { "messages": [...] }.',
    });
  }

  const detectedUrl = detectLatestUrl(allMessages);
  let evidenceSection = null;
  let scraperFailed = false;

  if (detectedUrl) {
    console.log(`[Lumivey] URL gedetecteerd: ${detectedUrl}`);
    console.log(`[Lumivey] Scraper gestart voor: ${detectedUrl}`);

    const baseUrl = getBaseUrl(req);
    const evidence = await fetchWebsiteEvidence(detectedUrl, baseUrl);

    if (evidence) {
      evidenceSection = formatEvidenceSection(evidence);
    } else {
      scraperFailed = true;
      console.warn(`[Lumivey] Scraper mislukt voor: ${detectedUrl}`);
    }
  }

  // ── Kennisdocumenten laden ───────────────────────────────────────────────

  const brainPath = path.join(__dirname, 'knowledge', 'brain', 'brain-v0.2.md');
  const discoveryAgentPath = path.join(__dirname, 'knowledge', 'agents', 'discovery-agent-v0.9-corrected.md');
  const discoveryExitPath = path.join(__dirname, 'knowledge', 'docs', 'discovery-exit-preview-entry-v1.0.md');
  const historischeSpiegelPath = path.join(__dirname, 'knowledge', 'docs', 'historische-spiegel-v1.2.md');
  const previewEnginePath = path.join(__dirname, 'knowledge', 'docs', 'preview-engine-v1.1.md');

  let brainContent;
  let discoveryAgentContent;
  let discoveryExitContent;
  let historischeSpiegelContent;
  let previewEngineContent;

  console.log('[Lumivey] __dirname:', __dirname);
  console.log('[Lumivey] Brain pad:', brainPath);
  console.log('[Lumivey] Discovery Agent pad:', discoveryAgentPath);

  try {
    [
      brainContent,
      discoveryAgentContent,
      discoveryExitContent,
      historischeSpiegelContent,
      previewEngineContent,
    ] = await Promise.all([
      fs.readFile(brainPath, 'utf-8'),
      fs.readFile(discoveryAgentPath, 'utf-8'),
      fs.readFile(discoveryExitPath, 'utf-8'),
      fs.readFile(historischeSpiegelPath, 'utf-8'),
      fs.readFile(previewEnginePath, 'utf-8'),
    ]);

    console.log(`[Lumivey] Brain geladen: ${brainPath}`);
    console.log(`[Lumivey] Discovery Agent geladen: ${discoveryAgentPath}`);
  } catch (err) {
    console.error('[Lumivey] Kennisdocumenten laden mislukt:', err.message);
    return res.status(500).json({
      error: 'Kennisdocumenten konden niet worden geladen.',
      detail: err.message,
    });
  }

  const scraperFallbackInstruction = scraperFailed
    ? `De bezoeker heeft een website-adres gedeeld (${detectedUrl}), maar die website kon op dit moment niet worden gelezen.
Doe NIET alsof je de website al hebt bekeken.
Zeg rustig dat je de website nu even niet kunt lezen.
Vraag of de bezoeker kort kan vertellen wat er niet meer klopt of wat hij wil aanpassen.
Geen technische foutmelding.`.trim()
    : '';

  const noEvidenceInstruction = detectedUrl
    ? 'Erken de URL alleen als bestaand materiaal. Geef aan dat je ernaar kijkt. Doe niet alsof je de website al hebt bekeken.'
    : `Vraag NIET automatisch om een URL wanneer de bezoeker het woord website noemt.
Vraag alleen om een URL als de bezoeker duidelijk aangeeft dat er al een bestaande website is die bekeken moet worden.
Bij starters, nieuwe websites, twijfel of ondernemers zonder bestaande website: volg eerst het aanwezige signaal.`;

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

Voor de bezoeker spreek je rustig, kort en concreet.
Geen procesuitleg. Geen technische beloften.
Geen ontvangstbevestigingen, complimenten of waarderingen.
Eén vraag per beurt. Geen uitzonderingen.
Vraag geen informatie die al gegeven is of redelijk afleidbaar is.
Vraag niet naar administratieve gegevens zolang een aanwezig herkenningssignaal nog niet voldoende erkend is.

De keten is intern: Discovery → Veranderopdracht → Historische Spiegel → Preview.
Noem deze keten nooit bij naam richting de bezoeker.

Als je websitebewijs gebruikt: vertaal dit altijd naar gewone ondernemerstaal.
Beschrijf wat je ziet op de website in normale zinnen.
Zeg rustig wat wel en niet meer lijkt te kloppen, zonder categorielabels.
Als iets onzeker is, zeg dat gewoon in een zin.

---

## DEEL 1 — Lumivey Brain v0.2
## Rol: Operationele kennislaag — leidend

${brainContent}

---

## DEEL 2 — Lumivey Discovery Agent v0.9 corrected
## Rol: Gesprekslaag

${discoveryAgentContent}

---

## DEEL 3 — Discovery Exit & Preview Entry v1.0
## Rol: Overdrachtslaag

${discoveryExitContent}

---

## DEEL 4 — Historische Spiegel v1.2
## Rol: Bewijslaag — gebruik intern, toon nooit categorielabels aan bezoeker

${historischeSpiegelContent}

---

## DEEL 5 — Preview Engine v1.1
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
  : noEvidenceInstruction}

Als voldoende duidelijk is wat de ondernemer nodig heeft:
stop met doorvragen en maak de volgende stap concreet in gewone ondernemerstaal.
`.trim();

  console.log(
    `[Lumivey] berichten: ${allMessages.length} ontvangen, ${messagesForOpenAI.length} naar OpenAI | ` +
    `URL: ${detectedUrl || 'geen'} | ` +
    `bewijs: ${evidenceSection ? 'ja' : scraperFailed ? 'mislukt' : 'n.v.t.'} | ` +
    `~${Math.round(systemPrompt.length / 4)} tokens (schatting)`
  );

  let rawReply;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
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
        error: 'OpenAI API gaf een fout terug.',
        status: response.status,
      });
    }

    const data = await response.json();
    rawReply = data?.choices?.[0]?.message?.content;

    if (!rawReply) {
      return res.status(500).json({ error: 'Geen antwoord ontvangen van OpenAI.' });
    }
  } catch (err) {
    console.error('[Lumivey] Netwerkfout OpenAI:', err.message);
    return res.status(500).json({
      error: 'Verbinding met OpenAI mislukt.',
      detail: err.message,
    });
  }

  let finalReply = rawReply;

  if (requiresRewrite(rawReply)) {
    console.log('[Lumivey] Output-risico gevonden — rewrite gestart');

    try {
      finalReply = await rewriteForVisitor(rawReply);
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
