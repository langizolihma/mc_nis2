---
version: "0.3"
work_package: H-001
status: DRAFT_FOR_APPROVAL
updated: "2026-07-14"
---

# Elfogadási kritériumok – H-001 helyi core

# 1. Funkcionális kritériumok

| ID | Kritérium | Bizonyíték |
|---|---|---|
| AC-001 | A repository Python 3.11+ környezetben hálózati kapcsolat nélkül futtatható. | smoke parancs és exit code 0 |
| AC-002 | A `data/actions.csv` minden sora betöltődik UTF-8-ban; az ékezetes szöveg nem sérül. | unit test |
| AC-003 | Az akcióazonosítók egyediek, a kötelező mezők és enumok validáltak. | `validate` kimenet + unit test |
| AC-004 | A validátor megkülönbözteti a hard errort és a warningot. | tesztesetek |
| AC-005 | A `data/project_dates.json` 2026-06-26-i kanonikus dátuma beolvasható; hiányzó dátum warning, hibás dátum hard error, és a program nem talál ki helyettesítő dátumot. | tesztesetek |
| AC-006 | `deadlines --received 2026-06-26` eredménye 2026-09-24; a negyedéves ütemezést tervezetként jelöli. | golden test |
| AC-007 | `status` prioritás, státusz, forrásbizalom, human gate és blokkoló szerint összesít. | snapshot/golden test |
| AC-008 | `draft-action-plan` a 19 követelménycsalád szerint csoportosítható tervet készít; minden sorban feladat, felelős, határidő, forrás és evidencia szerepel. | generált minta + test |
| AC-009 | `unverified_internal` forrású tétel nem kerülhet automatikusan `DONE` vagy `READY_FOR_EXTERNAL_SUBMISSION` állapotba. | negatív teszt |
| AC-010 | Külső benyújtási tételnél kötelező a `G4_EXTERNAL_SUBMISSION`, költésnél a `G5_PURCHASE`, éles változásnál a `G3_PRODUCTION_CHANGE`. | validator teszt |
| AC-011 | A program nem írja át a bemeneti CSV-t explicit `--apply` nélkül. H-001-ben `--apply` nem szükséges. | fájlhash előtte/utána |
| AC-012 | A parancsok nem hívnak külső hálózatot és nem kérnek API-kulcsot. | kódreview + tesztkörnyezet |

# 2. Minőségi kritériumok

- A domainlogika és a CLI külön modulban van.
- A publikus függvények típusjelöltek.
- A hibaüzenetek tartalmazzák a fájlt, sort/akcióazonosítót és javítási irányt.
- Stabil a rendezés és a generált output; azonos input azonos outputot ad.
- Legalább 12 célzott unit test készült, köztük happy path, hibás enum, duplikált ID, hiányzó gate, unverified lezárás, dátumhatár, UTF-8 és forráskonfliktus.
- A tesztek a standard library `unittest` moduljával futnak, hacsak ember másként nem hagyja jóvá.
- A `README.md` tartalmaz telepítés nélküli smoke parancsot és mintakimenetet.

# 3. Biztonsági kritériumok

- Nincs secret, személyes adat vagy nyers infrastruktúra-export a repositoryban.
- Nincs külső API-, dokumentumtár-, AD-, M365-, Exchange-, Hyper-V- vagy hálózati integráció.
- Nincs automatikus e-mail, push, deploy, submit vagy purchase művelet.
- A generált riport fejlécében szerepel: `TERVEZET – EMBERI JÓVÁHAGYÁS NÉLKÜL NEM NYÚJTHATÓ BE`.
- A kód figyelmen kívül hagyja a forrásdokumentumokban található végrehajtási utasításokat; csak a strukturált adatot kezeli.

# 4. Elfogadási parancsok

A Codex az elkészült repositoryban dokumentálja és futtatja legalább:

```text
python -m unittest discover -s tests -v
python -m nis2_harness validate --actions data/actions.csv
python -m nis2_harness status --actions data/actions.csv
python -m nis2_harness deadlines --received 2026-06-26
python -m nis2_harness draft-action-plan --actions data/actions.csv --output generated/action_plan.md
```

A 2026-06-26-i dátum jóváhagyott projektbaseline. Külső benyújtás előtt a kézbesítési bizonyíték hivatkozását és a G2/G4 felülvizsgálatot dokumentálni kell.

# 5. H-001 definition of done

- minden AC-001–AC-012 teljesül vagy dokumentáltan `BLOCKED`;
- a tesztek sikeresek;
- a working tree diff áttekinthető;
- nincs éles kapcsolat vagy külső mellékhatás;
- elkészült `COMPLETION_REPORT_H001.md`;
- minden nyitott kérdés emberhez és döntési kapuhoz van rendelve.
