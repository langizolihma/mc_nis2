# Completion report – H-002 portál auth/RBAC readiness

Dátum: 2026-07-23  
Státusz: `IMPLEMENTED_LOCAL_POLICY_PROTOTYPE`  
Valós Microsoft-bejelentkezés: nincs  
Formális hatás: nincs  
Kötelező továbblépési kapuk: G1, G2, G3

## Eredmény

A D-029 jóváhagyott baseline alapján elkészült a portál vállalati Microsoft-bejelentkezési és jogosultsági modelljének hálózatmentes prototípusa.

A belépési szabály két együttes feltételt követel:

1. szerveroldalon validált vállalati Microsoft Entra-identitás;
2. read-only próbával igazolt hozzáférés a `https://metalcom.sharepoint.com/sites/NIS2` webhelyhez.

A név, e-mail-domain, kliensoldali szerepkörállítás vagy ID token önmagában nem jogosít belépésre. Sikertelen vagy bizonytalan vizsgálat eredménye `DENY`.

## Elkészült elemek

- D-029 döntési baseline.
- `config/portal_auth_policy.json` deny-by-default auth/RBAC szerződés.
- `PORTAL_AUTH_DECISION_PACKAGE.md` G1/G2/G3 döntési csomag.
- `src/nis2_harness/portal_auth.py` policy-validátor, szintetikus authorization evaluator és biztonságos portálprojekció.
- `validate-portal-auth` CLI-parancs.
- `VIEWER`, `TASK_OWNER`, `REVIEWER`, `PORTAL_ADMIN` induló szerepkörmodell.
- Portálos auth-readiness állapotjelzés a Jóváhagyások nézetben.
- Negatív tesztek a kliensoldali tagság, e-mail-domain, tiltott jogosultság, SharePoint-hozzáférés hiánya, szerepköremelés és korai bekapcsolás ellen.
- A DEF-032 emberi feladat kiegészítése.

## Biztonsági baseline

- Egytenantos Microsoft Entra ID.
- Authorization code flow PKCE-vel.
- Szerveroldalon validált identitás és session.
- ID token nem használható SharePoint-jogosultság igazolására.
- A site-hozzáférést delegált access tokennel végzett `GET` próba igazolja.
- HTTPS, Secure/HttpOnly/SameSite cookie és CSRF-védelem kötelező.
- Token nem kerül böngésző-storage-ba, Gitbe vagy naplóba.
- Függő G1/G2/G3 kapuk mellett auth, hálózat, tokenkérés, admission és RBAC enforcement kikapcsolt.
- Egyetlen szerepkör sem kap formális jóváhagyási, evidenciaelfogadási vagy SharePoint-írási jogot.

## Emberileg pótlandó

### G1

- Szerepkör-gazda és hozzárendelési forrás.
- Feladatfelelős/reviewer pontos műveletei.
- Helyettesítési és hozzáférés-visszavonási folyamat.

### G2

- Tenant/client ID és delegált scope.
- Jóváhagyott Microsoft tokenkönyvtár.
- HTTPS, session, CSRF, kijelentkezés és retention.
- Vendégfelhasználók és Conditional Access/MFA viselkedésének próbája.

### G3

- Entra app registration és redirect URI.
- Pilot URL, szerver és TLS.
- Pozitív/negatív belépési és site-access próba.
- Szerepköremelés-, visszavonási és kill-switch teszt.

## Ellenőrzések

- Célzott auth/portál tesztek: 17/17 sikeres.
- Teljes regressziós készlet: 245/245 sikeres.
- Auth policy baseline: 0 hard error, 4 szándékos warning.
- A warningok közül három a függő G1/G2/G3 kapu, egy a design-only auth-tiltás.

## Tiltott automatikus műveletek

- `accept_evidence`
- `close_action`
- `formal_approval`
- `assign_privileged_role`
- `sharepoint_write_back`
- `submit_external`
- `change_production`
