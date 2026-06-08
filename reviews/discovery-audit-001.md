# Discovery Audit 001

## 1. Metadata

| Veld | Waarde |
|---|---|
| **Audit ID** | AUDIT-001 |
| **Datum** | 8 juni 2025 |
| **Getest systeem** | Lumivey — Brain v0.1 + Discovery Agent v0.2 + GPT-4o |
| **Testscenario** | Eerste praktijktest via Lumivey-website |
| **Testinput** | `ik ben een schilder` |
| **Auditor** | Ruud Kroonen |
| **Status** | Goedgekeurd |
| **Bestand** | `reviews/discovery-audit-001.md` |

---

## 2. Testopstelling

| Component | Status | Toelichting |
|---|---|---|
| Lumivey Brain v0.1 | Actief | Geladen als system prompt via `brain/brain-v0.1.md` |
| Discovery Agent v0.2 | Actief | Geladen als system prompt via `agents/discovery-agent-v0.2.md` |
| GPT-4o | Actief | Model: `gpt-4o`, temperature: `0.3` |
| API-koppeling | Actief | Vercel serverless function `api/chat.js` |
| Website | Actief | Squarespace-formulier gekoppeld aan API via enkelvoudig tekstveld |

Dit is de eerste praktijktest waarbij de volledige keten — website, API, kennisdocumenten en taalmodel — als één werkend systeem is bevraagd.

---

## 3. Testinput

```
ik ben een schilder
```

Invoer zonder hoofdletters, zonder interpunctie, korte zin. Informeel register. Eerste beurt van een nieuw gesprek.

---

## 4. Werkelijk antwoord

```
Bedankt voor het delen van uw beroep! Als schilder is het belangrijk dat we uw
unieke stijl en diensten goed begrijpen. Kunt u me iets meer vertellen over uw
werkgebied en of u specifieke projecten of diensten heeft die u wilt benadrukken?
```

---

## 5. Geconstateerde afwijkingen

### Afwijking 1 — Intake-taal in opening

| Veld | Inhoud |
|---|---|
| **Referentie Brain** | OB-1 — Lumivey is een Discovery Engine, geen intake-engine |
| **Referentie Agent** | Sectie 3 (Herkenning vóór verificatie); Sectie 4 (Visitor First) |

**Observatie**

Lumivey opende met: *"Bedankt voor het delen van uw beroep!"*

**Analyse**

De formulering "bedankt voor het delen" positioneert het bericht van de ondernemer als een gegevensinvoer die in ontvangst is genomen. Dit is intake-taal: het systeem bevestigt dat informatie is ontvangen en gaat die verwerken. OB-1 stelt expliciet dat Lumivey geen intake-engine is. De eerste beweging van Lumivey moet de ondernemer laten voelen dat hij herkend wordt als persoon — niet dat zijn gegevens zijn geregistreerd. Een bedankformule voor informatieverstrekking ondermijnt de herkenningsbasis voor het volledige verdere gesprek.

**Ernst:** Hoog

**Gewenst gedrag**

De opening is een directe herkenning of één identiteitsvraag, zonder bedankjargon. Bijvoorbeeld:

> Zelfstandig, of werk je met mensen om je heen?

---

### Afwijking 2 — Twee vragen tegelijk

| Veld | Inhoud |
|---|---|
| **Referentie Brain** | Sectie 2.1 — Één vraag tegelijk (harde grens zonder uitzonderingen) |
| **Referentie Agent** | Sectie 3 (Gespreksgedrag); Sectie 5 (Verboden gedrag); Sectie 9 (Twee-vragen-fout) |

**Observatie**

Lumivey stelde twee vragen in één antwoord:

1. *"Kunt u me iets meer vertellen over uw werkgebied"*
2. *"en of u specifieke projecten of diensten heeft die u wilt benadrukken?"*

**Analyse**

Brain v0.1, sectie 2.1 definieert de één-vraag-regel als een harde grens. Discovery Agent v0.2 benoemt de twee-vragen-fout expliciet als risico in sectie 9, inclusief herkenningssignaal en tegenmaatregel. Dit is bovendien een van de drie gedragsfouten die reeds gecorrigeerd zijn in Brain v4 — de correctiehistorie is gedocumenteerd. Het opnieuw optreden van deze fout in de eerste praktijktest wijst op een structureel afdwingingsprobleem: de regel staat correct beschreven maar wordt onvoldoende afgedwongen in de uitvoering.

**Ernst:** Hoog

**Gewenst gedrag**

Één vraag per beurt. De meest relevante vraag bij een beroepsnaming is een identiteitsvraag:

> Woningschilderwerk, bedrijfspanden, of allebei?

---

### Afwijking 3 — Functionaliteit vóór identiteitsbevestiging

| Veld | Inhoud |
|---|---|
| **Referentie Brain** | Sectie 3.1, stap 1 — Identiteit vóór functionaliteit |
| **Referentie Agent** | Sectie 3 (Volgorde van werken, stap 1) |

**Observatie**

Lumivey vroeg direct naar werkgebied en te benadrukken diensten — functionele informatie — zonder eerst de identiteit van de ondernemer te verankeren.

**Analyse**

"Ik ben een schilder" is een openingszin, geen volledige identiteitsbevestiging. Identiteit omvat meer dan beroepsnaming: zelfstandig of met personeel, type werk, schaal, regio. Brain v0.1 sectie 3.1 schrijft voor dat identiteit altijd wordt vastgesteld vóór functionele behoeften worden geïnventariseerd. Lumivey behandelde "schilder" als voldoende om direct door te gaan naar functionele Discovery. De identiteitsfase is daarmee overgeslagen.

**Ernst:** Middel

**Gewenst gedrag**

Een identiteitsvraag vóór elke functionele vraag:

> Werkt u voor particulieren, bedrijven, of beide?

---

### Afwijking 4 — Aanname zonder signaal ("unieke stijl")

| Veld | Inhoud |
|---|---|
| **Referentie Brain** | Sectie 2.1 — Geen aannames zonder signaal |
| **Referentie Agent** | Sectie 3 (Gespreksgedrag: geen aannames zonder signaal); Sectie 5 (Verboden gedrag) |

**Observatie**

Lumivey schreef: *"Als schilder is het belangrijk dat we uw unieke stijl en diensten goed begrijpen."*

**Analyse**

De ondernemer heeft alleen gezegd "ik ben een schilder." Er is geen enkel signaal gegeven over een onderscheidende of unieke stijl. Lumivey fabriceerde een eigenschap die de ondernemer niet heeft geclaimd. Dit is een aanname zonder signaal — expliciet verboden gedrag volgens Brain v0.1 sectie 2.1 en Discovery Agent v0.2 sectie 5. Naast de regelovertreding kan deze aanname het vertrouwen schaden: wanneer een ondernemer zichzelf niet herkent in de aanname, ervaart hij Lumivey als niet-begrijpend.

**Ernst:** Middel

**Gewenst gedrag**

Geen kwalificaties of eigenschappen toeschrijven die de ondernemer niet zelf heeft aangedragen. Beschrijvingen beperken tot wat is bevestigd.

---

### Afwijking 5 — Niet-adaptieve toon

| Veld | Inhoud |
|---|---|
| **Referentie Brain** | Sectie 2.2 — Bezoeker bepaalt tempo |
| **Referentie Agent** | Sectie 3 (Adaptief gesprek — pas gespreksstijl aan op signalen) |

**Observatie**

Lumivey antwoordde in volledig formeel Nederlands ("uw beroep", "Kunt u mij", volledige zinnen met uitroepteken) op een invoer zonder hoofdletters, zonder interpunctie en van drie woorden.

**Analyse**

Discovery Agent v0.2, sectie 3 schrijft voor dat Lumivey gespreksstijl en vraagvolgorde aanpast op basis van signalen uit het gesprek. De invoer "ik ben een schilder" bevat duidelijke registerinformatie: informeel, compact, direct. Een volledig formeel antwoord vergroot de afstand tussen bezoeker en systeem en doet afbreuk aan de ontzorgingsbelofte. Toon is een gesprekssignaal — het wordt in dit antwoord genegeerd.

**Ernst:** Laag

**Gewenst gedrag**

Toon spiegelt het register van de bezoeker. Bij informele korte invoer: rustig, direct, geen formele aanhef, geen uitroepteken.

---

## 6. Oorzaakanalyse

### Oorzaak 1 — System prompt is instructief maar onvoldoende formatief

Brain v0.1 en Discovery Agent v0.2 beschrijven correct wat Lumivey moet doen. Ze beschrijven het echter uitsluitend in proza-instructies, niet in het patroon waarmee het model antwoorden genereert.

GPT-4o heeft een diepgeworteld aangeleerd gedragsprofiel: beleefd, uitgebreid, bedankend, bevestigend. Dit profiel is het resultaat van grootschalig RLHF-training op "behulpzaamheid." Wanneer een uitgebreide system prompt dit profiel probeert te overschrijven via instructies als "geen bedankformule" of "één vraag tegelijk," concurreert elke individuele instructie met het volledige aangeleerde profiel van het model. De instructies winnen niet automatisch — zeker niet wanneer ze zijn opgenomen in een lang document tussen honderden andere regels.

Een formatieve system prompt geeft het model niet alleen regels, maar ook patroonvoorbeelden die het aangeleerde profiel direct vervangen voor de gewenste responsvorm. Lumivey Brain v0.1 is uitsluitend instructief. Er zijn geen formatieve ankers aanwezig.

### Oorzaak 2 — Ontbreken van few-shot voorbeelden

GPT-4o volgt concrete input-outputvoorbeelden structureel betrouwbaarder dan abstracte gedragsregels in proza. Dit is een gedocumenteerde eigenschap van grote taalmodellen: few-shot voorbeelden activeren patroonherkenning direct, terwijl instructieparagrafen worden verwerkt als contextinformatie die in concurrentie staat met trainingspatronen.

De twee meest kritieke afwijkingen in dit testgeval — de bedankformule en de twee-vragen-fout — zijn precies het soort patroon dat met één negatief voorbeeld ("zo niet") en één positief voorbeeld ("zo wel") aantoonbaar te corrigeren is. Beide ontbreken volledig in Brain v0.1 en Discovery Agent v0.2.

### Oorzaak 3 — Onvoldoende prioritering van kritieke gedragsregels

Brain v0.1 en Discovery Agent v0.2 zijn uitgebreide documenten. GPT-4o geeft bij lange system prompts meer gewicht aan vroeg beschreven instructies en aan zijn eigen aangeleerde gedragspatronen. Kritieke gedragsregels — één vraag tegelijk, geen bedankformule, identiteit vóór functionaliteit — staan correct beschreven, maar concurreren met tientallen andere regels en met het aangeleerde beleefdheidsprofiel van het model.

Zonder expliciete prioriteringsankers — een compacte, vetgedrukte lijst van absolute gedragsregels bovenaan de agent, vóór alle andere instructies — vervagen de kritieke regels in de praktijk. Het model ervaart ze als gelijkwaardig aan de overige instructies en weegt ze af tegen zijn aangeleerde profiel. De aangeleerde beleefdheid wint dan van de instructie.

---

## 7. Correctieve maatregelen

### LP28 — Verboden openingspatronen

**Doel**

Voorkomen dat Lumivey een gesprek opent met intake-taal, complimenten of bedankformules. De opening is altijd een herkenning of één directe vraag.

**Beschrijving**

Toevoeging aan Discovery Agent sectie 5 (Verboden gedrag):

> Lumivey opent nooit met een bedankformule, compliment of bevestiging van het ontvangen van informatie. Verboden openingspatronen: *"Bedankt voor..."*, *"Fijn dat u..."*, *"Goed om te weten..."*, *"Wat leuk dat..."*, *"Als [beroep] is het belangrijk dat..."*. De eerste zin is altijd een directe herkenning of één enkele vraag.

**Verwachte impact**

Elimineert intake-taal in de openingsbeweging. Herstelt de herkenningsbasis vanaf het eerste antwoord.

**Risicoreductie**

Adresseert afwijking 1 (hoog) en ondersteunt afwijking 3 (middel).

---

### LP29 — Gespreksvoorbeelden verplicht

**Doel**

Formatieve ankers toevoegen aan Discovery Agent zodat het model correcte antwoordpatronen direct herkent en reproduceert, niet alleen abstracte regels verwerkt.

**Beschrijving**

Toevoeging van een nieuwe sectie aan Discovery Agent: **Gespreksvoorbeelden**. Per veelvoorkomende openingsinvoer: één fout voorbeeld met uitleg waarom het fout is, één correct voorbeeld. Minimale dekking:

- Beroepsnaming: `ik ben een schilder`
- Locatienaming: `ik zit in Utrecht`
- Vage behoefte: `ik wil een website`
- Twijfel: `ik weet het nog niet zo goed`

**Verwachte impact**

Verlaagt structureel de kans op twee-vragen-fout, bedankformules en aannames. Formatieve voorbeelden werken sterker dan instructieproza bij grote taalmodellen.

**Risicoreductie**

Adresseert afwijkingen 1, 2 en 4. Primaire correctie voor oorzaak 2.

---

### LP30 — Kernregels bovenaan Agent

**Doel**

Kritieke gedragsregels expliciet prioriteren door ze compact en vetgedrukt bovenaan Discovery Agent te plaatsen, vóór alle andere instructies.

**Beschrijving**

Toevoeging van sectie 0 aan Discovery Agent: **Kernregels — absoluut**.

> **Altijd:**
> - Één vraag per beurt — geen uitzonderingen.
> - Identiteit vóór functionaliteit.
> - Herkenning vóór volledigheid.
> - Toon aanpassen op het register van de bezoeker.
>
> **Nooit:**
> - Bedankformules of complimenten als opening.
> - Twee vragen in één antwoord.
> - Aannames zonder signaal van de bezoeker.
> - Intake-taal: geen "bedankt voor het delen", geen "goed om te weten".

**Verwachte impact**

Verhoogt de prioriteit van de meest kritieke regels in de verwerking van het model. Vroeg in de context geplaatste instructies wegen zwaarder dan laat geplaatste instructies bij grote taalmodellen.

**Risicoreductie**

Adresseert oorzaak 3. Ondersteunt alle vijf afwijkingen.

---

### LP31 — Eerste-beurt-protocol

**Doel**

Expliciete gedragsregel definiëren voor de eerste beurt van een gesprek, zodat het model weet dat de eerste reactie altijd een identiteitsvraag is — nooit een functionele vraag, nooit een bedankformule.

**Beschrijving**

Toevoeging aan Discovery Agent sectie 6 (Beslisregels):

> **Eerste beurt — protocol:**
> Wanneer het eerste bericht van een bezoeker uitsluitend een beroepsnaming, een naam, een locatie of een korte beschrijving bevat zonder verdere context:
> - Stel uitsluitend één identiteitsvraag.
> - Geen werkgebiedvragen in de eerste beurt.
> - Geen dienstenvragen in de eerste beurt.
> - Geen complimenten, bedankformules of kwalificaties.
> - Pas toon aan op het register van de invoer.
> - Maximaal één zin.

**Verwachte impact**

Geeft het model een expliciete beslisregel voor de meest voorkomende openingssituatie. Elimineert de ambiguïteit die leidt tot te vroege functionele vragen en dubbele vraagstelling.

**Risicoreductie**

Adresseert afwijkingen 2, 3 en 5. Primaire correctie voor de eerste-beurt-situatie.

---

## 8. Conclusie

De eerste praktijktest van Lumivey heeft bevestigd dat de technische architectuur succesvol functioneert. De volledige keten — Squarespace-website, API-koppeling, kennisdocumentlading en GPT-4o — werkte zonder technische fouten. Brain v0.1 werd aantoonbaar gelezen: het antwoord van het systeem beweegt zich in het domein van Discovery (werkgebied, diensten) en niet in een ongedefinieerd domein. Discovery Agent v0.2 had aantoonbaar invloed: het systeem stelde een vervolgvraag in het Discovery-gesprek, wat zonder de Agent niet vanzelfsprekend zou zijn.

De geconstateerde afwijkingen — intake-taal, twee vragen tegelijk, functionele vragen vóór identiteitsbevestiging, aanname zonder signaal en niet-adaptieve toon — bevinden zich niet in de architectuur en niet in Brain v0.1. Ze bevinden zich in de gedragsafdwinging: de wijze waarop het model de correcte regels omzet naar daadwerkelijk gespreksgedrag. Dit is een gekend en oplosbaar probleem in de toepassing van grote taalmodellen: instructieproza alleen is onvoldoende om aangeleerd modelgedrag structureel te overschrijven. De oplossing ligt in formatieve ankers, prioritering en expliciete protocollen — niet in een herziening van de kennislaag.

Brain v0.1 faalt niet. Brain v0.1 beschrijft de juiste kennis, de juiste principes en de juiste grenzen. De afwijkingen zijn het gevolg van een implementatiekloof tussen kennisbeschrijving en gedragsafdwinging. Discovery Agent v0.3 is de aangewezen correctiestap om deze kloof te dichten.

---

## 9. Besluit

**Audit AUDIT-001 is goedgekeurd.**

| Besluit | Status |
|---|---|
| Brain v0.1 | Blijft ongewijzigd |
| Discovery Agent v0.2 | Wordt opgevolgd door Discovery Agent v0.3 |
| LP28, LP29, LP30, LP31 | Ter goedkeuring voorgelegd aan eigenaar |
| Audit 001 | Wordt referentiedocument voor toekomstige gedragsvalidaties |

Discovery Agent v0.3 wordt ontwikkeld op basis van LP28, LP29, LP30 en LP31, na goedkeuring door de eigenaar. Alle vier maatregelen zijn herleidbaar naar bestaande Brain v0.1-principes. Er wordt geen nieuwe kennis toegevoegd.

---

*Lumivey — `reviews/discovery-audit-001.md` — AUDIT-001 — 8 juni 2025*
