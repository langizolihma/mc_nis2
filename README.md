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
python -m unittest discover -s tests -v
```

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

Az A-011 read-only terve, az A-032 eval infrastruktúrája, az A-031 AI-policy, az A-030 repeat-audit roadmap és az A-008 negyedéves beszámolási csomag tervezete elkészült. Következő emberi lépés az A-011 owner/export kapu, az A-032 tíz gold case, az A-031 G2 review, az A-030 G4/G5 review, valamint az A-008 tényleges benyújtási anchor- és naptárjóváhagyása. Következő önálló agent-munkacsomagként az A-006 hatósági cselekvésiterv-tervezet teljességi és benyújtás-előkészítő csomagja készíthető el; külső benyújtás nem végezhető.

A cél a rutinszerű emberi munka mérhető minimalizálása. Az ügynök azonban nem fogadhat el evidenciát, nem zárhat le feladatot, nem nyújthat be külső dokumentumot, nem költhet és nem módosíthat éles rendszert emberi jóváhagyás nélkül. A H-002 nem része a jelenlegi H-001 implementációnak, és külön indítást igényel.
