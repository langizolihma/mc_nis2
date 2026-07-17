# A-026 – Legacy adatmegőrzési és migrációs döntési csomag

## Cél és korlát

Az `SRC-004` BLADE5/Andoc rendszerre vonatkozó állításai nem igazolt belső munkainformációk. A csomag célja a tényleges adat-, alkalmazás-, jogi megőrzési és helyreállíthatósági helyzet bizonyítása, nem pedig egy előre eldöntött migráció vagy selejtezés igazolása.

Sem megőrzési idő, sem legal hold, sem törlési engedély, sem migrációs célállapot nem állapítható meg automatikusan.

## Emberi sorrend

1. Dr. Berta Brigitta és az adatgazdák azonosítsák a jogalapokat, megőrzési szabályokat, legal holdokat és selejtezési korlátokat.
2. Az üzleti, adat- és alkalmazásgazdák készítsék el az adatkategóriák és függőségek védett leltárát.
3. Kollár Csaba és a belső rendszerowner határozza meg a legkisebb jogosultságú, read-only exportot, a formátumot és teljességi ellenőrzést.
4. G2 és G3 után, elkülönített célon készüljön export/restore/read teszt, az eredeti rendszer módosítása nélkül.
5. Az adatgazda mintavétellel igazolja az olvashatóságot, teljességet és üzleti használhatóságot.
6. Csak ezután születhet külön emberi döntés: megtartás, read-only archiválás, migráció vagy legal hold ellenőrzése utáni selejtezés.

## Tiltások

- éles rendszer lekérdezése vagy exportja jóváhagyás nélkül;
- eredeti adat módosítása, törlése, áthelyezése vagy alkalmazás leállítása;
- jogalap vagy megőrzési idő AI általi megállapítása;
- nyers export, személyes adat, üzleti dokumentum vagy credential Gitbe helyezése;
- migráció vagy selejtezés automatikus engedélyezése.

## Elfogadási evidencia

Jogi állásfoglalás, jóváhagyott adatlista, védett export URI/SHA-256, teljességi jegyzőkönyv, izolált restore/read teszt, adatgazdai sign-off, cleanup-rekord, G2/G3 approval és külön migrációs döntés.
