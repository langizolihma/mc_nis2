# Completion report – A-025 Exchange/SMTP függőségi leltár

## Eredmény

Elkészült a read-only felderítési séma, a dependency rekord, hét tesztforgatókönyv és nyolc rollback-követelmény proposal-only csomagja. Éles rendszert nem kérdeztünk le, tesztüzenetet nem küldtünk és migrációt nem engedélyeztünk.

## Létrehozott vagy módosított elemek

- `data/exchange_dependency_plan.json`: forráshelyzet, felderítés, leltár, tesztek és döntési korlát.
- `src/nis2_harness/exchange_dependency.py`: forrásbizalom-, safety-, leltár-, teszt-, rollback- és döntésvalidáció.
- `src/nis2_harness/cli.py`: `validate-exchange-dependency` parancs.
- `tests/test_exchange_dependency.py`: pozitív és tiltó tesztek.
- `EXCHANGE_DEPENDENCY_TEST_PLAN.md`: emberi felderítési és tesztfolyamat.
- `templates/exchange_dependency_record.md`: kitöltési munkalap.
- `DEFERRED_EVIDENCE_LOG.md`: DEF-024 emberi feladat.
- `README.md`, `NEXT_EXECUTION_QUEUE_2026-07-16.md`, `MANIFEST_H001.sha256`: dokumentáció és integritásjegyzék.

## Ellenőrzések

- Teljes regresszió: 167 teszt, mind sikeres.
- Alap akcióregiszter-validáció: 0 hard hiba, 1 ismert kézbesítési evidencia-warning.
- Célzott CLI-validáció: 0 dependency rekord, 7 forgatókönyv, 0 hard hiba, 4 elvárt pending warning.
- A Python compile- és a `git diff --check` ellenőrzés sikeres.
- A secret- és manifest-ellenőrzés a végleges állapoton sikeres.

## Nyitott kockázat és emberi döntésigény

- A tényleges Exchange/SMTP scope, exportmódszer és adatminősítés nincs jóváhagyva.
- Nincs dependency rekord, owner sign-off vagy read-only exportevidencia.
- A tesztek nem futottak, G3 approval és rollback-evidencia nincs.
- A migráció célmodellje és döntése szándékosan `NOT_AUTHORIZED`.

Az A-025 ezért nem `DONE`, és semmilyen éles levelezési változtatást nem engedélyez.
