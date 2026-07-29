# Completion report – egyeztetési döntési sablon és változásjavaslat

```json
{
  "status": "PROPOSAL",
  "agent_role": "implementation_orchestrator",
  "source_refs": [
    "data/actions.csv",
    "data/deadline_reconciliation.json",
    "NEXT_EXECUTION_QUEUE_2026-07-16.md"
  ],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [
    "local human decision template",
    "hash-bound reconciliation change proposal",
    "fail-closed conflict and protected-reference validation"
  ],
  "required_human_gate": "CONTROLLED_REGISTRY_UPDATE_AND_EVIDENCE_REVIEW",
  "forbidden_automatic_actions": [
    "apply_changeset",
    "change_action_status",
    "change_target_date",
    "accept_evidence",
    "close_action",
    "submit_external",
    "change_production",
    "purchase"
  ]
}
```

## Eredmény

Elkészült a lejárt akciók egyeztetési folyamatának következő local-first
lépése. A review-csomagból gépi döntési sablon készíthető, a kitöltött
review-állításokból pedig ellenőrzött, de formális hatás nélküli
változásjavaslat állítható elő.

A megoldás:

- a döntést a legfrissebb tervezet ID-jéhez és SHA-256 hash-éhez köti;
- ismeretlen vagy többletmezőt fail-closed módon elutasít;
- konfliktusos tervezet `ACCEPT` döntését megtiltja;
- időzónás reviewer-időpontot és védett
  `metalcom.sharepoint.com/sites/NIS2/` döntési hivatkozást követel;
- visszaküldéshez és elutasításhoz indoklást kér;
- elfogadás esetén sem javasol `DONE` státuszt;
- nem fogad el evidenciát és nem írja át az `actions.csv` fájlt.

## Módosított fájlok

- `src/nis2_harness/reconciliation_changeset.py`
- `src/nis2_harness/cli.py`
- `tests/test_reconciliation_changeset.py`
- `README.md`
- `NEXT_EXECUTION_QUEUE_2026-07-16.md`
- `COMPLETION_REPORT_RECONCILIATION_CHANGE_PROPOSAL_2026-07-29.md`

## Új parancsok

```powershell
python -m nis2_harness build-reconciliation-decision-template `
  --review-package generated/deadline_reconciliation_review_package_2026-07-29.json `
  --output portal_runtime/deadline_reconciliation_decisions.json

python -m nis2_harness build-reconciliation-change-proposal `
  --review-package generated/deadline_reconciliation_review_package_2026-07-29.json `
  --decisions portal_runtime/deadline_reconciliation_decisions.json `
  --json-output generated/deadline_reconciliation_change_proposal_2026-07-29.json `
  --markdown-output generated/deadline_reconciliation_change_proposal_2026-07-29.md
```

## Ellenőrzések

- Célzott egyeztetési tesztek: **18/18 OK**.
- Teljes regressziós tesztkészlet: **290/290 OK**.
- Fő nyilvántartás-validáció: **0 hard error, 1 ismert warning**.
- Határidő-egyeztetési validáció: **0 hard error, 1 elvárt warning**.

## Nyitott emberi feladat

A változásjavaslat csak akkor állítható elő érdemi tartalommal, ha a portálon
legalább egy státusz-egyeztetési tervezet érkezik, a reviewer pedig kitölti a
döntési sablont és a döntési rekordot a védett NIS2 SharePoint-tárba helyezi.
A tényleges akcióstátusz-, céldátum- vagy evidencia-átvezetés továbbra is külön
emberi kontroll és célzott registry-módosítás.
