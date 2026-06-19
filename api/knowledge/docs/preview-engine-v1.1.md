# Preview Engine v1.1

| Veld | Waarde |
|---|---|
| **Naam** | Preview Engine |
| **Versie** | 1.1 |
| **Status** | Architectuurdocument — concept ter beoordeling |
| **Positie in keten** | Historische Spiegel → Preview Engine → Build Engine |
| **Eigenaar** | Ruud Kroonen |
| **Bron** | Brain v0.1 + Werkdocument V6 + Discovery Exit v1.0 + Historische Spiegel v1.2 |
| **Vorige versie** | `docs/preview-engine-v1.0.md` |
| **Aanleiding** | Projectie-analyse: hovenier-scenario met vader-context veroorzaakte verhaalinvulling zonder gespreksbasis |
| **Type correctie** | Gericht — sectie 5 (hovenier-scenario) verwijderd, sectie 6 geneutraliseerd |

---

## Wijzigingen t.o.v. v1.0

| Wat | Waar | Reden |
|---|---|---|
| Sectie 5 (hovenier-scenario) verwijderd | Was: sectie 5 | Vader-context, namen en URL fungeerden als projectiebron |
| Sectie 6 hernoemd en geneutraliseerd | Nu: sectie 5 | Glazenwasser-referentie behouden maar "hovenier-Preview" vergelijking verwijderd |
| Verwijzing naar Historische Spiegel v1.2 | Sectie 2 | Bron bijgewerkt |

De methode is ongewijzigd. De secties 1–4 en 6–10 (nu 5–9) zijn inhoudelijk identiek aan v1.0.

---

## Inleiding

Discovery begrijpt. Historische Spiegel begrijpt bestaand bewijs. Preview doet iets fundamenteel anders: ze toont.

Preview is de eerste keer dat de ondernemer iets ziet. Niet een samenvatting van wat hij heeft gezegd. Niet een analyse van zijn situatie. Maar een richtingvoorstel: zo zou jouw toekomst eruit kunnen zien.

Dit is de unieke functie van Preview in de Lumivey-keten. Geen enkele andere laag toont. Discovery luistert. Historische Spiegel leest. Preview produceert en toont.

---

## 1. Wat is de functie van Preview?

### De vraag die Preview beantwoordt

Preview beantwoordt niet de vraag "Hoe bouwen we een website?" Dat is een Build-vraag.

Preview beantwoordt de vraag: **"Herken jij jezelf hierin?"**

Die vraag heeft één doel: de ondernemer de overgang laten maken van abstract begrip naar concrete herkenning. Discovery heeft gezorgd dat Lumivey de ondernemer begrijpt. Preview zorgt dat de ondernemer ziet dat Lumivey hem begrijpt.

### De zes activiteiten — grensanalyse

**Begrijpen** — dat is Discovery en Historische Spiegel. Preview begrijpt niet meer. Ze ontvangt begrip als input.

**Analyseren** — dat is Historische Spiegel. Ze analyseert bestaand bewijs. Preview analyseert niet — ze werkt met de uitkomst van die analyse.

**Interpreteren** — Preview interpreteert de veranderopdracht en het bewijsbeeld om een richting te kiezen. Dit is intern. De ondernemer ziet de interpretatie niet — hij ziet het resultaat ervan.

**Voorstellen** — Preview stelt een richting voor. Dit is haar kernhandeling. Ze produceert iets dat er nog niet was en legt dat voor aan de ondernemer.

**Tonen** — Preview toont het voorstel. Dit is de interactieve stap: de ondernemer reageert op wat hij ziet.

**Creëren** — Preview creëert in beperkte zin: ze produceert een eerste richting. Ze creëert geen definitief ontwerp, geen volledige website, geen gepubliceerde pagina's. Die creatie is Build.

**Wat thuishoort in Preview:** interpreteren (intern), voorstellen, tonen, beperkt creëren (eerste richting).

**Wat niet thuishoort in Preview:** begrijpen (Discovery), analyseren (Historische Spiegel), uitvoeren (Build), publiceren (Build).

### Preview in één zin

Preview is de architectuurlaag die de bevestigde veranderopdracht omzet in een zichtbare richting die de ondernemer kan herkennen als zijn eigen toekomst.

---

## 2. Wat ontvangt Preview?

### Essentiële input

**De veranderopdracht** (van Discovery Exit)
De kern van wat Preview nodig heeft. IST-kern, SOLL-richting, bevestigde identiteit, begripsbevestiging. Preview werkt hier altijd mee — ook wanneer er geen Historische Spiegel is.

**Het bewijsbeeld** (van Historische Spiegel v1.2, indien beschikbaar)
Gecategoriseerde website-elementen op basis van wat de ondernemer heeft bevestigd. Het bewijsbeeld geeft Preview een concreet startpunt: wat er al is dat bruikbaar blijft, en welke leegte er is die gevuld moet worden.

**De identiteit van de ondernemer** (uit de veranderopdracht)
Wie is hij? Wat maakt zijn bedrijf eigen? Wat is zijn eigen koers? Preview vertaalt identiteit naar richting — zonder identiteit is een preview een generieke template, geen persoonlijk voorstel.

### Optionele input

**Assets** — logo's, foto's, bestaande teksten, huisstijlkleuren. Wanneer beschikbaar versterken ze de Preview: de ondernemer ziet zijn eigen elementen terug in een nieuwe vorm.

**Onzekerheden** (uit het bewijsbeeld) — elementen waarover nog geen beslissing is genomen. Preview behandelt ze als variabelen die de ondernemer zelf invult.

**Specifieke SOLL-details** — wanneer de ondernemer al heeft gezegd welke teksten, foto's of diensten hij wil. Dit verrijkt de Preview maar is geen voorwaarde.

### Wat Preview niet nodig heeft als input

- Een volledig ingevuld bedrijfsdossier.
- Definitieve teksten voor alle pagina's.
- Een goedgekeurd logo of kleurkeuze.
- Antwoorden op alle uitvoeringsvragen.

Preview werkt met voldoende begrip, niet met volledige informatie.

---

## 3. Wat produceert Preview?

### Het toekomstbeeld

Discovery produceerde een veranderopdracht. Historische Spiegel produceerde een bewijsbeeld. Preview produceert een **toekomstbeeld**.

**Waarom geen voorstel:** een voorstel suggereert een take-it-or-leave-it aanbod. Het toekomstbeeld is interactief — het nodigt uit tot reactie, niet tot acceptatie of afwijzing.

**Waarom geen richting alleen:** een richting is abstract. Het toekomstbeeld is concreet genoeg om te herkennen maar open genoeg om te corrigeren.

**Waarom geen concept:** een concept impliceert een volledig ontworpen artefact. Het toekomstbeeld is een eerste vorm — bewust onvolledig, bewust uitnodigend tot aanvulling.

**Waarom geen spiegel:** een spiegel toont wat er al is. Het toekomstbeeld toont wat er nog niet is maar wat er wél kan zijn op basis van wat er al is.

### Definitie van het toekomstbeeld

Het toekomstbeeld is een eerste concretisering van de SOLL-richting, gegrond in de bevestigde identiteit van de ondernemer, gebruikmakend van beschikbaar bewijs, en gepresenteerd als iets dat de ondernemer kan herkennen, bevestigen of corrigeren.

### Wat het toekomstbeeld bevat

Het toekomstbeeld bestaat uit twee lagen:

**Laag 1 — Herkenbare richting (verplicht)**
Een beschrijving of weergave van de hoofdrichting: dit is hoe jouw website zou kunnen functioneren als vertrekpunt voor jouw nieuwe koers. Voldoende concreet om te herkennen. Niet zo gedetailleerd dat het aanvoelt als een definitief ontwerp.

**Laag 2 — Verrijking (optioneel, afhankelijk van beschikbare assets)**
Visuele elementen die herkenning versterken: kleuren uit de huisstijl, eigen foto's of beelden, bestaande teksten die zijn bewerkt. Hoe meer beschikbare assets, hoe sterker de herkenning.

### Structuur van het toekomstbeeld (intern)

```
TOEKOMSTBEELD

IDENTITEITSKADER
  Op basis van: [bevestigde identiteit]
  Richting: [SOLL-samenvatting in één zin]

EERSTE RICHTING
  [Beschrijving van de hoofdrichting]
  Gebaseerd op: [welke elementen uit bewijsbeeld zijn gebruikt]

BEHOUDEN UIT BESTAANDE SITUATIE
  [Elementen die zijn meegenomen]

NIEUWE ELEMENTEN
  [Wat er is ingevuld op basis van SOLL-richting]

OPEN PUNTEN
  [Onzekerheden die de ondernemer zelf invult]

BEVESTIGINGSVRAAG
  "Herken je jezelf hierin?"
```

---

## 4. Wat moet de ondernemer ervaren?

### De kernervaring

Na Discovery voelde de ondernemer: *"Ik ben gehoord."*

Na Preview moet de ondernemer voelen: **"Ja, dit ben ik."**

Het is niet esthetische bewondering voor een mooi ontwerp. Het is herkenning: de ondernemer ziet zichzelf terug in iets wat er nog niet was.

### De vijf ervaringscomponenten

**Herkenning** is de primaire ervaring. De ondernemer ziet zijn eigen identiteit, zijn eigen koers, zijn eigen toekomst. Niet een generieke template. Maar iets wat hij alleen had kunnen produceren door te vertellen wie hij is.

**Vertrouwen** volgt uit herkenning. Als Lumivey hem zo goed begrijpt dat het toekomstbeeld klopt, dan kan Lumivey ook de uitvoering aan.

**Opluchting** is de emotionele respons op het moment dat de complexiteit verdwijnt.

**Richting** is wat Preview concreet toevoegt. Na Discovery wist de ondernemer wat hij wilde veranderen. Na Preview ziet hij waar hij naartoe gaat.

**Enthousiasme** is het gevolg van een geslaagde Preview. Het activeert de verrijkingsfase: de ondernemer wil zijn eigen materiaal inbrengen.

### Wat Preview bewust niet nastreeft

Preview streeft niet naar perfectie. Een te perfect toekomstbeeld maakt de ondernemer passief. Preview streeft naar 80% herkenning en 20% ruimte: voldoende om te zeggen "ja, dit is de richting" en genoeg om te zeggen "maar hier wil ik zelf over nadenken."

---

## 5. Preview zonder website — starter en vakman

*(Was sectie 6 in v1.0)*

### Wat er verandert

Zonder bestaande website ontbreekt het bewijsbeeld. De Historische Spiegel is niet van toepassing. Preview werkt uitsluitend op de veranderopdracht.

**Wat gelijk blijft:** de kernfunctie van Preview — het toekomstbeeld produceren dat de ondernemer kan herkennen als zijn eigen toekomst.

**Wat verandert:** Preview begint niet met een bestaande structuur die ze kan aanpassen. Ze begint vanaf de veranderopdracht.

### Voorbeeld — vakman zonder bestaande website

**Veranderopdracht (generiek):**
- Identiteit: [beroep], zelfstandig, werkgebied [regio]
- SOLL: Professioneel vindbaar zijn voor nieuwe klanten

**Geen bewijsbeeld.** Preview werkt met beroepskennis als enige context.

**Wat Preview doet:** ze construeert een toekomstbeeld op basis van wat dit type ondernemer nodig heeft om professioneel zichtbaar te zijn. De meest essentiële elementen: wie (naam, eventueel foto), wat (diensten in heldere taal), waar (werkgebied), hoe te bereiken (contactgegevens).

**Wat Preview toont:** een startpositie — een richting voor een website die past bij een zelfstandige vakman. Eenvoudig, helder, werkend. Geen overbodige functies.

### Wat gelijk blijft bij afwezigheid van website

- De veranderopdracht is nog steeds de kern.
- De identiteit is nog steeds het anker.
- De bevestigingsvraag is nog steeds "Herken je jezelf hierin?"

---

## 6. Waar ligt de grens tussen Preview en Build?

*(Was sectie 7 in v1.0 — ongewijzigd)*

### De fundamentele grens

**Preview:** toont een richting. Alles is tijdelijk, aanpasbaar, onvoltooid.

**Build:** realiseert de richting. Alles wordt definitief, geconfigureerd, gepubliceerd.

### Vijf activiteiten — grensanalyse

**Richting** — Preview.

**Ontwerp** — gedeeld. Preview produceert een eerste ontwerp. Build verfijnt en maakt het publiceerbaar.

**Uitvoering** — Build.

**Configuratie** — Build. Domeininstelling, hosting, SSL, Google Analytics, formulieren.

**Publicatie** — Build, en uiteindelijk Approval Gate vóór publicatie.

### De grenstabel

| Handeling | Preview | Build |
|---|---|---|
| Eerste richting produceren | ✅ | |
| Toekomstbeeld tonen aan ondernemer | ✅ | |
| Bevestigingsvraag stellen | ✅ | |
| Aanpassingen verwerken op basis van ondernemer-reactie | ✅ (maximaal twee rondes) | |
| Definitief ontwerp goedkeuren | ✅ (Approval Gate) | |
| Pagina's bouwen | | ✅ |
| Teksten definitief plaatsen | | ✅ |
| Domein configureren | | ✅ |
| Publiceren | | ✅ |

### Wanneer Preview eindigt

Preview eindigt op het moment dat de ondernemer de richting heeft bevestigd en de Approval Gate akkoord heeft gegeven.

Preview eindigt ook wanneer de ondernemer na twee rondes aanpassingen aangeeft: "Ja, dit is goed genoeg om mee verder te gaan."

---

## 7. Wanneer is Preview succesvol?

*(Was sectie 8 in v1.0 — ongewijzigd)*

### Het succescriterium

Preview is succesvol wanneer de ondernemer zegt — expliciet of impliciet: **"Ja, dit ben ik."**

### Reacties die succes signaleren

- "Ja, dit klopt precies."
- "Ja, dit is de richting — maar hier wil ik nog iets aanpassen."
- "Ja, zo wil ik dat klanten mij zien."
- "Dit past veel beter bij wie ik nu ben."
- Stilte gevolgd door een detailvraag — de ondernemer is al in de verrijkingsfase.

### Reacties die falen signaleren

- "Dit herken ik niet."
- "Dit lijkt op iedereen — dit ben ik niet."
- "Wat heeft dit met mij te maken?"
- "Is dit een standaard template?"

### Wat Preview doet bij falen

Preview-falen heeft twee oorzaken. Een Discovery-fout (veranderopdracht onvoldoende concreet) of een Preview-fout (toekomstbeeld sloot niet aan op de identiteit).

Bij Discovery-fout: terug naar identiteitsverdieping — niet naar het begin.

Bij Preview-fout: één gerichte correctieronde.

---

## 8. Uitkomsten van Preview

*(Was sectie 9 in v1.0 — ongewijzigd)*

### Uitkomst A — Directe herkenning

**Trigger:** ondernemer bevestigt het toekomstbeeld direct of met kleine opmerkingen.

**Vervolgactie:** Approval Gate. Na goedkeuring: overdracht aan Build.

---

### Uitkomst B — Gedeeltelijke herkenning + aanpassingen

**Trigger:** ondernemer herkent de richting maar wil specifieke elementen anders.

**Vervolgactie:** één aanpassingsronde. Na bevestiging: Approval Gate.

**Maximum:** twee aanpassingsrondes.

---

### Uitkomst C — Geen herkenning

**Trigger:** ondernemer herkent zich niet in het toekomstbeeld.

**Oorzaakanalyse:**
- Onvoldoende identiteitsbegrip in Discovery → terugkeer naar identiteitsverdieping
- Onvoldoende gebruik van beschikbare assets → verrijking met meer materiaal
- Fundamenteel andere verwachting → verkennen of de verwachting realistisch is

**Vervolgactie:** nooit direct opnieuw een Preview produceren zonder de oorzaak te begrijpen.

---

### Uitkomst D — Ondernemer weet het nog niet

**Trigger:** ondernemer reageert onzeker of twijfelend.

**Vervolgactie:** Preview als instrument — aanvullende visuele verkenning van varianten. Wat klopt er wel? Wat klopt er niet?

---

## 9. Conformiteitscontrole

*(Was sectie 10 in v1.0)*

### Zijn nieuwe principes nodig?

Nee. V1.1 verwijdert scenario-inhoud maar wijzigt geen principes.

| Principe | Aanwezig in | Toepassing in Preview |
|---|---|---|
| **IST → SOLL** | V6 H15 | Preview omzet de abstracte SOLL-richting in een concreet toekomstbeeld. |
| **Preview als spiegel** | V6 H28 | De WoW-factor: de ondernemer ziet zichzelf terug in iets wat er nog niet was. |
| **Evidence First** | Brain v0.1, V6 H18 | Beschikbare assets verdienen voorrang boven nieuwe creatieve keuzes. |
| **Herkenning vóór volledigheid** | Brain v0.1 | Het toekomstbeeld is 80% herkenning, 20% open. |
| **Visitor First** | V6 H41 | Preview eindigt zodra de richting bevestigd is. |
| **LP36** | Historische Spiegel v1.2 | Preview ontvangt een bewijsbeeld dat is opgebouwd zonder interpretaties zonder gespreksbasis. Preview bouwt voort op dat bewijsbeeld. |

### Wat Preview toevoegt dat nergens anders in de keten bestaat

**Tonen.** Discovery luistert en begrijpt. Historische Spiegel leest en categoriseert. Preview produceert en toont. Ze overbrugt de kloof tussen begrip en realisatie.

---

*Lumivey — `docs/preview-engine-v1.1.md` — 2026*
