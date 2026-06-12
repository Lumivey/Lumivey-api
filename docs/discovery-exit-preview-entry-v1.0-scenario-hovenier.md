# Scenario Hovenier — Discovery → Veranderopdracht → Overdracht → Eerste Preview-actie

| Veld | Waarde |
|---|---|
| **Document** | Discovery Exit & Preview Entry v1.0 — Scenario |
| **Casus** | Hovenier — vader overlijden, bedrijfsovername, bestaande website |
| **Doel** | Volledig uitgewerkt voorbeeld van de overgang Discovery → Preview |
| **Referentie** | Discovery Exit & Preview Entry v1.0, sectie 7 |

---

## Achtergrond

Derde generatie hovenier. Opa was oprichter. Vader was eigenaar — recent overleden. Bezoeker heeft het bedrijf overgenomen. Bestaande website (www.veenstratuinen.nl) staat nog volledig in het teken van zijn vader.

---

## Fase 1 — Discovery

### Beurt 1

**Input:**
> "Ik ben hovenier en mijn vader is overleden. Ik heb de zaak overgenomen en de bestaande website voelt niet meer goed. Die wil ik aangepast hebben. Kunnen jullie dat?"

**Openingsscan:**
Signaaltype 3 — Spannings-ingang. Verlies + overgang + bestaande asset. Hoogste prioriteit.

**Completeness Engine — status na beurt 1:**
- IST bevestigd: ❌ (website aanwezig maar IST-kern niet concreet)
- SOLL concreet: ❌ ("aangepast" is te vaag)
- Identiteit: ⚠️ (hovenier, nieuwe eigenaar — onvolledig)
- Begripsbevestiging: ❌

**Actie:** spiegel nog niet mogelijk. Spiegeldrempel: A onvolledig, B niet bereikt.

**Lumivey:**
> "Gecondoleerd. Wat voelt er het meest niet meer passend aan de huidige website?"

*Rationale: verlies erkend. Directe vraag naar de IST-kern. ABCD: A (ontbreekt) ✅, B (niet afleidbaar) ✅, C (nodig) ✅, D (helpt signaal) ✅.*

---

### Beurt 2

**Input:**
> "Mijn vader staat nog op de website. De foto's moeten weg. Ik ga dingen anders doen."

**Completeness Engine — status na beurt 2:**
- IST bevestigd: ✅ vader op website (verhaal, foto's)
- SOLL concreet: ✅ andere koers (voldoende als richting)
- Identiteit: ⚠️ hovenier, nieuwe eigenaar — minimaal aanwezig
- Begripsbevestiging: ❌

**Spiegeldrempelcontrole:**
- A (IST): vader op website (verhaal) + foto's vader = 2 elementen ✅
- B (SOLL): andere koers ✅
- C (uitnodiging): ❌

Twee van drie criteria ✅ → spiegeldrempel bereikt.

**Actie:** spiegel geven. Geen nieuwe vraag.

**Lumivey:**
> "Als ik het goed begrijp staat je vader nog op de website — zijn foto's, zijn identiteit — terwijl jij het bedrijf hebt overgenomen en een eigen koers wilt. Klopt dat?"

*Rationale: IST in eigen woorden. SOLL in eigen woorden. Bevestigingsvraag. Twee zinnen. Geen LP28-formule.*

---

### Beurt 3 — Bevestiging

**Input:**
> "dat zeg ik toch"

**Actie:** bevestiging ontvangen. Completeness Engine evalueert.

**Completeness Engine — volledige evaluatie:**

| Voorwaarde | Status | Bewijs |
|---|---|---|
| IST bevestigd | ✅ | Vader op website, foto's — bevestigd in beurten 2 en 3 |
| SOLL voldoende concreet | ✅ | Andere koers, vader eraf — voldoende als richting |
| Identiteit bevestigd | ✅ | Hovenier, nieuwe eigenaar — aanwezig |
| Begripsbevestiging ontvangen | ✅ | "dat zeg ik toch" = bevestiging van de spiegel |

**Alle vier voorwaarden vervuld → veranderopdracht compleet.**

---

## Fase 2 — Veranderopdracht

### Het object dat Discovery heeft geproduceerd

```
VERANDEROPDRACHT — Veenstra Tuinen

IDENTITEIT
  Ondernemer: hovenier, derde generatie
  Situatie: nieuwe eigenaar na overlijden vader
  Bedrijf: Veenstra Tuinen (bestaand bedrijf)

IST (bevestigd)
  Website vertelt het verhaal van vader
  Foto's van vader aanwezig op website
  Identiteit van vader als eigenaar zichtbaar
  Huidige URL: www.veenstratuinen.nl (beschikbaar)

SOLL (voldoende concreet)
  Eigen verhaal van de nieuwe eigenaar
  Eigen foto's van de nieuwe eigenaar
  Nieuwe koers — anders dan vader en opa
  Eigen identiteit als derde generatie zichtbaar

BEGRIPSBEVESTIGING
  Ondernemer heeft spiegel bevestigd
  Ondernemer wil website aangepast

ASSETS
  URL: www.veenstratuinen.nl (beschikbaar voor analyse)

ONZEKERHEDEN (niet opgelost, niet vereist)
  Exact nieuw verhaal nog niet bekend
  Specifieke nieuwe foto's nog niet beschikbaar
  Koerswijziging nog niet gedetailleerd
  Logo / kleuren nog niet besproken
```

---

## Fase 3 — Overdrachtsmoment

### Uitkomstbesluit

Completeness Engine evalueert LP34-voorwaarden:
- Bevestigd identiteitskenmerk: ✅
- Voldoende zekerheid: ✅
- Ondernemer wil website: ✅
- Begrip bevestigd: ✅

**Uitkomst: Preview (Uitkomst A).**

### De overgang

Discovery is gesloten. Verzamelfase is afgesloten. Geen nieuwe IST/SOLL-vragen meer.

De veranderopdracht wordt overgedragen. In de MVP-fase: Approval Gate evalueert de veranderopdracht vóór Preview wordt gegenereerd.

De overgang is niet een aankondiging. Ze is zichtbaar in de aard van de volgende handeling: in plaats van een vraag verschijnt er een concrete actie.

**Lumivey:**
> "Dan maak ik een eerste voorstel voor de aanpassing. Heb je de website nog beschikbaar? Dan neem ik die als startpunt."

*Rationale: geen Discovery-vraag. Geen herhaling van de samenvatting. Eén concrete actie richting Preview. De URL is een asset, geen informatievraag — de ondernemer hoeft niets meer te verklaren.*

---

### Beurt 4

**Input:**
> "ja hier heb je de url: www.veenstratuinen.nl"

De URL is ontvangen. De veranderopdracht is compleet. Preview kan beginnen.

---

## Fase 4 — Eerste Preview-actie

### Wat Preview doet

Preview analyseert www.veenstratuinen.nl via Evidence First en de Historische Spiegel.

- Historische Spiegel: de website toont hoe het bedrijf zichzelf eerder presenteerde. Dit is de IST in bewijs, niet alleen in beschrijving.
- Evidence First: de website heeft voorrang boven nieuwe vragen. Vragen die de website al beantwoordt worden niet gesteld.

### Wat Preview vindt

*(Conceptueel — niet als daadwerkelijke scrape)*

De website toont waarschijnlijk: naam vader of opa als eigenaar, foto's van de oorspronkelijke eigenaar, contactgegevens die niet langer kloppen, teksten over het bedrijf geschreven vanuit de vorige eigenaar.

Dit bevestigt de IST volledig. De SOLL is de inverse: dezelfde structuur, maar met de nieuwe eigenaar als middelpunt.

### De eerste Preview-richting

Preview produceert geen volledig ontwerp. Preview produceert een herkenbare eerste richting — een spiegel op grotere schaal.

**Eerste richting (conceptueel):**

> "De huidige website presenteert Veenstra Tuinen als het bedrijf van je vader — zijn naam, zijn gezicht, zijn verhaal. Jij bent nu de eigenaar. Een website die dat weerspiegelt laat jou zien: jouw naam, jouw foto, jouw aanpak als derde generatie — met respect voor wat er al staat, maar met jou als het middelpunt. Herken je dat als de richting?"

### Wat dit is

Dit is geen voorstel. Dit is geen sitemap. Dit is geen tekst voor de homepage.

Dit is de veranderopdracht teruggesproken als richting die de ondernemer kan herkennen of corrigeren. Het is dezelfde beweging als de spiegeldrempel in Discovery — maar nu op het niveau van de volledige website en visueel gemaakt.

Na bevestiging begint de Preview-verrijkingsfase: specifieke keuzes, teksten, structuur, beelden.

---

## Vergelijking: hoe het liep vs. hoe het had moeten lopen

| Beurt | Werkelijk (v0.7) | Ideaal (v1.0) |
|---|---|---|
| 1 | Verlies erkend, vraag naar website ✅ | Idem ✅ |
| 2 | Spiegel gegeven ✅ | Idem ✅ |
| 3 | Bevestiging ontvangen ✅, maar daarna nieuwe vraag ❌ | Completeness Engine evalueert → veranderopdracht compleet → overdracht |
| 4 | URL gevraagd ✅ maar met LP28 ("dank je voor de bevestiging") ❌ | "Dan maak ik een voorstel. Heb je de website?" |
| 5 | Aankondiging dat website wordt bekeken — halfuur stilte ❌ | URL ontvangen → Preview-analyse begint |
| 6–20 | Herhaling van spiegel/bevestiging/vraag cyclus ❌❌ | Eerste Preview-richting geproduceerd |

**Verschil in beurten:** werkelijk: 20+ beurten, afhakend. Ideaal: 5 beurten, overgang naar Preview.

**Verschil in ervaring:** werkelijk: ondernemer ervaart een gesprek dat niet vooruitkomt. Ideaal: ondernemer ervaart dat hij is gehoord en dat er iets concreets ontstaat.

---

## De keten die V1.0 beschrijft

```
Spanning herkend (beurt 1)
    ↓
IST en SOLL beschikbaar (beurt 2)
    ↓
Spiegeldrempel bereikt → spiegel gegeven (beurt 2)
    ↓
Begripsbevestiging ontvangen (beurt 3)
    ↓
Completeness Engine evalueert → veranderopdracht compleet
    ↓
Uitkomstbesluit: Preview
    ↓
Overdrachtsmoment: URL vragen als eerste Preview-voorbereiding (beurt 3)
    ↓
URL ontvangen (beurt 4)
    ↓
Preview analyseert website (Evidence First + Historische Spiegel)
    ↓
Eerste Preview-richting geproduceerd
    ↓
Bevestiging ondernemer
    ↓
Preview-verrijkingsfase
```

---

*Lumivey — `docs/discovery-exit-preview-entry-v1.0-scenario-hovenier.md` — 2026*
