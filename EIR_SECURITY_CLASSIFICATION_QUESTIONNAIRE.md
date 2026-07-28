# EIR biztonsági osztályba sorolási kérdőív

> Állapot: `HUMAN_INPUT_REQUIRED`. A kérdőív döntés-előkészítő segédlet. Az AI nem töltheti ki helyettetek az Alap/Jelentős/Magas besorolást, és a kitöltés önmagában nem jóváhagyás.

## Mire szolgál?

Az öt elektronikus információs rendszerhez (EIR) össze kell gyűjteni, milyen kár keletkezne, ha az adatok vagy a rendszer bizalmassága, sértetlensége vagy rendelkezésre állása sérülne. A besorolást hatáselemzéssel kell indokolni, majd emberi reviewernek és a szervezet vezetőjének jóvá kell hagynia.

## Kitöltési szabály

Minden EIR-nél:

1. az EIR-owner és a szakmai adatgazdák adják meg a tényszerű válaszokat;
2. minden lényeges állításhoz forrás vagy evidencia-hivatkozás kerüljön;
3. külön értékeljétek a bizalmasságot, sértetlenséget és rendelkezésre állást;
4. a közvetett, más rendszerekre vagy személyekre továbbgyűrűző hatást is vegyétek figyelembe;
5. a javasolt osztályt és indoklást ember írja be;
6. az alkalmazandó kontrollkört csak a jóváhagyott besorolás után szabjátok testre.

## Közös hatásvizsgálati kérdések

| Téma | Kitöltendő kérdés | Válasz / forrás |
|---|---|---|
| Adatok | Milyen adatokat kezel az EIR? Van személyes, különleges, üzleti titok, szerződéses vagy más jogszabállyal védett adat? Mekkora mennyiségben? |  |
| Bizalmasság | Mi történne jogosulatlan megismerés vagy kiszivárgás esetén? |  |
| Sértetlenség | Mi történne téves, hiányos vagy jogosulatlanul módosított adat/funkció esetén? |  |
| Rendelkezésre állás | Mennyi kiesés viselhető el? Mikor válik a kiesés üzletileg vagy biztonságilag súlyossá? |  |
| Emberi hatás | Okozhat-e személyi sérülést, egészségügyi vagy munkabiztonsági veszélyt? |  |
| Működési hatás | Mely üzleti folyamatok állnának le, és hány embert/partnert érintene? |  |
| Társadalmi hatás | Lehet-e a szervezeten túlmutató, közbizalmi vagy kritikus szolgáltatási hatás? |  |
| Jogi/szerződéses hatás | Milyen bejelentési, bírság-, kártérítési vagy szerződésszegési következmény lehet? |  |
| Pénzügyi hatás | A közvetlen és közvetett kár az éves nettó árbevétel legfeljebb 1%-a, 1–10%-a, vagy 10% feletti lehet? A számítás forrása? |  |
| Függőségek | Mely EIR-ek, beszállítók, telephelyek vagy hálózatok függenek ettől a rendszertől? |  |
| Helyettesítés | Van dokumentált kézi kerülőút, tartalék rendszer, mentés és visszaállítási próba? |  |
| Korábbi esemény | Volt releváns kiesés, adatsérülés, incidens vagy auditmegállapítás? |  |

## EIR-enkénti döntési lapok

### EIR-001 – Vezetéstámogató (`AUDITED`)

| Döntési mező | Kitöltendő érték |
|---|---|
| EIR-owner |  |
| Fő üzleti folyamatok |  |
| Fő adatfajták |  |
| Bizalmassági hatás és forrás |  |
| Sértetlenségi hatás és forrás |  |
| Rendelkezésreállási hatás és forrás |  |
| Függőségek / továbbgyűrűző hatás |  |
| Javasolt osztály (`Alap` / `Jelentős` / `Magas`) |  |
| Emberi indoklás |  |
| Reviewer / időpont / döntési hivatkozás |  |

### EIR-002 – Irodai (`AUDITED`)

| Döntési mező | Kitöltendő érték |
|---|---|
| EIR-owner |  |
| Fő üzleti folyamatok |  |
| Fő adatfajták |  |
| Bizalmassági hatás és forrás |  |
| Sértetlenségi hatás és forrás |  |
| Rendelkezésreállási hatás és forrás |  |
| Függőségek / továbbgyűrűző hatás |  |
| Javasolt osztály (`Alap` / `Jelentős` / `Magas`) |  |
| Emberi indoklás |  |
| Reviewer / időpont / döntési hivatkozás |  |

### EIR-003 – Termelés (`AUDITED`)

| Döntési mező | Kitöltendő érték |
|---|---|
| EIR-owner |  |
| Fő üzleti/termelési folyamatok |  |
| Fő adatfajták |  |
| Emberi vagy munkabiztonsági hatás |  |
| Bizalmassági hatás és forrás |  |
| Sértetlenségi hatás és forrás |  |
| Rendelkezésreállási hatás és forrás |  |
| Függőségek / továbbgyűrűző hatás |  |
| Javasolt osztály (`Alap` / `Jelentős` / `Magas`) |  |
| Emberi indoklás |  |
| Reviewer / időpont / döntési hivatkozás |  |

### EIR-004 – Hálózat-kommunikációs (`NOT_AUDITED`)

| Döntési mező | Kitöltendő érték |
|---|---|
| EIR-owner |  |
| Kiszolgált telephelyek és EIR-ek |  |
| Fő adat- és forgalomtípusok |  |
| Bizalmassági hatás és forrás |  |
| Sértetlenségi hatás és forrás |  |
| Rendelkezésreállási hatás és forrás |  |
| Függőségek / továbbgyűrűző hatás |  |
| Javasolt osztály (`Alap` / `Jelentős` / `Magas`) |  |
| Emberi indoklás |  |
| Reviewer / időpont / döntési hivatkozás |  |

### EIR-005 – Biztonsági (`NOT_AUDITED`)

| Döntési mező | Kitöltendő érték |
|---|---|
| EIR-owner |  |
| Kiszolgált biztonsági funkciók és EIR-ek |  |
| Napló-, riasztás- és incidensadatok |  |
| Bizalmassági hatás és forrás |  |
| Sértetlenségi hatás és forrás |  |
| Rendelkezésreállási hatás és forrás |  |
| Függőségek / továbbgyűrűző hatás |  |
| Javasolt osztály (`Alap` / `Jelentős` / `Magas`) |  |
| Emberi indoklás |  |
| Reviewer / időpont / döntési hivatkozás |  |

## Végső jóváhagyási rekord

| Mező | Kitöltendő érték |
|---|---|
| Módszertan és verzió |  |
| Kitöltésben részt vevő EIR-ownerek/adatgazdák |  |
| Összevont review dátuma és időzónája |  |
| Jóváhagyó |  |
| Döntési hivatkozás |  |
| Védett aláírt rekord URI-ja |  |
| Aláírt rekord SHA-256 értéke |  |
| Következő felülvizsgálat vagy esemény-trigger |  |
