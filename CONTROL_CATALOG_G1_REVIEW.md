# SRC-009 kontrollkatalógus – G1 felülvizsgálati és jóváhagyási lap

> Ez a lap kitöltendő emberi döntési rekord. A jelenlegi állapota `PENDING`; önmagában nem jóváhagyás és nem auditbizonyíték.

## Azonosítás

| Mező | Érték |
|---|---|
| Forrásazonosító | `SRC-009` |
| Fájlnév | `Vedelmi-intezkedesek-katalogusa-tablazat-ver_1_0.xlsx` |
| Verzió | `1.0` |
| SHA-256 | `1391f28345798a80b2a1386be29a46929e78b4d390da074c6a8a835d8d6e1c7e` |
| Védett SharePoint-mappa | `https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-005/SRC-009` |
| Védett SharePoint-fájl | `https://metalcom.sharepoint.com/sites/NIS2/_layouts/15/Doc.aspx?sourcedoc=%7BFE4D82AD-9E39-4AB3-BBAF-5713EE9D88AE%7D&file=Vedelmi-intezkedesek-katalogusa-tablazat-ver_1_0.xlsx&action=default&mobileredirect=true` |
| Strukturált kivonat | 914 kontroll, 1878 részletes követelmény, 19 követelménycsalád |
| Jelenlegi bizalmi szint | `unverified_internal` |
| Kötelező kapu | `G1_DOMAIN_REVIEW` |
| Hivatalos jogszabályi baseline | `SRC-010`; `data/official_control_baseline.csv` |
| Gépi jogszabályi előellenőrzés | `CONTROL_CATALOG_LEGAL_COMPARISON_2026-07-28.md` |
| EIR-besorolási kérdőív | `EIR_SECURITY_CLASSIFICATION_QUESTIONNAIRE.md` |

## Gépi előellenőrzés eredménye

Az előellenőrzés nem helyettesíti a reviewer döntését, de leszűkíti az ellenőrzendő kört:

- 914/914 kontrollazonosító egyezik;
- 914/914 kontrollcím egyezik normalizált formában;
- 914/914 Alap/Jelentős/Magas alkalmazhatósági jelölés egyezik;
- 907 követelményszöveg normalizáltan egyezik;
- `1.10`, `2.17`, `13.3`, `16.66` kisebb eltérés miatt ellenőrzendő;
- `5.3`, `5.4`, `9.24` külön tartalmi review-t igényel;
- az `5.3` és `5.4` esetében a 18/2024. (XII. 30.) MK rendelet módosított szövege az irányadó.

## Felülvizsgálandó pontok

Az alábbi pontokat a reviewernek külön-külön ellenőriznie és jelölnie kell.

- [ ] A munkafüzet eredete és készítője elfogadhatóan azonosított.
- [ ] A `1.0` verzió a használni kívánt, aktuális változat.
- [ ] A metALCOM rendelkezik a belső felhasználáshoz szükséges jogosultsággal.
- [ ] A `CONTROL_CATALOG_LEGAL_COMPARISON_2026-07-28.md` és a kontrollszintű összevetés alapján a hét megjelölt kontroll emberileg ellenőrzött; az `5.3` és `5.4` módosított szövege alkalmazandó.
- [ ] A 914 kontrollos és 1878 részletes követelményes kivonat teljessége elfogadható.
- [ ] A jelenleg használt 164 egyedi kontrollhivatkozás lefedettsége elfogadható.
- [ ] A katalógus csak referencia; kontrollműködést és megfelelőséget nem igazol.
- [ ] EIR-re alkalmazandó kontrollkör csak jóváhagyott biztonsági osztály és emberi testreszabás után választható.

## EIR-besorolási döntések

Az engedélyezett érték: `Alap`, `Jelentős` vagy `Magas`. Indoklás és döntési hivatkozás minden sornál kötelező.

A hatáselemzéshez az `EIR_SECURITY_CLASSIFICATION_QUESTIONNAIRE.md` kitöltendő. A kérdőív kitöltése sem ruház át jóváhagyást az AI-ra.

| EIR | Audit scope | Biztonsági osztály | Indoklás / forrás | EIR-owner | Reviewer |
|---|---|---|---|---|---|
| Vezetéstámogató | Auditált |  |  |  |  |
| Irodai | Auditált |  |  |  |  |
| Termelés | Auditált |  |  |  |  |
| Hálózat-kommunikációs | Nem auditált |  |  |  |  |
| Biztonsági | Nem auditált |  |  |  |  |

## Döntés

Jelöljön meg pontosan egy lehetőséget:

- [ ] `APPROVED_REFERENCE` – belső referenciaforrásként elfogadva.
- [ ] `APPROVED_WITH_LIMITATIONS` – az alábbi korlátozásokkal használható.
- [ ] `RETURN_FOR_REWORK` – javítás vagy további igazolás szükséges.
- [ ] `REJECTED` – nem használható referenciaforrásként.

Korlátozások, észrevételek:

........................................................................................................

........................................................................................................

| Jóváhagyási mező | Kitöltendő érték |
|---|---|
| Reviewer neve |  |
| Döntés dátuma és időpontja, időzónával |  |
| Döntési hivatkozás |  |
| Védett aláírt rekord URI-ja |  |
| Aláírt rekord SHA-256 értéke |  |

## Kötelező korlát

Az AI nem töltheti ki a fenti emberi döntési mezőket, nem állíthatja a katalógust `APPROVED` státuszra, nem választhat automatikusan EIR-kontrollkört, nem fogadhat el evidenciát és nem zárhat akciót.
