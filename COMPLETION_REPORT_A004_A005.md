# A-004/A-005 végrehajtási jelentés

```json
{
  "status": "PROPOSAL",
  "agent_role": "audit_extractor_and_control_mapper",
  "source_refs": ["SRC-008:p19-381", "data/actions.csv:A-004", "data/actions.csv:A-005"],
  "assumptions": [],
  "confidence": "medium",
  "proposed_changes": [
    "machine-extracted finding register",
    "control-action-evidence mapping",
    "deterministic validation and review protocol"
  ],
  "required_human_gate": "G1_DOMAIN_REVIEW",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Eredmény

Elkészült a 328 rekordos `data/audit_findings.csv` és a 104 soros `data/control_action_mapping.csv`. A loader és validator ellenőrzi a sémát, egyediséget, forrásoldalakat, enumokat, akció- és finding-hivatkozásokat, a mapping konzisztenciáját, valamint az emberi review előfeltételeit.

Az A-004 és A-005 `IN_PROGRESS`. A gépi kivonat 0 rekordja emberileg validált, a mapping minden sora `PROPOSED`. A státuszok csak a `FINDING_REVIEW_2026-07-15.md` szerinti G1 mintavétel és owner sign-off után léphetnek tovább.

## Módosított elemek

- `data/audit_findings.csv`: 328 gépi finding, oldal- és forráshivatkozással.
- `data/control_action_mapping.csv`: akció, kontroll/család, scope, owner és elvárt evidencia kapcsolatai.
- `src/nis2_harness/registry.py`: szigorú finding- és mapping-loader.
- `src/nis2_harness/validation.py`: finding-, review- és mapping-validáció.
- `src/nis2_harness/cli.py`: `validate-findings` parancs.
- `tests/test_findings.py`: öt pozitív/negatív biztonsági teszt.
- `FINDING_REVIEW_2026-07-15.md`: mintavételi jegyzőkönyv, parser-kivétellista, hiány- és review-blokk.
- `data/actions.csv`: A-004/A-005 `IN_PROGRESS`, explicit fennmaradó G1 feladatokkal.

## Ellenőrzések

```text
python -m unittest discover -s tests -v
python -m nis2_harness validate-findings --findings data/audit_findings.csv --mapping data/control_action_mapping.csv --actions data/actions.csv
```

- Unit teszt: **32/32 sikeres**.
- Finding/mapping validáció: **0 hard error, 2 elvárt warning**.
- Warningok: 0 emberileg validált finding; a mapping G1 jóváhagyása függőben.
- Lefedettség: 121 `DIRECT`, 43 `FAMILY_ONLY`, 164 `UNMAPPED`.
- Külső feltöltés, üzenetküldés vagy éles rendszerbeavatkozás: **nem történt**.

## Nyitott emberi feladatok

1. A 20 rekordos rétegzett minta forrással való összevetése és az exception log lezárása.
2. Csak az ellenőrzött rekordok reviewerrel/időbélyeggel történő megjelölése.
3. A 164 `UNMAPPED` és 43 `FAMILY_ONLY` finding szakmai triage-a.
4. A 11 scope-illesztés nélküli mapping-sor hatókörének feloldása.
5. Lángi Zoltán G1 mapping owner sign-offja.

Ezek nélkül egyik akció sem jelölhető `DONE` státuszúra.
