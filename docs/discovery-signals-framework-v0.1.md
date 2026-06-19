# Discovery Signals Framework v0.1

| Veld | Waarde |
|---|---|
| **Naam** | Discovery Signals Framework |
| **Versie** | 0.1 |
| **Status** | Werkdocument — onderzoeksdocument, geen eindversie |
| **Positie** | Quiet Web → Lumivey Kompas → **Discovery Signals Framework** → Discovery / Historische Spiegel / Preview / Build |
| **Bewijsbasis** | Negen simulaties: Hovenier, Pedicure, Schilder, Glazenwasser, Kapper, Loodgieter, Fysiotherapeut, Snackbarhouder, Groeier |
| **Eigenaar** | Ruud Kroonen |
| **Datum** | 19 juni 2026 |

---

## Leeswijzer

Dit document is geen Discovery-document. Het beschrijft geen gedrag, geen promptregels, geen implementatie. Het legt kennis vast, geen regels.

Alles in dit document is voorlopig. Sommige signaaltypen zijn sterk bewezen — ze komen terug in vijf of meer simulaties. Andere zijn zwakker bewezen — ze zijn één keer gezien en verdienen meer onderzoek voordat ze als stabiel worden beschouwd. Dat onderscheid wordt expliciet gemaakt waar relevant.

Het Quiet Web-uitgangspunt voor dit document: signalen zijn geen data. Signalen zijn aanwijzingen voor betekenis. Het doel van Lumivey is niet informatie verzamelen — het doel is begrijpen.

---

## Hoofdstuk 1 — Waarom signalen?

### Drie lagen in elke uitspraak

Elke zin die een ondernemer uitspreekt tijdens een Discovery-gesprek kan op drie niveaus worden gelezen.

```
FEIT
  ↓
BETEKENIS
  ↓
SIGNAAL
```

**Feit** is de letterlijke, controleerbare inhoud van de zin. Wat er gebeurt, wat er bestaat, wat aantoonbaar is.

**Betekenis** is wat die feiten zeggen over de positie of situatie van de ondernemer — zonder dat het expliciet wordt benoemd. Betekenis is een laag dieper dan het feit, maar nog steeds beschrijvend.

**Signaal** is wat de uitspraak onthult over de identiteit, drijfveer, spanning, trots of twijfel van de ondernemer — op een manier die direct relevant is voor hoe Lumivey haar zou moeten begrijpen, en voor wat er later op een website terecht zou moeten komen.

### Voorbeeld 1 — Pedicure

> "Mijn moeder en mijn oma staan op wachtlijsten voor hun voetproblemen als diabetespatiënten."

| Laag | Inhoud |
|---|---|
| Feit | Er bestaan wachtlijsten voor diabetespedicurezorg. Moeder en oma hebben diabetes. |
| Betekenis | De ondernemer heeft een persoonlijke ervaring met de marktbehoefte die zij wil vervullen. |
| Signaal | Dit is niet een marktanalyse — dit is de reden waarom zij dit werk wil doen. Het is de oorsprong van haar motivatie, mogelijk de kern van haar "Over mij"-verhaal. |

### Voorbeeld 2 — Fysiotherapeut

> "Ik ben gespecialiseerd in schouder- en armblessures, dit omdat ik zelf gerevalideerd ben."

| Laag | Inhoud |
|---|---|
| Feit | De ondernemer heeft zelf revalidatie ondergaan. Ze specialiseert zich in schouder- en armblessures. |
| Betekenis | Haar specialisatiekeuze is niet willekeurig — ze heeft een directe ervaring met het type klacht dat ze nu behandelt. |
| Signaal | Dit is een vertrouwensbron die geen marketingtekst kan evenaren: "ik begrijp mijn patiënten omdat ik zelf heb meegemaakt wat zij doormaken." Dit signaal werd in de simulatie volledig gemist op het moment dat het werd uitgesproken. |

### Voorbeeld 3 — Hovenier

> "Maar wel op mijn manier."

| Laag | Inhoud |
|---|---|
| Feit | De ondernemer wil iets op een specifieke manier doen. |
| Betekenis | Er is een impliciete andere manier (de oude manier, iemand anders' manier) die hij niet wil volgen. |
| Signaal | Dit is een autonomiesignaal — een grens tussen wat hij overneemt en wat hij zelf bepaalt. Mogelijk de kern van een identiteitsovergang. |

### Voorbeeld 4 — Schilder

> "Heb ik eigenlijk wel een website nodig?"

| Laag | Inhoud |
|---|---|
| Feit | De ondernemer stelt een vraag over de noodzaak van een website. |
| Betekenis | Hij twijfelt aan de waarde van het product dat hij overweegt af te nemen. |
| Signaal | Dit is geen informatievraag maar een verzoek om een eerlijk oordeel. Het signaal vraagt om bevestiging, niet om uitleg. |

### Wat dit onderscheid oplevert

Het verschil tussen feit, betekenis en signaal is niet de zin zelf — het is de diepte waarmee Lumivey de zin leest. Eén zin kan alle drie lagen tegelijk bevatten. De huidige Discovery-praktijk haalt voornamelijk de eerste laag eruit. Soms de tweede. Bijna nooit de derde.

---

## Hoofdstuk 2 — Waarom signalen belangrijk zijn

### De kerngedachte

> Een website gebouwd op de functionele laag is een formulier.
> Een website gebouwd op de betekenislaag is een gezicht.

Een formulier beantwoordt vragen: wie, wat, waar, hoe te bereiken. Een formulier is compleet wanneer alle velden zijn ingevuld. Het is bruikbaar maar onpersoonlijk — uitwisselbaar met elk ander formulier in dezelfde branche.

Een gezicht is herkenbaar. Een gezicht vertelt niet alleen wat iemand doet, maar wie iemand is. Een gezicht ontstaat niet door meer velden in te vullen, maar door te begrijpen wat iemand drijft.

### Waarom dit verschil voelbaar is

In de simulaties is dit verschil meermaals zichtbaar geworden. Bij de kapper produceerde Lumivey, nadat het opa-verhaal en de foto's van de oude salon ter sprake kwamen, een tekst die "de geschiedenis van de salon" en "nostalgische gevoelens" noemt — maar dit gebeurde nadat de ondernemer het signaal al twee keer had moeten herhalen. Bij de fysiotherapeut werd het revalidatieverhaal pas gebruikt nadat Lumivey het zelf, zonder bevestiging, in een outputvoorstel verwerkte — een teken dat het signaal wél is opgemerkt door het onderliggende model, maar niet bewust is herkend en bevestigd in het gesprek zelf.

Het verschil tussen een formulier en een gezicht zit dus niet in de vraag of de informatie aanwezig is in het gesprek. Het zit in of die informatie bewust wordt herkend, erkend, en teruggegeven aan de ondernemer als iets dat ertoe doet.

### De asymmetrie tussen feiten en signalen

Tien feiten leveren een compleet formulier op. Eén signaal levert een gezicht op. Dit is geen kwantitatieve relatie — het is kwalitatief. Een website met alle juiste diensten, het juiste werkgebied en de juiste contactgegevens, maar zonder enig signaal, is feitelijk correct en emotioneel leeg. Een website met één goed geplaatst signaal — "ik doe dit omdat ik zelf gerevalideerd ben" — heeft een ziel, zelfs als sommige feiten nog ontbreken.

Dit verklaart waarom de Quiet Web-filosofie "herkenning vóór volledigheid" vooropstelt: volledigheid is een formulier-criterium. Herkenning is een gezicht-criterium.

---

## Hoofdstuk 3 — De signaaltypen

Negen signaaltypen zijn tot nu toe geïdentificeerd op basis van de negen simulaties. Per signaal: definitie, wat het vertelt, waarom het belangrijk is, en bewijs uit de simulaties.

---

### Ambitiesignaal

**Definitie:** een uitspraak waarin de ondernemer een eigen koers, een eigen start, of een bewuste keuze voor zelfstandigheid beschrijft.

**Wat het vertelt:** dit is geen taak die wordt uitgevoerd — het is een keuze die wordt gemaakt. De ondernemer plaatst zichzelf actief in een nieuwe positie.

**Waarom het belangrijk is:** de website is het eerste zichtbare bewijs van die keuze. Een Preview die dit signaal mist, behandelt de start als een formaliteit in plaats van een statement.

**Voorbeelden uit simulaties:**
- Pedicure: "Ik ga starten met mijn eigen pedicurepraktijk."
- Fysiotherapeut: "Na jaren lang in loondienst geweest te zijn ga ik zelf mijn fysiopraktijk beginnen."
- Kapper: "Ik wil uitbreiden met een stoel in mijn zaak."

---

### Drijfveersignaal

**Definitie:** een uitspraak waarin de ondernemer de persoonlijke, vaak emotionele reden noemt achter zijn werk of zijn keuze.

**Wat het vertelt:** waarom dit werk, waarom nu, waarom deze specialisatie — beantwoord vanuit ervaring, niet vanuit strategie.

**Waarom het belangrijk is:** dit is de sterkste vorm van Preview-brandstof die in de simulaties is aangetroffen. Zie hoofdstuk 5.

**Voorbeelden uit simulaties:**
- Pedicure: "Mijn moeder en mijn oma staan op wachtlijsten voor hun voetproblemen."
- Fysiotherapeut: "Dit omdat ik zelf gerevalideerd ben."
- Kapper: "Mijn opa was ook kapper bij ons in het dorp. Ik ben trots dat ik zijn naam heb."

---

### Vakmanschapssignaal

**Definitie:** een verwijzing naar de duur, diepte of focus van de ervaring van de ondernemer — vaak impliciet, soms expliciet.

**Wat het vertelt:** bewezen kunde. Dit is geen claim die overtuigd moet worden — het is een feit dat alleen erkenning nodig heeft.

**Waarom het belangrijk is:** vakmanschap is de meest geloofwaardige vertrouwensbron voor een kleine ondernemer. Het is sterker dan elke marketingtekst omdat het niet verzonnen kan worden.

**Voorbeelden uit simulaties:**
- Glazenwasser: "Ik ben al 20 jaar glazenwasser."
- Kapper: "Ik ben al 15 jaar kapper en heb een vaste klantenkring."
- Loodgieter: "Ik moet sleutelen, riolen ontstoppen, waterleidingen aanleggen. Storingen oplossen op de onmogelijke tijden."

---

### Legitimatiesignaal

**Definitie:** een vraag die niet om hulp vraagt bij het maken van iets, maar om een oordeel over of het zinvol is.

**Wat het vertelt:** de ondernemer twijfelt niet aan zijn vak, maar aan de waarde van het product dat wordt aangeboden. Hij zoekt eerlijkheid, geen verkooppraatje.

**Waarom het belangrijk is:** een neutrale omleiding op dit signaal ("dat hangt van je situatie af") creëert een herhalende lus. Het signaal vraagt om een keuze, niet om meer opties.

**Voorbeelden uit simulaties:**
- Schilder: "Heb ik eigenlijk wel een website nodig?" (zeven varianten van deze vraag in één gesprek)
- Schilder: "Willen jullie nou wel of niet een website aan mij verkopen?"

---

### Verbindingssignaal

**Definitie:** een uitspraak die een persoonlijke band beschrijft tussen de ondernemer en familie, partner, voorganger of gemeenschap.

**Wat het vertelt:** het werk is niet los te zien van het persoonlijke leven van de ondernemer. Dit bepaalt de toon van wat er gepresenteerd moet worden.

**Waarom het belangrijk is:** zonder dit signaal kiest een Preview standaard voor een neutrale, solo-toon — die mogelijk niet klopt.

**Voorbeelden uit simulaties:**
- Glazenwasser: "Samen met mijn vrouw een schoonmaakbedrijf."
- Kapper: "Mijn opa was ook kapper bij ons in het dorp."
- Loodgieter: "Mijn zoon zegt dat ik een website nodig heb."

---

### Zelfovertuigingssignaal

**Definitie:** de ondernemer redeneert zichzelf hardop naar een conclusie — hij zoekt geen nieuwe informatie maar bevestiging van een conclusie die hij al heeft.

**Wat het vertelt:** de ondernemer is verder in zijn denken dan het gesprek suggereert. Doorvragen op dit punt voelt voor hem als niet meegedacht worden.

**Waarom het belangrijk is:** als dit signaal wordt gemist, ontstaat herhaling en frustratie — zichtbaar in de snackbar-simulatie, waar dit signaal herhaaldelijk werd gemist en de ondernemer uiteindelijk afhaakte.

**Voorbeelden uit simulaties:**
- Schilder: "Ik schilder toch huizen? Dan heb ik toch klanten nodig? Die kijken toch op google of op ChatGPT ofzo?"
- Pedicure: "Ik ga niet voor niets in Rotterdam beginnen. Werk genoeg daar."

---

### Gesprekstemperatuursignaal

**Definitie:** een signaal dat niet over de ondernemer zelf gaat, maar over hoe het gesprek op dat moment verloopt — frustratie, herhaling, ongeduld.

**Wat het vertelt:** de huidige aanpak van het gesprek werkt niet (meer). Dit signaal vraagt om aanpassing van de gespreksstijl, niet om meer inhoud.

**Waarom het belangrijk is:** dit signaal voorspelt afhaken wanneer het herhaaldelijk wordt genegeerd. De snackbar-simulatie toont het duidelijkste bewijs: het signaal werd twee keer expliciet genoemd door de ondernemer voordat het gesprek werd beëindigd.

**Voorbeelden uit simulaties:**
- Snackbar: "Lees mijn eerste twee antwoorden bovenaan deze pagina." / "Jij blijft dezelfde vragen stellen aan me."
- Schilder: "Ik snap er niet van in dit moeilijke gedoe."
- Pedicure (eerdere simulatie): "Dat heb ik toch al gezegd?"

---

### Grenssignaal

**Definitie:** een bewuste, expliciete keuze van de ondernemer over wat er niet op de website moet komen.

**Wat het vertelt:** dit is geen ontbrekende informatie — het is een actief gestelde grens die gerespecteerd moet worden.

**Waarom het belangrijk is:** een Preview die deze grens negeert (bijvoorbeeld door toch prijzen toe te voegen) bouwt iets wat de ondernemer expliciet niet wilde.

**Voorbeelden uit simulaties:**
- Glazenwasser: "Gewoon wat informatie en geen prijzen."
- Snackbarhouder: weigerde expliciet dat Lumivey zijn menukaart zou opstellen ("die heb ik toch aan de muur hangen").

**Status:** bewezen in twee simulaties — voldoende voor opname, nog beperkt qua bewijsbasis.

---

### Schaalgevoel-signaal

**Definitie:** een impliciete beschrijving van de omvang, groei of ambitieniveau van het bedrijf.

**Wat het vertelt:** bepaalt de juiste toon — bescheiden vakman of gegroeide onderneming — en kan een indicatie zijn van een onderliggende spanning (zie hoofdstuk 6).

**Waarom het belangrijk is:** een Preview die de schaal verkeerd inschat (te bescheiden voor een gegroeid bedrijf, of te groots voor een zzp'er) mist de toon volledig.

**Voorbeelden uit simulaties:**
- Groeier: "Ik ben begonnen met twee man maar heb nu 6 man in dienst."
- Schilder: "Ik ben zzp-er onder mijn eigen naam."

---

## Hoofdstuk 4 — Gemiste signalen

### Het patroon

Het meest consistente patroon over alle negen simulaties: Lumivey reageert op de inhoud van een zin, niet op de lading van een zin.

Dit blijkt uit een vaste structuur die in vrijwel elke simulatie terugkomt: de ondernemer deelt een signaal, en Lumivey antwoordt met een korte erkenning ("Dat is begrijpelijk", "Dat klinkt als een mooie stap", "Dank voor de informatie") gevolgd door een vraag die teruggaat naar de functionele laag.

### Waarom dit gebeurt — geobserveerde mechanismen

**Mechanisme 1 — Het signaal wordt gelezen als bijzin, niet als kernzin.**
Bij de fysiotherapeut staat het sterkste signaal van het hele gesprek ("dit omdat ik zelf gerevalideerd ben") grammaticaal verstopt in een bijzin na de hoofdmededeling over de specialisatie. Lumivey reageert op de hoofdmededeling (de specialisatie) en laat de bijzin (de reden) liggen.

**Mechanisme 2 — Het signaal wordt verward met een reeds beantwoorde vraag.**
Bij de kapper wordt "die komen niet voor niets al lang bij me" gevolgd door een reactie die het signaal als bevestiging van een eerder genoemd feit behandelt (vaste klantenkring), in plaats van als een nieuw, dieper signaal over waarom die klanten blijven.

**Mechanisme 3 — Het signaal wordt opgepikt maar niet bevestigd.**
Bij de fysiotherapeut gebruikt Lumivey het revalidatieverhaal uiteindelijk wél — maar in een latere outputtekst, zonder dat de ondernemer ooit is gevraagd of ze dat verhaal wil delen. Het signaal is dus niet gemist in de zin dat het nooit is opgemerkt — het is gemist in de zin dat het nooit bewust is herkend en teruggegeven aan de ondernemer.

**Mechanisme 4 — Het signaal wordt verkeerd geïnterpreteerd zonder bevestiging.**
Bij de snackbar wordt "nu zie ik alleen maar die grijze koppies langskomen" direct vertaald naar "je wilt meer jongeren aantrekken" — een interpretatie die nooit is bevestigd door de ondernemer. Dit is geen gemist signaal maar een verkeerd geïnterpreteerd signaal — gerelateerd aan het eerder onderzochte projectieprobleem (LP36).

### De kern van het patroon

Inhoud en lading zitten in dezelfde zin maar op verschillende niveaus. Lumivey is op dit moment uitstekend in het verwerken van inhoud. Lading wordt soms wel opgemerkt (mechanisme 3 bewijst dat het onderliggende model er gevoelig voor is) maar zelden bewust erkend in het gesprek op het moment dat het zich aandient.

---

## Hoofdstuk 5 — Signalen als Preview-brandstof

### Essentieel versus ondersteunend

Niet elk signaaltype draagt evenveel bij aan het WoW-moment — het moment waarop de ondernemer zegt "ja, dit ben ik."

**Essentieel voor herkenning, opluchting en vertrouwen:**

Het **drijfveersignaal** levert de grootste bijdrage. Het beantwoordt de vraag "waarom dit werk" op een manier die direct herkenbaar is voor de ondernemer zelf — omdat het zijn eigen woorden zijn, niet een interpretatie.

Het **ambitiesignaal** bepaalt de toonzetting: is dit een bescheiden voortzetting of een bewuste, krachtige nieuwe start?

Het **vakmanschapssignaal** levert vertrouwen op een manier die niet overtuigend hoeft te zijn — het is gewoon waar, en het hoeft alleen erkend te worden.

Het **verbindingssignaal** bepaalt of een website solo of gedeeld aanvoelt.

**Ondersteunend:**

Het **grenssignaal** en het **schaalgevoel-signaal** bepalen vorm en omvang, maar leveren zelf niet het emotionele WoW-moment op. Ze voorkomen vooral dat een Preview verkeerd aanvoelt — ze zijn niet de bron van herkenning, maar wel een voorwaarde om herkenning niet te beschadigen.

**Niet direct Preview-brandstof, wel een voorwaarde om de Preview-fase te bereiken:**

Het **legitimatiesignaal** en het **zelfovertuigingssignaal** bepalen of het gesprek de Preview-fase überhaupt bereikt. Zonder het oplossen van een legitimatiesignaal blijft een gesprek vastzitten in twijfel — zichtbaar bij de schilder.

Het **gesprekstemperatuursignaal** is een waarschuwingssignaal: het draagt niet bij aan de Preview, maar het voorkomt dat er ooit een Preview komt wanneer het wordt genegeerd — zichtbaar bij de snackbar.

### Waarom één drijfveersignaal meer waard is dan tien feiten

Tien feiten (beroep, locatie, diensten, openingstijden, contactgegevens, etc.) zijn nodig om een website te laten functioneren. Ze zijn noodzakelijk maar niet voldoende voor herkenning.

Eén drijfveersignaal — "mijn moeder en mijn oma staan op wachtlijsten" — is voldoende om een bezoeker van de toekomstige website te laten voelen: deze persoon doet dit niet voor het geld, ze doet dit omdat ze weet wat het is om hierop te wachten.

De asymmetrie zit in wat feiten en signalen kunnen bewijzen. Feiten bewijzen dat een bedrijf bestaat. Signalen bewijzen waarom het bedrijf ertoe doet. Een bezoeker van een website beslist zelden op basis van feiten alleen — vertrouwen ontstaat door herkenning van iets menselijks.

---

## Hoofdstuk 6 — Spanningsvelden (onderzoeksrichting, geen classificatie)

### De observatie

Bij de groeier-simulatie werden twee signalen gevonden die elkaar mogelijk tegenspreken:

> "Ik heb nu een website nodig, en snel." (urgentiesignaal)
> "Ik ben begonnen met twee man maar heb nu 6 man in dienst. Het werk kan ik niet meer goed aan." (schaalgevoel-signaal, met een ondertoon van overbelasting)

Beide signalen werden in de simulatie los beantwoord — de urgentie met een directe vraag naar de URL, de overbelasting met een voorstel voor website-content over groei en tevredenheid. Geen van beide reacties onderzocht of de twee signalen elkaar raken.

### De vraag die ontstaat

Wil de ondernemer een website om sneller méér klanten te kunnen bedienen — of om de instroom van nieuwe aanvragen te kunnen filteren, juist omdat hij het al niet aankan? Dat zijn twee fundamenteel verschillende websites. De een trekt aan, de ander tempert. Het signaal "snel nodig" suggereert het eerste. Het signaal "kan het niet meer aan" suggereert mogelijk het tweede. Ze zijn niet per definitie met elkaar in tegenspraak — maar ze zijn ook niet automatisch verenigbaar, en niemand heeft die vraag gesteld.

### Is dit een nieuw signaaltype?

Op basis van dit ene voorbeeld is dat nog niet vast te stellen. Wat wel waarneembaar is: er bestaat een situatie waarin twee afzonderlijk geldige signalen, wanneer ze naast elkaar worden gelegd, een vraag oproepen die geen van beide signalen afzonderlijk oproept.

Een voorlopige naam voor dit fenomeen: **spanningsveld**. Niet een signaal op zichzelf, maar een relatie tussen twee signalen die om gezamenlijke aandacht vraagt.

Dit zou kunnen betekenen dat Discovery niet alleen los signalen moet herkennen, maar ook moet controleren of recent herkende signalen elkaar versterken, aanvullen, of tegenspreken. Dat is een aanzienlijk grotere stap dan losse signaalherkenning en wordt hier uitsluitend als open onderzoeksrichting genoteerd — niet als voorstel.

### Wat nog onderzocht moet worden

- Komt dit patroon ook voor in andere simulaties, of is dit een eenmalige observatie?
- Is een spanningsveld altijd tussen twee verschillende signaaltypen, of kan het ook binnen één signaaltype optreden?
- Moet een spanningsveld worden opgelost door een vraag, of is het soms voldoende om het te benoemen zonder het op te lossen?

---

## Hoofdstuk 7 — Architectuurpositie

### Waarom geen onderdeel van Discovery

Discovery beschrijft gedrag: wanneer er gevraagd wordt, wanneer er gespiegeld wordt, wanneer een gesprek stopt. Signalen beschrijven iets anders: wat er herkend moet worden. Dat is een input voor gedrag, geen gedrag zelf. Wanneer signalen in Discovery worden opgenomen, vervormen ze tot gedragsregels — en daarmee verliezen ze hun karakter als kennis over de mens.

### Waarom geen onderdeel van de Lumivey Brain

Brain beschrijft fundamentele principes die in essentie niet veranderen: Evidence First, IST → SOLL, Herkenning vóór volledigheid. Het Discovery Signals Framework is daarentegen een groeiend, herzienbaar werkmodel — signaaltypen kunnen worden toegevoegd, samengevoegd of heroverwogen naarmate er meer simulaties worden gedaan. Een document dat kan veranderen past niet in een laag die stabiel moet blijven.

### Waarom geen onderdeel van Preview

Preview gebruikt signalen — ze verwerkt ze tot een toekomstbeeld. Maar Preview definieert niet wat een signaal is, en zou dat ook niet moeten doen. Als de definitie van signalen in Preview zou wonen, zouden Discovery en Historische Spiegel geen toegang hebben tot dezelfde taal — en dat zou de samenhang van de keten beschadigen.

### Waarom een gedeelde taal

Signalen worden voornamelijk verzameld in Discovery, mogelijk gebruikt door de Historische Spiegel (wanneer een ondernemer een veranderingssignaal geeft over een bestaand website-element), en zijn de belangrijkste grondstof voor Preview. Build en QA hebben geen directe relatie met signalen — zij werken met het resultaat, niet met de herkomst.

Dat maakt het Discovery Signals Framework een laag die conceptueel tussen de Lumivey Kompas en de operationele afdelingen zit: het beschrijft wat er herkend moet worden, voordat enige afdeling bepaalt wat ze daarmee doet.

```
Quiet Web              (mens vóór systeem — filosofie)
   ↓
Lumivey Kompas          (waartoe bestaat Lumivey)
   ↓
Discovery Signals Framework   (wat valt er te herkennen in een gesprek)
   ↓
Discovery / Historische Spiegel / Preview / Build   (wat doen de afdelingen daarmee)
```

---

## Hoofdstuk 8 — Open vragen

### Onzekerheden

- Is de scheiding tussen "betekenis" en "signaal" in hoofdstuk 1 scherp genoeg, of vloeien deze lagen in de praktijk meer in elkaar over dan dit document suggereert?
- Is het legitimatiesignaal werkelijk één signaaltype, of zijn er twee subtypen (bevestiging zoeken versus een eerlijkheidsvraag over het product) die elk een andere reactie vragen? Dit is in eerdere analyse al gesignaleerd maar niet definitief vastgesteld.
- Is het vakmanschapssignaal te breed gedefinieerd? "20 jaar ervaring" en "ik doe niets anders dan dit ene ding" voelen verschillend maar zijn nu in dezelfde categorie geplaatst.

### Nog onbewezen aannames

- De aanname dat één sterk drijfveersignaal meer waard is dan tien feiten (hoofdstuk 5) is gebaseerd op interpretatie van de simulaties, niet op een directe meting van ondernemersreacties op een afgeronde Preview. Dit is plausibel maar niet getoetst.
- De aanname dat gesprekstemperatuursignalen altijd voorspellend zijn voor afhaken is gebaseerd op één duidelijk geval (de snackbar). Eén geval is geen patroon.

### Mogelijke toekomstige signalen

- Een **tijdsdruksignaal**, los van het schaalgevoel-signaal — bijvoorbeeld een ondernemer die een deadline noemt (seizoen, evenement, geplande opening) die nog niet is waargenomen maar aannemelijk is bij andere beroepen.
- Een **vergelijkingssignaal** — wanneer een ondernemer zichzelf vergelijkt met een concullega ("ik ken een schilder die wel een website heeft, waarom hij wel en ik niet" — eerder gezien in een vroegere schilder-simulatie). Dit raakt het legitimatiesignaal maar is mogelijk een eigen type.

### Onderzoeksvragen voor nieuwe simulaties

- Komt het spanningsveld-fenomeen (hoofdstuk 6) opnieuw voor bij andere beroepen, of was de groeier-simulatie een uitzonderlijk geval?
- Wat gebeurt er wanneer Discovery een signaal wél bewust benoemt — verbetert dat meetbaar de kwaliteit van de Preview, of blijft het effect onduidelijk?
- Bestaan er signalen die specifiek samenhangen met het type bedrijf (bijvoorbeeld: horeca, ambacht, zorg) in plaats van universeel te zijn over alle beroepen?

---

## Slotopmerking

Dit document beschrijft negen signaaltypen op basis van negen simulaties. Dat is een eerste kaart, niet een definitieve classificatie. De waarde van dit werkdocument zit niet in de volledigheid van de lijst, maar in het zichtbaar maken van wat er tot nu toe systematisch werd gemist: niet feiten, maar de mens achter de feiten.

> Lumivey luistert naar twee lagen. De functionele laag zegt wat iemand doet. De betekenislaag zegt wie iemand is.

---

*Lumivey — Discovery Signals Framework v0.1 — Werkdocument — 19 juni 2026*
