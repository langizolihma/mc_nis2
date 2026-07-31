# Helyi NIS2 portál – működő MVP

Ez a felület a D-028 célállapot helyi, működő MVP-je. Indításkor élőben olvassa a repository nem érzékeny akció-, határidő-, pótlandóevidencia- és A-042 pilot-metaadatait. A pótlandó feladatoknál meg tudja nyitni a helyi, ellenőrzött pillanatképben rögzített SharePoint-dokumentumokat. A D-032/D-033 szerinti „Az én munkám” pilot öt valós feladatot vezet végig teendő, folyamatban, review-ra vár és javítandó állapotokon; letölthető Word-munkalapot, helyi csatolást és automatikus SHA-256 számítást ad. Helyi munkafolyamat-, review- és lejártakció-egyeztetési tervezetet rögzíthet append-only JSONL auditnyommal, de ezek nem formális jóváhagyások, nem evidenciák és nem módosítanak akcióstátuszt vagy céldátumot.

## Indítás

```powershell
python -m nis2_harness serve-portal
```

Ezután böngészőben: `http://127.0.0.1:8000`

Ha a 8000-es port foglalt: `python -m nis2_harness serve-portal --port 8080`.

Az MVP szándékosan csak a helyi gépről érhető el. A `0.0.0.0` vagy más hálózati cím tiltott; belső hálózati publikáláshoz előbb G2/G3 döntés, hitelesítés, RBAC és TLS szükséges.

## Javasolt bemutatási útvonal

1. Áttekintés: cél, határidő, programmetrikák és G1–G5 kapuk.
2. Az én munkám: nyiss meg egy pilotfeladatot, nézd meg az ellenőrzőlistát és rögzíts egy munkakezdési vagy előrehaladási eseményt.
3. Akciók: keresés, P0/P1/P2 szűrés, egy akció részletei.
4. Jóváhagyások: mutasd meg az Entra/SharePoint auth-readiness állapotot, rögzíts helyi review-tervezetet, majd nyisd meg az egyik lejárt akció státusz-egyeztetését.
5. Evidenciák: a pótlandó emberi teendők és a kapcsolódó SharePoint-dokumentumok megnyitása.
6. AI-javaslatok: forráskövetett `PROPOSAL` kimenetek és emberi kapuk.

## Biztonsági korlát

Ne nyisd meg az `alapadatok/`, `raw_exports/`, szerződés-, licenc- vagy infrastruktúra-export könyvtárakat. A runtime munkafolyamat-, review- és státusz-egyeztetési tervezetek, valamint a legfeljebb 10 MB-os helyi PDF/DOCX/XLSX/JPG/PNG munkapéldányok a Gitből kizárt `portal_runtime/` könyvtárba kerülnek. A helyi csatolás nem SharePoint-feltöltés és nem evidenciaelfogadás. A SharePoint-kapcsolat ebben a lépésben csak helyi pillanatkép: nincs élő lekérés és nincs visszaírás. Az Evidenciák nézet külön jelzi az élő Graph-integráció readiness állapotát és a függő G1/G2/G3 kapukat. Éles belső hálózati eléréshez, hitelesítéshez és deployhoz a DEF-015/DEF-020, DEF-032 és DEF-033 feladatai továbbra is kötelezők.
