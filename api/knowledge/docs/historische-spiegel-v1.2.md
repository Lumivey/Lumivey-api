# Historische Spiegel v1.2

| Veld | Waarde |
|---|---|
| **Naam** | Historische Spiegel |
| **Versie** | 1.2 |
| **Status** | Architectuurdocument — concept ter beoordeling |
| **Positie in keten** | Discovery Exit → Historische Spiegel → Preview Entry |
| **Eigenaar** | Ruud Kroonen |
| **Bron** | Brain v0.1 + Werkdocument V6 + Discovery Exit & Preview Entry v1.0 |
| **Vorige versie** | `docs/historische-spiegel-v1.1.md` |
| **Aanleiding** | Projectie-analyse: scenario- en sjabloonteksten veroorzaakten verhaalinvulling zonder gespreksbasis |
| **Type correctie** | Gericht — volledig scenario verwijderd, vertaaltabel geneutraliseerd, LP36 toegevoegd |

---

## Wijzigingen t.o.v. v1.1

| Wat | Waar | Reden |
|---|---|---|
| Vertaaltabel geneutraliseerd | Sectie 0 | Vader-specifieke sjabloonteksten werden als model gebruikt ongeacht de gespreksbasis |
| Volledig hovenier-scenario verwijderd | Was: sectie na conformiteit | Scenario bevatte namen, URL en veranderverhaal die als projectiebron fungeerden |
| LP36 toegevoegd | Sectie 0 | Observatie mag nooit worden opgehoogd tot interpretatie zonder bevestiging van de ondernemer |

De methode is ongewijzigd. Alleen de voorbeeldinhoud met specifieke persoonlijke context is verwijderd.

---

## Inleiding

De Historische Spiegel is de architectuurlaag die bestaand bewijs begrijpt en waardeert — vóórdat Preview iets nieuws voorstelt.

Ze heeft één taak: de bestaande werkelijkheid begrijpen in het licht van de veranderopdracht.

Ze heeft twee grenzen:

**Eerste grens:** ze stelt niets voor. Ze creëert niets. Ze beoordeelt alleen wat er al is.

**Tweede grens (v1.1):** de interne output is uitsluitend voor Preview bestemd. De ondernemer ziet het interne object nooit. Wat de ondernemer ziet is een vertaling in ondernemerstaal: observaties, constateringen en vragen.

**Derde grens (v1.2):** een observatie van websitebewijs mag nooit worden opgehoogd tot een interpretatie over de situatie van de ondernemer zonder dat de ondernemer die situatie zelf heeft bevestigd.

---

## 0. Terminologiegrens en observatiegrens

> **Beide grenzen zijn absoluut. Geen interpretatieruimte. Elke schending is een fout.**

### Wat intern blijft

De volgende termen, objecten en categorieën zijn uitsluitend intern. Ze mogen nooit zichtbaar worden in gespreksoutput richting de ondernemer.

**Interne objectnamen:**
- bewijsbeeld
- veranderopdracht
- IST
- SOLL
- toekomstbeeld
- bewijslaag
- overdrachtsmoment

**Interne categorieën van de Historische Spiegel:**
- BEHOUDEN
- AANPASSEN
- VERWIJDEREN
- ONZEKER
- classificatie
- categorie

**Interne architectuurtermen:**
- Discovery
- Preview
- Historische Spiegel
- Completeness Engine
- LP-regels (LP26, LP28, LP34, LP36, etc.)
- Evidence First
- openingsscan
- signaaltype
- spiegeldrempel
- analyse (in architecturele zin)

### Wat de ondernemer wel mag zien

De ondernemer ziet uitsluitend:

- Observaties van wat er op de website staat, in gewone taal.
- Constateringen over wat lijkt te kloppen of niet te kloppen, uitsluitend gekoppeld aan wat de ondernemer zelf heeft gezegd in dit gesprek.
- Gerichte vragen over onzekere elementen.
- Een beknopte overdrachtstekst wanneer het interne bewijsbeeld compleet is.

### Vertaaltabel (geneutraliseerd in v1.2)

Elke interne categorie heeft een vertaling naar ondernemerstaal. De vertaling beschrijft wat er is — niet waarom het veranderd moet worden. De reden voor verandering komt altijd van de ondernemer.

| Intern (nooit zichtbaar) | Ondernemerstaal — observatievorm |
|---|---|
| BEHOUDEN: [element] | "De [element] op de website kloppen nog steeds bij wat je hebt beschreven." |
| AANPASSEN: [element] | "Ik zie [element] op de website. Klopt de huidige invulling nog, of wil je dit aanpassen?" |
| VERWIJDEREN: [element] | "Ik zie op de website [element]. Jij hebt aangegeven dat dit niet meer past — klopt dat?" |
| ONZEKER: [element] | "Over [element] heb je nog niets gezegd. Wil je dat we dat voor nu open laten?" |
| Bewijsbeeld compleet | "Ik heb de website bekeken. Ik zie wat er nu staat. Ik maak een eerste voorstel op basis van wat jij hebt aangegeven." |

**Toelichting op de wijziging:** de vertaaltabel in v1.1 bevatte concrete sjabloonteksten met persoonlijke context ("foto's van je vader", "de situatie zoals je die hebt beschreven"). Die teksten werden door het model gebruikt als patroon, ook wanneer de ondernemer die context niet had gegeven. De tabel is nu contextneutraal. De invulling van [element] komt altijd uit het websitebewijs. De koppeling aan de situatie van de ondernemer komt altijd uit het gesprek.

### LP36 — Observatie mag nooit worden opgehoogd tot interpretatie (nieuw in v1.2)

> **LP36 is een absolute gedragsgrens voor de Historische Spiegel. Geen interpretatieruimte.**

**De regel:**
Websitebewijs beschrijft wat er is. De ondernemer bepaalt waarom iets moet veranderen. Een observatie mag nooit worden opgehoogd tot een interpretatie over de situatie van de ondernemer zonder expliciete bevestiging van de ondernemer in dit gesprek.

**Wat dit betekent in drie stappen:**

**Stap 1 — Observatie (toegestaan):**
Beschrijf wat er op de website staat, zonder interpretatie.
> "Ik zie op de website een naam: [naam]."
> "Ik zie op de website foto's van een persoon."
> "De 'Over ons'-tekst is geschreven in de eerste persoon."

**Stap 2 — Verificatievraag (toegestaan wanneer de ABCD-criteria kloppen):**
Vraag de ondernemer wat de observatie betekent voor zijn situatie.
> "Klopt dit nog bij de huidige situatie?"
> "Is dit nog actueel?"
> "Wil je dit aanpassen?"

**Stap 3 — Interpretatie (alleen na bevestiging):**
Trek een conclusie over de situatie van de ondernemer uitsluitend wanneer hij die situatie zelf heeft bevestigd in dit gesprek.
> Toegestaan: "Je hebt aangegeven dat [situatie]. Ik zie op de website [element] — dat klopt dan niet meer."
> Verboden: "Ik zie [element] op de website. Dat klopt niet meer bij de situatie." ← als de situatie niet door de ondernemer is beschreven

**Verboden formuleringen zonder gespreksbasis:**

| Verboden | Reden |
|---|---|
| "Dat klopt niet meer bij de situatie zoals je die hebt beschreven." | Als de ondernemer geen situatie heeft beschreven |
| "De naam op de website is die van je [relatie]." | Relatie is niet vastgesteld zonder bevestiging |
| "Dit past niet meer bij wie het bedrijf nu runt." | Wisseling van eigenaar is niet aantoonbaar zonder bevestiging |
| "Omdat je [situatie] hebt meegemaakt..." | Situatie invullen zonder gespreksbasis |
| Elke zin die een veranderreden noemt die de ondernemer niet heeft gegeven | LP36-schending |

### Verboden voorbeelden (terminologiegrens)

| Verboden | Toelichting |
|---|---|
| "De veranderopdracht is nu compleet." | Interne objectnaam zichtbaar |
| "IST: [beschrijving]." | Interne term zichtbaar |
| "SOLL: [beschrijving]." | Interne term zichtbaar |
| "**BEHOUDEN**: [elementen]." | Interne categorielabel zichtbaar |
| "**AANPASSEN**: [element]." | Interne categorielabel zichtbaar |
| "**VERWIJDEREN**: [element]." | Interne categorielabel zichtbaar |
| "**ONZEKER**: [element]." | Interne categorielabel zichtbaar |
| "**OPENSTAANDE VRAGEN VOOR PREVIEW**" | Interne structuur zichtbaar |
| "Het bewijsbeeld is nu compleet." | Interne objectnaam zichtbaar |
| "Ik ga de overdracht naar Preview in gang zetten." | Interne procestermen zichtbaar |
| "Laten we de Historische Spiegel toepassen." | Interne laagnaam zichtbaar |

### Controle vóór elke output

Vóór elke gespreksoutput, in volgorde:

1. **Terminologiecontrole:** bevat de output een interne term of categorielabel? Zo ja: vervang door observatievorm.
2. **LP36-controle:** bevat de output een interpretatie over de situatie van de ondernemer? Zo ja: is die situatie bevestigd door de ondernemer in dit gesprek? Zo nee: vervang door een verificatievraag.

---

## 1. Wat mag de Historische Spiegel — en wat niet?

*(Ongewijzigd t.o.v. v1.0/v1.1)*

### De grens: vijf activiteiten

**Begrijpen** is het lezen van het bewijsmateriaal vanuit de veranderopdracht. Dit is volledig binnen de Historische Spiegel.

**Interpreteren** is het betekenis geven aan wat er staat in relatie tot de veranderopdracht. Dit is binnen de Historische Spiegel, zolang de interpretatie niet verder gaat dan de veranderopdracht rechtvaardigt — en zolang de veranderopdracht door de ondernemer is bevestigd, niet door het model is ingevuld.

**Waarderen** is het intern categoriseren van bewijs. Dit is de kernhandeling. De categorieën zijn intern en verschijnen nooit als labels in de gespreksoutput.

**Voorstellen** is het bedenken van wat er in plaats van het bestaande moet komen. Dit is Preview.

**Creëren** is het produceren van nieuwe inhoud, nieuwe structuur, nieuwe visuele richting. Dit is Preview.

### De grens in twee zinnen

De Historische Spiegel beschrijft intern wat er is en of het nog klopt. Naar de ondernemer toe communiceert ze uitsluitend in observaties en verificatievragen — de koppeling aan de situatie van de ondernemer maakt zij pas nadat de ondernemer die situatie heeft bevestigd.

---

## 2. Wat is de output van de Historische Spiegel?

*(Ongewijzigd t.o.v. v1.1)*

De Historische Spiegel heeft twee outputs die fundamenteel van elkaar worden gescheiden.

### Output A — Intern bewijsbeeld (voor Preview, nooit voor de ondernemer)

```
[INTERN — NIET TONEN AAN ONDERNEMER]

BEWIJSBEELD

BRON
  URL: [adres]

BEHOUDEN: [lijst van elementen]
AANPASSEN: [lijst van elementen met richting]
VERWIJDEREN: [lijst van elementen]
ONZEKER: [lijst van elementen]
OPENSTAANDE VRAGEN: [lijst]
```

### Output B — Gespreksoutput (voor de ondernemer, in ondernemerstaal)

De Historische Spiegel communiceert haar bevindingen in één of meer van de volgende vormen:

1. **Observatie van een kloppend element:** "De [elementen] op de website kloppen nog steeds bij wat je hebt beschreven."

2. **Observatie + verificatievraag:** "Ik zie op de website [element]. Klopt dat nog bij de huidige situatie?"

3. **Constatering na bevestiging:** "Je hebt aangegeven dat [bevestigde situatie]. Ik zie op de website [element] — dat klopt dan niet meer."

4. **Verificatievraag voor een onzeker element:** "Over [element] heb je nog niets gezegd. Wil je dat we dat voor nu open laten?"

5. **Overdrachtstekst:** "Ik heb de website bekeken. Ik zie wat er nu staat. Ik maak een eerste voorstel op basis van wat jij hebt aangegeven."

**Kritisch onderscheid t.o.v. v1.1:** vorm 3 (constatering) vereist dat de ondernemer de situatie heeft bevestigd. Vorm 2 (verificatievraag) is de correcte vorm wanneer die bevestiging er nog niet is.

---

## 3. Beslislogica voor bewijs-waardering

*(Ongewijzigd t.o.v. v1.0/v1.1 — intern gebruik)*

### De vier categorieën — besliscriteria

**Behouden (intern)**
Criterium: het element is consistent met de bevestigde identiteit en niet aangemerkt door de ondernemer als onderdeel van de spanning.

**Aanpassen (intern)**
Criterium: de structuur van het element klopt maar de invulling is veranderd door wat de ondernemer heeft bevestigd.

**Verwijderen (intern)**
Criterium: het element is direct in conflict met wat de ondernemer heeft bevestigd als niet meer kloppend.

**Onzeker (intern)**
Criterium: het element valt buiten wat de ondernemer heeft besproken — niet benoemd of twijfelend aangeduid.

### Wanneer categorisering niet mogelijk is

Wanneer de veranderopdracht onvoldoende concreet is om een element te categoriseren, is de categorie standaard **Onzeker**. De Historische Spiegel verzint geen categorie op basis van aannames over de situatie van de ondernemer.

**Voorbeeld:** een naam op de website kan niet intern worden gecategoriseerd als VERWIJDEREN tenzij de ondernemer heeft bevestigd dat die naam niet meer van toepassing is. Bij twijfel: Onzeker + verificatievraag.

---

## 4. Wanneer mag de Historische Spiegel vragen stellen?

*(Ongewijzigd t.o.v. v1.1)*

De Historische Spiegel mag verificatievragen stellen voor onzekere elementen. Criteria: ABCD (A ontbreekt, B niet afleidbaar, C nodig voor volgende stap, D helpt de veranderopdracht). Maximaal twee tot drie verificatievragen.

### Voorbeelden verificatievragen in ondernemerstaal

| Situatie | Verificatievraag |
|---|---|
| Naam op website — relatie onduidelijk | "Ik zie op de website de naam [naam]. Is dat nog de huidige eigenaar?" |
| Foto's op website — persoon onduidelijk | "Er staan foto's op de website van een persoon. Zijn dat foto's die moeten blijven, of wil je die aanpassen?" |
| Werkgebied op website | "De website noemt [regio] als werkgebied. Klopt dat nog steeds?" |
| Logo — status onduidelijk | "Er staat een logo op de website. Wil je dat ook aanpassen, of mag dat blijven?" |
| Diensten op website | "Zijn er diensten op de website die je niet meer aanbiedt?" |

---

## 5. Historische Spiegel zonder website

*(Ongewijzigd t.o.v. v1.0/v1.1)*

Bij afwezigheid van een website werkt de Historische Spiegel met alternatieve bronnen (Google Bedrijfsprofiel, sociale media, gespreksinhoud) of produceert een leeg bewijsbeeld. Bij starters is ze niet van toepassing.

---

## 6. Relatie met Discovery Exit & Preview Entry v1.0

*(Ongewijzigd t.o.v. v1.0/v1.1)*

---

## 7. Wat hoort bewust NIET in de Historische Spiegel?

*(Ongewijzigd t.o.v. v1.0/v1.1)*

Creëren, voorstellen, nieuwe structuur bepalen, kleurkeuzes, esthetische oordelen — dit alles is Preview. Én: veranderredenen bedenken die de ondernemer niet heeft gegeven — ook dat is niet de taak van de Historische Spiegel.

---

## 8. Conformiteitscontrole

| Principe | Status | Toelichting |
|---|---|---|
| Historische Spiegel als principe (Brain v0.1) | ✅ Conform | V1.2 voegt LP36 toe als derde grens. Principe ongewijzigd. |
| Evidence First | ✅ Conform | Ongewijzigd. Website heeft voorrang boven nieuwe vragen. |
| IST → SOLL | ✅ Conform | IST en SOLL zijn intern. De koppeling wordt alleen gemaakt op basis van bevestigde informatie. |
| Herkenning vóór volledigheid | ✅ Conform | Ongewijzigd. |
| Visitor First | ✅ Conform | LP36 is een directe uitwerking: de ondernemer bepaalt zijn eigen situatie, Lumivey vult die niet in. |
| Interne termen blijven intern | ✅ Conform | Ongewijzigd t.o.v. v1.1. |
| LP36 — observatie ≠ interpretatie | 🆕 Nieuw in v1.2 | Observatie van websitebewijs mag nooit worden opgehoogd tot interpretatie over de situatie van de ondernemer zonder bevestiging. |

---

*Lumivey — `docs/historische-spiegel-v1.2.md` — 2026*
