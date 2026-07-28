# Completion report – SRC-009 jogszabályi előellenőrzés és G1/EIR döntési csomag

## Állapot

`COMPLETED_AS_PROPOSAL` – a gépi előellenőrzés, a döntési segédletek, a portálkivetítés és a SharePoint/Lists munkafelület frissítése elkészült. A katalógus G1 jóváhagyása és az öt EIR besorolása továbbra is emberi feladat.

## Elkészült eredmény

- Hivatalos `SRC-010` baseline készült a 7/2024. (VI. 24.) MK rendelet 2. mellékletéből és a 18/2024. (XII. 30.) MK rendelet 5.3/5.4 módosításából.
- A baseline és az `SRC-009` Excelből kinyert regiszter kontrollonként összevetésre került.
- Eredmény: 914/914 azonosító-, cím- és alkalmazhatósági egyezés; 907 normalizált követelményszöveg-egyezés; a célzott második ellenőrzés után 2 kisebb és 5 tartalmi review-tétel.
- A hét célzott kontroll: `1.10`, `2.17`, `5.3`, `5.4`, `9.24`, `13.3`, `16.66`.
- Az öt EIR-hez kitölthető hatáselemzési és biztonsági osztályba sorolási kérdőív készült.
- A helyi portál a jogszabályi előellenőrzés állapotát és a hét review-tételt is megjeleníti.
- A `DEF-036` helyi nyilvántartása és a tényleges Microsoft Lists sora frissült; státusza továbbra is nyitott.
- A védett SharePoint `A-005/SRC-009` mappában a G1 lap, az összefoglaló, a kérdőív, a részletes összevetés, az összesítés és a hivatalos baseline elérhető.

## Módosított vagy létrehozott fájlok

- `README.md`
- `CONTROL_CATALOG_G1_REVIEW.md`
- `CONTROL_CATALOG_LEGAL_COMPARISON_2026-07-28.md`
- `CONTROL_CATALOG_TARGETED_G1_DECISION_2026-07-28.md`
- `EIR_SECURITY_CLASSIFICATION_QUESTIONNAIRE.md`
- `DEFERRED_EVIDENCE_LOG.md`
- `data/source_register.json`
- `data/control_catalog_review.json`
- `data/official_control_baseline.csv`
- `data/control_catalog_legal_comparison.csv`
- `data/control_catalog_legal_comparison_summary.json`
- `src/nis2_harness/validation.py`
- `src/nis2_harness/portal.py`
- `portal_demo/app.js`
- `tests/test_control_catalog.py`
- `tests/test_portal_mvp.py`

## Külső, felhasználó által engedélyezett változások

SharePoint célmappa:

`https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-005/SRC-009`

Feltöltött vagy frissített fájlok:

- `CONTROL_CATALOG_G1_REVIEW.md`
- `CONTROL_CATALOG_LEGAL_COMPARISON_2026-07-28.md`
- `EIR_SECURITY_CLASSIFICATION_QUESTIONNAIRE.md`
- `control_catalog_legal_comparison.csv`
- `control_catalog_legal_comparison_summary.json`
- `official_control_baseline.csv`

A feltöltés után a mappa tartalma, a fájlnevek és a visszaadott méretek ellenőrzésre kerültek. A Microsoft Lists `DEF-036` megjegyzése mentés után visszaolvasva tartalmazta a 2026-07-28-i előellenőrzési eredményt.

## Futtatott ellenőrzések

- `git diff --check` – sikeres.
- `python -m unittest tests.test_control_catalog tests.test_portal_mvp` – 19 teszt, sikeres.
- `python -m unittest discover -s tests` – 257 teszt, sikeres.
- `python -m nis2_harness validate-control-catalog ...` – 0 hard error, 4 elvárt warning.
- `python -m nis2_harness validate --actions data/actions.csv --project-dates data/project_dates.json` – 0 hard error, 1 korábbról ismert kézbesítésievidencia-warning.
- Titok- és privátkulcs-minták keresése a repositoryban, a `.git` és `tmp` kizárásával – nincs találat.

## Nyitott kockázatok és emberi döntések

1. A hét megjelölt kontroll célzott G1 szakmai/jogi ellenőrzése szükséges; különösen a `9.24`, valamint az `5.3` és `5.4` módosított szövege.
2. Az Excel eredete, verziója és belső felhasználási joga még nincs emberileg elfogadva.
3. Mind az öt EIR osztálya `TBD-HUMAN`; az owner, indoklás, reviewer és döntési hivatkozás hiányzik.
4. A SharePoint XLSX 977503 bájtos példánya nem byteazonos a 970666 bájtos kanonikus helyi forrással; kézi csere és visszaolvasott SHA-256 szükséges.
5. Store-owner és aláírt G1 döntési rekord még nincs.
6. A katalógus nem auditbizonyíték és nem igazol kontrollműködést.

## Tiltott automatikus műveletek

`approve_catalog`, `select_eir_controls`, `accept_evidence`, `close_action`, `submit_external`, `change_production`.

## Git

Ebben a munkamenetben nem történt commit vagy push, mert erre nem érkezett külön utasítás.
