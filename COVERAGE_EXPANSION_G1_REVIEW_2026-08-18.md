# Lefedettségpótló intézkedések G1/G2 review-csomag – 2026-08-18

> **2026-08-19-i frissítés:** a 85 tétel kontrollspecifikus végrehajtási részletesítése elkészült. A tényleges review-hoz a `COVERAGE_MATURATION_REVIEW_2026-08-19.md` és a `data/action_execution_details.csv` használandó; ez a dokumentum a lefedettség létrehozásának történeti baseline-ja.

> **PROPOSAL – emberi jóváhagyás nélkül nem tekinthető végleges cselekvési tervnek vagy megvalósítási evidenciának.**

```json
{
  "status": "PROPOSAL",
  "agent_role": "remediation_planner_and_control_mapper",
  "source_refs": ["SRC-008:p19-381", "data/audit_findings.csv", "data/actions.csv", "data/control_action_mapping.csv"],
  "assumptions": ["A pontos kontrollkapcsolat lefedettséget jelent, de nem igazol megvalósítást vagy kontrollműködést."],
  "confidence": "medium",
  "required_human_gate": "G1_DOMAIN_REVIEW;G2_SECURITY_LEGAL",
  "forbidden_automatic_actions": ["close_action", "accept_evidence", "submit_external", "change_production"]
}
```

## Eredmény

- Lefedettségpótló új akciójavaslat: **85**.
- Eltéréssel érintett egyedi követelménycsoport: **156**.
- Közvetlen akciókapcsolattal rendelkező eltérés: **310/310**.
- Mapping-sor összesen: **189**, ebből emberileg még `PROPOSED`: **189**.
- A korábbi 85 kontrollszintű és 189 finding-szintű közvetlen lefedettségi hiány gépileg megszűnt.
- A findingok továbbra is gépi kivonatok; a mapping és az új akciók szakmai jóváhagyásra várnak.

## Új akciójavaslatok

| Akció | Kontroll | Család | Érintett scope | Prioritás | Határidő |
|---|---|---:|---|---|---|
| A-043 | 1.6 – Biztonsági teljesítmény mérése | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-044 | 1.10 – Kockázatmenedzsment stratégia | 1 | Szervezet | P1 | TBD – emberi ütemezés |
| A-045 | 1.11 – Engedélyezési folyamatok meghatározása | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-046 | 1.12 – Szervezeti működés és üzleti folyamatok meghatározása | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-047 | 1.14 – Biztonsági személyzet képzése | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-048 | 1.15 – Tesztelés, képzés és felügyelet | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-049 | 1.16 – Szakmai csoportokkal és közösségekkel való kapcsolattartás | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-050 | 1.17 – Fenyegetettség tudatosító program | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-051 | 1.19 – Kockázatmenedzsment keretrendszer | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-052 | 1.20 – Kockázatkezelésért felelős szerepkörök | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-053 | 1.21 – Ellátási lánc kockázatmenedzsment stratégiája | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-054 | 1.23 – Folyamatos felügyeleti stratégia | 1 | Szervezet | P0 | TBD – emberi ütemezés |
| A-055 | 2.1 – Szabályzat és eljárásrendek | 2 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-056 | 2.15 – Hozzáférési szabályok érvényesítése | 2 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-057 | 2.71 – Sikertelen bejelentkezési kísérletek | 2 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-058 | 2.75 – A rendszerhasználat jelzése | 2 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-059 | 2.88 – Azonosítás vagy hitelesítés nélkül engedélyezett tevékenységek | 2 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-060 | 2.100 – Távoli hozzáférés | 2 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-061 | 2.108 – Vezeték nélküli hozzáférés | 2 | Vezetéstámogató;Irodai;Termelés | P2 | TBD – emberi ütemezés |
| A-062 | 2.113 – Mobil eszközök hozzáférés-ellenőrzése | 2 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-063 | 2.115 – Külső elektronikus információs rendszerek használata | 2 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-064 | 2.124 – Nyilvánosan elérhető tartalom | 2 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-065 | 3.2 – Biztonságtudatossági képzés | 3 | Szervezet | P0 | TBD – emberi ütemezés |
| A-066 | 3.4 – Biztonságtudatossági képzés – Belső fenyegetés | 3 | Szervezet | P0 | TBD – emberi ütemezés |
| A-067 | 3.9 – Szerepkör alapú biztonsági képzés | 3 | Szervezet | P0 | TBD – emberi ütemezés |
| A-068 | 4.1 – Szabályzat és eljárásrendek | 4 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-069 | 4.25 – Naplóinformációk védelme | 4 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-070 | 4.38 – A naplóbejegyzések megőrzése | 4 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-071 | 4.40 – Naplóbejegyzések létrehozása | 4 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-072 | 5.1 – Szabályzat és eljárásrendek | 5 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-073 | 5.2 – Biztonsági értékelések | 5 | Vezetéstámogató;Irodai;Termelés | P2 | TBD – emberi ütemezés |
| A-074 | 5.4 – Biztonsági értékelések – Kiberbiztonsági audit | 5 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-075 | 5.7 – Információcsere | 5 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-076 | 5.12 – Engedélyezés | 5 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-077 | 5.18 – Folyamatos felügyelet – Kockázatmonitorozás | 5 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-078 | 5.25 – Belső rendszerkapcsolatok | 5 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-079 | 6.15 – Biztonsági hatásvizsgálatok | 6 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-080 | 6.18 – A változtatásokra vonatkozó hozzáférés korlátozások | 6 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-081 | 6.23 – Konfigurációs beállítások | 6 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-082 | 6.26 – Legszűkebb funkcionalitás | 6 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-083 | 6.47 – A szoftverhasználat korlátozásai | 6 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-084 | 6.49 – Felhasználó által telepített szoftver | 6 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-085 | 7.1 – Szabályzat és eljárásrendek | 7 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-086 | 7.10 – A folyamatos működésre felkészítő képzés | 7 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-087 | 8.7 – Azonosítás és hitelesítés (felhasználók) – Hozzáférés a fiókokhoz – | 8 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-088 | 8.14 – Azonosító kezelés | 8 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-089 | 8.21 – A hitelesítésre szolgáló eszközök kezelése | 8 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-090 | 8.22 – A hitelesítésre szolgáló eszközök kezelése – Jelszó alapú hitelesítés | 8 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-091 | 8.36 – Hitelesítési információk visszajelzésének elrejtése | 8 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-092 | 8.37 – Hitelesítés kriptográfiai modul esetén | 8 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-093 | 8.38 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók) | 8 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-094 | 8.39 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók) – | 8 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-095 | 8.43 – Újrahitelesítés | 8 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-096 | 9.25 – A biztonsági események nyomonkövetése | 9 | Szervezet | P0 | TBD – emberi ütemezés |
| A-097 | 9.27 – A biztonsági események jelentése | 9 | Szervezet | P0 | TBD – emberi ütemezés |
| A-098 | 9.31 – Segítségnyújtás a biztonsági események kezeléséhez | 9 | Szervezet | P0 | TBD – emberi ütemezés |
| A-099 | 10.2 – Szabályozott karbantartás | 10 | Szervezet | P0 | TBD – emberi ütemezés |
| A-100 | 10.11 – Távoli karbantartás | 10 | Szervezet | P0 | TBD – emberi ütemezés |
| A-101 | 10.18 – Karbantartó személyek | 10 | Szervezet | P0 | TBD – emberi ütemezés |
| A-102 | 12.37 – Környezeti védelmi intézkedések | 12 | Szervezet | P1 | TBD – emberi ütemezés |
| A-103 | 16.16 – Biztonságtervezési elvek | 16 | Szervezet | P0 | TBD – emberi ütemezés |
| A-104 | 16.49 – Külső elektronikus információs rendszerek szolgáltatásai | 16 | Szervezet | P0 | TBD – emberi ütemezés |
| A-105 | 17.1 – Szabályzat és eljárásrendek | 17 | Vezetéstámogató;Irodai;Termelés | P2 | TBD – emberi ütemezés |
| A-106 | 17.12 – Szolgáltatás- megtagadással járó támadások elleni védelem | 17 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-107 | 17.49 – Kriptográfiai kulcs előállítása és kezelése | 17 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-108 | 17.53 – Kriptográfiai védelem | 17 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-109 | 17.54 – Együttműködésen alapuló informatikai eszközök | 17 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-110 | 17.69 – Biztonságos név/cím feloldási szolgáltatás (hiteles forrás) | 17 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-111 | 17.71 – Biztonságos név/cím feloldó szolgáltatás (rekurzív vagy gyorsítótárat | 17 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-112 | 17.72 – Architektúra és tartalékok név/cím feloldási szolgáltatás esetén | 17 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-113 | 17.108 – A folyamatok elkülönítése | 17 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-114 | 18.1 – Szabályzat és eljárásrendek | 18 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-115 | 18.8 – Kártékony kódok elleni védelem | 18 | Vezetéstámogató;Irodai;Termelés | P2 | TBD – emberi ütemezés |
| A-116 | 18.13 – Az EIR monitorozása | 18 | Vezetéstámogató;Irodai;Termelés | P2 | TBD – emberi ütemezés |
| A-117 | 18.37 – Biztonsági riasztások és tájékoztatások | 18 | Vezetéstámogató;Irodai;Termelés | P1 | TBD – emberi ütemezés |
| A-118 | 18.67 – Információ kezelése és megőrzése | 18 | Vezetéstámogató;Irodai;Termelés | P0 | TBD – emberi ütemezés |
| A-119 | 19.2 – Ellátási láncra vonatkozó kockázatmenedzsment szabályzat | 19 | Szervezet | P2 | TBD – emberi ütemezés |
| A-120 | 19.7 – Ellátási lánc ellenőrzések és folyamatok – Alvállalkozók | 19 | Szervezet | P0 | TBD – emberi ütemezés |
| A-121 | 19.13 – Beszerzési stratégiák, eszközök és módszerek | 19 | Szervezet | P0 | TBD – emberi ütemezés |
| A-122 | 19.19 – Értesítési megállapodások | 19 | Szervezet | P1 | TBD – emberi ütemezés |
| A-123 | 19.22 – Rendszerek vagy rendszerelemek vizsgálata | 19 | Szervezet | P2 | TBD – emberi ütemezés |
| A-124 | 19.23 – Rendszerelem hitelessége | 19 | Szervezet | P0 | TBD – emberi ütemezés |
| A-125 | 19.24 – Rendszerelem hitelessége – Hamisítás elleni képzés | 19 | Szervezet | P1 | TBD – emberi ütemezés |
| A-126 | 19.25 – Rendszerelem hitelessége – Konfigurációfelügyelet | 19 | Szervezet | P0 | TBD – emberi ütemezés |
| A-127 | 19.27 – Rendszerelem selejtezése, megsemmisítése | 19 | Szervezet | P0 | TBD – emberi ütemezés |

## Kötelező emberi review

1. A finding-regiszter forrásoldalas G1 mintavétele és a releváns kivételek javítása.
2. Mind a 85 új akció kontrollcéljának, EIR-hatókörének és feladatleírásának szakmai ellenőrzése.
3. A tényleges kontrollgazda és közreműködők kijelölése; Pásztor András jelenleg programfelelősként szerepel.
4. Minden új akcióhoz konkrét, végrehajtható céldátum jóváhagyása, lehetőleg a 2027-09-30-i belső repeat-audit előtt.
5. Az evidenciaelvárások és a B0 kiindulás felülvizsgálata; költési igénynél külön G5 csomag szükséges.
6. Lángi Zoltán G1/G2 owner sign-offja a 189 soros mappingre; technikai változtatás csak G3 után.

## Jóváhagyási blokk

- Szakmai reviewer: ____________________
- Review dátuma és időzónája: ____________________
- Elfogadott / módosítandó akciók: ____________________
- Jóváhagyott felelős- és dátumlista hivatkozása: ____________________
- Döntés: `APPROVED / NEEDS_CHANGES`
- Döntési hivatkozás: ____________________
