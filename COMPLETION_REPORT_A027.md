# Completion report – A-027 RDS-szeparációs döntés

## Eredmény

Elkészült a hat assessment domainből, öt kontrollált tesztből, költségkapuból és konszolidációs döntési kapuból álló proposal-only csomag. A jelenlegi szeparáció marad az átmeneti alap; konszolidációt vagy éles lekérdezést nem hajtottunk végre.

## Létrehozott vagy módosított elemek

- `data/rds_separation_plan.json`: assessment-, teszt-, költség- és döntési séma.
- `src/nis2_harness/rds_separation.py`: forrásbizalom-, G1/G3/G5-, assessment-, teszt- és döntésvalidáció.
- `src/nis2_harness/cli.py`: `validate-rds-separation` parancs.
- `tests/test_rds_separation.py`: pozitív és tiltó tesztek.
- `RDS_SEPARATION_DECISION_PLAN.md`: emberi felmérési és döntési rend.
- `templates/rds_separation_review_record.md`: kitöltési munkalap.
- `DEFERRED_EVIDENCE_LOG.md`: DEF-026 emberi feladat.
- `README.md`, `NEXT_EXECUTION_QUEUE_2026-07-16.md`, `MANIFEST_H001.sha256`: dokumentáció és integritásjegyzék.

## Ellenőrzések

- Teljes regresszió: 187 teszt, mind sikeres.
- Alap akcióregiszter-validáció: 0 hard hiba, 1 ismert kézbesítési evidencia-warning.
- Célzott CLI-validáció: 6 assessment domain, 5 teszt, 0 hard hiba, 4 elvárt pending warning.
- A Python compile- és a `git diff --check` ellenőrzés sikeres.
- A secret- és manifest-ellenőrzés a végleges állapoton sikeres.

## Nyitott kockázat és emberi döntésigény

- Nincs jóváhagyott user/CAL-, workload-, kulcs-/eszköz-, teljesítmény- és continuity-evidencia.
- Az A-029 tényleges licencreview-ja hiányzik.
- Nem történt G3-mal jóváhagyott teszt.
- Konszolidáció és vásárlás nem engedélyezett.

Az A-027 ezért nem `DONE`; a jelenlegi szeparáció fenntartása nem helyettesíti a teljes emberi felülvizsgálatot.
