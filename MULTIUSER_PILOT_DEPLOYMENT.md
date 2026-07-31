# Többfelhasználós NIS2 portálpilot – telepítési és átadási terv

## Mit készít elő ez a csomag?

A helyi bemutató most már tranzakciós SQLite-adatbázisban tudja tárolni a
feladatmozgásokat és a csatolmányok metaadatait. Az események továbbra is
append-only, hash-láncolt tervezetek, tehát nem válnak automatikusan
jóváhagyássá vagy audit-evidenciává. A csatolt fájlok a Gitből kizárt
`portal_runtime/attachments/` könyvtárban maradnak.

A Python alkalmazás többfelhasználós pilotban is csak a szerver
`127.0.0.1` címén hallgathat. A felhasználók elé jóváhagyott HTTPS gateway,
Microsoft Entra-bejelentkezés és szerveroldali szerepkör-ellenőrzés kell.
Közvetlen LAN-kötés (`0.0.0.0`) nem megengedett.

## Mi működik már fejlesztési oldalon?

- SQLite WAL-adatbázis és egyidejű írás elleni tranzakció;
- optimista állapotellenőrzés, így két felhasználó nem írhatja felül
  észrevétlenül egymás munkáját;
- hash-láncolt feladatesemény és külön auditnapló;
- csatolmányok ellenőrzött fájlnévvel, méretkorláttal és SHA-256-tal;
- a korábbi JSONL-adatok idempotens átvétele;
- futás közben is konzisztens SQLite-mentés;
- ZIP-útvonal-, méret-, hash- és SQLite-integritás-ellenőrzés;
- fail-closed többfelhasználós konfiguráció és automatikus validátor;
- indító- és mentő PowerShell-segéd.

## Mihez kell még ember vagy rendszergazda?

1. Ki kell jelölni a Windows szervert, az üzemeltetőt és a mentési helyet.
2. El kell dönteni a belső DNS-nevet, HTTPS tanúsítványt, gatewayt és
   hálózati zónát.
3. Microsoft Entra single-tenant alkalmazást kell regisztrálni, valós
   tenant-, client- és HTTPS redirect URI-adatokkal.
4. Jóváhagyott Microsoft hitelesítési könyvtárat kell kiválasztani és
   telepítését engedélyezni. Saját tokenprotokoll nem készülhet.
5. A négy szerepkörhöz Entra object ID alapján, írásban jóváhagyott
   hozzárendelés szükséges. A fájl mintája:
   `config/pilot_role_assignments.example.json`; a kitöltött példány nem
   kerülhet Gitbe.
6. A NIS2 SharePoint-webhelyhez legkisebb, kiválasztott hatókörű jogot és
   külön site/folder grantot kell adni; széles tenantjog nem elfogadható.
7. G1 funkcionális, G2 biztonsági/jogi és G3 pilotváltoztatási jóváhagyás
   kell. Ezek után módosítható a
   `config/multiuser_pilot.json` státusza és kapcsolói.
8. A felhasználói pilot előtt sikeres mentés-visszaállítási,
   jogosultsági, negatív és leállítási próbát kell jegyzőkönyvezni.

## Hitelesítési döntés

Az alkalmazásba épített Entra OIDC authorization-code + PKCE a javasolt
cél. A protokollt Microsoft által támogatott könyvtárral kell megvalósítani,
nem saját tokenfeldolgozással. Az Entra Application Proxy külön
alternatíva távoli hozzáféréshez, de licencet, connector-üzemeltetést és a
backend connectorra szűkítését igényli; általános belső hálózati forgalomra
nem automatikus választás.

Hivatalos Microsoft-források:

- [OAuth 2.0 authorization code flow és PKCE](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow)
- [Application Proxy áttekintés](https://learn.microsoft.com/en-us/entra/identity/app-proxy/overview-what-is-app-proxy)
- [Application Proxy header-alapú SSO és backend-korlátozás](https://learn.microsoft.com/en-us/entra/identity/app-proxy/application-proxy-configure-single-sign-on-with-headers)
- [Selected permissions – legkisebb Graph-hatókör](https://learn.microsoft.com/en-us/graph/permissions-selected-overview)

## Fejlesztői és adminisztrátori ellenőrzés

Helyi, nem hálózati próba:

```powershell
python -m nis2_harness validate-multiuser-pilot
python -m nis2_harness serve-portal --host 127.0.0.1 --port 8765
```

Mentés és azonnali ellenőrzés:

```powershell
.\deploy\windows\Backup-Nis2Pilot.ps1
```

A hálózati indító jelenleg szándékosan hibával leáll, mert a konfiguráció
`BLOCKED_PENDING_G1_G2_G3`. Ez biztonsági kontroll, nem hiányzó funkció.

## Élesítés előtti kész definíciója

- a konfigurációvalidátor 0 hibát jelez;
- mindhárom kapu valós reviewerrel és evidenciahivatkozással `APPROVED`;
- a HTTPS cím és tanúsítvány ellenőrzött;
- a backend kívülről közvetlenül nem érhető el;
- belépés, kijelentkezés, session lejárat és hozzáférés-visszavonás tesztelt;
- minden szerepkör pozitív és negatív próbája sikeres;
- SharePoint-feltöltés csak a kijelölt mappába működik;
- feltöltés után a visszaolvasott fájl hash-e egyezik;
- mentés és elkülönített visszaállítás sikeres;
- a pilot leállításának felelőse és módja dokumentált.
