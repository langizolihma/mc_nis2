# metALCOM NIS2 helyreállítási harness

**Munkacsomag:** H-001  
**Állapot:** `PROPOSAL – emberi felülvizsgálatra`  
**Kanonikus kézhezvétel:** 2026-06-26  
**Számított cselekvésiterv-határidő:** 2026-09-24

Ez a repository egy helyben futó, determinisztikus Python core-t tartalmaz. Beolvassa és validálja a NIS2-akcióregisztert, státuszösszesítést és emberi jóváhagyásra váró cselekvésiterv-tervezetet készít. Az AI által generált szöveg nem jóváhagyás és nem evidencia.

## Hatókör és nem-célok

A H-001 kizárólag fájlalapú registry-, validációs-, határidő- és riportfunkciót valósít meg Python 3.11+ standard library használatával. Nincs LLM/API, Agents SDK, adatbázis, web UI, hálózati hívás, dokumentumtár- vagy éles rendszerkapcsolat. Nem küld üzenetet vagy hatósági dokumentumot, nem változtat éles rendszert és nem indít vásárlást.

Az `alapadatok/` könyvtár eredeti forrásdokumentumokat tartalmazhat, ezért `.gitignore` alatt van. Ezeket nem szabad Gitbe tenni; a harness csak forráshivatkozást és metaadatot kezel.

## Követelmény

- Python 3.11 vagy újabb
- telepítés és külső csomag nélkül futtatható a repository gyökeréből
- UTF-8 terminál ajánlott

## Parancsok

```powershell
python -m nis2_harness validate --actions data/actions.csv
python -m nis2_harness status --actions data/actions.csv
python -m nis2_harness deadlines --received 2026-06-26
python -m nis2_harness draft-action-plan --actions data/actions.csv --output generated/action_plan.md
python -m nis2_harness validate-evidence --evidence data/evidence_register.csv --actions data/actions.csv
python -m nis2_harness validate-findings --findings data/audit_findings.csv --mapping data/control_action_mapping.csv --actions data/actions.csv
python -m nis2_harness validate-inventory --inventory data/inventory_register.json --export-plan config/inventory_export_plan.json
python -m nis2_harness validate-evals --config config/eval_config.json --cases evals/gold_cases.json --output evals/sample_proposal_output.json --defects evals/defect_log.json
python -m nis2_harness validate-ai-policy --policy config/ai_usage_policy.json
python -m nis2_harness validate-repeat-audit --roadmap data/repeat_audit_roadmap.json
python -m nis2_harness validate-quarterly-reporting --plan data/quarterly_reporting_plan.json
python -m nis2_harness validate-action-plan-submission --actions data/actions.csv --project-dates data/project_dates.json
python -m nis2_harness validate-backup-restore --plan data/backup_restore_plan.json
python -m nis2_harness validate-physical-security --plan data/physical_security_walkthrough.json
python -m nis2_harness validate-infrastructure-health --plan data/infrastructure_health_snapshot_plan.json
python -m nis2_harness validate-license-entitlement --plan data/license_entitlement_plan.json
python -m nis2_harness validate-logging-monitoring --plan data/logging_monitoring_plan.json
python -m nis2_harness validate-maintenance-change --plan data/maintenance_change_plan.json
python -m unittest discover -s tests -v
```

### Helyi prezentációs portál

A D-028 célállapot bemutatására dependency-free, kizárólag helyi prezentációs prototípus található a `portal_demo/` könyvtárban. A felület a repository nem érzékeny metaadataiból épül, és demonstrálja az áttekintő dashboardot, feladatlistát, G1–G5 jóváhagyási sort, pótlandó evidenciákat és AI-javaslatokat. Nem éles rendszer, a gombok nem módosítanak adatot.

```powershell
python scripts\build_portal_demo.py --as-of 2026-07-17
python -m http.server 8000 --directory portal_demo
```

Böngészőcím: `http://localhost:8000`. A prezentációs forgatókönyv és biztonsági korlátok a [portal_demo/README.md](portal_demo/README.md) fájlban találhatók.

A `validate` és `status` automatikusan az akciófájl melletti `project_dates.json` rekordot használja. Másik rekord a `--project-dates PATH` argumentummal adható meg.

Mintakimenet:

```text
Összesítés: 0 hard error, 1 warning
Kézhezvétel: 2026-06-26
Számított cselekvésiterv-határidő: 2026-09-24
```

A warningok tényleges száma a regiszter emberi kitöltésével változik.

## Hard error és warning

A hard error hibás vagy biztonsági szabályt sértő adatot jelez, például duplikált azonosítót, ismeretlen enumot, hibás dátumot vagy hiányzó G4/G5/G3 kaput. A `validate` ilyenkor nem nulla exit code-dal tér vissza, a riportgenerálás pedig leáll.

A warning emberi döntést vagy kiegészítést igényel, de nem teszi szerkezetileg érvénytelenné a regisztert. Ilyen a `TBD-HUMAN` felelős, a forráskonfliktus, a hiányzó kézbesítési evidencia vagy a függő G2/G4 review. A jelenlegi regiszterben nincs `TBD-HUMAN` felelős vagy jóváhagyó, az auditjelentés verziókonfliktusát pedig a D-025 és az SRC-008 feloldotta.

Az evidencia-metaadatok külön `data/evidence_register.csv` fájlban szerepelnek. A `validate-evidence` ellenőrzi az akcióhivatkozást, az időzónás időbélyeget, a SHA-256 alakját és az emberi elfogadási előfeltételeket. Az üres induló regiszter warning, nem elfogadott evidencia. A működési és hozzáférési szabályokat az [EVIDENCE_STORAGE.md](EVIDENCE_STORAGE.md) tartalmazza.

Az audit 328 gépi finding-rekordja a `data/audit_findings.csv`, a javasolt kontroll–akció–evidencia kapcsolatok a `data/control_action_mapping.csv` fájlban találhatók. A `validate-findings` szerkezeti és hivatkozási ellenőrzést végez, de nem helyettesíti a G1 szakmai review-t. A rétegzett mintát, parser-kivételeket és jóváhagyási blokkot a [FINDING_REVIEW_2026-07-15.md](FINDING_REVIEW_2026-07-15.md) tartalmazza.

Az A-011 öt EIR-t tartalmazó proposal baseline-ja a `data/inventory_register.json`, a jóváhagyandó read-only források a `config/inventory_export_plan.json` fájlban vannak. A `validate-inventory` megakadályozza a hibás hivatkozást, duplikált azonosítót, nem read-only gyűjtési módot és emberi metaadat nélküli jóváhagyást. A végrehajtási sorrendet az [A011_READONLY_INVENTORY_PLAN.md](A011_READONLY_INVENTORY_PLAN.md) tartalmazza.

Az A-032 local-first eval minimuma a `config/eval_config.json` és `evals/` fájlokban található. A `validate-evals` ellenőrzi a proposal-only kimeneti szerződést, a forráskövetést, az emberi kapukat, az öt tiltott automatikus műveletet, a gold-case approval-metaadatokat és a defect logot. A tíz slot jelenleg `PENDING_HUMAN`; kitöltési rendjük az [A032_EVAL_BASELINE.md](A032_EVAL_BASELINE.md) dokumentumban szerepel.

Az A-031 AI-használati tervezete az [AI_USAGE_POLICY_DRAFT.md](AI_USAGE_POLICY_DRAFT.md) dokumentumban, gépi megfelelője a `config/ai_usage_policy.json` fájlban található. A `validate-ai-policy` kikényszeríti a külső környezet default-deny állapotát, a tiltott adatosztályt, az öt emberi kaput, az öt kötelező automatikus tiltást és a valódi G2 approval-metaadatokat. A D-017 lezárásáig a külső AI-környezet `BLOCKED_PENDING_G2`.

Az A-030 megismételt audit ütemterve a [REPEAT_AUDIT_ROADMAP.md](REPEAT_AUDIT_ROADMAP.md) dokumentumban, gépi megfelelője a `data/repeat_audit_roadmap.json` fájlban található. A `validate-repeat-audit` megőrzi a D-021 szerinti 2027-09-30-i baseline-t, és ellenőrzi a negyedéves readiness kapukat, a mock auditot, a javítási buffert, valamint a G4/G5 korlátokat. A köztes dátumok emberi jóváhagyásig `PROPOSAL` minősítésűek.

Az A-008 negyedéves beszámolási csomagja a [QUARTERLY_REPORTING_KIT.md](QUARTERLY_REPORTING_KIT.md) dokumentumban, gépi naptára a `data/quarterly_reporting_plan.json`, kitölthető mintája pedig a `templates/quarterly_report_template.md` fájlban található. A `validate-quarterly-reporting` megakadályozza a határidő tényleges benyújtásként kezelését evidencia nélkül, ellenőrzi a háromhavi lépéseket, a cut-off–draft–review sorrendet, a kötelező sablonszakaszokat és a G1/G2/G4 kapukat.

Az A-006 benyújtási readiness-csomagja az [ACTION_PLAN_SUBMISSION_READINESS.md](ACTION_PLAN_SUBMISSION_READINESS.md) dokumentumban és a `data/action_plan_submission_checklist.json` fájlban található. A `validate-action-plan-submission` ellenőrzi a 19 követelménycsalád lefedettségét, a kötelező külső tervmezőket, a név szerinti felelősöket, a fix/relatív dátumokat, a függőségeket, a forrásbizalmat és a G4 kaput. A 0 hard hiba nem jelent benyújtási jóváhagyást.

A D-028 szerinti végfelhasználói célfelület egy helyi hálózaton, böngészőből elérhető belső portál. A [LOCAL_PORTAL_BASELINE.md](LOCAL_PORTAL_BASELINE.md) rögzíti a minimális funkciókat és biztonsági korlátokat. A portál tervezési baseline, nem éles deploy-engedély; a Git és a védett evidenciatár háttérrendszer marad.

Az A-017 backup és restore-teszt csomagja a [BACKUP_RESTORE_TEST_PLAN.md](BACKUP_RESTORE_TEST_PLAN.md) dokumentumban, gépi mátrixa a `data/backup_restore_plan.json`, jegyzőkönyve a `templates/restore_test_record.md` fájlban található. A `validate-backup-restore` kikényszeríti az öt EIR lefedését, a pozitív vagy emberre váró RPO/RTO-t, az izolált restore-t, a G3 kaput, a felülírás/törlés tiltását és a szükséges evidenciákat.

Az A-020 fizikai védelmi csomagja a [PHYSICAL_SECURITY_WALKTHROUGH_PLAN.md](PHYSICAL_SECURITY_WALKTHROUGH_PLAN.md) dokumentumban, gépi checklistje és gap-regisztere a `data/physical_security_walkthrough.json`, helyszíni mintája a `templates/physical_walkthrough_record.md` fájlban található. A `validate-physical-security` megakadályozza, hogy bejárás nélküli kontrollhoz megfigyelést vagy megfelelőséget rögzítsenek, és kikényszeríti a kilenc kontrollt, a G2 kaput, a védett evidenciát és a fotókezelési szabályokat.

Az A-022 read-only infrastruktúra-felmérési kerete az [INFRASTRUCTURE_HEALTH_SNAPSHOT_PLAN.md](INFRASTRUCTURE_HEALTH_SNAPSHOT_PLAN.md) dokumentumban, gépi terve a `data/infrastructure_health_snapshot_plan.json`, emberi jegyzőkönyve a `templates/infrastructure_health_snapshot_record.md` fájlban található. A `validate-infrastructure-health` megőrzi az `SRC-004` állításainak `unverified_internal` minősítését, tiltja a távoli kapcsolatot és minden író/törlő/konfigurációs műveletet, valamint G2/G3 jóváhagyást és emberi review-t követel meg a tényként kezelés előtt.

Az A-029 licenc- és supportaudit kerete a [LICENSE_ENTITLEMENT_SUPPORT_AUDIT_PLAN.md](LICENSE_ENTITLEMENT_SUPPORT_AUDIT_PLAN.md) dokumentumban, gépi mátrixa a `data/license_entitlement_plan.json`, emberi munkalapja a `templates/license_entitlement_review_record.md` fájlban található. A `validate-license-entitlement` nem engedi bizonyíték nélkül megfelelőnek vagy támogatottnak minősíteni a hat kötelező kategóriát, tiltja a vásárlás-végrehajtást, és fizetős javaslatnál kikényszeríti a hét költségvédelmi inputot, a `BLOCKED_BY_COST_GATE` státuszt és a G5 kaput.

Az A-018 naplózási és felügyeleti minimuma a [LOGGING_MONITORING_REVIEW_PLAN.md](LOGGING_MONITORING_REVIEW_PLAN.md) dokumentumban, gépi mátrixa a `data/logging_monitoring_plan.json`, napi/heti munkalapja a `templates/log_review_record.md` fájlban található. A `validate-logging-monitoring` kikényszeríti a tíz forráskategóriát, a minimális naplótartalmat, a három emberileg jóváhagyandó retention osztályt, az öt hibariasztást, a napi/heti review-t, a read-only működést és a G1/G2/G3 korlátokat.

Az A-019 maintenance-, patch- és változáskezelési csomagja a [MAINTENANCE_PATCH_CHANGE_WORKFLOW.md](MAINTENANCE_PATCH_CHANGE_WORKFLOW.md) dokumentumban, gépi terve a `data/maintenance_change_plan.json`, emberi jegyzőkönyve a `templates/maintenance_change_record.md` fájlban található. A `validate-maintenance-change` kikényszeríti a négy workstreamet, a tízlépéses jóváhagyási sorrendet, a G3 kaput, a backup/rollback és pre/post bizonyítást, valamint tiltja az automatikus patchtelepítést és a lejárat nélküli kivételt.

Az A-021 beszállítói kockázati csomagja a [SUPPLIER_RISK_REVIEW_PLAN.md](SUPPLIER_RISK_REVIEW_PLAN.md) dokumentumban, üres gépi nyilvántartása a `data/supplier_risk_plan.json`, emberi munkalapja a `templates/supplier_risk_review_record.md` fájlban található. A `validate-supplier-risk` kikényszeríti a 19.1/19.4 kontroll- és finding-lefedettséget, a hat kritikalitási dimenziót, a tíz szerződéses kontrollt, a naptárt és a G1 review-t, miközben tiltja a beszállítói megkeresést, szerződésfeltöltést, automatikus kockázatelfogadást és beszerzést.

Az A-025 Exchange/SMTP függőségi csomagja az [EXCHANGE_DEPENDENCY_TEST_PLAN.md](EXCHANGE_DEPENDENCY_TEST_PLAN.md) dokumentumban, üres gépi leltára a `data/exchange_dependency_plan.json`, emberi munkalapja a `templates/exchange_dependency_record.md` fájlban található. A `validate-exchange-dependency` megőrzi az SRC-003 stratégiai és SRC-004 nem igazolt forráshelyzetét, kikényszeríti a hét read-only felderítési forrást, hét tesztforgatókönyvet, nyolc rollback-elemet és a G1/G3 kaput, miközben tilt minden automatikus lekérdezést, tesztküldést és migrációt.

Az A-026 legacy megőrzési és migrációs döntési csomagja a [LEGACY_RETENTION_MIGRATION_PLAN.md](LEGACY_RETENTION_MIGRATION_PLAN.md) dokumentumban, üres gépi terve a `data/legacy_retention_plan.json`, emberi munkalapja a `templates/legacy_retention_review_record.md` fájlban található. A `validate-legacy-retention` megőrzi az SRC-004 `unverified_internal` minősítését, kikényszeríti a G2/G3 kaput, a jogi retention döntést, adatleltárt, exportbizonyítást és izolált restore/read tesztet, miközben tiltja a jogalap kitalálását, exportot, törlést, leállítást és migrációt.

Az A-027 RDS-szeparációs csomagja az [RDS_SEPARATION_DECISION_PLAN.md](RDS_SEPARATION_DECISION_PLAN.md) dokumentumban, üres gépi terve a `data/rds_separation_plan.json`, emberi munkalapja a `templates/rds_separation_review_record.md` fájlban található. A `validate-rds-separation` megőrzi az SRC-004 `unverified_internal` minősítését, kikényszeríti a hat assessment domaint, öt tesztet, G1/G3/G5 kaput és költségvédelmet; evidencia hiányában a jelenlegi szeparációt tartja fenn, és tiltja a konszolidációt.

Az A-023/A-024/A-028/A-033/A-034 technikai döntés-előkészítő csomagjai a [TECHNICAL_REMEDIATION_WORK_PACKAGES.md](TECHNICAL_REMEDIATION_WORK_PACKAGES.md) dokumentumban és a `data/technical_work_packages.json` regiszterben találhatók. A közös `validate-work-packages` validátor tiltja az automatikus végrehajtást, evidenciaelfogadást, akciózárást, vásárlást és külső benyújtást; minden fizetős opcióhoz kikényszeríti a hét költségvédelmi inputot.

```powershell
python -m nis2_harness validate-work-packages --registry data/technical_work_packages.json
```

Az A-009/A-010/A-013–A-016 szervezeti és működési kontrollok előkészítése az [OPERATIONAL_CONTROL_WORK_PACKAGES.md](OPERATIONAL_CONTROL_WORK_PACKAGES.md) útmutatóban és a `data/operational_control_work_packages.json` regiszterben található. A regiszter ugyanazzal a `validate-work-packages` paranccsal ellenőrizhető.

Az A-001/A-002/A-007/A-035/A-036 irányítási akciók jóváhagyott baseline-jait és pótlandó evidenciáit a [GOVERNANCE_EVIDENCE_CHAIN.md](GOVERNANCE_EVIDENCE_CHAIN.md) és a `data/governance_work_packages.json` választja szét. Külső benyújtás változatlanul kizárólag emberi G4 döntéssel történhet.

Az A-037–A-041 szabályozási baseline-ok a [POLICY_BASELINE_WORK_PACKAGES.md](POLICY_BASELINE_WORK_PACKAGES.md), a `data/policy_baseline_work_packages.json` és a `templates/control_policy_baseline.md` fájlokban találhatók. Ezek kitöltési és review-keretek, nem hatályos szabályzatok.

Az A-042 fájlalapú, local-first pilotja a [CONTINUOUS_ASSURANCE_AGENT_PILOT.md](CONTINUOUS_ASSURANCE_AGENT_PILOT.md) szerint futtatható. Csak allowlistelt szintetikus metaadatot dolgoz fel, proposalokat, approval queue-t és auditlogot készít; minden automatikus elfogadó, lezáró, külső, fizetős vagy éles művelet tiltott.

Az előkészítési állapot összesítése: [PREPARATION_COVERAGE_REPORT_2026-07-17.md](PREPARATION_COVERAGE_REPORT_2026-07-17.md). Mind a 42 akcióhoz van completion report; a következő szakasz emberi evidenciagyűjtés és kapus végrehajtás a [NEXT_EXECUTION_QUEUE_2026-07-16.md](NEXT_EXECUTION_QUEUE_2026-07-16.md) szerint.

Az éles változtatás igénye nem következtethető biztonságosan szabad szövegből. Új vagy szintetikus regiszterben az opcionális `production_change=yes` mező explicit módon aktiválja a G3-validációt. A meglévő regiszterben a jóváhagyott `human_gate` metaadat marad a kanonikus jelölés.

## Fontos adatmezők

- `action_id`: egyedi akcióazonosító.
- `requirement_family`: egy vagy több, pontosvesszővel elválasztott követelménycsalád.
- `source_ref`, `source_page`, `source_confidence`: forrás és bizonytalanság.
- `task`, `deliverable`, `evidence_required`: feladat és elfogadási nyom.
- `human_owner`, `human_approver`: emberi felelős és jóváhagyó.
- `deadline_basis`, `target_offset_days`, `target_date`: határidőalap.
- `human_gate`: pontosvesszővel elválasztott G1–G5 kapulista.
- `external_submission`: külső benyújtás jelzője.
- `production_change`: opcionális explicit G3-követelményjelző.

Az engedélyezett enumokat a [CODEX_HANDOFF.md](CODEX_HANDOFF.md) és a `validation.py` tartalmazza.

## Biztonsági korlátok

- A bemeneti CSV és JSON nem módosul.
- Eredeti auditanyag, secret, személyes adat és nyers infrastruktúra-export nem kerülhet Gitbe.
- A generált riport kötelezően `PROPOSAL`, és nem nyújtható be G4 jóváhagyás nélkül.
- Külön elsődleges kézbesítési igazolás nem áll rendelkezésre. A 2026-06-26-i baseline-t a D-022 emberi elfogadás mellett az SRC-007 mentett belső levelezés is alátámasztja, de nem helyettesíti a cégkapus bizonylatot. A D-026 engedélyezi a folyamat továbbhaladását; a tényleges G2/G4 aláírás, tárhivatkozás és reviewer-rekord a `DEFERRED_EVIDENCE_LOG.md` szerint külső benyújtás előtt pótlandó.

## Projektirányítás

A D-027 alapján a projektvezető Kóczán Mónika, az IBF folyamatszerepét Lángi Zoltán, a jogi review-t Dr. Berta Brigitta látja el. A HR-kontrollgazda Koncz Erika, a fizikai védelmi kontrollgazda Német Péter, az infrastruktúra és incidenskezelés technikai végrehajtója Kollár Csaba, a Serversystem Kft. szerződéses partnere. A részletes szerepelválasztást és korlátokat a [PROJECT_RACI.md](PROJECT_RACI.md) tartalmazza.

Az aláírt kijelölések, az IBF besorolási jogcím szerinti alkalmassági evidenciája, a vezetői szponzor és a külső technikai végrehajtó mellé szükséges belső infrastruktúra-/incidenskezelési kontrollgazda még nyitott. Ezeket a `DEF-005`–`DEF-007` tételek követik; az A-001 és A-036 ezért `IN_PROGRESS`, nem `DONE`.

## Következő munkacsomag és célállapot

Az A-011 read-only terve, az A-032 eval infrastruktúrája, az A-031 AI-policy, az A-030 repeat-audit roadmap, az A-008 negyedéves beszámolási csomag, az A-006 cselekvésiterv-readiness, az A-017 backup/restore, az A-020 fizikai bejárás, az A-022 infrastruktúra-health, az A-029 licenc/support, az A-018 naplófelügyelet, az A-019 változáskezelés, az A-021 beszállítói kockázat, az A-025 Exchange-függőség, az A-026 legacy retention és az A-027 RDS-szeparáció módszertana elkészült. A D-028 célállapot prezentációs prototípusa a `portal_demo/` könyvtárban van; élesítése a DEF-015/DEF-020 kapui mögött marad. Következő emberi lépés az A-027 assessment-, licenc-, G1/G3/G5- és tesztevidencia-adatainak kitöltése. Következő önálló agent-munkacsomagként az A-028 AD/DHCP konszolidációs assessment készíthető elő.

A cél a rutinszerű emberi munka mérhető minimalizálása. Az ügynök azonban nem fogadhat el evidenciát, nem zárhat le feladatot, nem nyújthat be külső dokumentumot, nem költhet és nem módosíthat éles rendszert emberi jóváhagyás nélkül. A H-002 nem része a jelenlegi H-001 implementációnak, és külön indítást igényel.
