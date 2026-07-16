# A-003/A-012 végrehajtási jelentés

```json
{
  "status": "PROPOSAL",
  "agent_role": "evidence_curator",
  "source_refs": ["SRC-008:p7", "data/actions.csv:A-003", "data/actions.csv:A-012"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [
    "product-independent protected evidence-store design",
    "metadata-only evidence register",
    "human acceptance workflow and deterministic validator"
  ],
  "required_human_gate": "G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": [
    "accept_evidence",
    "close_action",
    "submit_external",
    "change_production",
    "purchase"
  ]
}
```

## Eredmény

Az A-003/A-012 helyi, termékfüggetlen minimuma elkészült. A harness most már külön, metaadat-only evidenciaregisztert olvas és validál; ellenőrzi az akcióhivatkozást, időzónás időbélyeget, SHA-256 formátumot, forrásbizalmat és az emberi elfogadás előfeltételeit. `ACCEPTED` vagy `SUPERSEDED` státusz nem érvényes valós védett URI, hash, besorolás, reviewer, review-időpont és döntési hivatkozás nélkül.

Az A-003 és A-012 `IN_PROGRESS`: a tényleges vállalati védett tárhely, hozzáférési csoportok, store/backup owner, mentési-visszaállítási bizonyíték és emberi workflow-próba még nem áll rendelkezésre.

## Létrehozott vagy módosított elemek

- `EVIDENCE_STORAGE.md`: mappastruktúra, fájlnévszabály, hozzáférési szerepek, státuszworkflow és aktiválási checklist.
- `config/evidence_store.example.json`: termékfüggetlen, `TBD-HUMAN` értékeket megőrző tárhely-konfigurációminta.
- `data/evidence_register.csv`: üres, kanonikus evidencia-metaadat-regiszter fejléc.
- `src/nis2_harness/registry.py`: `EvidenceRecord` és UTF-8 CSV-betöltés.
- `src/nis2_harness/validation.py`: evidencia-életciklus és elfogadási validáció.
- `src/nis2_harness/cli.py`: `validate-evidence` parancs.
- `tests/test_evidence.py`: nyolc pozitív és negatív evidencia-workflow és séma teszt.
- `data/actions.csv`: A-003/A-012 `IN_PROGRESS`, a hátralévő emberi lépések explicit megjegyzésével.
- `generated/action_plan.md`, `README.md`, `NEXT_EXECUTION_QUEUE_2026-07-15.md`: frissített állapot és használat.

## Ellenőrzések

```text
python -m unittest discover -s tests -v
python -m nis2_harness validate --actions data/actions.csv
python -m nis2_harness validate-evidence --evidence data/evidence_register.csv --actions data/actions.csv
python -m nis2_harness draft-action-plan --actions data/actions.csv --output generated/action_plan.md
python -m compileall -q src nis2_harness tests
```

- Unit teszt: **27/27 sikeres**.
- Akcióregiszter: **0 hard error, 1 warning** – a külön elsődleges kézbesítési igazolás hiánya.
- Evidenciaregiszter: **0 hard error, 1 warning** – az induló regiszter még üres.
- Éles tárhely-, jogosultság- vagy rendszerbeavatkozás: **nem történt**.

## Nyitott emberi döntések és evidenciák

1. A SharePoint- vagy védett fájlmegosztási gyökér-URI és tárhelytípus kijelölése.
2. Store owner, backup owner, administrator, contributor, reviewer és reader csoportok megnevezése.
3. Vállalati megőrzési és bizalmassági taxonómia megadása; a harness nem talál ki besorolást.
4. Verziózás, auditnapló, backup és visszaállítási próba bizonyítása.
5. Egy DRAFT → SUBMITTED → ACCEPTED és egy NEEDS_CHANGES emberi teszteset végrehajtása.
6. G2 biztonsági/jogi jóváhagyás. Ezek teljesülése nélkül egyik akció sem jelölhető `DONE` státuszúra.
