# Historische Spiegel ≠ Preview — Grensafbakening

| Veld | Waarde |
|---|---|
| **Naam** | Grensafbakening Historische Spiegel en Preview |
| **Versie** | 1.0 |
| **Status** | Architectuurdocument — concept ter beoordeling |
| **Doel** | Voorkomen dat Historische Spiegel ongemerkt Preview wordt |
| **Eigenaar** | Ruud Kroonen |

---

## Waarom dit document bestaat

De Historische Spiegel bevindt zich direct naast Preview in de architectuurketen. Haar input (de veranderopdracht) beschrijft een gewenste verandering. Haar bewijs (de bestaande website) bevat aanwijzingen voor wat er zou kunnen komen.

Dat maakt haar kwetsbaar voor grensvervaging. Een systeem dat weet wat er nu staat en weet welke richting gewenst is, zal de neiging hebben om alvast te beschrijven wat er in de plaats moet komen. Dat is Preview. Zodra de Historische Spiegel die stap zet, heeft ze haar eigen functie verlaten.

Dit document beschrijft de grens — precies, met voorbeelden.

---

## De fundamentele grens

**Historische Spiegel:** kijkt terug. Beschrijft wat er is en of het nog klopt.

**Preview:** kijkt vooruit. Beschrijft wat er moet komen en hoe dat eruit ziet.

De grens is temporeel: wat er is versus wat er wordt.

---

## Vijf activiteiten — grensanalyse

### Begrijpen → Historische Spiegel

Begrijpen is het lezen van bewijsmateriaal. Het leest de website zonder oordeel. Het stelt vast wat aanwezig is.

**Voorbeeld:** "De website bevat een foto van een man van circa 60 jaar op de homepage."

Dit is begrijpen. Volledig Historische Spiegel.

### Interpreteren → Historische Spiegel (binnen veranderopdracht)

Interpreteren is betekenis geven aan bewijs in relatie tot de veranderopdracht. Het verbindt wat er is aan wat de ondernemer heeft bevestigd.

**Voorbeeld:** "Op basis van de veranderopdracht (vader als IST-kern) is deze foto de bevestigde IST — hij toont de persoon die de ondernemer als 'niet meer passend' heeft aangemerkt."

Dit is interpreteren. Volledig Historische Spiegel — zolang de interpretatie niet verder gaat dan de veranderopdracht rechtvaardigt.

**Gevaarlijke variant:** "Op basis van de stijl en het tijdperk van de foto is dit waarschijnlijk een verouderd bedrijfsportret dat modernisering vereist."

Dit is esthetisch interpreteren zonder veranderopdracht-basis. Dit is Preview-terrein.

### Waarderen → Historische Spiegel

Waarderen is het categoriseren van bewijs als behouden, aanpassen, verwijderen of onzeker. Het koppelt een status aan elk element.

**Voorbeeld:** "De foto → Verwijderen. Reden: bevestigde IST-kern, direct in conflict met SOLL (eigen foto's)."

Dit is waarderen. Volledig Historische Spiegel.

### Voorstellen → Preview

Voorstellen is het beschrijven van wat er in de plaats moet komen. Het bedenkt iets nieuws.

**Voorbeeld:** "De homepage heeft een professionele foto van de nieuwe eigenaar nodig, bij voorkeur in werkomgeving."

Dit is voorstellen. Volledig Preview.

### Creëren → Preview

Creëren is het produceren van nieuwe inhoud, structuur of richting.

**Voorbeeld:** "Hier is een concept voor de nieuwe homepage-tekst: 'Veenstra Tuinen — al drie generaties trots op uw tuin.'"

Dit is creëren. Volledig Preview.

---

## De grens per categorie

### Behouden — grens

**Historische Spiegel zegt:** "Dit element blijft. Het is actueel en consistent met de SOLL-richting."

**Preview zegt niets extra** — Behouden-elementen gaan ongewijzigd mee.

**Grensoverschrijding:** "Dit element blijft maar moet worden geoptimaliseerd voor de nieuwe stijl." → Dat is een voorstel. Preview.

### Aanpassen — de gevoeligste categorie

**Historische Spiegel zegt:** "Dit element moet worden aangepast. De structuur klopt, de invulling verandert door [aspect van veranderopdracht]."

**De grens ligt hier:** Historische Spiegel mag beschrijven *wat* verandert (de persoon in het verhaal) maar niet *hoe* dat eruitziet (het nieuwe verhaal van de nieuwe eigenaar).

| Formulering | Status |
|---|---|
| "De 'Over ons'-tekst beschrijft de vader. De tekst moet worden aangepast naar de nieuwe eigenaar." | ✅ Historische Spiegel — beschrijft richting |
| "De 'Over ons'-tekst moet worden herschreven zodat de nieuwe eigenaar centraal staat, met nadruk op zijn visie als derde generatie." | ⚠️ Grensgebied — specificeert richting van aanpassing |
| "De nieuwe 'Over ons'-tekst introduceert de eigenaar als hovenier met passie voor duurzame tuinen." | ❌ Preview — creëert nieuwe inhoud |

De grens bij Aanpassen: beschrijf de leegte die ontstaat door de verwijdering. Beschrijf niet de invulling van die leegte.

### Verwijderen — duidelijke grens

**Historische Spiegel zegt:** "Dit element moet worden verwijderd. Reden: [conflict met veranderopdracht]."

**Grensoverschrijding:** "Dit element moet worden verwijderd en vervangen door [X]." → Het eerste deel is Historische Spiegel. Het tweede deel is Preview.

### Onzeker — bewuste grens

**Historische Spiegel zegt:** "Dit element is onzeker. De ondernemer heeft er geen uitsluitsel over gegeven. Actie: open laten voor Preview of één verificatievraag."

**Grensoverschrijding:** "Dit element is onzeker maar past waarschijnlijk beter bij de nieuwe identiteit als het wordt aangepast naar [X]." → Dat is een oordeel over de nieuwe identiteit. Preview.

De Onzeker-categorie is de categorie waar de grens het kwetsbaarst is — juist omdat de onzekerheid uitnodigt tot invulling. De Historische Spiegel vult onzekerheden niet in. Ze benoemt ze en geeft ze door.

---

## Tien grenstests — per voorbeeld

| Handeling | HS of Preview | Toelichting |
|---|---|---|
| "De website toont de naam Jan Veenstra als eigenaar." | HS | Beschrijven wat er is |
| "Jan Veenstra is de vader — zijn naam moet worden vervangen." | HS | Interpreteren + waarderen (verwijderen/aanpassen) |
| "De naam op de website moet worden gewijzigd naar de naam van de nieuwe eigenaar." | HS / grens | Richting van aanpassing — mag, zolang geen naam wordt ingevuld |
| "De naam op de website wordt: Mark Veenstra." | Preview | Concrete invulling |
| "Het kleurenschema is groen/bruin." | HS | Beschrijven |
| "Het kleurenschema is niet besproken." | HS | Onzeker categoriseren |
| "Het kleurenschema past bij een hoveniersbedrijf." | Preview | Esthetisch oordeel |
| "Het kleurenschema zou moderner kunnen met [X]." | Preview | Voorstel |
| "De pagina-indeling heeft vijf secties: home, over, diensten, projecten, contact." | HS | Beschrijven bestaande structuur |
| "De pagina-indeling is goed — deze structuur behouden." | HS / grens | Waarderen (behouden) — acceptabel als geen structuurwijziging wordt voorgesteld |

---

## De eenvoudigste grenstTest

Wanneer twijfel bestaat over een handeling: stel de vraag — *beschrijft dit wat er is, of beschrijft dit wat er moet komen?*

Als het beschrijft wat er is: Historische Spiegel.
Als het beschrijft wat er moet komen: Preview.

---

## Wanneer de grens bijna onzichtbaar wordt

De gevaarlijkste formulering is de zin die beide combineert:

*"De foto van de vader moet worden vervangen door een foto van de nieuwe eigenaar in werkomgeving."*

De eerste helft (foto vader vervangen) is Historische Spiegel — waarderen als Verwijderen.
De tweede helft (nieuwe eigenaar in werkomgeving) is Preview — voorstel voor nieuwe inhoud.

De Historische Spiegel mag de zin tot de komma schrijven. Alles daarna is Preview.

---

## Wat de grens betekent voor het bewijsbeeld

Het bewijsbeeld — de output van de Historische Spiegel — bevat uitsluitend beschrijvingen van bestaande elementen en hun categorisering.

Het bewijsbeeld bevat **nooit:**
- Beschrijvingen van wat er in de plaats moet komen
- Concrete nieuwe teksten, namen, foto-adviezen
- Esthetische oordelen over stijl of moderniteit
- Prioritering van aanpassingen (strategisch oordeel — Preview)
- Voorstellen voor nieuwe structuur of navigatie

Het bewijsbeeld bevat **altijd:**
- Wat er is (beschrijving)
- Of het nog klopt (categorie)
- Waarom (relatie tot veranderopdracht)
- Wat open staat (onzekerheden voor Preview)

---

## Definitieve grensomschrijving

De Historische Spiegel stopt waar het voorstellen begint.

Ze levert een gecategoriseerde beschrijving van wat er bestaat en hoe dat zich verhoudt tot wat er moet veranderen.

Preview begint met die beschrijving als startpunt en vult de leegte die de Historische Spiegel heeft blootgelegd.

De Historische Spiegel legt de leegte bloot. Preview vult haar in.

---

*Lumivey — `docs/historische-spiegel-v1.0-grens-met-preview.md` — 2026*
