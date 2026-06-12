# Conformiteitscontrole — Discovery Exit & Preview Entry v1.0

| Veld | Waarde |
|---|---|
| **Document gecontroleerd** | Discovery Exit & Preview Entry v1.0 |
| **Gecontroleerd tegen** | Brain v0.1 + Werkdocument V6 + Discovery Agent v0.7 |
| **Datum** | 2026 |
| **Eigenaar** | Ruud Kroonen |

---

## Legenda

| Status | Betekenis |
|---|---|
| ✅ Conform | Element stemt overeen met brondocument. |
| 🔵 Verduidelijkt | Explicieter of uitgebreider dan brondocument. Inhoud consistent. |
| 🆕 Koppeling gelegd | Element verbindt twee bestaande principes die eerder los stonden. Geen nieuwe architectuur. |
| ⚠️ Mogelijke afwijking | Wijkt af of vereist verificatie. |

---

## Deel 1 — Conformiteit met Brain v0.1

| Brain v0.1-element | V1.0-sectie | Status | Toelichting |
|---|---|---|---|
| OB-1 — Discovery Engine, geen intake | Secties 1, 3 | ✅ Conform | Veranderopdracht bevestigt dat Discovery geen informatie verzamelt als doel maar een object produceert. Versterkt OB-1. |
| OB-2 — Stop is geldige uitkomst | Sectie 4 Uitkomst C | ✅ Conform | Stop expliciet beschreven als formele uitkomst met trigger en vervolgactie. |
| Evidence First — bewijs verdient voorrang | Sectie 7 (eerste Preview-handeling) | 🆕 Koppeling gelegd | Evidence First was beschreven als Discovery-principe. V1.0 koppelt het expliciet aan de eerste Preview-handeling: URL-analyse vóór nieuwe vragen. |
| Herkenning vóór volledigheid | Sectie 3 (voorwaarden veranderopdracht) | 🔵 Verduidelijkt | Principe bestaat. V1.0 operationaliseert het als stopcriterium: veranderopdracht compleet bij herkenning bevestigd, niet bij volledigheid bereikt. |
| LSD — Samenvatten | Secties 3, 5 | 🆕 Koppeling gelegd | LSD-samenvatten was beschreven als gesprekshandeling. V1.0 koppelt de S expliciet aan het completeness-evaluatiemoment: bevestiging van de spiegel triggert de Completeness Engine. |
| Visitor First — stop wanneer doel bereikt | Sectie 3, 4, 5 | 🔵 Verduidelijkt | Principe bestaat. V1.0 definieert formeel wanneer het doel bereikt is: veranderopdracht compleet. |
| Completeness Engine als zekerheidsmonitor | Sectie 3 (relatie Completeness Engine) | 🔵 Verduidelijkt | Completeness Engine krijgt tweede functie: actieve trigger op spiegel-bevestiging. Eerste functie (zekerheidsmonitor) ongewijzigd. |
| LP34 — Discovery-uitgangscontrole | Sectie 3 (relatie LP34) | 🔵 Verduidelijkt | LP34-criteria ongewijzigd. V1.0 beschrijft LP34 als actieve trigger i.p.v. passieve poort. Dit is een operationele aanscherping, geen wijziging van de criteria. |

---

## Deel 2 — Conformiteit met Werkdocument V6

| V6-element | V1.0-sectie | Status | Toelichting |
|---|---|---|---|
| H12 — Eerste taak Discovery = herkennen | Sectie 1 | ✅ Conform | Veranderopdracht is de output van herkenning — consistent met H12. |
| H13 — Discovery-procesmodel stap 5-6 | Secties 3, 4, 5 | 🔵 Verduidelijkt | Stap 5 (onzekerheid bewaken) en 6 (uitkomstbesluit) zijn in V1.0 uitgewerkt als actieve trigger i.p.v. passief. |
| H15 — IST → SOLL als doorlopende leeshouding | Secties 1, 2, 3 | 🆕 Koppeling gelegd | IST → SOLL was beschreven als leeshouding. V1.0 beschrijft wat die leeshouding produceert: de veranderopdracht. Directe formalisering. |
| H24 — Completeness Engine | Sectie 3 | 🔵 Verduidelijkt | Onzekerheidsmonitor ongewijzigd. Actieve evaluatiefunctie toegevoegd. |
| H27 — Preview Checklist | Sectie 2 (optioneel/niet-nodig) | 🔵 Verduidelijkt | Preview Checklist beschrijft verrijkingsvinkjes. V1.0 maakt onderscheid tussen verplicht voor veranderopdracht vs. optioneel voor Preview-verrijking. |
| H28 — Preview als uitkomst en als instrument | Sectie 4 (Uitkomst A en B) | ✅ Conform | Beide functies overgenomen. Trigger voor elk uitkomsttype beschreven. |
| H29 — Samenvatting vóór Preview | Sectie 5 (overdrachtsmoment) | 🆕 Koppeling gelegd | H29 beschrijft de verplichte samenvatting. V1.0 beschrijft de veranderopdracht als het object dat die samenvatting bevat en activeert. |
| H33 — Stopregels | Sectie 4 (Uitkomst C, D, E) | 🔵 Verduidelijkt | Stopregels ongewijzigd. V1.0 voegt Uitkomst E (onvoldoende duidelijk) toe als formele stop-uitkomst die eerder niet benoemd was. |
| H39 — Gespreksgeheugen | Sectie 5 (overdracht) | ✅ Conform | Gespreksgeheugen is het archief. De veranderopdracht is de essentie. Beide bestaan — ze zijn verschillende objecten. |
| H41 — Visitor First | Secties 3, 4 | ✅ Conform | "Stop wanneer het doel bereikt is" is de Visitor First-grondslag voor het stoppen van Discovery. |
| H42 — Quiet Web | Sectie 4 (Uitkomst E, Uitkomst C) | ✅ Conform | Stop zonder website, stop bij onvoldoende duidelijkheid — beide consistent met Quiet Web. |

---

## Deel 3 — Conformiteit met Discovery Agent v0.7

| Agent v0.7-element | V1.0-sectie | Status | Toelichting |
|---|---|---|---|
| Openingsscan | Procesoverzicht | ✅ Conform | Ongewijzigd onderdeel van het Discovery-proces. |
| Actief signaalgeheugen | Procesoverzicht | ✅ Conform | Ongewijzigd. |
| ABCD-vraagrechtvaardiging | Secties 2, 3 | ✅ Conform | Na de veranderopdracht zijn ABCD-vragen over IST/SOLL niet meer van toepassing — de verzamelfase is gesloten. |
| Spiegeldrempel | Secties 3, 5 | 🆕 Koppeling gelegd | Spiegeldrempel triggert de spiegel. V1.0 beschrijft wat er na de bevestiging van de spiegel gebeurt: de Completeness Engine evalueert de veranderopdracht. De koppeling spiegeldrempel → Completeness Engine was eerder niet beschreven. |
| LP31–LP35 | Secties 3, 4 | ✅ Conform | Alle LP's ongewijzigd van kracht. |
| Geldige Discovery-uitkomsten | Sectie 4 | 🔵 Verduidelijkt | V0.7 beschreef drie uitkomsten. V1.0 beschrijft vijf uitkomsten met triggers en vervolgacties. Uitkomst E (onvoldoende duidelijk) is nieuw beschreven — was eerder niet formeel benoemd maar logisch aanwezig. |

---

## Deel 4 — Zijn er nieuwe principes geïntroduceerd?

**Nee.**

Controle per nieuw element:

| Nieuw element V1.0 | Is het nieuw? | Herleiding |
|---|---|---|
| Veranderopdracht als object | Nee | Directe formalisering van IST → SOLL (V6 H15) + LSD-samenvatten (V6 H19) |
| Actieve Completeness Engine-trigger | Nee | Completeness Engine bestaat (V6 H24). Actieve trigger is operationalisering van LP34 + "stop wanneer doel bereikt" |
| Overdrachtsmoment | Nee | Verplichte samenvatting vóór Preview bestaat (V6 H29). Overdrachtsmoment is formalisering van dat moment |
| Vijfde uitkomst (onvoldoende duidelijk) | Nee | Logisch aanwezig in combinatie van OB-2 (stop is geldige uitkomst) + Visitor First (geen druk) + Herkenning vóór volledigheid |
| URL als eerste Preview-handeling | Nee | Evidence First + Fast Track (V6 H18) + Historische Spiegel |

**Conclusie:** V1.0 introduceert geen nieuwe architectuur. Het legt de koppeling tussen zes bestaande principes die eerder elk voor zichzelf beschreven waren maar nooit als keten waren geformaliseerd.

---

## Deel 5 — Mogelijke afwijkingen

**Geen architectuurafwijkingen aangetroffen.**

Twee implementatiepunten ter verificatie:

| Punt | Toelichting |
|---|---|
| Completeness Engine als actieve trigger | V6 H24 beschrijft de Completeness Engine als monitor. V1.0 beschrijft haar als actieve trigger op het moment van spiegel-bevestiging. Dit is een operationele aanscherping. Aanbeveling: verifieer of dit een wijziging van V6 H24 vereist of beschouwd kan worden als operationalisering zonder wijziging van het principe. |
| Uitkomst E — Onvoldoende duidelijk | V6 en Discovery Agent v0.7 beschrijven drie uitkomsten: Preview, Stop, Doorverwijzing. Uitkomst E is een subcategorie van Stop. Aanbeveling: bij de volgende V6-update Uitkomst E formeel opnemen in H12 (geldige uitkomsten) en H33 (stopregels). |

---

## Samenvatting

| Categorie | Aantal | Percentage |
|---|---|---|
| ✅ Conform | 11 | 46% |
| 🔵 Verduidelijkt | 9 | 37% |
| 🆕 Koppeling gelegd | 5 | 21% |
| ⚠️ Mogelijke afwijking | 0 | 0% |

**Conclusie:** Discovery Exit & Preview Entry v1.0 is volledig conform Brain v0.1, Werkdocument V6 en Discovery Agent v0.7. Er zijn geen nieuwe principes geïntroduceerd. Het document formaliseert de keten van bestaande principes die de overgang Discovery → Preview beschrijft — een keten die impliciet aanwezig was maar nog nooit als geheel was neergeschreven.

---

*Lumivey — `docs/discovery-exit-preview-entry-v1.0-conformiteit.md` — 2026*
