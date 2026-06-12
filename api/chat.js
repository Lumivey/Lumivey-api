// chat.js — Lumivey API handler
// Vercel serverless function (Node.js — CommonJS)
//
// Laadt:
// 1. brain/brain-v0.1.md
// 2. agents/discovery-agent-v0.7.md
// 3. docs/discovery-exit-preview-entry-v1.0.md

const fs = require('fs/promises');
const path = require('path');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Gebruik POST.' });
  }

  const body = req.body || {};
  let messagesForOpenAI;

  if (typeof body.message === 'string' && body.message.trim().length > 0) {
    messagesForOpenAI = [
      { role: 'user', content: body.message.trim() }
    ];
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

    messagesForOpenAI = body.messages;
  } else {
    return res.status(400).json({
      error: 'Geen bericht ontvangen. Stuur { "message": "..." } of { "messages": [...] }.',
    });
  }

  const brainPath = path.join(process.cwd(), 'brain', 'brain-v0.1.md');
  const discoveryAgentPath = path.join(process.cwd(), 'agents', 'discovery-agent-v0.7.md');
  const discoveryExitPath = path.join(
    process.cwd(),
    'docs',
    'discovery-exit-preview-entry-v1.0.md'
  );

  let brainContent;
  let discoveryAgentContent;
  let discoveryExitContent;

  try {
    [brainContent, discoveryAgentContent, discoveryExitContent] = await Promise.all([
      fs.readFile(brainPath, 'utf-8'),
      fs.readFile(discoveryAgentPath, 'utf-8'),
      fs.readFile(discoveryExitPath, 'utf-8'),
    ]);
  } catch (err) {
    console.error('Fout bij laden kennisdocumenten:', err.message);
    return res.status(500).json({
      error: 'Kennisdocumenten konden niet worden geladen.',
      detail: err.message,
    });
  }

  const systemPrompt = `
# Lumivey — Operationele kennislaag, gedragslaag en overdrachtslaag

Je bent Lumivey. Je werkt uitsluitend binnen de grenzen van de onderstaande drie documenten.
Voeg geen nieuwe kennis toe. Herschrijf geen principes. Handel niet buiten deze documenten.

---

## DEEL 1 — Lumivey Brain v0.1
## Bron: brain/brain-v0.1.md
## Rol: Operationele kennislaag — leidend boven alle andere documenten

${brainContent}

---

## DEEL 2 — Lumivey Discovery Agent v0.7
## Bron: agents/discovery-agent-v0.7.md
## Rol: Uitvoerende gedragslaag — werkt binnen de grenzen van Brain v0.1

${discoveryAgentContent}

---

## DEEL 3 — Discovery Exit & Preview Entry v1.0
## Bron: docs/discovery-exit-preview-entry-v1.0.md
## Rol: Overdrachtslaag — bepaalt wanneer Discovery klaar is en Preview begint

${discoveryExitContent}

---

Handel nu als Discovery Agent v0.7, binnen de grenzen van Brain v0.1.
Gebruik Discovery Exit & Preview Entry v1.0 om te bepalen wanneer Discovery klaar is, wanneer een veranderopdracht compleet is, en wanneer de overgang naar Preview moet worden ingezet.
`.trim();

  let openAIResponse;

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
      console.error('OpenAI API fout:', response.status, errorBody);
      return res.status(502).json({
        error: 'OpenAI API gaf een fout terug.',
        status: response.status,
      });
    }

    openAIResponse = await response.json();
  } catch (err) {
    console.error('Netwerkfout bij aanroepen OpenAI:', err.message);
    return res.status(500).json({
      error: 'Verbinding met OpenAI mislukt.',
      detail: err.message,
    });
  }

  const reply = openAIResponse?.choices?.[0]?.message;

  if (!reply) {
    return res.status(500).json({ error: 'Geen antwoord ontvangen van OpenAI.' });
  }

  return res.status(200).json({ reply: reply.content });
};
