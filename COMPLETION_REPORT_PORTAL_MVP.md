# Completion report – helyi portál-MVP

## Eredmény

Elkészült a D-028 célállapot első működő, local-first MVP-je. A portál a repository aktuális, nem érzékeny metaadataiból jeleníti meg a 42 akciót, határidőket, G1–G5 sort, pótlandó evidenciákat és az A-042 szintetikus pilotjavaslatait.

Az MVP helyi review-tervezeteket rögzíthet append-only JSONL naplóba. A tervezet névmezője nem hitelesített és a rekord `formal_effect: false`; nem fogad el evidenciát, nem zár akciót, nem hajt végre jóváhagyást, külső benyújtást, vásárlást vagy éles változtatást.

## Módosított fő elemek

- `src/nis2_harness/portal.py`: biztonságos snapshot, review-tervezet-validáció és helyi auditnyom.
- `src/nis2_harness/portal_server.py`: loopback-only HTTP API és statikus kiszolgálás.
- `portal_demo/`: élő adatbetöltés, review-modal, auditnyom és A-042 pilotnézet.
- `config/portal_mvp.json`: explicit biztonsági és továbblépési korlátok.
- `tests/test_portal_mvp.py`: domain-, HTTP-, kill-switch- és hálózati negatív tesztek.

## Biztonsági állapot

- Külső kapcsolat, éles adatforrás, fájlfeltöltés és külső AI nincs.
- Nem loopback bind fail-closed módon tiltott.
- Hitelesítés hiányában formális döntés nem rögzíthető.
- Runtime review-tervezet Gitből kizárt.
- CSP, frame-tiltás, MIME-sniffing tiltás, no-store és requestméret-korlát aktív.

## Ellenőrzés

- `python -m unittest tests.test_portal_demo tests.test_portal_mvp -v`: 13/13 célzott teszt sikeres.
- `python -m unittest discover -s tests -v`: 212/212 teljes regressziós teszt sikeres.
- `node --check portal_demo/app.js`: szintaktikailag hibamentes.
- Helyi smoke: `127.0.0.1:8765/api/health` → `status=OK`, `mode=LOCAL_LOOPBACK_MVP`, `authentication=NOT_CONFIGURED`, `kill_switch=false`; a folyamat a próba után leállt.
- Akció- és dátumvalidáció: 0 hard error, 1 korábbról ismert warning a hivatalos kézbesítési igazolás hiányáról.

## Nyitott emberi munka

A belső hálózati pilothoz szükséges hitelesítés, RBAC, TLS, szerver, üzemeltető, evidenciatár-integráció, retention, backup/restore és G1/G2/G3 döntések a DEF-032 tételben szerepelnek. A fejlesztés nem deployengedély.

Böngészős vizuális QA külön nem történt; a felület szerkezeti, JavaScript-, API- és reszponzív CSS-ellenőrzése automatizált. Belső hálózati pilot előtt emberi funkcionális és akadálymentességi átvétel szükséges.
