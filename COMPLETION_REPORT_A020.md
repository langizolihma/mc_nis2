# Completion report – A-020 fizikai védelmi bejárás

## Eredmény

Elkészült a kilenc auditkontrollt lefedő fizikai védelmi bejárási checklist, a géppel validálható JSON gap-register, a jegyzőkönyvsablon, valamint a tény- és evidenciakorlátokat ellenőrző validator. A bejárás nem történt meg, ezért minden kontroll `NOT_ASSESSED`, a gap- és gyorsjavítási lista üres, és ez nem értelmezhető megfelelőségként.

## Módosított vagy létrehozott elemek

- `data/physical_security_walkthrough.json`: telephelyi scope, kilenc kontroll, gap-register, gyorsjavítások és fotószabályok.
- `src/nis2_harness/physical_security.py`: kontroll-lefedettség, emberi megfigyelés, evidencia, G2 és fotókezelési validáció.
- `src/nis2_harness/cli.py`: `validate-physical-security` parancs.
- `tests/test_physical_security.py`: pozitív és tiltó tesztek.
- `PHYSICAL_SECURITY_WALKTHROUGH_PLAN.md`: végrehajtási előkészítés.
- `templates/physical_walkthrough_record.md`: helyszíni jegyzőkönyv és gap-tábla.
- `DEFERRED_EVIDENCE_LOG.md`: scope, bejárás, gap, fotó/adatkezelés és review pótlása.
- `README.md`, `NEXT_EXECUTION_QUEUE_2026-07-16.md`, `MANIFEST_H001.sha256`: technikai dokumentáció és integritásjegyzék.

A gap-regiszter JSON-formátumú. A spreadsheets skill előírt artifact-függőségbetöltő eszköze nem volt elérhető, ezért nem készült kerülőúton CSV/XLSX; a JSON a harness natív, auditálható formátuma.

## Ellenőrzések

- `python -m unittest discover -s tests -v`: 99/99 teszt sikeres.
- `python -m nis2_harness validate-physical-security --plan data\\physical_security_walkthrough.json`: 9 kontroll, 0 hard error, 3 várt emberi warning.
- A végleges diff-, titok-, compile- és manifest-ellenőrzés során nem maradhat hard hiba vagy integritáseltérés.

## Nyitott kockázat és emberi döntésigény

- Német Péter és az IBF még nem jelölte ki a telephelyi/védett területi scope-ot.
- A résztvevők, időpont, fotózási és adatkezelési engedély hiányzik.
- A helyszíni megfigyelések, fotók, belépési listák és tesztjegyzőkönyvek nem állnak rendelkezésre.
- Minden valódi gaphez kockázat, felelős, céldátum, evidencia és emberi review szükséges.

Az A-020 ezért nem `DONE`, és nem állít fizikai megfelelőséget.
