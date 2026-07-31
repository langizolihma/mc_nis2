# Completion report – emberifeladat-kezelési pilot

## Eredmény

Elkészült a D-032 szerinti, öt valós feladatos helyi pilot. A portál új
**Az én munkám** nézete közérthető célt, ellenőrzőlistát, felelőst,
reviewert, SharePoint-linket és egyértelmű következő lépést mutat.

## Megvalósított funkciók

- `TODO → IN_PROGRESS → READY_FOR_REVIEW` életciklus;
- review-ból `REWORK_REQUIRED` visszaküldés és újrakezdés;
- előrehaladás mentése;
- review-ra küldéskor kötelező védett SharePoint URI és SHA-256;
- append-only, hash-láncolt helyi eseménynapló;
- fail-closed konfiguráció- és állapotvalidáció;
- reszponzív portálkártyák és munkalépés-rögzítő űrlap;
- offline snapshotban megtekinthető, de nem írható pilot.
- öt közvetlenül letölthető és nyomtatható Word-munkalap;
- helyi PDF/DOCX/XLSX/JPG/PNG csatolmány-előkészítés 10 MB-os korláttal;
- automatikus SHA-256 számítás és SharePoint-feltöltési cél megjelenítése;
- csatolmányok Gitből kizárt helyi tárolása.

## Biztonsági eredmény

A pilot minden eseménye `formal_effect: false`, a rögzítő neve
`actor_claim_unverified: true`. Nincs evidenciaelfogadás, feladatzárás,
SharePoint-visszaírás, külső benyújtás, éles változtatás vagy költés.

## Ellenőrzések

- `python -m unittest discover -s tests -v`: **321 teszt, OK**;
- `node --check portal_demo/app.js`: OK;
- akcióregiszter-validáció: 0 hard error, 1 ismert kézbesítésievidencia-warning;
- evidenciaregiszter-validáció: 0 hard error, 0 warning;
- határidő-egyeztetés: 0 hard error, 1 ismert, 16 emberi egyeztetésre váró tétel;
- `git diff --check`: OK;
- diff titokmintavizsgálata: nincs találat;
- az öt Word-munkalap Microsoft Worddel PDF-be exportálva és mind a 15 oldal
  PNG-képként ellenőrizve; levágott vagy átfedő tartalom nincs;
- böngészős QA: öt letöltési link, egy fájlmező, a hat engedélyezett
  kiterjesztés, a csatolási gomb és a SharePoint-cél helyesen megjelent;
  konzolhiba 0.

## Nyitott kockázat

A pilot helyben és loopback címen használható, de a rögzítő személye még nem
hitelesített, és a helyi csatolás nem tölt fel közvetlenül SharePointba.
Emiatt a munkanyom auditálható tervezet, nem bizonyító erejű jóváhagyási
rekord. A formális használatot a meglévő auth- és deploykapuk szándékosan
blokkolják.

## Emberi döntésigény

- 3–5 résztvevős használhatósági próba;
- pilotmetrikák kiértékelése;
- D-029 szerinti Entra/SharePoint belépés és szerveroldali RBAC;
- G2 architektúra-review és G3 élesítési döntés;
- csak ezek után formális reviewer-elfogadás és kanonikus státuszátvezetés.
