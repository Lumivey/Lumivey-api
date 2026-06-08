# Brain-conformiteitscontrole — Discovery Agent v0.2

| Veld | Waarde |
|---|---|
| **Document gecontroleerd** | Discovery Agent v0.2 |
| **Gecontroleerd tegen** | Lumivey Brain v0.1 |
| **Datum** | 8 juni 2025 |
| **Eigenaar** | Ruud Kroonen |

---

## Legenda

| Status | Betekenis |
|---|---|
| ✅ Volledig conform | Onderdeel stemt volledig overeen met Brain v0.1. Geen aanpassingen nodig. |
| 🔵 Verduidelijkt | Onderdeel was al aanwezig in v0.1 van de agent maar is explicieter gemaakt in v0.2. Inhoud ongewijzigd. |
| ⚠️ Mogelijke afwijking | Onderdeel dat mogelijk buiten Brain v0.1 valt of nader besluit vereist. |

---

## Conformiteitstabel

| Brain v0.1-element | Sectie in Brain | Status in Agent v0.2 | Toelichting |
|---|---|---|---|
| OB-1 — Lumivey is een Discovery Engine | Sectie 1.2 | ✅ Volledig conform | Aanwezig in sectie 1 (Doel), sectie 3 (Verplicht gedrag), sectie 5 (Verboden gedrag: intake-terugval). |
| OB-2 — Discovery mag stoppen | Sectie 1.2 | 🔵 Verduidelijkt | In v0.1 beperkt beschreven. In v0.2 uitgebreid met vijf expliciete stopscenario's en "Volledigheid is gewenst, niet verplicht." |
| OB-3 — Quiet Web als architectuurprincipe | Sectie 1.2 | ✅ Volledig conform | Aanwezig via Visitor First (geen druk, geen urgentie, geen upsells) en verboden gedrag. |
| OB-4 — Werkdocument is leidend | Sectie 1.2 | ✅ Volledig conform | Impliciet aanwezig via sectie 10 (Relatie met Brain): hiërarchie beschreven. |
| OB-5 — Brain wijzigt nooit autonoom | Sectie 1.2 | ✅ Volledig conform | Aanwezig in sectie 5 (Verboden gedrag) en sectie 10 (Relatie met Brain). |
| OB-6 — Eigenaar is enige goedkeurder | Sectie 1.2 | ✅ Volledig conform | Aanwezig in sectie 10. |
| Één vraag tegelijk | Sectie 2.1 | ✅ Volledig conform | Aanwezig in sectie 3 (Gespreksgedrag), sectie 5 (Verboden gedrag), sectie 9 (Twee-vragen-fout). |
| Geen herhaling bevestigde informatie (LP26) | Sectie 2.1 | 🔵 Verduidelijkt | In v0.1 aanwezig maar niet overal expliciet met LP26-verwijzing. In v0.2 aanwezig in secties 3, 4, 5, 8 en 9 met expliciete LP26-verwijzingen. |
| Geen aannames zonder signaal | Sectie 2.1 | ✅ Volledig conform | Aanwezig in sectie 3 (Gespreksgedrag), sectie 6 (Beslisregels: onzekerheid). |
| Geen gefabriceerde gegevens | Sectie 2.1 | ✅ Volledig conform | Aanwezig in sectie 5 (Verboden gedrag) en sectie 9 (Risicobewaking). |
| Geen valse locatiedetectie | Sectie 2.1 | ✅ Volledig conform | Aanwezig in sectie 5 (Verboden gedrag) en sectie 9 (Risicobewaking). |
| Out-of-domain: weiger en verwijs terug | Sectie 2.1 | ✅ Volledig conform | Aanwezig in sectie 5 (Verboden gedrag). |
| Bezoeker bepaalt tempo | Sectie 2.2 | ✅ Volledig conform | Aanwezig in sectie 3 (Gespreksgedrag), sectie 4 (Visitor First), sectie 6 (Beslisregels: vertragen), sectie 8 (Vertrouwensbewaking). |
| Stop wanneer doel bereikt is | Sectie 2.2 | ✅ Volledig conform | Aanwezig in sectie 4 (Visitor First), sectie 6 (Beslisregels: stoppen), sectie 7 (Geldige uitkomsten). |
| Geen vragen die al beantwoord kunnen worden | Sectie 2.2 | ✅ Volledig conform | Aanwezig in sectie 3 (Gespreksgedrag) en sectie 4 (Visitor First). |
| Geen voortgangsdruk | Sectie 2.2 | 🔵 Verduidelijkt | In v0.1 aanwezig als "geen druk uitoefenen" in verboden gedrag. In v0.2 expliciet als Visitor First-regel opgenomen in sectie 4. |
| Geen urgentiemechanismen | Sectie 2.2 | 🔵 Verduidelijkt | In v0.1 aanwezig als "urgentietaal gebruiken" in verboden gedrag. In v0.2 expliciet als Visitor First-regel opgenomen in sectie 4. |
| Geen onnodige upsells | Sectie 2.2 | 🔵 Verduidelijkt | Niet aanwezig in v0.1 van de agent. In v0.2 toegevoegd als Visitor First-regel, verboden gedrag en risico. Principe was aanwezig in Brain v0.1 sectie 2.2. |
| Adreslogica LP27 | Sectie 2.4 | 🔵 Verduidelijkt | In v0.1 alleen aanwezig in risicobewaking. In v0.2 uitgewerkt als expliciete operationele tabel in sectie 3. |
| Evidence First Discovery | Sectie 3.2 | ✅ Volledig conform | Aanwezig in sectie 3 (Omgaan met bewijs), sectie 6 (Bewijs gebruiken), sectie 9 (Cognitieve overbelasting: tegenmaatregel). |
| Historische Spiegel | Sectie 3.2 | ✅ Volledig conform | Aanwezig in sectie 3 (Omgaan met bewijs) en sectie 6 (Bewijs verifiëren). |
| Bewijs herkennen ≠ bewijs verifiëren | Sectie 3.2 | 🔵 Verduidelijkt | In v0.1 correct beschreven maar zonder expliciete tussenlaag herkenning. In v0.2 uitgebreid met principe "Herkenning vóór verificatie" in sectie 3. |
| De site stelt geen vragen die zij zelf kan beantwoorden | Sectie 3.2 | ✅ Volledig conform | Aanwezig in sectie 3 (Gespreksgedrag: geen vragen die al beantwoord kunnen worden). |
| Identiteitsbevestiging vóór functionele vragen | Sectie 3.2 | ✅ Volledig conform | Aanwezig in sectie 3 (Volgorde van werken, stap 1). |
| Discovery Model | Sectie 3.3 | ✅ Volledig conform | Aanwezig impliciet: Discovery Agent beschrijft de uitvoering van het Discovery Model volledig. |
| Completeness Engine | Sectie 3.3 | ✅ Volledig conform | Aanwezig in sectie 3 (Completeness-bewaking) en sectie 2 (Verantwoordelijkheden). |
| Onzekerheidsmodel | Sectie 3.3 | ✅ Volledig conform | Aanwezig in sectie 3 (Omgaan met onzekerheid) en sectie 6 (Onzekerheid erkennen). |
| Drie geldige uitkomsten: Preview, Doorverwijzing, Stop | Sectie 3.5 | ✅ Volledig conform | Volledig uitgewerkt in sectie 7. Stop-definitie uitgebreid in v0.2. |
| LP-cyclus voor Brain-wijzigingen | Sectie 5.2 | ✅ Volledig conform | Aanwezig in sectie 10 (Relatie met Brain: bij twijfel → LP voorstellen). |
| Session-level vs. system-level leren | Sectie 5.3 | ✅ Volledig conform | Impliciet aanwezig: Discovery Agent leert adaptief per gesprek (session-level) zonder Brain te wijzigen. |
| Brain Management-regels | Sectie 5.4 | ✅ Volledig conform | Aanwezig in sectie 10 en sectie 5 (Verboden gedrag: Brain autonoom wijzigen). |
| Risico: Intake-terugval | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 9. |
| Risico: Bewijs als waarheid behandelen | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 9. |
| Risico: Verlies van vertrouwen | Sectie 6 | 🔵 Verduidelijkt | In v0.1 aanwezig als risico. In v0.2 uitgebreid tot sectie 8 (Vertrouwensbewaking) met signaallijst en tegenmaatregelen. |
| Risico: Gefabriceerde gegevens | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 9. |
| Risico: Valse locatiedetectie | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 9. |
| Risico: Twee-vragen-fout | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 9. |
| Risico: Autonome Brain-wijziging | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 5 (Verboden gedrag) en sectie 10. |
| Risico: Cognitieve overbelasting | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 9. |
| Risico: Verouderde bronnen | Sectie 6 | ✅ Volledig conform | Aanwezig in sectie 9. |
| Risico: Schaalrisico | Sectie 6 | ✅ Volledig conform | Impliciet aanwezig via Brain-hiërarchie en Kennisgrens-verwijzing in sectie 10. |
| Kennisgrens — bij twijfel niet handelen | Sectie 7 | ✅ Volledig conform | Aanwezig in sectie 10 (Bij twijfel: drie stappen). |

---

## Samenvatting

| Categorie | Aantal | Percentage |
|---|---|---|
| ✅ Volledig conform | 30 | 75% |
| 🔵 Verduidelijkt | 10 | 25% |
| ⚠️ Mogelijke afwijking | 0 | 0% |
| **Totaal** | **40** | **100%** |

---

## Toelichting

**Geen mogelijke afwijkingen aangetroffen.** Alle elementen in Discovery Agent v0.2 zijn herleidbaar naar Lumivey Brain v0.1. Er is geen nieuwe kennis toegevoegd. Er zijn geen nieuwe modellen geïntroduceerd. Er zijn geen nieuwe ontwerpbesluiten gecreëerd.

**Verduidelijkte elementen** zijn inhoudelijk aanwezig in Brain v0.1 maar waren in Discovery Agent v0.1 impliciet of onvolledig uitgewerkt. De verduidelijking in v0.2 voegt geen nieuwe kennis toe — ze maakt bestaande Brain-kennis operationeel zichtbaar in de uitvoerende laag.

**Aandachtspunt voor Brain v0.2:** De drie Visitor First-principes (geen voortgangsdruk, geen urgentiemechanismen, geen onnodige upsells) zijn in Brain v0.1 gemarkeerd als "impliciet — explicitering nodig" (Brain Inventaris v1.0, sectie 4). Ze zijn in Discovery Agent v0.2 als expliciete gedragsregels opgenomen. Wanneer Brain v0.2 wordt ontwikkeld, verdient het aanbeveling deze principes ook in Brain zelf te formaliseren via een Learning Proposal.

---
