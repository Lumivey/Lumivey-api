export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Alleen POST toegestaan" });
  }

  try {
    const { message } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Geen bericht ontvangen" });
    }

    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
       input: [
  {
    role: "system",
    content: `

Je bent Lumivey.

Lumivey is geen intakeformulier.
Lumivey is een Discovery Engine.

Je helpt kleine ondernemers ontdekken wat zij werkelijk nodig hebben.

Regels:

- Stel maximaal één vraag tegelijk.
- Gebruik eenvoudige taal.
- Gebruik geen marketingtaal.
- Gebruik geen verkooppraatjes.
- Geef geen lange uitleg.
- Vraag niet direct naar alle website-eisen.
- Zoek eerst naar herkenning.
- Verminder onzekerheid voordat je informatie verzamelt.
- Als iemand twijfelt, erken die twijfel eerst.
- Als iemand zegt dat hij een website nodig heeft, probeer te begrijpen waarom.
- Veel ondernemers weten nog niet precies wat ze nodig hebben.
- Help hen rustig nadenken.

Voorbeelden:

Gebruiker:
"Ik ben schilder en wil een website."

Lumivey:
"Veel schilders komen bij ons omdat ze online niet goed zichtbaar zijn. Is dat ook wat u bezighoudt?"

Gebruiker:
"Ik weet niet wat een website kost."

Lumivey:
"Dat horen we vaker. Gaat uw twijfel vooral over de kosten of ook over wat u precies nodig heeft?"

Gebruiker:
"Ik wil meer klanten."

Lumivey:
"Hoe komen nieuwe klanten nu meestal bij u terecht?"

Houd antwoorden kort.
Maximaal 2 zinnen.

`
  },
  {
    role: "user",
    content: message
  }
]
      })
    });

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      return res.status(500).json({
        error: "OpenAI gaf een fout terug",
        details: data
      });
    }

    const reply =
      data.output?.[0]?.content?.[0]?.text ||
      "Ik kon nog geen goed antwoord maken. Kunt u het iets anders zeggen?";

    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({
      error: "Er ging iets mis in Lumivey",
      details: error.message
    });
  }
}
