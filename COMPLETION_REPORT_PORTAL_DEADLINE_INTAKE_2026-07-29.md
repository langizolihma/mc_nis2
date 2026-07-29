# Completion report – lejárt akciók portálos egyeztetési tervezete

## Állapot

`COMPLETED_AS_PROPOSAL` – a helyi portálon a 17 lejárt akció tényleges
állapotáról formális hatás nélküli, append-only tervezet rögzíthető.

## Elkészült eredmény

- A Jóváhagyások nézet külön kártyán mutatja mind a 17 egyeztetendő akciót.
- A felhasználó kiválaszthatja a tényleges állapot javaslatát és indoklást írhat.
- Újraütemezésnél jövőbeli céldátum kötelező.
- Review-ra kész tételnél kizárólag a NIS2 SharePoint-webhelyre mutató URI és
  kisbetűs SHA-256 fogadható el.
- A szerver nem a kanonikus nyilvántartást módosítja, hanem a Gitből kizárt
  `portal_runtime/deadline_reconciliation_drafts.jsonl` fájlhoz fűz.
- Minden mentett rekord `formal_effect=false` és
  `actor_claim_unverified=true`.
- Az `actions.csv`, a SharePoint és az evidenciaregiszter változatlan marad.

## Módosított fájlok

- `src/nis2_harness/portal.py`
- `src/nis2_harness/portal_server.py`
- `portal_demo/index.html`
- `portal_demo/app.js`
- `portal_demo/styles.css`
- `portal_demo/data/demo_data.js`
- `tests/test_portal_mvp.py`
- `README.md`
- `portal_demo/README.md`
- `NEXT_EXECUTION_QUEUE_2026-07-16.md`
- `DEFERRED_EVIDENCE_LOG.md`

## Ellenőrzések

- Célzott portál-, snapshot- és határidőtesztek: 30 teszt, sikeres.
- Teljes tesztkészlet: 272 teszt, sikeres.
- Fő akcióregiszter-validáció: 0 hard error; 1 korábbról ismert
  kézbesítésievidencia-warning.
- Határidő-egyeztetési validáció: 0 hard error; 1 elvárt,
  `PENDING_HUMAN` warning.
- A két JavaScript-fájl szintaktikai ellenőrzése: sikeres.
- `git diff --check`: sikeres.
- A módosított és új fájlok célzott titokmintakeresése: nincs találat.

## Biztonsági korlát

A tervezet nem jóváhagyás, nem evidencia, nem zár le akciót, és nem módosít
státuszt vagy céldátumot. A kanonikus átvezetéshez továbbra is hitelesített
emberi reviewer, időzónás review-idő, döntési hivatkozás és szükség szerint
védett evidencia szükséges.

## Emberi következő lépés

Pásztor András a helyi portálon rögzítheti a tényleges állapotjavaslatokat.
Lángi Zoltán vagy az akció szerinti jogosult G1–G5 reviewer külön ellenőrzi és
formálisan jóváhagyja vagy visszaküldi azokat. Csak ezután készülhet külön,
ellenőrzött átvezetés az akcióregiszterbe.

## Git

Commit és push csak külön emberi utasításra történhet.
