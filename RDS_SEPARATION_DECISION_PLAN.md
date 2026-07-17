# A-027 – RDS-szeparációs és konszolidációs döntési csomag

## Biztonságos alapállapot

Az `SRC-004` RDS-összevonási gondolata nem igazolt belső munkainformáció. A költségelőny, licenchelyzet, workload-kompatibilitás, teljesítmény és banki/könyvelési kulcshasználat bizonyítása nélkül a jelenlegi szeparáció fenntartandó. Ez átmeneti kockázatcsökkentő állapot, nem végleges megfelelőségi minősítés.

## Emberi felmérés

1. A belső rendszerowner és Kollár Csaba készítsen jóváhagyott read-only user/CAL-, session-, workload-, kapacitás- és konfigurációs összesítést.
2. Az alkalmazás- és üzleti ownerek azonosítsák a banki/könyvelési alkalmazásokat, kulcs- vagy eszközfüggőséget; secret vagy kulcsanyag nem másolható a nyilvántartásba.
3. Az A-029 eredményével igazolják a licencjogosultságot és a támogatási helyzetet.
4. Készüljön szeparációs kockázatelemzés, backup/continuity és rollback terv.
5. A teszteket elkülönített vagy kontrollált környezetben, owner- és G3-approval mellett hajtsák végre.
6. Konszolidáció csak teljes bizonyíték, mérhető acceptance criterion, külön G3 döntés és szükség esetén G5 után indulhat.

## Tiltások

- felhasználó, session vagy workload mozgatása;
- banki/könyvelési secret, token, tanúsítvány vagy kulcsanyag olvasása vagy tárolása;
- éles konfiguráció módosítása vagy RDS-környezet összevonása;
- licencmegfelelőség feltételezése;
- vásárlás vagy automatikus kockázatelfogadás.

## Evidenciák

User/CAL mátrix, workload/dependency map, kulcs-/eszköz-scope metaadata, read-only teljesítménybaseline, licencreview, kockázati sign-off, teszteredmények, backup/rollback proof, védett URI/SHA-256 és emberi reviewer.
