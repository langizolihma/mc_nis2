# Következő végrehajtási sor – 2026-07-15

```json
{
  "status": "PROPOSAL",
  "agent_role": "implementation_orchestrator",
  "source_refs": ["data/actions.csv", "generated/action_plan.md", "DECISIONS.md:D-026"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["execute overdue and near-term P0 governance and evidence tasks in dependency order"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Helyzet

A projekt folyamat szempontjából továbbhaladhat. A kanonikus auditforrás rendelkezésre áll, a határidőalap elfogadott, a pótlandó adminisztratív evidenciák külön naplóban szerepelnek. A következő fókusz a cselekvési terv szakmai megerősítése és a lejárt vagy közeli P0 feladatok tényleges végrehajtása.

## Javasolt sorrend

| Sorrend | Akció | Következő eredmény | Felelős | Jóváhagyó | Kapu | Megjegyzés |
|---|---|---|---|---|---|---|
| 1 | A-001; A-036 | IBF, jogi reviewer, kontrollgazdák és projekt-RACI tényleges kijelölése | Pásztor András | Lángi Zoltán | G2 | A név szerinti akciófelelősök rögzítve vannak, de a szakmai szerepkörök és hatáskörök még igazolandók. |
| 2 | A-003; A-012 | Evidenciatár-struktúra, evidence register és elfogadási workflow | Pásztor András | Lángi Zoltán | G2 | Ez szükséges ahhoz, hogy a további teljesítések ne dokumentálatlan fájlokként keletkezzenek. |
| 3 | A-004; A-005 | Emberileg ellenőrzött finding-regiszter és control-action-evidence mapping | Pásztor András | Lángi Zoltán | G1 | A 42 akció szakmai megfelelőségének és lefedettségének alapja. |
| 4 | A-011 | EIR-, eszköz-, adat-, tulajdonos- és függőségi leltár frissítési tervének megkezdése | Pásztor András | Lángi Zoltán | G1 | Kanonikus céldátuma 2026-07-16; csak jóváhagyott read-only exportok használhatók. |
| 5 | A-006 | A hatósági cselekvési terv első teljes szakmai tervezetének felülvizsgálata | Pásztor András | Lángi Zoltán | G4 | Csak az A-004/A-005 és a szerepkörök megerősítése után tekinthető vezetői review-ra késznek. |

## Nem blokkoló, de pótlandó

- `DEF-001`: tényleges G2/G4 aláírt nyilatkozat és metaadatai.
- `DEF-002`: SRC-008 védett tárhivatkozása és reviewer-rekordja.
- `DEF-003`: a nem elérhető elsődleges kézbesítési igazolás elfogadott kockázata.
- `DEF-004`: az angol auditigazolás célzott emberi megjelenítési ellenőrzése.

## Első emberi munkamenet javasolt napirendje

1. A-001/A-036 szerepkörök és hatáskörök megerősítése.
2. Evidenciatár helyének és jogosultsági csoportjának megnevezése.
3. A 42 akció közül a P0 feladatok szakmai elfogadása vagy módosítása.
4. A-004/A-005 mintavételi review módszerének jóváhagyása.

Ez a dokumentum végrehajtási javaslat, nem zár le akciót és nem fogad el evidenciát.
