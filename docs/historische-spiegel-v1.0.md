# Historische Spiegel v1.0

| Veld | Waarde |
|---|---|
| **Naam** | Historische Spiegel |
| **Versie** | 1.0 |
| **Status** | Architectuurdocument — concept ter beoordeling |
| **Positie in keten** | Discovery Exit → Historische Spiegel → Preview Entry |
| **Eigenaar** | Ruud Kroonen |
| **Bron** | Brain v0.1 + Werkdocument V6 + Discovery Exit & Preview Entry v1.0 |

---

## Inleiding

De Historische Spiegel is de architectuurlaag die bestaand bewijs begrijpt en waardeert — vóórdat Preview iets nieuws voorstelt.

Ze heeft één taak: de bestaande werkelijkheid begrijpen in het licht van de veranderopdracht.

Ze heeft één grens: ze stelt niets voor. Ze creëert niets. Ze beoordeelt alleen wat er al is.

Het risico dat dit document adresseert: de Historische Spiegel mag niet ongemerkt Preview worden. Zodra ze begint met voorstellen, creëren of nieuwe richtingen bedenken, heeft ze haar eigen functie verlaten. Dit document beschrijft niet alleen wat de Historische Spiegel doet — het beschrijft expliciet waar ze ophoudt.

---

## 1. Wat mag de Historische Spiegel — en wat niet?

### De grens: vijf activiteiten

**Begrijpen** is het lezen van het bewijsmateriaal vanuit de veranderopdracht. Wat staat er op de website? Welke elementen zijn aanwezig? Welke verhoudingen bestaan er tussen elementen? Dit is volledig binnen de Historische Spiegel.

**Interpreteren** is het betekenis geven aan wat er staat in relatie tot de veranderopdracht. Foto's van de vader zijn niet neutraal — ze zijn IST-bewijs voor de specifieke spanning die de ondernemer heeft beschreven. De "Over ons"-tekst in de ik-persoon van de vader is niet neutraal — hij staat in conflict met de bevestigde SOLL. Dit is volledig binnen de Historische Spiegel, zolang de interpretatie niet verder gaat dan de veranderopdracht rechtvaardigt.

**Waarderen** is het categoriseren van bewijs als behouden, aanpassen, verwijderen of onzeker. Dit is de kernhandeling van de Historische Spiegel. Ze stelt vast welke elementen nog kloppen, welke moeten worden bijgesteld, welke moeten verdwijnen, en welke nog open zijn. Dit is volledig binnen de Historische Spiegel.

**Voorstellen** is het bedenken van wat er in plaats van het bestaande moet komen. "De foto van de vader moet worden vervangen door een foto van de nieuwe eigenaar" — het eerste deel (verwijderen van de vaderfoto) is de Historische Spiegel. Het tweede deel (vervangen door een foto van de nieuwe eigenaar) is Preview. De Historische Spiegel beschrijft de leegte — ze vult hem niet in.

**Creëren** is het produceren van nieuwe inhoud, nieuwe structuur, nieuwe visuele richting. Dit is Preview. De Historische Spiegel doet dit nooit.

### De grens in één zin

De Historische Spiegel beschrijft wat er is en of het nog klopt. Preview beschrijft wat er moet komen.

### Praktische grenstesten

| Handeling | Historische Spiegel? | Preview? |
|---|---|---|
| "De foto toont de vader, niet de nieuwe eigenaar." | ✅ Beschrijven wat er is | |
| "De foto moet worden verwijderd." | ✅ Waarderen (verwijderen) | |
| "Er moet een nieuwe foto komen van de nieuwe eigenaar." | | ✅ Voorstellen |
| "De contactgegevens zijn van de vader." | ✅ Beschrijven | |
| "De contactgegevens kloppen niet meer." | ✅ Waarderen (aanpassen) | |
| "De contactgegevens moeten worden vervangen door de gegevens van de nieuwe eigenaar." | ✅ Richting geven binnen aanpassen | |
| "We gebruiken een warme groentint voor de nieuwe huisstijl." | | ✅ Creëren |
| "Het logo is onzeker — de ondernemer weet het nog niet." | ✅ Waarderen (onzeker) | |
| "Het logo past niet bij de nieuwe identiteit." | ⚠️ Grensgebied — zie sectie 7 | |

---

## 2. Wat is de output van de Historische Spiegel?

### Het bewijsbeeld

De Historische Spiegel produceert een **bewijsbeeld**.

**Waarom geen analyse:** een analyse trekt conclusies en formuleert aanbevelingen. Een bewijsbeeld beschrijft de bestaande werkelijkheid in gecategoriseerde vorm — zonder aanbevelingen.

**Waarom geen rapport:** een rapport is een afgerond document voor een lezer. Een bewijsbeeld is een intern architectuurobject dat wordt overgedragen aan Preview — niet aan de ondernemer.

**Waarom geen dataset:** een dataset is een verzameling ongeïnterpreteerde feiten. Een bewijsbeeld is geïnterpreteerd: elk element is beoordeeld in relatie tot de veranderopdracht.

**Waarom geen spanningsbeeld:** het bewijsbeeld bevat de spanning — maar een spanningsbeeld zou impliceren dat de spanning zelf het object is. De spanning is al beschreven in de veranderopdracht. Het bewijsbeeld vertaalt die spanning naar concrete website-elementen.

**Het bewijsbeeld is:** een gecategoriseerde beschrijving van bestaande website-elementen, geordend naar hun relatie tot de bevestigde veranderopdracht, aangevuld met expliciete onzekerheden die nog open staan voor Preview.

### Structuur van het bewijsbeeld

```
BEWIJSBEELD

BRON
  URL: [adres]
  Type bewijs: bestaande website

RELATIE TOT VERANDEROPDRACHT
  Veranderopdracht-samenvatting: [IST-kern] → [SOLL-richting]

BEHOUDEN
  [element]: [beschrijving]
  — reden: actueel en consistent met SOLL

AANPASSEN
  [element]: [huidige staat]
  — reden: richting klopt, invulling verandert door [aspect van veranderopdracht]

VERWIJDEREN
  [element]: [beschrijving]
  — reden: direct in conflict met [aspect van veranderopdracht]

ONZEKER
  [element]: [beschrijving]
  — reden: niet benoemd door ondernemer, niet evident actueel of verouderd
  — actie: verificatievraag of open laten voor Preview

OPENSTAANDE VRAGEN
  [vraag]: [context — waarom open, wat Preview ermee doet]
```

Dit is wat Preview ontvangt. Niet de volledige website. Niet het volledige gespreksarchief. Het bewijsbeeld — de gecategoriseerde spanning in website-elementen.

---

## 3. Beslislogica voor bewijs-waardering

### De vier categorieën — besliscriteria

**Behouden**

Criterium: het element is niet aangemerkt door de ondernemer als onderdeel van de spanning, het is consistent met de bevestigde identiteit, en er is geen aanwijzing dat het verouderd is.

Beslisregels:
- Is het element benoemd door de ondernemer als "klopt niet meer"? → Nee → kandidaat voor Behouden
- Is het element in conflict met de bevestigde SOLL? → Nee → Behouden

**Aanpassen**

Criterium: het element beschrijft iets dat in principe nog geldt, maar de invulling ervan is veranderd door de overgang die de veranderopdracht beschrijft.

Beslisregels:
- Is het element een container (structuur, categorie, thema) die de juiste richting toont maar de verkeerde persoon of periode beschrijft? → Aanpassen
- Is het element aanpasbaar zonder de structuur te verliezen? → Aanpassen

**Verwijderen**

Criterium: het element is direct in conflict met de bevestigde veranderopdracht — de ondernemer heeft dit element expliciet of impliciet aangemerkt als onderdeel van de IST die niet meer klopt.

Beslisregels:
- Heeft de ondernemer dit element zelf benoemd als "moet weg"? → Verwijderen
- Is het element onlosmakelijk verbonden met de IST-kern die de ondernemer heeft aangewezen? → Verwijderen

**Onzeker**

Criterium: het element is aanwezig op de website maar valt buiten de veranderopdracht. De ondernemer heeft er niets over gezegd, of heeft er twijfelend over gesproken.

Beslisregels:
- Is het element benoemd door de ondernemer met onzekerheid ("misschien", "weet ik niet")? → Onzeker
- Is het element aanwezig maar niet besproken, en niet evident actueel of verouderd? → Onzeker

### Voorbeelden per bewijs-element

| Element | Categorie | Beslislogica |
|---|---|---|
| **Foto van de overleden eigenaar** | Verwijderen | Ondernemer heeft foto's van vader expliciet benoemd als IST-kern. Direct in conflict met SOLL (eigen foto's). |
| **Telefoonnummer van de vader** | Verwijderen | Contactgegevens van de vader zijn bevestigde IST-kern. Direct in conflict met SOLL (eigen contactgegevens). |
| **Bedrijfsnaam "Veenstra Tuinen"** | Behouden | Niet aangemerkt als onderdeel van de spanning. Bedrijfsnaam continuïteit is waarschijnlijk gewenst bij bedrijfsovername. Onzeker alleen als ondernemer iets over naam heeft gezegd — bij stilte: Behouden. |
| **Diensten (tuinaanleg, onderhoud)** | Behouden | Niet aangemerkt. Consistent met beroep hovenier. Beroepskennis: hovenier = tuinwerk. Actueel tenzij ondernemer aangeeft dat dit verandert. |
| **Historie ("opgericht door opa")** | Aanpassen | Structuur (geschiedenis van het bedrijf) klopt — maar de tekst eindigt bij vader. Nieuwe eigenaar ontbreekt. De container is goed, de invulling is onvolledig. |
| **"Over ons"-tekst in ik-persoon van vader** | Aanpassen | Structuur (persoonlijke introductie) klopt — maar de persoon is de vader. Richting klopt, invulling verandert. |
| **Logo** | Onzeker | Ondernemer zei "misschien ook het logo" — twijfelende formulering. Niet bevestigd als te verwijderen, niet bevestigd als te behouden. |
| **Kleuren (groen/bruin)** | Onzeker | Niet besproken door ondernemer. Niet evident verouderd of actueel. Laten voor Preview. |
| **Projectfoto's (werk)** | Behouden | Vakmanschap toont het werk van het bedrijf — niet de persoon. Actueel bewijs van wat het bedrijf kan. |
| **Reviews van klanten** | Aanpassen | Reviews gaan over het bedrijf, niet de persoon — maar perspectief kan verwijzen naar vader. Structuur behouden, mogelijk herformulering nodig. |

### Wanneer Lumivey iets NIET als verouderd mag beschouwen

De Historische Spiegel maakt geen eigen oordelen over stijl, esthetiek of moderniteit. Ze categoriseert uitsluitend op basis van de veranderopdracht en bevestigde informatie.

**Verboden:** "Het logo ziet er ouder uit en past niet bij een modern hoveniersbedrijf." — Dit is een esthetisch oordeel, geen veranderopdracht-gebaseerde waardering. Dit is Preview-terrein.

**Toegestaan:** "Het logo is niet besproken door de ondernemer." → Onzeker.

**Toegestaan:** "De ondernemer zei 'misschien ook het logo'." → Onzeker met notitie.

---

## 4. Wanneer mag de Historische Spiegel vragen stellen?

### Het principe

Evidence First stelt: wanneer betrouwbaar bewijs beschikbaar is, heeft dat voorrang boven nieuwe vragen. Na de URL zijn de meeste IST-vragen overbodig. Maar niet alle vragen zijn daarmee vervallen.

De Historische Spiegel mag één categorie vragen stellen: **verificatievragen voor onzekere elementen die beslissend zijn voor de veranderopdracht.**

### Criteria voor een gerechtvaardigde verificatievraag

Gebaseerd op ABCD (Discovery Agent v0.7):

| Criterium | Vraag |
|---|---|
| **A — Informatie ontbreekt** | Is de status van dit element onbekend en niet af te leiden uit het gesprek? |
| **B — Niet afleidbaar** | Kan de status niet worden bepaald via beroepskennis of beschikbaar bewijs? |
| **C — Nodig voor volgende stap** | Is de informatie nodig vóór de overdracht aan Preview, of kan Preview het zelf oplossen? |
| **D — Helpt de veranderopdracht** | Draagt het antwoord bij aan het begrijpen van de bestaande werkelijkheid? |

Als een element voldoet aan alle vier — en het gaat om verificatie van bestaand bewijs, niet om het genereren van nieuwe inhoud — mag de Historische Spiegel één gerichte vraag stellen.

### Vragen die niet meer gerechtvaardigd zijn

Na de URL ontvangst zijn de volgende typen vragen niet meer gerechtvaardigd:

- **IST-vragen over zichtbare website-inhoud:** "Heeft je vader een eigen pagina?" → staat op de website.
- **Vragen die al in de veranderopdracht zijn beantwoord:** "Staan er foto's van je vader op?" → bevestigde IST-kern.
- **Vragen die beroepskennis al beantwoordt:** "Bied je tuinonderhoud aan?" → hovenier = beroepskennis.
- **SOLL-vragen:** "Wat wil je in plaats van de vaderfoto?" → dit is een Preview-vraag, geen Historische Spiegel-vraag.

### Vragen die nog gerechtvaardigd zijn

| Vraag | Rechtvaardiging |
|---|---|
| "De website noemt werkgebied X — klopt dat nog?" | Verificatie van actuele locatie — niet afleidbaar uit veranderopdracht of beroepskennis |
| "Het logo — wil je dat ook aanpassen of mag het blijven?" | Onzeker element waarbij ondernemer twijfelde, verificatie beslissend voor scope |
| "Zijn er diensten op de website die je niet meer aanbiedt?" | Verificatie van actuele diensten — website is historisch bewijs, niet automatisch actueel |

### Maximumaantal vragen

Eén vraag per onzeker element. Maximaal twee tot drie verificatievragen in totaal. Meer dan dat is geen verificatie meer — dat is nieuwe Discovery na de Discovery-afsluiting.

### Relatie met Visitor First

Visitor First stelt: geen vragen die al beantwoord kunnen worden. Dit geldt ook hier. De Historische Spiegel stelt geen vragen over wat de website al toont. Ze stelt alleen vragen over wat de website toont maar waarvan de actualiteit onduidelijk is.

---

## 5. Historische Spiegel zonder website

### Bestaat de Historische Spiegel bij afwezigheid van een website?

Ja. De Historische Spiegel is een architectuurlaag, geen URL-scraper. Ze is de lens waarmee bestaand bewijs wordt bekeken. Wanneer er geen website is, bestaat er mogelijk ander bewijs.

### Alternatieve bewijsbronnen

| Situatie | Bewijsbron | Historische Spiegel-handeling |
|---|---|---|
| **Geen website, wel Google Bedrijfsprofiel** | Google-profiel: naam, adres, diensten, foto's, reviews | Analyseer profiel als primair bewijs. Dezelfde categorisering: behouden / aanpassen / verwijderen / onzeker. |
| **Geen website, wel sociale media** | Instagram, Facebook: foto's, teksten, bereik | Analyseer profiel als historisch bewijs. Sociale media toont vakmanschap en persoonlijkheid. |
| **Geen website, geen digitale aanwezigheid** | Gesprek is het enige bewijs | Historische Spiegel werkt uitsluitend op wat in het gesprek is beschreven. IST is de gespreksinhoud. Bewijsverrijking is niet mogelijk. Bewijsbeeld bestaat maar is dun. |
| **Starter — niets bestaat** | Geen bewijs beschikbaar | Historische Spiegel is niet van toepassing. Er is geen bestaande werkelijkheid om te spiegelen. Preview begint zonder bewijsverrijking, uitsluitend op de veranderopdracht. |

### Wat de Historische Spiegel doet bij dun bewijs

Wanneer bewijs beperkt is, is de Historische Spiegel beperkter — maar ze bestaat nog. Ze beschrijft wat er is, categoriseert het, en geeft Preview een leeg of dun bewijsbeeld. Preview weet dan dat ze zonder historische context moet werken — wat haar aanpak verandert maar haar taak niet opheft.

De Historische Spiegel produceert altijd een bewijsbeeld — ook als dat bewijsbeeld alleen "geen bestaand bewijs beschikbaar" bevat.

---

## 6. Relatie met Discovery Exit & Preview Entry v1.0

### Sluit de veranderopdracht voldoende aan?

Ja. De veranderopdracht uit Discovery Exit bevat precies wat de Historische Spiegel nodig heeft als interpretatiekader:
- IST-kern (bevestigd) → geeft richting aan wat als verouderd wordt beschouwd
- SOLL-richting (bevestigd) → geeft richting aan wat als actueel wordt beschouwd
- Identiteit van de ondernemer → geeft context voor wat "bij hem past"
- Bevestiging van de ondernemer → legitimeert de categorisering

### Ontbreekt er informatie?

Nee. De Historische Spiegel heeft geen aanvullende Discovery-informatie nodig. Ze werkt met wat er is.

Één aanvulling is nuttig maar niet verplicht: wanneer de ondernemer specifieke elementen heeft benoemd als "moet weg" of "misschien ook dit" — zoals het logo in de hovenier-casus — zijn dat directe instructies voor de categorisering. Ze worden meegenomen vanuit de veranderopdracht als aanvullende notities.

### Ontstaat er overlap?

Nee. De veranderopdracht beschrijft de spanning in woorden. Het bewijsbeeld beschrijft dezelfde spanning in website-elementen. Ze zijn complementair, niet overlappend.

### Ontstaat er dubbel werk?

Nee. Discovery heeft geluisterd en begrepen. De Historische Spiegel kijkt en categoriseert. Preview stelt voor en creëert. Drie opeenvolgende handelingen, elk met eigen invoer en eigen output.

---

## 7. Wat hoort bewust NIET in de Historische Spiegel?

### Taken die thuishoren in Preview

| Taak | Waarom niet Historische Spiegel |
|---|---|
| **Nieuwe teksten schrijven** | Creatie — Preview |
| **Nieuwe structuur voorstellen** | Voorstel — Preview |
| **Kleurkeuzes maken** | Creatieve beslissing — Preview |
| **Logo-ontwerp of logo-aanpassing** | Creatieve beslissing — Preview |
| **Foto-advies voor nieuwe eigenaar** | Voorstel over nieuwe inhoud — Preview |
| **Pagina-indeling bepalen** | Structuurvoorstel — Preview |
| **SEO-aanbevelingen** | Functioneel voorstel — Preview of latere fase |
| **Beoordelen of de website "goed" is** | Esthetisch oordeel — Preview |
| **Prioritering van aanpassingen** | Strategisch voorstel — Preview |

### De kerngrens

De Historische Spiegel beschrijft wat er is en hoe dat zich verhoudt tot de veranderopdracht.

Preview beschrijft wat er moet komen en hoe dat eruit ziet.

De Historische Spiegel is de laatste stap die terugkijkt. Preview is de eerste stap die vooruitkijkt.

### Bewaking van de grens

Wanneer de Historische Spiegel een element categoriseert als "aanpassen", mag ze beschrijven:
- wat er nu staat (beschrijving)
- waarom het aangepast moet worden (relatie tot veranderopdracht)
- wat de richting van de aanpassing is (maximaal: "in de richting van de nieuwe eigenaar")

Ze mag niet beschrijven:
- hoe de aanpassing er concreet uitziet
- welke tekst er in de plaats komt
- welke foto er in de plaats komt

Die grens is de grens tussen Historische Spiegel en Preview.

---

## 8. Conformiteitscontrole

### Zijn nieuwe principes nodig?

Nee. De Historische Spiegel operationaliseert uitsluitend bestaande principes.

| Principe | Aanwezig in | Toepassing in Historische Spiegel |
|---|---|---|
| **Historische Spiegel als principe** | Brain v0.1 (expliciet) | V1.0 operationaliseert dit principe als zelfstandige architectuurlaag |
| **Evidence First** | Brain v0.1, V6 H18 | Website heeft voorrang boven nieuwe vragen. Basis van de gehele laag. |
| **Bewijs herkennen ≠ bewijs verifiëren** | Brain v0.1, V6 H18 | Categorisering (herkennen) en verificatievragen (verifiëren) zijn twee afzonderlijke stappen |
| **IST → SOLL** | V6 H15 | Categorisering acontextueel: IST-elementen en SOLL-richting bepalen de categorieën behouden/aanpassen/verwijderen |
| **Herkenning vóór volledigheid** | Brain v0.1 | Historische Spiegel werkt naar gecategoriseerde spanning, niet naar volledigheid. Onzekerheden worden doorgegeven. |
| **Visitor First — geen vragen die al beantwoord kunnen worden** | V6 H41 | Verificatievragen alleen voor onzekere elementen die de website niet zelf beantwoordt |
| **LP34 — geen informatieverzameling na uitkomstbesluit** | Discovery Agent v0.7 | Historische Spiegel stelt geen IST/SOLL-vragen meer — die zijn afgesloten. Alleen verificatievragen voor onzekerheden. |
| **Stop wanneer het doel bereikt is** | V6 H41, H33 | Historische Spiegel stopt zodra het bewijsbeeld compleet is — niet wanneer alle vragen beantwoord zijn. |

### Aandachtspunten

| Punt | Toelichting |
|---|---|
| **Grens aanpassen vs. voorstellen** | Bij "aanpassen" beschrijft de Historische Spiegel de richting van de aanpassing. Die richting mag niet zo concreet worden dat ze een Preview-voorstel wordt. Bewaking vereist. |
| **Onzeker vs. Preview-beslissing** | Sommige onzekerheden kunnen worden opgelost via één verificatievraag. Andere zijn inherent Preview-beslissingen (stijl, esthetiek). Onderscheid bewust houden. |
| **Verificatievragen — maximumaantal** | Twee tot drie verificatievragen is het maximum. Meer dan dat is nieuwe Discovery na Discovery-afsluiting. Bewaking vereist bij implementatie. |

---

## Volledig scenario — Hovenier, vader overleden, URL beschikbaar

### Invoer: veranderopdracht uit Discovery Exit

```
IDENTITEIT: Hovenier, derde generatie, nieuwe eigenaar na overlijden vader.
IST (bevestigd): Website vertelt verhaal van vader — foto's, naam, identiteit.
SOLL (bevestigd): Eigen verhaal, eigen foto's, nieuwe koers.
URL: www.veenstratuinen.nl
```

### Stap 1 — URL ophalen (één zin, ondernemerstaal)

> "Dan ga ik kijken wat er nu op de website staat. Wat is de URL?"

Ondernemer: "www.veenstratuinen.nl"

### Stap 2 — Historische Spiegel actief

Website wordt gelezen vanuit de veranderopdracht.

| Element | Gevonden | Categorie | Redenering |
|---|---|---|---|
| Naam eigenaar | "Jan Veenstra Sr." | Verwijderen | Bevestigde IST-kern — vader als eigenaar klopt niet meer |
| Foto's persoon | Vader op meerdere pagina's | Verwijderen | Bevestigde IST-kern |
| Telefoon | Nummer van vader | Verwijderen | Bevestigde IST — contactgegevens zijn van vader |
| E-mail | E-mail van vader | Verwijderen | Idem |
| Diensten | Tuinaanleg, onderhoud, snoeiwerk, bestrating | Behouden | Niet aangemerkt, consistent met beroep, actueel |
| Werkgebied | "Regio Utrecht" | Onzeker | Niet besproken, niet evident verouderd |
| Projectfoto's | Werk van het bedrijf | Behouden | Vakmanschap — persoonsonafhankelijk |
| "Over ons"-tekst | Persoonlijk verhaal vader | Aanpassen | Structuur klopt (persoonlijke intro), persoon verandert |
| Bedrijfsgeschiedenis | Opa (oprichter) → vader | Aanpassen | Structuur klopt (drie generaties verhaal), nieuwe eigenaar ontbreekt |
| Logo | Stijlvol groen logo | Onzeker | Ondernemer zei "misschien ook het logo" |
| Kleuren | Donkergroen, bruin | Onzeker | Niet besproken |
| Reviews | 14 Google-reviews | Behouden | Gaan over het bedrijf, niet over de persoon specifiek |

### Stap 3 — Verificatievraag voor prioritair onzeker element

Logo is het enige element waarbij ondernemer zelf twijfelde.

> "Er staat ook een logo op de website. Je zei dat dat misschien ook mee zou veranderen — weet je dat al, of laten we dat voor nu open?"

Ondernemer: "Dat weet ik nog niet, misschien later."

Logo → blijft Onzeker, notitie: "beslissing later".

Werkgebied en kleuren: Onzeker, worden openstaande vragen voor Preview.

### Stap 4 — Bewijsbeeld compleet

```
BEWIJSBEELD — Veenstra Tuinen

BRON
  URL: www.veenstratuinen.nl
  Type: bestaande website

RELATIE TOT VERANDEROPDRACHT
  IST: Website in het teken van vader — zijn naam, foto's, verhaal, contactgegevens
  SOLL: Nieuwe eigenaar als gezicht van het bedrijf, eigen verhaal en koers

BEHOUDEN
  Diensten (tuinaanleg, onderhoud, snoeiwerk, bestrating)
  Projectfoto's (vakmanschapsbeelden)
  Reviews (14 Google-reviews, over het bedrijf)

AANPASSEN
  "Over ons"-tekst: persoonlijk verhaal vader → persoonlijk verhaal nieuwe eigenaar
  Bedrijfsgeschiedenis: eindigt bij vader → uitbreiden met derde generatie
  Review-perspectief: controleren op persoonlijke verwijzingen naar vader

VERWIJDEREN
  Naam eigenaar (Jan Veenstra Sr.)
  Alle persoonsfoto's van vader
  Telefoonnummer vader
  E-mailadres vader

ONZEKER
  Logo — ondernemer twijfelde, beslissing uitgesteld
  Kleuren — niet besproken
  Werkgebied (regio Utrecht) — niet geverifieerd op actualiteit

OPENSTAANDE VRAGEN VOOR PREVIEW
  Wat is de naam van de nieuwe eigenaar?
  Wat zijn de nieuwe contactgegevens?
  Logo: aanpassen of behouden? (ondernemer heeft beslissing uitgesteld)
  Kleuren: aanpassen of behouden?
  Werkgebied: nog steeds regio Utrecht?
```

### Stap 5 — Overdracht aan Preview (ondernemerstaal)

> "Ik heb de website bekeken. Ik zie wat er nu staat en wat er zou moeten veranderen. Ik maak een eerste voorstel op basis hiervan."

Geen architectuurtermen. Geen herhaling van de categorisering. Preview ontvangt het bewijsbeeld intern.

---

*Lumivey — `docs/historische-spiegel-v1.0.md` — 2026*
