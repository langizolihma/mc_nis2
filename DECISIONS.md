---
version: "0.3"
status: WORKING_DECISION_LOG
updated: "2026-07-14"
---

# Döntési napló

## Státuszok

- `APPROVED_BASELINE` – a beszélgetésben elfogadott munkarendi alap.
- `MANDATORY_SOURCE` – a hatósági vagy auditforrásból közvetlenül következik.
- `CONFIRMED_INPUT` – ember által megadott és bizonyítottnak jelzett projektadat; a kanonikus bizonyíték hivatkozását külön rögzíteni kell.
- `PROPOSED` – a megvalósítás megkezdése előtt emberi jóváhagyás vagy módosítás szükséges.
- `OPEN` – döntés vagy adat hiányzik.
- `SUPERSEDED` – későbbi döntés felülírta.

| ID | Státusz | Döntés röviden |
|---|---|---|
| D-001 | APPROVED_BASELINE | Itt történik a szakmai tervezés; VS Code + Codex végzi a megvalósítást. |
| D-002 | SUPERSEDED | A korábban kijelölt vállalati dokumentumkezelő kötelező használatát a D-019 felülírta. |
| D-003 | APPROVED_BASELINE | Local-first, nulla új platformköltségű indulás. |
| D-004 | APPROVED_BASELINE | AI-kimenet csak javaslat; ember marad felelős és jóváhagyó. |
| D-005 | APPROVED_BASELINE | A pénzkiadás a lehető legkésőbbre kerül, kizárólag igazolt triggerrel. |
| D-006 | MANDATORY_SOURCE | A 90 napot a bizonyítható kézhezvételtől kell számítani. |
| D-007 | MANDATORY_SOURCE | A cselekvési tervet követelménycsoportonként, feladattal, határidővel és név szerinti felelőssel kell előállítani. |
| D-008 | PROPOSED | Az első Codex-szakasz determinisztikus helyi core legyen, LLM/API-integráció nélkül. |
| D-009 | PROPOSED | Az agentek szekvenciálisan működjenek; párhuzamos swarm csak mért előny esetén. |
| D-010 | APPROVED_BASELINE | Éles rendszerhez, külső benyújtáshoz és költéshez külön emberi kapu szükséges. |
| D-011 | APPROVED_BASELINE | Munkadokumentumból származó műszaki állítás nem kezelhető tényként validáció nélkül. |
| D-012 | PROPOSED | A belső repeat-audit céldátum 2027.09.30., legalább három hónap tartalékkal. |
| D-013 | PROPOSED | Exchange/BLADE5/RDS/AD-DHCP változás csak függőség-, megőrzési-, licenc- és rollback-elemzés után. |
| D-014 | APPROVED_BASELINE | Eredeti audit- és evidenciabinaris nem kerül Gitbe; csak hivatkozás, metaadat és hash. |
| D-015 | OPEN | B1/B2/B3 forintküszöb és jóváhagyó szervezeti szint. |
| D-016 | SUPERSEDED | A kanonikus auditjelentés korábbi nyitott kérdését a D-025 lezárta. |
| D-017 | OPEN | Engedélyezett AI-futtatási környezet és adatminősítési szabály. |
| D-018 | CONFIRMED_INPUT | A határozat bizonyított kézhezvételi dátuma 2026.06.26.; a számított 90 napos határidő 2026.09.24. |
| D-019 | APPROVED_BASELINE | A harness termékfüggetlen; a hivatalos és bináris evidenciák meglévő, jóváhagyott védett fájlmegosztáson vagy SharePoint-tárban kezelhetők. |
| D-020 | CONFIRMED_INPUT | Mind a 41 akció felelőse Pásztor András, jóváhagyója Lángi Zoltán; a repository hozzáférési köre és e két név kezelése emberileg jóváhagyott. |
| D-021 | APPROVED_BASELINE | A 2027.09.30-i belső repeat-audit céldátum jóváhagyott; a hatósági legkésőbbi dátum változatlanul 2027.12.31. |
| D-022 | APPROVED_BASELINE | A 2026.06.26-i kézhezvételi dátum külön átvételi igazolás hiányában is elfogadott projektbaseline; a bizonyítékhiány transzparensen fennmarad. |
| D-023 | CONFIRMED_INPUT | Az SRC-007 mentett belső levelezés a 2026.06.26-i cégkapus érkezést alátámasztja, de nem helyettesíti a rendszer által kiállított kézbesítési igazolást. |
| D-024 | APPROVED_BASELINE | A program célállapota egy folyamatos auditfelkészültségi ügynök, amely minimalizálja a rutinszerű emberi munkát, de a kötelező döntéseket emberi kapun hagyja. |
| D-025 | CONFIRMED_INPUT | Az SRC-008 a hatóság felé beadott, 2026.06.05-i aláírt kanonikus auditjelentés; az SRC-002 korábbi változatát felváltja. |

# Részletes döntések

## D-001 – Tervezés és megvalósítás szétválasztása

**Státusz:** `APPROVED_BASELINE`

A ChatGPT projektben készül a szakmai értelmezés, a projektbrief, a döntési napló, a Codex-handoff, az akcióregiszter, a biztonsági határok és az elfogadási kritériumok. A forráskód, tesztek és automatizmusok a privát repositoryban, VS Code + Codex környezetben készülnek.

**Következmény:** a chat nem lehet egyedüli nyilvántartás; minden lezárt döntés fájlba kerül.

## D-002 – Korábbi tárolási alapelv

**Státusz:** `SUPERSEDED`

A korábbi döntés egy konkrét vállalati dokumentumkezelőt jelölt ki kötelező elsődleges tárként. Ezt a D-019 felülírta: a harness nem függ konkrét terméktől vagy gyártótól.

## D-003 – Local-first és minimumköltség

**Státusz:** `APPROVED_BASELINE`

Az induló rendszer nem igényel új SIEM-, SOC-, PAM-, workflow- vagy adatbázis-platformot. Az első implementáció helyi fájlokkal, Python standard libraryval és már rendelkezésre álló eszközökkel működjön.

## D-004 – AI proposal-only

**Státusz:** `APPROVED_BASELINE`

Az AI:

- kivonatolhat, térképezhet, tervezhet, validálhat és tervezetet írhat;
- nem lehet jogi vagy szervezeti értelemben akciófelelős;
- nem fogadhat el kockázatot vagy evidenciát;
- nem zárhat le akciót;
- nem módosíthat éles rendszert;
- nem küldhet hatósági dokumentumot;
- nem kezdeményezhet vásárlást.

## D-005 – Késleltetett költés

**Státusz:** `APPROVED_BASELINE`

A megoldási sorrend: dokumentáció és kontroll → meglévő képesség validálása → B0 pilot → csak utána fizetős képesség. A halasztás nem alkalmazható, ha igazolt, közvetlen adatvesztési, rendelkezésre állási vagy jogszabályi határidőkockázat áll fenn.

## D-006 – Határidőalap

**Státusz:** `MANDATORY_SOURCE`

A 90 napos határidő alapja nem a dokumentum kelte, hanem a bizonyítható kézhezvétel. A kézhezvételi dátum 2026.06.26-ként rögzítésre került; a projekt számított cselekvésiterv-határideje 2026.09.24. Lásd D-018. [SRC-001, 1. oldal]

## D-007 – Cselekvési terv szerkezete

**Státusz:** `MANDATORY_SOURCE`

A külső terv legalább a követelménycsoport, feladat, végrehajtási határidő és név szerinti felelős mezőket tartalmazza. [SRC-001, 2. oldal]

## D-008 – Első Codex-szakasz

**Státusz:** `PROPOSED`

Az első fejlesztési munkacsomag (`H-001`) csak a determinisztikus, helyi registry/validator/deadline/report core-t készítse el. Nem használ OpenAI API-t, Agents SDK-t, felhőt, dokumentumtár-API-t vagy éles rendszerkapcsolatot.

**Racionálé:** előbb a sémát, a kontrollkapukat és az auditálható adatáramlást kell bizonyítani; csak utána érdemes token- vagy integrációs költséget vállalni.

## D-009 – Agent-topológia

**Státusz:** `PROPOSED`

Alapértelmezésben egy orchestrator szekvenciálisan ad munkát a specialistáknak. Párhuzamos agent csak olyan feladatra engedhető, ahol a bemenetek függetlenek, az összevonás determinisztikus és az idő/költség előnye mérhető.

## D-010 – Jóváhagyási kapuk

**Státusz:** `APPROVED_BASELINE`

- `G1_DOMAIN_REVIEW` – szakmai tartalom és forráshűség.
- `G2_SECURITY_LEGAL` – adatkezelés, biztonság, jogi értelmezés.
- `G3_PRODUCTION_CHANGE` – éles módosítás, törlés, migráció, jogosultságváltozás.
- `G4_EXTERNAL_SUBMISSION` – hatósági vagy külső dokumentum.
- `G5_PURCHASE` – pénzkiadás, licenc, szolgáltatás vagy többéves kötelezettség.

## D-011 – Forrásbizalom

**Státusz:** `APPROVED_BASELINE`

`SRC-004` állításai – beleértve a RAID-, kapacitás-, VM-, licenc- és rendszerállapot-adatokat – csak validációs feladatot indíthatnak. Lezárást, éles változást vagy beszerzést nem igazolhatnak önmagukban.

## D-012 – Belső repeat-audit target

**Státusz:** `PROPOSED`

Javasolt belső céldátum: 2027.09.30. A hatósági végső dátum 2027.12.31.; a belső cél időt hagy a mock audit során feltárt hibák javítására. [SRC-001, 1. oldal]

## D-013 – Migrációs biztonsági fék

**Státusz:** `PROPOSED`

Exchange, BLADE5/Andoc, RDS és AD/DHCP változás előtt kötelező a függőségi, üzletmeneti, adatmegőrzési, licenc-, teszt- és rollback-csomag. A költségcsökkentési feltevés önmagában nem elég.

## D-014 – Evidence-by-reference

**Státusz:** `APPROVED_BASELINE`

A repository nem válhat érzékeny dokumentumtárrá. Az evidenciaregiszter hivatkozást, hash-t, időbélyeget, kontroll/EIR kapcsolatot, készítőt, reviewert és elfogadási státuszt tárol.


## D-018 – Bizonyított kézhezvételi dátum és számított tervhatáridő

**Státusz:** `CONFIRMED_INPUT`  
**Rögzítés dátuma:** 2026-07-14

A projektgazda megerősítése szerint a hatósági határozat bizonyított kézhezvételi dátuma **2026. június 26.** A harness kanonikus projektadata ezért `receipt_date = 2026-06-26`.

A `receipt_date + 90 naptári nap` számítás eredménye **2026. szeptember 24. (csütörtök)**. Ez kerül az akcióregiszter külső benyújtási alapdátumába.

**Kontrollkorlát:** a kézbesítési bizonyíték védett evidenciatári vagy iratkezelési hivatkozásja és az emberi G2/G4 felülvizsgálat még rögzítendő. A dátum vagy a számítási szabály csak új döntési rekorddal és jóváhagyással módosítható; a Codex nem írhatja át önállóan.

## D-019 – Termékfüggetlen evidenciatár

**Státusz:** `APPROVED_BASELINE`  
**Rögzítés dátuma:** 2026-07-14

A NIS2-harness nem függ konkrét dokumentumkezelő terméktől.

- A Git repository a kód, sémák, promptok, tesztek, döntések, handoffok és evidencia-metaadatok kanonikus tárhelye.
- Az eredeti auditanyagok, aláírt dokumentumok, képernyőképek, exportok és más bináris evidenciák meglévő, vállalatilag jóváhagyott védett fájlmegosztáson vagy SharePoint dokumentumtárban maradnak.
- A harness csak `evidence_id`, belső URI/hivatkozás, SHA-256 hash, időpont, EIR, kontroll, készítő, reviewer és státusz adatokat tárol.
- A választott tárnak jogosultságkezeltnek, mentettnek, visszaállíthatónak és változáskövethetőnek kell lennie.
- Új platform beszerzése nem szükséges; először a már rendelkezésre álló tárhelyet kell alkalmassá tenni.

**Felülírja:** D-002 korábbi, konkrét termékhez kötött tárolási döntését.

## D-020 – Egységes akciófelelős és jóváhagyó

**Státusz:** `CONFIRMED_INPUT`  
**Rögzítés dátuma:** 2026-07-14

A projektgazda emberi utasítása alapján a `data/actions.csv` mind a 41 induló akciójánál:

- `human_owner`: Pásztor András;
- `human_approver`: Lángi Zoltán.

A projektgazda külön megerősítette, hogy a repository hozzáférési köre jóváhagyott, és e két személynév a repositoryban rögzíthető. Ez a kijelölés nem jelenti az akciók lezárását, evidencia elfogadását, külső benyújtást vagy éles változtatás jóváhagyását; a tételenként előírt G1–G5 kapuk továbbra is kötelezők.

## D-021 – Jóváhagyott belső repeat-audit céldátum

**Státusz:** `APPROVED_BASELINE`

**Rögzítés dátuma:** 2026-07-14

**Jóváhagyó:** Lángi Zoltán

**Felelős:** Pásztor András

A projektgazda jóváhagyta a **2027. szeptember 30.** belső repeat-audit céldátumot. A belső cél legalább három hónap javítási tartalékot biztosít a hatósági határozat szerinti, legkésőbb **2027. december 31.** napjáig esedékes megismételt audit előtt. A roadmapnek negyedéves readiness gate-eket, legalább egy dokumentált mock auditot és javítási kört kell tartalmaznia.

**Felülírja:** a D-012 `PROPOSED` státuszú javaslatát. A hatósági legkésőbbi dátumot nem módosítja.

## D-022 – Kézhezvételi dátum elfogadása külön átvételi igazolás nélkül

**Státusz:** `APPROVED_BASELINE`

**Rögzítés dátuma:** 2026-07-14

**Jóváhagyó:** Lángi Zoltán

A projektgazda megerősítette, hogy külön címzetti kézbesítési vagy átvételi igazolás nem áll rendelkezésre, és ennek ismeretében a **2026. június 26.** dátumot a projekt kézhezvételi baseline-jaként elfogadja. A cselekvési terv számított határideje változatlanul **2026. szeptember 24.**

**Kontrollkorlát:** ez emberi projekt- és kockázatelfogadás, nem helyettesíti és nem minősíti át nem létező elsődleges kézbesítési evidenciává. A hiányt a harness továbbra is warningként jelzi, a G2/G4 aláírt review pedig változatlanul szükséges.

## D-023 – Belső e-mailes alátámasztás a kézhezvételi dátumhoz

**Státusz:** `CONFIRMED_INPUT`

**Rögzítés dátuma:** 2026-07-14

**Forrás:** `SRC-007`

A `Re Cégkapura érkezett.msg` mentett belső levelezés legkorábbi beágyazott üzenete 2026. június 26-án 12:16-kor kelt. Tárgya `Cégkapura érkezett`, szövege szerint a dokumentum a cégkapura érkezett, és a levélrész a hatósági határozat PDF-jét csatolmányként jelöli.

**Bizalmi korlát:** a mentett levéllánc érdemi belső alátámasztás a D-022 szerinti dátumhoz, de `unverified_internal` forrás. Nem rendszer által kiállított címzetti kézbesítési/átvételi igazolás, ezért az elsődleges evidenciára vonatkozó warningot nem zárja le.

## D-024 – Folyamatos auditfelkészültségi ügynök mint programcél

**Státusz:** `APPROVED_BASELINE`

**Rögzítés dátuma:** 2026-07-14

**Jóváhagyó:** Lángi Zoltán

A program hosszú távú célja olyan local-first, auditálható ügynök kialakítása, amely a jóváhagyott adatforrásokból folyamatosan karbantartja a kontroll-, feladat- és evidencia-nyilvántartásokat; logokat és rendszerexportokat értelmez; jegyzőkönyv-, evidencia- és intézkedéstervezeteket készít; figyeli a határidőket; valamint a szükséges döntéseket és kivételeket emberi elfogadásra előterjeszti.

**Elvárt működési modell:** a rutinszerű emberi munka a lehető legkisebb legyen, az ember elsősorban kivétel, bizonytalanság, jelentős kockázat vagy kötelező jóváhagyási kapu esetén avatkozzon be.

**Kontrollkorlát:** az ügynök nem fogadhat el evidenciát, nem zárhat le akciót, nem nyújthat be külső dokumentumot, nem indíthat költést és nem hajthat végre éles változtatást emberi jóváhagyás nélkül. Adatforrás-integráció csak jóváhagyott scope-pal, minimális jogosultsággal, lehetőleg read-only módban, teljes futási naplóval és leállítási lehetőséggel készülhet.

## D-025 – A hatósághoz beadott kanonikus auditjelentés azonosítása

**Státusz:** `CONFIRMED_INPUT`

**Rögzítés dátuma:** 2026-07-15

**Emberi forrásállítás:** a projektgazda szerint az `Audit_Cert_metLACOM Zrt._20260603_signed.pdf` a hatóság felé beadott példány.

Az SRC-008 388 oldalas, borítója, PDF-metaadata és beágyazott aláírásmezője **2026. június 5.** dátumú, ezért megfelel az SRC-001 hatósági határozatban hivatkozott jelentésdátumnak. SHA-256 értéke: `c347dc3139dd433ace098b6145f1ea5d043614dcfcbf7ed46f71e1b405c5058f`.

Az SRC-002 és SRC-008 első 386 oldalának oldalankénti összevetése során a lábléc oldalszámának semlegesítése után 381 oldal pontos szövegegyezést adott. Az öt eltérő oldal a május 4-ről június 5-re változó dokumentumdátumot és a 7–9. oldal tördelési átrendeződését tartalmazza; megváltozott auditmegállapítást nem azonosítottunk. Az SRC-008 két további, magyar és angol auditigazolási oldalt tartalmaz.

**Döntési hatás:** az SRC-008 a további munkában kanonikus auditforrás, az SRC-002 történeti, felülírt változat. A D-016 nyitott kérdését és az A-035 forrásverzió-konfliktusát ez a rekord feloldja.

**Kontrollkorlát:** a PDF-ben `Adobe.PPKLite` / `adbe.pkcs7.detached` aláírásstruktúra, aláírói név, időpont, aláírástartalom és ByteRange található, de a tanúsítvány bizalmi láncát külön kriptográfiai eszközzel nem validáltuk. Az angol auditigazolás 388. oldalán egyes mezőértékek Poppler-renderben nem láthatók, noha szövegként kinyerhetők; szükség esetén emberi PDF-megjelenítőben ellenőrizendő.

**Felülírja:** D-016 nyitott kérdését és az SRC-002 kanonikus használatát.

# Nyitott döntési sablon

```markdown
## D-XXX – Cím

**Státusz:** OPEN  
**Dátum:** YYYY-MM-DD  
**Döntési kérdés:** ...  
**Opciók:** ...  
**Döntés:** ...  
**Indok:** ...  
**Jóváhagyó:** ...  
**Felülvizsgálati trigger:** ...
```
