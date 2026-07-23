# H-002 fejlesztési hátralék – belső NIS2 portál és agent

Állapot: `PROPOSAL`  
Felülvizsgálat dátuma: 2026-07-23  
Kötelező emberi kapuk: G1 szakmai, G2 biztonsági/jogi, G3 élesítési

## Mit tekintünk teljes fejlesztési végállapotnak?

Helyi hálózaton, hitelesített felhasználókkal elérhető belső portált, amelyben a résztvevők a feladatokat, dokumentumokat, jóváhagyásokat és AI-javaslatokat egy helyen kezelik. Az AI csak előkészít és javasol; az evidencia elfogadása, a formális jóváhagyás, az akció lezárása és az éles módosítás emberi hatáskör marad.

## Munkablokkok

### 1. SharePoint hivatkozások helyi, csak olvasható bekötése

Állapot: `IMPLEMENTED_IN_THIS_SLICE`

- A 35 kanonikus `DEF-*` emberi feladat helyi SharePoint-pillanatképe.
- Pontos azonosító-lefedettség és URL-engedélylista.
- A portálból megnyitható kapcsolódó dokumentumok.
- Hibás konfiguráció vagy eltérés esetén fail-closed működés.
- Nincs hálózati lekérés, SharePoint-módosítás vagy formális hatás.

Elfogadási feltétel: minden helyi feladathoz pontosan egy engedélyezett NIS2 SharePoint-hivatkozás tartozik; hibás host, séma, duplikáció vagy hiány esetén egyetlen link sem kerül kiadásra.

### 2. Élő, csak olvasható Microsoft Graph/SharePoint szinkron

Állapot: `READINESS_PACKAGE_IMPLEMENTED_LIVE_SYNC_BLOCKED_BY_G1_G2_G3`

- Alkalmazásregisztráció és legkisebb szükséges olvasási jogosultság.
- Tenant-, webhely- és listakorlátozás.
- Delta/időbélyeg alapú szinkron, gyorsítótár és hibatűrés.
- Forrásazonosító, verzió és lekérési idő megőrzése.

Elkészült előkészítés:

- fail-closed readiness konfiguráció és validátor;
- G1/G2/G3 aláírásra előkészített döntési csomag;
- `Sites.Selected` site-szintű read grant mint minimumjogosultsági jelölt;
- managed identity vagy tanúsítvány credential-preferencia;
- delta/full-resync/tombstone kezelési terv;
- portálos readiness állapotjelzés.

Még nem készült el és kapu nélkül nem indítható: Entra app registration, site/list azonosító felderítése, tokenkérés, Graph-hálózati kapcsolat, ütemezés vagy éles cache.

Elfogadási feltétel: a portál hálózati vagy jogosultsági hiba esetén nem állít valótlan friss állapotot, és semmilyen SharePoint-adatot nem módosít.

### 3. Hitelesítés és szerepkör-alapú jogosultság

Állapot: `LOCAL_POLICY_PROTOTYPE_IMPLEMENTED_LIVE_ENTRA_BLOCKED_BY_G1_G2_G3`

- Vállalati bejelentkezés.
- Legalább megtekintő, feladatfelelős, reviewer és admin szerep.
- Szerveroldali jogosultság-ellenőrzés minden műveletnél.
- Munkamenet-védelem, naplózás és jogosultság-visszavonás.

Elkészült előkészítés:

- D-029 szerinti belépési baseline;
- fail-closed auth/RBAC policy és CLI-validátor;
- vállalati Entra-identitás + NIS2 site read-probe admission szabály;
- `VIEWER`, `TASK_OWNER`, `REVIEWER`, `PORTAL_ADMIN` helyi jogosultsági modell;
- kliensoldali tagsági állítás, e-mail-domain alapú belépés, hamis szerepköremelés és tiltott formális művelet negatív tesztje;
- portálos auth-readiness állapotjelzés;
- G1/G2/G3 döntési csomag.

Még nem készült el és kapu nélkül nem indítható: Entra app registration, valós tenant/client ID, redirect URI, tokenkönyvtár, HTTPS session, delegált SharePoint access token és tényleges site read-probe.

Elfogadási feltétel: névtelen vagy illetéktelen felhasználó nem lát és nem módosít védett adatot; minden művelet személyhez köthető.

### 4. Formális jóváhagyási folyamat és visszaírás

Állapot: `BLOCKED_BY_G2_G3`

- Jóváhagyás, visszaküldés és elutasítás állapotgépe.
- Kötelező indoklás, időbélyeg, reviewer és változat.
- Idempotens visszaírás és verzióütközés-kezelés.
- Változtathatatlan auditnapló.

Elfogadási feltétel: write-back csak hitelesített, jogosult ember kifejezett műveletére történhet. Az AI nem fogadhat el evidenciát, nem zárhat le akciót, és nem indíthat külső benyújtást.

### 5. Evidencia-életciklus

Állapot: `PLANNED_REQUIRES_HUMAN_DECISIONS`

- Dokumentumazonosító, forrás, verzió, hash és megőrzési besorolás.
- Védett tárhely, hozzáférés, mentés és visszaállítás.
- Lejárat, felülvizsgálat és törlési zárolás.
- Bizalmas tartalom elkülönítése a portál biztonságos metaadataitól.

Elfogadási feltétel: egy auditbizonyíték eredete és változata visszakövethető, a visszaállítás tesztelt, a megőrzés jóváhagyott.

### 6. Folyamatos auditfelkészültségi agent

Állapot: `LOCAL_FIXTURE_PILOT_AVAILABLE`

- Jóváhagyott, anonimizált gold case készlet és mérőszámok.
- Valós forrásokhoz külön, read-only adapterek.
- Proposal-séma, forráshivatkozás, bizonytalanság és emberi kapu.
- Kill switch, költségkeret, hibahatár és emberi felügyelet.

Elfogadási feltétel: az agent minden állítást forráshoz köt, bizonytalanságot jelöl, nem hajt végre tiltott műveletet, és mérhető pontossági minimumot teljesít.

### 7. Belső hálózati üzemeltetés

Állapot: `BLOCKED_BY_G2_G3`

- Jóváhagyott szerver és hálózati zóna.
- TLS-tanúsítvány, titokkezelés és naplóvédelem.
- Mentés, visszaállítás, frissítés, monitorozás és incidenseljárás.
- Üzemeltetési felelős, rendelkezésre állási cél és átadás.

Elfogadási feltétel: sikeres biztonsági felülvizsgálat, mentés-visszaállítási próba és dokumentált G3 élesítési döntés.

## Javasolt végrehajtási sorrend

1. A most elkészült read-only SharePoint-pillanatkép emberi ellenőrzése.
2. G1/G2 döntés az élő Graph-olvasásról, adatkörről és jogosultságról.
3. Hitelesítés és RBAC kialakítása.
4. Élő read-only szinkron és megfigyelhetőség.
5. Evidencia-életciklus és auditnapló.
6. Jóváhagyási állapotgép és csak ezután write-back.
7. Agent gold case validáció és korlátozott read-only pilot.
8. G3 után belső hálózati üzembe helyezés.

## Jelenleg tiltott automatikus műveletek

- akció lezárása;
- evidencia elfogadása;
- formális jóváhagyás;
- SharePoint-visszaírás;
- éles rendszer módosítása;
- külső benyújtás vagy üzenet;
- vásárlás.
