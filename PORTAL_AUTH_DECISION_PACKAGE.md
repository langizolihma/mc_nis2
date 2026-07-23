# Portálhitelesítés és jogosultság – döntési csomag

Állapot: `PROPOSAL – BLOCKED_PENDING_G1_G2_G3`  
Dátum: 2026-07-23  
Baseline: D-029

## Jóváhagyott belépési alap

A felhasználó akkor léphet be a NIS2 portálba, ha:

1. vállalati Microsoft Entra ID-fiókkal sikeresen bejelentkezett;
2. a portál szervere read-only próbával igazolta, hogy a felhasználó hozzáfér a `https://metalcom.sharepoint.com/sites/NIS2` webhelyhez.

Külön NIS2 portálcsoport az induláshoz nem szükséges. A név, e-mail-domain vagy böngészőből érkező tetszőleges szerepkörállítás önmagában nem elegendő.

## Javasolt technikai modell

- Egytenantos Microsoft Entra alkalmazás.
- Böngészős authorization code flow PKCE-vel.
- Szerveroldalon validált identitás és szerveroldali munkamenet.
- A tenant, issuer, audience, aláírás, időbélyegek és nonce ellenőrzése jóváhagyott Microsoft hitelesítési könyvtárral.
- Az ID token csak a felhasználó hitelesítésére szolgál; a SharePoint-hozzáférés igazolása delegált access tokennel végzett `GET` próbából származik.
- Sikertelen, időtúllépő vagy bizonytalan hozzáférési próba eredménye: belépés megtagadva.
- Token nem kerül localStorage-ba, Gitbe, alkalmazásnaplóba vagy review-rekordba.
- HTTPS, Secure/HttpOnly/SameSite session cookie és CSRF-védelem kötelező.

Hivatalos Microsoft-források:

- <https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow>
- <https://learn.microsoft.com/en-us/entra/identity-platform/id-tokens>
- <https://learn.microsoft.com/en-us/entra/identity-platform/claims-validation>
- <https://learn.microsoft.com/en-us/entra/identity-platform/app-sign-in-flow>

## Induló szerepkörök

| Szerepkör | Engedélyezett induló művelet |
|---|---|
| `VIEWER` | áttekintés, feladatok és dokumentumhivatkozások megtekintése |
| `TASK_OWNER` | megtekintés és review-tervezet készítése |
| `REVIEWER` | megtekintés, review-tervezet és visszaküldési javaslat |
| `PORTAL_ADMIN` | megtekintés és hitelesítési diagnosztika |

Egyik szerepkör sem fogadhat el automatikusan evidenciát, nem zárhat le akciót, nem írhat vissza SharePointba és nem végezhet külső benyújtást. Formális jóváhagyási jogot ez a munkarész még nem vezet be.

## G1 – szerepkör- és folyamatreview

Kitöltendő:

- szerepkör-gazda;
- név szerinti szerepkör-hozzárendelések vagy jóváhagyott hozzárendelési forrás;
- feladatfelelős és reviewer pontos műveletei;
- helyettesítési és hozzáférés-visszavonási rend.

Döntés: `PENDING`  
Reviewer: `TBD_HUMAN`  
Védett rekord: `TBD_PROTECTED_RECORD`

## G2 – biztonsági és jogi review

Kitöltendő:

- tenant ID és jóváhagyott app/client ID;
- delegált Graph/SharePoint scope és read-probe végpont;
- token- és claim-validációs könyvtár;
- HTTPS, cookie, session, CSRF és kijelentkezési szabály;
- bejelentkezési és hozzáférés-megtagadási napló retentionje;
- vendégfelhasználók, letiltott fiókok és hozzáférés-visszavonás kezelése;
- Conditional Access/MFA öröklésének próbája.

Döntés: `PENDING`  
Reviewer: `TBD_HUMAN`  
Védett rekord: `TBD_PROTECTED_RECORD`

## G3 – pilotengedély

Kitöltendő:

- Entra app registration és redirect URI;
- pilot URL, szerver és TLS-tanúsítvány;
- kijelölt pilotfelhasználók;
- pozitív és negatív hozzáférési próba;
- session lejárati és kijelentkezési próba;
- szerepköremelés elleni teszt;
- app/grant visszavonási és kill-switch próba.

Döntés: `PENDING`  
Reviewer: `TBD_HUMAN`  
Védett rekord: `TBD_PROTECTED_RECORD`

## Aláírási hely

G1 szakmai reviewer: ____________________  Dátum: __________

G2 biztonsági/jogi reviewer: ____________________  Dátum: __________

G3 pilotjóváhagyó: ____________________  Dátum: __________
