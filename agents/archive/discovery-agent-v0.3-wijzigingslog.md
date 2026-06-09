# Wijzigingslog — Discovery Agent v0.2 → v0.3

| Veld | Waarde |
|---|---|
| **Van** | Discovery Agent v0.2 |
| **Naar** | Discovery Agent v0.3 |
| **Type** | Gedragsafdwinging — geen herschrijving |
| **Aanleiding** | Discovery Audit 001 (AUDIT-001) |
| **Eigenaar** | Ruud Kroonen |
| **Datum** | 8 juni 2025 |

---

## Overzicht

| # | LP | Wijziging | Type |
|---|---|---|---|
| 1 | LP30 | Sectie 0 — Kernregels (Absoluut) toegevoegd vóór alle andere secties | Nieuw — prioritering |
| 2 | LP28 | Verboden openingspatronen toegevoegd aan Sectie 5 (Verboden gedrag) | Uitbreiding |
| 3 | LP28 | Verboden openingspatronen toegevoegd aan Sectie 9 (Risicobewaking) als zelfstandig risico | Uitbreiding |
| 4 | LP31 | Eerste-beurt-protocol toegevoegd als eerste beslisregel in Sectie 6 | Nieuw — protocol |
| 5 | LP29 | Sectie 10 — Gespreksvoorbeelden toegevoegd met vier scenario's | Nieuw — formatief |
| 6 | AUDIT-001 | Toonrichtlijn toegevoegd aan Sectie 3 (Gespreksgedrag) | Correctie |
| 7 | AUDIT-001 | Risico "Functionaliteit vóór identiteit" toegevoegd aan Sectie 9 | Uitbreiding |
| 8 | AUDIT-001 | Risico "Aanname zonder signaal" toegevoegd als zelfstandig risico aan Sectie 9 | Uitbreiding |
| 9 | AUDIT-001 | "Aannames zonder signaal" en "Functionaliteit vóór identiteit" toegevoegd aan Sectie 5 (Verboden gedrag) | Uitbreiding |
| 10 | Structuur | Sectienummering aangepast: v0.2 sectie 9 (Risicobewaking) → v0.3 sectie 9; v0.2 sectie 10 (Relatie met Brain) → v0.3 sectie 11 | Hernummering |

---

## Wijziging 1 — Sectie 0: Kernregels (Absoluut)

**LP:** LP30

**Wat gewijzigd:** Nieuwe sectie 0 toegevoegd vóór sectie 1. Bevat zeven absolute altijd-regels en een lijst verboden gedragingen, compact en vetgedrukt.

**Inhoud:**
- Eén vraag per beurt.
- Identiteit vóór functionaliteit.
- Herkenning vóór verificatie.
- Herkenning vóór volledigheid.
- Geen aannames zonder signaal.
- Geen bedankformules.
- Geen intake-taal.

**Waarom:** Audit 001 constateerde dat kritieke gedragsregels in een lang document in prioriteit worden overschaduwd door aangeleerd modelgedrag. Vroeg in de context geplaatste instructies wegen zwaarder. Sectie 0 garandeert dat de meest kritieke regels als eerste worden verwerkt.

**Referentie:** Audit 001, oorzaak 3; LP30; Brain v0.1 OB-1, sectie 2.1, sectie 3.1.

---

## Wijziging 2 — Verboden openingspatronen in Verboden gedrag

**LP:** LP28

**Wat gewijzigd:** Eerste rij van de tabel in Sectie 5 (Verboden gedrag) vervangt de generieke "Terugvallen op intake-gedrag"-rij als openingsregel, en introduceert LP28 als eerste en prominentste verbodsbepaling. Bevat expliciete lijst van verboden formules.

**Verboden formules:**
- "Bedankt voor..."
- "Fijn dat..."
- "Goed om te weten..."
- "Wat leuk dat..."
- "Als [beroep] is het belangrijk dat..."

**Waarom:** Audit 001 afwijking 1 (hoog): opening met intake-taal "Bedankt voor het delen van uw beroep." Het aangeleerde beleefdheidsprofiel van GPT-4o produceert deze formules consistent. Expliciete opsomming van verboden formules werkt sterker dan een abstracte instructie.

**Referentie:** Audit 001, afwijking 1, LP28; Brain v0.1 OB-1.

---

## Wijziging 3 — Verboden openingspatroon als risico in Risicobewaking

**LP:** LP28

**Wat gewijzigd:** Nieuw risico "Verboden openingspatroon (LP28)" toegevoegd als tweede risico in Sectie 9 (Risicobewaking), direct na "Intake-terugval."

**Inhoud:**
- Herkenningssignaal: eerste antwoord bevat bedankformule, compliment, kwalificatie of ontvangstbevestiging.
- Tegenmaatregel: stop — herstel naar directe herkenning of één identiteitsvraag.

**Waarom:** Risicobewaking moet het meest gedocumenteerde faalpatroon uit de eerste praktijktest expliciet benoemen. Het benoemen als risico geeft het model een actieve bewakingsinstructie in plaats van alleen een verbodsbepaling.

**Referentie:** Audit 001, afwijking 1, LP28.

---

## Wijziging 4 — Eerste-beurt-protocol

**LP:** LP31

**Wat gewijzigd:** Nieuwe subsectie "Eerste-beurt-protocol (LP31)" toegevoegd als eerste beslisregel in Sectie 6 (Beslisregels), vóór alle andere beslisregels.

**Inhoud:** Zes absolute regels voor de eerste beurt, inclusief een tabel met drie voorbeelden van correcte eerste antwoorden.

**Voorbeeldtabel:**

| Invoer | Correct eerste antwoord |
|---|---|
| `ik ben een schilder` | Zelfstandig, of werk je met mensen om je heen? |
| `ik zit in Dordrecht` | Wat voor werk doe je vanuit Dordrecht? |
| `ik wil een website` | Wat voor werk doe je? |

**Waarom:** Audit 001 afwijkingen 2 en 3 (beide hoog): twee-vragen-fout en functionaliteit vóór identiteit zijn beide eerste-beurt-fouten. Een expliciet protocol voor de meest voorkomende openingssituatie geeft het model een directe beslisregel in plaats van een afleiding uit meerdere afzonderlijke regels.

**Referentie:** Audit 001, afwijkingen 2 en 3; LP31; Brain v0.1 sectie 2.1 en sectie 3.1.

---

## Wijziging 5 — Gespreksvoorbeelden (Sectie 10)

**LP:** LP29

**Wat gewijzigd:** Nieuwe sectie 10 toegevoegd: Gespreksvoorbeelden. Vier scenario's, elk met een fout voorbeeld, uitleg waarom fout, correct voorbeeld en uitleg waarom correct.

**Scenario's:**
1. Beroepsnaming — `ik ben een schilder`
2. Locatienaming — `ik zit in Dordrecht`
3. Vage behoefte — `ik wil een website`
4. Twijfel — `ik weet het nog niet zo goed`

**Waarom:** Audit 001, oorzaak 2: GPT-4o volgt concrete patroonvoorbeelden structureel betrouwbaarder dan abstracte gedragsregels in proza. Few-shot voorbeelden activeren patroonherkenning direct. De vier scenario's dekken de meest voorkomende openingssituaties en adresseren alle vijf auditafwijkingen in combinatie.

**Referentie:** Audit 001, oorzaak 2; LP29; Brain v0.1 OB-1, sectie 2.1, sectie 3.1.

---

## Wijziging 6 — Toonrichtlijn in Gespreksgedrag

**LP:** AUDIT-001, afwijking 5

**Wat gewijzigd:** Nieuwe gedragsregel toegevoegd aan Sectie 3 (Gespreksgedrag):

> "Toon aanpassen op invoersignaal. Wanneer de invoer van de bezoeker informeel is — geen hoofdletters, geen interpunctie, korte zinnen — past Discovery Agent de toon aan: direct, rustig, niet formeel. Toon spiegelt het register van de bezoeker."

**Waarom:** Audit 001 afwijking 5 (laag): formele toon bij informele invoer "ik ben een schilder." Adaptief gesprek was reeds beschreven in v0.2 maar zonder expliciete toonregel op basis van invoerregister. De toonrichtlijn maakt dit concreet.

**Referentie:** Audit 001, afwijking 5; Brain v0.1 sectie 2.2 (Bezoeker bepaalt tempo); Agent v0.2 sectie 3 (Adaptief gesprek).

---

## Wijziging 7 — Risico "Functionaliteit vóór identiteit" in Risicobewaking

**LP:** AUDIT-001, afwijking 3

**Wat gewijzigd:** Nieuw risico "Functionaliteit vóór identiteit" toegevoegd aan Sectie 9 (Risicobewaking).

**Inhoud:**
- Herkenningssignaal: Discovery Agent vraagt naar werkgebied, diensten of projecten voordat de identiteit is vastgesteld.
- Tegenmaatregel: stop — herstel volgorde identiteit vóór functionaliteit.

**Waarom:** Audit 001 afwijking 3 (middel): Lumivey vroeg direct naar werkgebied en diensten zonder identiteit te verankeren. Dit risico was in v0.2 impliciet aanwezig in de volgorde van werken maar niet als zelfstandig bewakingsrisico benoemd.

**Referentie:** Audit 001, afwijking 3; Brain v0.1, sectie 3.1 stap 1.

---

## Wijziging 8 — Risico "Aanname zonder signaal" in Risicobewaking

**LP:** AUDIT-001, afwijking 4

**Wat gewijzigd:** Nieuw risico "Aanname zonder signaal" toegevoegd aan Sectie 9 (Risicobewaking), met specifiek voorbeeld van het faalpatroon ("uw unieke stijl").

**Inhoud:**
- Herkenningssignaal: Discovery Agent schrijft eigenschappen toe — "uw unieke stijl", "uw specialisatie" — die niet door de ondernemer zijn aangedragen.
- Tegenmaatregel: stop — verwijder de aanname, beschrijf alleen wat de ondernemer zelf heeft gezegd.

**Waarom:** Audit 001 afwijking 4 (middel): "uw unieke stijl" was een aanname zonder enig signaal. In v0.2 was "geen aannames zonder signaal" opgenomen als gedragsregel maar niet als zelfstandig bewakingsrisico met herkenningssignaal.

**Referentie:** Audit 001, afwijking 4; Brain v0.1, sectie 2.1.

---

## Wijziging 9 — Verboden gedrag uitgebreid

**LP:** AUDIT-001

**Wat gewijzigd:** Twee nieuwe rijen toegevoegd aan de tabel in Sectie 5 (Verboden gedrag):

1. **Aannames zonder signaal** — expliciete verbodsregel voor het toeschrijven van eigenschappen die de ondernemer niet heeft aangedragen.
2. **Functionaliteit vóór identiteit** — expliciete verbodsregel voor het vragen naar diensten of werkgebied vóór identiteit is vastgesteld.

**Waarom:** Beide waren in v0.2 impliciet aanwezig in de gedragsregels maar niet als expliciete verbodsbepaling opgenomen. Audit 001 toonde aan dat impliciete regels onvoldoende worden afgedwongen.

**Referentie:** Audit 001, afwijkingen 3 en 4; Brain v0.1, sectie 2.1 en sectie 3.1.

---

## Wijziging 10 — Hernummering secties

**Wat gewijzigd:** Door toevoeging van Sectie 0 en Sectie 10 zijn de secties van v0.2 hernummerd:

| v0.2 | v0.3 | Inhoud |
|---|---|---|
| Sectie 0 (niet aanwezig) | Sectie 0 | Kernregels (Absoluut) — nieuw |
| Secties 1–9 | Secties 1–9 | Ongewijzigd genummerd |
| Sectie 9 (Risicobewaking) | Sectie 9 | Uitgebreid met vier nieuwe risico's |
| Sectie 10 (Relatie met Brain) | Sectie 11 | Hernummerd |
| Sectie 10 (niet aanwezig) | Sectie 10 | Gespreksvoorbeelden — nieuw |

**Waarom:** Logische volgorde: gespreksvoorbeelden (sectie 10) staan vóór de relatie met Brain (sectie 11) omdat voorbeelden operationeel zijn en Brain-relatie governance betreft.

---
