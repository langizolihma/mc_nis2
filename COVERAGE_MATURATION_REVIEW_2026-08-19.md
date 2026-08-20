# A-043–A-127 végrehajtási és G1/G2/G3 review-csomag – 2026-08-19

> **PROPOSAL tartalom, D-035 menedzsment-határidők.** A részletesítés nem igazol megvalósítást vagy evidenciaelfogadást; a szakmai tartalom G1/G3, a végleges terv G4 review-ra vár.

```json
{
  "status": "PROPOSAL",
  "agent_role": "remediation_planner",
  "source_refs": ["SRC-008", "SRC-009", "SRC-010", "data/action_execution_details.csv"],
  "assumptions": ["Az SRC-009 végrehajtási lépései G1 review előtti támpontok."],
  "confidence": "medium",
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL;G3_PRODUCTION_CHANGE;G4_APPROVAL",
  "forbidden_automatic_actions": ["approve_action", "accept_evidence", "close_action", "submit_external", "change_production"]
}
```

## Elkészült gépi előkészítés

- Részletesített intézkedés: **85**.
- Kontrollspecifikus, számozott végrehajtási checklist: **85/85**.
- Mérhető lezárási feltétel és evidenciaelvárás: **85/85**.
- Javasolt kontrollgazda és közreműködők: **85/85**.
- Belső kontrollgazda még név szerint kijelölendő: **61**.
- Helyi evidenciajelölttel rendelkező kontroll: **0**; ezek még nem elfogadott evidenciák.
- D-035 menedzsment-baseline szerint rögzített céldátum: **85**.

## D-035 ütemezési hullámok

| Belső célteljesítés | Tételek | Értelmezés |
|---|---:|---|
| 2027-02-26 | 25 | közepes összetettségű működési feladatok |
| 2027-04-30 | 41 | összetett előkészítés vagy P0 műszaki feladatok |
| 2027-06-30 | 19 | összetett technikai megvalósítás és teszt |

A G1 tartalmi review célja minden új tételnél **2026-09-11**. A céldátumok a D-035 szerinti menedzsment-baseline részei; a végleges hatósági terv G4 jóváhagyása továbbra is kötelező.

## Követelménycsaládok

| Család | Tételek | Elsődleges review-út |
|---:|---:|---|
| 1 | 12 | IBF + projektvezető; jogi review szükség szerint |
| 2 | 10 | belső technikai kontrollgazda + Kollár Csaba + IBF |
| 3 | 3 | Koncz Erika + IBF |
| 4 | 4 | belső naplózási kontrollgazda + Kollár Csaba + IBF |
| 5 | 7 | IBF + projektvezető/jogi reviewer |
| 6 | 6 | belső konfigurációgazda + Kollár Csaba + IBF |
| 7 | 2 | Kóczán Mónika + Kollár Csaba + IBF |
| 8 | 9 | belső IAM-gazda + Kollár Csaba + IBF |
| 9 | 3 | belső incidenskontroll-gazda + Kollár Csaba + IBF/jog |
| 10 | 3 | belső karbantartási gazda + Kollár Csaba + IBF |
| 12 | 1 | Német Péter + IBF |
| 16 | 2 | beszerzési/szerződésgazda + jog + IBF |
| 17 | 9 | belső infrastruktúra-gazda + Kollár Csaba + IBF |
| 18 | 5 | belső rendszerintegritási gazda + Kollár Csaba + IBF |
| 19 | 9 | ellátásilánc-/beszerzési gazda + jog + IBF |

## Tételes jóváhagyási munkalap

| Akció | Kontroll | Javasolt kontrollgazda | G1 | Javasolt teljesítés | Evidenciajelölt | Döntés |
|---|---|---|---|---|---|---|
| A-043 | 1.6 – Biztonsági teljesítmény mérése | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-044 | 1.10 – Kockázatmenedzsment stratégia | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-045 | 1.11 – Engedélyezési folyamatok meghatározása | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-046 | 1.12 – Szervezeti működés és üzleti folyamatok meghatározása | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-047 | 1.14 – Biztonsági személyzet képzése | Koncz Erika – HR-kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-048 | 1.15 – Tesztelés, képzés és felügyelet | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-049 | 1.16 – Szakmai csoportokkal és közösségekkel való kapcsolattartás | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-050 | 1.17 – Fenyegetettség tudatosító program | Koncz Erika – HR-kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-051 | 1.19 – Kockázatmenedzsment keretrendszer | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-052 | 1.20 – Kockázatkezelésért felelős szerepkörök | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-053 | 1.21 – Ellátási lánc kockázatmenedzsment stratégiája | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-054 | 1.23 – Folyamatos felügyeleti stratégia | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-055 | 2.1 – Szabályzat és eljárásrendek | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-056 | 2.15 – Hozzáférési szabályok érvényesítése | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-057 | 2.71 – Sikertelen bejelentkezési kísérletek | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-058 | 2.75 – A rendszerhasználat jelzése | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-059 | 2.88 – Azonosítás vagy hitelesítés nélkül engedélyezett tevékenységek | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-060 | 2.100 – Távoli hozzáférés | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-061 | 2.108 – Vezeték nélküli hozzáférés | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-062 | 2.113 – Mobil eszközök hozzáférés-ellenőrzése | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-063 | 2.115 – Külső elektronikus információs rendszerek használata | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-064 | 2.124 – Nyilvánosan elérhető tartalom | TBD – belső metALCOM technikai kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-065 | 3.2 – Biztonságtudatossági képzés | Koncz Erika – HR-kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-066 | 3.4 – Biztonságtudatossági képzés – Belső fenyegetés | Koncz Erika – HR-kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-067 | 3.9 – Szerepkör alapú biztonsági képzés | Koncz Erika – HR-kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-068 | 4.1 – Szabályzat és eljárásrendek | TBD – belső metALCOM naplózási kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-069 | 4.25 – Naplóinformációk védelme | TBD – belső metALCOM naplózási kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-070 | 4.38 – A naplóbejegyzések megőrzése | TBD – belső metALCOM naplózási kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-071 | 4.40 – Naplóbejegyzések létrehozása | TBD – belső metALCOM naplózási kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-072 | 5.1 – Szabályzat és eljárásrendek | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-073 | 5.2 – Biztonsági értékelések | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-074 | 5.4 – Biztonsági értékelések – Kiberbiztonsági audit | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-075 | 5.7 – Információcsere | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-076 | 5.12 – Engedélyezés | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-077 | 5.18 – Folyamatos felügyelet – Kockázatmonitorozás | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-078 | 5.25 – Belső rendszerkapcsolatok | Lángi Zoltán – IBF/szakmai kontrollgazda-jelölt | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-079 | 6.15 – Biztonsági hatásvizsgálatok | TBD – belső metALCOM konfigurációkezelési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-080 | 6.18 – A változtatásokra vonatkozó hozzáférés korlátozások | TBD – belső metALCOM konfigurációkezelési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-081 | 6.23 – Konfigurációs beállítások | TBD – belső metALCOM konfigurációkezelési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-082 | 6.26 – Legszűkebb funkcionalitás | TBD – belső metALCOM konfigurációkezelési kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-083 | 6.47 – A szoftverhasználat korlátozásai | TBD – belső metALCOM konfigurációkezelési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-084 | 6.49 – Felhasználó által telepített szoftver | TBD – belső metALCOM konfigurációkezelési kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-085 | 7.1 – Szabályzat és eljárásrendek | Kóczán Mónika – folytonossági kontrollgazda-jelölt | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-086 | 7.10 – A folyamatos működésre felkészítő képzés | Kóczán Mónika – folytonossági kontrollgazda-jelölt | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-087 | 8.7 – Azonosítás és hitelesítés (felhasználók) – Hozzáférés a fiókokhoz – Visszajátszás elleni védelem | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-088 | 8.14 – Azonosító kezelés | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-089 | 8.21 – A hitelesítésre szolgáló eszközök kezelése | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-090 | 8.22 – A hitelesítésre szolgáló eszközök kezelése – Jelszó alapú hitelesítés | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-091 | 8.36 – Hitelesítési információk visszajelzésének elrejtése | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-092 | 8.37 – Hitelesítés kriptográfiai modul esetén | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-093 | 8.38 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók) | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-094 | 8.39 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók) – Meghatározott azonosítási profilok használata | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-095 | 8.43 – Újrahitelesítés | TBD – belső metALCOM IAM-kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-096 | 9.25 – A biztonsági események nyomonkövetése | TBD – belső metALCOM incidenskezelési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-097 | 9.27 – A biztonsági események jelentése | TBD – belső metALCOM incidenskezelési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-098 | 9.31 – Segítségnyújtás a biztonsági események kezeléséhez | TBD – belső metALCOM incidenskezelési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-099 | 10.2 – Szabályozott karbantartás | TBD – belső metALCOM karbantartási kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-100 | 10.11 – Távoli karbantartás | TBD – belső metALCOM karbantartási kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-101 | 10.18 – Karbantartó személyek | TBD – belső metALCOM karbantartási kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-102 | 12.37 – Környezeti védelmi intézkedések | Német Péter – fizikai védelmi kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-103 | 16.16 – Biztonságtervezési elvek | TBD – belső beszerzési/szerződésgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-104 | 16.49 – Külső elektronikus információs rendszerek szolgáltatásai | TBD – belső beszerzési/szerződésgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-105 | 17.1 – Szabályzat és eljárásrendek | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-106 | 17.12 – Szolgáltatásmegtagadással járó támadások elleni védelem | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-107 | 17.49 – Kriptográfiai kulcs előállítása és kezelése | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-108 | 17.53 – Kriptográfiai védelem | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-109 | 17.54 – Együttműködésen alapuló informatikai eszközök | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-110 | 17.69 – Biztonságos név/cím feloldási szolgáltatás (hiteles forrás) | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-111 | 17.71 – Biztonságos név/cím feloldó szolgáltatás (rekurzív vagy gyorsítótárat használó feloldás) | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-112 | 17.72 – Architektúra és tartalékok név/cím feloldási szolgáltatás esetén | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-113 | 17.108 – A folyamatok elkülönítése | TBD – belső metALCOM infrastruktúra-kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-114 | 18.1 – Szabályzat és eljárásrendek | TBD – belső metALCOM rendszerintegritási kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-115 | 18.8 – Kártékony kódok elleni védelem | TBD – belső metALCOM rendszerintegritási kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-116 | 18.13 – Az EIR monitorozása | TBD – belső metALCOM rendszerintegritási kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-117 | 18.37 – Biztonsági riasztások és tájékoztatások | TBD – belső metALCOM rendszerintegritási kontrollgazda | 2026-09-11 | 2027-06-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-118 | 18.67 – Információ kezelése és megőrzése | TBD – belső metALCOM rendszerintegritási kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-119 | 19.2 – Ellátási láncra vonatkozó kockázatmenedzsment szabályzat | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-120 | 19.7 – Ellátási lánc ellenőrzések és folyamatok – Alvállalkozók | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-121 | 19.13 – Beszerzési stratégiák, eszközök és módszerek | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-122 | 19.19 – Értesítési megállapodások | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-123 | 19.22 – Rendszerek vagy rendszerelemek vizsgálata | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-124 | 19.23 – Rendszerelem hitelessége | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-125 | 19.24 – Rendszerelem hitelessége – Hamisítás elleni képzés | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-126 | 19.25 – Rendszerelem hitelessége – Konfigurációfelügyelet | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-04-30 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |
| A-127 | 19.27 – Rendszerelem selejtezése, megsemmisítése | TBD – belső ellátásilánc-/beszerzési kontrollgazda | 2026-09-11 | 2027-02-26 | nincs közvetlenül azonosítva | APPROVED / NEEDS_CHANGES |

## Jóváhagyási blokk

- G1 szakmai reviewer(ek): ____________________
- G1 döntés és dátum: ____________________
- Jóváhagyott kontrollgazda-/közreműködő-lista: ____________________
- G2 jogi/IBF dátumjóváhagyás: ____________________
- G3 technikai review-döntés az érintett 52 tételre: ____________________
- G4 vezetői jóváhagyás: ____________________
- Aláírt döntési rekord védett URI-ja és SHA-256 értéke: ____________________
