# A-032 végrehajtási jelentés

```json
{
  "status": "PROPOSAL",
  "agent_role": "qa_auditor",
  "source_refs": ["DERIVED_FROM_PROJECT_RISK", "data/actions.csv:A-032"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": ["local eval validator", "ten pending gold-case slots", "defect workflow"],
  "required_human_gate": "G1_DOMAIN_REVIEW",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production", "purchase"]
}
```

## Eredmény

Elkészült az A-032 local-first minimuma: proposal-only kimeneti szerződés, forrás- és guardrail-validáció, tíz emberileg kitöltendő gold-case slot, mintakimenet, defect log és determinisztikus metrikakiírás. A harness nem használ LLM-et, hálózatot vagy külső szolgáltatást.

Az A-032 nem kész és nem zárható le. A tíz slotból 0 emberileg jóváhagyott; így jóváhagyott case pass rate még nem számítható.

## Fájlok

- `src/nis2_harness/evals.py`: eval-, gold-case-, output- és defect-validáció.
- `config/eval_config.json`: proposal küszöbök és kötelező guardrailek.
- `evals/gold_cases.json`: tíz `PENDING_HUMAN` slot.
- `evals/sample_proposal_output.json`: szerkezetileg helyes, nem szakmai gold answer.
- `evals/defect_log.json`: üres induló hibajegy-nyilvántartás.
- `tests/test_evals.py`: pozitív és negatív guardrail tesztek.
- `A032_EVAL_BASELINE.md`: emberi kitöltési, approval- és retest runbook.

## Ellenőrzés

```text
python -m unittest discover -s tests -v
python -m nis2_harness validate-evals --config config/eval_config.json --cases evals/gold_cases.json --output evals/sample_proposal_output.json --defects evals/defect_log.json
```

- Unit teszt: **52/52 sikeres** az első teljes körben.
- Eval-validáció: **0 hard error, 1 elvárt warning** – 0/10 human approved gold case.
- Külső hívás vagy éles művelet: **nem történt**.

## Nyitott emberi feladat

A tíz redaktált bemenet, elvárt eredmény, forrás, kapu és tiltás szakmai megadása; reviewer, időbélyeg és döntési hivatkozás; teljes eval-futtatás; hiba esetén defect és retest. Ezek nélkül a kanonikus A-032 státusz nem módosítható `DONE` értékre.
