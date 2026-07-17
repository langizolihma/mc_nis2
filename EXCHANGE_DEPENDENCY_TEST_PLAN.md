# A-025 – Exchange/SMTP függőségi leltár és tesztterv

## Cél és forráskorlát

Az Exchange kiváltása az `SRC-003` alapján stratégiai irány. Az `SRC-004` belső munkadokumentum, ezért az ott szereplő műszaki állítások nem auditált tények. A csomag feladata az SMTP relay-, kliens-, eszköz-, alkalmazás- és külső gateway-függőségek bizonyítható felmérése minden migrációs döntés előtt.

Ez a csomag nem engedélyez migrációt, tesztüzenetet, production lekérdezést, connector-, DNS-, tanúsítvány- vagy routingváltoztatást.

## Emberi végrehajtási sorrend

1. A belső infrastruktúra-/levelezési kontrollgazda jelölje ki a scope-ot, adatminősítést, exportmódszert és védett tárolót.
2. Kollár Csaba és a rendszerowner csak jóváhagyott, legkisebb jogosultságú read-only exportokat készítsen.
3. Az alkalmazás-, eszköz- és üzleti ownerek erősítsék meg a dependency rekordokat és üzletmeneti hatást.
4. A tesztforgatókönyveket külön change ticketben, G3 jóváhagyással, kontrollált címzettekkel és leállítási feltételekkel tervezzék meg.
5. Minden teszthez előzetes baseline, elvárt eredmény, rollback-trigger és visszaellenőrzés tartozzon.
6. A migrációs célmodell csak a teljes leltár, tesztek, licenc-, megőrzési-, biztonsági és rollback-review után kerülhet külön emberi döntésre.

## Adatkezelés

Valós e-mail-cím, felhasználólista, IP-cím, credential, connector-konfiguráció és nyers message tracking log nem kerülhet Gitbe. Itt csak belső azonosító, védett URI, hash és review-metaadat tárolható.

## Kötelező evidencia

- jóváhagyott read-only exportok és mintalog védett URI/SHA-256 értéke;
- alkalmazás-, eszköz- és üzleti owner sign-off;
- tesztenként owner- és G3-approval, eredmény, hiba és rollback-evidencia;
- aktuális konfigurációs baseline és visszaállítási eljárás;
- G1 domain review és külön migrációs döntési rekord.
