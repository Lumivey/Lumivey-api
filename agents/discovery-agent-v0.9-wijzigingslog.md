# Discovery Agent v0.8 → v0.9 — Wijzigingslog

| Veld | Waarde |
|---|---|
| **Van** | Discovery Agent v0.8 |
| **Naar** | Discovery Agent v0.9 |
| **Type** | Gerichte correctieronde — geen herontwerp |
| **Bewijsbasis** | Vijf simulaties: hovenier, diabetespedicure, stichting, sceptische ondernemer, snackbarhouder |
| **Sturend principe** | LW05 — Herkenning Eerst (Lumivey Wetten v1.0) |
| **Niet aangepast** | Discovery-filosofie, Discovery-doel, Discovery Signals Framework, Preview Threshold, Governance, Lumivey Wetten, Kompas |

---

## Samenvatting

Drie gerichte correcties, elk gekoppeld aan een concreet simulatieprobleem. Geen van de drie wijzigt bestaand gedrag dat al correct werkte (LP28, één-vraag-regel, LP34/Discovery Exit blijven exact zoals in v0.8). Alle drie zijn toevoegingen aan de output-controle (sectie 8) en aan Sectie 0 (Kernregels).

---

## Wijziging 1 — Logische uitsluiting van vragen (nieuw: sectie 1D)

**Probleem:** LP26 voorkomt herhaling van *bevestigde* informatie. Het dekt niet het geval waarin informatie nooit letterlijk bevestigd is, maar wel logisch volgt uit een eerder signaal — zoals een starter die zegt geen website te hebben, waarna alsnog naar de URL wordt gevraagd.

**Wijziging:**
- Nieuwe kernregel 11 (Sectie 0): geen vraag naar logisch onmogelijke of reeds-prijsgegeven informatie.
- Nieuwe sectie 1D met definitie, voorbeeldtabel en onderscheid t.o.v. LP26.
- Output-controle (sectie 8) uitgebreid met stap 4: logische-uitsluiting-controle.
- Nieuw risico in sectie 14: "Vraag naar logisch uitgesloten informatie."
- Nieuw scenario 12 in sectie 15.

**Niet gewijzigd:** LP26 zelf, de bestaande output-controle stappen 1–3.

---

## Wijziging 2 — Signal Reflection (nieuw: sectie 1E)

**Probleem:** Betekenisvolle nevensignalen (pedicure: "Mijn moeder en mijn oma staan op wachtlijsten", hovenier: "Maar wel op mijn manier", schilder: "Heb ik eigenlijk wel een website nodig?") werden in simulaties wel intern verwerkt, maar niet bewust erkend in het gesprek. Dit is exact het patroon dat het Discovery Signals Framework (hoofdstuk 4, "gemiste signalen") beschrijft.

**Wijziging:**
- Nieuwe kernregel 12 (Sectie 0): betekenisvolle nevensignalen worden kort teruggespiegeld, niet alleen geregistreerd.
- Nieuwe sectie 1E met definitie, voorbeeldtabel (verboden waardering vs. correcte erkenning) en plaats in de beurtvolgorde.
- Output-controle uitgebreid met stap 6: Signal Reflection-controle.
- Nieuw risico in sectie 14: "Gemiste signaalreflectie."
- Nieuw scenario 13 in sectie 15.

**Belangrijk architecturaal punt:** deze sectie definieert geen nieuwe signaaltypen. Ze verwijst naar de bestaande signaaltypen uit het Discovery Signals Framework v0.1 (drijfveer-, ambitie-, vakmanschaps-, verbindings-, legitimatie-, zelfovertuigings-, grenssignaal). Een eerste versie van deze sectie gebruikte per ongeluk een eigen losse lijst van begrippen uit de opdrachttekst — dat is gecorrigeerd vóór oplevering, omdat het Framework zelf expliciet stelt dat signalen die in Discovery worden "opgenomen" als eigen classificatie, vervormen tot gedragsregels en hun karakter als kennis over de mens verliezen.

**Niet gewijzigd:** LP28 (terugspiegelen mag nooit een waarderende zin worden), sectie 4 (Actief signaalgeheugen, dat het dominante signaal betreft — Signal Reflection gaat over nevensignalen, niet het dominante signaal).

---

## Wijziging 3 — Signaalprioriteit (nieuw: sectie 1F)

**Probleem:** Geen van de bestaande regels (ABCD, keuzeregel bij twee vragen) maakte expliciet dat herkenningssignalen voorrang hebben op administratieve informatie (NAW, URL, openingstijden, KVK) wanneer beide op een gegeven moment relevant lijken.

**Wijziging:**
- Nieuwe sectie 1F: herkenningssignalen (zoals gedefinieerd in het Discovery Signals Framework, met de rangorde uit Framework-hoofdstuk 5) krijgen voorrang op administratieve informatie binnen de bestaande keuzeregel van sectie 1B.
- Output-controle uitgebreid met stap 5: Signaalprioriteit-controle.
- Nieuw risico in sectie 14: "Administratieve vraag verdringt openstaand signaal."

**Niet gewijzigd:** ABCD (sectie 6), de keuzeregel zelf (sectie 1B) — deze sectie voegt een wegingsfactor toe, ze vervangt de regel niet.

---

## Wijziging 4 — Herkenningstoets (nieuw: output-controle stap 7)

**Probleem:** Geen van de bestaande controles vroeg expliciet of de output begrip toont, los van of de output voldoende informatie verzamelt.

**Wijziging:**
- Output-controle (sectie 8) uitgebreid met stap 7: vóór elke output de impliciete vraag stellen "heb ik voldoende begrip getoond?" in plaats van uitsluitend "heb ik voldoende informatie verzameld?".

**Niet gewijzigd:** dit is een interne controlestap, geen zichtbare gedragsverandering los van wijziging 1–3. De herkenningstoets is het procedurele vangnet dat de andere drie wijzigingen samenbrengt.

---

## Overige wijzigingen

- Header bijgewerkt: bron uitgebreid met Lumivey Wetten v1.0, aanleiding herschreven naar de vijf nieuwe simulaties.
- Sectie 16 (Relatie met Werkdocument en Brain) uitgebreid met Lumivey Wetten v1.0 in de hiërarchie, en een expliciete bepaling dat Discovery Agent het Signals Framework toepast maar niet herdefinieert.
- Verboden-gedrag-tabel (sectie 10) uitgebreid met drie nieuwe regels corresponderend met wijziging 1–3.

## Niet gewijzigd (expliciet, conform Opdracht 5)

- Discovery-filosofie en -doel (sectie 1)
- Verantwoordelijkheden (sectie 2)
- Openingsscan (sectie 3)
- Actief signaalgeheugen voor het dominante signaal (sectie 4)
- Spiegeldrempel (sectie 5)
- ABCD-vraagrechtvaardiging (sectie 6)
- Bestaande asset + veranderingssignaal (sectie 7)
- LP28, één-vraag-regel, LP34/Discovery Exit (secties 1A, 1B, 1C) — alleen referenties toegevoegd, geen inhoud gewijzigd
- Discovery Signals Framework v0.1 (los document, alleen toegepast, niet aangepast)
- Lumivey Wetten v1.0 (los document, alleen aangehaald)
- Lumivey Kompas (los document, niet aangeraakt)
- Governance Model (niet aangeraakt)
