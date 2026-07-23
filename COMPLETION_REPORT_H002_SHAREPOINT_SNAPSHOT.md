# Completion report – H-002 SharePoint read-only snapshot

Dátum: 2026-07-23  
Státusz: `IMPLEMENTED_LOCAL_READ_ONLY_SLICE`  
Formális hatás: nincs  
Kötelező továbblépési kapuk: G1, G2, G3

## Eredmény

A helyi portál a 35 kanonikus `DEF-*` emberi feladathoz ellenőrzött SharePoint-dokumentumhivatkozást jelenít meg. A megoldás helyi JSON-pillanatképet használ, nem kezdeményez hálózati kapcsolatot és nem ír vissza a SharePointba.

Az adapter csak HTTPS-hivatkozást enged a `metalcom.sharepoint.com/sites/NIS2/` területről. Duplikált vagy hibás azonosító, hiányos lefedettség, tiltott host, HTTP-link, hibás séma vagy projektgyökéren kívüli útvonal esetén fail-closed módon nem ad ki SharePoint-feladatokat.

## Módosított vagy létrehozott elemek

- `src/nis2_harness/sharepoint_snapshot.py`: validálás és read-only projekció.
- `config/sharepoint_integration.json`: hálózat- és write-back-tiltott konfiguráció.
- `data/sharepoint_task_snapshot.json`: a 35 feladat kapcsolódó dokumentumhivatkozása.
- `src/nis2_harness/portal.py`: a projekció bekötése, fail-closed hibaág.
- `portal_demo/app.js`, `portal_demo/styles.css`: biztonságos linkmegjelenítés.
- `tests/test_sharepoint_snapshot.py`, `tests/test_portal_mvp.py`: adapter-, integrációs és felületi tesztek.
- `H002_DEVELOPMENT_BACKLOG.md`: a teljes fejlesztési végállapot hét munkablokkja.
- `CODEX_HANDOFF_H002.md`, `README.md`, `portal_demo/README.md`, `config/portal_mvp.json`: kezelői és technikai dokumentáció.

## Ellenőrzések

- Célzott tesztek: 15/15 sikeres.
- Teljes regressziós készlet: 229/229 sikeres.
- Registry-validáció: 0 hard error, 1 ismert warning.
- `git diff --check`: sikeres.
- Titokminták keresése: nincs találat.

Az egyetlen validációs warning a kézbesítési elsődleges evidencia hiánya (`W_RECEIPT_EVIDENCE`); ez korábban elfogadott emberi kockázat, és nem a jelen fejlesztési szelet hibája.

## Nyitott kockázatok és emberi döntések

- A pillanatkép frissessége emberi karbantartást igényel; nem élő szinkron.
- A linkek célfájljainak tartalmát és jogosultságait ez a technikai validáció nem minősíti auditbizonyítéknak.
- Élő Graph-olvasás előtt G1/G2/G3 döntés, jóváhagyott adatmező-térkép és legkisebb jogosultságú szolgáltatásazonosság szükséges.
- Belső hálózati használat előtt hitelesítés, RBAC, TLS, mentés-visszaállítás és G2/G3 döntés szükséges.
- Formális jóváhagyás vagy SharePoint-visszaírás csak külön állapotgép, auditnapló, idempotencia és jogosult ember kifejezett művelete után fejleszthető.

## Tiltott automatikus műveletek

- `close_action`
- `accept_evidence`
- `formal_approval`
- `sharepoint_write_back`
- `submit_external`
- `change_production`
