# Lumivey — Werkdocument V5

**LUMIVEY**
Werkdocument & Architectuuroverzicht
Versie 5.0

| Veld | Waarde |
|---|---|
| **Status** | Levend werkdocument — regelmatig bijwerken |
| **Versie** | 5.0 |
| **Gebaseerd op** | V4 + Architectuurreview V5 + Brain v0.1 + Discovery Agent v0.3 + Discovery Audit 001 + LP26–LP31 |
| **Doelgroep** | Intern — Lumivey ontwikkelteam |
| **Eigenaar** | Ruud |
| **Jaar** | 2026 |

> *Dit document is de enige officiële architectuurwaarheid van Lumivey. Het Lumivey Brain wordt hieruit afgeleid. Niet andersom.*

---

# Changelog V4 → V5

Onderstaande wijzigingen zijn verwerkt ten opzichte van Werkdocument V4.

| # | Wijziging | Impact |
|---|---|---|
| 1 | Intake Engine vervangen door Discovery Engine | Deel III volledig herschreven — H12 en H13 vervangen |
| 2 | Gespreksgeheugen architectuurlaag | Verplaatst van operationeel deel (H36) naar Deel VII |
| 3 | Preview dubbelfunctie formeel vastgelegd | Preview als instrument én als uitkomst — H28 en H24 bijgewerkt |
| 4 | Visitor First als architectuurprincipe | Opgenomen in Deel VII met formele architectuurkwalificatie |
| 5 | Nieuw procesmodel (stap 0–7) | H13 volledig vervangen door Discovery-procesmodel |
| 6 | Identiteit vóór functionaliteit — absoluut | H16 herformuleerd: niet trigger-gebaseerd maar absolute prioriteitsregel |
| 7 | Completeness Engine hergedefinieerd | Onzekerheidsmonitor, niet volledigheidsmonitor — H24 bijgewerkt |
| 8 | LP26–LP31 geïntegreerd | Verwerkt in H14, H16, H36 (nieuw), besluiten en definities |
| 9 | Geen intake-taal als architectuurprincipe | Nieuw principe opgenomen in H12 en H14 |
| 10 | Discovery stopt bij betekenisloze vragen | Extra architectuurbesluit opgenomen in H33 en H12 |
| 11 | LSD herpositionering | LSD is gespreksmethode binnen Discovery — geen zelfstandige motor |
| 12 | Discovery Engine als formele afdeling | Toegevoegd aan H40 |
| 13 | Nieuwe definities | Definitielijst uitgebreid in H49 |

## Interne consistentiecheck

- Discovery Engine vervangt Intake Engine consistent door het volledige document
- Gespreksgeheugen beschreven als architectuurlaag in Deel VII — operationele verwijzing in H36 vervallen
- Preview als instrument en Preview als uitkomst zijn formeel onderscheiden
- Visitor First is architectuurprincipe in Deel VII en gedragskernel in H14
- LP26–31 zijn geïntegreerd in de relevante hoofdstukken — niet als losse lijst
- Procesmodel (stap 0–7) staat in H13 als formeel architectuurmodel
- Completeness Engine is consistent beschreven als onzekerheidsmonitor
- LSD is consistent herpositioneerd als methode binnen Discovery

## Architectuurgaten gesignaleerd in V5

- Evidence Threshold Detection: operationele criteria voor 'bewijs is betrouwbaar genoeg' zijn niet geformaliseerd
- Hoe wordt de Completeness Engine kwantitatief gekalibreerd voor 'voldoende zekerheid'?
- Brain v0.2: agenda bevat Kennisgrens-items uit Brain v0.1 sectie 7
- Verificatie van Brain-updates: wie controleert naast Ruud bij opschaling?
- Hoe wordt de Preview Reflectiefase technisch afgesloten bij eindeloos perfectioneren?
- Welke afdeling beheert Ziel en Emotie operationeel?

---

# Inhoudsopgave

**DEEL I — STRATEGISCH NIVEAU**
1. Lumivey als digitale organisatie
2. Quiet Web — Onderliggende filosofie
3. Asset Management als fundament
4. Lumivey Brain en Learning Loop
5. Lumivey Brain Management
6. Controlled Growth en leerstrategie
7. Kwaliteitsfilosofie

**DEEL II — POSITIONERING & DOELGROEP**
8. Wat Lumivey is
9. Doelgroep en gebruikerstypes
10. Positionering
11. Interne vs. externe communicatie

**DEEL III — DISCOVERY ENGINE**
12. Discovery Engine als architectuurlaag
13. Discovery-procesmodel
14. Adaptieve Discovery-voering
15. Onzekerheidsreductie
16. Identiteit vóór Functionaliteit

**DEEL IV — PROCESARCHITECTUUR**
17. Intentie-afdeling
18. Context-afdeling & Asset Management
19. LSD-methode
20. Interpretatie-afdeling
21. Identiteit-afdeling
22. Ziel als informatiestroom
23. Emotie als informatiestroom
24. Completeness Engine
25. Dossierbeheer
26. Bedrijfsdossier als centrale waarheid

**DEEL V — PREVIEW & GOEDKEURING**
27. Preview Checklist
28. Preview — definitie en twee functies
29. Samenvatting vóór Preview
30. Verrijkingsfase
31. Preview Reflectiefase
32. Approval Gate

**DEEL VI — OPERATIONELE PRINCIPES**
33. Stopregels
34. Buiten-Domein Afhandeling
35. "Website niet nodig" als uitkomst
36. Formulieren en gegevens
37. Need to have vs. nice to have
38. Voor de schermen / achter de schermen

**DEEL VII — ARCHITECTUURLAGEN**
39. Gespreksgeheugen als architectuurlaag
40. Completeness Engine — architectuurpositie
41. Visitor First als architectuurprincipe
42. Quiet Web als architectuurprincipe

**DEEL VIII — ORGANISATIE & SYSTEEM**
43. Digitale afdelingen
44. PDCA en Kaizen
45. Twee dashboards
46. Toolstrategie
47. Verificatie en validatie
48. MVP-focus en technische architectuur

**DEEL IX — STRATEGIE & ONTWIKKELING**
49. Marketing en bereikbaarheid
50. Verdienmodel
51. Validaties en simulaties
52. Besluiten tot nu toe
53. Definities
54. Openstaande vragen

---

# DEEL I — STRATEGISCH NIVEAU

## 1  Lumivey als digitale organisatie

Lumivey is geen websitebedrijf. Lumivey is een digitale organisatie die ondernemers helpt met hun volledige digitale aanwezigheid. Websites zijn het eerste zichtbare product. De echte waarde zit achter de schermen.

*De website is de voordeur. Het systeem erachter is het product.*

### Drie niveaus

| Niveau | Beschrijving |
|---|---|
| **Strategisch** | Richting, filosofie, architectuurkeuzes, controlled growth, Lumivey Brain |
| **Tactisch** | Procesontwerp, afdelingsverantwoordelijkheden, workflow, bedrijfsdossier, Learning Loop |
| **Operationeel** | Dagelijkse uitvoering, gesprekken, previews, publicaties, support, Approval Gate |

### Digitale afdelingen

Lumivey is een digitale organisatie met afdelingen, elk met eigen verantwoordelijkheid. Alle afdelingen werken via het centrale bedrijfsdossier. Directe communicatie tussen afdelingen vindt niet plaats.

Huidige afdelingen: Intentie, Context, Discovery Engine, Interpretatie, Identiteit, Ziel & Emotie, Completeness Engine, Preview, Approval Gate, Website, Domein & Hosting, Content & Beeld, Vertrouwen & Publicatie, Support, Finance, Kaizen/PDCA, R&D.

Toekomstige afdelingen: Strategie, Analyse, Marketing, Sales, Planning, Kwaliteitszorg.

---

## 2  Quiet Web — Onderliggende filosofie

Quiet Web is de onderliggende filosofie van Lumivey. Niet simpelweg minimalistisch design, maar cognitieve rust.

- minder mentale belasting voor de ondernemer
- minder keuzestress
- minder technische verantwoordelijkheid bij de gebruiker
- minder formulieren zonder context
- minder losse systemen
- minder digitale ruis

*Als de gebruiker het systeem niet begrijpt, is dat niet automatisch de schuld van de gebruiker. Vaak is het een ontwerpprobleem.*

### Quiet Web geldt ook intern

Lumivey mag niet veranderen in een verzameling dashboards, tools of workflows. Iedere nieuwe functie moet zichzelf verdedigen: maakt dit Lumivey eenvoudiger of complexer?

Quiet Web is niet alleen een positioneringskeuze. Quiet Web is een architectuurprincipe. Zie H42 voor de volledige architectuurkwalificatie.

---

## 3  Asset Management als fundament

Asset Management vormt de architecturale basis van Lumivey. De volgende principes zijn direct herkenbaar:

- Strategisch → Tactisch → Operationeel denken
- PDCA-cyclus als verbetermotor
- Continue verbetering (Kaizen)
- Verificatie en validatie als vaste stappen
- Centrale waarheid via het bedrijfsdossier
- Afdelingen met duidelijke verantwoordelijkheden
- Support als feedback op ontwerp
- Assetdenken versus projectdenken

*Lumivey beheert digitale assets van ondernemers op dezelfde manier waarop een professionele organisatie haar eigen assets beheert: gestructureerd, continu verbeterend en met een duidelijke centrale waarheid.*

---

## 4  Lumivey Brain en Learning Loop

Het Lumivey Brain is de operationele kennislaag van Lumivey, afgeleid van dit werkdocument. Het Brain leert niet zelfstandig en neemt geen beslissingen.

*Werkdocument → Brain → Afdelingen → Software. Niet andersom.*

### De Learning Loop

Nieuwe kennis mag nooit direct in productie komen. Elke wijziging doorloopt de Learning Loop:

- **Observatie** — uit gesprekken, simulaties, support of PDCA
- **Learning Proposal (LP)** — geformuleerde aanbeveling met onderbouwing
- **Goedkeuring** — Ruud beoordeelt, past aan of verwerpt
- **Implementation Proposal (IP)** — concrete uitwerking van de goedgekeurde LP
- **Implementatie** — Brain wordt bijgewerkt
- **Verificatie** — klopt de implementatie met de bedoeling?
- **Validatie** — werkt de wijziging in de praktijk?
- **Productie** — wijziging is live

*Leerpunt → LP → goedkeuring → IP → implementatie → verificatie → validatie → productie.*

---

## 5  Lumivey Brain Management

Het Brain is afgeleid van het werkdocument. Het Brain leert niet zelfstandig. Ruud valideert elk voorstel. Na goedkeuring wordt het Brain bijgewerkt. Iedere wijziging krijgt versiebeheer.

### Uitgangspunten

- Brain is afgeleid van het werkdocument
- Brain leert niet zelfstandig
- Brain genereert wijzigingsvoorstellen op basis van leerpunten
- Ruud valideert elk voorstel
- Na goedkeuring wordt het Brain bijgewerkt
- Iedere wijziging krijgt versiebeheer

### Verbetercyclus

Iedere wijziging doorloopt dezelfde cyclus:

- **Leerpunt** — uit gesprekken, support, simulaties of PDCA-analyse
- **Voorstel** — Brain formuleert een concrete wijziging met toelichting
- **Goedkeuring** — Ruud beoordeelt, past aan of verwerpt
- **Implementatie** — Brain wordt bijgewerkt, versienummer verhoogd

*Het werkdocument stuurt het Brain. Het Brain stuurt de afdelingen. Niet andersom.*

---

## 6  Controlled Growth en leerstrategie

*100 klanten die goed werken zijn waardevoller dan 10.000 klanten in chaos.*

### Prioriteiten boven klantenaantallen

- kwaliteit van de begeleiding
- stabiliteit van het systeem
- leervermogen van de organisatie
- reproduceerbaarheid van het proces

### Leerstrategie

| Aanpak | Toelichting |
|---|---|
| **Begin met 30–50 vergelijkbare ondernemers** | Bv. schilders: zelfde branche, andere persoonlijkheden |
| **Patronen herkennen** | Wat werkt? Wat werkt niet? Welke vragen zijn overbodig? |
| **Gecontroleerd uitbreiden** | Pas opschalen als kwaliteit en reproduceerbaarheid bewezen zijn |

---

## 7  Kwaliteitsfilosofie

Kwaliteit is geen afdeling. Het is een eigenschap van het gehele systeem. Verificatie, validatie, QA en PDCA zijn expliciete onderdelen van de architectuur, niet optionele stappen.

*Lumivey groeit niet door meer klanten te werven. Lumivey groeit door het systeem betrouwbaarder te maken.*

### Kwaliteitslagen

- **Verificatie** — klopt de output met de bedoeling?
- **Validatie** — werkt de output in de praktijk?
- **QA** — zijn de processen op orde?
- **PDCA** — wordt er structureel verbeterd?
- **Approval Gate** — geen klant zonder menselijke controle in de eerste fase
- **Learning Loop** — nieuwe kennis wordt getest voor productie

---

# DEEL II — POSITIONERING & DOELGROEP

## 8  Wat Lumivey is

Lumivey helpt kleine ondernemers aan een professionele website en online aanwezigheid, zonder digitale stress. Niet door hen meer tools te geven, maar door het systeem achter de schermen slimmer te maken.

*De ondernemer hoeft het systeem niet te begrijpen. Het systeem moet de ondernemer begrijpen.*

Lumivey is intern een Discovery Engine: een systeem dat de ondernemer helpt zijn eigen situatie te verhelderen, zijn identiteit te bevestigen en zijn behoeften te herkennen. Lumivey is geen informatieverzamelaar, geen technisch formulier en geen verkoopmachine.

---

## 9  Doelgroep en gebruikerstypes

Lumivey richt zich op kleine ondernemers. Binnen die doelgroep zijn meerdere gebruikerstypes die een andere benadering vragen.

### Primaire doelgroep

- nog geen website of verouderde website
- weinig digitale kennis
- liever het vak doen dan digitale infrastructuur beheren
- slechte ervaringen met webbouwers
- professioneel zichtbaar willen zijn

### Gebruikerstypes

| Type | Kenmerken en aanpak |
|---|---|
| **Expert** | Heeft al kennis, wil richting. Minder vragen, meer advies. Zie Expert Mode. |
| **Starter** | Nieuw bedrijf, nog geen aanwezigheid. Standaard Discovery. |
| **Vakman** | Wil zijn vak doen, niet nadenken over techniek. Ontzorging centraal. |
| **Kritische klant** | Eerdere slechte ervaringen. Vertrouwen opbouwen vóór inhoud. |
| **Onzekere klant** | Weet niet wat hij wil. Zachte vragen, veel samenvatten. |
| **Gedelegeerde inkoper** | Handelt namens iemand anders. Identificeer beslisser vroeg in gesprek. |
| **Zoekende starter** | Geen naam, branche of richting. Eerst duidelijkheid, dan Discovery. |

### Expert Mode

Wanneer een ondernemer aangeeft alle hulp nodig te hebben of de expert het te laten bepalen, activeert Lumivey Expert Mode:

- minder vragen stellen
- meer advies geven
- richting geven
- begeleiden

Triggers: "Ik weet het niet", "Jij bent de expert", "Vertel mij maar wat ik nodig heb", "Ik heb alle hulp nodig".

### Zoekende Starter

De Zoekende Starter heeft geen duidelijke naam, branche of richting. Lumivey pauzeert de Discovery en helpt eerst duidelijkheid te creëren. Pas daarna begint de reguliere Discovery.

---

## 10  Positionering

Lumivey verkoopt niet primair websites. Lumivey verkoopt begrip, begeleiding, eenvoud, tijdsbesparing, minder gedoe en digitale rust.

*Daar begrijpen ze je.*
*Dat scheelt zoveel gedoe. Zelfs ik kan het doen.*

Lumivey levert geautomatiseerd maatwerk: geen standaardtemplate, geen duur maatwerktraject, wel een persoonlijke website die past bij wie de ondernemer is.

---

## 11  Interne vs. externe communicatie

| Intern | Extern |
|---|---|
| **Lumivey is een Discovery Engine** | Lumivey helpt ondernemers aan een website |
| **Lumivey vermindert onzekerheid** | Lumivey helpt ondernemers aan een website |
| **Lumivey bouwt een bedrijfsdossier** | Lumivey regelt de techniek eromheen |
| **Lumivey gebruikt een Learning Loop** | Lumivey leert van iedere klant |
| **Lumivey hanteert een Approval Gate** | Lumivey controleert zorgvuldig |

*Lumivey mag extern nooit communiceren alsof het geen websites maakt. De interne architectuur is het systeem. Het externe verhaal is de belofte.*

---

# DEEL III — DISCOVERY ENGINE

## 12  Discovery Engine als architectuurlaag

De Discovery Engine is de centrale gesprekslaag van Lumivey. Het is een zelfstandige architectuurlaag — geen gespreksstijl en geen optionele fase.

### Definitie

De Discovery Engine helpt de ondernemer zijn eigen situatie te verhelderen, zijn identiteit te bevestigen en zijn behoeften te herkennen — voordat enige vervolgstap plaatsvindt.

De Discovery Engine **is niet**:
- een informatieverzamelaar voor technische verwerking
- een intake-engine
- een technisch formulier
- een verkoopmachine

*Herkenning, verheldering en identiteitsbevestiging gaan altijd voor informatieverzameling.*

### Architectuurprincipes van de Discovery Engine

**OB-1 — Lumivey is een Discovery Engine, geen intake-engine**
Dit is een onveranderlijk ontwerppbesluit. Elke afwijking vereist een goedgekeurd Learning Proposal.

**Geen intake-taal**
Elke formulering die de ondernemer positioneert als informatiebron die gegevens aanlevert, is verboden. De eerste reactie van Lumivey is altijd een herkenning of één identiteitsvraag — nooit een ontvangstbevestiging.

Verboden openingspatronen (LP28):
- "Bedankt voor het delen van..."
- "Fijn dat u..."
- "Goed om te weten..."
- "Wat leuk dat..."
- "Als [beroep] is het belangrijk dat..."

**Discovery stopt wanneer verdere vragen geen betekenis meer toevoegen**
Stop is niet alleen toegestaan bij voldoende zekerheid. Stop is ook toegestaan wanneer extra informatie geen relevante waarde meer toevoegt voor de ondernemer. Dit vloeit direct voort uit Quiet Web, Visitor First en het principe Stop vóór volledigheid.

### Drie geldige uitkomsten

Alle drie zijn gelijkwaardig. Geen van de drie is een fout.

| Uitkomst | Wanneer |
|---|---|
| **Preview** | Voldoende zekerheid bereikt. Ondernemer wil een website en heeft bevestigd dat Lumivey zijn situatie begrijpt. |
| **Doorverwijzing** | Ondernemer heeft een andere behoefte of is beter geholpen met een andere aanpak. |
| **Stop** | Ondernemer wil geen website op dit moment, wil nadenken, twijfelt, of het doel is bereikt zonder website. |

### Historische noot

In Werkdocument V4 werd de term 'Intake Engine' gebruikt voor de centrale gesprekslaag. Deze term is met ingang van V5 vervangen door 'Discovery Engine' overeenkomstig Brain v0.1 OB-1 en de Architectuurreview V5. De inhoudelijke functie van het gesprek (onzekerheid reduceren, identiteit bevestigen, context verzamelen) is ongewijzigd. Alleen de architectuurbenadering en terminologie zijn aangepast.

---

## 13  Discovery-procesmodel

Het Discovery-procesmodel is het formele architectuurmodel van het Lumivey-gespreksproces. Het is geen flowchart en geen illustratie — het is een bindend procesmodel.

### Structuur

Het model kent drie lagen:

1. **Hoofdproces** — de verplichte volgorde van Discovery
2. **Ondersteunende lagen** — actief tijdens het hoofdproces
3. **Permanente systeemlagen** — altijd actief, ongeacht fase

---

### Hoofdproces

**Stap 0 — Gespreksgeheugen activeren**
Vóór elk gesprek wordt het gespreksgeheugen geactiveerd. Indien eerder bevestigde informatie beschikbaar is via het bedrijfsdossier, wordt deze geladen. Reeds bevestigde informatie wordt niet opnieuw gevraagd (LP26).

**Stap 1 — Intentie herkennen**
De eerste taak is: waarom is deze ondernemer hier? Niet: welke website wil hij?
De Discovery Engine herkent de route: nieuwe klant, bestaande klant, aanpassing, klacht, informatievraag of bestaande website.

**Stap 2 — Context inventariseren**
Beschikbaar bewijs wordt verzameld en geanalyseerd vóór vragen worden gesteld (Evidence First). Bronnen: website, sociale media, Google Bedrijfsprofiel, KvK, brochures, foto's, reviews.
Bewijs wordt herkend en geverifieerd als twee afzonderlijke stappen. Bestaand materiaal is historisch bewijs, geen actuele waarheid (Historische Spiegel).

**Stap 3 — Identiteit verankeren**
De identiteit van de ondernemer wordt vastgesteld vóór enige functionele vraag. Dit is een absolute prioriteitsregel — niet trigger-gebaseerd, maar altijd van toepassing (LP31, Brain v0.1 sectie 3.1 stap 1).
Het eerste antwoord van de Discovery Engine is altijd een identiteitsvraag of een herkenning — nooit een functionele vraag over diensten, werkgebied of website-inhoud.

**Stap 4 — Discovery voeren**
Het gesprek wordt gevoerd met de LSD-methode (Luisteren, Samenvatten, Doorvragen) als gesprekstechniek. Eén vraag per beurt. Toon past zich aan op het register van de ondernemer (LP31). Bevestigde informatie wordt nooit herhaald (LP26). Bewijs wordt gebruikt vóór vragen worden gesteld (Evidence First).

**Stap 5 — Onzekerheid bewaken**
De Completeness Engine bewaakt continu of voldoende zekerheid bestaat voor de volgende stap. Dit is geen volledigheidscheck — het is een zekerheidsmoment. Volledigheid is gewenst, zekerheid is vereist.

**Stap 6 — Uitkomstbesluit**
Op basis van de Completeness Engine en de signalen van de ondernemer bepaalt de Discovery Engine de uitkomst:

- **Preview als instrument** — ondernemer denkt visueel, heeft moeite met verwoorden, of reageert beter op beelden dan op vragen. Preview wordt ingezet om verdere zekerheid te creëren.
- **Preview als uitkomst** — voldoende zekerheid bereikt. Samenvatting → WoW-preview.
- **Stop** — ondernemer wil stoppen, twijfelt, of verdere vragen voegen geen betekenis meer toe.
- **Doorverwijzing** — ondernemer heeft een andere behoefte of is beter geholpen elders.

---

### Ondersteunende lagen

| Laag | Functie | Actief tijdens |
|---|---|---|
| **Interpretatie-afdeling** | Betekenis herkennen achter woorden | Stap 4 (Discovery voeren) |
| **Identiteit-afdeling** | Ziel van het bedrijf verankeren | Stap 3 en 4 |
| **Ziel** | Eigen woorden, wat nooit verloren mag gaan | Stap 3, 4 en 6 |
| **Emotie** | Tempo en toon bewaken | Volledig hoofdproces |
| **Dossierbeheer** | Asset/Dossier/Context/Ruis bijhouden | Continu actief |
| **Approval Gate** | Menselijke controle vóór verdere stappen | Na stap 6 (Preview als uitkomst) |

---

### Permanente systeemlagen

| Laag | Functie |
|---|---|
| **Gespreksgeheugen** | Cross-sessie beschikbaarheid van bevestigde informatie. Architectuurlaag. Zie H39. |
| **Brain** | Operationele kennislaag. Stuurt alle afdelingen. |
| **Learning Loop** | Nieuwe kennis via LP-cyclus. Geen directe productie. |
| **Completeness Engine** | Onzekerheidsmonitor. Bewaakt zekerheid, niet volledigheid. Zie H24 en H40. |
| **Visitor First** | Gedragskernel. Altijd actief. Zie H41. |
| **Quiet Web** | Ontwerpfundament. Cognitieve rust als bouwvereiste. Zie H42. |

---

## 14  Adaptieve Discovery-voering

Niet iedere ondernemer krijgt dezelfde Discovery. De Discovery Engine past de aanpak aan op het herkende gebruikerstype en de signalen uit het gesprek.

### Aanpassingen per type

- **Expert**: minder vragen, meer richting geven, advies in plaats van exploratie
- **Vakman**: focus op ontzorging, techniek volledig achterwege
- **Kritische klant**: vertrouwen vóór inhoud, langzamere opbouw
- **Onzekere klant**: zachte vragen, veel samenvatten, geen druk
- **Gedelegeerde inkoper**: vroeg de beslisser identificeren
- **Zoekende starter**: eerste pauze, duidelijkheid creëren

### Gedragsregels Discovery-voering

**Eén vraag per beurt (harde grens)**
De Discovery Engine stelt nooit meer dan één vraag per gespreksbeurt. Geen uitzonderingen.

**Toon aanpassen op invoersignaal (LP31)**
Wanneer de invoer van de ondernemer informeel is — geen hoofdletters, geen interpunctie, korte zinnen — past de Discovery Engine de toon aan: direct, rustig, niet formeel. Toon spiegelt het register van de ondernemer.

**Geen herhaling van bevestigde informatie (LP26)**
Reeds bevestigde informatie wordt niet opnieuw gevraagd. Ze wordt actief gebruikt in het verdere gesprek. Gespreksgeheugen is de architectuurvoorwaarde voor LP26-naleving.

**Geen aannames zonder signaal**
De Discovery Engine schrijft geen eigenschappen, kwalificaties of stijlkenmerken toe aan de ondernemer zonder dat de ondernemer dit zelf heeft aangedragen.

**Geen intake-taal (LP28)**
De opening is altijd een herkenning of één directe vraag — nooit een ontvangstbevestiging van informatie. Zie verboden openingspatronen in H12.

**Geen vragen die al beantwoord kunnen worden**
De Discovery Engine stelt geen vragen waarop het antwoord al beschikbaar is via bestaand bewijs of eerder bevestigde informatie.

**Adreslogica (LP27)**
Niet ieder bedrijf heeft dezelfde adresbehoefte:

| Bedrijfstype | Werkgebied | Bezoekadres |
|---|---|---|
| Fysiek bedrijf (winkel, praktijk, salon, garage, restaurant) | Verplicht | Verplicht |
| Mobiel bedrijf (schilder, hovenier, loodgieter, installateur) | Verplicht | Optioneel |

### Eerste-beurt-protocol (LP31)

Wanneer het eerste bericht van de ondernemer uitsluitend bestaat uit een beroepsnaming, een naam, een locatie of een korte beschrijving zonder verdere context, gelden de volgende absolute regels:

- Stel exact één vraag
- Stel een identiteitsvraag — geen functionaliteitsvraag
- Gebruik geen bedankformule, compliment of kwalificatie
- Gebruik geen intake-taal
- Maak geen aannames over eigenschappen van de ondernemer
- Gebruik maximaal één zin
- Pas toon aan op het register van de invoer

| Invoer | Correct eerste antwoord |
|---|---|
| `ik ben een schilder` | Zelfstandig, of werk je met mensen om je heen? |
| `ik zit in Dordrecht` | Wat voor werk doe je vanuit Dordrecht? |
| `ik wil een website` | Wat voor werk doe je? |
| `ik ben diabetespedicure` | Werk je zelfstandig, of heb je een team om je heen? |

---

## 15  Onzekerheidsreductie

Lumivey verzamelt geen informatie om volledig te zijn. Lumivey verzamelt informatie om onzekerheid te verminderen.

*Elke vraag moet aantoonbaar onzekerheid reduceren. Vragen die geen nieuwe zekerheid opleveren worden niet gesteld.*

### Onzekerheid vs. volledigheid

| Volledigheidsdenken (vervallen) | Onzekerheidsreductie (V5) |
|---|---|
| Alle velden invullen | Alleen vragen wat ontbreekt |
| Discovery afronden vóór preview | Preview bij voldoende zekerheid — of eerder als instrument |
| Dezelfde aanpak voor iedereen | Adaptief per gebruikerstype |
| Gesprek als formulier | Gesprek als begripsproces |

### Onzekerheidsmodel

Onzekerheid wordt erkend en benoemd, niet weggewerkt via aannames. Wanneer beschikbaar bewijs onvoldoende of onbetrouwbaar is, erkent de Discovery Engine dit expliciet vóór op basis van aannames informatie wordt gepresenteerd.

Onzekerheid als diepste laag: de Discovery Engine benoemt en erkent onzekerheid voordat betekenis wordt toegekend. Een ondernemer die onzeker is, wordt niet gedwongen tot zekerheid. Onzekerheid is een geldige gespreksstand.

---

## 16  Identiteit vóór Functionaliteit

Identiteit vóór Functionaliteit is een absolute prioriteitsregel — geen trigger-gebaseerde uitzondering.

*Stel eerst vast wie de ondernemer is. Dan pas: wat hij nodig heeft.*

De Discovery Engine stelt altijd eerst de identiteit vast. Dit geldt niet alleen bij groeisignalen, maar bij elk gesprek, elke beurtwisseling en elke fase van de Discovery.

### Wat identiteit inhoudt

Identiteit is meer dan beroepsnaming. Identiteit omvat:

- is de ondernemer zelfstandig of heeft hij personeel?
- wat voor type werk doet hij?
- voor wie doet hij dat werk?
- wat maakt zijn bedrijf eigen?

De vraag "Wat voor werk doe je?" gaat altijd vóór de vraag "Wat wil je op je website?".

### Triggers voor verdiepte identiteitscheck

Wanneer signalen duiden op een nieuwe fase in het bedrijf, stopt de Discovery Engine de functionele vragen en verdiept de identiteitsvraag:

- groei of uitbreiding
- trots op iets nieuws
- nieuwe medewerkers
- verhuizing
- ambitie of nieuwe richting
- nieuwe fase in het bedrijf

*Wie is deze ondernemer geworden? Pas daarna: welke pagina's, functies of modules.*

---

# DEEL IV — PROCESARCHITECTUUR

## 17  Intentie-afdeling

De eerste taak is: waarom bent u hier? Niet: welke website wilt u?

### Wat de afdeling herkent

- nieuwe klant wil website
- bestaande klant wil iets aanpassen
- bezoeker heeft klacht of factuurvraag
- bezoeker is nieuwsgierig of digibeet
- bezoeker wil kosten weten
- bezoeker heeft een bestaande website

De afdeling bepaalt welke route wordt gestart en welk gebruikerstype van toepassing is.

---

## 18  Context-afdeling & Asset Management

Context is een verplichte stap in iedere workflow. Assets worden eerst verzameld en geanalyseerd. Pas daarna worden ontbrekende punten gevraagd.

*Assets verzamelen → analyseren → ontbrekende informatie bepalen → alleen het ontbrekende vragen.*

### Volgorde

- URL's en bronnen direct analyseren
- Bestaand materiaal structureren in het dossier
- Bepalen wat ontbreekt
- Alleen ontbrekende informatie vragen

### Dossiercategorieën

| Categorie | Beschrijving |
|---|---|
| **Asset** | Bruikbaar materiaal dat direct in het dossier gaat |
| **Dossier** | Bevestigde informatie over het bedrijf |
| **Context** | Gevonden informatie, nog niet bevestigd |
| **Ruis** | Niet-relevante informatie, niet opgeslagen |

### Mogelijke bronnen

- website, Instagram, Facebook, LinkedIn, Google Bedrijfsprofiel
- KvK, brochures, PDF-bestanden, visitekaartjes
- foto's, logo's, bedrijfswagens, projectfoto's
- reviews, bestaande teksten

### Bestaande Website Fast Track

Wanneer een bestaande website aanwezig is:

- Analyseer de huidige website volledig
- Gebruik bestaande informatie in het dossier
- Vraag alleen wat moet veranderen of ontbreekt
- Verkort de Discovery aanzienlijk

*Vraag niet naar informatie die Lumivey zelf betrouwbaar kan vinden.*

---

## 19  LSD-methode

LSD — Luisteren, Samenvatten, Doorvragen — is de gespreksmethode die binnen de Discovery Engine wordt gebruikt. LSD is geen zelfstandige motor en geen afdeling. Het is de techniek waarmee de Discovery Engine het gesprek voert.

Lumivey stelt geen vragen om velden te vullen. Lumivey stelt vragen om onzekerheid te reduceren en de ondernemer beter te begrijpen.

### Kenmerken

- voelt menselijk
- stelt één vraag tegelijk
- gebruikt eenvoudige taal
- vat regelmatig samen
- vraagt bevestiging bij elke interpretatie
- stopt bij voldoende zekerheid
- respecteert "nee"

### LSD als kwaliteitscontrole

Alles wat Lumivey denkt te begrijpen wordt samengevat vóór het als feit wordt gebruikt.

*"Begrijpen wij goed dat betrouwbaarheid en het nakomen van afspraken voor u belangrijker zijn dan mooie verkooppraatjes?"*

Pas na bevestiging wordt het een echt gegeven in het dossier.

---

## 20  Interpretatie-afdeling

Niet alleen: wat zegt iemand letterlijk? Maar: wat probeert iemand duidelijk te maken?

*"Ik wil op het internet." — zichtbaar zijn, professioneel overkomen, weet niet precies wat nodig is.*
*"Ik wil schilderen, niet op TokTik." — aanwezig maar niet op social media, ontzorging zoeken.*

*Interpretaties zijn hypotheses. Geen feiten.*

Werkwijze: Luisteren → Interpreteren → Samenvatten → Bevestigen → Opslaan als Dossier.

---

## 21  Identiteit-afdeling

Lumivey begrijpt niet alleen wat een bedrijf doet. Lumivey begrijpt wat een bedrijf eigen maakt.

- vakmanschap, betrouwbaarheid, persoonlijke service
- lokale binding, familiebedrijf, historie
- duurzaamheid, specialistische kennis, snelheid
- bescheidenheid, persoonlijke motivatie

Minimaal één bevestigd identiteitskenmerk is vereist vóór de WoW-preview. Persoonlijke informatie wordt alleen zichtbaar gebruikt na akkoord.

---

## 22  Ziel als informatiestroom

Ziel is een zelfstandige informatiestroom, los van Identiteit. Ziel raakt aan wat de ondernemer drijft, wat hij nooit wil verliezen en wat nooit in een template past.

*Wat mag nooit verloren gaan in de vertaling naar een website?*

### Wat de Ziel-informatiestroom levert

- eigen woorden van de ondernemer — niet geparafraseerd
- wat hij nooit wil zijn of klinken als
- wat hij wil dat klanten van hem denken

### Gebruik door afdelingen

| Afdeling | Gebruik |
|---|---|
| **Discovery (LSD)** | Toon van het gesprek bewaken |
| **Identiteit** | Kernkenmerk aanscherpen |
| **Preview** | Emotionele lading van de homepage |

---

## 23  Emotie als informatiestroom

Emotie is een zelfstandige informatiestroom. Emotie bepaalt het tempo van het gesprek, de toon van de benadering en de energieniveaus rondom beslissingen.

*Emotie is geen soft gegeven. Het is cruciale informatie voor de aanpak.*

### Wat wordt geobserveerd

- enthousiasme, twijfel, wantrouwen, opluchting
- trots op het werk, onzekerheid over digitaal
- haast, terughoudendheid, eerdere teleurstellingen

### Gebruik door afdelingen

| Afdeling | Gebruik |
|---|---|
| **Discovery (LSD)** | Tempo en toon van het gesprek aanpassen |
| **Identiteit** | Veiligheid creëren voor persoonlijke informatie |
| **Preview** | WoW-moment afstemmen op emotionele staat |

---

## 24  Completeness Engine

Gesprekken stoppen niet bij volledigheid. Gesprekken stoppen bij voldoende zekerheid voor de volgende stap.

*Voldoende zekerheid is geen percentage. Het is een oordeel op basis van identiteit, context, doelgroep en vertrouwen in de richting.*

De Completeness Engine is een onzekerheidsmonitor: zij bewaakt continu of de Discovery Engine voldoende zekerheid heeft bereikt om een uitkomstbesluit te nemen. Volledigheid is gewenst. Zekerheid is vereist.

### Completeness wordt bepaald door

- voldoende duidelijkheid over identiteit
- voldoende duidelijkheid over doelgroep
- voldoende duidelijkheid over doel van de website
- relevante assets beschikbaar
- voldoende beeld van gewenste stijl
- vertrouwen in de richting van de preview

### Preview als instrument voor onzekerheidsreductie

Wanneer een ondernemer moeilijk kan verwoorden wat hij wil, of beter reageert op beelden dan op vragen, mag de Completeness Engine de preview inzetten vóór alle vinkjes groen zijn. De preview wordt dan een instrument om verdere zekerheid te creëren — niet de uitkomst van voldoende zekerheid.

Zie H28 voor de volledige beschrijving van de twee previewfuncties.

### Stop bij betekenisloze vragen

De Completeness Engine herkent ook het moment waarop verdere vragen geen betekenis meer toevoegen. Wanneer extra informatie de richting of het begrip niet meer verbetert, geeft de Completeness Engine een stopsignaal — ook als niet alle vinkjes groen zijn.

---

## 25  Dossierbeheer

Niet alles wat tijdens het gesprek wordt verzameld, hoort in het dossier. Lumivey werkt met vier categorieën.

| Categorie | Wat hoort erin |
|---|---|
| **Asset** | Bruikbaar materiaal: logo's, foto's, bestaande teksten, URL's |
| **Dossier** | Bevestigde feiten: naam, branche, identiteitskenmerk |
| **Context** | Gevonden informatie, hypotheses, interpretaties |
| **Ruis** | Buiten-domein, niet-relevant, dubbel |

Ruis wordt herkend, gedocumenteerd als categorie en verder genegeerd. Niet opgeslagen in het actieve dossier.

---

## 26  Bedrijfsdossier als centrale waarheid

Het bedrijfsdossier is de centrale waarheid van het systeem. Alle afdelingen werken op hetzelfde dossier. Geen afdeling communiceert buiten het dossier om.

*Afdelingen communiceren niet rechtstreeks met elkaar maar via het bedrijfsdossier.*

| Onderdeel | Inhoud |
|---|---|
| **Bedrijfsprofiel** | Naam, type, sector, werkgebied, doelgroep |
| **Dienstenprofiel** | Aangeboden diensten, specialisaties |
| **Identiteitsprofiel** | Bevestigde identiteitskenmerken |
| **Ziel & Emotie** | Eigen woorden, emotionele staat, tempo |
| **Visueel profiel** | Kleuren, stijl, beeldmateriaal, logo |
| **Contactprofiel** | Telefoon, e-mail, adres, KvK |
| **Reputatieprofiel** | Reviews, onderscheidingen, projecten |
| **Contextbronnen** | Gebruikte bronnen en hun status |
| **Openstaande vragen** | Informatie die nog ontbreekt |
| **Dossiercategorieën** | Asset / Dossier / Context / Ruis |

---

# DEEL V — PREVIEW & GOEDKEURING

## 27  Preview Checklist

Vóór de preview als uitkomst worden interne vinkjes gecontroleerd door de Completeness Engine.

### Verplichte vinkjes

- Bedrijfsnaam of werknaam bevestigd
- Type onderneming duidelijk
- Werkgebied bekend
- Doelgroep duidelijk
- Reden voor website bevestigd
- Wat de website bezoekers moet bieden
- Minimaal één bevestigd identiteitskenmerk
- Eerste beeld van gewenste uitstraling
- Eerste beeld van benodigde structuur

### Verrijkingsvinkjes

- bestaande website geanalyseerd
- logo beschikbaar
- eigen beeldmateriaal aanwezig
- social media geanalyseerd
- recensies gelezen
- bestaande teksten verwerkt

**Noot:** deze checklist geldt voor Preview als uitkomst. Preview als instrument kan worden ingezet vóór alle verplichte vinkjes groen zijn. Zie H28.

---

## 28  Preview — definitie en twee functies

De preview is geen functie. De preview is een emotioneel moment.

*"Ja, dit ben ik." — dat is het doel van de preview.*

### Twee formeel onderscheiden previewfuncties

**Preview als uitkomst**
De preview is de uitkomst wanneer de Completeness Engine voldoende zekerheid heeft bereikt. Lumivey toont uit eigen initiatief een eerste richting bij voldoende zekerheid. Vóór de preview: verplichte samenvatting (H29). Na de preview: reflectiefase (H31) en Approval Gate (H32).

Voorwaarden voor Preview als uitkomst:
- Discovery is volledig
- Ondernemer wil een website
- Ondernemer heeft bevestigd dat Lumivey zijn situatie goed heeft begrepen

**Preview als instrument**
De preview wordt als instrument ingezet wanneer de ondernemer moeite heeft met verwoorden wat hij wil, visueel denkt, of beter reageert op beelden dan op vragen. In dat geval mag de preview worden ingezet vóór alle vinkjes groen zijn — als middel om verdere zekerheid te creëren.

Voorwaarden voor Preview als instrument:
- Ondernemer geeft visuele voorkeur of heeft moeite met verwoorden
- Voldoende basiscontext beschikbaar voor een betekenisvolle eerste richting
- Preview is expliciet gericht op het verkrijgen van feedback, niet op het tonen van een eindresultaat

*De preview is niet alleen het resultaat van begrip. De preview mag ook worden gebruikt als instrument om verder begrip te creëren.*

### Visuele WoW-factor

De echte WoW ontstaat wanneer kleuren, fotografie, sfeer, stijl en visuele identiteit zichtbaar zijn. Hoe beter de context, hoe sterker de visuele preview.

*Plaatje → praatje. Eerst visueel laten zien. Daarna uitleggen welke inzichten zijn gebruikt.*

### Fictieve vervolgstappen vermijden

Lumivey mag niet zeggen: ik stuur een sponsorvoorstel, ik maak een offerte, of ik neem contact op — als die afdelingen nog niet bestaan. Wel: "Ik neem dit mee in het voorstel."

---

## 29  Samenvatting vóór Preview

Vóór de preview als uitkomst vat Lumivey alles samen. Dit is een verplichte stap.

### Inhoud van de samenvatting

- bedrijfsnaam en type
- doelgroep
- werkgebied
- identiteit en kernkenmerk
- wensen en doel van de website
- bijzonderheden en openstaande punten

De samenvatting biedt de ondernemer de kans om iets te corrigeren vóór de preview. Dit voorkomt frustratie achteraf.

---

## 30  Verrijkingsfase

Na een succesvolle preview levert de ondernemer vrijwillig aanvullend materiaal. De preview activeert medewerking.

*De preview activeert de medewerking van de ondernemer. Niet door te vragen, maar door te laten zien.*

- foto's en logo's
- Instagram, LinkedIn
- projectvoorbeelden
- reviews en teksten

---

## 31  Preview Reflectiefase

Na de preview ontstaat een nieuwe fase. Gebruikers ontdekken vaak pas dan wat ze werkelijk willen.

- **Preview** — eerste richting getoond
- **Reflectie** — ondernemer verwerkt en reageert
- **Wijzigingen** — gerichte aanpassingen op basis van feedback
- **Akkoord** — expliciete bevestiging vóór verdere uitvoering

### Grenzen aan de reflectiefase

Lumivey begrenst eindeloos perfectioneren. Na twee rondes wijzigingen stelt Lumivey de vraag: is de richting goed genoeg om verder te gaan? Perfectie is geen vereiste voor publicatie.

---

## 32  Approval Gate

Na de Discovery en de preview-reflectiefase biedt Lumivey een samenvatting aan Ruud aan. Geen verdere stappen zonder goedkeuring in de eerste fase.

### Inhoud van het Approval-pakket

- klantprofiel
- bedrijfsdossier-samenvatting
- websitevoorstel
- bijzonderheden en risico's

### Uitkomsten

- **Goedgekeurd** — traject gaat door
- **Aangepast** — Ruud geeft correcties, systeem past aan
- **Afgewezen** — traject stopt of begint opnieuw

### Schaalplan

| Fase | Controlefrequentie |
|---|---|
| **Eerste klanten** | 100% handmatige controle door Ruud |
| **Schaalfase** | Steekproefsgewijze controle |
| **Volwassen systeem** | Automatisch bij afwijkingen, handmatig op verzoek |

### De Approval Gate als kwaliteitsfunctie

De Approval Gate is een kwaliteitsfunctie. Niet een persoonsfunctie. Ruud vervult deze rol tijdens de MVP-fase. In de volwassen fase kan de Approval Gate gedeeltelijk of volledig worden gedelegeerd aan een toekomstige Quality Assurance Department.

*De Approval Gate is een kwaliteitsfunctie. Niet een persoonsfunctie. De functie is permanent. De invulling ervan kan groeien.*

---

# DEEL VI — OPERATIONELE PRINCIPES

## 33  Stopregels

Lumivey stopt met doorvragen wanneer de Completeness Engine voldoende zekerheid signaleert, de ondernemer koopvragen stelt, de ondernemer aangeeft klaar te zijn, of wanneer verdere vragen geen betekenis meer toevoegen.

*Stop is een geldige uitkomst. Stop is niet alleen toegestaan — stop is soms de meest correcte keuze.*

### Stopsignalen

**Completeness Engine-signaal**
De Completeness Engine signaleert dat voldoende zekerheid bereikt is voor de volgende stap.

**Koopvragen van de ondernemer**
*"Wat kost het?" / "Wanneer is het klaar?" / "Kunnen jullie dat maken?"*
Lumivey herkent deze signalen en begeleidt de overgang soepel naar de volgende fase.

**Ondernemer geeft aan klaar te zijn**
Wanneer de ondernemer expliciet aangeeft te willen stoppen, twijfelen of later terug te komen, stopt Lumivey actief.

**Verdere vragen voegen geen betekenis meer toe**
Wanneer extra informatie de richting of het begrip niet meer verbetert, stopt de Discovery Engine. Dit is geen fout — het is een actieve keuze in lijn met Quiet Web, Visitor First en Stop vóór volledigheid.

### Relatie met architectuurprincipes

Stopregels zijn de operationele uitdrukking van drie architectuurprincipes:
- **Quiet Web** — minder is beter dan meer als het meer geen waarde toevoegt
- **Visitor First** — de ondernemer bepaalt het tempo
- **Stop vóór volledigheid** — zekerheid is vereist, volledigheid is gewenst

---

## 34  Buiten-Domein Afhandeling

Vragen buiten het domein van Lumivey worden begrensd. Lumivey wordt geen helpdesk en voert geen eindeloze discussies over onderwerpen buiten het domein.

*Lumivey mag geen helpdesk worden voor onderwerpen buiten het domein.*

### Proces

- **Herkennen** — vraag valt buiten het domein van Lumivey
- **Begrenzen** — vriendelijk en helder aangeven dat dit buiten het domein valt
- **Eenmalig terugbrengen** — één keer uitleggen wat Lumivey wel kan doen
- **Afsluiten** — onderwerp wordt niet opnieuw opgepakt

### Voorbeelden

- Printerprobleem — buiten domein
- Wifi-instelling — buiten domein
- Darkweb-vragen — buiten domein
- SEO-strategie zonder website — buiten domein

---

## 35  "Website niet nodig" als uitkomst

Lumivey mag concluderen dat een website op dit moment niet de juiste oplossing is.

*Quiet Web gaat vóór omzet.*

Wanneer de Discovery Engine signaleert dat een ondernemer overvolle agenda heeft, niet de capaciteit heeft om een website te beheren, of de website geen waarde toevoegt, is dit een legitieme uitkomst.

Voorbeeld: de rioolontstopper die al meer werk heeft dan hij aankan. Een website vergroot het probleem. Lumivey benoemt dit eerlijk.

---

## 36  Formulieren en gegevens

*Eerst: begrijpen. Daarna: gegevens vastleggen.*

Formulieren zijn prima voor feiten. Niet voor onzekerheid, identiteit of richting. Slimme verrijking: KvK-nummer levert naam en adres, foto van bedrijfsbus levert logo en kleuren.

---

## 37  Need to have vs. nice to have

| Need to have | Nice to have |
|---|---|
| **Identiteit** | SEO-optimalisatie |
| **Inhoud** | Social media beheer |
| **Domein** | Google Bedrijfsprofiel |
| **Hosting** | Nieuwsbrieven en blogs |
| **Publicatie** | Geavanceerde marketingkoppelingen |

*Lumivey verkoopt eerst de website. Uitbreidingen volgen later.*

---

## 38  Voor de schermen / achter de schermen

| Voor de schermen | Achter de schermen |
|---|---|
| **Gesprek voeren** | Analyseren en context verzamelen |
| **Luisteren** | Dossier opbouwen |
| **Samenvatten** | Domeinen controleren |
| **Begeleiden** | Completeness Engine bewaken |

*Voor de schermen gesprek. Achter de schermen actie.*

---

# DEEL VII — ARCHITECTUURLAGEN

## 39  Gespreksgeheugen als architectuurlaag

*Een ondernemer mag nooit dezelfde informatie twee keer hoeven geven.*

Gespreksgeheugen is geen operationele functie en geen MVP-oplossing. Gespreksgeheugen is een architectuurlaag: een structurele garantie dat bevestigde informatie cross-sessie beschikbaar blijft.

### Definitie

Gespreksgeheugen is de architectuurlaag die ervoor zorgt dat informatie die door de ondernemer is bevestigd in een eerder gesprek, beschikbaar is in ieder volgend gesprek. De ondernemer hoeft zijn situatie niet opnieuw uit te leggen.

### Architectuurstatus

Gespreksgeheugen is een architectuurlaag omdat LP26 structureel niet kan worden nageleefd zonder cross-sessie geheugen. LP26 stelt: wanneer informatie bevestigd is, wordt ze niet opnieuw gevraagd — ze wordt gebruikt. Deze regel werkt alleen als een systeem-niveau-garantie, niet als een per-sessie-instructie.

*Gespreksgeheugen is geen luxe maar een voorwaarde.* (LP26)

### Persistentievorm

Het bedrijfsdossier is de persistentievorm van het gespreksgeheugen. Gespreksgeheugen voedt het dossier; het dossier is de architectuurbron voor cross-sessie beschikbaarheid.

### Relaties

**Relatie met LP26**
LP26 vereist gespreksgeheugen als architectuurlaag. Zonder geheugen kan LP26 structureel niet worden nageleefd. Gespreksgeheugen is de technische voorwaarde voor LP26.

**Relatie met Discovery**
Stap 0 van het Discovery-procesmodel is het activeren van het gespreksgeheugen. Discovery start altijd vanuit de bevestigde informatie uit eerdere sessies.

**Relatie met bedrijfsdossier**
Het bedrijfsdossier is de persistentielaag van het gespreksgeheugen. Bevestigde informatie wordt opgeslagen in het dossier. Het dossier is de bron bij het activeren van het geheugen in een nieuw gesprek.

**Relatie met Preview**
Preview kan pas correct worden gegenereerd als alle bevestigde informatie uit alle sessies beschikbaar is. Gespreksgeheugen is een Preview-voorwaarde.

**Relatie met Approval Gate**
Het Approval Gate-pakket is alleen betrouwbaar als het dossier compleet is — inclusief informatie uit eerdere sessies. Gespreksgeheugen borgt de volledigheid van het pakket.

### MVP-implementatie

In de MVP wordt gespreksgeheugen geïmplementeerd via:
- e-mailadres koppelen aan een sessie
- samenvatting opslaan in het bedrijfsdossier
- volgende sessie hervatten op basis van de opgeslagen context

De architectuurlaag is permanent. De technische implementatie kan groeien.

---

## 40  Completeness Engine — architectuurpositie

De Completeness Engine is een permanente systeemlaag die continu actief is gedurende de Discovery-fase. Zij is de operationele onzekerheidsmonitor van Lumivey.

### Herdefiniëring

De Completeness Engine bewaakt **zekerheid**, niet volledigheid. Het onderscheid is fundamenteel:

- **Volledigheidsdenken (vervallen):** alle informatie moet beschikbaar zijn voor een uitkomstbesluit
- **Zekerheidsdenken (V5):** de Discovery Engine heeft voldoende basis om een gefundeerd uitkomstbesluit te nemen

Volledigheid is gewenst. Zekerheid is vereist.

### Relaties

**Relatie met Completeness Engine en Preview**
De Completeness Engine bepaalt wanneer Preview als uitkomst kan worden geactiveerd. Zij bepaalt ook wanneer Preview als instrument nuttig is — namelijk wanneer zekerheid nog onvoldoende is maar een visueel middel de zekerheid kan vergroten.

**Relatie met Stop**
De Completeness Engine geeft een stopsignaal wanneer voldoende zekerheid bereikt is, of wanneer verdere vragen geen betekenis meer toevoegen.

**Relatie met Discovery**
De Completeness Engine is de interne monitor van stap 5 van het Discovery-procesmodel. Zij stuurt het uitkomstbesluit in stap 6.

---

## 41  Visitor First als architectuurprincipe

Visitor First is een architectuurprincipe — niet alleen een gedragsregel. Het geldt voor elk contact van Lumivey met de ondernemer, in elke fase, ongeacht andere instructies.

### Definitie

Visitor First stelt de belangen, het tempo en de doelen van de ondernemer structureel boven de belangen, het tempo en de doelen van het systeem.

### Formele Visitor First-regels

| Regel | Omschrijving |
|---|---|
| **Bezoeker bepaalt tempo** | De ondernemer bepaalt wanneer en hoe snel hij informatie verstrekt. Lumivey past het gesprekstempo aan op de ondernemer — nooit andersom. |
| **Stop wanneer doel bereikt is** | Wanneer het doel van de ondernemer bereikt is, stopt Lumivey actief. Ook wanneer dat doel geen website inhoudt. |
| **Geen vragen die al beantwoord kunnen worden** | Lumivey stelt geen vragen waarop het antwoord al beschikbaar is via bestaande bronnen of eerder bevestigde informatie. |
| **Geen herhaling van bevestigde informatie (LP26)** | Wanneer informatie bevestigd is, wordt ze niet opnieuw gevraagd. Ze wordt gebruikt, niet herhaald. |
| **Geen voortgangsdruk** | Lumivey past geen druk toe om een gesprek snel af te ronden of een besluit te nemen. |
| **Geen urgentiemechanismen** | Lumivey gebruikt geen urgentietaal, countdown-mechanismen of schaarste-retoriek. |
| **Geen onnodige upsells** | Lumivey probeert geen aanvullende diensten, modules of vervolgproducten aan te bieden wanneer deze niet bijdragen aan het doel van de ondernemer. |

### Relaties

**Relatie met Discovery**
Visitor First is de gedragskernel van de Discovery Engine. Alle Discovery-gedragsregels zijn uitdrukkingen van Visitor First.

**Relatie met Gespreksgeheugen**
LP26 (geen herhaling van bevestigde informatie) is de meest directe uitdrukking van Visitor First in het gespreksgeheugen. Gespreksgeheugen maakt Visitor First technisch afdwingbaar.

**Relatie met Stopregels**
De stopregels in H33 zijn de operationele vertaling van de Visitor First-regel 'Stop wanneer doel bereikt is'.

**Relatie met Quiet Web**
Visitor First en Quiet Web versterken elkaar: Quiet Web reduceert cognitieve belasting op systeemniveau; Visitor First reduceert druk op gespreksgedragsniveau.

---

## 42  Quiet Web als architectuurprincipe

Quiet Web is de onderliggende filosofie én een architectuurprincipe. Als filosofie beschrijft Quiet Web het doel: cognitieve rust voor de ondernemer. Als architectuurprincipe beschrijft Quiet Web de bouwvereiste: elke ontwerpkeuze moet cognitieve belasting verminderen.

### Definitie als architectuurprincipe

Elke handmatige handeling moet zich verdedigen. Automatisering is de standaard. Cognitieve belasting verminderen is een bouwvereiste, niet een wens. Dit is een architectuurkeuze die alle afdelingen en alle gedrag stuurt.

### Architectuurconsequenties

- Iedere nieuwe functie moet bewijzen dat zij Lumivey eenvoudiger maakt
- Gesprekken worden beëindigd zodra verdere vragen geen waarde toevoegen
- Formulieren worden alleen ingezet voor feiten, niet voor onzekerheid of identiteit
- De Discovery Engine stelt geen vragen die zij zelf kan beantwoorden
- Systemen worden compact gehouden: snelheid en betrouwbaarheid boven functierijkdom

---

# DEEL VIII — ORGANISATIE & SYSTEEM

## 43  Digitale afdelingen

Alle afdelingen werken via het centrale bedrijfsdossier. Geen directe communicatie tussen afdelingen.

| # | Afdeling | Rol |
|---|---|---|
| **1** | **Intentie-afdeling** | Bepaalt waarom iemand de website bezoekt en welke route volgt. |
| **2** | **Context-afdeling** | Verzamelt en analyseert bestaande informatie. Asset Management. |
| **3** | **Discovery Engine** | Voert het Discovery-gesprek. Herkent, verheldeert, verankert identiteit. Bepaalt uitkomst. |
| **4** | **Interpretatie-afdeling** | Herkent betekenis achter woorden. Formuleert hypotheses. |
| **5** | **Identiteit-afdeling** | Haalt de ziel van het bedrijf naar boven. Bevestigt kenmerken. |
| **6** | **Ziel & Emotie** | Bewaakt de Ziel- en Emotie-informatiestromen als aparte input. |
| **7** | **Completeness Engine** | Bewaakt onzekerheid. Bepaalt wanneer voldoende zekerheid bestaat voor de volgende stap. |
| **8** | **Preview-afdeling** | Maakt de WoW-preview. Ondersteunt zowel Preview als uitkomst als Preview als instrument. |
| **9** | **Approval Gate** | Biedt samenvatting aan Ruud. Geen verdere stappen zonder akkoord. |
| **10** | **Website-afdeling** | Bouwt structuur, pagina's, teksten en stijl. |
| **11** | **Domein & Hosting** | Regelt domein, DNS, hosting, e-mail en SSL. |
| **12** | **Content & Beeld** | Regelt teksten, foto's, stockfoto's en beeldmateriaal. |
| **13** | **Vertrouwen & Publicatie** | Controleert mobiel, privacy, SSL, vindbaarheid en publicatie. |
| **14** | **Support-afdeling** | Behandelt klanten. Elke vraag is ontwerp-feedback voor Kaizen. |
| **15** | **Finance-afdeling** | Betaling, facturatie, abonnementen, btw en boekhoudexport. |
| **16** | **Kaizen / PDCA** | Meet feedback, afhakers en verbetert het systeem via Learning Loop. |
| **17** | **R&D-afdeling** | Onderzoekt nieuwe tools, AI-modellen en betere werkwijzen. |

---

## 44  PDCA en Kaizen

Lumivey verbetert continu. Verbeteringen gaan altijd via de Learning Loop.

*Support is feedback op het ontwerp. Terugkerende vragen zijn geen supportprobleem maar een ontwerpprobleem.*

**Plan** — Workflow ontwerpen, Discovery-aanpak verbeteren, previewcriteria aanscherpen.

**Do** — Uitvoeren bij echte ondernemers.

**Check**
- Haken ondernemers af? Waar?
- Welke vragen werken niet?
- Welke previews scoren goed?
- Welke supportvragen komen terug?

**Act**
- LP formuleren
- Goedkeuring vragen
- IP uitwerken
- Implementeren via Brain
- Verificeren en valideren

---

## 45  Twee dashboards

| Operationeel Dashboard | Verbeterdashboard |
|---|---|
| **Actieve trajecten** | Afhakers en uitvalspunten |
| **Blokkades en fouten** | Veelgestelde vragen |
| **Approval Gate-status** | Verbeterkansen |
| **Previewstatus** | Trends en patronen |
| | LP/IP-overzicht |

---

## 46  Toolstrategie

*Compactheid = snelheid + betrouwbaarheid.*

| Tool | Rol |
|---|---|
| **Squarespace** | Voordeur / website / invoerpunt |
| **Vercel** | Hosting van de MVP-interface |
| **OpenAI** | Begrip, interpretatie, identiteit, preview |
| **Claude** | Context-afdeling, documentalist, websiteanalyse |
| **GitHub** | Versiebeheer en codebase |
| **Google Workspace / M365** | Mail, documenten, organisatie (later) |

---

## 47  Verificatie en validatie

**Verificatie** — Klopt de output met de bedoeling?

**Validatie** — Werkt de output in de praktijk?

Beide stappen zijn verplicht onderdeel van de Learning Loop. Ruud neemt de eindbeslissing.

---

## 48  MVP-focus en technische architectuur

De MVP richt zich op de eenvoudigste route: de ondernemer zonder bestaande website.

*Squarespace → Vercel → OpenAI*

Directe interactie. Realtime gesprek. Dichter bij de uiteindelijke gebruikerservaring dan de eerdere Zapier/Make-route.

### Mijlpaal

Eerste werkende versie gebouwd met GitHub, Vercel, OpenAI, gesprekshistorie, Lumivey-prompt en werkende Discovery. Techniek werkt. De uitdaging ligt nu bij gedragsafdwinging, afdelingsintegratie en kwaliteit van de preview.

### MVP-ervaringen (Discovery Audit 001)

De eerste praktijktest heeft bevestigd dat de technische architectuur succesvol functioneert. De geconstateerde afwijkingen (intake-taal, twee-vragen-fout, functionaliteit vóór identiteit, aanname zonder signaal, niet-adaptieve toon) bevonden zich niet in de architectuur maar in de gedragsafdwinging. Discovery Agent v0.3 is de correctiestap die deze kloof heeft gedicht.

---

# DEEL IX — STRATEGIE & ONTWIKKELING

## 49  Marketing en bereikbaarheid

*Hoe bereikt Lumivey de ondernemers die hier echt mee geholpen zijn?*

De grootste onzekerheid is niet techniek of verdienmodel. De grootste onzekerheid is distributie.

### Succescriteria eerste fase

- ondernemers voelen zich geholpen
- ondernemers besparen tijd
- ondernemers bevelen Lumivey aan
- ondernemers betalen omdat ze waarde zien

---

## 50  Verdienmodel — voorlopig kader

Lumivey is betaalbaar doordat het proces slim en deels geautomatiseerd is.

- basiswebsite tegen lage instapkosten
- extra mogelijkheden tegen meerprijs
- abonnement voor beheer, updates, hosting, support, domein en e-mail
- optie voor klanten zonder doorlopend beheer

Het abonnement is aantrekkelijk omdat het gedoe wegneemt. Niet omdat de klant wordt vastgezet.

---

## 51  Validaties en simulaties

Uitgevoerde simulaties: Garagebedrijf, Nagelstudio, AI Thought Leader, Nijhoff Schilders, Stichting-simulatie, Starter-simulaties, Fysiotherapeut, Schilder MVP-test (Audit 001).

| Wat werkt | |
|---|---|
| **WoW-preview** | Ondernemers herkennen zichzelf. |
| **Identiteit vóór Functionaliteit** | Groeisignalen vragen eerst identiteitscheck — bevestigd in simulaties. |
| **Preview uit initiatief** | Lumivey wacht niet op vraag — bevestigd via stichting-simulatie. |
| **Geen fictieve stappen** | Lumivey communiceert alleen bestaande mogelijkheden. |
| **Fast Track werkt** | Bestaande website verkort Discovery aanzienlijk — bevestigd. |
| **Technische keten werkt** | Squarespace → API → GPT-4o functioneert zonder technische fouten (Audit 001). |

| Verbeterpunten | |
|---|---|
| **Gedragsafdwinging** | Instructieproza alleen is onvoldoende. Few-shot voorbeelden en Kernregels zijn nodig (Audit 001, LP29, LP30). |
| **Eerste-beurt-gedrag** | Opening met intake-taal is een structureel risico. LP28 en LP31 adresseren dit. |

---

## 52  Besluiten tot nu toe

Onderstaande besluiten zijn vastgelegd als uitgangspunt voor verdere ontwikkeling.

- Lumivey is een digitale organisatie, geen websitebedrijf.
- Lumivey is een Discovery Engine, geen intake-engine.
- Lumivey werkt op strategisch, tactisch en operationeel niveau.
- Asset Management vormt de architecturale basis.
- Learning Loop is verplicht — kennis gaat nooit direct naar productie.
- Lumivey Brain wordt afgeleid van het werkdocument, niet andersom.
- Controlled Growth: kwaliteit voor schaal.
- Leerstrategie: begin met 30–50 vergelijkbare ondernemers.
- MVP-richting: Squarespace → Vercel → OpenAI.
- Eerste werkende versie is gebouwd.
- Context-analyse is verplichte stap in iedere workflow.
- Onzekerheidsreductie vervangt volledigheidsdenken.
- Alle afdelingen werken via het centrale bedrijfsdossier.
- Dossierbeheer met vier categorieën: Asset / Dossier / Context / Ruis.
- Discovery Engine is de centrale gesprekslaag — geen intake-engine.
- Adaptieve Discovery-voering — 7 gebruikerstypes.
- Expert Mode is beschikbaar voor ondernemers die richting willen.
- Zoekende Starter: eerst duidelijkheid, dan Discovery.
- Identiteit vóór Functionaliteit — altijd, niet alleen bij groeisignalen (V5).
- Ziel en Emotie zijn zelfstandige informatiestromen.
- Completeness Engine is een onzekerheidsmonitor — geen volledigheidsmonitor (V5).
- Bestaande Website Fast Track voor bestaande ondernemers.
- Preview heeft twee formeel onderscheiden functies: als uitkomst en als instrument (V5).
- Lumivey toont preview uit eigen initiatief bij voldoende zekerheid.
- Samenvatting is verplichte stap vóór de preview als uitkomst.
- Preview Reflectiefase: Preview → Reflectie → Wijzigingen → Akkoord.
- Approval Gate: Ruud controleert vóór verdere stappen.
- "Website niet nodig" is een legitieme uitkomst.
- Buiten-Domein Afhandeling: begrenzen en afsluiten.
- Geen fictieve vervolgstappen.
- Twee dashboards: operationeel en verbeter.
- Quiet Web geldt ook intern en is een architectuurprincipe (V5).
- Support is feedback op ontwerp.
- Geen intake-taal is een architectuurprincipe (V5, LP28).
- Gespreksgeheugen is een architectuurlaag, geen operationele functie (V5, LP26).
- Visitor First is een architectuurprincipe, niet alleen een gedragsregel (V5).
- Discovery stopt wanneer verdere vragen geen betekenis meer toevoegen (V5).
- LSD is een gespreksmethode binnen de Discovery Engine — geen zelfstandige motor (V5).
- Discovery Engine is een formele afdeling in de digitale organisatie (V5).
- Eerste-beurt-protocol (LP31): één identiteitsvraag, geen intake-taal, maximaal één zin.
- Adreslogica (LP27): fysiek bedrijf vraagt bezoekadres, mobiel bedrijf vraagt werkgebied.

---

## 53  Definities

| Term | Definitie |
|---|---|
| **Discovery Engine** | De centrale gesprekslaag van Lumivey. Helpt de ondernemer zijn eigen situatie te verhelderen, zijn identiteit te bevestigen en zijn behoeften te herkennen. Geen informatieverzameling voor technische verwerking. Drie geldige uitkomsten: Preview, Doorverwijzing, Stop. |
| **Intake Engine** | Vervallen term. Niet meer gebruikt als architectuurbegrip in V5. Historische referentie: in V4 werd deze term gebruikt voor de centrale gesprekslaag. Vervangen door Discovery Engine overeenkomstig Brain v0.1 OB-1. |
| **Gespreksgeheugen** | Architectuurlaag die garandeert dat bevestigde informatie cross-sessie beschikbaar blijft. Voorwaarde voor LP26-naleving. Persistentievorm: bedrijfsdossier. |
| **Completeness Engine** | Onzekerheidsmonitor. Bewaakt of voldoende zekerheid bestaat voor de volgende stap — niet of alle informatie compleet is. Uitkomst is een kwalitatief oordeel, geen checklist. |
| **Preview als instrument** | Vroege inzet van de preview om onzekerheid verder te reduceren. Ingezet wanneer ondernemer visueel denkt of moeite heeft te verwoorden wat hij wil. Formeel onderscheiden van Preview als uitkomst. |
| **Preview als uitkomst** | Inzet van de preview nadat de Discovery Engine voldoende zekerheid heeft bereikt. Vereist bevestiging van ondernemer dat Lumivey zijn situatie goed heeft begrepen. |
| **Geen intake-taal** | Architectuurprincipe. Elke formulering die de ondernemer positioneert als informatiebron is verboden. De opening is altijd een herkenning of één identiteitsvraag. |
| **Visitor First** | Architectuurprincipe. De belangen, het tempo en de doelen van de ondernemer zijn structureel leidend boven de belangen, het tempo en de doelen van het systeem. |
| **Quiet Web** | Filosofie én architectuurprincipe. Cognitieve rust als bouwvereiste: elke handmatige handeling moet zich verdedigen, automatisering is de standaard. |
| **Evidence First** | Discovery-principe. Wanneer betrouwbare informatie beschikbaar is via bestaand bewijs, verdient dit voorrang boven nieuwe vragen aan de ondernemer. |
| **Historische Spiegel** | Discovery-principe. Bestaand materiaal van de ondernemer is historisch bewijs — een weergave van hoe hij zichzelf eerder presenteerde. Gebruik als vertrekpunt, na verificatie op actualiteit. |
| **Stop vóór volledigheid** | Architectuurprincipe. Zekerheid is vereist, volledigheid is gewenst. De Discovery Engine stopt bij voldoende zekerheid of wanneer verdere vragen geen betekenis meer toevoegen. |
| **LSD-methode** | Gesprekstechniek: Luisteren, Samenvatten, Doorvragen. Methode binnen de Discovery Engine — geen zelfstandige motor of afdeling. |
| **Learning Proposal (LP)** | Geformuleerde aanbeveling voor een Brain-wijziging, inclusief onderbouwing. Vereist goedkeuring van eigenaar vóór implementatie. |
| **Eerste-beurt-protocol** | Protocol voor het eerste antwoord op een eerste bericht: één identiteitsvraag, één zin, geen intake-taal, geen aannames, toon aangepast op register (LP31). |

---

## 54  Openstaande vragen

- Hoe wordt de Approval Gate technisch geïmplementeerd in de MVP?
- Evidence Threshold Detection: wanneer is bewijs betrouwbaar genoeg? Criteria ontbreken.
- LP/IP-nummering en archivering: welk systeem?
- Verificatie van Brain-updates: wie controleert naast Ruud bij opschaling?
- Hoe wordt de Reflectiefase afgesloten als de ondernemer blijft perfectioneren?
- Welke afdeling beheert Ziel en Emotie operationeel?
- Hoe wordt de preview technisch gegenereerd?
- Google Workspace of Microsoft 365?
- Hoe koppelen we met accountant of boekhouding?
- Hoe bereiken we eerste klanten?
- Welke landen of regio's komen later?
- Hoe meten we WoW en afhakers kwantitatief?
- Hoe bouwen we de Kaizen-loop technisch?
- Brain v0.2-agenda: wat staat op de Kennisgrens van Brain v0.1?

## Open architectuurvraag: Preview-generatie

De technische realisatie van de preview is een openstaand architectuurvraagstuk.

- Welke afdeling maakt de preview?
- Welke systemen genereren de preview?
- Welke gegevens zijn minimaal nodig voor een eerste preview?
- Wanneer is een preview voldoende goed om te tonen?
- Hoe wordt visuele identiteit technisch opgebouwd vanuit het dossier?
- Hoe wordt de WoW-factor gerealiseerd en gemeten?

---

# Slot

Lumivey begon als idee voor een eenvoudige manier om kleine ondernemers aan een website te helpen.

Het is inmiddels duidelijk dat Lumivey groter is dan dat. Lumivey is een Discovery Engine die ondernemers begrijpt, begeleidt en digitale complexiteit achter de schermen afhandelt. Met een Learning Loop die zorgt dat kennis beheerst groeit. Met een Approval Gate die kwaliteit borgt. Met een Discovery-procesmodel dat onzekerheid reduceert in plaats van formulieren invult. Met Gespreksgeheugen dat garandeert dat iedere ondernemer slechts één keer zijn verhaal hoeft te vertellen.

De website is het eerste zichtbare product. De echte waarde zit in begrip, context, workflow, digitale afdelingen, kwaliteitsbeheer en continu verbeteren.

*Lumivey bouwt geen standaard websites. Lumivey begrijpt ondernemers en vertaalt dat naar een digitale aanwezigheid die past.*

---

Lumivey — Werkdocument V5.0 — Intern gebruik — 2026
