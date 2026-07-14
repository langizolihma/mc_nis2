# TERVEZET – EMBERI JÓVÁHAGYÁS NÉLKÜL NEM NYÚJTHATÓ BE

- status: `PROPOSAL`
- agent_role: `report_writer`
- source_refs: `data/actions.csv`, `data/project_dates.json`
- assumptions: `[]`
- confidence: `medium`
- required_human_gate: `G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G4_EXTERNAL_SUBMISSION`
- forbidden_automatic_actions: `close_action;submit_external;change_production`
- generation_record_date: `2026-07-14`
- generator: `nis2_harness/0.1.0`

Kanonikus kézhezvételi dátum: **2026-06-26**. A kézbesítési evidencia és a G2/G4 review státusza a projektadat-rekord szerint még emberi ellenőrzést igényel.

## 1. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-002 | Rögzítse a 2026.06.26-i kézhezvétel bizonyítékának védett evidenciatári vagy iratkezelési hivatkozásját és reviewerét, majd véglegesítse a jóváhagyandó határidőnaptárt. | Pásztor András | Lángi Zoltán | 2026-06-27 | P0 | Jóváhagyott receipt record és határidőnaptár. | Kézbesítési igazolás, receipt_date, reviewer és számítási napló. | SRC-001; oldal: 1 | authority | IN_PROGRESS | G2_SECURITY_LEGAL |
| A-003 | Hozza létre a privát Git workspace-t, az védett evidenciatár taxonomiáját, elnevezési szabályt és hozzáférési csoportokat. | Pásztor András | Lángi Zoltán | 2026-06-29 | P0 | Működő repository- és evidenciatár-struktúra. | Repository access list, evidenciatár-struktúra export/képernyőkép, naming convention, jóváhagyás. | SRC-002:p7\|DERIVED; oldal: 7 | audited | NEW | G2_SECURITY_LEGAL |
| A-035 | Szerezze be a kanonikus aláírt auditjelentést, egyeztesse a verziót az auditorral/iratkezeléssel, és rögzítse a hash-t. | Pásztor András | Lángi Zoltán | 2026-06-29 | P0 | Jóváhagyott canonical source record. | Aláírt/kánoni fájl, iratkezelési vagy auditor-visszaigazolás, SHA-256, döntési rekord. | SRC-001\|SRC-002; oldal: SRC-001:1; SRC-002:borító | conflict | NEW | G2_SECURITY_LEGAL |
| A-001 | Formálisan jelölje ki az elektronikus információs rendszerek biztonságáért felelős személyt, biztosítson hatáskört, erőforrást és helyettesítést. | Pásztor András | Lángi Zoltán | 2026-07-01 | P0 | Aláírt kinevezés, munkaköri leírás, RACI és szervezeti ábra. | Aláírt dokumentumok, kihirdetési nyom, vezetői jóváhagyás. | SRC-002; oldal: 21–22 | audited | NEW | G2_SECURITY_LEGAL |
| A-036 | Jelölje ki a vezetői szponzort, projektvezetőt, IBF-et, jogi reviewert, kontrollgazdákat és minden P0 akció felelősét/jóváhagyóját. | Pásztor András | Lángi Zoltán | 2026-07-01 | P0 | Jóváhagyott projekt-RACI és kitöltött P0 owner/approver mezők. | Aláírt RACI, vezetői döntés, actions.csv review log. | DERIVED\|SRC-001:p2; oldal: 2 | authority | NEW | G2_SECURITY_LEGAL |
| A-031 | Hirdesse ki az AI-adatminősítési, redakciós, forráshierarchia-, prompt-injection- és proposal-only szabályt. | Pásztor András | Lángi Zoltán | 2026-07-03 | P0 | Jóváhagyott AI usage rule és felhasználói visszaigazolás. | Policy note, acknowledgement, minta redakció, környezetengedély. | DERIVED_FROM_PROJECT_RISK; oldal: n/a | derived | NEW | G2_SECURITY_LEGAL |
| A-004 | Validálja az audit finding-regisztert mintavétellel és kivétellistával; jelölje az emberileg ellenőrzött rekordokat. | Pásztor András | Lángi Zoltán | 2026-07-06 | P0 | Emberileg ellenőrzött audit finding-regiszter és parser-hibajegy. | Mintavételi jegyzőkönyv, exception log, human_validated mező, reviewer sign-off. | SRC-002:p19–380\|MACHINE_EXTRACT; oldal: 19–380 | machine_unvalidated | NEW | G1_DOMAIN_REVIEW |
| A-012 | Vezesse be az evidence manifestet és acceptance workflow-t: forrás, dátum, EIR, kontroll, hash, készítő, reviewer, státusz. | Pásztor András | Lángi Zoltán | 2026-07-10 | P0 | Működő evidence register és review workflow. | védett belső URI-k, hash manifest, review log, visszautasítási okok. | SRC-002; oldal: 7 | audited | NEW | G2_SECURITY_LEGAL |
| A-005 | Térképezze a findingokat követelménycsaládhoz, kontrollhoz, EIR-hez, akcióhoz, emberi gazdához és evidenciatípushoz. | Pásztor András | Lángi Zoltán | 2026-07-11 | P0 | Jóváhagyott control-action-evidence mapping. | Mapping review log, hiány- és duplikációlista, owner sign-off. | SRC-001:p2\|SRC-002:p9–10; oldal: 2;9–10 | authority | NEW | G1_DOMAIN_REVIEW |
| A-011 | Frissítse az EIR-, eszköz-, adat-, tulajdonos-, helyszín- és függőségi leltárt. | Pásztor András | Lángi Zoltán | 2026-07-16 | P0 | Jóváhagyott EIR/asset/dependency register. | Read-only exportok, tulajdonosi jóváhagyás, adatfolyam- és függőségi lista. | SRC-002; oldal: 6;25;153;242;332 | audited | NEW | G1_DOMAIN_REVIEW |
| A-006 | Készítse el a teljes hatósági cselekvési terv első tervezetét a 19 követelménycsalád szerint. | Pásztor András | Lángi Zoltán | 2026-07-26 | P0 | Cselekvési terv tervezet. | Minden tételhez követelménycsalád, feladat, név szerinti felelős, dátum, deliverable, evidencia és forrás. | SRC-001; oldal: 1–2 | authority | NEW | G4_EXTERNAL_SUBMISSION |
| A-007 | Végezze el a szakmai, jogi és vezetői felülvizsgálatot, majd ember nyújtsa be a jóváhagyott tervet. | Pásztor András | Lángi Zoltán | 2026-09-24 | P0 | Benyújtott csomag és átvételi igazolás. | Aláírt terv, jóváhagyási lánc, benyújtási és átvételi bizonyíték. | SRC-001; oldal: 1–2 | authority | NEW | G4_EXTERNAL_SUBMISSION |
| A-008 | Hozza létre a beszámolási naptár, adatvágás, sablon, felelős és jóváhagyási workflow tervezetét. | Pásztor András | Lángi Zoltán | relative_to_action_plan_submission | P0 | Jóváhagyott riportnaptár és beszámolósablon. | Naptárbejegyzés, adatcut-off szabály, sablon, dry run és jóváhagyás. | SRC-001; oldal: 1–2 | authority | NEW | G4_EXTERNAL_SUBMISSION |
| A-032 | Hozzon létre helyi eval-harness-t és legalább 10 emberileg jóváhagyott gold case-t. | Pásztor András | Lángi Zoltán | 2026-07-17 | P1 | Eval baseline, gold cases és defect log. | Tesztfutás, reviewed examples, trace/output, hibajegy és javítási kör. | DERIVED_FROM_PROJECT_RISK; oldal: n/a | derived | NEW | G1_DOMAIN_REVIEW |
| A-009 | Alakítson ki szabályzatgazdát, review naptárt, esemény-triggerlistát, változásnaplót és kihirdetési evidenciát. | Pásztor András | Lángi Zoltán | 2026-07-26 | P1 | Szabályzat-életciklus eljárás. | Review log, verziótörténet, jóváhagyás, kihirdetés és megismerési nyom. | SRC-002; oldal: 19–21 | audited | NEW | G1_DOMAIN_REVIEW |
| A-010 | Hozzon létre éves erőforrás- és költségtervet, kivétel-/halasztási naplót és purchase trigger folyamatot. | Pásztor András | Lángi Zoltán | 2026-07-26 | P1 | Jóváhagyott erőforrásterv és exception log. | Budget extract, kapacitásterv, döntési napló, halasztási kockázat. | SRC-002; oldal: 22 | audited | NEW | G5_PURCHASE |
| A-030 | Készítse el a jóváhagyott 2027.09.30-i belső céldátumhoz tartozó negyedéves readiness gate-eket és legalább egy mock audit ütemezését. | Pásztor András | Lángi Zoltán | 2027-09-30 | P1 | Repeat-audit roadmap. | Jóváhagyott target, mock audit naptár, javítási buffer és auditor-procurement gate. | SRC-001; oldal: 1–2 | authority | NEW | G4_EXTERNAL_SUBMISSION |
| A-042 | Tervezzen, pilotoljon és fokozatosan vezessen be local-first folyamatos auditfelkészültségi ügynököt, amely jóváhagyott read-only forrásokat értelmez, karbantartja a nyilvántartásokat, jegyzőkönyv- és intézkedéstervezeteket készít, határidőt figyel és kivételt terjeszt ember elé. | Pásztor András | Lángi Zoltán | after_dependency_completion + 30 nap | P1 | Jóváhagyott agent-architektúra, fájlalapú pilot, runbook, approval queue és mérési riport. | Forrás- és jogosultságlista, futási auditlog, source_ref/confidence/review nyom, gold case és negatív teszt, téves riasztási és emberimunka-csökkentési metrika, kill switch próba. | DECISIONS.md:D-024\|DERIVED; oldal: n/a | derived | NEW | G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G3_PRODUCTION_CHANGE |
| A-034 | Dokumentálja a két EIR scope-ját, tulajdonosát, assetjeit, függőségeit és következő audit/readiness tervét. | Pásztor András | Lángi Zoltán | 2026-09-24 | P2 | EIR scope and readiness record. | EIR definition, owner sign-off, asset/dependency list és döntési napló. | SRC-002; oldal: 6 | audited | NEW | G1_DOMAIN_REVIEW |

## 2. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-015 | Készítsen read-only stale/duplicate account és kritikus hozzáférési review-t, majd onboarding/offboarding eljárást. | Pásztor András | Lángi Zoltán | 2026-08-10 | P1 | Access review csomag és jóváhagyott életciklus-eljárás. | Read-only export, alkalmazásgazdai döntések, change ticket és visszaellenőrzés. | SRC-002:p116,205,295\|SRC-003:p3; oldal: 116;205;295;stratégia 3. oldal | audited | NEW | G3_PRODUCTION_CHANGE |
| A-027 | Tartsa fenn a szeparációt, amíg licenc-, banki/könyvelési kulcs-, workload- és kockázatelemzés nem igazolja az összevonást. | Pásztor András | Lángi Zoltán | management_schedule + 60 nap | P2 | RDS decision record. | User/CAL mátrix, secret/key scope, teljesítményadat, kockázati sign-off. | SRC-004; oldal: munkadokumentum 133–137.,164. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |

## 3. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-014 | Készítsen minimum szerepkör-alapú képzési programot, tudásellenőrzést és bizonyítható nyilvántartást. | Pásztor András | Lángi Zoltán | 2026-08-25 | P1 | Képzési terv, anyag, teszt és nyilvántartás. | Jelenlét/átvétel, teszteredmény, anyagverzió, utánkövetés. | SRC-002; oldal: 38–44 | audited | NEW | G1_DOMAIN_REVIEW |

## 4. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-018 | Hozzon létre minimum log source matrixot, retentiont, hibariasztást és napi/heti review eljárást meglévő eszközökkel. | Pásztor András | Lángi Zoltán | 2026-09-09 | P1 | Log source matrix, retention és review log. | Mintalog, alert teszt, review ticket, retention proof, exception log. | SRC-002; oldal: 126–135;216–224;305–314 | audited | NEW | G1_DOMAIN_REVIEW |

## 5. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-018 | Hozzon létre minimum log source matrixot, retentiont, hibariasztást és napi/heti review eljárást meglévő eszközökkel. | Pásztor András | Lángi Zoltán | 2026-09-09 | P1 | Log source matrix, retention és review log. | Mintalog, alert teszt, review ticket, retention proof, exception log. | SRC-002; oldal: 126–135;216–224;305–314 | audited | NEW | G1_DOMAIN_REVIEW |

## 6. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-011 | Frissítse az EIR-, eszköz-, adat-, tulajdonos-, helyszín- és függőségi leltárt. | Pásztor András | Lángi Zoltán | 2026-07-16 | P0 | Jóváhagyott EIR/asset/dependency register. | Read-only exportok, tulajdonosi jóváhagyás, adatfolyam- és függőségi lista. | SRC-002; oldal: 6;25;153;242;332 | audited | NEW | G1_DOMAIN_REVIEW |
| A-019 | Vezessen be baseline-, patch-, karbantartási- és változásnaptárt bizonyítékokkal, kivétel- és rollback-kezeléssel. | Pásztor András | Lángi Zoltán | 2026-08-10 | P1 | Jóváhagyott maintenance/patch/change workflow. | Baseline export, patch report, change ticket, exception, rollback proof. | SRC-002; oldal: 54–59;146–153;196;238–242;285;328–334;375 | audited | NEW | G3_PRODUCTION_CHANGE |
| A-028 | Csak assessmentet készítsen szerepkör, HA, site, DNS/DHCP, backup, licenc és rollback vizsgálattal. | Pásztor András | Lángi Zoltán | management_schedule + 60 nap | P2 | AD/DHCP consolidation assessment. | Current role export, failure scenario, test plan, licenc- és rollback-hatás. | SRC-004; oldal: munkadokumentum 34–36.,118–120.,172. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |

## 7. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-017 | Határozza meg a backup scope/RPO/RTO mátrixot és hajtson végre dokumentált restore tesztet kritikus EIR mintán. | Pásztor András | Lángi Zoltán | 2026-07-26 | P0 | Backup matrix és restore test report. | Job log, helyreállított objektum/rendszer, időtartam, hiba, RPO/RTO összevetés és jóváhagyás. | SRC-002; oldal: 158;163–164;247;252–253;337;342–343 | audited | NEW | G3_PRODUCTION_CHANGE |
| A-024 | Készítsen VM dependency-, placement-, capacity-, backup- és licence-tervet; végrehajtás nélkül. | Pásztor András | Lángi Zoltán | after_dependency_completion + 14 nap | P1 | Migration/containment decision package. | Kapacitásmodell, dependency map, test, rollback, licenc review és kockázatelfogadás. | SRC-004\|A-022\|A-029; oldal: munkadokumentum | unverified_internal | NEW | G3_PRODUCTION_CHANGE;G5_PURCHASE |
| A-026 | Készítsen jogi megőrzési, adat-, alkalmazás-, export-, restore/read-test és migrációs döntési csomagot. | Pásztor András | Lángi Zoltán | management_schedule + 45 nap | P1 | Jóváhagyott retention/migration decision. | Jogi állásfoglalás, adatlista, export/restore/read test, owner approval. | SRC-004; oldal: munkadokumentum 111–114., 165–166. bekezdés | unverified_internal | NEW | G2_SECURITY_LEGAL |

## 8. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-015 | Készítsen read-only stale/duplicate account és kritikus hozzáférési review-t, majd onboarding/offboarding eljárást. | Pásztor András | Lángi Zoltán | 2026-08-10 | P1 | Access review csomag és jóváhagyott életciklus-eljárás. | Read-only export, alkalmazásgazdai döntések, change ticket és visszaellenőrzés. | SRC-002:p116,205,295\|SRC-003:p3; oldal: 116;205;295;stratégia 3. oldal | audited | NEW | G3_PRODUCTION_CHANGE |
| A-016 | Végezzen licenc- és technikai gap analysis-t, majd meglévő entitlementtel kockázatarányos privilegizált MFA pilotot. | Pásztor András | Lángi Zoltán | 2026-08-25 | P1 | MFA gap analysis és pilot report. | Licencmátrix, pilot scope, siker/hiba napló, rollback és jóváhagyás. | SRC-002:p167,257,346\|SRC-003:p3; oldal: 167;257;346;stratégia 3. oldal | audited | NEW | G3_PRODUCTION_CHANGE;G5_PURCHASE |

## 9. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-013 | Formalizálja az incidens-életciklust, kontaktpontot, szerepköröket, playbookokat és hajtson végre tabletop gyakorlatot. | Pásztor András | Lángi Zoltán | 2026-08-25 | P1 | Incidenskezelési terv és gyakorlatjegyzőkönyv. | Kontaktlista, ticket/timeline, döntések, lessons learned, javító akciók és résztvevői nyom. | SRC-002; oldal: 45–51 | audited | NEW | G2_SECURITY_LEGAL |

## 10. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-022 | Read-only módszerrel azonnal validálja a hivatkozott hostok, VM-ek, lemezek, RAID és backup állapotát; semmit ne módosítson. | Pásztor András | Lángi Zoltán | risk_trigger + 2 nap | P0 | Aláírt technikai health snapshot és eltéréslista. | Időbélyeges read-only export, RAID log, kapacitás, VM-lista, backup status és reviewer. | SRC-004; oldal: munkadokumentum 155–159. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |
| A-023 | Készítsen freespace/backup-protection emergency change tervet; törlés vagy áthelyezés csak tulajdonosi jóváhagyással. | Pásztor András | Lángi Zoltán | after_dependency_completion + 1 nap | P0 | Jóváhagyott emergency change plan vagy dokumentált no-action döntés. | Pre/post metrika, backup proof, törlési/áthelyezési jóváhagyás, rollback. | SRC-004\|A-022; oldal: munkadokumentum; validációs eredmény | conditional | NEW | G3_PRODUCTION_CHANGE |
| A-019 | Vezessen be baseline-, patch-, karbantartási- és változásnaptárt bizonyítékokkal, kivétel- és rollback-kezeléssel. | Pásztor András | Lángi Zoltán | 2026-08-10 | P1 | Jóváhagyott maintenance/patch/change workflow. | Baseline export, patch report, change ticket, exception, rollback proof. | SRC-002; oldal: 54–59;146–153;196;238–242;285;328–334;375 | audited | NEW | G3_PRODUCTION_CHANGE |
| A-024 | Készítsen VM dependency-, placement-, capacity-, backup- és licence-tervet; végrehajtás nélkül. | Pásztor András | Lángi Zoltán | after_dependency_completion + 14 nap | P1 | Migration/containment decision package. | Kapacitásmodell, dependency map, test, rollback, licenc review és kockázatelfogadás. | SRC-004\|A-022\|A-029; oldal: munkadokumentum | unverified_internal | NEW | G3_PRODUCTION_CHANGE;G5_PURCHASE |

## 11. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-037 | Készítsen adathordozó-leltárt, felelősségi rendet, hozzáférési, törlési, szállítási és újrahasználati minimumeljárást. | Pásztor András | Lángi Zoltán | 2026-08-25 | P1 | Adathordozó-védelmi eljárás és nyilvántartás. | Médialeltár, jóváhagyott törlési módszer, hozzáférési lista, mintajegyzőkönyv és megsemmisítési/újrahasználati bizonyíték. | SRC-002; oldal: 59–64 | audited | NEW | G2_SECURITY_LEGAL |

## 12. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-020 | Végezzen dokumentált helyszíni bejárást, rögzítse a költségmentes gyorsjavításokat, és készítsen kockázatalapú fizikai javítási tervet. | Pásztor András | Lángi Zoltán | 2026-07-26 | P0 | Fizikai gap register és evidence csomag. | Checklist, dátumozott fotó, belépési lista, tesztjegyzőkönyv, intézkedési terv. | SRC-002; oldal: 65–75 | audited | NEW | G2_SECURITY_LEGAL |

## 13. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-040 | Frissítse a három auditált EIR rendszerbiztonsági tervét egységes sablon szerint, függőségekkel, fenyegetésekkel, kontrolltestreszabással és review-ciklussal. | Pásztor András | Lángi Zoltán | 2026-08-25 | P1 | Három jóváhagyott rendszerbiztonsági terv és közös sablon. | Verziózott tervek, EIR-owner és IBF jóváhagyás, dependency/threat mapping, változásnapló és megismertetési nyom. | SRC-002; oldal: 76–80;174–177;264–266;353–356 | audited | NEW | G1_DOMAIN_REVIEW |
| A-026 | Készítsen jogi megőrzési, adat-, alkalmazás-, export-, restore/read-test és migrációs döntési csomagot. | Pásztor András | Lángi Zoltán | management_schedule + 45 nap | P1 | Jóváhagyott retention/migration decision. | Jogi állásfoglalás, adatlista, export/restore/read test, owner approval. | SRC-004; oldal: munkadokumentum 111–114., 165–166. bekezdés | unverified_internal | NEW | G2_SECURITY_LEGAL |

## 14. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-038 | Alakítson ki szerepkör-alapú személyi biztonsági folyamatot a belépéstől a kilépésig, HR/IT/jogi felelősségekkel és határidőkkel. | Pásztor András | Lángi Zoltán | 2026-08-25 | P1 | Jóváhagyott personnel security és joiner-mover-leaver csomag. | Munkakör-besorolás, ellenőrzési szabály, checklist, hozzáférés-visszavonási SLA, nyilatkozat és mintafolyamat-evidencia. | SRC-002; oldal: 81–90 | audited | NEW | G2_SECURITY_LEGAL |

## 15. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-039 | Egységesítse a kockázati módszertant, kockázati étvágyat, nyilvántartást, gazdákat, kezelési döntéseket és felülvizsgálati ciklust. | Pásztor András | Lángi Zoltán | 2026-08-10 | P1 | Jóváhagyott risk methodology, risk register és treatment workflow. | Kockázati skála, elfogadási hatáskör, mintakockázatok, kezelési döntések, review log és vezetői jóváhagyás. | SRC-002; oldal: 90–95;178–179;267–268;357–358 | audited | NEW | G2_SECURITY_LEGAL |
| A-033 | Definiálja a scope-ot, credentialed/non-intrusive módot, javítási SLA-t és használja először a meglévő eszközöket. | Pásztor András | Lángi Zoltán | 2026-09-24 | P1 | Vulnerability assessment and remediation plan. | Scope, G3 approval, scan log, finding register, remediation ticket és retest. | SRC-002; oldal: 178;196;267;285;357;375 | audited | NEW | G3_PRODUCTION_CHANGE;G5_PURCHASE |

## 16. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-029 | Végezzen Windows Server, RDS, M365, Defender, virtualizáció és releváns alkalmazások entitlement/támogatási auditját. | Pásztor András | Lángi Zoltán | 2026-07-26 | P1 | License entitlement and support matrix. | Szerződés/SAM export, host/core/VM/user mapping, support lifecycle és reviewer sign-off. | SRC-002:p182,185,271,274,361,364\|SRC-004; oldal: 182;185;271;274;361;364;munkadokumentum | audited | NEW | G5_PURCHASE |
| A-041 | Vezessen be security-by-procurement minimumkövetelményt, szerződéses checklistet, lifecycle/support gate-et és kivételkezelést. | Pásztor András | Lángi Zoltán | 2026-09-09 | P1 | Jóváhagyott beszerzési biztonsági checklist és szerződéses követelményminta. | Kitöltött mintachecklist, szerződéses klauzulák, support/EOL döntés, kivétel és jóváhagyás. | SRC-002; oldal: 96–100;180–185;269–274;359–364 | audited | NEW | G5_PURCHASE |

## 17. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-025 | Készítsen teljes SMTP relay/client dependency leltárt és teszttervet minden migrációs döntés előtt. | Pásztor András | Lángi Zoltán | management_schedule + 30 nap | P1 | Exchange dependency register és tesztterv. | SMTP log minta, eszköz-/alkalmazásgazda sign-off, teszteredmény és rollback. | SRC-003:p1,3,7\|SRC-004; oldal: stratégia 1.,3.,7. oldal; munkadokumentum | strategy_input | NEW | G1_DOMAIN_REVIEW |
| A-034 | Dokumentálja a két EIR scope-ját, tulajdonosát, assetjeit, függőségeit és következő audit/readiness tervét. | Pásztor András | Lángi Zoltán | 2026-09-24 | P2 | EIR scope and readiness record. | EIR definition, owner sign-off, asset/dependency list és döntési napló. | SRC-002; oldal: 6 | audited | NEW | G1_DOMAIN_REVIEW |
| A-027 | Tartsa fenn a szeparációt, amíg licenc-, banki/könyvelési kulcs-, workload- és kockázatelemzés nem igazolja az összevonást. | Pásztor András | Lángi Zoltán | management_schedule + 60 nap | P2 | RDS decision record. | User/CAL mátrix, secret/key scope, teljesítményadat, kockázati sign-off. | SRC-004; oldal: munkadokumentum 133–137.,164. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |
| A-028 | Csak assessmentet készítsen szerepkör, HA, site, DNS/DHCP, backup, licenc és rollback vizsgálattal. | Pásztor András | Lángi Zoltán | management_schedule + 60 nap | P2 | AD/DHCP consolidation assessment. | Current role export, failure scenario, test plan, licenc- és rollback-hatás. | SRC-004; oldal: munkadokumentum 34–36.,118–120.,172. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |

## 18. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-022 | Read-only módszerrel azonnal validálja a hivatkozott hostok, VM-ek, lemezek, RAID és backup állapotát; semmit ne módosítson. | Pásztor András | Lángi Zoltán | risk_trigger + 2 nap | P0 | Aláírt technikai health snapshot és eltéréslista. | Időbélyeges read-only export, RAID log, kapacitás, VM-lista, backup status és reviewer. | SRC-004; oldal: munkadokumentum 155–159. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |
| A-023 | Készítsen freespace/backup-protection emergency change tervet; törlés vagy áthelyezés csak tulajdonosi jóváhagyással. | Pásztor András | Lángi Zoltán | after_dependency_completion + 1 nap | P0 | Jóváhagyott emergency change plan vagy dokumentált no-action döntés. | Pre/post metrika, backup proof, törlési/áthelyezési jóváhagyás, rollback. | SRC-004\|A-022; oldal: munkadokumentum; validációs eredmény | conditional | NEW | G3_PRODUCTION_CHANGE |
| A-019 | Vezessen be baseline-, patch-, karbantartási- és változásnaptárt bizonyítékokkal, kivétel- és rollback-kezeléssel. | Pásztor András | Lángi Zoltán | 2026-08-10 | P1 | Jóváhagyott maintenance/patch/change workflow. | Baseline export, patch report, change ticket, exception, rollback proof. | SRC-002; oldal: 54–59;146–153;196;238–242;285;328–334;375 | audited | NEW | G3_PRODUCTION_CHANGE |
| A-033 | Definiálja a scope-ot, credentialed/non-intrusive módot, javítási SLA-t és használja először a meglévő eszközöket. | Pásztor András | Lángi Zoltán | 2026-09-24 | P1 | Vulnerability assessment and remediation plan. | Scope, G3 approval, scan log, finding register, remediation ticket és retest. | SRC-002; oldal: 178;196;267;285;357;375 | audited | NEW | G3_PRODUCTION_CHANGE;G5_PURCHASE |
| A-024 | Készítsen VM dependency-, placement-, capacity-, backup- és licence-tervet; végrehajtás nélkül. | Pásztor András | Lángi Zoltán | after_dependency_completion + 14 nap | P1 | Migration/containment decision package. | Kapacitásmodell, dependency map, test, rollback, licenc review és kockázatelfogadás. | SRC-004\|A-022\|A-029; oldal: munkadokumentum | unverified_internal | NEW | G3_PRODUCTION_CHANGE;G5_PURCHASE |
| A-026 | Készítsen jogi megőrzési, adat-, alkalmazás-, export-, restore/read-test és migrációs döntési csomagot. | Pásztor András | Lángi Zoltán | management_schedule + 45 nap | P1 | Jóváhagyott retention/migration decision. | Jogi állásfoglalás, adatlista, export/restore/read test, owner approval. | SRC-004; oldal: munkadokumentum 111–114., 165–166. bekezdés | unverified_internal | NEW | G2_SECURITY_LEGAL |

## 19. követelménycsalád

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-021 | Készítsen beszállítói leltárt, kritikalitást, szerződéses kontroll-gapet és felülvizsgálati naptárt. | Pásztor András | Lángi Zoltán | 2026-09-09 | P1 | Supplier risk register és review terv. | Szerződéslista, kérdőív, kockázati döntés, hiánylista és review proof. | SRC-002:p101–112\|SRC-003:p2; oldal: 101–112;stratégia 2. oldal | audited | NEW | G1_DOMAIN_REVIEW |

## Függelék A – Nem ellenőrzött belső források

| ID | Feladat | Felelős | Jóváhagyó | Határidő / alap | Prioritás | Deliverable | Elvárt evidencia | Forrás és oldal | Forrásbizalom | Státusz | Human gate |
|---|---|---|---|---|---|---|---|---|---|---|---|
| A-022 | Read-only módszerrel azonnal validálja a hivatkozott hostok, VM-ek, lemezek, RAID és backup állapotát; semmit ne módosítson. | Pásztor András | Lángi Zoltán | risk_trigger + 2 nap | P0 | Aláírt technikai health snapshot és eltéréslista. | Időbélyeges read-only export, RAID log, kapacitás, VM-lista, backup status és reviewer. | SRC-004; oldal: munkadokumentum 155–159. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |
| A-024 | Készítsen VM dependency-, placement-, capacity-, backup- és licence-tervet; végrehajtás nélkül. | Pásztor András | Lángi Zoltán | after_dependency_completion + 14 nap | P1 | Migration/containment decision package. | Kapacitásmodell, dependency map, test, rollback, licenc review és kockázatelfogadás. | SRC-004\|A-022\|A-029; oldal: munkadokumentum | unverified_internal | NEW | G3_PRODUCTION_CHANGE;G5_PURCHASE |
| A-026 | Készítsen jogi megőrzési, adat-, alkalmazás-, export-, restore/read-test és migrációs döntési csomagot. | Pásztor András | Lángi Zoltán | management_schedule + 45 nap | P1 | Jóváhagyott retention/migration decision. | Jogi állásfoglalás, adatlista, export/restore/read test, owner approval. | SRC-004; oldal: munkadokumentum 111–114., 165–166. bekezdés | unverified_internal | NEW | G2_SECURITY_LEGAL |
| A-027 | Tartsa fenn a szeparációt, amíg licenc-, banki/könyvelési kulcs-, workload- és kockázatelemzés nem igazolja az összevonást. | Pásztor András | Lángi Zoltán | management_schedule + 60 nap | P2 | RDS decision record. | User/CAL mátrix, secret/key scope, teljesítményadat, kockázati sign-off. | SRC-004; oldal: munkadokumentum 133–137.,164. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |
| A-028 | Csak assessmentet készítsen szerepkör, HA, site, DNS/DHCP, backup, licenc és rollback vizsgálattal. | Pásztor András | Lángi Zoltán | management_schedule + 60 nap | P2 | AD/DHCP consolidation assessment. | Current role export, failure scenario, test plan, licenc- és rollback-hatás. | SRC-004; oldal: munkadokumentum 34–36.,118–120.,172. bekezdés | unverified_internal | NEW | G3_PRODUCTION_CHANGE |

## Függelék B – PROPOSED döntésre támaszkodó tételek

_Nincs ilyen tétel._
