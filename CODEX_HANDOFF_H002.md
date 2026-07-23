---
handoff_id: H-002
status: IMPLEMENTED_LOCAL_PILOT_GRAPH_AND_AUTH_READINESS
created: "2026-07-20"
action_ids: [A-032, A-042]
required_human_gates: [G1_DOMAIN_REVIEW, G2_SECURITY_LEGAL, G3_PRODUCTION_CHANGE]
---

# H-002 – Local-only folyamatos auditfelkészültségi agent job pilot

## Cél

A H-002 a H-001 determinisztikus registry és az A-042 szintetikus feldolgozó fölé biztonságos job-csomagolást ad. Egy rögzített JSON fixture-ből forráshivatkozott javaslatokat, emberi approval queue-t, szimulált munkamérőszámot és hash-láncolt futási naplót készít.

## Engedélyezett működés

- kizárólag `LOCAL_FIXTURE_ONLY` mód;
- bemenet csak a repository `tests/fixtures/` könyvtárából;
- bemenet olvasás előtt SHA-256 ellenőrzés;
- kimenet csak a `generated/` könyvtárba;
- hálózat, külső AI, éles rendszer és érzékeny adat nélkül;
- minden eredmény `PROPOSAL`, `PENDING_HUMAN`, `formal_effect: false`;
- determinisztikus azonosítók, rendezés és hash-láncolt auditlog.

## Tiltott automatikus műveletek

- evidencia elfogadása;
- akció lezárása;
- éles rendszer módosítása;
- külső benyújtás;
- vásárlás.

## Futtatás

```powershell
python -m nis2_harness run-h002-agent-pilot `
  --job config/h002_agent_pilot.json `
  --root . `
  --output generated/h002_agent_pilot_output.json
```

## Pilot elfogadási minimum

1. a job- és engine-validáció hard hiba nélkül lefut;
2. tíz szintetikus technikai esetből tíz a várt emberi kapura kerül;
3. hash-eltérés, tiltott útvonal és nyitott output policy fail-closed hibát ad;
4. bekapcsolt kill switch mellett nulla esemény kerül feldolgozásra;
5. a hash-lánc determinisztikusan újraszámítható;
6. a portál csak olvassa a proposalokat, nem hajt végre formális műveletet.

## Továbblépési korlát

A tíz beépített eset szintetikus technikai teszt, nem emberileg jóváhagyott audit-gold case. Valós, akár csak read-only forrás csatlakoztatása előtt a `DEF-010`, `DEF-011`, `DEF-031`, `DEF-033` tételek teljesítése, G1/G2 review és G3 pilotdöntés szükséges.

## SharePoint-integráció első szelete

A portál a `data/sharepoint_task_snapshot.json` helyi, ellenőrzött pillanatképből a 35 `DEF-*` emberi feladathoz kapcsolódó SharePoint-dokumentumot meg tudja nyitni. Ez nem élő Graph-kapcsolat: nem végez hálózati lekérést, nem ír vissza a SharePointba, és nem keletkeztet formális jóváhagyást vagy evidenciát. Hibás host, séma, azonosító-lefedettség vagy konfiguráció esetén a működés fail-closed, a linkek nem kerülnek a portál kimenetébe.

A további fejlesztési munkablokkokat és kapukat a [H002_DEVELOPMENT_BACKLOG.md](H002_DEVELOPMENT_BACKLOG.md) tartalmazza.

## Élő Graph-olvasás előkészítése

A `config/sharepoint_graph_readiness.json` és a `SHAREPOINT_GRAPH_DECISION_PACKAGE.md` előkészíti az élő, csak olvasható Microsoft Graph pilotot. A konfigurációt a `validate-sharepoint-readiness` parancs fail-closed módon ellenőrzi. Függő G1/G2/G3 kapu mellett hálózat, tokenkérés, credential repositoryban tárolása és SharePoint-visszaírás nem engedélyezhető. A portál ezt az állapotot láthatóan jelzi.

## Portálhitelesítés előkészítése

A D-029, a `config/portal_auth_policy.json` és a `PORTAL_AUTH_DECISION_PACKAGE.md` rögzíti a vállalati Microsoft-bejelentkezésre és tényleges NIS2 SharePoint read-probe-ra épülő belépési modellt. A `validate-portal-auth` parancs ellenőrzi a deny-by-default admissiont, a szerepköröket, a session-kontrollokat és a függő G1/G2/G3 kapukat. Valós bejelentkezés, tokenkezelés és hálózati elérés továbbra sincs.
