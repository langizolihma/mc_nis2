---
project_id: NIS2-REM-2026
project_name: metALCOM NIS2 helyreállítási és audit-evidencia harness
version: "0.3"
status: DRAFT_FOR_HUMAN_APPROVAL
created: "2026-07-13"
updated: "2026-07-14"
receipt_date: "2026-06-26"
receipt_evidence_status: HUMAN_ACCEPTED_WITH_INTERNAL_EMAIL_SUPPORT_NO_PRIMARY_RECEIPT
receipt_supporting_source: SRC-007
action_plan_deadline: "2026-09-24"
deadline_review_status: PENDING_G2_G4_REVIEW
project_sponsor: TBD-HUMAN
project_manager: TBD-HUMAN
information_security_owner: TBD-HUMAN
---

# 1. Projektcél

A projekt célja egy alacsony induló költségű, helyben működtethető, auditálható NIS2-helyreállítási környezet kialakítása, amely:

1. nyilvántartja az auditmegállapításokat, akciókat, felelősöket, határidőket, döntéseket, kockázatokat és evidenciákat;
2. előállítja a hatósági cselekvési terv és a negyedéves beszámolók **ember által jóváhagyandó tervezeteit**;
3. a lehető legtöbb elemző, dokumentáló, ellenőrző és riportáló feladatot AI-ügynökökre bízza;
4. minden jogi, vezetői, költési, éles rendszer- és külső benyújtási döntést emberi jóváhagyási kapu mögött tart;
5. a pénzbeli ráfordítást először nulla többletköltségű intézkedésekkel, meglévő licencekkel és kapacitással csökkenti, és csak igazolt kockázat vagy képességhiány esetén indít beszerzést;
6. hosszú távon folyamatos auditfelkészültségi ügynököt működtet, amely jóváhagyott, lehetőleg read-only adatforrásokból karbantartja a nyilvántartásokat, naplókat és exportokat értelmez, jegyzőkönyv-, evidencia- és intézkedéstervezetet készít, majd csak a szükséges döntéseket és kivételeket terjeszti ember elé.

**Célállapot:** az ismétlődő adminisztratív és ellenőrzési munka lehető legnagyobb része automatizált legyen. Az ember elsősorban bizonytalan, kockázatos vagy jogilag kötelező döntési pontokon avatkozzon be; evidenciaelfogadás, feladatzárás, külső benyújtás, költés és éles változtatás nem automatizálható emberi kapu nélkül.

# 2. Kötelező külső keret

A hatósági döntés alapján:

- a cselekvési tervet a határozat **kézhezvételétől számított 90 napon belül** kell benyújtani;
- a tervnek végrehajtandó feladatot, végrehajtási határidőt és a végrehajtásért felelős személyt kell tartalmaznia, a 7/2024. (VI. 24.) MK rendelet 2. melléklete szerinti követelménycsoportok bontásában;
- a benyújtást követően a megismételt auditig negyedéves beszámoló szükséges;
- a megismételt audit legkésőbbi időpontja 2027. december 31. [SRC-001, 1–2. oldal]

**Rögzített határidőalap:** a határozat bizonyított kézhezvételi dátuma **2026. június 26.** A projekt alapértelmezett, 90 naptári napos számítása szerint a cselekvési terv benyújtási határideje **2026. szeptember 24. (csütörtök)**. A kézbesítési bizonyíték védett evidenciatári vagy iratkezelési hivatkozásját és a határidőszámítás G2/G4 emberi felülvizsgálatát még rögzíteni kell.

# 3. Auditált kiinduló állapot

- Öt EIR került azonosításra; a Vezetéstámogató, Irodai és Termelés EIR került audit alá, a Hálózat-kommunikációs és a Biztonsági EIR nem. [SRC-002, 6. oldal]
- A három auditált EIR VMI-értéke 30; a szervezeti SZEKI 30, az eredmény „nem megfelelt”. [SRC-002, 7–8. oldal]
- Az auditor a végső eredmény fő okaként a biztonsági követelmények gyakorlati megvalósulását igazoló evidenciák nagyfokú hiányát jelölte meg. [SRC-002, 7. oldal]
- A jelentés 19 követelménycsaládot értékel; a különösen alacsony összesített értékek között szerepel a rendszer- és szolgáltatásbeszerzés, a tudatosság és képzés, a karbantartás, a fizikai és környezeti védelem, valamint a biztonsági események kezelése. [SRC-002, 9–10. oldal]
- A 82 szervezeti kontrollcsoportból 3 teljesült teljeskörűen; a jelentés ezt 3%-os teljes megfelelésként összegzi. [SRC-002, 11–12. oldal]

# 4. Problémameghatározás

A projekt elsődleges problémája nem egy előre igazolt, teljes hardvercsere-igény, hanem az alábbiak együttes hiánya:

- egyértelmű felelősség és tényleges döntési hatáskör;
- naprakész EIR-, eszköz-, adat- és függőségi leltár;
- működő, ismételhető és dokumentált kontrollfolyamatok;
- a végrehajtást igazoló, visszakereshető evidencia;
- követelménycsoporthoz, felelőshöz és határidőhöz kötött akcióirányítás;
- rendszeres mérés, felülvizsgálat, jelentés és vezetői döntési nyom.

Az alternatív IT-tervben szereplő RAID-, kapacitás-, elavult rendszer- és migrációs állítások potenciálisan sürgősek, de a dokumentum munkajellegű, részben korábbi AI-szöveget is tartalmaz. Ezek **nem kezelhetők auditált tényként helyszíni vagy read-only műszaki validáció nélkül**. [SRC-004]

# 5. Működési modell

```text
ChatGPT projekt
    ↓
szakmai tervezés, auditértelmezés, döntések
    ↓
PROJECT_BRIEF / DECISIONS / CODEX_HANDOFF / AGENTS / actions.csv
    ↓
privát vállalati Git
    ↓
VS Code + Codex
    ↓
megvalósítás, teszt, diff, dokumentáció
    ↓
emberi felülvizsgálat és jóváhagyás
    ↓
Védett evidenciatár / hatósági benyújtás ember által
```

## Kanonikus tárolók

- **Privát Git:** kód, sémák, promptok, tesztek, handoff dokumentumok, nem érzékeny mintaadat és evidencia-metaadat.
- **Jóváhagyott védett evidenciatár:** meglévő SharePoint dokumentumtár vagy védett hálózati fájlmegosztás az eredeti auditanyagokhoz, aláírt döntésekhez, hivatalos dokumentumokhoz és bináris evidenciákhoz. A harness nem függ konkrét dokumentumkezelő terméktől.
- **Chat:** tervezési munkatér; önmagában nem kanonikus nyilvántartás.

# 6. Alapértelmezett AI-ügynökszerepek

| Szerep | Feladat | Alapértelmezett kimenet | Emberi kapu |
|---|---|---|---|
| Orchestrator | munkacsomagok sorrendje, függőségek, blokkolók | futási terv | G1/G2 |
| Audit Extractor | megállapítások és forráshivatkozások kivonása | strukturált finding-javaslat | G1 |
| Control Mapper | követelménycsalád, EIR, kontroll és evidencia kapcsolása | mapping-javaslat | G1 |
| Remediation Planner | minimumköltségű javítási terv | akciójavaslat | G1/G3 |
| Evidence Curator | evidencia-metaadat, teljesség, hash, hiánylista | evidencia-javaslat | G2 |
| Cost Guard | meglévő licencek/kapacitás, halasztás, beszerzési trigger | költségdöntési csomag | G5 |
| QA Auditor | forrás-, lefedettség-, guardrail- és regresszióellenőrzés | QA-jegyzőkönyv | G1 |
| Report Writer | cselekvési terv és beszámoló tervezete | külső dokumentumtervezet | G4 |
| Continuous Assurance Operator | jóváhagyott logok/exportok figyelése, nyilvántartások karbantartása, jegyzőkönyv- és intézkedéstervezet, kivétel-előterjesztés | forráshivatkozott review-csomag és emberi jóváhagyási sor | G1/G2/G3 |

Az alapértelmezett végrehajtás **szekvenciális**, nem párhuzamos agent-swarm. Ez csökkenti a költséget, a kontextusvesztést és a felülvizsgálati terhet.

# 7. Hatókör

## Benne van

- forrás- és követelményregiszter;
- akció-, döntés-, kockázat- és evidencia-metaadat-kezelés;
- határidőszámítás és blokkolólista;
- cselekvési terv és negyedéves beszámoló tervezetének generálása;
- AI-munkacsomagok és szerepspecifikus promptok;
- forráskövetés, bizonytalanságjelölés, emberi jóváhagyási kapuk;
- helyi validáció, egységteszt és agent-eval;
- később jóváhagyott, read-only adatgyűjtési integrációk.
- folyamatos auditfelkészültségi ügynök pilotja, mérhető emberimunka-csökkentéssel, teljes futási naplóval és leállítható működéssel.

## Nincs benne az első szakaszban

- automatikus hatósági benyújtás;
- automatikus e-mail-küldés;
- éles AD-, Exchange-, hálózat-, virtualizációs vagy backup-módosítás;
- vásárlás vagy előfizetés indítása;
- teljes SIEM/PAM/SOC/Zero Trust bevezetés;
- korlátlan felhős AI-futtatás;
- teljes infrastruktúracsere vagy migráció.

# 8. Költségelv

1. **B0:** nincs új pénzkiadás; meglévő emberi kapacitás, licencek és eszközök.
2. **B1:** kis összegű ráfordítás a vállalati delegált kereten belül; pontos HUF-küszöb TBD.
3. **B2:** tervezett beruházás üzleti esettel és vezetői jóváhagyással; pontos HUF-küszöb TBD.
4. **B3:** jelentős beruházás vagy többéves elköteleződés; felsővezetői/testületi döntés.

Fizetős megoldás csak akkor kerülhet előre, ha dokumentáltan megtörtént:

- a meglévő jogosultságok és licencek vizsgálata;
- a belső kapacitás és újrahasznosítás felmérése;
- az ingyenes vagy már licencelt alternatíva értékelése;
- pilot és mérhető elfogadási feltétel;
- a halasztás kockázatának összevetése a költséggel.

# 9. Sikerfeltételek

- minden külső kötelezettséghez bizonyítható határidő és emberi felelős tartozik;
- minden akció követelménycsaládhoz, forráshoz, deliverable-höz és elvárt evidenciához kötött;
- egyetlen auditmegállapítás sem minősül lezártnak elfogadott evidencia nélkül;
- a bináris evidenciához hash, forráshivatkozás, dátum, EIR, kontroll, készítő és reviewer tartozik;
- a P0 akcióknál nincs `TBD-HUMAN` az aktiválás után;
- külső dokumentum csak G4 kapuval, éles változás csak G3 kapuval, költés csak G5 kapuval történik;
- a megismételt audit előtt legalább egy dokumentált mock audit és javítási kör lezajlik.

# 10. Kritikus nyitott kérdések

1. Mi a 2026.06.26-i kézhezvételt igazoló dokumentum védett evidenciatári vagy iratkezelési hivatkozásja, és ki végzi el a G2/G4 határidő-felülvizsgálatot?
2. Melyik a kanonikus auditjelentés: a határozatban hivatkozott 2026.06.05-i vagy a rendelkezésre álló 2026.05.04-i borítójú változat?
3. Ki a vezetői szponzor, projektvezető, IBF, jogi reviewer és az egyes kontrollgazda?
4. Milyen vállalati adatminősítést kapnak az audit- és infrastruktúra-adatok?
5. Engedélyezett-e felhős Codex/AI használata, vagy kizárólag helyi munkamenet használható?
6. Hol lesz a privát Git, melyik meglévő SharePoint- vagy fájlmegosztás lesz a védett evidenciatár, és mi annak pontos struktúrája?
7. Mely belső műszaki állítások igazolhatók read-only exporttal azonnal?
8. Mik a B1/B2/B3 jóváhagyási határok?
9. Ki erősíti meg a negyedéves beszámolók pontos ütemezési logikáját és formáját?

# 11. Forráshierarchia

1. `SRC-001` – aláírt hatósági döntés: külső kötelezettségekben elsődleges.
2. `SRC-002` – auditjelentés: auditmegállapításokban elsődleges.
3. jóváhagyott vezetői/jogi döntés és tényleges rendszerexport.
4. `SRC-003` – stratégiai irány.
5. `SRC-004` – belső munkadokumentum, minden állítása validálandó.
6. `SRC-005`/`SRC-006` – másodlagos összefoglaló.
7. `SRC-007` – mentett belső levelezés: a kézhezvételi dátum kiegészítő alátámasztása, nem hivatalos cégkapus kézbesítési igazolás.

| ID | Fájl | Típus | Bizalmi szint | SHA-256 |
|---|---|---|---|---|
| SRC-001 | `06-26-Audit_elrendelese_es_kapcsolodo_intezkedesek_20260626_06512779_alairt.pdf` | signed_authority_decision | authority | `9ecc9ac1761dc9a02c61a8b015b83b215312053c76194f088bea8ee89e1109f3` |
| SRC-002 | `ALVERAD_Audit_metALCOM Zrt._20260504_jelentes.pdf` | audit_report | audited | `f0d48aa53c07330d5a9088aec5479ca1c1675c5ec33d4a0726df76d77588f5a6` |
| SRC-003 | `IT_strategia_2026-28_1.pdf` | it_strategy | strategy_input | `0cd6de6bd85a78361f11fa55c4a5d4c6cd31ada8a439f221532caf0e3a07cafd` |
| SRC-004 | `METALCOM_Alternativ_IT_Strategia_2026_2028_1(1).docx` | internal_working_document | unverified_internal | `40b263e65df13169617ef35eb956aa7fbde4cb6f33d0d8097e079e3dd862b68d` |
| SRC-005 | `NIS2_audit_összefoglaló(1).pdf` | secondary_summary | secondary | `f2476762e42c6f2a73126181a0b97c6da5fcbcaf1e9f5dbbe5df83e46bcbd01b` |
| SRC-006 | `NIS2_audit_osszefoglalo_folytatashoz.md` | conversation_continuation_summary | secondary | `76754455b17fe434759d6a534cac71e5f1b15e1f690d24329bca6099c0a94bcc` |
| SRC-007 | `Re Cégkapura érkezett.msg` | internal_email_correspondence | unverified_internal | `007ac14c724f4293e662d7580c952c14b52035db76f67a392bbc3d050a348a9d` |

## Ismert forrásellentmondás

A `SRC-001` 2026.06.05-i auditjelentésre hivatkozik, míg a rendelkezésre álló `SRC-002` borítóján 2026.05.04. szerepel. A külső cselekvési terv elkészítése előtt a kanonikus, aláírt auditváltozatot azonosítani és hash-sel rögzíteni kell.
