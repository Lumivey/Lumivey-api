# Discovery Agent v0.9 — Analyse

## 1. Welke simulatieproblemen zijn opgelost

**Herkenningsfout bij logisch uitgesloten informatie.**
Het concrete voorbeeld uit de opdracht (starter zonder website, alsnog gevraagd naar de URL) is opgelost via sectie 1D. De oplossing is breder dan het voorbeeld: elke vraag waarvan het antwoord al logisch volgt uit een eerder signaal wordt nu structureel afgevangen, niet alleen het URL-geval. Dit dekt vermoedelijk ook varianten die nog niet in een simulatie zijn opgetreden (bijv. vragen naar rechtsvorm bij een stichting, of naar personeelsgrootte bij een zelfstandige).

**Gemiste signaalreflectie.**
De drie aangehaalde voorbeelden (pedicure, hovenier, schilder) zijn nu gedekt via sectie 1E. Het mechanisme dat het Signals Framework beschrijft — een signaal wordt door het onderliggende model wél opgemerkt, maar niet bewust erkend in het gesprek — krijgt nu een expliciete tegenmaatregel in de output-controle, in plaats van te vertrouwen op het model om dit spontaan goed te doen.

**Ontbrekende signaalprioriteit.**
Sectie 1F maakt de impliciete voorrang van herkenningssignalen boven administratieve gegevens nu expliciet en koppelt die aan de bestaande keuzeregel (sectie 1B), in plaats van dat dit aan interpretatie wordt overgelaten.

## 2. Welke risico's nog bestaan

**Signal Reflection blijft een kwalitatief, geen mechanisch criterium.**
Sectie 1E geeft voorbeelden van correcte en incorrecte terugspiegeling, maar "kort teruggespiegeld zonder LP28 te schenden" is geen harde regel zoals het één-vraag-criterium. Er is een reëel risico dat de grens tussen "erkenning zonder evaluatie" en "verkapte waardering" in de praktijk lastiger te bewaken is dan de LP28-lijst met verboden formuleringen, die wél woordelijk is. Dit risico is inherent aan het type correctie — herkenning is geen ja/nee-classificatie — en kan niet volledig worden weggenomen zonder Signal Reflection zelf tot een rigide checklist te maken, wat tegen LW05 zou werken.

**Geen mechanisme voor spanningsvelden tussen signalen.**
Het Signals Framework (hoofdstuk 6) signaleert dat twee signalen elkaar soms tegenspreken of een gezamenlijke vraag oproepen (het "groeier"-voorbeeld: urgentiesignaal vs. schaalgevoel-signaal met overbelasting). Discovery Agent v0.9 bevat geen logica om zulke spanningsvelden te herkennen — dat is door het Framework zelf nog als open onderzoeksrichting gemarkeerd, niet als vastgestelde kennis, en dus terecht buiten deze correctieronde gehouden. Dit blijft een aandachtspunt voor een volgende versie zodra het Framework hier verder in is.

**Logische uitsluiting is afhankelijk van de kwaliteit van de eerdere signaalherkenning.**
Sectie 1D kan alleen werken als het eerdere signaal correct is herkend en vastgehouden (sectie 4, ongewijzigd). Als een signaal zelf al verkeerd herkend wordt, dekt 1D dat niet — het voorkomt alleen dat een correct herkend signaal wordt genegeerd bij de volgende vraag.

**Geen empirische validatie van v0.9 zelf.**
Deze correctieronde is gebaseerd op analyse van vijf simulatietranscripten, niet op een nieuwe simulatie die v0.9 zelf test. Het is dus nog niet aangetoond dat v0.9 de drie problemen in de praktijk daadwerkelijk oplost — alleen dat de regels die ze zouden moeten oplossen nu expliciet zijn vastgelegd. Een vervolgstap (nieuwe simulatie met v0.9, bij voorkeur met dezelfde vijf beroepstypen) zou dat moeten bevestigen, conform LW10 (Kennis is Verdiend — ontdekkingen zijn voorstellen, geen feiten).

## 3. Welke punten pas in Preview opgelost kunnen worden

**Of Signal Reflection het WoW-moment daadwerkelijk versterkt.**
Het Signals Framework (hoofdstuk 8, open vragen) stelt zelf de vraag of bewust benoemen van een signaal meetbaar de kwaliteit van de Preview verbetert, of dat het effect onduidelijk blijft. Discovery Agent v0.9 zorgt dat het signaal wordt teruggespiegeld én overgedragen — maar of dat in de uiteindelijke Preview-tekst ook zichtbaar tot een betere herkenning leidt, is een Preview-vraag, niet een Discovery-vraag.

**Of de signaalprioriteit (sectie 1F) tot een prettiger gesprekstempo leidt of juist tot een gevoel van te lang doorvragen.**
Discovery stelt nu vaker een vraag die een signaal verder opent in plaats van een snelle administratieve vraag. Of dat door ondernemers als prettiger wordt ervaren dan als vertragend, is iets dat alleen met echte gesprekken (niet simulaties) te toetsen is — een punt dat aansluit bij de eerder gegeven aanbeveling om de volgende stap niet weer een architectuurdocument te laten zijn.

**De spanningsveld-vraag uit Framework-hoofdstuk 6** is, zoals hierboven genoemd, evenmin een Discovery-vraag op te lossen — die hoort bij verdere Signals Framework-ontwikkeling, niet bij deze correctieronde.
