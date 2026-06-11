# Wijzigingslog — Werkdocument V5 → V6

| Veld | Waarde |
|---|---|
| **Van** | Werkdocument V5.0 |
| **Naar** | Werkdocument V6.0 |
| **Type** | Verduidelijking en formalisering — geen nieuwe architectuur |
| **Aanleiding** | Live simulaties (10 scenario's) + architectuuronderzoek Discovery-eerste-taak |
| **Eigenaar** | Ruud Kroonen |
| **Datum** | 2026 |

---

## Legenda

| Status | Betekenis |
|---|---|
| ✅ Ongewijzigd | Inhoud overgenomen zonder aanpassing. |
| 🔵 Verduidelijkt | Kern ongewijzigd. Formulering of toepassingsgrens aangescherpt. |
| 🔶 Bijgewerkt | Kern ongewijzigd. Inhoud uitgebreid met nieuwe inzichten. |
| 🆕 Nieuw | Nieuw element zonder equivalent in V5. Herleidbaar naar simulaties of architectuuronderzoek. |

---

## Per hoofdstuk

### DEEL I — STRATEGISCH NIVEAU

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H1 | Lumivey als digitale organisatie | ✅ Ongewijzigd | — |
| H2 | Quiet Web | ✅ Ongewijzigd | — |
| H3 | Asset Management | ✅ Ongewijzigd | — |
| H4 | Brain en Learning Loop | ✅ Ongewijzigd | — |
| H5 | Brain Management | ✅ Ongewijzigd | — |
| H6 | Controlled Growth | ✅ Ongewijzigd | — |
| H7 | Kwaliteitsfilosofie | ✅ Ongewijzigd | — |

### DEEL II — POSITIONERING & DOELGROEP

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H8 | Wat Lumivey is | ✅ Ongewijzigd | — |
| H9 | Doelgroep en gebruikerstypes | 🔶 Bijgewerkt | Twee wijzigingen: (1) Onzekere klant aangescherpt: signaal eerst herkennen. (2) Nieuw gebruikerstype: Ondernemer in overgang — hovenier/compagnon-simulaties. |
| H10 | Positionering | ✅ Ongewijzigd | — |
| H11 | Interne vs. externe communicatie | ✅ Ongewijzigd | — |

### DEEL III — DISCOVERY ENGINE

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H12 | Discovery Engine als architectuurlaag | 🔶 Bijgewerkt | Twee toevoegingen: (1) Eerste taak van Discovery expliciet geherdefinieerd als "herkennen wat de bezoeker meebrengt". (2) Nieuw principe: aanwezig signaal heeft voorrang op ontbrekend gegeven. Historische noot uitgebreid. |
| H13 | Discovery-procesmodel | 🔶 Bijgewerkt | Stap 1 herschreven van "Intentie herkennen" naar "Signaal herkennen en situatie lezen". Signaaltypetabel toegevoegd. IST-Spanning-SOLL formeel opgenomen als primaire oriëntatie. Toelichting stap 3 bijgewerkt: identiteitsverankering volgt op signaalherkenning. Interpretatie-afdeling verplaatst naar "actief tijdens stap 1 en 4" (was: stap 4). |
| H14 | Adaptieve Discovery-voering | 🔵 Verduidelijkt | Eerste-beurt-protocol: explicieter gemaakt dat het uitsluitend voor identiteits-ingang geldt. Onzekere klant aangescherpt. Ondernemer in overgang toegevoegd. |
| H15 | Signaalherkenning en onzekerheidsreductie (was: Onzekerheidsreductie) | 🔶 Bijgewerkt | Meest ingrijpend gewijzigd hoofdstuk. Hernoemd. Toegevoegd: (1) De eerste beweging: lezen wat er al is. (2) Vier signaaltypen met herkenning, eerste beweging en voorbeelden. (3) IST-Spanning-SOLL als doorlopende leeshouding. Onzekerheidsmodel en vergelijkingstabel behouden en uitgebreid. |
| H16 | Identiteit vóór Functionaliteit | 🔵 Verduidelijkt | Toepassingsgrens toegevoegd: Identiteit vóór Functionaliteit geldt binnen de Discovery-fase — na signaalherkenning. Overgang als trigger toegevoegd aan de triggerlijst. |

### DEEL IV — PROCESARCHITECTUUR

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H17 | Intentie-afdeling | 🔵 Verduidelijkt | Twee nieuwe herkenningspunten: bezoeker twijfelt of website nodig is; bezoeker vergelijkt met alternatief. Signaaltype toegevoegd als output van de afdeling. |
| H18 | Context-afdeling | 🔵 Verduidelijkt | Alinea toegevoegd over URL-ingang als bewijsmateriaal. |
| H19 | LSD-methode | ✅ Ongewijzigd | — |
| H20 | Interpretatie-afdeling | 🔶 Bijgewerkt | Uitgebreid met concept betekenisdichtheid. Drie nieuwe voorbeeldzinnen toegevoegd. Werkwijze aangepast: "Betekenisdichtheid bepalen" als tweede stap. |
| H21 | Identiteit-afdeling | ✅ Ongewijzigd | — |
| H22 | Ziel als informatiestroom | 🔵 Verduidelijkt | Alinea toegevoegd: irritatiesignalen en correctiereacties bevatten directe Ziel-informatie (LP33-inzicht). |
| H23 | Emotie als informatiestroom | 🔵 Verduidelijkt | "Rouw, overgang, verandering" toegevoegd aan observatielijst. |
| H24 | Completeness Engine | ✅ Ongewijzigd | — |
| H25 | Dossierbeheer | ✅ Ongewijzigd | — |
| H26 | Bedrijfsdossier | ✅ Ongewijzigd | — |

### DEEL V — PREVIEW & GOEDKEURING

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H27–H32 | Preview t/m Approval Gate | ✅ Ongewijzigd | — |

### DEEL VI — OPERATIONELE PRINCIPES

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H33–H38 | Stopregels t/m Voor/achter de schermen | ✅ Ongewijzigd | — |

### DEEL VII — ARCHITECTUURLAGEN

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H39 | Gespreksgeheugen | ✅ Ongewijzigd | — |
| H40 | Completeness Engine architectuurpositie | ✅ Ongewijzigd | — |
| H41 | Visitor First | 🔶 Bijgewerkt | Achtste Visitor First-regel toegevoegd: "Aanwezig signaal heeft voorrang". Dit is de directe vertaling van LP35 naar het Visitor First-principe. |
| H42 | Quiet Web | 🔵 Verduidelijkt | Laatste architectuurconsequentie aangescherpt: "De Discovery Engine stelt geen vragen over signalen die de bezoeker al heeft uitgedrukt." |

### DEEL VIII — ORGANISATIE & SYSTEEM

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H43 | Digitale afdelingen | 🔵 Verduidelijkt | Drie afdelingsomschrijvingen bijgewerkt: Intentie (signaaltype toevoegen), Discovery Engine (signaalherkenning expliciet), Interpretatie (betekenisdichtheid). |
| H44–H48 | PDCA t/m MVP | ✅ Ongewijzigd | — |

### DEEL IX — STRATEGIE & ONTWIKKELING

| H# | Titel | Status | Motivatie |
|---|---|---|---|
| H49–H50 | Marketing, Verdienmodel | ✅ Ongewijzigd | — |
| H51 | Validaties en simulaties | 🔶 Bijgewerkt | Negen nieuwe live simulaties toegevoegd. Verbeterpuntenlijst bijgewerkt met simulatiebevindingen. |
| H52 | Besluiten | 🔶 Bijgewerkt | Acht nieuwe besluiten toegevoegd op basis van V6-wijzigingen en LP35. |
| H53 | Definities | 🔶 Bijgewerkt | Vijf nieuwe definities: Aanwezig signaal, Betekenisdichtheid, IST-Spanning-SOLL, Signaaltype, Ondernemer in overgang. |
| H54 | Openstaande vragen | 🔵 Verduidelijkt | LP35-operationalisering en terminologielekkage toegevoegd als openstaande vragen. |

---

## Samenvatting

| Type | Aantal hoofdstukken |
|---|---|
| ✅ Ongewijzigd | 38 |
| 🔵 Verduidelijkt | 9 |
| 🔶 Bijgewerkt | 7 |
| 🆕 Nieuw (intern in bestaande H) | — (geen nieuwe hoofdstukken; nieuwe concepten opgenomen in bestaande structuur) |

**Totaal geraakt:** 16 van 54 hoofdstukken. 38 hoofdstukken volledig ongewijzigd.

**Kernwijziging in drie zinnen:**
V6 voegt één principe toe dat impliciet aanwezig was in V5 maar niet expliciet verankerd was: een aanwezig signaal heeft voorrang op een ontbrekend gegeven. Dit trekt door in de definitie van de eerste taak van Discovery (H12), het procesmodel (H13), de signaalherkenning (H15), de toepassingsgrens van Identiteit vóór Functionaliteit (H16), de Interpretatie-afdeling (H20) en Visitor First (H41). De architectuur is ongewijzigd; de formulering is gepreciseerd.

---

*Lumivey — Werkdocument-V6-wijzigingslog.md — 2026*
