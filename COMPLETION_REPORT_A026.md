# Completion report – A-026 legacy megőrzési és migrációs döntés

## Eredmény

Elkészült a jogi retention, adatleltár, read-only export, izolált restore/read teszt és külön migrációs döntés proposal-only kerete. Sem jogi következtetést, sem tényleges rendszerállapotot nem állapítottunk meg.

## Létrehozott vagy módosított elemek

- `data/legacy_retention_plan.json`: jogi, leltári, export-, teszt- és döntési séma.
- `src/nis2_harness/legacy_retention.py`: forrásbizalom-, G2/G3-, leltár-, export-, teszt- és döntésvalidáció.
- `src/nis2_harness/cli.py`: `validate-legacy-retention` parancs.
- `tests/test_legacy_retention.py`: pozitív és tiltó tesztek.
- `LEGACY_RETENTION_MIGRATION_PLAN.md`: emberi végrehajtási rend.
- `templates/legacy_retention_review_record.md`: kitöltési munkalap.
- `DEFERRED_EVIDENCE_LOG.md`: DEF-025 emberi feladat.
- `README.md`, `NEXT_EXECUTION_QUEUE_2026-07-16.md`, `MANIFEST_H001.sha256`: dokumentáció és integritásjegyzék.

## Ellenőrzések

- Teljes regresszió: 177 teszt, mind sikeres.
- Alap akcióregiszter-validáció: 0 hard hiba, 1 ismert kézbesítési evidencia-warning.
- Célzott CLI-validáció: 0 adatrekord, `NOT_EXECUTED` teszt, 0 hard hiba, 4 elvárt pending warning.
- A Python compile- és a `git diff --check` ellenőrzés sikeres.
- A secret- és manifest-ellenőrzés a végleges állapoton sikeres.

## Nyitott kockázat és emberi döntésigény

- A jogalap, megőrzési idő, legal hold és selejtezési korlát nincs meghatározva.
- Nincs adat-/alkalmazásleltár, owner sign-off vagy exportevidencia.
- Nem történt izolált restore/read teszt.
- A migráció és selejtezés `NOT_AUTHORIZED`.

Az A-026 ezért nem `DONE`; exportot, törlést, leállítást vagy migrációt nem engedélyez.
