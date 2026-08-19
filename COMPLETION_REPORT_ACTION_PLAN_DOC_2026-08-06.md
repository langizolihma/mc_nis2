# Completion report – beadásra előkészített NIS2 cselekvési terv

## Eredmény

- Elkészült a 42 intézkedést és mind a 19 követelménycsaládot lefedő, formázott Word-dokumentum.
- Elkészült az azonos tartalmú, 21 oldalas PDF.
- A dokumentum a beadást blokkoló vagy emberi döntésre váró elemeket pirossal, a nyitott/függő elemeket sárgával, az igazolt lezárt elemet zölddel jelöli.
- A dokumentum státusza szándékosan `PROPOSAL`: a kiemelt G1/G2/G4 kapuk és evidenciák lezárásáig nem minősíthető aláírt, beadott végleges tervnek.

## Létrehozott fájlok

- `submission_materials/NIS2_cselekvesi_terv_beadasra_elokeszitett_2026-08-06.docx`
- `submission_materials/NIS2_cselekvesi_terv_beadasra_elokeszitett_2026-08-06.pdf`
- `scripts/build_submission_action_plan.py`
- `tests/test_submission_action_plan.py`

## Kimeneti lenyomatok

- DOCX SHA-256: `6B5AD4EF3D41F7A999417D7512F45133EC4E6D400B1F116597DD1C11FDF57DD9`
- PDF SHA-256: `5E06B26069C7B20CF2827B09823071829C758E2AC41F570A3B13ADD52E58CA44`

A DOCX lenyomata Wordben történő megnyitás és mentés után megváltozhat. A ténylegesen jóváhagyott, aláírt és SharePointra feltöltött példány SHA-256 értékét külön kell újraszámítani és a dokumentum 10. pontjában, valamint az evidencianyilvántartásban rögzíteni.

## Felhasznált kanonikus alapok

- `data/actions.csv`
- `data/project_dates.json`
- `data/source_register.json`
- `DECISIONS.md`
- `PROJECT_RACI.md`
- `DEFERRED_EVIDENCE_LOG.md`
- `data/action_plan_submission_checklist.json`

## Ellenőrzések

- Célzott unittest: 3/3 sikeres.
- Teljes projekt unittest: 334/334 sikeres.
- `git diff --check`: hiba nélkül lefutott.
- Microsoft Worddel frissített tartalomjegyzék, oldalszámok és PDF-export.
- Popplerrel végzett 120 DPI-s oldalrenderelés.
- A teljes első render 20/20, a javított render 21/21 oldalának vizuális ellenőrzése megtörtént; a talált táblaszélességi és árva fejlécproblémák javítva lettek.
- A végső forrásazonosító-bővítés után az érintett 1–3. oldal ismételt vizuális ellenőrzése megtörtént.

## Függő emberi döntések és evidenciák

1. A-004 finding-regiszter G1 mintavétel és reviewer sign-off.
2. A-005 mapping G1 review és a 164 nem térképezett finding kezelési döntése.
3. A-036 aláírt RACI, formális szerepkijelölések, vezetői szponzor és belső infrastruktúra-/incidenskontroll-gazda.
4. A függő relatív/eseményalapú határidők rögzítése vagy jóváhagyott indoklása.
5. A 16 lejárt belső céldátum státusz- vagy újraütemezési döntése.
6. Az SRC-004 állítások read-only validációja vagy feltételes minősítésük fenntartása.
7. G1 szakmai, G2 biztonsági-jogi és G4 vezetői/beadási jóváhagyás.
8. Kézzel aláírt végleges példány, védett SharePoint URI és új SHA-256.
9. Jogosult emberi benyújtás, benyújtási visszaigazolás és átvételi igazolás.

## Biztonsági és folyamatkorlát

Nem történt külső benyújtás, SharePoint-feltöltés, éles rendszerkapcsolat, döntés-elfogadás, akciólezárás, vásárlás, commit vagy push.
