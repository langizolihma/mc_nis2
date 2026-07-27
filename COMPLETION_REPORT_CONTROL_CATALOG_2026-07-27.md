# Completion report – SRC-009 védelmi intézkedés katalógus

```json
{
  "status": "PROPOSAL",
  "agent_role": "control_mapper",
  "source_refs": ["SRC-009", "DECISIONS.md:D-030"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [
    "914 kontrollos és 1878 részletes követelményes strukturált katalógus",
    "kontrollkatalógus-kivonó és validátor",
    "portál kontrollrészlet-nézet",
    "EIR biztonsági osztály explicit emberi feladata"
  ],
  "required_human_gate": "G1_DOMAIN_REVIEW",
  "forbidden_automatic_actions": [
    "accept_evidence",
    "close_action",
    "select_eir_controls_without_approved_classification",
    "submit_external",
    "change_production"
  ]
}
```

## Eredmény

Az `alapadatok/Vedelmi-intezkedesek-katalogusa-tablazat-ver_1_0.xlsx` eredeti bináris módosítása és Gitbe emelése nélkül elkészült:

- `data/control_catalog.csv`: 914 egyedi kontroll;
- `data/control_requirements.csv`: 1878 részletes követelménysor;
- `data/control_catalog_metadata.json`: forráshash, munkafüzet-metaadat, darabszám, biztonsági vizsgálat és review-státusz;
- `SRC-009` forrásrekord;
- determinisztikus standard-library XLSX-kivonó;
- szigorú CSV-loader, kontroll- és forráshivatkozás-validátor;
- `extract-control-catalog` és `validate-control-catalog` CLI;
- portál-akciórészletekhez proposal-only kontrollmagyarázat, megvalósítási támpont, Alap/Jelentős/Magas jelölés és ISO/NIST kereszthivatkozás;
- az öt EIR-re explicit `security_class: TBD-HUMAN` mező és validációs warning;
- `D-030` döntési baseline és `DEF-036` emberi teendő.
- kitölthető `CONTROL_CATALOG_G1_REVIEW.md` és strukturált
  `data/control_catalog_review.json` emberi döntési csomag;
- tényleges `DEF-036` Microsoft Lists/SharePoint-listaelem;
- elkülönített védett SharePoint-mappa és az Excel feltöltött munkapéldánya,
  amelynek byteazonossága még nem igazolt;
- a kitölthető G1 review-lap ugyanebben a védett mappában, visszaellenőrzött
  `CONTROL_CATALOG_G1_REVIEW.md` fájlként.

A katalógus lefedi a finding-, mapping- és akcióregiszterben jelenleg használt mind a 164 egyedi kontrollhivatkozást.

## Forrás- és integritásadatok

- Forrás SHA-256: `1391f28345798a80b2a1386be29a46929e78b4d390da074c6a8a835d8d6e1c7e`
- `control_catalog.csv` SHA-256: `c549003aec70e8fc6529939e57b4cfc46442fed6724ac470ee733893ad4b7c47`
- `control_requirements.csv` SHA-256: `a8b85fe2ebaf63e5916528317e7c4b7c41dbb8154c0167a332b4d8920923df83`
- `control_catalog_metadata.json` SHA-256: `2c3a818fa91ec031cf0e350c696e227da9f59923c49c48711d47061bcabbff1a`
- A valós forrásból végzett második kivonás mindhárom repository-kimenettel hash-azonos eredményt adott.
- Makró, külső Excel-link és adatkapcsolat nem található; digitális aláírás nincs.

## Futtatott ellenőrzések

```text
python -m unittest discover -s tests
255 teszt – OK

python -m nis2_harness validate --actions data/actions.csv --project-dates data/project_dates.json
0 hard error, 1 meglévő receipt-evidencia warning

python -m nis2_harness validate-findings ...
328 finding, 104 mapping; 0 hard error, 2 meglévő G1 warning

python -m nis2_harness validate-control-catalog ...
914 kontroll, 1878 részletes követelmény, 164/164 használt kontroll lefedve;
0 hard error, 4 szándékos G1/proposal warning

python -m nis2_harness validate-inventory ...
5 EIR; 0 hard error, 9 emberi adatgyűjtési/review warning

git diff --check
nincs hiba

titokminta-ellenőrzés
nincs találat
```

Az eredeti `alapadatok/` könyvtárból egyetlen fájl sem követett Git-állomány.

## Nyitott emberi feladatok

1. Az SRC-009 eredetének, verziójának, felhasználási jogosultságának és a hatályos jogszabályi szöveggel való egyezésének G1 review-ja.
2. A védett SharePoint-URI rögzítve; a store-owner név szerinti kijelölése még szükséges.
3. Reviewer, időzónás review-idő és döntési hivatkozás megadása.
4. Mind az öt EIR Alap/Jelentős/Magas biztonsági osztályának emberi igazolása.
5. EIR-enkénti kontrolltestreszabás és az esetleges eltérő vagy helyettesítő intézkedések jóváhagyása.
6. A `DEF-036` tényleges Microsoft Lists/SharePoint-listaeleme 2026-07-27-én
   létrejött `Nyitott`, P1, `G1_DOMAIN_REVIEW` állapotban. A helyi
   SharePoint-pillanatkép a valós célmappára mutat.
7. A védett SharePoint-mappában a review-lap és az XLSX-példány megtalálható,
   de az XLSX visszaolvasott mérete 977503 bájt, míg a kanonikus helyi fájlé
   970666 bájt. A böngészőből kezdeményezett közvetlen feltöltést a kapcsolati
   biztonsági korlát letiltotta. A SharePoint-példány ezért nem tekinthető
   byteazonos kanonikus forrásnak; kézi csere és visszaolvasott SHA-256
   szükséges, amit a `DEF-036` nyitott feladatként követ.

## Biztonsági korlát

Az SRC-009 és minden belőle kinyert rekord `unverified_internal` / `PROPOSED`. Nem auditbizonyíték, nem igazol kontrollműködést, nem állít akciót `DONE` státuszra, és igazolt EIR-besorolás nélkül nem választ automatikusan alkalmazandó kontrollkört.
