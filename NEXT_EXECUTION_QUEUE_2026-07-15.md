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

A projekt folyamat szempontjából továbbhaladhat. A kanonikus auditforrás rendelkezésre áll, a határidőalap elfogadott, a pótlandó adminisztratív evidenciák külön naplóban szerepelnek. A D-027 és a `PROJECT_RACI.md` rögzíti a név szerinti folyamatszerepeket. Az A-003/A-012 helyi tervezési és validációs része elkészült. Az A-004/A-005 328 findingot és 104 javasolt mapping-sort tartalmazó gépi alapja szintén elkészült; a G1 mintavétel és owner sign-off hiányában `IN_PROGRESS`. A következő végrehajtható szakmai fókusz az A-011 leltárfrissítési terv.

## Javasolt sorrend

| Sorrend | Akció | Következő eredmény | Felelős | Jóváhagyó | Kapu | Megjegyzés |
|---|---|---|---|---|---|---|
| 1 | A-011 | EIR-, eszköz-, adat-, tulajdonos- és függőségi leltár frissítési tervének megkezdése | Pásztor András | Lángi Zoltán | G1 | Kanonikus céldátuma 2026-07-16; csak jóváhagyott read-only exportok használhatók. |
| Kísérő | A-004; A-005 | A 20 rekordos finding-minta és a 104 mapping-sor owner review-ja | Pásztor András | Lángi Zoltán | G1 | 0 rekord human_validated; 164 unmapped és 43 family-only finding triage-ja nyitott. |
| 3 | A-006 | A hatósági cselekvési terv első teljes szakmai tervezetének felülvizsgálata | Pásztor András | Lángi Zoltán | G4 | Csak az A-004/A-005 és a szerepkörök megerősítése után tekinthető vezetői review-ra késznek. |
| Kísérő | A-003; A-012 | Valós védett URI, vállalati csoportok, store/backup owner, restore próba és emberi ACCEPTED/NEEDS_CHANGES teszt | Pásztor András | Lángi Zoltán | G2 | A helyi struktúra és validator kész; az üres evidence register nem bizonyít működő vállalati tárhelyet. |
| Kísérő | A-001; A-036 | Formális kijelölések, IBF-alkalmasság, vezetői szponzor és belső infrastruktúra-/incidenskezelési kontrollgazda pótlása | Pásztor András | Lángi Zoltán | G2 | A D-027 szerepbaseline használható, de az akciók a DEF-005–DEF-007 lezárásáig nem DONE. |

## Nem blokkoló, de pótlandó

- `DEF-001`: tényleges G2/G4 aláírt nyilatkozat és metaadatai.
- `DEF-002`: SRC-008 védett tárhivatkozása és reviewer-rekordja.
- `DEF-003`: a nem elérhető elsődleges kézbesítési igazolás elfogadott kockázata.
- `DEF-004`: az angol auditigazolás célzott emberi megjelenítési ellenőrzése.
- `DEF-005`: aláírt RACI, formális IBF-kijelölés, hatáskör, helyettesítés és kapcsolódó rekordok.
- `DEF-006`: az IBF besorolási jogcím szerinti alkalmasságának és továbbképzésének igazolása.
- `DEF-007`: belső infrastruktúra-/incidenskezelési kontrollgazda és a Serversystem Kft. szerződéses kontrolljainak review-ja.

## Első emberi munkamenet javasolt napirendje

1. Evidenciatár helyének, store ownerének és jogosultsági csoportjainak megnevezése.
2. A vállalati megőrzési és bizalmassági taxonómia hivatkozásának megadása.
3. Egy ACCEPTED és egy NEEDS_CHANGES workflow-próba végrehajtása.
4. A-004/A-005 mintavételi review módszerének jóváhagyása.

Ez a dokumentum végrehajtási javaslat, nem zár le akciót és nem fogad el evidenciát.
