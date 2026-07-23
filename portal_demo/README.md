# Helyi NIS2 portál – működő MVP

Ez a felület a D-028 célállapot helyi, működő MVP-je. Indításkor élőben olvassa a repository nem érzékeny akció-, határidő-, pótlandóevidencia- és A-042 pilot-metaadatait. A pótlandó feladatoknál meg tudja nyitni a helyi, ellenőrzött pillanatképben rögzített SharePoint-dokumentumokat. Helyi review-tervezetet rögzíthet append-only JSONL auditnyommal, de az nem formális jóváhagyás, nem evidencia és nem módosít akcióstátuszt.

## Indítás

```powershell
python -m nis2_harness serve-portal
```

Ezután böngészőben: `http://127.0.0.1:8000`

Ha a 8000-es port foglalt: `python -m nis2_harness serve-portal --port 8080`.

Az MVP szándékosan csak a helyi gépről érhető el. A `0.0.0.0` vagy más hálózati cím tiltott; belső hálózati publikáláshoz előbb G2/G3 döntés, hitelesítés, RBAC és TLS szükséges.

## Javasolt bemutatási útvonal

1. Áttekintés: cél, határidő, programmetrikák és G1–G5 kapuk.
2. Feladatok: keresés, P0/P1/P2 szűrés, egy akció részletei.
3. Jóváhagyások: rögzíts helyi review-tervezetet, majd mutasd meg, hogy annak nincs formális hatása.
4. Evidenciák: a pótlandó emberi teendők és a kapcsolódó SharePoint-dokumentumok megnyitása.
5. AI-javaslatok: forráskövetett `PROPOSAL` kimenetek és emberi kapuk.

## Biztonsági korlát

Ne nyisd meg az `alapadatok/`, `raw_exports/`, szerződés-, licenc- vagy infrastruktúra-export könyvtárakat. A runtime review-tervezetek a Gitből kizárt `portal_runtime/` könyvtárba kerülnek. A SharePoint-kapcsolat ebben a lépésben csak helyi pillanatkép: nincs élő lekérés és nincs visszaírás. Éles belső hálózati eléréshez, hitelesítéshez és deployhoz a DEF-015/DEF-020 és DEF-032 G2/G3 feladatai továbbra is kötelezők.
