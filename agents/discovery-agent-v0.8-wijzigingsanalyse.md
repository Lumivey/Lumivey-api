# Wijzigingsanalyse — Discovery Agent v0.7 → v0.8

| Veld | Waarde |
|---|---|
| **Van** | Discovery Agent v0.7 |
| **Naar** | Discovery Agent v0.8 |
| **Type** | Operationele aanscherping van drie bestaande principes |
| **Aanleiding** | Architectuuranalyse drie simulaties — structurele schendingen LP28, één-vraag-regel en passieve Discovery Exit |
| **Eigenaar** | Ruud Kroonen |
| **Datum** | 2026 |

---

## Samenvatting wijzigingen

Drie gerichte correcties. Geen nieuwe principes. Geen nieuwe architectuur.

| Wijziging | Sectie | Type |
|---|---|---|
| LP28 uitgebreid met verboden-voorbeeldlijst en correcte alternatieven | Sectie 0 (aangescherpt) + 1B (nieuw) | Aanscherping bestaand principe |
| Één-vraag-per-beurt uitgebreid met verboden-voorbeeldlijst en keuzeregel | Sectie 0 (aangescherpt) + 1A (nieuw) | Aanscherping bestaand principe |
| LP34-evaluatie als actieve beslisregel na bevestigde spiegel | Sectie 0 (aangescherpt) + 1C (nieuw) + beslisregel 4 | Operationalisering bestaand principe |
| Output-controle vóór elke beurt | Sectie 8 (bijgewerkt) | Operationele toevoeging |
| Drie nieuwe risico's | Sectie 14 | Aanscherping bestaand principe |
| Twee nieuwe scenario's | Sectie 15 | LP29-uitwerking |
| Elfde Visitor First-regel | Sectie 9 | Aanscherping bestaand principe |

---

## Wijziging 1 — LP28: van instructie naar afdwingbare grens

### Wat er was (v0.7)

Kernregel 11: "Geen ontvangstbevestigingen. Nooit."

Verboden in sectie 10: "LP28 ontvangstbevestigingen *(Ongewijzigd)*"

### Wat er fout ging

De instructie was aanwezig maar te abstract. "Geen ontvangstbevestigingen" laat interpretatieruimte. In alle drie simulaties schond Lumivey LP28 consequent — niet alleen met ontvangstbevestigingen maar ook met complimenten, waarderingen en chatbot-enthousiasme. Het model interpreteert "geen ontvangstbevestigingen" als "geen 'dank je wel'" maar beschouwt "Dat is een mooie naam!" niet als ontvangstbevestiging.

### Wat er veranderd is (v0.8)

**Sectie 1B** is een nieuwe volledige sectie die:
- Vier verboden categorieën beschrijft (ontvangstbevestigingen, complimenten, waarderingen, enthousiasme)
- Een directe lijst van 18 verboden formuleringen geeft — inclusief varianten
- Een tabel geeft van correcte alternatieven per situatie
- Een output-controle beschrijft die vóór elke beurt plaatsvindt

**Kernregel 11** is aangescherpt: "Geen ontvangstbevestigingen, complimenten of waarderingen. Nooit. In geen enkele beurt." — met expliciete verwijzing naar de uitwerking.

**Nooit-lijst** bevat nu expliciete verboden formuleringen die het model eerder gebruikte.

### Herleiding

LP28 staat in Brain v0.1 en Discovery Agent alle versies. V0.8 voegt geen nieuw principe toe — het operationaliseert LP28 zodanig dat het model minder interpretatieovertolligheid heeft.

### Verwacht effect

Het model heeft een sterk ingebakken patroon van positieve bevestigingen. Een abstracte instructie overschrijft dat patroon niet. Concrete verboden-lijsten met voorbeelden verhogen de kans op naleving aanzienlijk — dit is de LP29-methode (gedrag verankeren met voorbeelden) toegepast op LP28 zelf.

### Risico

Dit lost het probleem niet volledig op voor gpt-4o-mini. Het model heeft een sterke prior voor positieve bevestigingen die ook met concrete lijsten kan terugkomen bij langere gesprekken of onverwachte situaties. Aanbeveling: na de eerst volgende simulatie evalueren of LP28-naleving is verbeterd.

---

## Wijziging 2 — Één vraag per beurt: van grens naar afdwingbare grens

### Wat er was (v0.7)

Kernregel 6: "Eén vraag per beurt. Harde grens."

Nooit-lijst: "Twee vragen in één antwoord."

### Wat er fout ging

"Harde grens" is een kwalificatie van de grens, geen beschrijving van wat de grens precies inhoudt. Het model stelde twee vragen op twee manieren die de beschrijving ontweek:
1. Twee aparte zinnen met vraagteken.
2. Samengestelde vragen: "Welke diensten bied je aan en in welke regio werk je?"

Beide zijn twee vragen. Maar de instructie benoemde alleen "twee vragen in één antwoord" — wat het model interpreteerde als "twee aparte vraagtekens", niet als samengestelde vragen.

### Wat er veranderd is (v0.8)

**Sectie 1A** is een nieuwe volledige sectie die:
- Vier definities geeft van "twee vragen in één beurt" (inclusief samengestelde vragen)
- Een directe lijst van 8 verboden formuleringen geeft — de exacte formuleringen uit de simulaties
- Een keuzeregel geeft voor wanneer twee vragen tegelijk relevant lijken
- Correcte alternatieven per situatie toont

**Kernregel 6** is aangescherpt: "Eén vraag per beurt. Absoluut. Geen uitzonderingen. Nooit twee." — met expliciete verwijzing naar de uitwerking.

**Nooit-lijst** bevat nu: "Een samengestelde vraag die twee losse vragen combineert met 'en', 'of', 'ook'."

### Herleiding

Kernregel was aanwezig. Operationalisering ontbrak. V0.8 voegt geen nieuw principe toe.

### Verwacht effect

De samengestelde-vraag-definitie is de kern van de correctie. Wanneer het model weet dat "en" en "of" in een vraag een verboden patroon zijn, is de kans op naleving hoger.

### Risico

Het model kan de regel omzeilen door de tweede vraag als een niet-expliciete vraag te formuleren ("Vertel me ook over jouw doelgroep."). Dit is een impliciet-vraag-patroon dat de huidige instructie niet volledig dekt. Bij de volgende simulatie evalueren.

---

## Wijziging 3 — LP34: van passieve poort naar actieve trigger

### Wat er was (v0.7)

LP34 was beschreven als uitgangscontrole in beslisregel 5: "Discovery verlaat de Discovery-fase uitsluitend via een formeel uitkomstbesluit." Met vier voorwaarden als poortcriterium.

De Completeness Engine bewaakt continu maar triggert niet actief.

### Wat er fout ging

In alle drie simulaties had de veranderopdracht op een bepaald moment alle vier LP34-voorwaarden vervuld. Maar Discovery stelde vervolgens een nieuwe informatievraag. Dit kon omdat LP34 als een poort werkt — ze wacht tot het systeem door de poort wil gaan, maar het systeem probeert dat nooit proactief.

Meest schrijnend in de pedicure-simulatie (beurt 22): na zeventien beurten waren naam, beroep, locatie, SOLL, spiegel en bevestiging allemaal aanwezig. Lumivey vroeg opnieuw naar naam en diensten.

### Wat er veranderd is (v0.8)

**Sectie 1C** is een nieuwe volledige sectie die:
- De vier LP34-voorwaarden beschrijft met herkenningscriteria
- Het evaluatiemoment definieert: na elke bevestigde spiegel, niet continu
- Beschrijft wat Discovery Exit betekent: overdrachtstekst, geen nieuwe vraag, intern object compleet
- Regels geeft voor de overdrachtstekst (geen interne termen, geen beloften buiten scope)
- Een volledig pedicure-scenario toont: fout én correct

**Beslisregel 4** is nieuw: LP34-evaluatie na bevestigde spiegel, vóór ABCD.

**Kernregel 13** is aangescherpt: "Wanneer alle vier LP34-voorwaarden vervuld zijn, activeert Discovery het overdrachtsmoment actief."

**Elfde Visitor First-regel:** "Discovery stopt actief wanneer de veranderopdracht compleet is."

### Herleiding

Discovery Exit & Preview Entry v1.0 beschrijft de veranderopdracht als object en de actieve Completeness Engine-trigger. V0.8 vertaalt dit naar een concrete evaluatiestap in de Discovery Agent. Geen nieuw principe — operationalisering van Discovery Exit v1.0 sectie 3 en 5.

### Verwacht effect

Het evaluatiemoment na bevestigde spiegel is het meest kritische element. In de simulaties werd de spiegel correct bevestigd maar volgde er geen LP34-evaluatie. Door de evaluatie expliciet te koppelen aan het spiegel-bevestigingsmoment — niet aan het einde van het gesprek, niet continu — wordt de trigger voorspelbaar.

### Risico

De LP34-evaluatie vereist dat het model intern bijhoudt welke van de vier voorwaarden al zijn vervuld. Bij langere gesprekken en een context window van 8 berichten kunnen vroege bevestigingen buiten de context vallen. Dit is een context-window-afhankelijkheid die los van v0.8 geadresseerd moet worden (hogere CONTEXT_WINDOW_SIZE of compact dossier-object).

---

## Verwachte effecten op de drie simulaties

### Simulatie 1 — Hovenier

| Fout (v0.7) | Verwacht effect (v0.8) |
|---|---|
| LP28 bij herstelmoment ("Dank voor de correctie.") | Directe correctie zonder dankformule |
| Interne termen zichtbaar (bewijsbeeld, categorieën) | Dit is een chat.js-prompt-issue, niet een agent-issue. v0.8 markeert interne termen expliciet als verboden in sectie 10. |
| Discovery Exit niet geactiveerd na bevestiging | Na spiegel-bevestiging: LP34-evaluatie. Als voorwaarden vervuld: Discovery Exit. |

### Simulatie 2 — Glazenwasser

| Fout (v0.7) | Verwacht effect (v0.8) |
|---|---|
| LP28 in elke beurt ("Dat is een mooie ervaring!") | Sectie 1B verboden-lijst dekt deze specifieke formuleringen |
| Twee vragen per beurt (diensten én regio) | Sectie 1A dekt samengestelde vragen met "en" en "of" |
| Legitimatietwijfel als informatievraag behandeld | Onzekerheids-ingang bij tussensignalen: niet volledig opgelost in v0.8. Dit vereist aanvulling van actief signaalgeheugen voor tussensignalen. |

### Simulatie 3 — Diabetespedicure

| Fout (v0.7) | Verwacht effect (v0.8) |
|---|---|
| LP28 in elke beurt | Sectie 1B verboden-lijst dekt alle getoonde formuleringen |
| Twee vragen per beurt | Sectie 1A |
| LP26: bevestigde info opnieuw gevraagd (website-vraag) | LP26 blijft beschreven. Context-window-afhankelijkheid niet opgelost in v0.8. |
| Discovery Exit niet geactiveerd (beurt 22) | Na spiegel-bevestiging (wanneer die gegeven was): LP34-evaluatie activeert. Nota: in de pedicure-simulatie was de spiegel pas laat gegeven. V0.8 kan Discovery Exit alleen activeren na een bevestigde spiegel — het systeem moet dus wel de spiegeldrempel correct activeren. |

---

## Conformiteitscontrole

| Gecontroleerd principe | Status | Toelichting |
|---|---|---|
| Brain v0.1 OB-1 | ✅ Conform | Geen nieuw principe. Operationalisering van bestaande principes. |
| LP26 | ✅ Conform | V0.8 versterkt LP26 via output-controle stap 3. |
| LP28 | 🔵 Aangescherpt | Van abstracte instructie naar concrete verboden-lijst. Principe ongewijzigd. |
| LP31 | ✅ Conform | Ongewijzigd. |
| LP33 | ✅ Conform | Ongewijzigd. |
| LP34 | 🔵 Aangescherpt | Van passieve poort naar actieve trigger na bevestigde spiegel. Criteria ongewijzigd. |
| LP35 | ✅ Conform | Ongewijzigd. |
| V6 H12 | ✅ Conform | Eerste taak herkennen ongewijzigd. |
| V6 H13 | 🔵 Aangescherpt | Stap 5 (uitkomstbesluit) nu actief via LP34-evaluatie. |
| V6 H41 Visitor First | 🔵 Aangescherpt | Elfde regel toegevoegd: Discovery stopt actief. |
| Discovery Exit v1.0 | 🔵 Operationalisering | Sectie 3 (veranderopdracht compleet) en sectie 5 (overdrachtsmoment) vertaald naar beslisregel 4. |

**Geen afwijkingen. Geen nieuwe principes.**

---

## Wat v0.8 niet oplost

**1. Context window bij lange gesprekken**

LP26-schendingen bij gesprekken langer dan 8 beurten zijn waarschijnlijk gerelateerd aan CONTEXT_WINDOW_SIZE = 8. Dit is een technisch probleem dat los van v0.8 moet worden aangepakt.

**2. Tussensignalen (onzekerheid later in het gesprek)**

Wanneer een ondernemer halverwege het gesprek een legitimatievraag stelt of opnieuw twijfelt, herkent het systeem dit niet opnieuw als dominant signaal. Het actief signaalgeheugen (sectie 4) bewaakt het eerste dominante signaal — niet nieuwe opkomende signalen. Dit is een architectuurvraag voor een toekomstige versie.

**3. Terminologielekkage via Historische Spiegel**

Interne termen (bewijsbeeld, categorieën) lekken via de Historische Spiegel-sectie in de system prompt. Dit is een chat.js-niveau-probleem, niet een agent-niveau-probleem. V0.8 markeert interne termen expliciet als verboden, maar de structurele oorzaak zit in hoe de Historische Spiegel-output wordt doorgegeven aan het model.

**4. LP28-modelprior**

gpt-4o-mini heeft een sterke ingebakken prior voor positieve bevestigingen. Concrete verboden-lijsten verminderen dit patroon maar elimineren het niet volledig. Dit is een model-niveau-eigenschap die prompt-engineering kan verminderen maar niet uitsluiten.

---

*Lumivey — `agents/discovery-agent-v0.8-wijzigingsanalyse.md` — 2026*
