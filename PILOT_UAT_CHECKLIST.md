# NIS2 portál – felhasználói pilot ellenőrzőlista

**Státusz:** `PENDING_HUMAN_EXECUTION`  
**Formális hatás:** nincs

| # | Próba | Elvárt eredmény | Eredmény | Reviewer / idő / evidencia |
|---|---|---|---|---|
| 1 | Jogosult tag belép | Csak Entra-hitelesítés és NIS2 site-hozzáférés után jut be. | `NOT_RUN` | TBD |
| 2 | Nem tag felhasználó | A rendszer megtagadja a hozzáférést. | `NOT_RUN` | TBD |
| 3 | Viewer módosítást próbál | A szerver megtagadja, nem csak a gomb tűnik el. | `NOT_RUN` | TBD |
| 4 | Task owner munkát indít | Egyetlen append-only esemény keletkezik. | `NOT_RUN` | TBD |
| 5 | Két böngésző egyszerre ír | Az egyik sikeres, a másik frissítést kér; nincs felülírás. | `NOT_RUN` | TBD |
| 6 | Engedélyezett fájl csatolása | Letölthető, méret és SHA-256 látható. | `NOT_RUN` | TBD |
| 7 | Tiltott vagy 10 MB feletti fájl | A rendszer érthetően elutasítja. | `NOT_RUN` | TBD |
| 8 | SharePoint-feltöltés | Csak a kijelölt NIS2_EVIDENCE mappába kerül. | `NOT_RUN` | TBD |
| 9 | Feltöltés utáni ellenőrzés | URI és visszaolvasott SHA-256 egyezik. | `NOT_RUN` | TBD |
| 10 | Review-ra előterjesztés | URI és SHA-256 nélkül nem engedhető. | `NOT_RUN` | TBD |
| 11 | Jóváhagyási kísérlet | AI és task owner nem fogadhat el evidenciát. | `NOT_RUN` | TBD |
| 12 | Session lejárat/kijelentkezés | A további kérés hitelesítés nélkül elutasított. | `NOT_RUN` | TBD |
| 13 | Jogosultság visszavonása | Új sessionben, majd a jóváhagyott TTL után érvényesül. | `NOT_RUN` | TBD |
| 14 | Mentés futó portál mellett | Ellenőrzött ZIP készül hash-manifesttel. | `NOT_RUN` | TBD |
| 15 | Elkülönített visszaállítás | Adatbázis és csatolmány visszaolvasható. | `NOT_RUN` | TBD |
| 16 | Kill switch | A szolgáltatás leáll, a backend nem marad elérhető. | `NOT_RUN` | TBD |

Elfogadási feltétel: nincs sikertelen magas kockázatú próba; az 1–16.
pontnak név szerinti emberi eredménye, időbélyege és védett
evidenciahivatkozása van. A kitöltött lista önmagában nem fogad el
audit-evidenciát.
