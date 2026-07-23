# SharePoint / Microsoft Graph read-only integráció – döntési csomag

Állapot: `PROPOSAL – BLOCKED_PENDING_G1_G2_G3`  
Dátum: 2026-07-23  
Érintett akciók: A-031, A-042

## Döntési cél

Annak jóváhagyása, hogy a helyi NIS2 portál egy későbbi pilotban automatikusan, kizárólag olvasási céllal lekérhesse a `NIS2 emberi feladatok` SharePoint-lista változásait.

Ez a csomag nem hoz létre Entra alkalmazást, nem kér jogosultságot, nem szerez tokent, nem kapcsolódik a Microsoft Graphhoz és nem módosít SharePoint-adatot.

## Javasolt minimummegoldás

- Külön, egyfeladatos szolgáltatásazonosság.
- Alkalmazásjogosultság-jelölt: `Sites.Selected`, kizárólag a `https://metalcom.sharepoint.com/sites/NIS2` webhelyre adott read granttel.
- Engedélyezett művelet: csak HTTP `GET`.
- `Sites.ReadWrite.All` és minden írási engedély tiltott.
- `Sites.Read.All` csak akkor vizsgálható alternatívaként, ha a listadelta működését `Sites.Selected` jogosultsággal nem lehet technikailag igazolni, és a szélesebb olvasási kört G2 kockázati döntés kifejezetten elfogadja.
- Hitelesítés: Azure-környezetben managed identity; helyi üzemi környezetben tanúsítvány. Tartós klienssecret nem kerülhet Gitbe vagy alkalmazáskonfigurációba.
- Szinkron: kezdeti teljes olvasás után delta lekérdezés; érvénytelen deltaállapotnál kontrollált teljes újraolvasás.
- Törölt SharePoint-elem nem törlődik automatikusan a helyi auditnyomból, hanem felülvizsgálandó tombstone állapotot kap.

## Miért ezt javasoljuk?

A Microsoft dokumentációja szerint a `Sites.Selected` egy alkalmazást meghatározott SharePoint-webhelyekre korlátozhat. A listItem delta végpont változáskövetést biztosít, és `nextLink`/`deltaLink` használatával elkerülhető a teljes lista minden alkalommal történő újraolvasása. A Microsoft üzemi alkalmazásoknál managed identityt vagy tanúsítványt javasol a klienssecret helyett.

Hivatkozások:

- Microsoft Graph permission reference: <https://learn.microsoft.com/en-us/graph/permissions-reference>
- SharePoint resource-specific consent: <https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins-modernize/understanding-rsc-for-msgraph-and-sharepoint-online>
- listItem delta: <https://learn.microsoft.com/en-us/graph/api/listitem-delta?view=graph-rest-1.0>
- Entra alkalmazáshitelesítő adatok: <https://learn.microsoft.com/en-us/entra/identity-platform/how-to-add-credentials>

## G1 – szakmai döntés

Aláírás előtt kitöltendő:

- szakmai adatgazda;
- a lista belső oszlopnevei és a kanonikus portálmezők megfeleltetése;
- kötelező mezők és elfogadható hiányok;
- maximális elfogadható adatfrissesség;
- törölt, archivált és lezárt feladatok kezelése.

Döntés: `PENDING`  
Reviewer: `TBD_HUMAN`  
Védett döntési rekord: `TBD_PROTECTED_RECORD`

## G2 – biztonsági és jogi döntés

Aláírás előtt kitöltendő:

- lista és dokumentumhivatkozások adatminősítése;
- helyi cache és deltaállapot megőrzési ideje;
- szolgáltatásazonosság gazdája;
- credential típusa és védett tárolási helye;
- naplózási és incidenskezelési rend;
- `Sites.Selected` + read grant működését igazoló nem éles próba;
- annak igazolása, hogy token, tanúsítvány-privátkulcs vagy secret nem kerül Gitbe és logba.

Döntés: `PENDING`  
Reviewer: `TBD_HUMAN`  
Védett döntési rekord: `TBD_PROTECTED_RECORD`

## G3 – élesítési/pilotdöntés

Aláírás előtt kitöltendő:

- Entra app registration azonosítója;
- pontos site/list azonosító;
- site-szintű read grant bizonyítéka;
- pilot gép és futtatási fiók;
- hálózati kimenő szabály;
- visszavonási és kill-switch próba;
- pilot kezdő- és záródátuma;
- rollback: grant visszavonása, ütemezés leállítása, helyi cache zárolása.

Döntés: `PENDING`  
Reviewer: `TBD_HUMAN`  
Védett döntési rekord: `TBD_PROTECTED_RECORD`

## Elfogadási feltételek a későbbi pilothoz

1. Mindhárom kapu jóváhagyott és védett rekorddal igazolt.
2. A konfigurációban nincs secret, token vagy privát kulcs.
3. Csak a kijelölt NIS2 webhely és lista olvasható.
4. Írási kérés technikailag és szabályzatilag tiltott.
5. Hálózati, hitelesítési vagy sémahiba esetén a portál a cache korát és a hibát jelzi, nem állít friss állapotot.
6. A deltaállapot elvesztése vagy `410 Gone` válasz kontrollált teljes újraolvasást indít, de helyi auditrekordot nem töröl.
7. A szolgáltatásazonosság hozzáférése azonnal visszavonható, a futás kill switch-csel leállítható.

## Aláírási hely

G1 szakmai reviewer: ____________________  Dátum: __________

G2 biztonsági/jogi reviewer: ____________________  Dátum: __________

G3 pilot/élesítési jóváhagyó: ____________________  Dátum: __________
