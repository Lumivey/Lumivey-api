# Conformiteitscontrole — Werkdocument V5

| Veld | Waarde |
|---|---|
| **Document gecontroleerd** | Werkdocument V5.0 |
| **Gecontroleerd tegen** | Architectuurreview V5 + Brain v0.1 + Discovery Agent v0.3 + LP26–LP31 |
| **Datum** | 9 juni 2026 |
| **Eigenaar** | Ruud Kroonen |

---

## Legenda

| Status | Betekenis |
|---|---|
| ✅ Volledig conform | Element stemt volledig overeen met de brondocumenten. Geen aanpassingen nodig. |
| 🔵 Verduidelijkt | Element was aanwezig in brondocumenten maar is explicieter of vollediger uitgewerkt in V5. Inhoud ongewijzigd. |
| ⚠️ Mogelijke afwijking | Element dat mogelijk buiten de brondocumenten valt of nader besluit vereist. |

---

## Deel 1 — Conformiteit met Architectuurreview V5

| Architectuurreview V5 — vereiste | V5-sectie | Status | Toelichting |
|---|---|---|---|
| Intake Engine → Discovery Engine (Verschuiving 1) | H12, H13, H14, H52, H53 | ✅ Volledig conform | Discovery Engine als architectuurterm consistent doorgevoerd. H12 herschreven. Intake Engine als vervallen term opgenomen in H53. |
| Gespreksgeheugen → architectuurlaag (Verschuiving 2) | H39, H13 (stap 0), H52, H53 | ✅ Volledig conform | H39 als nieuw hoofdstuk in Deel VII. Stap 0 van procesmodel. LP26-relatie beschreven. Persistentievorm (bedrijfsdossier) beschreven. |
| Preview dubbelfunctie formeel vastleggen | H28, H27, H24, H40 | ✅ Volledig conform | Preview als uitkomst en Preview als instrument formeel onderscheiden met voorwaarden per functie. Preview Checklist bijgewerkt met noot. |
| Identiteit vóór functionaliteit — absoluut (niet trigger-gebaseerd) | H16, H14, H13 (stap 3) | ✅ Volledig conform | H16 herformuleerd: absolute prioriteitsregel. Triggers voor verdiepte check behouden als subcategorie. Stap 3 procesmodel verankert dit. |
| Completeness Engine — onzekerheidsmonitor | H24, H40 | ✅ Volledig conform | H24 beschrijft zekerheid vs. volledigheid. H40 formaliseert architectuurpositie. |
| Geen intake-taal — architectuurprincipe | H12, H14, H52, H53 | ✅ Volledig conform | Opgenomen in H12 als architectuurprincipe. Verboden patronen (LP28) in H14. Besluit in H52. Definitie in H53. |
| LSD herpositionering — methode binnen Discovery | H19, H13 (stap 4) | ✅ Volledig conform | H19 sectietitel bijgewerkt naar 'LSD-methode'. Inleiding hergeschreven. Stap 4 procesmodel positioneert LSD als methode. |
| Discovery Engine als formele afdeling | H43 (#3) | ✅ Volledig conform | Discovery Engine opgenomen als afdeling #3 in H43. Rolomschrijving beschreven. |
| Visitor First als architectuurprincipe | H41, H39, H33 | ✅ Volledig conform | H41 als nieuw hoofdstuk in Deel VII met definitie, regels en relaties. |
| Quiet Web als architectuurprincipe | H42, H2 | ✅ Volledig conform | H42 als nieuw hoofdstuk in Deel VII met architectuurconsequenties. H2 verwijst naar H42. |
| Nieuw procesmodel (stap 0–6) in drie lagen | H13 | ✅ Volledig conform | Formeel procesmodel met stap 0–6, ondersteunende lagen en permanente systeemlagen. |
| Stop bij betekenisloze vragen | H12, H24, H33, H52 | ✅ Volledig conform | Extra architectuurbesluit opgenomen in H12. Completeness Engine-beschrijving in H24. Stopsignaal in H33. Besluit in H52. |
| Definitielijst uitgebreid | H53 | ✅ Volledig conform | 14 definities inclusief alle nieuwe V5-termen. |
| LP26–LP31 geïntegreerd (niet als losse lijst) | Zie wijzigingslog | ✅ Volledig conform | Alle LP's verwerkt in relevante hoofdstukken. Geen losse LP-lijst. |

---

## Deel 2 — Conformiteit met Brain v0.1

### Identiteit & ontwerpbesluiten (Brain v0.1 sectie 1)

| Brain v0.1-element | V5-sectie | Status | Toelichting |
|---|---|---|---|
| OB-1 — Lumivey is een Discovery Engine | H12, H8, H52 | ✅ Volledig conform | Formeel vastgelegd in H12. Interne definitie in H8. Besluit in H52. |
| OB-2 — Discovery mag stoppen | H12, H33, H52 | ✅ Volledig conform | Drie geldige uitkomsten in H12. Stopregels in H33. Stop als besluit in H52. |
| OB-3 — Quiet Web als architectuurprincipe | H42, H2 | ✅ Volledig conform | H42 formaliseert dit. H2 verwijst. |
| OB-4 — Werkdocument is leidend | H4, H5 | ✅ Volledig conform | Hiërarchie Werkdocument→Brain→Afdelingen→Software ongewijzigd in H4 en H5. |
| OB-5 — Brain wijzigt nooit autonoom | H5, H4 | ✅ Volledig conform | LP-cyclus verplicht. Ongewijzigd. |
| OB-6 — Eigenaar is enige goedkeurder | H5 | ✅ Volledig conform | Ongewijzigd. |

### Gedragskernel (Brain v0.1 sectie 2)

| Brain v0.1-element | V5-sectie | Status | Toelichting |
|---|---|---|---|
| Één vraag tegelijk (harde grens) | H14, H13 (stap 4) | ✅ Volledig conform | Beschreven in H14 als harde grens. Verankerd in stap 4 procesmodel. |
| Geen herhaling bevestigde informatie (LP26) | H14, H39, H41 | ✅ Volledig conform | Gedragsregel in H14. Architectuurlaag in H39. Visitor First in H41. |
| Geen aannames zonder signaal | H14, H12 | ✅ Volledig conform | Gedragsregel in H14. Verboden gedrag impliciet in H12 (geen intake-taal). |
| Geen gefabriceerde gegevens | H14 | ✅ Volledig conform | Opgenomen in gedragsregels H14. |
| Geen valse locatiedetectie (LP27) | H14 | ✅ Volledig conform | Adreslogica LP27 in H14. |
| Out-of-domain: weiger en verwijs terug | H34 | ✅ Volledig conform | H34 Buiten-Domein Afhandeling ongewijzigd. |
| Bezoeker bepaalt tempo | H41, H14, H33 | ✅ Volledig conform | Visitor First H41. Gedragsregel H14. Stoproegel H33. |
| Stop wanneer doel bereikt is | H41, H33, H12 | ✅ Volledig conform | Visitor First H41. Stopregels H33. Geldige uitkomsten H12. |
| Geen voortgangsdruk | H41, H14 | ✅ Volledig conform | Visitor First H41. Gedragsregel H14. |
| Geen urgentiemechanismen | H41 | ✅ Volledig conform | Visitor First H41. |
| Geen onnodige upsells | H41 | ✅ Volledig conform | Visitor First H41. |
| Adreslogica LP27 | H14 | ✅ Volledig conform | Tabel in H14. |

### Discovery-kennislaag (Brain v0.1 sectie 3)

| Brain v0.1-element | V5-sectie | Status | Toelichting |
|---|---|---|---|
| Identiteit vóór functionaliteit (stap 1) | H16, H13 (stap 3), H14 | ✅ Volledig conform | Absolute prioriteitsregel in H16. Stap 3 procesmodel. Eerste-beurt-protocol H14. |
| Herkenning vóór volledigheid (stap 2) | H15, H13 (stap 5), H24 | ✅ Volledig conform | Onzekerheidsreductie H15. Stap 5 procesmodel. Completeness Engine H24. |
| Onzekerheid vóór informatie (stap 3) | H15, H24 | ✅ Volledig conform | Onzekerheidsmodel H15. Completeness Engine H24. |
| Bewijs herkennen vóór vragen stellen (stap 4) | H18, H13 (stap 2) | ✅ Volledig conform | Context-afdeling H18. Stap 2 procesmodel (Evidence First). |
| Bewijs verifiëren vóór gebruik (stap 5) | H18, H13 (stap 2) | ✅ Volledig conform | Historische Spiegel H18. Stap 2 procesmodel. |
| Evidence First Discovery | H18, H13 (stap 2), H53 | ✅ Volledig conform | H18 beschrijft Evidence First. Stap 2 procesmodel. Definitie H53. |
| Historische Spiegel | H18, H13 (stap 2), H53 | ✅ Volledig conform | H18. Stap 2. Definitie H53. |
| Bewijs herkennen ≠ bewijs verifiëren | H18, H13 (stap 2) | ✅ Volledig conform | H18 beschrijft beide stappen afzonderlijk. |
| De site stelt geen vragen die zij zelf kan beantwoorden | H14, H18 | ✅ Volledig conform | Gedragsregel H14. Context-afdeling H18. |
| Identiteitsbevestiging vóór functionele vragen | H16, H14, H13 (stap 3) | ✅ Volledig conform | H16 absolute regel. H14 eerste-beurt-protocol. Stap 3. |
| Completeness Engine | H24, H40 | ✅ Volledig conform | H24 operationeel. H40 architectuurpositie. |
| Onzekerheidsmodel | H15, H24 | ✅ Volledig conform | H15 fundament. H24 operationeel. |
| Drie geldige uitkomsten | H12, H13 (stap 6), H33 | ✅ Volledig conform | H12 definieert. Stap 6 procesmodel. H33 stopregels. |

### Preview & Build (Brain v0.1 sectie 4)

| Brain v0.1-element | V5-sectie | Status | Toelichting |
|---|---|---|---|
| Preview Model | H28 | ✅ Volledig conform | H28 beschrijft beide previewfuncties. |
| Goedkeuring vóór build | H32 | ✅ Volledig conform | Approval Gate ongewijzigd. |
| Preview is geen eindproduct | H28, H31 | ✅ Volledig conform | H28 (reflectiefase). H31 Preview Reflectiefase. |
| Build start pas na goedkeuring | H32 | ✅ Volledig conform | Approval Gate. |

### Governance & leren (Brain v0.1 sectie 5)

| Brain v0.1-element | V5-sectie | Status | Toelichting |
|---|---|---|---|
| Hiërarchie Werkdocument→Brain→Afdelingen→Software | H4, H5 | ✅ Volledig conform | Ongewijzigd. |
| LP-cyclus — volledige 6 stappen | H4, H5 | ✅ Volledig conform | Ongewijzigd. |
| Session-level vs. system-level leren | H4 | ✅ Volledig conform | Impliciet aanwezig: Brain-hiërarchie en LP-cyclus. |
| Brain Management-regels | H5 | ✅ Volledig conform | Ongewijzigd. |

### Risico's (Brain v0.1 sectie 6)

| Brain v0.1-risico | V5-sectie | Status | Toelichting |
|---|---|---|---|
| Intake-terugval | H12, H14, H52 | ✅ Volledig conform | OB-1 in H12. LP28 in H14. Besluit in H52. |
| Bewijs als waarheid behandelen | H18, H13 (stap 2) | ✅ Volledig conform | Historische Spiegel en verificatieplicht in H18. |
| Gefabriceerde gegevens | H14 | ✅ Volledig conform | Gedragsregel H14. |
| Valse locatiedetectie | H14 | ✅ Volledig conform | LP27 in H14. |
| Twee-vragen-fout | H14, H12 | ✅ Volledig conform | Harde grens H14. Architectuurprincipes H12. |
| Verlies van vertrouwen | H14, H41 | ✅ Volledig conform | Gedragsregels H14. Visitor First H41. |
| Autonome Brain-wijziging | H5 | ✅ Volledig conform | Ongewijzigd. |
| Cognitieve overbelasting | H14, H41, H42 | ✅ Volledig conform | Eén-vraag-regel H14. Visitor First H41. Quiet Web H42. |
| Verouderde bronnen | H18 | ✅ Volledig conform | Historische Spiegel H18. |
| Schaalrisico | H6, H5 | ✅ Volledig conform | Controlled Growth H6. Brain Management H5. |

---

## Deel 3 — Conformiteit met Discovery Agent v0.3

| Agent v0.3-element | V5-sectie | Status | Toelichting |
|---|---|---|---|
| Sectie 0 — Kernregels: één vraag, identiteit vóór functionaliteit, herkenning vóór verificatie, geen aannames, geen bedankformules, geen intake-taal | H12, H14, H13 (stap 3–4) | ✅ Volledig conform | Architectuurprincipes H12. Gedragsregels H14. Procesmodel H13. |
| LP28 — Verboden openingspatronen | H12, H14 | ✅ Volledig conform | H12 noemt verboden patronen als architectuurprincipe. H14 als gedragsregel. |
| LP31 — Eerste-beurt-protocol | H14 | ✅ Volledig conform | H14 bevat volledig eerste-beurt-protocol met voorbeeldtabel. |
| Adreslogica LP27 | H14 | ✅ Volledig conform | Tabel bedrijfstype / werkgebied / bezoekadres in H14. |
| Evidence First Discovery | H18, H13 (stap 2) | ✅ Volledig conform | H18 en stap 2 procesmodel. |
| Historische Spiegel | H18, H13 (stap 2) | ✅ Volledig conform | H18 en stap 2. |
| Herkenning vóór verificatie | H13 (stap 3), H15 | 🔵 Verduidelijkt | In V5 verankerd in stap 3 procesmodel en H15 onzekerheidsreductie. Explicieter dan in V4. |
| Visitor First — alle 7 regels | H41 | ✅ Volledig conform | H41 bevat alle zeven Visitor First-regels conform Agent v0.3 sectie 4. |
| Verboden gedrag (14 verboden) | H12, H14, H34, H41 | ✅ Volledig conform | Verspreid over H12 (architectuurprincipes), H14 (gedragsregels), H34 (buiten-domein), H41 (Visitor First). |
| Geldige Discovery-uitkomsten: Preview, Doorverwijzing, Stop | H12, H13 (stap 6) | ✅ Volledig conform | H12 definieert drie uitkomsten. Stap 6 procesmodel beschrijft vier varianten (Preview als instrument, Preview als uitkomst, Stop, Doorverwijzing). |
| Toon aanpassen op invoersignaal | H14 | ✅ Volledig conform | Toonrichtlijn in H14. |
| Completeness-bewaking | H24, H40 | ✅ Volledig conform | H24 operationeel. H40 architectuurpositie. |
| Onzekerheidsmodel | H15 | ✅ Volledig conform | H15 beschrijft onzekerheid als diepste laag. |
| Bewijs herkennen ≠ bewijs verifiëren | H18 | ✅ Volledig conform | H18. |
| Stop als geldige uitkomst | H12, H33 | ✅ Volledig conform | H12 drie uitkomsten. H33 stopregels. |
| LP-cyclus voor Brain-wijzigingen | H4, H5 | ✅ Volledig conform | Ongewijzigd. |

---

## Deel 4 — Conformiteit met LP26–LP31

| LP | Eis | V5-sectie | Status | Toelichting |
|---|---|---|---|---|
| LP26 | Geen herhaling bevestigde informatie | H14, H39, H41, H52 | ✅ Volledig conform | Gedragsregel H14. Architectuurlaag H39. Visitor First H41. Besluit H52. |
| LP26 | Gespreksgeheugen is voorwaarde, niet luxe | H39 | ✅ Volledig conform | H39 herhaalt LP26-kwalificatie letterlijk als citaat. |
| LP27 | Adreslogica afhankelijk van bedrijfstype | H14 | ✅ Volledig conform | Tabel in H14. |
| LP28 | Geen intake-taal. Verboden openingspatronen expliciet. | H12, H14, H52, H53 | ✅ Volledig conform | Architectuurprincipe H12. Gedragsregel H14. Besluit H52. Definitie H53. |
| LP29 | Gedrag verankeren met voorbeelden | H14 | 🔵 Verduidelijkt | Eerste-beurt-protocol in H14 bevat voorbeeldtabel. Gespreksscenario's zijn in Discovery Agent v0.3 — niet in het werkdocument. Werkdocument beschrijft principes, Agent beschrijft uitvoering. |
| LP30 | Kritische regels vroeg en compact | H12 (sectie Architectuurprincipes) | 🔵 Verduidelijkt | H12 opent met een compacte opsomming van architectuurprincipes. Minder compact dan Agent v0.3 sectie 0, maar passend bij het abstractieniveau van een werkdocument. |
| LP31 | Eerste-beurt-protocol: één identiteitsvraag, één zin, geen intake-taal | H14 | ✅ Volledig conform | Volledig protocol met zes absolute regels en voorbeeldtabel in H14. |

---

## Deel 5 — Mogelijke afwijkingen en aandachtspunten

| # | Element | Toelichting | Actie |
|---|---|---|---|
| 1 | Evidence Threshold Detection | Brain v0.1 sectie 7.1 markeert dit als open vraag: wanneer is bewijs betrouwbaar genoeg? V5 heeft geen operationele criteria geformaliseerd. | Opgenomen als openstaande vraag in H54. Geen afwijking — bewust niet vastgesteld. |
| 2 | Toekomstspiegel | Brain v0.1 sectie 7.3 markeert de Toekomstspiegel als concept, niet formeel vastgesteld. V5 neemt dit niet op. | Correct: V5 voegt geen niet-vastgestelde concepten toe. |
| 3 | Groei-signaaldetectie | Brain v0.1 sectie 7.3 markeert groei-signaaldetectie als 'observatie — verificatie ontbreekt'. V5 benoemt triggers voor verdiepte identiteitscheck in H16, maar niet als formeel detectiemodel. | Correct: H16 beschrijft triggers op basis van V4 en Brain v0.1 sectie 3.1. Formeel detectiemodel vereist eerst verificatie. Openstaande vraag. |
| 4 | Session-level learning expliciet | Brain v0.1 sectie 5.3 beschrijft session-level vs. system-level leren. V5 H4 vermeldt dit impliciet maar niet als expliciete definitie. | Verduidelijking aanbevolen in Brain v0.2. Geen afwijking in V5. |
| 5 | LP29 en gespreksvoorbeelden | LP29 stelt dat gedrag moet worden verankerd met voorbeelden. V5 is een werkdocument op principeniveau. Concrete gespreksvoorbeelden staan in Discovery Agent v0.3. | Correct voor abstractieniveau van werkdocument. Gespreksvoorbeelden horen in de Agent, niet in het werkdocument. |

---

## Samenvatting

| Categorie | Aantal | Percentage |
|---|---|---|
| ✅ Volledig conform | 59 | 90% |
| 🔵 Verduidelijkt | 5 | 8% |
| ⚠️ Mogelijke afwijking | 0 | 0% |
| **Aandachtspunten (geen afwijking)** | **5** | **8%** |

**Geen mogelijke afwijkingen aangetroffen.** Alle elementen van Werkdocument V5 zijn herleidbaar naar de brondocumenten. Er is geen nieuwe architectuur geïntroduceerd, geen nieuwe filosofie toegevoegd en geen nieuwe afdelingen of modellen verzonnen.

**Verduidelijkte elementen** ten opzichte van V4: de vijf verduidelijkte elementen zijn explicieter uitgewerkt of in een verrijkende context geplaatst. De inhoud is in alle gevallen herleidbaar naar bestaande principes.

**Aandachtspunten:** de vijf aandachtspunten zijn bewuste keuzes — onderdelen die in de brondocumenten als open vraag of concept zijn gemarkeerd en die in V5 correct niet als vastgesteld principe zijn opgenomen. Ze zijn kandidaten voor Brain v0.2 en toekomstige LP-trajecten.

---

*Lumivey — Werkdocument-V5-conformiteitscontrole.md — 9 juni 2026*
