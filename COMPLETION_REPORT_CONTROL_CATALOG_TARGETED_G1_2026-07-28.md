# Completion report – SRC-009 célzott G1 kontrollfelülvizsgálati csomag

## Állapot

`COMPLETED_AS_PROPOSAL` – a hét eltérő kontroll célzott elemzése, közérthető
döntési lapja és géppel ellenőrzött nyilvántartása elkészült. Emberi G1 döntés
nem történt.

## Elkészült eredmény

- A korábbi hasonlósági triázs pontosításra került: 2 kisebb és 5 tartalmi
  review-tétel maradt.
- A `2.17.2.4` pontnál az Excelből hiányzik a „nem”, ezért a mondat értelme
  megfordul.
- Az `5.3` és `5.4` Excel-szövege a jogszabály módosítása előtti hivatkozást
  tartalmazza.
- A `9.24.2`, vagyis a jóhírnév helyreállításának követelménye hiányzik az
  Excel-kivonatból.
- A `16.66.5` csak az Excelben szerepel; belső jó gyakorlat lehet, de az
  `SRC-010` alapján nem tüntethető fel ezen kontroll jogszabályi alpontjaként.
- Az `1.10` és `13.3` eltérése szerkezeti vagy írásmódbeli jellegű.
- Elkészült a hét kontrollonként kitölthető, emberi döntési lap.
- A validátor megköveteli a pontosan hét kontrollból álló célzott review-sort,
  és nem engedi a katalógus jóváhagyását függő kontrollreview mellett.

## Módosított vagy létrehozott fájlok

- `CONTROL_CATALOG_TARGETED_G1_DECISION_2026-07-28.md`
- `CONTROL_CATALOG_G1_REVIEW.md`
- `CONTROL_CATALOG_LEGAL_COMPARISON_2026-07-28.md`
- `COMPLETION_REPORT_CONTROL_CATALOG_G1_PRECHECK_2026-07-28.md`
- `DEFERRED_EVIDENCE_LOG.md`
- `README.md`
- `data/control_catalog_legal_comparison.csv`
- `data/control_catalog_legal_comparison_summary.json`
- `data/control_catalog_review.json`
- `src/nis2_harness/validation.py`
- `tests/test_control_catalog.py`

## Futtatott ellenőrzések

- `python -m unittest tests.test_control_catalog tests.test_portal_mvp` –
  21 teszt, sikeres.
- `python -m unittest discover -s tests` – 259 teszt, sikeres.
- `python -m nis2_harness validate-control-catalog ...` – 0 hard error,
  4 elvárt emberi review-warning.
- `git diff --check` – sikeres.
- Titok- és privátkulcs-minták keresése – nincs találat.

## Nyitott emberi feladatok

1. A hét kontroll döntési lapjának kitöltése G1 review keretében.
2. Az öt tartalmi eltérés javítási vagy korlátozási módjának jóváhagyása.
3. Reviewer, időzónás review-idő és döntési hivatkozás rögzítése.
4. Az aláírt döntési rekord védett SharePoint URI-jának és SHA-256 értékének
   rögzítése.
5. Az Excel eredetének, aktuális verziójának és belső felhasználási jogának
   igazolása.
6. A SharePoint XLSX-példány kézi cseréje és visszaolvasott hash-ellenőrzése.
7. Az öt EIR biztonsági osztályának külön emberi jóváhagyása.

## Külső változás

Ebben a munkacsomagban nem történt SharePoint-feltöltés, Microsoft Lists
módosítás, külső üzenet, éles rendszerkapcsolat vagy benyújtás.

## Git

Ebben a munkamenetben nem történt commit vagy push; ehhez külön emberi utasítás
szükséges.
