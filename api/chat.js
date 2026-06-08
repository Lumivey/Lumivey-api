// chat.js — Lumivey API handler
// Vercel serverless function (Node.js — CommonJS)
//
// Wat dit bestand doet:
// 1. Accepteert berichten in twee formaten:
//    a. { "message": "..." }         — enkelvoudig tekstveld (Squarespace)
//    b. { "messages": [...] }        — array met gesprekshistorie (toekomstig gebruik)
// 2. Laadt brain/brain-v0.1.md als operationele kennislaag
// 3. Laadt agents/discovery-agent-v0.2.md als uitvoerende gedragslaag
// 4. Voegt beide samen tot één system prompt
// 5. Stuurt het bericht naar OpenAI gpt-4o
// 6. Geeft het antwoord terug aan de bezoeker

const fs   = require('fs/promises');
const path = require('path');

module.exports = async function handler(req, res) {

  // ── CORS-headers ─────────────────────────────────────────────
  // Staat verzoeken toe vanuit elke origin (inclusief Squarespace).
  // Pas de origin aan naar jouw Squarespace-domein voor extra beveiliging.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Preflight-verzoek van de browser afhandelen
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ── Alleen POST-verzoeken accepteren ─────────────────────────
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Gebruik POST.' });
  }

  // ── Bericht(en) van de bezoeker uitlezen ─────────────────────
  //
  // Formaat A — Squarespace stuurt een enkel tekstveld:
  //   { "message": "Ik heb een kapperszaak in Utrecht" }
  //
  // Formaat B — toekomstig gebruik met gesprekshistorie:
  //   { "messages": [
  //       { "role": "user",      "content": "Hallo" },
  //       { "role": "assistant", "content": "Goedemiddag..." },
  //       { "role": "user",      "content": "Ik heb een kapperszaak" }
  //     ]
  //   }
  //
  // De code detecteert automatisch welk formaat binnenkomt.

  const body = req.body || {};
  let messagesForOpenAI;

  if (typeof body.message === 'string' && body.message.trim().length > 0) {
    // ── Formaat A: enkelvoudig tekstveld (Squarespace) ──────────
    // Zet het enkelvoudige bericht om naar het OpenAI-berichtenformaat.
    messagesForOpenAI = [
      { role: 'user', content: body.message.trim() }
    ];

  } else if (Array.isArray(body.messages) && body.messages.length > 0) {
    // ── Formaat B: gespreksarray ─────────────────────────────────
    // Valideer elk bericht: elk item moet een role en content hebben.
    const isValid = body.messages.every(
      (m) => typeof m.role === 'string' && typeof m.content === 'string'
    );
    if (!isValid) {
      return res.status(400).json({
        error: 'Elk bericht in "messages" moet een "role" en "content" hebben.',
      });
    }
    messagesForOpenAI = body.messages;

  } else {
    // ── Geen bruikbaar bericht gevonden ─────────────────────────
    return res.status(400).json({
      error: 'Geen bericht ontvangen. Stuur { "message": "..." } of { "messages": [...] }.',
    });
  }

  // ── Kennisdocumenten laden ────────────────────────────────────
  // Beide bestanden worden parallel geladen voor snelheid.
  // process.cwd() wijst naar de root van het Vercel-project.
  const brainPath          = path.join(process.cwd(), 'brain',  'brain-v0.1.md');
  const discoveryAgentPath = path.join(process.cwd(), 'agents', 'discovery-agent-v0.3.md');

  let brainContent;
  let discoveryAgentContent;

  try {
    [brainContent, discoveryAgentContent] = await Promise.all([
      fs.readFile(brainPath,          'utf-8'),
      fs.readFile(discoveryAgentPath, 'utf-8'),
    ]);
  } catch (err) {
    console.error('Fout bij laden kennisdocumenten:', err.message);
    return res.status(500).json({
      error: 'Kennisdocumenten konden niet worden geladen.',
      detail: err.message,
    });
  }

  // ── System prompt samenstellen ───────────────────────────────
  // Deel 1: Lumivey Brain v0.1     — operationele kennislaag (leidend)
  // Deel 2: Discovery Agent v0.2   — uitvoerende gedragslaag
  //
  // De volgorde is bewust: Brain gaat voor Agent, conform de
  // Werkdocument → Brain → Afdelingen → Software hiërarchie (OB-4).
  const systemPrompt = `
# Lumivey — Operationele kennislaag en gedragslaag

Je bent Lumivey. Je werkt uitsluitend binnen de grenzen van de onderstaande twee documenten.
Voeg geen nieuwe kennis toe. Herschrijf geen principes. Handel niet buiten deze documenten.

---

## DEEL 1 — Lumivey Brain v0.1
## Bron: brain/brain-v0.1.md
## Rol: Operationele kennislaag — leidend boven alle andere documenten

${brainContent}

---

## DEEL 2 — Lumivey Discovery Agent v0.3
## Bron: agents/discovery-agent-v0.3.md
## Rol: Uitvoerende gedragslaag — werkt binnen de grenzen van Brain v0.1

${discoveryAgentContent}

---

Handel nu als Discovery Agent v0.3, binnen de grenzen van Brain v0.1.
`.trim();

  // ── OpenAI API aanroepen ──────────────────────────────────────
  // Model: gpt-4o
  //   - Beste keuze voor het nauwkeurig volgen van een uitgebreide system prompt
  //   - gpt-4o-mini is goedkoper maar minder betrouwbaar op Brain-conformiteit
  //
  // Temperature: 0.3
  //   - Lage waarde zorgt voor consistente, voorspelbare Discovery-antwoorden
  //   - Hogere waarden introduceren variatie die niet wenselijk is voor Lumivey
  //
  // De API-sleutel staat in een Vercel environment variable: OPENAI_API_KEY
  // Sla nooit een sleutel op in de code zelf.

  let openAIResponse;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model:       'gpt-4o',
        temperature: 0.3,
        messages: [
          // Stap 1: de volledige Brain + Agent als system prompt
          { role: 'system', content: systemPrompt },
          // Stap 2: het bericht of de gesprekshistorie van de bezoeker
          ...messagesForOpenAI,
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('OpenAI API fout:', response.status, errorBody);
      return res.status(502).json({
        error:  'OpenAI API gaf een fout terug.',
        status: response.status,
      });
    }

    openAIResponse = await response.json();

  } catch (err) {
    console.error('Netwerkfout bij aanroepen OpenAI:', err.message);
    return res.status(500).json({
      error:  'Verbinding met OpenAI mislukt.',
      detail: err.message,
    });
  }

  // ── Antwoord teruggeven aan de bezoeker ───────────────────────
  // Geef alleen het antwoord van het model terug.
  // Interne data (system prompt, tokens, model) wordt nooit meegestuurd.
  const reply = openAIResponse?.choices?.[0]?.message;

  if (!reply) {
    return res.status(500).json({ error: 'Geen antwoord ontvangen van OpenAI.' });
  }

  // Stuur het antwoord terug in hetzelfde formaat als het binnenkomende verzoek:
  // - Formaat A (Squarespace): { "reply": "..." }         — simpel tekstveld
  // - Formaat B (array):       { "message": { ... } }     — volledig berichtobject
  if (typeof body.message === 'string') {
    return res.status(200).json({ reply: reply.content });
  } else {
    return res.status(200).json({ message: reply });
  }
};
