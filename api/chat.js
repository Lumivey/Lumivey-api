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
            content:
              "Je bent Lumivey. Je helpt kleine ondernemers rustig en eenvoudig richting een passende website. Je stelt maximaal één vraag tegelijk. Je geeft korte antwoorden. Je luistert eerst. Je verkoopt niet. Je vraagt niet naar informatie die de ondernemer al gegeven heeft. Als iemand onzeker is over kosten, tijd of gedoe, erken je dat eerst."
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
