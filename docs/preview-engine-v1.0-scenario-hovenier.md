# Preview Engine v1.0 — Scenario Hovenier

| Veld | Waarde |
|---|---|
| **Document** | Preview Engine v1.0 — Scenario |
| **Casus** | Hovenier — vader overlijden, bedrijfsovername, bestaande website |
| **Doel** | Volledig uitgewerkt voorbeeld van Veranderopdracht → Bewijsbeeld → Preview → Ondernemersreactie |

---

## Invoer

### Veranderopdracht (uit Discovery Exit)

```
IDENTITEIT
  Hovenier, derde generatie
  Nieuwe eigenaar na overlijden vader
  Bedrijf: Veenstra Tuinen (bestaand)

IST (bevestigd)
  Website vertelt verhaal van vader — foto's, naam, identiteit, contactgegevens

SOLL (bevestigd)
  Eigen verhaal, eigen foto's, nieuwe koers als derde generatie

BEVESTIGING
  Ondernemer heeft spiegel bevestigd: "dat klopt"
```

### Bewijsbeeld (uit Historische Spiegel)

```
URL: www.veenstratuinen.nl

BEHOUDEN
  Diensten (tuinaanleg, onderhoud, snoeiwerk, bestrating)
  Projectfoto's (vakmanschapsbeelden)
  Reviews (14 Google-reviews over het bedrijf)

AANPASSEN
  "Over ons"-tekst: vader → nieuwe eigenaar
  Bedrijfsgeschiedenis: eindigt bij vader → derde generatie toevoegen

VERWIJDEREN
  Naam vader (Jan Veenstra Sr.)
  Foto's van de vader
  Telefoon vader
  E-mail vader

ONZEKER
  Logo (ondernemer twijfelde)
  Kleuren (niet besproken)
  Werkgebied (niet geverifieerd)

OPENSTAANDE VRAGEN
  Naam nieuwe eigenaar?
  Nieuwe contactgegevens?
  Logo: behouden of vernieuwen?
```

---

## Preview-verwerking (intern)

Preview ontvangt de veranderopdracht en het bewijsbeeld en bepaalt intern de Preview-richting.

**Identiteitskader:** derde generatie hovenier die voortbouwt op een familiegeschiedenis maar een eigen koers vaart.

**SOLL-richting:** eigen verhaal als nieuw gezicht van een vertrouwd bedrijf.

**Strategie:** de bestaande structuur is goed. De diensten zijn bewezen. De reputatie (reviews, projectfoto's) is waardevol. Preview bouwt hierop en vervangt de persoon — niet het bedrijf.

**Toekomstbeeldkeuze:** Preview toont de hoofdpagina van de vernieuwde website, met de nieuwe eigenaar als middelpunt, de bestaande kwaliteitsmarkers als fundament, en de open vragen (logo, kleuren) als zichtbare variabelen.

---

## Het toekomstbeeld

```
TOEKOMSTBEELD — Veenstra Tuinen

IDENTITEITSKADER
  Nieuwe eigenaar, derde generatie
  Voortbouwend op een vertrouwde naam, met een eigen koers

EERSTE RICHTING — Hoofdpagina

  HEADER
    Logo: [huidige logo — onzeker, variabel]
    Kleuren: [huidige kleuren — onzeker, variabel]
    Tagline: "Veenstra Tuinen — al drie generaties uw tuin"
    → variabel: of de nieuwe eigenaar de familiegeneraties wil benadrukken

  INTRODUCTIE (in plaats van vaderfoto)
    [Naam nieuwe eigenaar] — Hovenier
    [Eigen foto — placeholder]
    Korte introductie: "Ik heb het bedrijf van mijn vader overgenomen en ga
    verder met wat hij heeft opgebouwd — maar op mijn eigen manier."

  DIENSTEN (behouden)
    Tuinaanleg
    Onderhoud
    Snoeiwerk
    Bestrating

  PROJECTFOTO'S (behouden)
    [Bestaande vakmanschapsbeelden]

  REVIEWS (behouden)
    [14 Google-reviews]

  CONTACT (vernieuwd)
    [Naam nieuwe eigenaar]
    [Nieuw telefoonnummer — te leveren]
    [Nieuw e-mailadres — te leveren]

OPEN VARIABELEN
  Logo: behouden of vernieuwen?
  Kleuren: aanpassen bij nieuw logo of behouden?
  Werkgebied: regio Utrecht — klopt dat nog?
  Naam nieuwe eigenaar: te leveren
  Nieuwe contactgegevens: te leveren
```

---

## De overdracht aan de ondernemer

Preview toont het toekomstbeeld in ondernemerstaal. Geen architectuurtermen. Geen herhaling van de veranderopdracht.

**Lumivey:**

> "Hier is een eerste richting voor de vernieuwde website. De diensten, de projectfoto's en de reviews staan er nog in — die vertellen al het verhaal van het bedrijf. Jij staat er nu als nieuwe eigenaar, met ruimte voor jouw eigen introductie en contactgegevens. Het logo en de kleuren heb ik even als variabele gelaten — dat kun je zelf beslissen. Herken je jezelf hierin?"

---

## Ondernemersreacties en vervolgacties

### Reactie A — Directe herkenning

**Ondernemer:** "Ja, dit is precies wat ik wil. Alleen mijn naam is [naam] en mijn telefoonnummer is [nummer]."

**Preview-actie:** contactgegevens verwerken. Toekomstbeeld bijwerken. Bevestigingsvraag:

> "Dan is dit compleet voor nu. Wil je ook het logo en de kleuren hetzelfde laten?"

Na bevestiging: Approval Gate.

---

### Reactie B — Herkenning met aanpassing

**Ondernemer:** "Ja, dit klopt wel. Maar die tagline 'al drie generaties' wil ik er niet bij — ik wil juist een frisse start."

**Preview-actie:** tagline aanpassen. Toekomstbeeld bijwerken.

> "Dan laat ik de generatie-verwijzing weg en hou ik het bij jouw naam en jouw verhaal. Klopt dat beter?"

Na bevestiging: door naar Approval Gate.

---

### Reactie C — Geen herkenning

**Ondernemer:** "Dit herken ik niet. Dit is gewoon een template met mijn naam erop."

**Preview-analyse:** de identiteit is onvoldoende in het toekomstbeeld verwerkt. De introductietekst is te generiek.

**Vervolgactie:** één gerichte vraag om de identiteit te verdiepen voordat een tweede Preview wordt geproduceerd.

> "Wat zou je willen dat klanten over jou denken als ze de website zien? Wat maakt jouw aanpak anders?"

Antwoord verwerken in identiteitskader. Nieuwe Preview op basis van verdiepte identiteit.

---

### Reactie D — Twijfel

**Ondernemer:** "Ik weet het niet. Het lijkt goed maar ik zie mezelf er nog niet in."

**Preview als instrument:** toon twee varianten om de twijfel te concretiseren.

> "Waar zit de twijfel — meer aan hoe het eruit ziet, of meer aan wat er over jou gezegd wordt?"

Op basis van het antwoord: aanpassing of aanvullende identiteitsverdieping.

---

## Keten samengevat

```
DISCOVERY
  ↓ Spiegel bevestigd: "dat klopt"
  ↓ Completeness Engine: veranderopdracht compleet

DISCOVERY EXIT
  ↓ Uitkomst: Preview
  ↓ URL gevraagd en ontvangen: www.veenstratuinen.nl

HISTORISCHE SPIEGEL
  ↓ Website gelezen en gecategoriseerd
  ↓ Bewijsbeeld geproduceerd

PREVIEW ENTRY
  ↓ Veranderopdracht + bewijsbeeld ontvangen

PREVIEW ENGINE
  ↓ Intern: identiteitskader + strategie bepaald
  ↓ Toekomstbeeld geproduceerd
  ↓ Toekomstbeeld getoond aan ondernemer
  ↓ "Herken je jezelf hierin?"

ONDERNEMERSREACTIE
  ↓ Herkenning → Approval Gate → Build
     of Aanpassing → bijgesteld toekomstbeeld → Approval Gate
     of Geen herkenning → identiteitsverdieping
     of Twijfel → Preview als instrument
```

---

*Lumivey — `docs/preview-engine-v1.0-scenario-hovenier.md` — 2026*
