# A-022 – read-only infrastruktúra health snapshot terv

## Cél és jelenlegi állapot

Az A-022 célja annak emberileg ellenőrizhető megállapítása, hogy a munkadokumentumban jelzett RAID-, lemeztelítettségi és backup-kapacitási problémák ténylegesen fennállnak-e. Az `SRC-004` állításai `unverified_internal` minősítésűek: a mérés és a review előtt sem hibaként, sem cáfolt állításként nem kezelhetők.

A csomag csak módszertan. Nem létesít kapcsolatot éles rendszerrel, nem tartalmaz hitelesítő adatot, célgépnevet vagy nyers exportot, és nem hajt végre semmilyen műveletet.

## Jóváhagyandó scope

Az emberi belső rendszerowner és Kollár Csaba technikai közreműködő közösen tölti ki:

1. a vizsgálandó hostok és VM-ek védett azonosítóit;
2. a storage-, RAID- és backup-forrásrendszereket;
3. forrásonként a gyártó/platform szerinti, ténylegesen read-only lekérdezési módszert;
4. a legkisebb szükséges jogosultságot és az engedélyezett időablakot;
5. a nyers kimenetek védett tárhelyét és megőrzését.

A konkrét parancs vagy eszköz csak az adott platform azonosítása után, G2/G3 review keretében hagyható jóvá. Általános, kipróbálatlan parancsot éles célponton futtatni tilos.

## Biztonságos végrehajtási sorrend

1. G1: belső owner jóváhagyja a célpontlistát és az elvárt mezőket.
2. G2: IBF/adatgazda ellenőrzi az adatminősítést, redakciót, védett tárolást és hozzáférést.
3. G3: rendszerowner és változáskezelés jóváhagyja a read-only módszert, jogosultságot és időablakot.
4. Kollár Csaba a jóváhagyott módszerrel exportál; eltérés vagy stop condition esetén azonnal megáll.
5. A nyers export védett tárba kerül, Gitbe csak URI, SHA-256, időpont, módszer és review státusz kerülhet.
6. A belső owner és az IBF elfogadja vagy elutasítja az observation rekordokat.
7. Csak az elfogadott rekordok alapján minősíthető az eredeti állítás `HUMAN_VERIFIED` vagy `HUMAN_REJECTED` státuszúra.

## Eredmény és továbbvezetés

- Igazolt sürgős kockázat esetén az A-023 külön emberi döntési és G3 változáskezelési csomagba kerül.
- Nem igazolt állítás esetén a cáfoló snapshot és az emberi döntés marad auditnyomként.
- Bizonytalan vagy hiányos mérés esetén az A-022 nyitva marad; az AI nem pótolja a hiányzó műszaki tényt.

Az emberi teendők teljes listáját a `DEFERRED_EVIDENCE_LOG.md` DEF-018 tétele tartalmazza.
