# NIS2 akciók határidő-ütemezése – D-035

> **Menedzsment baseline.** A dátumok a feladatok belső céldátumai; nem igazolnak megvalósítást vagy evidenciaelfogadást.

## Számítási alap

- Jóváhagyott belső repeat-audit cél: **2027-09-30**.
- 60 naptári nappal korábbi véghatár: **2027-08-01**.
- Operatív utolsó munkanap: **2027-07-30**.
- Sorrend: hatósági előfeltételek; egyszerű B0 feladatok; közepes működési feladatok; összetett technikai feladatok; G5/beszerzési kapus feladatok.
- Az akcióstátuszok, evidenciaelfogadások és G1–G5 kapuk nem változtak.

## Hullámok

| Hullám | Céldátum | Feladat | Jelentés |
|---|---|---:|---|
| W0 | 2026-08-31 | 4 | hatósági előfeltétel és azonnali irányítás |
| W1 | 2026-09-11 | 1 | cselekvési terv véglegesítési előfeltétel |
| W2 | 2026-09-24 | 1 | hatósági cselekvési terv benyújtása |
| W3 | 2026-10-30 | 7 | gyors, B0 dokumentációs és szervezési feladat |
| W4 | 2026-12-15 | 6 | egyszerű kontrollbevezetés és gyors javítás |
| W5 | 2027-02-26 | 27 | közepes összetettségű működési feladat |
| W6 | 2027-04-30 | 44 | összetett előkészítés vagy P0 műszaki feladat |
| W7 | 2027-06-30 | 30 | összetett technikai megvalósítás és teszt |
| W8 | 2027-07-30 | 6 | beszerzési kapus vagy végső transzformációs feladat |
| HISTORICAL | változatlan | 1 | lezárt tétel |

## Tételes ütemezés

| Akció | Komplexitás | Beszerzési kapu | Hullám | Céldátum | Függőség |
|---|---|---|---|---|---|
| A-001 | SIMPLE | no | W0 | 2026-08-31 | – |
| A-002 | SIMPLE | no | HISTORICAL | 2026-06-27 | – |
| A-003 | COMPLEX | no | W3 | 2026-10-30 | – |
| A-004 | SIMPLE | no | W0 | 2026-08-31 | – |
| A-005 | SIMPLE | no | W0 | 2026-08-31 | A-004 |
| A-006 | SIMPLE | no | W1 | 2026-09-11 | A-002;A-004;A-005;A-036 |
| A-007 | MODERATE | no | W2 | 2026-09-24 | A-006 |
| A-008 | SIMPLE | no | W4 | 2026-12-15 | A-002;A-006 |
| A-009 | SIMPLE | no | W3 | 2026-10-30 | – |
| A-010 | MODERATE | no | W3 | 2026-10-30 | – |
| A-011 | SIMPLE | no | W3 | 2026-10-30 | – |
| A-012 | SIMPLE | no | W4 | 2026-12-15 | A-003 |
| A-013 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-014 | SIMPLE | no | W4 | 2026-12-15 | – |
| A-015 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-016 | PROCUREMENT_GATED | yes | W8 | 2027-07-30 | A-029 |
| A-017 | COMPLEX | no | W6 | 2027-04-30 | – |
| A-018 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-019 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-020 | SIMPLE | no | W3 | 2026-10-30 | – |
| A-021 | SIMPLE | no | W4 | 2026-12-15 | – |
| A-022 | COMPLEX | no | W6 | 2027-04-30 | – |
| A-023 | COMPLEX | no | W7 | 2027-06-30 | A-022 |
| A-024 | PROCUREMENT_GATED | yes | W8 | 2027-07-30 | A-022;A-029 |
| A-025 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-026 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-027 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-028 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-029 | PROCUREMENT_GATED | yes | W8 | 2027-07-30 | – |
| A-030 | SIMPLE | no | W3 | 2026-10-30 | – |
| A-031 | MODERATE | no | W5 | 2027-02-26 | – |
| A-032 | SIMPLE | no | W4 | 2026-12-15 | – |
| A-033 | PROCUREMENT_GATED | yes | W8 | 2027-07-30 | – |
| A-034 | MODERATE | no | W6 | 2027-04-30 | – |
| A-035 | SIMPLE | no | W3 | 2026-10-30 | – |
| A-036 | COMPLEX | no | W0 | 2026-08-31 | A-001 |
| A-037 | COMPLEX | no | W7 | 2027-06-30 | – |
| A-038 | COMPLEX | no | W8 | 2027-07-30 | A-015 |
| A-039 | SIMPLE | no | W4 | 2026-12-15 | A-005;A-011 |
| A-040 | SIMPLE | no | W5 | 2027-02-26 | A-005;A-011;A-039 |
| A-041 | PROCUREMENT_GATED | yes | W8 | 2027-07-30 | A-010;A-021;A-029 |
| A-042 | COMPLEX | no | W7 | 2027-06-30 | A-003;A-005;A-012;A-031 |
| A-043 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-044 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-045 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-046 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-047 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-048 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-049 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-050 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-051 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-052 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-053 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-054 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-055 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-056 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-057 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-058 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-059 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-060 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-061 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-062 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-063 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-064 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-065 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-066 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-067 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-068 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-069 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-070 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-071 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-072 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-073 | MODERATE | no | W6 | 2027-04-30 | A-004;A-005 |
| A-074 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-075 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-076 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-077 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-078 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-079 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-080 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-081 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-082 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-083 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-084 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-085 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-086 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-087 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-088 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-089 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-090 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-091 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-092 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-093 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-094 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-095 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-096 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-097 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-098 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-099 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-100 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-101 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-102 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-103 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-104 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-105 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-106 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-107 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-108 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-109 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-110 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-111 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-112 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-113 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-114 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-115 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-116 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-117 | COMPLEX | no | W7 | 2027-06-30 | A-004;A-005 |
| A-118 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-119 | MODERATE | no | W6 | 2027-04-30 | A-004;A-005 |
| A-120 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-121 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-122 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-123 | MODERATE | no | W6 | 2027-04-30 | A-004;A-005 |
| A-124 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-125 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
| A-126 | COMPLEX | no | W6 | 2027-04-30 | A-004;A-005 |
| A-127 | MODERATE | no | W5 | 2027-02-26 | A-004;A-005 |
