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

## Következő munkacsomag és célállapot

A H-002 agent job packaging a stabil H-001 sémára épülő, szerepkörönként elkülönített helyi job-input/output csomagokat és proposal-only kimeneti szerződést készítheti el. Kötelező hosszú távú iránya egy folyamatos auditfelkészültségi ügynök: jóváhagyott logokat és exportokat értelmez, karbantartja a nyilvántartásokat, jegyzőkönyv- és intézkedéstervezeteket készít, figyeli a határidőket, és a kivételeket emberi elfogadásra előterjeszti.

A cél a rutinszerű emberi munka mérhető minimalizálása. Az ügynök azonban nem fogadhat el evidenciát, nem zárhat le feladatot, nem nyújthat be külső dokumentumot, nem költhet és nem módosíthat éles rendszert emberi jóváhagyás nélkül. A H-002 nem része a jelenlegi H-001 implementációnak, és külön indítást igényel.
