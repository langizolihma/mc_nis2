# Completion report – H-002 Microsoft Graph read-only readiness

Dátum: 2026-07-23  
Státusz: `IMPLEMENTED_DESIGN_ONLY_READINESS`  
Élő kapcsolat: nincs  
Formális hatás: nincs  
Kötelező továbblépési kapuk: G1, G2, G3

## Eredmény

Elkészült az élő, csak olvasható SharePoint/Microsoft Graph szinkron hálózatmentes előkészítése. A csomag rögzíti a célwebhelyet, a minimumjogosultsági jelöltet, a credential-elvet, a delta-szinkron tervét, a tiltott műveleteket és a három emberi döntési kaput.

A konfiguráció jelenleg szándékosan `BLOCKED_PENDING_HUMAN_GATES` állapotú. Nem hoz létre Entra alkalmazást, nem kér jogosultságot, nem szerez tokent, nem indít Graph-kérést és nem ír SharePoint-adatot.

## Elkészült elemek

- `config/sharepoint_graph_readiness.json`: géppel validálható readiness-szerződés.
- `SHAREPOINT_GRAPH_DECISION_PACKAGE.md`: G1/G2/G3 aláírásra előkészített döntési csomag.
- `src/nis2_harness/sharepoint_readiness.py`: fail-closed validátor és portálprojekció.
- `validate-sharepoint-readiness` CLI-parancs.
- Portálos readiness állapotjelzés az Evidenciák nézetben.
- Negatív tesztek írási/broad permission, hálózat, tokenkérés, hamis jóváhagyás, plaintext secret és scope-eltérés ellen.
- A DEF-032 és DEF-033 emberi feladatok kiegészítése a Graph-pilot követelményeivel.
- Handoff, backlog, README és portáldokumentáció frissítése.

## Biztonsági baseline

- Jogosultságjelölt: `Sites.Selected`, NIS2 site-szintű read granttel.
- Engedélyezett HTTP-művelet: kizárólag `GET`.
- `Sites.ReadWrite.All`, írás és tenant-szintű broad permission tiltott.
- Credential-preferencia: managed identity vagy tanúsítvány.
- Plaintext secret, token vagy privát kulcs nem kerülhet Gitbe.
- Függő emberi kapuk mellett hálózat- és tokenkérés-tiltás.
- Hiba esetén fail-closed működés.

## Ellenőrzések

- Célzott tesztek: 17/17 sikeres.
- Teljes regressziós készlet: 237/237 sikeres.
- Readiness baseline: 0 hard error, 4 szándékos warning.
- A warningok közül három a függő G1/G2/G3 kapu, egy a design-only hálózattiltás.

## Emberileg pótlandó

### G1

- SharePoint belső oszlopnevek és kanonikus mezőtérkép.
- Adatgazda és maximális elfogadható frissesség.
- Törölt/archivált/lezárt feladatok szakmai kezelése.

### G2

- Adatminősítés, retention, cache és auditlog.
- Szolgáltatásazonosság gazdája és credential védett tárolása.
- `Sites.Selected` read grant nem éles technikai bizonyítása.
- Titok- és tokenmentes naplózás ellenőrzése.

### G3

- Entra app registration és pontos site/list azonosító.
- Site grant, pilot gép, futtatási fiók és hálózati szabály.
- Kill switch, hozzáférés-visszavonás és rollback próba.
- Pilot időablak és jóváhagyott futtatási rekord.

## Tiltott automatikus műveletek

- `accept_evidence`
- `close_action`
- `formal_approval`
- `sharepoint_write_back`
- `submit_external`
- `change_production`
