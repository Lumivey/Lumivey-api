# Wijzigingslog — Discovery Agent v0.3 → v0.4

| Veld | Waarde |
|---|---|
| **Van** | Discovery Agent v0.3 |
| **Naar** | Discovery Agent v0.4 |
| **Type** | Gedragsafdwinging + scopeverduidelijking — geen herschrijving |
| **Aanleiding** | Discovery Audit 001 + Discovery Audit 002 |
| **Eigenaar** | Ruud Kroonen |
| **Datum** | 9 juni 2026 |

---

## Overzicht

| # | Wijziging | Type | Aanleiding |
|---|---|---|---|
| 1 | Sectie 0 — Kernregels uitgebreid | Uitbreiding | Audit 002: LP28-herhaling, intake-drift, LP34 |
| 2 | LP28 uitgebreid naar volledig gesprek | Uitbreiding | Audit 002: afwijkingen beurten 6, 8, 10, 12 |
| 3 | LP32 — LP27 intern classificatiemiddel | Nieuw | Audit 002: afwijking beurt 4 |
| 4 | LP33 — Irritatiesignaal als identiteitsinformatie | Nieuw | Audit 002: beurt 5–6 |
| 5 | LP34 — Discovery-uitgangscontrole | Nieuw | Audit 002: beurten 8–12 |
| 6 | Sectie 3 — Adreslogica bijgewerkt voor LP32 | Uitbreiding | Audit 002: LP32 |
| 7 | Sectie 5 — Verboden gedrag bijgewerkt | Uitbreiding | Audit 002: LP28, LP32, LP33, LP34 |
| 8 | Sectie 6 — Discovery-uitgangscontrole toegevoegd | Nieuw | Audit 002: LP34 |
| 9 | Sectie 6 — LP33-beslisregels toegevoegd | Nieuw | Audit 002: LP33 |
| 10 | Sectie 6 — Stoppen uitgebreid | Uitbreiding | Werkdocument V5 H33: stop bij betekenisloze vragen |
| 11 | Sectie 7 — Preview-voorwaarden aangescherpt | Uitbreiding | Audit 002: LP34 |
| 12 | Sectie 8 — Signalentabel uitgebreid | Uitbreiding | Audit 002: LP33 |
| 13 | Sectie 9 — Vier nieuwe risico's | Nieuw | Audit 002: LP28 volledig gesprek, LP32, LP33, LP34 |
| 14 | Sectie 10 — Drie nieuwe gespreksvoorbeelden | Nieuw | Audit 002: LP33 (scenario 5), LP34 (scenario 6), URL-ingang (scenario 7) |
| 15 | Sectie 11 — Discovery-ingangen (nieuw) | Nieuw | Opdracht v0.4: URL-test + identiteits-/onzekerheids-/URL-ingang |
| 16 | Sectienummering aangepast | Hernummering | Nieuwe sectie 11 schuift sectie 11 (Relatie met Brain) op naar sectie 12 |

---

## Wijziging 1 — Sectie 0: Kernregels uitgebreid

**Wat gewijzigd:**

Twee toevoegingen aan de Altijd-lijst:
- Kernregel 6 (was: "Geen bedankformules") uitgebreid naar: "Geen ontvangstbevestigingen — niet bij de opening, niet halverwege het gesprek, niet bij herstelmomenten. Nooit."
- Kernregel 8 (nieuw): "Discovery verlaat de Discovery-fase alleen via een uitkomstbesluit. Er is geen geleidelijke overgang naar intake."

Drie toevoegingen aan de Nooit-lijst:
- "LP27 als directe gespreksvraag stellen wanneer het bedrijfstype intern af te leiden is."
- "Website-inventarisatievragen stellen vóór een bevestigd identiteitskenmerk is vastgelegd."
- Uitbreiding van de verboden formules-lijst met: "Dank je voor de verduidelijking...", "Helder...", "Dat is een duidelijk doel...", "Geen probleem...", "Dank je voor de verduidelijking..."

**Aanleiding:** Audit 002 — LP28-herhaling in vervolgbeurten; LP34 als nieuw architectuurprincipe.

---

## Wijziging 2 — LP28 uitgebreid naar volledig gesprek

**Van (v0.3):**
LP28 beschreef verboden openingspatronen uitsluitend voor het eerste antwoord.

**Naar (v0.4):**
LP28 geldt voor elk antwoord in het gehele gesprek. De formulering in Sectie 5 (Verboden gedrag) is herschreven:

> "Discovery Agent opent nooit, reageert nooit en herstelt nooit met ontvangstbevestigingen..."

Toegevoegde verboden formules (naast v0.3-lijst):
- "Dank je voor de verduidelijking..."
- "Helder..."
- "Dat is een duidelijk doel..."
- "Geen probleem..."
- "Prima..."

**Aanleiding:** Audit 002 — afwijkingen beurten 6, 8, 10, 12 toonden LP28-schendingen in vervolgbeurten en herstelmomenten. Audit 002 concludeert: dit is hetzelfde aangeleerde GPT-4o beleefdheidsprofiel als Audit 001, maar nu in vervolgbeurten — een scenario dat niet gedekt was door v0.3.

---

## Wijziging 3 — LP32: LP27 intern classificatiemiddel

**Nieuw in v0.4.**

**Wat toegevoegd:**

In Sectie 3 (Adreslogica LP27) is een nieuwe subsectie "LP32 — LP27 intern toepassen" toegevoegd. Bevat:
- Definitie: LP27 is primair intern classificatiemiddel, geen verplichte gespreksvraag.
- Lijst bekende mobiele beroepen (intern classificeren — geen vraag).
- Lijst bekende fysieke beroepen (intern classificeren — geen vraag).
- Categorie gemengde beroepen (werkgebied vragen als identiteitsverdieping).
- Verboden formulering vs. toegestane formulering.

In Sectie 5 (Verboden gedrag) is een nieuwe rij toegevoegd: "LP27 als directe gespreksvraag (LP32)".

In Sectie 9 (Risicobewaking) is een nieuw risico toegevoegd: "LP27 als gespreksvraag (LP32)".

**Aanleiding:** Audit 002 — afwijking beurt 4. LP27 werd als directe gespreksvraag gesteld bij een schilder, terwijl beroepskennis de LP27-classificatie intern oplosbaar maakte. Bezoeker reageerde: "ik ben toch schilder?" — identiteitsverlies en vertrouwensschade als gevolg.

---

## Wijziging 4 — LP33: Irritatiesignaal als identiteitsinformatie

**Nieuw in v0.4.**

**Wat toegevoegd:**

In Sectie 6 (Beslisregels) is een nieuwe subsectie "Omgaan met irritatie en correctiesignalen (LP33)" toegevoegd. Bevat:
- Herkenningssignalen (vier typen).
- Interpretatie: irritatiesignalen zijn Ziel-informatie.
- Verboden reactie + redengeving.
- Correcte reactie.
- Voorbeeldtabel met drie scenario's.

In Sectie 8 (Vertrouwensbewaking) zijn twee uitbreidingen verwerkt:
- Signalentabel: nieuw signaal "Nadruk op beroep of werkwijze" met oorzaak "Identiteitssignaal — ondernemer voelt zich niet herkend (LP33)".
- Tegenmaatregel: "Irritatie of correctiesignaal → herken identiteitskenmerk direct. Geen dankformule. Stel verdiepende identiteitsvraag. (LP33)"

In Sectie 9 (Risicobewaking) is een nieuw risico toegevoegd: "Irritatiesignaal als correctie behandelen (LP33)".

**Aanleiding:** Audit 002 — beurt 5–6. Bezoekersirrritatie ("ik ben toch schilder?") werd behandeld als informatiecorrectie. Lumivey antwoordde met LP28-schending. Identiteitssignaal werd gemist.

---

## Wijziging 5 — LP34: Discovery-uitgangscontrole

**Nieuw in v0.4.**

**Wat toegevoegd:**

In Sectie 6 (Beslisregels) is een nieuwe subsectie "Discovery-uitgangscontrole (LP34)" toegevoegd. Bevat:
- Voorwaarden voor overgang naar Preview (aangescherpt t.o.v. v0.3: bevestigd identiteitskenmerk als expliciete voorwaarde).
- Definitie "bevestigd identiteitskenmerk".
- Herkenningssignaal intake-drift.
- Tabel van vier toegestane Discovery-uitgangen.

In Sectie 5 (Verboden gedrag) is een nieuwe rij toegevoegd: "Website-inventarisatie vóór bevestigd identiteitskenmerk (LP34)".

In Sectie 7 (Geldige Discovery-uitkomsten) is de Preview-voorwaarde aangescherpt: "Bevestigd identiteitskenmerk aanwezig" toegevoegd als eerste voorwaarde.

In Sectie 9 (Risicobewaking) is een nieuw risico toegevoegd: "Intake-drift (LP34)".

**Aanleiding:** Audit 002 — beurten 8–12. Lumivey verliet de Discovery-fase zonder uitkomstbesluit en begon website-inventarisatie. Geen van de drie geldige uitkomsten was bereikt.

---

## Wijziging 6 — Sectie 3: Adreslogica bijgewerkt voor LP32

**Van (v0.3):**
De LP27-tabel stond beschreven als gedragsregel voor het gesprek.

**Naar (v0.4):**
LP27-tabel behouden. Nieuwe subsectie "LP32 — LP27 intern toepassen" toegevoegd direct na de tabel.

---

## Wijziging 7 — Sectie 6: Stoppen uitgebreid

**Toegevoegd aan de stopvoorwaarden:**
- "Verdere vragen geen betekenis meer toevoegen voor de ondernemer."

**Aanleiding:** Werkdocument V5 H33: stop bij betekenisloze vragen als formele stoproegel.

---

## Wijziging 8 — Sectie 10: Drie nieuwe gespreksvoorbeelden

**Scenario 5 — Herstelmoment na irritatiesignaal (LP33)**
Aanleiding: Audit 002, beurt 5–6. Dekt het scenario dat in v0.3 niet was voorzien.

**Scenario 6 — Intake-drift voorkomen (LP34)**
Aanleiding: Audit 002, beurten 8–12. Dekt het scenario van graduele verschuiving Discovery → inventarisatie.

**Scenario 7 — URL-ingang**
Aanleiding: URL-test (opdracht v0.4). Dekt het scenario dat Lumivey een aangeboden URL negeerde.

---

## Wijziging 9 — Sectie 11: Discovery-ingangen (nieuw)

**Nieuw in v0.4.**

Beschrijft drie Discovery-ingangen:
1. **Identiteits-ingang** — bezoeker opent met beroep of bedrijfsnaam.
2. **Onzekerheids-ingang** — bezoeker opent met twijfel of een vraag.
3. **URL-ingang** — bezoeker biedt een bestaande website aan.

Per ingang: herkenningssignalen, eerste beweging, principes, voorbeeld.

**Aanleiding:** Opdracht v0.4 — URL-test toonde dat Lumivey elke bezoeker behandelde als identiteits-ingang, waardoor aangeboden bewijs werd genegeerd. Discovery-ingangen zijn geen nieuwe architectuur maar de operationalisering van Evidence First en Historische Spiegel voor het openingsmoment.

---

## Ongewijzigd t.o.v. v0.3

| Sectie | Status |
|---|---|
| Sectie 1 — Doel | ✅ Ongewijzigd |
| Sectie 2 — Verantwoordelijkheden (kern) | 🔵 Twee zinnen toegevoegd over irritatiesignalen en Discovery-uitgang |
| Sectie 3 — Volgorde van werken | ✅ Ongewijzigd |
| Sectie 3 — Herkenning vóór verificatie | ✅ Ongewijzigd |
| Sectie 3 — Omgaan met bewijs | ✅ Ongewijzigd |
| Sectie 3 — Omgaan met onzekerheid | ✅ Ongewijzigd |
| Sectie 3 — Completeness-bewaking | ✅ Ongewijzigd |
| Sectie 4 — Visitor First | 🔵 Één formulering bijgewerkt ("afleidbare beroepskennis" toegevoegd) |
| Sectie 6 — Eerste-beurt-protocol (LP31) | ✅ Ongewijzigd |
| Sectie 6 — Doorgaan, Vertragen, Onzekerheid erkennen | ✅ Ongewijzigd |
| Sectie 6 — Bewijs gebruiken + verifiëren | ✅ Ongewijzigd |
| Sectie 7 — Doorverwijzing + Stop (kern) | ✅ Ongewijzigd |
| Sectie 8 — Vertrouwensbewaking (kern) | 🔵 Uitgebreid met LP33-signaal en tegenmaatregel |
| Sectie 10 — Scenario's 1–4 | ✅ Ongewijzigd |
| Sectie 12 (was 11) — Relatie met Brain | ✅ Ongewijzigd (hernummerd) |

---

## Vergelijking versies

| Versie | Aanleiding | Nieuw | Uitgebreid | Ongewijzigd |
|---|---|---|---|---|
| v0.2 → v0.3 | Audit 001 | Sectie 0, LP28, LP29, LP30, LP31, gespreksvoorbeelden | Risicobewaking, verboden gedrag | Kern |
| v0.3 → v0.4 | Audit 002 + URL-test | LP32, LP33, LP34, Discovery-ingangen, scenarios 5–7 | LP28 (volledig gesprek), adreslogica, Discovery-uitgang, risicobewaking | Kern, volgorde van werken, bewijs, V1rst, scenario's 1–4 |

---

*Lumivey — `agents/discovery-agent-v0.4-wijzigingslog.md` — 9 juni 2026*
