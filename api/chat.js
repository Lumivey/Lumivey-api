// chat.js — Lumivey API handler
// Vercel serverless function (Node.js — CommonJS)
//
// Laadt:
// 1. brain/brain-v0.1.md
// 2. agents/discovery-agent-v0.8.md
// 3. docs/discovery-exit-preview-entry-v1.0.md
// 4. docs/historische-spiegel-v1.0.md
// 5. docs/preview-engine-v1.0.md
//
// Nieuw in deze versie:
// 6. URL-detectie in gesprekshistorie
// 7. Scraper-aanroep via api/scraper (intern op dezelfde Vercel-instantie)
// 8. Website-bewijs als DEEL 6 in de system prompt

'use strict';

const fs   = require('fs/promises');
const path = require('path');

// ── MVP-beperking: context window ─────────────────────────────────────────────
//
// Stuur naar OpenAI uitsluitend de laatste N berichten.
// De frontend bewaart de volledige history in localStorage.
// Verhoog dit getal wanneer de TPM-limieten dat toelaten.
const CONTEXT_WINDOW_SIZE = 8;

// ── Scraper-configuratie ──────────────────────────────────────────────────────
const SCRAPER_TIMEOUT_MS = 7000; // ruim onder Vercel function timeout van 10 s

// ── URL-detectie ──────────────────────────────────────────────────────────────

/**
 * Zoekt de meest recente URL in de volledige gesprekshistorie.
 * Geeft de laatste gevonden URL terug, of null als er geen is.
 *
 * Herkent:
 *   https://voorbeeld.nl
 *   http://voorbeeld.nl
 *   www.voorbeeld.nl   (wordt aangevuld met https://)
 */
function detectLatestUrl(messages) {
  const urlPattern = /(?:https?:\/\/[^\s"'<>)\]]+|(?<!\w)www\.[a-z0-9-]+\.[a-z]{2,}[^\s"'<>)\]]*)/gi;

  let lastFound = null;

  for (const msg of messages) {
    if (msg.role !== 'user') continue;
    const matches = msg.content.match(urlPattern);
    if (matches) {
      // Neem de laatste match in dit bericht
      lastFound = matches[matches.length - 1].replace(/[.,;!?)]+$/, '');
    }
  }

  if (!lastFound) return null;

  // Voeg protocol toe als het ontbreekt
  if (lastFound.startsWith('www.')) {
    lastFound = 'https://' + lastFound;
  }

  // Basisvalidatie
  try {
    const parsed = new URL(lastFound);
    if (!['http:', 'https:'].includes(parsed.protocol)) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

/**
 * Bepaalt de basis-URL van het huidige Vercel-verzoek.
 * Nodig om de scraper intern aan te roepen via een absolute URL.
 */
function getBaseUrl(req) {
  // Vercel zet x-forwarded-proto en host op productie
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host  = req.headers['x-forwarded-host'] || req.headers['host'] || 'localhost:3000';
  return `${proto}://${host}`;
}

/**
 * Roept de scraper aan voor de gegeven URL.
 * Retourneert het JSON-resultaat of null bij fout.
 */
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

/**
 * Zet het scraper-resultaat om naar een leesbaar tekstblok voor de system prompt.
 * Compact zodat het de context-window zo min mogelijk belast.
 *
 * BELANGRIJK: dit blok bevat uitsluitend feitelijk bewijs.
 * Geen oordelen. Geen adviezen. Geen interpretaties.
 * De Historische Spiegel waardeert dit bewijs op basis van de veranderopdracht.
 */
function formatEvidenceSection(evidence) {
  const lines = [
    '---',
    '',
    '## DEEL 6 — Website-bewijs (Historische Spiegel)',
    `## Bron: ${evidence.url}`,
    `## Gescraped: ${evidence.scraped_at}`,
    '## Rol: Bewijslaag — uitsluitend feitelijke informatie, geen oordelen',
    '',
    'Dit is bewijs over de bestaande werkelijkheid van de website.',
    'Dit is geen analyse en geen advies.',
    'De Historische Spiegel waardeert dit bewijs op basis van de actieve veranderopdracht.',
    'Preview mag hierop voortbouwen.',
    'Stel geen vragen over informatie die hier al zichtbaar is.',
    '',
  ];

  if (evidence.title)            lines.push(`Paginatitel: ${evidence.title}`);
  if (evidence.meta_description) lines.push(`Meta-omschrijving: ${evidence.meta_description}`);
  if (evidence.meta_keywords)    lines.push(`Meta-trefwoorden: ${evidence.meta_keywords}`);
  if (evidence.og_title)         lines.push(`OG-titel: ${evidence.og_title}`);

  if (evidence.headings?.length) {
    lines.push('', 'Paginastructuur (headings):');
    for (const h of evidence.headings) {
      lines.push(`  ${h.level.toUpperCase()}: ${h.text}`);
    }
  }

  if (evidence.images?.length) {
    lines.push('', 'Afbeeldingen (alt-teksten):');
    for (const img of evidence.images.slice(0, 15)) {
      const label = img.alt ? img.alt : '(geen alt-tekst)';
      lines.push(`  - ${label} [${img.src}]`);
    }
  }

  if (evidence.visible_text) {
    lines.push('', 'Zichtbare tekst (maximaal 2500 tekens):');
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
  let allMessages;      // volledige history voor URL-detectie
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

    // Bewaar volledige history voor URL-detectie; stuur alleen recente slice naar OpenAI
    allMessages       = body.messages.filter((m) => m.role !== 'system');
    messagesForOpenAI = allMessages.slice(-CONTEXT_WINDOW_SIZE);

  } else {
    return res.status(400).json({
      error: 'Geen bericht ontvangen. Stuur { "message": "..." } of { "messages": [...] }.',
    });
  }

  // ── URL-detectie en scraping ─────────────────────────────────────────────

  const detectedUrl = detectLatestUrl(allMessages);
  let evidenceSection = null;   // null = geen bewijs beschikbaar
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

  const brainPath             = path.join(process.cwd(), 'brain',  'brain-v0.1.md');
  const discoveryAgentPath    = path.join(process.cwd(), 'agents', 'discovery-agent-v0.8.md');
  const discoveryExitPath     = path.join(process.cwd(), 'docs',   'discovery-exit-preview-entry-v1.0.md');
  const historischeSpiegelPath= path.join(process.cwd(), 'docs',   'historische-spiegel-v1.0.md');
  const previewEnginePath     = path.join(process.cwd(), 'docs',   'preview-engine-v1.0.md');

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
      fs.readFile(brainPath,              'utf-8'),
      fs.readFile(discoveryAgentPath,     'utf-8'),
      fs.readFile(discoveryExitPath,      'utf-8'),
      fs.readFile(historischeSpiegelPath, 'utf-8'),
      fs.readFile(previewEnginePath,      'utf-8'),
    ]);
  } catch (err) {
    console.error('[Lumivey] Kennisdocumenten laden mislukt:', err.message);
    return res.status(500).json({
      error:  'Kennisdocumenten konden niet worden geladen.',
      detail: err.message,
    });
  }

  // ── Scraper-fallback instructie ──────────────────────────────────────────
  //
  // Wanneer een URL is gedetecteerd maar de scraper heeft gefaald:
  // Lumivey mag NIET doen alsof de website bekeken is.
  // Lumivey vraagt rustig om een korte omschrijving.
  const scraperFallbackInstruction = scraperFailed
    ? `
De bezoeker heeft een website-adres gedeeld (${detectedUrl}), maar die website kon op dit moment niet worden gelezen.
Doe NIET alsof je de website al hebt bekeken.
Zeg rustig dat je de website nu even niet kunt lezen.
Vraag of de bezoeker kort kan vertellen wat erop staat dat niet meer klopt, of wat hij wil aanpassen.
Gebruik geen technische foutmelding.
`.trim()
    : '';

  // ── System prompt samenstellen ───────────────────────────────────────────
  //
  // Volgorde: Brain (leidend) → Agent → Exit → Historische Spiegel → Preview
  //           → Website-bewijs (indien beschikbaar) → gedragsinstructies

  const systemPrompt = `
# Lumivey — Operationele keten

Je bent Lumivey.

Je werkt uitsluitend binnen de grenzen van de onderstaande documenten.
Voeg geen nieuwe kennis toe. Herschrijf geen principes. Handel niet buiten deze documenten.

Belangrijk:
Gebruik interne termen nooit richting de bezoeker.
Dus niet noemen: IST, SOLL, Discovery, Preview, Historische Spiegel, Veranderopdracht, Bewijsbeeld, Toekomstbeeld, Completeness Engine, LP-regels.
Deze termen zijn alleen intern.

Voor de bezoeker spreek je rustig, kort en concreet.
Geen procesuitleg.
Geen technische beloften.
Geen belofte dat je een website analyseert als er nog geen URL is ontvangen.
Vraag geen informatie die al gegeven is of redelijk afleidbaar is.

De keten is intern:
Discovery → Veranderopdracht → Historische Spiegel → Preview.

---

## DEEL 1 — Lumivey Brain v0.1
## Bron: brain/brain-v0.1.md
## Rol: Operationele kennislaag — leidend

${brainContent}

---

## DEEL 2 — Lumivey Discovery Agent v0.8
## Bron: agents/discovery-agent-v0.8.md
## Rol: Gesprekslaag — begrijpt wat de bezoeker meebrengt

${discoveryAgentContent}

---

## DEEL 3 — Discovery Exit & Preview Entry v1.0
## Bron: docs/discovery-exit-preview-entry-v1.0.md
## Rol: Overdrachtslaag — bepaalt wanneer Discovery klaar is

${discoveryExitContent}

---

## DEEL 4 — Historische Spiegel v1.0
## Bron: docs/historische-spiegel-v1.0.md
## Rol: Bewijslaag — begrijpt bestaande assets wanneer die beschikbaar zijn

${historischeSpiegelContent}

---

## DEEL 5 — Preview Engine v1.0
## Bron: docs/preview-engine-v1.0.md
## Rol: Toonlaag — laat een eerste herkenbare richting ontstaan

${previewEngineContent}

${evidenceSection || ''}

---

${scraperFallbackInstruction ? scraperFallbackInstruction + '\n\n---\n' : ''}

Handel nu als Lumivey binnen deze keten.

Als de bezoeker een bestaande website noemt maar nog geen URL geeft:
vraag rustig om de website.

Als de bezoeker een URL geeft:
${evidenceSection
  ? 'Website-bewijs is beschikbaar in DEEL 6. Gebruik de Historische Spiegel om dit bewijs te waarderen op basis van de actieve veranderopdracht. Stel geen vragen over informatie die al in het bewijs staat. Doe geen uitspraken over wat er aangepast of verwijderd moet worden zonder koppeling aan wat de bezoeker zelf heeft aangegeven.'
  : 'erken ontvangst en geef aan dat die website het startpunt wordt voor de volgende stap. Doe niet alsof je de website al hebt bekeken, tenzij de inhoud daadwerkelijk in het gesprek staat.'
}

Als voldoende duidelijk is wat er moet veranderen:
stop met doorvragen en maak de volgende stap concreet in gewone ondernemerstaal.
`.trim();

  // ── Logging ──────────────────────────────────────────────────────────────

  console.log(
    `[Lumivey] berichten ontvangen: ${allMessages.length} | ` +
    `doorgestuurd naar OpenAI: ${messagesForOpenAI.length} | ` +
    `URL: ${detectedUrl || 'geen'} | ` +
    `bewijs: ${evidenceSection ? 'ja' : scraperFailed ? 'mislukt' : 'n.v.t.'} | ` +
    `system prompt: ~${Math.round(systemPrompt.length / 4)} tokens (schatting)`
  );

  // ── OpenAI aanroepen ─────────────────────────────────────────────────────

  let openAIResponse;

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

    openAIResponse = await response.json();

  } catch (err) {
    console.error('[Lumivey] Netwerkfout OpenAI:', err.message);
    return res.status(500).json({
      error:  'Verbinding met OpenAI mislukt.',
      detail: err.message,
    });
  }

  // ── Antwoord teruggeven ──────────────────────────────────────────────────

  const reply = openAIResponse?.choices?.[0]?.message;

  if (!reply) {
    return res.status(500).json({ error: 'Geen antwoord ontvangen van OpenAI.' });
  }

  return res.status(200).json({ reply: reply.content });
};
