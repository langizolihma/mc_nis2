# Completion report – A-008 negyedéves beszámolási csomag

## Eredmény

Elkészült a negyedéves beszámolók proposal-only naptára, adat-cut-off workflow-ja, dry-run terve, emberi jóváhagyási rendje és kitölthető Markdown-sablonja. A 2026-09-24 dátum kizárólag tervezési horgony; a tényleges cselekvésiterv-benyújtás dátumát nem állítjuk bizonyított tényként.

## Módosított vagy létrehozott elemek

- `data/quarterly_reporting_plan.json`: négy riport és belső workflow gépi terve.
- `templates/quarterly_report_template.md`: forráskövetett, G4-kapuzott beszámolósablon.
- `QUARTERLY_REPORTING_KIT.md`: ember számára olvasható naptár és működési rend.
- `src/nis2_harness/quarterly_reporting.py`: anchor-, dátum-, workflow-, sablon- és kapuvalidáció.
- `src/nis2_harness/cli.py`: `validate-quarterly-reporting` parancs.
- `tests/test_quarterly_reporting.py`: pozitív és tiltó tesztek.
- `DEFERRED_EVIDENCE_LOG.md`: tényleges benyújtás, G2/G4 review, naptár és riport-evidencia pótlása.
- `README.md`, `NEXT_EXECUTION_QUEUE_2026-07-16.md`, `MANIFEST_H001.sha256`: technikai dokumentáció és integritásjegyzék.

## Ellenőrzések

- `python -m unittest discover -s tests -v`: 76/76 teszt sikeres.
- `python -m nis2_harness validate-quarterly-reporting --plan data\\quarterly_reporting_plan.json`: 0 hard error, 2 várt emberi-review warning.
- A végleges diff-, titok-, compile- és manifest-ellenőrzés során nem maradhat hard hiba vagy integritáseltérés.

## Nyitott kockázat és emberi döntésigény

- A tényleges cselekvésiterv-benyújtási dátumot és átvételi evidenciát később rögzíteni kell.
- A riportnaptárat a tényleges dátumból újra kell számítani, majd jogi vagy IBF reviewerrel jóváhagyatni.
- A sablon tartalmát és az egyes külső riportokat Lángi Zoltánnak G4 kapuban jóvá kell hagynia.
- A dry run és minden riport forrás-, review-, benyújtási és átvételi evidenciája védett URI-val és hash-sel pótlandó.

Az A-008 nem `DONE`: jelenlegi eredménye emberi jóváhagyásra váró tervezet.
