# Completion report – A-017 backup és restore-teszt előkészítés

## Eredmény

Elkészült az öt EIR-re kiterjedő backup scope/RPO/RTO mátrix váza, az izolált restore-teszt biztonsági terve, a jegyzőkönyvsablon és a gépi validator. A csomag nem állítja, hogy a mentések megfelelőek, és nem hajtott végre restore vagy éles rendszerváltozást.

## Módosított vagy létrehozott elemek

- `DECISIONS.md`, `PROJECT_BRIEF.md`, `SECURITY_BOUNDARIES.md`, `LOCAL_PORTAL_BASELINE.md`: a D-028 helyi belső portál döntés és biztonsági baseline.
- `data/backup_restore_plan.json`: öt EIR backup-mátrixa és G3-blokkolt restore-terv.
- `src/nis2_harness/backup_restore.py`: EIR-, RPO/RTO-, destruktív művelet-, G3- és evidenciavalidáció.
- `src/nis2_harness/cli.py`: `validate-backup-restore` parancs.
- `tests/test_backup_restore.py`: pozitív és tiltó biztonsági tesztek.
- `BACKUP_RESTORE_TEST_PLAN.md`: ember számára olvasható végrehajtási előkészítés.
- `templates/restore_test_record.md`: restore-jegyzőkönyv sablon.
- `DEFERRED_EVIDENCE_LOG.md`: owner/scope/RPO/RTO/G2/G3 és végrehajtási evidencia.
- `README.md`, `NEXT_EXECUTION_QUEUE_2026-07-16.md`, `MANIFEST_H001.sha256`: technikai dokumentáció és integritásjegyzék.

## Ellenőrzések

- `python -m unittest discover -s tests -v`: 90/90 teszt sikeres.
- `python -m nis2_harness validate-backup-restore --plan data\\backup_restore_plan.json`: 5 EIR, 0 hard error, 3 várt emberi/G3 warning.
- A végleges diff-, titok-, compile- és manifest-ellenőrzés során nem maradhat hard hiba vagy integritáseltérés.

## Nyitott kockázat és emberi döntésigény

- Hiányzik az öt EIR üzleti ownere, rendszer-scope-ja, RPO/RTO-ja, mentési módja, retentionje és elkülönített másolatának szabálya.
- A mintarendszer és az izolált tesztkörnyezet nincs kijelölve.
- A restore végrehajtásához üzleti owner, rendszerowner és változáskezelési G3 approval kell.
- Az adatminősítéstől függően G2 review is szükséges.
- Tényleges job log, integritás-, RPO/RTO-, cleanup- és review-evidencia még nincs.

Az A-017 ezért nem `DONE`; végrehajtása `BLOCKED_PENDING_G3`.
