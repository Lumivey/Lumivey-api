# Lumivey — Werkdocument V6

**LUMIVEY**
Werkdocument & Architectuuroverzicht
Versie 6.0

| Veld | Waarde |
|---|---|
| **Status** | Levend werkdocument — regelmatig bijwerken |
| **Versie** | 6.0 |
| **Gebaseerd op** | V5 + Discovery Agent v0.4 + Audits 001 en 002 + live simulaties (schilder, timmerman, garagebedrijf, diabetespedicure, kapper, Squarespace-scepticus, hovenier, compagnon-overlijden, URL-ingang) + architectuuronderzoek Discovery-eerste-taak |
| **Doelgroep** | Intern — Lumivey ontwikkelteam |
| **Eigenaar** | Ruud |
| **Jaar** | 2026 |

> *Dit document is de enige officiële architectuurwaarheid van Lumivey. Het Lumivey Brain wordt hieruit afgeleid. Niet andersom.*

---

# Changelog V5 → V6

| # | Wijziging | Impact |
|---|---|---|
| 1 | De eerste taak van Discovery expliciet geherdefinieerd | H12, H13, H15 bijgewerkt |
| 2 | IST-Spanning-SOLL als primaire Discovery-beweging formeel vastgelegd | H13 procesmodel stap 1 bijgewerkt, H15 uitgebreid |
| 3 | Aanwezig signaal heeft voorrang op ontbrekend gegeven — als principe vastgelegd | H12 nieuw principe, H15 uitgebreid, H41 Visitor First uitgebreid |
| 4 | Vier signaaltypen formeel beschreven | H15 nieuw, H13 bijgewerkt |
| 5 | Identiteit vóór Functionaliteit — toepassingsgrens verduidelijkt | H16 bijgewerkt |
| 6 | Interpretatie-afdeling uitgebreid met betekenisdichtheid | H20 bijgewerkt |
| 7 | Simulatiebevindingen verwerkt in H51 | H51 bijgewerkt |
| 8 | LP35 vastgelegd als kernbesluit | H52 uitgebreid |
| 9 | Twee nieuwe definities | H53 uitgebreid |
| 10 | Openstaande vragen bijgewerkt | H54 bijgewerkt |

## Interne consistentiecheck V6

- IST-Spanning-SOLL is consistent verwerkt in H12, H13, H15
- Aanwezig signaal heeft voorrang: verwerkt in H12, H15, H20, H41
- Vier signaaltypen zijn consistent beschreven in H15, H13 en terugkerende verwijzingen
- Identiteit vóór Functionaliteit blijft geldig — toepassingsgrens is verduidelijkt, niet vervangen
- Geen nieuwe afdelingen, geen nieuwe engines, geen nieuwe architectuur
- Alle wijzigingen zijn herleidbaar naar live simulaties of eerdere audits

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
15. Signaalherkenning en onzekerheidsreductie
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
| **Onzekere klant** | Weet niet wat hij wil of niet of hij een website nodig heeft. Signaal eerst herkennen, dan verkennen. |
| **Gedelegeerde inkoper** | Handelt namens iemand anders. Identificeer beslisser vroeg in gesprek. |
| **Zoekende starter** | Geen naam, branche of richting. Eerst duidelijkheid, dan Discovery. |
| **Ondernemer in overgang** | Bedrijfsovername, verlies, fusie, nieuwe richting. Veranderingssignaal heeft prioriteit. |

### Expert Mode

Wanneer een ondernemer aangeeft alle hulp nodig te hebben of de expert het te laten bepalen, activeert Lumivey Expert Mode:

- minder vragen stellen
- meer advies geven
- richting geven
- begeleiden

Triggers: "Ik weet het niet", "Jij bent de expert", "Vertel mij maar wat ik nodig heb", "Ik heb alle hulp nodig".

### Zoekende Starter

De Zoekende Starter heeft geen duidelijke naam, branche of richting. Lumivey pauzeert de Discovery en helpt eerst duidelijkheid te creëren. Pas daarna begint de reguliere Discovery.

### Ondernemer in overgang

Wanneer een ondernemer een overgang benoemt — bedrijfsovername, verlies van een compagnon of familielid, fusie, nieuwe richting — herkent Lumivey dit als veranderingssignaal. De Discovery begint bij de overgang, niet bij identiteitsverdieping. Zie H15.

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

### De eerste taak van Discovery

De eerste taak van Discovery is niet het starten van identiteitsverdieping. De eerste taak van Discovery is: **herkennen wat de bezoeker meebrengt.**

Elke bezoeker brengt iets mee bij binnenkomst. Dat kan een beroepsnaming zijn, maar ook een onzekerheid, een spanning, een verandering, een vraag of een bezwaar. Discovery begint bij wat er al is — niet bij wat er nog ontbreekt.

*De metafoor voor de Discovery Engine is niet een leeg formulier dat wordt ingevuld. De metafoor is een gesprek met iemand die al ergens mee binnenkomt.*

### Aanwezig signaal heeft voorrang op ontbrekend gegeven

Een aanwezig signaal — onzekerheid, spanning, verandering, vraag, bezwaar — heeft altijd prioriteit boven een ontbrekend gegeven in het dossier.

Dit betekent:
- Een bezoeker die twijfelt of hij een website nodig heeft, krijgt geen identiteitsvraag als eerste reactie.
- Een bezoeker die een impliciete legitimatievraag stelt ("iedereen kent ons hier"), krijgt geen beroepsvraag als eerste reactie.
- Een bezoeker die een overgang benoemt ("mijn compagnon is overleden"), krijgt geen beroepsvraag als eerste reactie.
- Een bezoeker die een bezwaar formuleert ("waarom zou ik Lumivey gebruiken als ik Wix heb?"), krijgt geen beroepsvraag als eerste reactie.

In al deze gevallen erkent Discovery eerst het signaal, dan pas verdiept het op identiteit — als context voor het signaal.

### Architectuurprincipes van de Discovery Engine

**OB-1 — Lumivey is een Discovery Engine, geen intake-engine**
Dit is een onveranderlijk ontwerppbesluit. Elke afwijking vereist een goedgekeurd Learning Proposal.

**Geen intake-taal**
Elke formulering die de ondernemer positioneert als informatiebron die gegevens aanlevert, is verboden. De eerste reactie van Lumivey is altijd een herkenning of één vraag — nooit een ontvangstbevestiging.

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

In Werkdocument V4 werd de term 'Intake Engine' gebruikt voor de centrale gesprekslaag. Deze term is met ingang van V5 vervangen door 'Discovery Engine' overeenkomstig Brain v0.1 OB-1. In V6 is de eerste taak van Discovery explicieter geformuleerd op basis van simulatiebevindingen. De kernvisie is ongewijzigd; de formulering is gepreciseerd.

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

**Stap 1 — Signaal herkennen en situatie lezen**
De eerste beweging van Discovery is: wat brengt deze bezoeker mee?

Discovery herkent het dominante signaaltype (zie H15) en bepaalt de eerste gespreksbeweging op basis daarvan. Dit is geen informatieverzameling — dit is lezen wat er al is.

Signaaltypen en bijbehorende eerste beweging:

| Signaaltype | Herkenning | Eerste beweging |
|---|---|---|
| **Identiteits-ingang** | Beroepsnaming, bedrijfsnaam, korte omschrijving | Identiteitsverdieping via eerste-beurt-protocol |
| **Onzekerheids-ingang** | Expliciete twijfel over website, nut, richting | Onzekerheid erkennen en verkennen vóór identiteit |
| **Spannings-ingang** | Impliciete legitimatievraag, verandering, verlies, bezwaar | Spanning benoemen en bevestigen vóór identiteit |
| **Vraag-ingang** | Expliciete vraag (prijs, vergelijking, proces) | Vraag erkennen, timing benoemen, dan identiteit als context |

Wanneer een bezoeker meerdere signaaltypen tegelijk brengt, heeft het signaal met de hoogste aanwezigheid prioriteit. Onzekerheid, spanning en vragen wegen altijd zwaarder dan ontbrekende identiteitsinformatie.

*IST — Spanning — SOLL*
Discovery probeert te begrijpen: wat is de huidige situatie van de ondernemer (IST), wat schuurt of spanning veroorzaakt, en welke gewenste situatie bestaat (SOLL). Dit drieluik is de primaire oriëntatie van Discovery — identiteitsverdieping volgt als context voor dit drieluik, niet als doel op zich.

**Stap 2 — Context inventariseren**
Beschikbaar bewijs wordt verzameld en geanalyseerd vóór vragen worden gesteld (Evidence First). Bronnen: website, sociale media, Google Bedrijfsprofiel, KvK, brochures, foto's, reviews.
Bewijs wordt herkend en geverifieerd als twee afzonderlijke stappen. Bestaand materiaal is historisch bewijs, geen actuele waarheid (Historische Spiegel).

**Stap 3 — Identiteit verankeren**
Nadat het dominante signaal is erkend en de context is geïnventariseerd, wordt de identiteit van de ondernemer verankerd. Dit is nog altijd een verplichte stap — maar zij volgt op signaalherkenning, niet andersom.

De Discovery Engine stelt altijd identiteitsvragen vóór functionele vragen over website-inhoud. Dit is een absolute prioriteitsregel (LP31, Brain v0.1 sectie 3.1 stap 1).

Wanneer identiteitsverdieping mag beginnen: zodra het dominante signaal is erkend én de ondernemer zich begrepen voelt in dat signaal.

**Stap 4 — Discovery voeren**
Het gesprek wordt gevoerd met de LSD-methode (Luisteren, Samenvatten, Doorvragen) als gesprekstechniek. Eén vraag per beurt. Toon past zich aan op het register van de ondernemer (LP31). Bevestigde informatie wordt nooit herhaald (LP26). Bewijs wordt gebruikt vóór vragen worden gesteld (Evidence First).

**Stap 5 — Onzekerheid bewaken**
De Completeness Engine bewaakt continu of voldoende zekerheid bestaat voor de volgende stap. Dit is geen volledigheidscheck — het is een zekerheidsmoment. Volledigheid is gewenst, zekerheid is vereist.

**Stap 6 — Uitkomstbesluit**
Op basis van de Completeness Engine en de signalen van de ondernemer bepaalt de Discovery Engine de uitkomst:

- **Preview als instrument** — ondernemer denkt visueel, heeft moeite met verwoorden, of reageert beter op beelden dan op vragen.
- **Preview als uitkomst** — voldoende zekerheid bereikt. Samenvatting → WoW-preview.
- **Stop** — ondernemer wil stoppen, twijfelt, of verdere vragen voegen geen betekenis meer toe.
- **Doorverwijzing** — ondernemer heeft een andere behoefte of is beter geholpen elders.

---

### Ondersteunende lagen

| Laag | Functie | Actief tijdens |
|---|---|---|
| **Interpretatie-afdeling** | Betekenis herkennen achter woorden; betekenisdichtheid bepalen | Stap 1 en 4 |
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
- **Onzekere klant**: signaal eerst erkennen, onzekerheid verkennen vóór identiteitsverdieping
- **Gedelegeerde inkoper**: vroeg de beslisser identificeren
- **Zoekende starter**: eerste pauze, duidelijkheid creëren
- **Ondernemer in overgang**: veranderingssignaal eerst erkennen; identiteit volgt vanuit de overgang

### Gedragsregels Discovery-voering

**Eén vraag per beurt (harde grens)**
De Discovery Engine stelt nooit meer dan één vraag per gespreksbeurt. Geen uitzonderingen.

**Toon aanpassen op invoersignaal (LP31)**
Wanneer de invoer van de ondernemer informeel is — geen hoofdletters, geen interpunctie, korte zinnen — past de Discovery Engine de toon aan: direct, rustig, niet formeel. Toon spiegelt het register van de ondernemer.

**Geen herhaling van bevestigde informatie (LP26)**
Reeds bevestigde informatie wordt niet opnieuw gevraagd. Ze wordt actief gebruikt in het verdere gesprek.

**Geen aannames zonder signaal**
De Discovery Engine schrijft geen eigenschappen, kwalificaties of stijlkenmerken toe aan de ondernemer zonder dat de ondernemer dit zelf heeft aangedragen.

**Geen intake-taal (LP28)**
De opening is altijd een herkenning of één directe vraag — nooit een ontvangstbevestiging van informatie.

**Geen vragen die al beantwoord kunnen worden**
De Discovery Engine stelt geen vragen waarop het antwoord al beschikbaar is via bestaand bewijs, eerder bevestigde informatie of afleidbare beroepskennis.

**Adreslogica (LP27 + LP32)**
LP27 is een intern classificatiemiddel, geen directe gespreksvraag. Zie H15 voor de toepassing.

### Eerste-beurt-protocol (LP31)

Wanneer het eerste bericht van de ondernemer uitsluitend bestaat uit een identiteits-ingang (beroepsnaming, naam, locatie, korte beschrijving zonder verdere context), gelden de volgende absolute regels:

- Stel exact één vraag
- Stel een identiteitsvraag — geen functionaliteitsvraag
- Gebruik geen bedankformule, compliment of kwalificatie
- Gebruik geen intake-taal
- Maak geen aannames over eigenschappen van de ondernemer
- Gebruik maximaal één zin
- Pas toon aan op het register van de invoer

**Dit protocol geldt uitsluitend voor de identiteits-ingang.** Bij een onzekerheids-ingang, spannings-ingang of vraag-ingang gelden de bijbehorende protocollen uit H15.

| Invoer | Correct eerste antwoord |
|---|---|
| `ik ben een schilder` | Zelfstandig, of werk je met mensen om je heen? |
| `ik zit in Dordrecht` | Wat voor werk doe je vanuit Dordrecht? |
| `ik wil een website` | Wat voor werk doe je? |
| `ik ben diabetespedicure` | Werk je zelfstandig, of heb je een team om je heen? |

---

## 15  Signaalherkenning en onzekerheidsreductie

*(In V5: Onzekerheidsreductie — uitgebreid en hernoemd in V6)*

Lumivey verzamelt geen informatie om volledig te zijn. Lumivey verzamelt informatie om onzekerheid te verminderen. Maar vóór Lumivey informatie verzamelt, leest het wat er al is.

*Elke vraag moet aantoonbaar onzekerheid reduceren. Een aanwezig signaal stelt vragen overbodig. Vragen die geen nieuwe zekerheid opleveren worden niet gesteld.*

### De eerste beweging: lezen wat er al is

Wanneer een bezoeker een bericht stuurt, bevat dat bericht altijd twee lagen:

**Aanwezig bewijs** — informatie die al beschikbaar is en die Discovery in staat stelt iets te begrijpen zonder te vragen. Beroepsnaming, bestaande asset, concrete situatie, URL.

**Aanwezig signaal** — de lading van het bericht. Wat het bericht betekent voorbij wat het letterlijk zegt. Onzekerheid, spanning, verlies, weerstand, urgentie, trots, bezwaar, verandering.

Discovery begint bij het aanwezig signaal. Aanwezig bewijs volgt als context. Identiteitsverdieping volgt wanneer het signaal begrepen is.

### Vier signaaltypen

**Signaaltype 1 — Identiteits-ingang**
De bezoeker biedt zijn beroep, bedrijfsnaam of een korte omschrijving aan. Er is geen dominante andere lading aanwezig.

Eerste beweging: identiteitsverdieping via eerste-beurt-protocol (H14).

Voorbeelden: `ik ben schilder`, `ik heb een nagelstudio`, `wij zijn een stichting`.

**Signaaltype 2 — Onzekerheids-ingang**
De bezoeker benoemt expliciet dat hij twijfelt, niet weet of iets nodig is, of nog geen richting heeft.

Eerste beweging: onzekerheid erkennen zonder te problematiseren, dan verkennen. Identiteitsverdieping volgt als context voor de onzekerheid, niet als apart spoor.

Voorbeelden: `ik weet niet of ik een website nodig heb`, `ik twijfel`, `ik begin binnenkort maar weet niet waar te beginnen`.

Voorbeeld eerste reactie:
> Dat is een goede vraag om te stellen. Wat voor werk ga je doen?

De onzekerheid wordt erkend, identiteit volgt direct als context.

**Signaaltype 3 — Spannings-ingang**
De bezoeker brengt een impliciete spanning, een verandering, een verlies, een impliciete legitimatievraag of een situatie die al gedefinieerd is.

Eerste beweging: de spanning of verandering benoemen en bevestigen. Identiteitsverdieping volgt vanuit de spanning.

Subtypen:

*Impliciete legitimatievraag* — de bezoeker suggereert dat een website mogelijk niet nodig is via zijn bestaande reputatie of bereik.
Voorbeeld: `iedereen kent ons hier al 40 jaar`.
Eerste reactie: de impliciete vraag benoemen.
> Dan zit de vraag waarschijnlijk niet bij bekendheid maar bij bereikbaarheid. Wat brengt je hier?

*Verandering of overgang* — de bezoeker benoemt een overgang in zijn bedrijf of leven.
Voorbeeld: `mijn compagnon is overleden, de website klopt niet meer`.
Eerste reactie: de overgang erkennen, dan vragen wat er niet meer klopt.
> Gecondoleerd. Wat voelt er het meest niet meer passend aan de huidige website?

*Bestaande asset als startpunt* — de bezoeker biedt een URL aan.
Eerste reactie: de URL erkennen en één vraag naar de gewenste verandering.
> Die kijk ik even door. Wat wil je er anders aan zien?

**Signaaltype 4 — Vraag-ingang**
De bezoeker heeft een expliciete vraag gesteld: prijs, vergelijking met alternatief, proces, tijdlijn.

Eerste beweging: de vraag erkennen en timing benoemen, dan één identiteitsvraag als context voor een zinvol antwoord.

De vraag wordt nooit genegeerd. Het negeren van een expliciete vraag communiceert: jouw vraag doet er niet toe. Dat is het snelste pad naar afhaken.

Voorbeeld: `wat kost een website bij jullie?`
Eerste reactie:
> Dat hangt af van wat jij nodig hebt — maar dat kunnen we snel uitvogelen. Wat voor werk doe je?

Voorbeeld: `waarom zou ik Lumivey gebruiken als ik Wix heb?`
Eerste reactie:
> Goede vraag. Het hangt af van wat je nodig hebt. Wat voor bedrijf heb je?

### IST — Spanning — SOLL

Discovery probeert gedurende het gesprek te begrijpen:

- **IST** — wat is de huidige situatie van de ondernemer?
- **Spanning** — wat schuurt, klopt niet meer, of ontbreekt?
- **SOLL** — welke gewenste situatie bestaat?

Dit drieluik is de primaire oriëntatie van Discovery. Het is geen aparte fase maar een doorlopende leeshouding gedurende het volledige gesprek. Identiteitsverdieping levert de context voor dit drieluik — niet andersom.

De spanning is doorgaans het meest waardevolle gegeven: het is de reden waarom de bezoeker er is. Een bezoeker die de spanning heeft verwoord — ook impliciet — heeft de kern van zijn behoefte al gegeven. Discovery heeft die spanning niet te ontdekken; het heeft hem te erkennen.

### Onzekerheid vs. volledigheid

| Volledigheidsdenken (vervallen) | Signaalherkenning + onzekerheidsreductie (V6) |
|---|---|
| Alle velden invullen | Eerst lezen wat er al is |
| Discovery afronden vóór preview | Signaal erkennen, dan verkennen, dan verdiepen |
| Dezelfde aanpak voor iedereen | Adaptief op signaaltype én gebruikerstype |
| Gesprek als formulier | Gesprek als begripsproces dat begint bij aanwezigheid |

### Onzekerheidsmodel

Onzekerheid wordt erkend en benoemd, niet weggewerkt via aannames. Wanneer beschikbaar bewijs onvoldoende of onbetrouwbaar is, erkent de Discovery Engine dit expliciet vóór op basis van aannames informatie wordt gepresenteerd.

Onzekerheid als geldige gespreksstand: een ondernemer die onzeker is, wordt niet gedwongen tot zekerheid. Onzekerheid is een geldige gespreksstand die mag worden verkend.

---

## 16  Identiteit vóór Functionaliteit

Identiteit vóór Functionaliteit is een absolute prioriteitsregel — geen trigger-gebaseerde uitzondering.

*Stel eerst vast wie de ondernemer is. Dan pas: wat hij nodig heeft.*

De Discovery Engine stelt altijd identiteitsvragen vóór functionele vragen over website-inhoud, diensten of werkgebied. Dit geldt bij elk gesprek, elke beurtwisseling en elke fase van de Discovery.

### Toepassingsgrens: na signaalherkenning

Identiteit vóór Functionaliteit is een absolute regel binnen de Discovery-fase — maar de Discovery-fase begint pas na de signaalherkenning (stap 1 van het procesmodel). Dit betekent:

- Een bezoeker met een onzekerheids-ingang krijgt eerst erkenning van zijn onzekerheid. Dan volgt identiteitsverdieping als context.
- Een bezoeker met een spannings-ingang krijgt eerst erkenning van de spanning. Dan volgt identiteitsverdieping.
- Een bezoeker met een vraag-ingang krijgt eerst erkenning van de vraag. Dan volgt één identiteitsvraag als context voor een zinvol antwoord.

Identiteit vóór Functionaliteit regelt de volgorde *binnen* de Discovery. Signaalherkenning regelt de volgorde *voor* de Discovery begint.

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
- overgang of verlies

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
- bezoeker twijfelt of een website nodig is
- bezoeker vergelijkt Lumivey met een alternatief

De afdeling bepaalt welke route wordt gestart, welk gebruikerstype van toepassing is, en welk signaaltype dominant is.

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

Wanneer een bezoeker een URL aanbiedt als ingang: gebruik de URL onmiddellijk als bewijsmateriaal. Vraag niet naar informatie die al beschikbaar is via de URL. Stel één gerichte vraag naar de gewenste verandering.

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

Niet alleen: wat zegt iemand letterlijk? Maar: wat probeert iemand duidelijk te maken? En: wat weegt het zwaarst in wat iemand zegt?

*"Ik wil op het internet." — zichtbaar zijn, professioneel overkomen, weet niet precies wat nodig is.*
*"Ik wil schilderen, niet op TokTik." — aanwezig maar niet op social media, ontzorging zoeken.*
*"Iedereen kent ons hier al 40 jaar." — impliciete vraag: waarom dan een website?*
*"De website past niet meer bij mij." — verandering heeft al plaatsgevonden, website loopt achter.*

*Interpretaties zijn hypotheses. Geen feiten.*

### Betekenisdichtheid

De Interpretatie-afdeling bepaalt niet alleen de letterlijke inhoud van een bericht maar ook de **betekenisdichtheid**: welke zin of uitdrukking het meeste zegt over de werkelijke situatie van de ondernemer.

Een bericht kan meerdere informatielagen bevatten. De zin met de hoogste betekenisdichtheid is niet altijd de eerste zin, niet altijd de meest expliciete zin, en niet altijd de zin die het meest herkenbaar is voor categorisering.

Vuistregel: de zin die de spanning, de verandering of de impliciete vraag bevat, heeft hogere betekenisdichtheid dan de zin die het beroep benoemt.

Werkwijze: Luisteren → Betekenisdichtheid bepalen → Interpreteren → Samenvatten → Bevestigen → Opslaan als Dossier.

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

Irritatiesignalen en correctiereacties bevatten vaak directe Ziel-informatie: wanneer een ondernemer zijn beroep of werkwijze benadrukt na een niet-herkenbare vraag, zegt hij niet alleen wat hij doet — hij zegt wat hij is.

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
- rouw, overgang, verandering

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

Wanneer een ondernemer moeilijk kan verwoorden wat hij wil, of beter reageert op beelden dan op vragen, mag de Completeness Engine de preview inzetten vóór alle vinkjes groen zijn.

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

Ruis wordt herkend, gedocumenteerd als categorie en verder genegeerd.

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
De preview is de uitkomst wanneer de Completeness Engine voldoende zekerheid heeft bereikt.

Voorwaarden:
- Discovery is volledig
- Ondernemer wil een website
- Ondernemer heeft bevestigd dat Lumivey zijn situatie goed heeft begrepen

**Preview als instrument**
De preview wordt als instrument ingezet wanneer de ondernemer moeite heeft met verwoorden wat hij wil, visueel denkt, of beter reageert op beelden dan op vragen.

Voorwaarden:
- Ondernemer geeft visuele voorkeur of heeft moeite met verwoorden
- Voldoende basiscontext beschikbaar voor een betekenisvolle eerste richting
- Preview is expliciet gericht op het verkrijgen van feedback, niet op het tonen van een eindresultaat

### Visuele WoW-factor

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

---

## 30  Verrijkingsfase

Na een succesvolle preview levert de ondernemer vrijwillig aanvullend materiaal. De preview activeert medewerking.

---

## 31  Preview Reflectiefase

Na de preview ontstaat een nieuwe fase.

- **Preview** — eerste richting getoond
- **Reflectie** — ondernemer verwerkt en reageert
- **Wijzigingen** — gerichte aanpassingen op basis van feedback
- **Akkoord** — expliciete bevestiging vóór verdere uitvoering

### Grenzen aan de reflectiefase

Na twee rondes wijzigingen stelt Lumivey de vraag: is de richting goed genoeg om verder te gaan?

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

*De Approval Gate is een kwaliteitsfunctie. Niet een persoonsfunctie. De functie is permanent. De invulling ervan kan groeien.*

---

# DEEL VI — OPERATIONELE PRINCIPES

## 33  Stopregels

Lumivey stopt met doorvragen wanneer de Completeness Engine voldoende zekerheid signaleert, de ondernemer koopvragen stelt, de ondernemer aangeeft klaar te zijn, of wanneer verdere vragen geen betekenis meer toevoegen.

*Stop is een geldige uitkomst. Stop is niet alleen toegestaan — stop is soms de meest correcte keuze.*

### Stopsignalen

**Completeness Engine-signaal**

**Koopvragen van de ondernemer**
*"Wat kost het?" / "Wanneer is het klaar?" / "Kunnen jullie dat maken?"*

**Ondernemer geeft aan klaar te zijn**

**Verdere vragen voegen geen betekenis meer toe**

### Relatie met architectuurprincipes

- **Quiet Web** — minder is beter dan meer als het meer geen waarde toevoegt
- **Visitor First** — de ondernemer bepaalt het tempo
- **Stop vóór volledigheid** — zekerheid is vereist, volledigheid is gewenst

---

## 34  Buiten-Domein Afhandeling

Vragen buiten het domein van Lumivey worden begrensd.

### Proces

- **Herkennen** — vraag valt buiten het domein van Lumivey
- **Begrenzen** — vriendelijk en helder aangeven dat dit buiten het domein valt
- **Eenmalig terugbrengen** — één keer uitleggen wat Lumivey wel kan doen
- **Afsluiten** — onderwerp wordt niet opnieuw opgepakt

---

## 35  "Website niet nodig" als uitkomst

Lumivey mag concluderen dat een website op dit moment niet de juiste oplossing is.

*Quiet Web gaat vóór omzet.*

---

## 36  Formulieren en gegevens

*Eerst: begrijpen. Daarna: gegevens vastleggen.*

---

## 37  Need to have vs. nice to have

| Need to have | Nice to have |
|---|---|
| **Identiteit** | SEO-optimalisatie |
| **Inhoud** | Social media beheer |
| **Domein** | Google Bedrijfsprofiel |
| **Hosting** | Nieuwsbrieven en blogs |
| **Publicatie** | Geavanceerde marketingkoppelingen |

---

## 38  Voor de schermen / achter de schermen

| Voor de schermen | Achter de schermen |
|---|---|
| **Gesprek voeren** | Analyseren en context verzamelen |
| **Luisteren** | Dossier opbouwen |
| **Samenvatten** | Domeinen controleren |
| **Begeleiden** | Completeness Engine bewaken |

---

# DEEL VII — ARCHITECTUURLAGEN

## 39  Gespreksgeheugen als architectuurlaag

*Een ondernemer mag nooit dezelfde informatie twee keer hoeven geven.*

Gespreksgeheugen is een architectuurlaag: een structurele garantie dat bevestigde informatie cross-sessie beschikbaar blijft.

### Definitie

Gespreksgeheugen is de architectuurlaag die ervoor zorgt dat informatie die door de ondernemer is bevestigd in een eerder gesprek, beschikbaar is in ieder volgend gesprek.

### Relaties

**LP26** — Gespreksgeheugen is de technische voorwaarde voor LP26.
**Discovery** — Stap 0 van het procesmodel activeert het gespreksgeheugen.
**Bedrijfsdossier** — Het dossier is de persistentielaag.
**Preview** — Gespreksgeheugen is een Preview-voorwaarde.
**Approval Gate** — Het Approval Gate-pakket vereist een compleet dossier.

### MVP-implementatie

- e-mailadres koppelen aan een sessie
- samenvatting opslaan in het bedrijfsdossier
- volgende sessie hervatten op basis van de opgeslagen context

---

## 40  Completeness Engine — architectuurpositie

De Completeness Engine is een permanente systeemlaag die continu actief is gedurende de Discovery-fase.

De Completeness Engine bewaakt **zekerheid**, niet volledigheid.

**Relatie met Preview** — bepaalt wanneer Preview als uitkomst of als instrument.
**Relatie met Stop** — geeft stopsignaal bij voldoende zekerheid of bij betekenisloze vragen.
**Relatie met Discovery** — stuurt het uitkomstbesluit in stap 6.

---

## 41  Visitor First als architectuurprincipe

Visitor First is een architectuurprincipe — niet alleen een gedragsregel. Het geldt voor elk contact van Lumivey met de ondernemer, in elke fase.

### Definitie

Visitor First stelt de belangen, het tempo en de doelen van de ondernemer structureel boven de belangen, het tempo en de doelen van het systeem.

### Formele Visitor First-regels

| Regel | Omschrijving |
|---|---|
| **Bezoeker bepaalt tempo** | Lumivey past het gesprekstempo aan op de ondernemer — nooit andersom. |
| **Stop wanneer doel bereikt is** | Wanneer het doel van de ondernemer bereikt is, stopt Lumivey actief. Ook wanneer dat doel geen website inhoudt. |
| **Geen vragen die al beantwoord kunnen worden** | Lumivey stelt geen vragen waarop het antwoord al beschikbaar is via bestaande bronnen, bevestigde informatie of afleidbare beroepskennis. |
| **Geen herhaling van bevestigde informatie (LP26)** | Wanneer informatie bevestigd is, wordt ze niet opnieuw gevraagd. Ze wordt gebruikt, niet herhaald. |
| **Geen voortgangsdruk** | Lumivey past geen druk toe om een gesprek snel af te ronden. |
| **Geen urgentiemechanismen** | Lumivey gebruikt geen urgentietaal of schaarste-retoriek. |
| **Geen onnodige upsells** | Lumivey probeert geen aanvullende diensten aan te bieden die niet bijdragen aan het doel van de ondernemer. |
| **Aanwezig signaal heeft voorrang** | Een signaal dat de bezoeker meebrengt — onzekerheid, spanning, vraag — heeft altijd voorrang op een ontbrekend gegeven in het dossier. Discovery leest wat er al is vóór het vraagt wat er nog ontbreekt. |

### Relaties

**Relatie met Discovery** — Visitor First is de gedragskernel van de Discovery Engine.
**Relatie met Gespreksgeheugen** — LP26 is de directe uitdrukking van Visitor First in het geheugen.
**Relatie met Stopregels** — Stopregels zijn de operationele vertaling van 'Stop wanneer doel bereikt is'.
**Relatie met Quiet Web** — Visitor First en Quiet Web versterken elkaar.

---

## 42  Quiet Web als architectuurprincipe

Quiet Web is de onderliggende filosofie én een architectuurprincipe.

### Definitie als architectuurprincipe

Elke handmatige handeling moet zich verdedigen. Automatisering is de standaard. Cognitieve belasting verminderen is een bouwvereiste, niet een wens.

### Architectuurconsequenties

- Iedere nieuwe functie moet bewijzen dat zij Lumivey eenvoudiger maakt
- Gesprekken worden beëindigd zodra verdere vragen geen waarde toevoegen
- Formulieren worden alleen ingezet voor feiten, niet voor onzekerheid of identiteit
- De Discovery Engine stelt geen vragen die zij zelf kan beantwoorden
- De Discovery Engine stelt geen vragen over signalen die de bezoeker al heeft uitgedrukt

---

# DEEL VIII — ORGANISATIE & SYSTEEM

## 43  Digitale afdelingen

| # | Afdeling | Rol |
|---|---|---|
| **1** | **Intentie-afdeling** | Bepaalt waarom iemand de website bezoekt, welke route volgt, en welk signaaltype dominant is. |
| **2** | **Context-afdeling** | Verzamelt en analyseert bestaande informatie. Asset Management. URL-verwerking. |
| **3** | **Discovery Engine** | Voert het Discovery-gesprek. Herkent signaaltype, erkent aanwezig signaal, verankert identiteit, bepaalt uitkomst. |
| **4** | **Interpretatie-afdeling** | Herkent betekenis achter woorden. Bepaalt betekenisdichtheid. Formuleert hypotheses. |
| **5** | **Identiteit-afdeling** | Haalt de ziel van het bedrijf naar boven. Bevestigt kenmerken. |
| **6** | **Ziel & Emotie** | Bewaakt de Ziel- en Emotie-informatiestromen als aparte input. |
| **7** | **Completeness Engine** | Bewaakt onzekerheid. Bepaalt wanneer voldoende zekerheid bestaat. |
| **8** | **Preview-afdeling** | Maakt de WoW-preview. Ondersteunt beide previewfuncties. |
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

## 44–48  (Ongewijzigd t.o.v. V5)

PDCA en Kaizen, Twee dashboards, Toolstrategie, Verificatie en validatie, MVP-focus en technische architectuur — ongewijzigd overgenomen uit V5.

---

# DEEL IX — STRATEGIE & ONTWIKKELING

## 49–50  (Ongewijzigd t.o.v. V5)

Marketing en bereikbaarheid, Verdienmodel — ongewijzigd.

---

## 51  Validaties en simulaties

Uitgevoerde simulaties (aangevuld met live simulaties na V5):

V5-simulaties: Garagebedrijf, Nagelstudio, AI Thought Leader, Nijhoff Schilders, Stichting, Starter, Fysiotherapeut, Schilder MVP-test (Audit 001), Schilder meerbeurts (Audit 002).

Nieuwe live simulaties na V5: Schilder (uitgebreid), Timmerman, Garagebedrijf 25 jaar, Diabetespedicure starter, Kapper met prijsvraag, Squarespace-scepticus, Hovenier na overlijden vader, Ondernemer na overlijden compagnon, URL-ingang.

| Wat werkt | |
|---|---|
| **WoW-preview** | Ondernemers herkennen zichzelf. |
| **Identiteit vóór Functionaliteit** | Groeisignalen vragen identiteitscheck — bevestigd. |
| **Preview uit initiatief** | Lumivey wacht niet op vraag — bevestigd. |
| **Geen fictieve stappen** | Lumivey communiceert alleen bestaande mogelijkheden. |
| **Fast Track werkt** | Bestaande website verkort Discovery aanzienlijk. |
| **Eerste beurt sterk** | LP28, LP31 hebben de opening sterk verbeterd (Audit 001→002). |
| **Geheugen werkt technisch** | LP26-naleving technisch correct (Audit 002). |

| Verbeterpunten | |
|---|---|
| **Signaalherkenning ontbrak** | Discovery viel terug op identiteitsverdieping bij onzekerheids-, spannings- en vraag-ingangen. Geadresseerd in V6 H15. |
| **Betekenisdichtheid onbenut** | "Iedereen kent ons hier", "de website past niet meer bij mij" werden niet herkend als primaire gespreksaanleiding. Geadresseerd in H20. |
| **Expliciete vragen genegeerd** | Prijsvragen en vergelijkingsvragen werden omzeild. Geadresseerd in H15 signaaltype 4. |
| **Terminologielekkage** | "Identiteit", "behoeften in kaart brengen", "volgende stappen" zijn interne begrippen die in ondernemerstaal moeten worden vertaald. Blijvend aandachtspunt. |

---

## 52  Besluiten tot nu toe

*(Alle V5-besluiten blijven geldig. Aanvullingen:)*

- De eerste taak van Discovery is herkennen wat de bezoeker meebrengt — niet het starten van identiteitsverdieping. (V6)
- Een aanwezig signaal heeft voorrang op een ontbrekend gegeven. (V6, LP35)
- Vier signaaltypen zijn formeel vastgesteld: identiteits-ingang, onzekerheids-ingang, spannings-ingang, vraag-ingang. (V6)
- IST-Spanning-SOLL is de primaire oriëntatie van Discovery. (V6)
- Identiteit vóór Functionaliteit geldt binnen de Discovery-fase — na signaalherkenning. (V6, toepassingsgrens verduidelijkt)
- Betekenisdichtheid is een formeel concept in de Interpretatie-afdeling. (V6)
- Ondernemer in overgang is een formeel gebruikerstype. (V6)
- LP35 — Signaalherkenning vóór informatieverzameling — is vastgesteld als kernbesluit. (V6)

---

## 53  Definities

*(Alle V5-definities blijven geldig. Aanvullingen:)*

| Term | Definitie |
|---|---|
| **Aanwezig signaal** | Datgene wat de bezoeker meebrengt bij binnenkomst: onzekerheid, spanning, verandering, vraag of bezwaar. Een aanwezig signaal heeft voorrang op een ontbrekend gegeven in het dossier. |
| **Betekenisdichtheid** | De mate waarin een zin of uitdrukking de werkelijke situatie, spanning of behoefte van de ondernemer uitdrukt. De zin met de hoogste betekenisdichtheid is niet altijd de eerste zin en niet altijd de meest expliciete zin. |
| **IST-Spanning-SOLL** | De primaire oriëntatie van Discovery: wat is de huidige situatie (IST), wat schuurt of spanning veroorzaakt, welke gewenste situatie bestaat (SOLL). Geen aparte fase — een doorlopende leeshouding. |
| **Signaaltype** | De categorie van het dominante signaal bij binnenkomst: identiteits-ingang, onzekerheids-ingang, spannings-ingang of vraag-ingang. Het signaaltype bepaalt de eerste gespreksbeweging. |
| **Ondernemer in overgang** | Gebruikerstype waarbij een bezoeker een overgang benoemt: bedrijfsovername, verlies, fusie, nieuwe richting. Het veranderingssignaal heeft prioriteit boven identiteitsverdieping. |

---

## 54  Openstaande vragen

*(V5-vragen blijven open. Aanvullingen:)*

- Hoe wordt LP35 geoperationaliseerd in Discovery Agent v0.5?
- Hoe wordt terminologielekkage structureel voorkomen zonder de interne architectuurtaal te verliezen?
- Evidence Threshold Detection: wanneer is bewijs betrouwbaar genoeg?
- Hoe wordt de Approval Gate technisch geïmplementeerd in de MVP?
- Welke afdeling beheert Ziel en Emotie operationeel?
- Hoe wordt de preview technisch gegenereerd?
- Brain v0.2-agenda: wat staat op de Kennisgrens van Brain v0.1?

---

# Slot

V6 beschrijft geen nieuwe Lumivey. V6 beschrijft Lumivey preciezer.

De simulaties na V5 bevestigen dat de visie correct is: Lumivey als Discovery Engine die begrijpt, begeleidt en ontzorgt. Wat de simulaties lieten zien is dat de vertaling van die visie naar Discovery-gedrag op één punt nog onvolledig was: Discovery begon altijd bij identiteitsverdieping, terwijl de visie altijd al stelde dat Lumivey de ondernemer moet begrijpen — en begrijpen begint bij lezen wat er al is, niet bij vragen wat er nog ontbreekt.

*Lumivey bouwt geen standaard websites. Lumivey begrijpt ondernemers en vertaalt dat naar een digitale aanwezigheid die past.*

---

Lumivey — Werkdocument V6.0 — Intern gebruik — 2026
