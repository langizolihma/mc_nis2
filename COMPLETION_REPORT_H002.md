# Completion report – H-002 local-only agent job pilot

## Eredmény

Elkészült a H-002 első működő, determinisztikus és hálózat nélküli munkacsomagja. A pilot egy SHA-256-tal rögzített, tíz szintetikus eseményből álló fixture-t dolgoz fel. Forráshivatkozott `PROPOSAL` rekordokat, emberi approval queue-t, szimulált munkamérőszámot és hash-láncolt auditnaplót készít.

A kimenet minden esetben `formal_effect: false` és `PENDING_HUMAN`. A pilot nem fogad el evidenciát, nem zár akciót, nem nyújt be külső dokumentumot, nem vásárol és nem módosít éles rendszert.

## Létrehozott és módosított fő elemek

- `src/nis2_harness/agent_jobs.py`: H-002 job-validáció, biztonságos input/output útvonal, SHA-256 ellenőrzés, hash-lánc, szintetikus eval és proposal-only kimenet.
- `config/h002_agent_pilot.json`: fail-closed job- és engine-konfiguráció.
- `tests/fixtures/h002_agent_events.json`: tíz nem érzékeny szintetikus technikai eset.
- `tests/test_agent_jobs.py`: pozitív, negatív, kill-switch, path-, hash-, policy-, hash-chain- és CLI-tesztek.
- `generated/h002_agent_pilot_output.json`: reprodukálható mintakimenet.
- `CODEX_HANDOFF_H002.md` és `H002_AGENT_PILOT.md`: munkacsomag-szerződés és kezelői útmutató.
- `src/nis2_harness/portal.py`: a helyi portál a H-002 mintakimenetet részesíti előnyben.
- `DEFERRED_EVIDENCE_LOG.md`: `DEF-033` alatt rögzített valós pilot előfeltételek.

## Biztonsági eredmény

- Bemenet csak a repository `tests/fixtures/` könyvtárából olvasható.
- Kimenet csak a repository `generated/` könyvtárába írható.
- Útvonalbejárás és SHA-256 eltérés fail-closed hibát okoz.
- Hálózat, külső AI, éles kapcsolat és érzékeny adat explicit tiltott.
- Bekapcsolt kill switch mellett nulla esemény dolgozható fel.
- A futási napló sorai az előző rekord hashéhez kapcsolódnak.
- A tíz beépített eset szintetikus technikai teszt, nem emberileg elfogadott audit-gold case.

## Ellenőrzés

- H-002/A-042/portál tesztek a végleges teljes futásban: 28/28 sikeres.
- Teljes regresszió: 223/223 teszt sikeres.
- Kanonikus akció- és dátumvalidáció: 0 hard error, 1 ismert warning az elsődleges kézbesítési igazolás hiányáról.
- H-002 reprodukálhatósági futtatás: 10 proposal, `run_status=PROPOSAL`, `human_review=PENDING_HUMAN`, 0 hard error.
- Offline portálsnapshot: 42 akció és 33 emberi feladat.

## Nyitott emberi munka

A valós pilot nem engedélyezett. Előtte szükséges a tíz A-032 gold case emberi kitöltése és jóváhagyása, a valós emberimunka- és tévesriasztás-mérés, az adatminősítés, a forrásgazdák és read-only jogosultságok kijelölése, továbbá G1 funkcionális, G2 biztonsági/jogi és G3 pilotdöntés. Ezek a `DEF-010`, `DEF-011`, `DEF-031` és `DEF-033` rekordokban maradnak nyitva.
