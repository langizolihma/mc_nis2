# Kontrollkatalógus és hatályos jogszabály – előellenőrzési összefoglaló

> Állapot: `READY_FOR_G1_HUMAN_REVIEW`. Ez gépi előellenőrzés, nem jogi állásfoglalás, nem katalógus-jóváhagyás és nem auditbizonyíték.

## Röviden, hétköznapi nyelven

Az Excel használható munkasegédeszköznek: minden hivatalos kontrollazonosító benne van, a kontrollok neve és az Alap/Jelentős/Magas osztályhoz tartozó jelöléseik is teljesek. Nem szabad azonban önmagában „a jogszabályként” kezelni. A magyarázatok, megvalósítási lépések, ISO- és NIST-hivatkozások kiegészítő útmutatók, nem a rendelet hivatalos szövege.

A 2024. december 30-i módosítás megváltoztatta az 5.3 és 5.4 kontroll jogszabályi szövegét. Az Excel szerkezete és osztályjelölése ezeknél is helyes, de a használat során a módosított hivatalos szöveg az irányadó.

## Felhasznált hivatalos források

- `SRC-010`: 7/2024. (VI. 24.) MK rendelet, 2. melléklet, Magyar Közlöny 2024. évi 68. szám.
- `SRC-010`: 18/2024. (XII. 30.) MK rendelet, 2. melléklet, Magyar Közlöny 2024. évi 137. szám.
- A Nemzeti Jogszabálytár konszolidált szövege: `https://njt.hu/jogszabaly/2024-7-20-7G`.
- A letöltött hivatalos PDF-ek SHA-256 értékei a `data/control_catalog_legal_comparison_summary.json` és a `data/source_register.json` fájlban szerepelnek.

## Eredmény

| Vizsgálat | Eredmény | Mit jelent? |
|---|---:|---|
| Hivatalos kontrollok | 914 | Ennyi kontrollt azonosítottunk a hivatalos 2. mellékletben. |
| Excelből kinyert kontrollok | 914 | Nincs hiányzó vagy többlet kontrollazonosító. |
| Kontrollazonosító-egyezés | 914/914 | A számozás teljes. |
| Kontrollcím-egyezés | 914/914 | A PDF oldaltöréseinek és kötőjel-tördelésének normalizálása után teljes. |
| Alap/Jelentős/Magas jelölés | 914/914 | A három biztonsági osztály alkalmazhatósági jelölése teljesen egyezik. |
| Normalizált követelményszöveg-egyezés | 907 | A strukturált Excel-kivonat és a hivatalos szöveg lényegi gépi alakja egyezik. |
| Nagyon hasonló, emberileg ellenőrzendő | 2 | `1.10`, `13.3`; szerkezeti vagy írásmódbeli eltérés miatt G1 review kell. |
| Tartalmilag eltérő, emberileg ellenőrzendő | 5 | `2.17`, `5.3`, `5.4`, `9.24`, `16.66`; a hivatalos baseline szövege az irányadó. |

Az összehasonlítás részletes, kontrollonkénti eredménye: `data/control_catalog_legal_comparison.csv`.

A célzott második ellenőrzés pontosította az első gépi, hasonlósági
besorolást. A `2.17.2.4` pontból hiányzó „nem” szó és a `16.66.5` többletpont
nem kezelhető pusztán tördelési eltérésként. A hét kontroll emberileg
kitölthető döntési lapja:
`CONTROL_CATALOG_TARGETED_G1_DECISION_2026-07-28.md`.

## Az 5.3 és 5.4 kontroll kezelése

- `5.3 – Biztonsági értékelések – Független értékelők`: a hatályos szabály a Kiberbiztonsági tv. 16. § (1) bekezdése szerint auditra **nem kötelezett** szervezetekre vonatkozik, a honvédelmi célú rendszerek kivételével.
- `5.4 – Biztonsági értékelések – Kiberbiztonsági audit`: a hatályos szabály a Kiberbiztonsági tv. 16. § (1) bekezdése szerint auditra **kötelezett** szervezetekre vonatkozik.
- Az Excel eredeti fájlját nem írjuk át. A helyi, származtatott baseline a módosított hivatalos szöveget tartalmazza: `data/official_control_baseline.csv`.
- A két kontroll osztályjelölése nem változott: `5.3 = -/X/X`, `5.4 = X/X/X`.

## Mit kell még embernek eldöntenie?

1. Ellenőrizze célzottan a hét megjelölt kontrollt, különösen a `2.17`, `5.3`, `5.4`, `9.24` és `16.66` tartalmi eltérését.
2. Igazolja az Excel eredetét, aktuális verzióját és belső felhasználási jogát.
3. Döntse el, hogy az Excel belső referenciaforrásként elfogadható-e, és milyen korlátozásokkal.
4. Töltse ki az öt EIR biztonsági osztályát az `EIR_SECURITY_CLASSIFICATION_QUESTIONNAIRE.md` alapján.
5. Rögzítse a reviewert, időpontot, döntési hivatkozást, védett rekord URI-ját és SHA-256 értékét.
6. Cserélje ki vagy igazolja a SharePointon lévő XLSX-et, mert annak mérete eltér a kanonikus helyi példánytól.

## Kötelező korlát

Az előellenőrzés nem bizonyít kontrollműködést. Az AI nem hagyhatja jóvá a katalógust, nem sorolhatja be az EIR-eket, nem választhat automatikusan alkalmazandó kontrollkört, és nem zárhat le akciót.
