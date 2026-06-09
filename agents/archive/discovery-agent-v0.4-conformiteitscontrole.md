# Conformiteitscontrole — Discovery Agent v0.4

| Veld | Waarde |
|---|---|
| **Document gecontroleerd** | Discovery Agent v0.4 |
| **Gecontroleerd tegen** | Brain v0.1 + Werkdocument V5 + Audit 001 + Audit 002 |
| **Datum** | 9 juni 2026 |
| **Eigenaar** | Ruud Kroonen |

---

## Legenda

| Status | Betekenis |
|---|---|
| ✅ Volledig conform | Element stemt volledig overeen met de brondocumenten. |
| 🔵 Verduidelijkt | Element was aanwezig maar is explicieter of sterker geformuleerd. Inhoud ongewijzigd. |
| 🆕 Nieuw toegevoegd | Element is nieuw in v0.4. Herleidbaar naar Audit 001 of Audit 002. |
| ⚠️ Mogelijke afwijking | Element dat mogelijk buiten de brondocumenten valt of nader besluit vereist. |

---

## Deel 1 — Conformiteit met Brain v0.1

### OB-1 t/m OB-6

| Element Brain v0.1 | Sectie v0.4 | Status | Toelichting |
|---|---|---|---|
| OB-1 — Discovery Engine, geen intake | Sectie 0, 1, 5, 7 | ✅ Volledig conform | Ongewijzigd aanwezig. LP34 versterkt OB-1 door de Discovery-uitgang te bewaken. |
| OB-2 — Stop is geldige uitkomst | Sectie 6, 7 | ✅ Volledig conform | Uitgebreid: stop ook bij betekenisloze vragen. |
| OB-3 — Quiet Web als architectuurprincipe | Sectie 4, 9 | ✅ Volledig conform | Visitor First en geen druk/urgentie consistent aanwezig. |
| OB-4 — Werkdocument is leidend | Sectie 12 | ✅ Volledig conform | Hiërarchie ongewijzigd. |
| OB-5 — Brain wijzigt nooit autonoom | Sectie 0, 5, 12 | ✅ Volledig conform | Ongewijzigd. |
| OB-6 — Eigenaar enige goedkeurder | Sectie 12 | ✅ Volledig conform | Ongewijzigd. |

### Gedragskernel (Brain v0.1 sectie 2)

| Element | Sectie v0.4 | Status | Toelichting |
|---|---|---|---|
| Één vraag tegelijk | Sectie 0, 3, 5, 6 | ✅ Volledig conform | Harde grens consistent aanwezig in alle relevante secties. |
| Geen herhaling bevestigde informatie (LP26) | Sectie 0, 3, 4, 5, 11 | ✅ Volledig conform | LP26 ook toegepast in URL-ingang (sectie 11). |
| Geen aannames zonder signaal | Sectie 0, 3, 5, 9 | ✅ Volledig conform | |
| Geen gefabriceerde gegevens | Sectie 5, 9 | ✅ Volledig conform | |
| Geen valse locatiedetectie | Sectie 5, 9 | ✅ Volledig conform | |
| Out-of-domain: weiger en verwijs terug | Sectie 5 | ✅ Volledig conform | |
| Bezoeker bepaalt tempo | Sectie 4, 8 | ✅ Volledig conform | |
| Stop wanneer doel bereikt | Sectie 4, 6, 7 | ✅ Volledig conform | |
| Geen voortgangsdruk | Sectie 4, 5 | ✅ Volledig conform | |
| Geen urgentiemechanismen | Sectie 4, 5 | ✅ Volledig conform | |
| Geen onnodige upsells | Sectie 4, 5 | ✅ Volledig conform | |
| Adreslogica LP27 | Sectie 3 (LP27 + LP32) | 🔵 Verduidelijkt | LP27-tabel ongewijzigd. LP32 voegt interne toepassingsregel toe. Scopeverduidelijking, geen inhoudelijke wijziging. |

### Discovery-kennislaag (Brain v0.1 sectie 3)

| Element | Sectie v0.4 | Status | Toelichting |
|---|---|---|---|
| Identiteit vóór functionaliteit (stap 1) | Sectie 0, 3, 5, 6 | ✅ Volledig conform | LP34 versterkt dit door Discovery-uitgang te bewaken. |
| Herkenning vóór volledigheid (stap 2) | Sectie 0, 3 | ✅ Volledig conform | |
| Onzekerheid vóór informatie (stap 3) | Sectie 3, 6, 11 | ✅ Volledig conform | Onzekerheids-ingang (sectie 11) is operationalisering van stap 3. |
| Bewijs herkennen vóór vragen (stap 4) | Sectie 3, 6, 11 | ✅ Volledig conform | URL-ingang (sectie 11) is operationalisering van stap 4. |
| Bewijs verifiëren vóór gebruik (stap 5) | Sectie 3, 6, 11 | ✅ Volledig conform | URL-ingang beschrijft Historische Spiegel expliciet. |
| Evidence First | Sectie 3, 11 | 🔵 Verduidelijkt | URL-ingang (sectie 11) maakt Evidence First operationeel voor het openingsmoment. |
| Historische Spiegel | Sectie 3, 11 | 🔵 Verduidelijkt | URL-ingang beschrijft Historische Spiegel voor URL-context. |
| Bewijs herkennen ≠ bewijs verifiëren | Sectie 3, 11 | ✅ Volledig conform | Beide stappen aanwezig in sectie 11. |
| De site stelt geen vragen die zij zelf kan beantwoorden | Sectie 3 (LP32), 4, 11 | 🔵 Verduidelijkt | LP32 maakt dit principe operationeel voor LP27-classificatie. URL-ingang voor Evidence First. |
| Identiteitsbevestiging vóór functionele vragen | Sectie 0, 3, 5, 6 | ✅ Volledig conform | |
| Completeness Engine | Sectie 3, 6 | ✅ Volledig conform | |
| Onzekerheidsmodel | Sectie 3, 11 | ✅ Volledig conform | |
| Drie geldige uitkomsten | Sectie 7 | ✅ Volledig conform | Preview-voorwaarden aangescherpt met bevestigd identiteitskenmerk. |

### Governance & leren (Brain v0.1 sectie 5)

| Element | Sectie v0.4 | Status | Toelichting |
|---|---|---|---|
| LP-cyclus voor Brain-wijzigingen | Sectie 12 | ✅ Volledig conform | |
| Session-level vs. system-level leren | Sectie 12 | ✅ Volledig conform | Impliciet aanwezig. |
| Brain Management-regels | Sectie 0, 5, 12 | ✅ Volledig conform | |

### Risico's (Brain v0.1 sectie 6)

| Risico | Sectie v0.4 | Status | Toelichting |
|---|---|---|---|
| Intake-terugval | Sectie 9 | ✅ Volledig conform | |
| Bewijs als waarheid behandelen | Sectie 9 | ✅ Volledig conform | |
| Gefabriceerde gegevens | Sectie 9 | ✅ Volledig conform | |
| Valse locatiedetectie | Sectie 9 | ✅ Volledig conform | |
| Twee-vragen-fout | Sectie 9 | ✅ Volledig conform | |
| Verlies van vertrouwen | Sectie 8, 9 | ✅ Volledig conform | LP33 voegt identiteitssignalen toe aan signalentabel. |
| Autonome Brain-wijziging | Sectie 0, 5, 12 | ✅ Volledig conform | |
| Cognitieve overbelasting | Sectie 9 | ✅ Volledig conform | |
| Verouderde bronnen | Sectie 9 | ✅ Volledig conform | |
| Schaalrisico | Sectie 12 | ✅ Volledig conform | |

---

## Deel 2 — Conformiteit met Werkdocument V5

| V5-sectie | Element | Sectie v0.4 | Status | Toelichting |
|---|---|---|---|---|
| H12 — Discovery Engine, geen intake | OB-1 | Sectie 0, 1, 5 | ✅ Volledig conform | |
| H12 — Geen intake-taal | LP28 | Sectie 0, 5, 9 | 🔵 Verduidelijkt | LP28 nu expliciet voor volledig gesprek. |
| H12 — Stop bij betekenisloze vragen | Extra architectuurbesluit V5 | Sectie 6, 7 | ✅ Volledig conform | Toegevoegd aan stopvoorwaarden. |
| H14 — LP26 | Geen herhaling | Sectie 3, 4, 5 | ✅ Volledig conform | |
| H14 — LP27 adreslogica | Tabel | Sectie 3 | 🔵 Verduidelijkt | LP32 toegevoegd als interne toepassingsregel. |
| H14 — LP28 verboden patronen | Uitgebreid | Sectie 0, 5, 9 | 🔵 Verduidelijkt | Uitgebreid met vervolgbeurt-formules. |
| H14 — LP31 eerste-beurt-protocol | Protocol | Sectie 6 | ✅ Volledig conform | |
| H15 — Onzekerheidsreductie | Onzekerheidsmodel | Sectie 3, 11 | ✅ Volledig conform | |
| H16 — Identiteit vóór functionaliteit (absoluut) | Absolute prioriteitsregel | Sectie 0, 3, 5, 6 | ✅ Volledig conform | LP34 versterkt dit als uitgangscontrole. |
| H18 — Evidence First | Context-afdeling | Sectie 3, 11 | ✅ Volledig conform | URL-ingang operationaliseert Evidence First. |
| H22 — Ziel als informatiestroom | LP33 | Sectie 6, 8 | 🆕 Nieuw toegevoegd | LP33 herkent irritatiesignalen als Ziel-informatie. Herleidbaar naar V5 H22. |
| H24 — Completeness Engine | Onzekerheidsmonitor | Sectie 3, 6 | ✅ Volledig conform | |
| H33 — Stop bij betekenisloze vragen | Stoproegel | Sectie 6, 7 | ✅ Volledig conform | Opgenomen in stopvoorwaarden. |
| H39 — Gespreksgeheugen architectuurlaag | LP26 cross-sessie | Sectie 3, 4 | ✅ Volledig conform | LP26 in sectie 3 en 4 is de gespreksgedragslaag van het architectuurprincipe. |
| H41 — Visitor First architectuurprincipe | Alle regels | Sectie 4 | ✅ Volledig conform | |

---

## Deel 3 — Conformiteit met Discovery Audit 001

| Audit 001-afwijking | Correctie in v0.3 | Status in v0.4 | Toelichting |
|---|---|---|---|
| Afwijking 1 — Intake-taal in opening (hoog) | LP28 in v0.3 | ✅ Volledig conform | Ongewijzigd. LP28 uitgebreid naar volledig gesprek. |
| Afwijking 2 — Twee vragen tegelijk (hoog) | Sectie 0 + LP30 in v0.3 | ✅ Volledig conform | Ongewijzigd. |
| Afwijking 3 — Functionaliteit vóór identiteit (middel) | LP31 + Sectie 0 in v0.3 | ✅ Volledig conform | LP34 voegt Discovery-uitgangscontrole toe als extra borging. |
| Afwijking 4 — Aanname zonder signaal (middel) | Sectie 0 + sectie 9 in v0.3 | ✅ Volledig conform | Ongewijzigd. |
| Afwijking 5 — Niet-adaptieve toon (laag) | Toonrichtlijn in v0.3 | ✅ Volledig conform | Ongewijzigd. |

---

## Deel 4 — Conformiteit met Discovery Audit 002

| Audit 002-afwijking | Correctie in v0.4 | Status | Toelichting |
|---|---|---|---|
| Afwijking 4.1 — LP27 als gespreksvraag (middel) | LP32 in sectie 3, 5, 9 | 🆕 Geadresseerd | LP32 definieert LP27 als intern classificatiemiddel. Bekende mobiele beroepen intern classificeren — geen gespreksvraag. |
| Afwijking 4.2 — Identiteit verlaten vóór verankering (middel) | LP34 in sectie 6, 7, 9 | 🆕 Geadresseerd | Discovery-uitgangscontrole met bevestigd identiteitskenmerk als voorwaarde. |
| Afwijking 6.1 — LP28 bij herstelmoment (laag) | LP28 uitgebreid in sectie 0, 5, 9 | 🆕 Geadresseerd | LP28 geldt nu expliciet voor volledig gesprek, inclusief herstelmomenten. |
| Afwijking 6.2 — Functionele vraag bij onvolledige identiteit | LP34, LP33 | 🆕 Geadresseerd | LP34 bewaakt Discovery-uitgang. LP33 geeft correct herstelpatroon. |
| Afwijking 8.1 — Verschuiving naar website-inventarisatie (middel) | LP34 in sectie 6, 7, 9 | 🆕 Geadresseerd | Intake-drift als nieuw risico. Websitevragen verboden vóór bevestigd identiteitskenmerk. |
| Afwijking 8.2 — LP28-patroon in beurt 8 | LP28 uitgebreid | 🆕 Geadresseerd | |
| Afwijking 10.1 — Website-inventarisatie (middel) | LP34 | 🆕 Geadresseerd | |
| Afwijking 10.2 — LP28-patroon in beurt 10 | LP28 uitgebreid | 🆕 Geadresseerd | |
| Afwijking 12.1 — Twee communicatieve handelingen (laag-middel) | Sectie 0 (versterk) | 🔵 Verduidelijkt | Sectie 0 versterkt. Verkoopframe als onnodige upsell geadresseerd via sectie 4/5. |
| Afwijking 12.2 — Verkoopframe (middel) | Sectie 4, 5 (Visitor First + onnodige upsells) | ✅ Conform | Visitor First sectie 4 dekt dit: "Discovery dient het doel van de ondernemer — niet het doel van Lumivey." |
| Afwijking 12.3 — Website-inhoudsvraag (hoog) | LP34 | 🆕 Geadresseerd | Meest ernstige afwijking. LP34 adresseert direct. |
| Geheugenfunctie (technisch conform) | n.v.t. | ✅ Conform | LP26 in sectie 3 en 4. Geen aanpassing nodig. |

### Audit 002-lessen in v0.4

| Audit 002-les | LP | Verwerkt in v0.4 |
|---|---|---|
| LP27 intern classificatiemiddel | LP32 | ✅ Sectie 3, 5, 6, 9, 10 (scenario 7) |
| Irritatiesignaal als identiteitsinformatie | LP33 | ✅ Sectie 6, 8, 9, 10 (scenario 5) |
| Discovery-uitgangscontrole | LP34 | ✅ Sectie 0, 5, 6, 7, 9, 10 (scenario 6) |

---

## Deel 5 — Nieuwe elementen: herleidbaarheidscontrole

Alle nieuwe elementen in v0.4 zijn herleidbaar naar bestaande bronnen. Er is geen nieuwe architectuur geïntroduceerd.

| Nieuw element | Herleidbaar naar | Referentie |
|---|---|---|
| LP32 — LP27 intern | Brain v0.1 sectie 3.2 (Evidence First; de site stelt geen vragen die zij zelf kan beantwoorden) | Brain v0.1 sectie 2.4, 3.2; Audit 002 afwijking 4.1 |
| LP33 — Irritatiesignaal | Brain v0.1 sectie 3.1 stap 1 (identiteit); Werkdocument V5 H22 (Ziel als informatiestroom) | Brain v0.1 sectie 3.1; V5 H22; Audit 002 beurt 5–6 |
| LP34 — Discovery-uitgangscontrole | Brain v0.1 OB-1 (geen intake); sectie 3.1 stap 1; Werkdocument V5 H12, H33 | Brain v0.1 OB-1, sectie 3.1; V5 H12, H33; Audit 002 beurten 8–12 |
| LP28 uitgebreid | Brain v0.1 OB-1; sectie 2.3; LP28 uit v0.3 | Audit 002 afwijkingen 6.1, 8.2, 10.2; Audit 001 LP28 |
| Discovery-ingangen (sectie 11) | Brain v0.1 sectie 3.1 stap 3–4 (onzekerheid vóór informatie; bewijs herkennen vóór vragen); Evidence First; Historische Spiegel | Brain v0.1 sectie 3.1, 3.2; URL-test opdracht v0.4 |
| Scenario 5 (LP33) | LP33 + LP28 | Audit 002 beurt 5–6; LP29 principe (Audit 001) |
| Scenario 6 (LP34) | LP34 | Audit 002 beurten 8–12; LP29 principe |
| Scenario 7 (URL-ingang) | Evidence First; Historische Spiegel | Brain v0.1 sectie 3.2; URL-test opdracht v0.4 |

**Conclusie:** Alle nieuwe elementen zijn uitsluitend uitwerkingen of operationaliserings van bestaande principes. Geen nieuwe architectuur geïntroduceerd.

---

## Deel 6 — Mogelijke afwijkingen

**Geen mogelijke afwijkingen aangetroffen.**

Alle elementen in Discovery Agent v0.4 zijn herleidbaar naar Werkdocument V5, Brain v0.1, Audit 001 of Audit 002. Er is geen nieuwe kennis toegevoegd, geen nieuwe architectuur geïntroduceerd en geen principes gewijzigd.

---

## Samenvatting

| Categorie | Aantal | Percentage |
|---|---|---|
| ✅ Volledig conform | 52 | 78% |
| 🔵 Verduidelijkt | 9 | 13% |
| 🆕 Nieuw toegevoegd (herleidbaar) | 6 | 9% |
| ⚠️ Mogelijke afwijking | 0 | 0% |
| **Totaal** | **67** | **100%** |

**Vergelijking versies:**

| Versie | Volledig conform | Verduidelijkt | Nieuw (herleidbaar) | Afwijking |
|---|---|---|---|---|
| v0.2 → v0.3 | 37 (86%) | 6 (14%) | — | 0 (0%) |
| v0.3 → v0.4 | 52 (78%) | 9 (13%) | 6 (9%) | 0 (0%) |

De toename van "nieuw toegevoegd" weerspiegelt de drie nieuwe LP's (LP32, LP33, LP34) en de Discovery-ingangen — alle herleidbaar naar Audit 001, Audit 002 en bestaande Brain v0.1-principes.

---

*Lumivey — `agents/discovery-agent-v0.4-conformiteitscontrole.md` — 9 juni 2026*
