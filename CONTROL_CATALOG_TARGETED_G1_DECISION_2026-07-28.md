# SRC-009 – célzott G1 kontrollfelülvizsgálati döntési lap

> Ember által kitöltendő döntési rekord. A dokumentum előkészített javaslat, nem jogi állásfoglalás, nem jóváhagyás és nem auditbizonyíték.

## Miért készült?

A gépi összevetés 914 kontrollból 907-et szövegszinten is egyezőnek talált. A fennmaradó hét kontrollt második, célzott ellenőrzés választotta szét:

- két kisebb, vélhetően csak szerkezeti eltérés;
- öt olyan eltérés, amely megváltoztathatja, mi tekinthető jogszabályi követelménynek.

Az irányadó szöveg minden esetben az `SRC-010`, vagyis a hivatalos jogszabályi baseline. Az `SRC-009` Excel csak belső referencia lehet.

## Döntési lehetőségek

Minden kontrollnál pontosan egyet kell megjelölni:

- `ELFOGADVA` – az eltérés nem változtatja meg a követelmény értelmét;
- `ELFOGADVA_KORLÁTOZÁSSAL` – használható, de csak az itt rögzített korlátozással;
- `JAVÍTANDÓ` – az Excel vagy a származtatott nyilvántartás javítása szükséges;
- `ELUTASÍTVA` – a kontroll adott Excel-szövege nem használható.

## 1.10 – Kockázatmenedzsment stratégia

**Megállapítás:** a hivatalos és az Excel-szöveg tartalma egyezik. Az eltérést felsorolásjel, kis- és nagybetű, valamint központozás okozza.

**Előkészítő javaslat:** `ELFOGADVA`, normalizált szövegegyezésként.

- [ ] `ELFOGADVA`
- [ ] `ELFOGADVA_KORLÁTOZÁSSAL`
- [ ] `JAVÍTANDÓ`
- [ ] `ELUTASÍTVA`

Reviewer megjegyzése: ................................................................................

## 2.17 – Kötelező hozzáférés-ellenőrzés

**Hivatalos 2.17.2.4 lényegi rész:** a hozzáféréssel rendelkező alany „**nem** választhatja ki” az új vagy módosított objektumokhoz rendelt biztonsági tulajdonságokat.

**Excel 2.17.2.4:** a „nem” szó hiányzik, ezért a mondat ellenkező értelművé válik.

**Előkészítő javaslat:** `JAVÍTANDÓ`; addig kizárólag az `SRC-010` szövege használható.

- [ ] `ELFOGADVA`
- [ ] `ELFOGADVA_KORLÁTOZÁSSAL`
- [ ] `JAVÍTANDÓ`
- [ ] `ELUTASÍTVA`

Reviewer megjegyzése: ................................................................................

## 5.3 – Független értékelők

**Megállapítás:** az Excel a korábbi `1. § (1)` hivatkozást tartalmazza. A módosított hivatalos szöveg a Kiberbiztonsági tv. `16. § (1)` bekezdésére hivatkozik, és a kiberbiztonsági auditra nem kötelezett szervezetekre vonatkozik.

**Előkészítő javaslat:** `JAVÍTANDÓ`; a 18/2024. (XII. 30.) MK rendelettel módosított `SRC-010` szövege alkalmazandó.

- [ ] `ELFOGADVA`
- [ ] `ELFOGADVA_KORLÁTOZÁSSAL`
- [ ] `JAVÍTANDÓ`
- [ ] `ELUTASÍTVA`

Reviewer megjegyzése: ................................................................................

## 5.4 – Kiberbiztonsági audit

**Megállapítás:** az Excel a korábbi `1. § (2)` hivatkozást tartalmazza. A módosított hivatalos szöveg a Kiberbiztonsági tv. `16. § (1)` bekezdésére hivatkozik, és a kiberbiztonsági auditra kötelezett szervezetekre vonatkozik.

**Előkészítő javaslat:** `JAVÍTANDÓ`; a 18/2024. (XII. 30.) MK rendelettel módosított `SRC-010` szövege alkalmazandó.

- [ ] `ELFOGADVA`
- [ ] `ELFOGADVA_KORLÁTOZÁSSAL`
- [ ] `JAVÍTANDÓ`
- [ ] `ELUTASÍTVA`

Reviewer megjegyzése: ................................................................................

## 9.24 – Kapcsolatok és jóhírnév helyreállítása

**Hivatalos tartalom:** a külső kapcsolatok kezelése mellett a szervezetnek lépéseket kell tennie a jóhírneve helyreállítására is.

**Excel-kivonat:** a `9.24.2`, vagyis a jóhírnév helyreállítására vonatkozó alpont hiányzik.

**Előkészítő javaslat:** `JAVÍTANDÓ`; addig az `SRC-010` teljes szövege használható.

- [ ] `ELFOGADVA`
- [ ] `ELFOGADVA_KORLÁTOZÁSSAL`
- [ ] `JAVÍTANDÓ`
- [ ] `ELUTASÍTVA`

Reviewer megjegyzése: ................................................................................

## 13.3 – Viselkedési szabályok

**Megállapítás:** a négy alpont tartalma egyezik. Az eltérést az okozza, hogy az Excel külön „A szervezet:” bevezetőt használ, míg a hivatalos szöveg az egyes alpontokat teljes mondatként adja meg.

**Előkészítő javaslat:** `ELFOGADVA`, normalizált szerkezeti egyezésként.

- [ ] `ELFOGADVA`
- [ ] `ELFOGADVA_KORLÁTOZÁSSAL`
- [ ] `JAVÍTANDÓ`
- [ ] `ELUTASÍTVA`

Reviewer megjegyzése: ................................................................................

## 16.66 – Fejlesztői biztonsági tesztelés

**Hivatalos tartalom:** a kontroll `16.66.1`–`16.66.4` alpontokat tartalmaz.

**Excel-kivonat:** szerepel benne egy további `16.66.5` – „Javítsa ki a tesztelés és értékelés során azonosított hibákat.” Ez az `SRC-010` baseline-ban nem szerepel ezen kontroll jogszabályi alpontjaként.

**Előkészítő javaslat:** `JAVÍTANDÓ` vagy `ELFOGADVA_KORLÁTOZÁSSAL`; a többletpont kezelhető belső jó gyakorlatként, de jogszabályi követelményként nem tüntethető fel.

- [ ] `ELFOGADVA`
- [ ] `ELFOGADVA_KORLÁTOZÁSSAL`
- [ ] `JAVÍTANDÓ`
- [ ] `ELUTASÍTVA`

Reviewer megjegyzése: ................................................................................

## Összesített emberi döntés

| Mező | Kitöltendő érték |
|---|---|
| Reviewer neve |  |
| Döntés dátuma és időpontja, időzónával |  |
| Döntési hivatkozás |  |
| Védett aláírt rekord URI-ja |  |
| Aláírt rekord SHA-256 értéke |  |

Összesített korlátozás vagy javítási utasítás:

........................................................................................................

........................................................................................................

## Kötelező folyamatkorlát

A hét tétel lezárásáig az `SRC-009` nem állítható `APPROVED` státuszra. Az AI nem töltheti ki a reviewer mezőket, nem fogadhatja el a döntést, és nem állíthatja át automatikusan az EIR-ekre alkalmazandó kontrollkört.
