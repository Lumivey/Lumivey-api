# Wijzigingslog — Werkdocument V4 → V5

| Veld | Waarde |
|---|---|
| **Van** | Werkdocument V4.0 |
| **Naar** | Werkdocument V5.0 |
| **Type** | Consolidatie — geen nieuwe architectuur |
| **Bronnen** | V4 + Architectuurreview V5 + Brain v0.1 + Discovery Agent v0.3 + Discovery Audit 001 + LP26–LP31 |
| **Eigenaar** | Ruud Kroonen |
| **Datum** | 9 juni 2026 |

---

## Legenda

| Status | Betekenis |
|---|---|
| ✅ Ongewijzigd | Inhoud overgenomen zonder aanpassing. |
| 🔵 Bijgewerkt | Kern ongewijzigd. Terminologie, formuleringen of aanvullende details aangepast. |
| 🔴 Herschreven | Inhoud fundamenteel vervangen op basis van architectuurverschuiving. |
| 🔄 Verplaatst | Hoofdstuk verplaatst naar ander deel. Inhoud inhoudelijk bijgewerkt. |
| 🆕 Nieuw | Nieuw hoofdstuk zonder equivalent in V4. |
| ❌ Vervallen | Hoofdstuk vervalt. Inhoud is deels opgenomen in een ander hoofdstuk. |

---

## Overzicht per hoofdstuk

### DEEL I — STRATEGISCH NIVEAU

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H1 | H1 | Lumivey als digitale organisatie | 🔵 Bijgewerkt | Afdelingslijst bijgewerkt: LSD-afdeling vervangen door Discovery Engine als formele afdeling. |
| H2 | H2 | Quiet Web — Onderliggende filosofie | 🔵 Bijgewerkt | Verwijzing toegevoegd naar H42 (Quiet Web als architectuurprincipe). |
| H3 | H3 | Asset Management als fundament | ✅ Ongewijzigd | — |
| H4 | H4 | Lumivey Brain en Learning Loop | ✅ Ongewijzigd | — |
| H5 | H5 | Lumivey Brain Management | ✅ Ongewijzigd | — |
| H6 | H6 | Controlled Growth en leerstrategie | ✅ Ongewijzigd | — |
| H7 | H7 | Kwaliteitsfilosofie | ✅ Ongewijzigd | — |

### DEEL II — POSITIONERING & DOELGROEP

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H8 | H8 | Wat Lumivey is | 🔵 Bijgewerkt | Interne definitie aangevuld: Lumivey is intern een Discovery Engine. |
| H9 | H9 | Doelgroep en gebruikerstypes | 🔵 Bijgewerkt | 'Standaard intake' vervangen door 'Standaard Discovery'. Inhoud ongewijzigd. |
| H10 | H10 | Positionering | ✅ Ongewijzigd | — |
| H11 | H11 | Interne vs. externe communicatie | 🔵 Bijgewerkt | Interne kolom bijgewerkt: 'Lumivey is een Discovery Engine' toegevoegd als eerste interne definitie. |

### DEEL III — DISCOVERY ENGINE (was: INTAKE ENGINE)

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H12 | H12 | Discovery Engine als architectuurlaag (was: Intake Engine) | 🔴 Herschreven | Centrale architectuurverschuiving. Intake Engine vervangen door Discovery Engine conform Brain v0.1 OB-1. Drie geldige uitkomsten, geen intake-taal, OB-1, architectuurstatus formeel vastgelegd. |
| H13 | H13 | Discovery-procesmodel (was: Standaard workflow) | 🔴 Herschreven | Verplichte intake-workflow vervangen door formeel Discovery-procesmodel. Stap 0–6 inclusief drie lagen (hoofdproces, ondersteunende lagen, permanente systeemlagen). Stap 0 (Gespreksgeheugen activeren) is nieuw. |
| H14 | H14 | Adaptieve Discovery-voering (was: Adaptieve gespreksvoering) | 🔵 Bijgewerkt | Toonrichtlijn toegevoegd (LP31). Eerste-beurt-protocol toegevoegd (LP31). LP26 expliciet als gedragsregel. LP27 adreslogica opgenomen. LP28 verboden openingspatronen opgenomen. |
| H15 | H15 | Onzekerheidsreductie | 🔵 Bijgewerkt | Volledigheidskolom hernoemd: 'vervallen' i.p.v. 'oud'. Preview als instrument toegevoegd aan tweede rij van de vergelijkingstabel. Onzekerheidsmodel als sectie uitgebreid. |
| H16 | H16 | Identiteit vóór Functionaliteit | 🔵 Bijgewerkt | Herformulering van trigger-gebaseerd naar absolute prioriteitsregel. 'Niet alleen bij groeisignalen, maar altijd' expliciet vastgelegd. Triggers voor verdiepte identiteitscheck behouden als subcategorie. |

### DEEL IV — PROCESARCHITECTUUR

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H17 | H17 | Intentie-afdeling | ✅ Ongewijzigd | — |
| H18 | H18 | Context-afdeling & Asset Management | 🔵 Bijgewerkt | 'Fast Track' verwijst nu naar 'Discovery aanzienlijk verkorten' i.p.v. 'intake'. Inhoud ongewijzigd. |
| H19 | H19 | LSD-methode (was: LSD-engine) | 🔵 Bijgewerkt | Herpositionering: LSD is een gespreksmethode binnen de Discovery Engine, geen zelfstandige motor. Sectietitel bijgewerkt. Inleiding hergeschreven. |
| H20 | H20 | Interpretatie-afdeling | ✅ Ongewijzigd | — |
| H21 | H21 | Identiteit-afdeling | ✅ Ongewijzigd | — |
| H22 | H22 | Ziel als informatiestroom | 🔵 Bijgewerkt | Gebruik-tabel: 'LSD' herbenoemd naar 'Discovery (LSD)'. |
| H23 | H23 | Emotie als informatiestroom | 🔵 Bijgewerkt | Gebruik-tabel: 'LSD' herbenoemd naar 'Discovery (LSD)'. |
| H24 | H24 | Completeness Engine | 🔵 Bijgewerkt | Herdefiniëring als onzekerheidsmonitor formeel verankerd. Sectie 'Stop bij betekenisloze vragen' toegevoegd. Verwijzing naar H40 voor architectuurpositie. |
| H25 | H25 | Dossierbeheer | ✅ Ongewijzigd | — |
| H26 | H26 | Bedrijfsdossier als centrale waarheid | ✅ Ongewijzigd | — |

### DEEL V — PREVIEW & GOEDKEURING

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H27 | H27 | Preview Checklist | 🔵 Bijgewerkt | Noot toegevoegd: checklist geldt voor Preview als uitkomst. Preview als instrument kan eerder worden ingezet. |
| H28 | H28 | Preview — definitie en twee functies (was: WoW-preview) | 🔵 Bijgewerkt | Twee formeel onderscheiden previewfuncties uitgewerkt: Preview als uitkomst en Preview als instrument. Voorwaarden per functie beschreven. Architectuurprincipe formeel vastgelegd. |
| H29 | H29 | Samenvatting vóór Preview | 🔵 Bijgewerkt | Precisering: samenvatting verplicht vóór Preview als uitkomst. |
| H30 | H30 | Verrijkingsfase | ✅ Ongewijzigd | — |
| H31 | H31 | Preview Reflectiefase | ✅ Ongewijzigd | — |
| H32 | H32 | Approval Gate | ✅ Ongewijzigd | — |

### DEEL VI — OPERATIONELE PRINCIPES

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H33 | H33 | Stopregels | 🔵 Bijgewerkt | Stopsignaal 'verdere vragen voegen geen betekenis meer toe' toegevoegd als formele stoproegel. Relatie met architectuurprincipes (Quiet Web, Visitor First, Stop vóór volledigheid) uitgewerkt. |
| H34 | H34 | Buiten-Domein Afhandeling | ✅ Ongewijzigd | — |
| H35 | H35 | "Website niet nodig" als uitkomst | ✅ Ongewijzigd | — |
| H36 | ❌ | Gespreksgeheugen (operationeel) | ❌ Vervallen | Inhoud verplaatst naar H39 (Deel VII). Gespreksgeheugen is geen operationele functie maar een architectuurlaag. MVP-implementatiebeschrijving is opgenomen in H39. |
| H37 | H36 | Formulieren en gegevens | ✅ Ongewijzigd | Hernummerd door verplaatsing H36. |
| H38 | H37 | Need to have vs. nice to have | ✅ Ongewijzigd | Hernummerd. |
| H39 | H38 | Voor de schermen / achter de schermen | ✅ Ongewijzigd | Hernummerd. |

### DEEL VII — ARCHITECTUURLAGEN (nieuw)

| V4 equivalent | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H36 (gespreksgeheugen) | H39 | Gespreksgeheugen als architectuurlaag | 🆕 Nieuw | Verplaatst en fundamenteel uitgebreid. Gespreksgeheugen hergedefinieerd als architectuurlaag. Relaties met LP26, Discovery, bedrijfsdossier, Preview en Approval Gate beschreven. |
| H24 (completeness) | H40 | Completeness Engine — architectuurpositie | 🆕 Nieuw | Architectuurpositie van de Completeness Engine als permanente systeemlaag formeel vastgelegd. Complement op de operationele beschrijving in H24. |
| Verspreid in V4 | H41 | Visitor First als architectuurprincipe | 🆕 Nieuw | Visitor First was in V4 verspreid als gedragsregel in meerdere hoofdstukken. In V5 als formeel architectuurprincipe met definitie, regels en relaties. |
| H2 (filosofie) | H42 | Quiet Web als architectuurprincipe | 🆕 Nieuw | Quiet Web was in V4 alleen als filosofie beschreven. In V5 ook als architectuurprincipe met bouwvereisten en architectuurconsequenties. |

### DEEL VIII — ORGANISATIE & SYSTEEM

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H40 | H43 | Digitale afdelingen | 🔵 Bijgewerkt | Discovery Engine toegevoegd als formele afdeling (#3). LSD-afdeling vervallen als zelfstandige afdeling. Rolomschrijving Discovery Engine beschreven. Hernummerd. |
| H41 | H44 | PDCA en Kaizen | 🔵 Bijgewerkt | 'Discovery-aanpak verbeteren' i.p.v. 'gespreksscripts verbeteren'. Hernummerd. |
| H42 | H45 | Twee dashboards | ✅ Ongewijzigd | Hernummerd. |
| H43 | H46 | Toolstrategie | ✅ Ongewijzigd | Hernummerd. |
| H44 | H47 | Verificatie en validatie | ✅ Ongewijzigd | Hernummerd. |
| H45 | H48 | MVP-focus en technische architectuur | 🔵 Bijgewerkt | MVP-ervaringen sectie toegevoegd op basis van Audit 001. 'Intake' vervangen door 'Discovery'. Hernummerd. |

### DEEL IX — STRATEGIE & ONTWIKKELING

| V4 H# | V5 H# | Titel | Status | Reden |
|---|---|---|---|---|
| H46 | H49 | Marketing en bereikbaarheid | ✅ Ongewijzigd | Hernummerd. |
| H47 | H50 | Verdienmodel | ✅ Ongewijzigd | Hernummerd. |
| H48 | H51 | Validaties en simulaties | 🔵 Bijgewerkt | MVP-test (Audit 001) toegevoegd aan uitgevoerde simulaties. Verbeterpunten-sectie toegevoegd. Hernummerd. |
| H49 | H52 | Besluiten tot nu toe | 🔵 Bijgewerkt | 8 nieuwe besluiten toegevoegd op basis van V5-architectuurverschuivingen en LP26–LP31. Hernummerd. |
| — | H53 | Definities | 🆕 Nieuw | Nieuwe definitielijst met 14 termen. Bevat nieuwe termen (Discovery Engine, Intake Engine-vervallen, Gespreksgeheugen, etc.) en bestaande termen geformaliseerd. |
| H50 | H54 | Openstaande vragen | 🔵 Bijgewerkt | Brain v0.2-agenda toegevoegd. Evidence Threshold Detection als openstaande vraag geformaliseerd. Hernummerd. |

---

## Overzicht per type wijziging

| Type | Aantal | Hoofdstukken |
|---|---|---|
| ✅ Ongewijzigd | 21 | H3, H4, H5, H6, H7, H10, H17, H20, H21, H25, H26, H30, H31, H32, H34, H35, H37, H38, H45, H46, H47 |
| 🔵 Bijgewerkt | 21 | H1, H2, H8, H9, H11, H14, H15, H16, H18, H19, H22, H23, H24, H27, H28, H29, H33, H43, H44, H48, H51, H52, H54 |
| 🔴 Herschreven | 2 | H12, H13 |
| 🆕 Nieuw | 5 | H39, H40, H41, H42, H53 |
| ❌ Vervallen | 1 | H36 (V4) — inhoud verplaatst naar H39 (V5) |
| 🔄 Hernummerd | 14 | H36–H54 door toevoeging Deel VII en hernummering |

---

## Wijziging 1 — Discovery Engine (Herschrijving H12)

**Van:** Intake Engine als architectuurlaag (V4 H12)
**Naar:** Discovery Engine als architectuurlaag (V5 H12)

**Aanleiding:** Brain v0.1 OB-1 stelt expliciet dat Lumivey geen intake-engine is. Architectuurreview V5 concludeert dat H12 architectonisch is vervangen.

**Wat gewijzigd:**
- Term 'Intake Engine' vervangen door 'Discovery Engine' als architectuurterm
- Definitie herschreven vanuit Brain v0.1 OB-1 en sectie 1.1
- Drie geldige uitkomsten formeel opgenomen (Brain v0.1 sectie 3.5)
- 'Geen intake-taal' als architectuurprincipe formeel vastgelegd (LP28)
- Extra architectuurbesluit opgenomen: Discovery stopt wanneer verdere vragen geen betekenis meer toevoegen
- Historische noot toegevoegd over de relatie V4→V5

---

## Wijziging 2 — Discovery-procesmodel (Herschrijving H13)

**Van:** Standaard workflow — verplichte intake-volgorde (V4 H13)
**Naar:** Discovery-procesmodel — formeel architectuurmodel (V5 H13)

**Aanleiding:** V4-workflow veronderstelde intake-logica. Discovery Engine heeft een eigen volgorde op basis van Brain v0.1 sectie 3.1. Architectuurreview V5 concludeert dat H13 architectonisch is vervangen.

**Wat gewijzigd:**
- Verplichte intake-volgorde vervangen door Discovery-procesmodel met stap 0–6
- Stap 0 nieuw: Gespreksgeheugen activeren (LP26, Brain v0.1)
- Drie-lagenstructuur geïntroduceerd: hoofdproces, ondersteunende lagen, permanente systeemlagen
- Uitkomstbesluit (stap 6) beschrijft vier mogelijke uitkomsten inclusief Preview als instrument
- LSD herpositioneerd als methode binnen stap 4, niet als motor van het proces

---

## Wijziging 3 — Gespreksgeheugen (Verplaatsing H36 → H39)

**Van:** Gespreksgeheugen als operationele MVP-oplossing (V4 H36, Deel VI)
**Naar:** Gespreksgeheugen als architectuurlaag (V5 H39, Deel VII)

**Aanleiding:** LP26 kwalificeert gespreksgeheugen expliciet als voorwaarde, niet als luxe. Architectuurreview V5 concludeert dat gespreksgeheugen een architectuurlaag is.

**Wat gewijzigd:**
- Hoofdstuk verplaatst van Deel VI (operationeel) naar Deel VII (architectuurlagen)
- Definitie bijgewerkt: architectuurlaag, niet operationele functie
- Relaties beschreven: LP26, Discovery (stap 0), bedrijfsdossier, Preview, Approval Gate
- MVP-implementatiebeschrijving behouden als sectie binnen het nieuwe hoofdstuk

---

## Wijziging 4 — Preview dubbelfunctie (Bijwerking H28)

**Van:** WoW-preview met twee functies impliciet beschreven (V4 H28)
**Naar:** Preview met twee formeel onderscheiden functies (V5 H28)

**Aanleiding:** V4 beschreef de dubbele previewfunctie al, maar had deze niet formeel als architectuurprincipe verankerd. Architectuurreview V5 concludeert dat dit een architectuurverschuiving is.

**Wat gewijzigd:**
- 'Preview als uitkomst' en 'Preview als instrument' formeel onderscheiden als twee functies
- Voorwaarden per functie beschreven
- Noot toegevoegd aan Preview Checklist (H27): checklist geldt voor uitkomst, niet voor instrument

---

## Wijziging 5 — Visitor First als architectuurprincipe (Nieuw H41)

**Van:** Visitor First verspreid als gedragsregel in V4
**Naar:** Visitor First als formeel architectuurprincipe (V5 H41, Deel VII)

**Aanleiding:** Brain v0.1 sectie 2.2 kwalificeert Visitor First als niet-onderhandelbare gedragskernel. Architectuurreview V5 concludeert dat formalisering als architectuurprincipe nodig is.

**Wat gewijzigd:**
- Nieuw hoofdstuk H41 met definitie, formele regels en relaties
- Relaties beschreven: Discovery, Gespreksgeheugen, LP26, Stopregels, Quiet Web

---

## Wijziging 6 — LP26–LP31 geïntegreerd

**Van:** LP26–LP31 als losse leerpropositielijst
**Naar:** Geïntegreerd in relevante hoofdstukken

| LP | Geïntegreerd in |
|---|---|
| LP26 — Geen herhaling bevestigde informatie | H14 (gedragsregel), H33 (stoproegel), H39 (architectuurlaag gespreksgeheugen), H41 (Visitor First), H52 (besluit) |
| LP27 — Adreslogica | H14 (adreslogica-tabel) |
| LP28 — Geen intake-taal | H12 (architectuurprincipe), H14 (gedragsregel), H52 (besluit) |
| LP29 — Gedrag verankeren met voorbeelden | H48 (MVP-ervaringen Audit 001), H52 (besluit impliciet via gedragsafdwinging) |
| LP30 — Kritische regels vroeg en compact | H48 (MVP-ervaringen), H12 (sectie architectuurprincipes Discovery Engine) |
| LP31 — Eerste-beurt-protocol | H14 (protocol + voorbeeldtabel), H52 (besluit) |

---

*Lumivey — Werkdocument-V5-wijzigingslog.md — 9 juni 2026*
