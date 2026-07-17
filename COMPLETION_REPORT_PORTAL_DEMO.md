# Completion report – helyi prezentációs portálprototípus

## Eredmény

Elkészült a D-028 célállapot helyben, böngészőből bemutatható prototípusa. A felület áttekintést, akcióregisztert, G1–G5 jóváhagyási sort, pótlandó evidenciákat és forráskövetett AI-javaslatokat jelenít meg. A gombok szimulációk, a portál nem ír vissza adatot, nem kapcsolódik éles rendszerhez és nem végez valódi jóváhagyást.

## Megvalósítás

- `portal_demo/index.html`, `styles.css`, `app.js`: reszponzív, dependency-free felület.
- `scripts/build_portal_demo.py`: determinisztikus, helyi snapshot-generátor.
- `portal_demo/data/demo_data.js`: nem érzékeny prezentációs metaadatok.
- `portal_demo/README.md`: indítási és bemutatási forgatókönyv.
- `tests/test_portal_demo.py`: adat-, proposal-only és külsőfüggőség-ellenőrzések.
- `DEFERRED_EVIDENCE_LOG.md`: DEF-020 élesítés előtti emberi feladatok.

## Biztonsági állapot

- Nincs külső hálózati, AI-, adatbázis- vagy éles rendszerkapcsolat.
- Nincs hitelesítés; ezért kizárólag helyi prezentációra használható.
- Nem tartalmaz eredeti auditbinarist, nyers exportot, licenckulcsot vagy secretet.
- Éles belső közzététel a DEF-015 és DEF-020 G2/G3 tételei előtt tilos.

## Ellenőrzés

- `python scripts\\build_portal_demo.py --as-of 2026-07-17`: 42 akció és 20 emberi feladat determinisztikus snapshotja elkészült.
- `python -m unittest discover -s tests -q`: 123/123 teszt sikeres.
- `node --check portal_demo\\app.js` és `node --check portal_demo\\data\\demo_data.js`: szintaktikailag érvényes.
- Helyi HTTP-próba: 200 OK, a portál címe és főoldala elérhető.
- A diff-, secret- és manifest-ellenőrzés nem jelzett hibát vagy érzékeny adatot.
