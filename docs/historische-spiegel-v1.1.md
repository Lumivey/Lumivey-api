# Historische Spiegel v1.1

| Veld | Waarde |
|---|---|
| **Naam** | Historische Spiegel |
| **Versie** | 1.1 |
| **Status** | Architectuurdocument — concept ter beoordeling |
| **Positie in keten** | Discovery Exit → Historische Spiegel → Preview Entry |
| **Eigenaar** | Ruud Kroonen |
| **Bron** | Brain v0.1 + Werkdocument V6 + Discovery Exit & Preview Entry v1.0 |
| **Vorige versie** | `docs/historische-spiegel-v1.0.md` |
| **Aanleiding** | Hovenier-simulatie: interne termen zichtbaar voor bezoeker |
| **Type correctie** | Gericht — terminologiegrens tussen intern object en gespreksoutput |

---

## Inleiding

De Historische Spiegel is de architectuurlaag die bestaand bewijs begrijpt en waardeert — vóórdat Preview iets nieuws voorstelt.

Ze heeft één taak: de bestaande werkelijkheid begrijpen in het licht van de veranderopdracht.

Ze heeft één grens: ze stelt niets voor. Ze creëert niets. Ze beoordeelt alleen wat er al is.

**Toegevoegd in v1.1:** de Historische Spiegel heeft een tweede grens: de interne output — het bewijsbeeld, de categorieën, de classificaties — is uitsluitend voor Preview bestemd. De ondernemer ziet het interne object nooit. Wat de ondernemer ziet is een vertaling in ondernemerstaal: observaties, constateringen en vragen — geen categorielabels, geen architectuurtermen.

---

## 0. Terminologiegrens (nieuw in v1.1)

> **De terminologiegrens is absoluut. Geen interpretatieruimte. Elke schending is een fout.**

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
- LP-regels (LP26, LP28, LP34, etc.)
- Evidence First
- openingsscan
- signaaltype
- spiegeldrempel
- analyse (in architecturele zin)

### Wat de ondernemer wel mag zien

De ondernemer ziet uitsluitend:

- Observaties van wat er op de website staat, in gewone taal.
- Constateringen over wat lijkt te kloppen of niet te kloppen, gekoppeld aan wat de ondernemer zelf heeft gezegd.
- Gerichte vragen over onzekere elementen.
- Een beknopte overdrachtstekst wanneer het interne bewijsbeeld compleet is.

### Vertaaltabel

Elke interne categorie heeft een vertaling naar ondernemerstaal. De vertaling is de enige toegestane vorm in gespreksoutput.

| Intern (nooit zichtbaar) | Ondernemerstaal (enige toegestane vorm) |
|---|---|
| BEHOUDEN: diensten | "De diensten op de website kloppen nog steeds." |
| AANPASSEN: "Over ons"-tekst | "De 'Over ons'-pagina gaat nu over je vader — de structuur is goed, maar de tekst klopt niet meer bij wie het bedrijf nu runt." |
| VERWIJDEREN: foto's vader | "Ik zie op de website nog meerdere foto's van je vader. Dat klopt niet meer bij de situatie zoals je die hebt beschreven." |
| ONZEKER: logo | "Over het logo weet ik nog niet genoeg om te zeggen of dat moet veranderen — wil je dat we dat voor nu open laten?" |
| ONZEKER: kleuren | "De kleuren heb je nog niet besproken. Ik laat dat voor nu open." |
| Bewijsbeeld compleet | "Ik heb de website bekeken. Ik zie wat er nu staat en wat er zou moeten veranderen. Ik maak een eerste voorstel op basis hiervan." |

### Verboden voorbeelden

De volgende formuleringen zijn verboden in gespreksoutput richting de ondernemer.

| Verboden | Toelichting |
|---|---|
| "De veranderopdracht is nu compleet." | Interne objectnaam zichtbaar |
| "IST: Website in het teken van vader." | Interne term zichtbaar |
| "SOLL: Nieuwe eigenaar als gezicht van het bedrijf." | Interne term zichtbaar |
| "**BEHOUDEN**: Diensten, Projectfoto's, Reviews." | Interne categorielabel zichtbaar |
| "**AANPASSEN**: 'Over ons'-tekst." | Interne categorielabel zichtbaar |
| "**VERWIJDEREN**: Naam eigenaar, foto's vader." | Interne categorielabel zichtbaar |
| "**ONZEKER**: Logo, Kleuren." | Interne categorielabel zichtbaar |
| "**OPENSTAANDE VRAGEN VOOR PREVIEW**" | Interne structuur zichtbaar |
| "Het bewijsbeeld is nu compleet." | Interne objectnaam zichtbaar |
| "Ik ga de overdracht naar Preview in gang zetten." | Interne procestermen zichtbaar |
| "De IST-kern is bevestigd." | Interne term zichtbaar |
| "Laten we de Historische Spiegel toepassen." | Interne laagnaam zichtbaar |

### Controle vóór elke output

Vóór elke gespreksoutput: controleer of een interne term of categorielabel aanwezig is. Als ja: vervang door de corresponderende ondernemerstaalvertaling. Als geen directe vertaling beschikbaar is: formuleer de observatie opnieuw in gewone taal.

---

## 1. Wat mag de Historische Spiegel — en wat niet?

*(Ongewijzigd t.o.v. v1.0)*

### De grens: vijf activiteiten

**Begrijpen** is het lezen van het bewijsmateriaal vanuit de veranderopdracht. Dit is volledig binnen de Historische Spiegel.

**Interpreteren** is het betekenis geven aan wat er staat in relatie tot de veranderopdracht. Dit is volledig binnen de Historische Spiegel, zolang de interpretatie niet verder gaat dan de veranderopdracht rechtvaardigt.

**Waarderen** is het intern categoriseren van bewijs. Dit is de kernhandeling van de Historische Spiegel. Ze stelt intern vast welke elementen nog kloppen, welke bijgesteld moeten worden, welke moeten verdwijnen, en welke nog open zijn. **De categorieën zijn intern. Ze worden nooit letterlijk in de gespreksoutput gebruikt.**

**Voorstellen** is het bedenken van wat er in plaats van het bestaande moet komen. Dit is Preview.

**Creëren** is het produceren van nieuwe inhoud, nieuwe structuur, nieuwe visuele richting. Dit is Preview.

### De grens in twee zinnen

De Historische Spiegel beschrijft intern wat er is en of het nog klopt. Naar de ondernemer toe communiceert ze uitsluitend in observaties en constateringen — nooit in interne categorieën of architectuurtermen.

---

## 2. Wat is de output van de Historische Spiegel?

De Historische Spiegel heeft twee outputs die fundamenteel van elkaar worden gescheiden in v1.1.

### Output A — Intern bewijsbeeld (voor Preview, nooit voor de ondernemer)

Het bewijsbeeld is het interne architectuurobject. Het bestaat intern. Het wordt intern doorgegeven aan Preview. Het is nooit zichtbaar voor de ondernemer.

**Interne structuur** (intern gebruik, niet tonen):

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

Wat de ondernemer ziet is een vertaling van het interne bewijsbeeld naar gewone taal. Geen categorielabels. Geen architectuurtermen. Alleen observaties, constateringen en vragen.

**Structuur van de gespreksoutput:**

De Historische Spiegel communiceert haar bevindingen in één of meer van de volgende vormen:

1. **Observatie van een kloppend element:** "De diensten op de website — [diensten] — kloppen nog steeds bij wat je hebt beschreven."

2. **Constatering van een niet-kloppend element:** "Ik zie op de website nog [element]. Dat klopt niet meer bij de situatie zoals je die hebt beschreven."

3. **Constatering van een aanpasbaar element:** "[Element] gaat nu over [IST-invulling]. De structuur is goed, maar [wat verandert door de veranderopdracht]."

4. **Verificatievraag voor een onzeker element:** "Over [element] weet ik nog niet genoeg — [vraag in één zin]."

5. **Overdrachtstekst:** "Ik heb de website bekeken. Ik zie wat er nu staat en wat er zou moeten veranderen. Ik maak een eerste voorstel op basis hiervan."

---

## 3. Beslislogica voor bewijs-waardering

*(Ongewijzigd t.o.v. v1.0 — intern gebruik)*

De vier interne categorieën (Behouden, Aanpassen, Verwijderen, Onzeker) en de bijbehorende beslislogica zijn ongewijzigd. Ze worden intern gebruikt voor de bewijswaarding. Ze verschijnen nooit als categorielabels in de gespreksoutput.

### De vier categorieën — besliscriteria

**Behouden (intern)**

Criterium: het element is niet aangemerkt door de ondernemer als onderdeel van de spanning, consistent met de bevestigde identiteit, geen aanwijzing dat het verouderd is.

**Aanpassen (intern)**

Criterium: het element beschrijft iets dat in principe nog geldt, maar de invulling is veranderd door de overgang die de veranderopdracht beschrijft.

**Verwijderen (intern)**

Criterium: het element is direct in conflict met de bevestigde veranderopdracht.

**Onzeker (intern)**

Criterium: het element valt buiten de veranderopdracht — niet benoemd of twijfelend besproken door de ondernemer.

### Wanneer Lumivey iets niet als verouderd mag beschouwen

*(Ongewijzigd t.o.v. v1.0)*

De Historische Spiegel categoriseert uitsluitend op basis van de veranderopdracht en bevestigde informatie. Geen eigen oordelen over stijl, esthetiek of moderniteit.

---

## 4. Wanneer mag de Historische Spiegel vragen stellen?

*(Ongewijzigd t.o.v. v1.0 — aanvulling: alle verificatievragen in ondernemerstaal)*

De Historische Spiegel mag verificatievragen stellen voor onzekere elementen die beslissend zijn voor de veranderopdracht. Criteria: ABCD (A ontbreekt, B niet afleidbaar, C nodig voor volgende stap, D helpt de veranderopdracht).

**Aanvulling v1.1:** alle verificatievragen worden in ondernemerstaal gesteld. Nooit als "ONZEKER-element-verificatie" of vergelijkbare interne formulering.

### Voorbeelden verificatievragen in ondernemerstaal

| Intern onzeker element | Verificatievraag in ondernemerstaal |
|---|---|
| Logo — onzeker | "Er staat ook een logo op de website. Je zei dat dat misschien ook mee zou veranderen — weet je dat al, of laten we dat voor nu open?" |
| Werkgebied — onzeker | "De website noemt regio Utrecht als werkgebied. Klopt dat nog steeds?" |
| Diensten — te verifiëren | "Zijn er diensten op de website die je niet meer aanbiedt?" |

Maximumaantal verificatievragen: twee tot drie. Meer is nieuwe Discovery na de Discovery-afsluiting.

---

## 5. Historische Spiegel zonder website

*(Ongewijzigd t.o.v. v1.0)*

Bij afwezigheid van een website werkt de Historische Spiegel met alternatieve bronnen (Google Bedrijfsprofiel, sociale media, gespreksinhoud) of produceert een leeg bewijsbeeld. Bij starters is ze niet van toepassing.

De terminologiegrens uit sectie 0 geldt ook zonder website: wat intern wordt gecategoriseerd, blijft intern.

---

## 6. Relatie met Discovery Exit & Preview Entry v1.0

*(Ongewijzigd t.o.v. v1.0)*

---

## 7. Wat hoort bewust NIET in de Historische Spiegel?

*(Ongewijzigd t.o.v. v1.0)*

Creëren, voorstellen, nieuwe structuur bepalen, kleurkeuzes, esthetische oordelen — dit alles is Preview.

---

## 8. Conformiteitscontrole

*(V1.0-principes ongewijzigd. Eén aanvulling.)*

| Principe | Status | Toelichting |
|---|---|---|
| Historische Spiegel als principe (Brain v0.1) | ✅ Conform | V1.1 operationaliseert de terminologiegrens als aanvulling op v1.0. |
| Evidence First | ✅ Conform | Ongewijzigd. |
| IST → SOLL | ✅ Conform | Ongewijzigd intern. Termen IST en SOLL zijn nu expliciet intern. |
| Herkenning vóór volledigheid | ✅ Conform | Ongewijzigd. |
| Visitor First | 🔵 Verduidelijkt | De terminologiegrens is een directe uitwerking van Visitor First: de ondernemer krijgt geen informatie die hem niet helpt en die hem kan verwarren. |
| Interne termen blijven intern | 🔵 Aangescherpt | Stond impliciet in v1.0 ("Preview ontvangt het bewijsbeeld intern"). V1.1 maakt dit expliciet als absolute grens met verboden-lijst. |

---

## Volledig scenario — Hovenier, vader overleden, URL beschikbaar

### Invoer: veranderopdracht uit Discovery Exit

```
[INTERN]
IDENTITEIT: Hovenier, derde generatie, nieuwe eigenaar na overlijden vader.
IST-kern (bevestigd): Website vertelt verhaal van vader — foto's, naam, identiteit.
SOLL-richting (bevestigd): Eigen verhaal, eigen foto's, nieuwe koers.
URL: www.veenstratuinen.nl
```

---

### Stap 1 — URL ophalen

> "Dan ga ik kijken wat er nu op de website staat. Wat is de URL?"

Ondernemer: "www.veenstratuinen.nl"

---

### Stap 2 — Interne bewijswaardering

*(Intern — nooit tonen aan ondernemer)*

| Element | Interne categorie |
|---|---|
| Naam eigenaar (vader) | VERWIJDEREN |
| Foto's van vader | VERWIJDEREN |
| Telefoon vader | VERWIJDEREN |
| E-mail vader | VERWIJDEREN |
| Diensten | BEHOUDEN |
| Projectfoto's | BEHOUDEN |
| Reviews | BEHOUDEN |
| "Over ons"-tekst (over vader) | AANPASSEN |
| Bedrijfsgeschiedenis (eindigt bij vader) | AANPASSEN |
| Logo | ONZEKER |
| Kleuren | ONZEKER |
| Werkgebied | ONZEKER |

---

### Stap 3 — Gespreksoutput in ondernemerstaal

**Fout (v1.0-patroon):**

> IST: Website in het teken van vader — zijn naam, foto's, verhaal, contactgegevens
>
> **BEHOUDEN**
> - Diensten (tuinaanleg, onderhoud)
> - Projectfoto's (vakmanschapsbeelden)
> - Reviews (over het bedrijf)
>
> **AANPASSEN**
> - "Over ons"-tekst: persoonlijk verhaal vader → persoonlijk verhaal nieuwe eigenaar
>
> **VERWIJDEREN**
> - Naam eigenaar (Jan Veenstra Sr.)
> - Alle persoonsfoto's van vader
>
> **ONZEKER**
> - Logo — ondernemer twijfelde

**Waarom fout:** categorielabels en interne termen letterlijk zichtbaar. Ondernemer vraagt terecht: "Bewijsbeeld? Wat is dat?"

**Correct (v1.1):**

> "Ik heb de website bekeken. De diensten, de projectfoto's en de reviews kloppen nog gewoon — die vertellen al het verhaal van het bedrijf.
>
> Ik zie op de website nog de naam van je vader als eigenaar, zijn foto's en zijn contactgegevens. Dat klopt niet meer bij de situatie zoals je die hebt beschreven.
>
> De 'Over ons'-pagina gaat nu ook over je vader. De structuur is goed, maar de tekst klopt niet meer bij wie het bedrijf nu runt.
>
> Over het logo weet ik nog niet genoeg — je zei dat dat misschien ook mee zou veranderen. Wil je dat we dat voor nu open laten?"

**Waarom correct:**
- Geen categorielabels.
- Geen interne termen.
- Observaties en constateringen in gewone taal.
- Verificatievraag voor het onzekere element (logo) in ondernemerstaal.
- Kleuren en werkgebied zijn intern als ONZEKER genoteerd maar hoeven niet expliciet te worden benoemd — ze worden openstaande vragen voor Preview.

---

### Stap 4 — Verificatie logo

Ondernemer: "Dat weet ik nog niet, misschien later."

Logo blijft intern ONZEKER. Geen nieuwe formulering nodig.

---

### Stap 5 — Overdracht aan Preview

**Intern bewijsbeeld wordt overgedragen aan Preview** (niet zichtbaar voor ondernemer):

```
[INTERN — VOOR PREVIEW]

BEWIJSBEELD — www.veenstratuinen.nl

BEHOUDEN: Diensten, Projectfoto's, Reviews
AANPASSEN: "Over ons"-tekst, Bedrijfsgeschiedenis
VERWIJDEREN: Naam vader, Foto's vader, Telefoon vader, E-mail vader
ONZEKER: Logo (beslissing uitgesteld), Kleuren, Werkgebied
OPENSTAANDE VRAGEN: Naam nieuwe eigenaar, nieuwe contactgegevens, logo-beslissing, kleuren, werkgebied
```

**Gespreksoutput richting ondernemer:**

> "Ik heb de website bekeken. Ik zie wat er nu staat en wat er zou moeten veranderen. Ik maak een eerste voorstel op basis hiervan."

---

### Vergelijking v1.0 vs. v1.1

| Aspect | v1.0 | v1.1 |
|---|---|---|
| Intern bewijsbeeld | Correct intern opgebouwd | Correct intern opgebouwd ✅ |
| Categorielabels in output | Letterlijk zichtbaar voor ondernemer ❌ | Intern — nooit zichtbaar ✅ |
| IST/SOLL in output | Letterlijk zichtbaar voor ondernemer ❌ | Intern — nooit zichtbaar ✅ |
| "Bewijsbeeld" in output | Zichtbaar — ondernemer vroeg: "Wat is dat?" ❌ | Intern — nooit zichtbaar ✅ |
| Overdrachtstekst | Aanwezig maar met interne termen ❌ | Ondernemerstaal — één zin ✅ |
| Wat ondernemer ziet | Architectuurmodel | Observaties in gewone taal ✅ |

---

*Lumivey — `docs/historische-spiegel-v1.1.md` — 2026*
