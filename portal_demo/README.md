# Helyi NIS2 portál – prezentációs prototípus

Ez a felület a D-028 célállapot bemutatható prototípusa. A repository nem érzékeny akció- és pótlandóevidencia-metaadatait jeleníti meg. Nem éles portál: nincs hitelesítés, adatbázis, külső AI, evidenciatár- vagy infrastruktúra-kapcsolat, és a gombok nem módosítanak adatot.

## Indítás a prezentáció előtt

```powershell
python scripts\build_portal_demo.py --as-of 2026-07-17
python -m http.server 8000 --directory portal_demo
```

Ezután böngészőben: `http://localhost:8000`

Ha a 8000-es port foglalt, választható másik, például `python -m http.server 8080 --directory portal_demo`, majd `http://localhost:8080`.

## Javasolt bemutatási útvonal

1. Áttekintés: cél, határidő, programmetrikák és G1–G5 kapuk.
2. Feladatok: keresés, P0/P1/P2 szűrés, egy akció részletei.
3. Jóváhagyások: mutasd meg, hogy a gomb csak demonstrál, nem hoz valódi döntést.
4. Evidenciák: a pótlandó emberi teendők transzparens nyilvántartása.
5. AI-javaslatok: forráskövetett `PROPOSAL` kimenetek és emberi kapuk.

## Biztonsági korlát

Prezentáció közben ne nyisd meg az `alapadatok/`, `raw_exports/`, szerződés-, licenc- vagy infrastruktúra-export könyvtárakat. Éles belső hálózati eléréshez, hitelesítéshez és deployhoz a DEF-015 G2/G3 feladatai továbbra is kötelezők.
