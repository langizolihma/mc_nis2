# Hatósági cselekvési terv – A-006 readiness

```json
{
  "status": "PROPOSAL_NOT_READY_FOR_G4",
  "agent_role": "report_writer",
  "source_refs": ["SRC-001:p1-2", "data/actions.csv", "data/project_dates.json", "generated/action_plan.md"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["19 család teljességi ellenőrzése", "relatív dátumok feloldása", "G1/G2/G4 review-csomag"],
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G4_EXTERNAL_SUBMISSION",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Eredmény röviden

A tervezet szerkezetileg teljes: 127 akcióval lefedi mind a 19 követelménycsaládot és közvetlen intézkedést rendel mind a 156 eltéréssel érintett követelménycsoporthoz. Minden tételhez van feladat, programfelelős, jóváhagyó, deliverable, elvárt evidencia, forrás és D-035 szerinti konkrét belső céldátum. A 2027-09-30-i repeat-audit előtti 60. nap 2027-08-01, az operatív utolsó munkanap 2027-07-30. A tényleges kontrollgazdák egy része, a szakmai G1/G3 review és a teljes terv G4 jóváhagyása még hiányzik. A kanonikus benyújtási határidő 2026-09-24.

A csomag még nem nyújtható be. A validátor 0 hard hibát és 16 warningot jelez; ezek emberi tartalmi, dátum- és jóváhagyási feladatok.

## G4 előtti kötelező munka

1. **G1 szakmai review:** az A-004 finding-minta és az A-005 mapping elfogadása; a 85 új lefedettségpótló akció, felelős, EIR-hatókör, céldátum és evidenciaelvárás véglegesítése a `COVERAGE_MATURATION_REVIEW_2026-08-19.md` és a `data/action_execution_details.csv` alapján.
2. **D-035 ütemezés G4 ellenőrzése:** a mind a 127 tételhez rögzített dátum és az `ACTION_SCHEDULE_2026-08-19.md` végleges tervjóváhagyása.
3. **Nem auditált állítások:** A-022, A-024, A-026, A-027 és A-028 SRC-004 állításainak read-only validációja; addig csak feltételesen szerepelhetnek.
4. **G2 jogi/IBF review:** határidőalap, adatminősítés, személyes adatok, megfogalmazások és külső forma ellenőrzése.
5. **G4 vezetői döntés:** a végleges verzió, aláírás, jogosult benyújtó és benyújtási csatorna jóváhagyása.
6. **Evidencia:** aláírt terv, védett URI, SHA-256, benyújtási visszaigazolás és átvételi igazolás.

## Generált tervezet fejlesztése

A [generált cselekvési terv](generated/action_plan.md) most már külön mutatja:

- a 2026-09-24-i kanonikus benyújtási határidőt;
- a fix dátumot igénylő tételeket;
- az öt tiltott automatikus műveletet;
- a G1/G2/G4 emberi jóváhagyási blokkot;
- a védett evidencia és emberi benyújtás követelményét.

## Gépi ellenőrzés

```powershell
python -m nis2_harness validate-action-plan-submission --actions data\actions.csv --project-dates data\project_dates.json
```
