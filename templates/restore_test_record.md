# Restore-teszt jegyzőkönyv – TERVEZET

> `PROPOSAL`: a sablon kitöltése nem jelent G3 jóváhagyást és nem engedélyez restore műveletet.

## 1. Azonosítás és jóváhagyás

| Mező | Érték |
|---|---|
| Tesztazonosító | `TBD-HUMAN` |
| EIR | `TBD-HUMAN` |
| Rendszer/adatkör | `TBD-HUMAN` |
| Üzleti owner | `TBD-HUMAN` |
| Rendszergazda/végrehajtó | `TBD-HUMAN` |
| Izolált célkörnyezet | `TBD-HUMAN` |
| Jóváhagyott időablak | `TBD-HUMAN` |
| G3 döntési rekord | `TBD-HUMAN` |

## 2. Célértékek

| Mutató | Jóváhagyott cél | Tényleges eredmény | Megfelelt? |
|---|---:|---:|---|
| RPO | `TBD-HUMAN` | `TBD` | `TBD` |
| RTO | `TBD-HUMAN` | `TBD` | `TBD` |

## 3. Biztonsági előfeltételek

- [ ] A cél nem éles környezet, és nincs név-, cím- vagy storage-ütközés.
- [ ] Az éles rendszer felülírása és törlése tiltott.
- [ ] A hálózati elkülönítés ellenőrzött.
- [ ] A forrásmentés változatlan, hash/azonosító rögzített.
- [ ] A titok- és személyesadat-kezelés jóváhagyott.
- [ ] A stop feltételek és visszalépési eljárás ismert.

## 4. Végrehajtási napló

| Időpont | Lépés | Végrehajtó | Eredmény | Log/evidencia hivatkozás |
|---|---|---|---|---|
| `TBD` | `TBD` | `TBD` | `TBD` | `védett URI + SHA-256` |

## 5. Integritás és használhatóság

- Visszaállított objektum: `TBD`.
- Integritásellenőrzés módszere és eredménye: `TBD`.
- Alkalmazási/read teszt: `TBD`.
- Eltérés vagy adatvesztés: `TBD`.

## 6. Lezárás és takarítás

- Izolált tesztkörnyezet állapota: `TBD`.
- Tesztadat jóváhagyott törlése/megőrzése: `TBD`.
- Cleanup evidencia: `TBD`.
- Nyitott findingok és felelősök: `TBD`.

## 7. Emberi review

| Szerep | Név | Döntés | Időzónás időbélyeg | Hivatkozás |
|---|---|---|---|---|
| Üzleti owner | `TBD-HUMAN` | `TBD` | `TBD` | `TBD` |
| Rendszerowner/change approver | `TBD-HUMAN` | `TBD` | `TBD` | `TBD` |
| IBF/reviewer | `TBD-HUMAN` | `TBD` | `TBD` | `TBD` |

Az AI nem fogadhatja el a teszteredményt és nem jelölheti az A-017 akciót `DONE` státuszúra.
