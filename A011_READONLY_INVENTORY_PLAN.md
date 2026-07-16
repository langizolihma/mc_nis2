# A-011 read-only EIR- és eszközleltár-frissítési terv

```json
{
  "status": "PROPOSAL",
  "agent_role": "control_mapper",
  "source_refs": [
    "SRC-008:p6",
    "SRC-008:p25",
    "SRC-008:p153-154",
    "SRC-008:p242-243",
    "SRC-008:p332-333"
  ],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [
    "confirm five EIR scopes and owners",
    "approve nine read-only collection sources",
    "populate asset, data, location and dependency records",
    "run duplicate, orphan and human-review validation"
  ],
  "required_human_gate": "G1_DOMAIN_REVIEW",
  "forbidden_automatic_actions": [
    "change_production",
    "install_agent",
    "enable_scanning",
    "collect_secrets",
    "upload_external",
    "close_action"
  ]
}
```

## Kiinduló állapot

Az SRC-008 öt EIR-t azonosít. A Vezetéstámogató, Irodai és Termelés EIR auditált; a Hálózat-kommunikációs és Biztonsági EIR nem került audit alá. A 1.5 kontroll findingja szerint az EIR-nyilvántartás részleges vagy elavult. A 6.36 kontroll mindhárom auditált EIR-nél pontatlanságot, hiányos frissítést és nem definiált felelős szerepkört jelez.

A `data/inventory_register.json` ezért csak az öt auditált baseline-nevet tartalmazza. Nem talál ki eszközt, adattárat, helyszínt, függőséget vagy tulajdonost. Az üres listák és `TBD-HUMAN` értékek szándékos warningok.

## Emberi indítási kapu

Minden adatgyűjtés előtt Pásztor András készítse elő, Lángi Zoltán pedig G1 kapuban hagyja jóvá:

1. a kilenc forráskategóriához tartozó tényleges vállalati rendszer nevét;
2. a forrás gazdáját és a legkisebb szükséges read-only jogosultságot;
3. az export mezőit, hatókörét és időpontját;
4. az export adatminősítését és védett tárolási helyét;
5. a személyes adat, secret, token, konfigurációs titok és szükségtelen naplórész kizárását.

A jóváhagyás a `config/inventory_export_plan.json` megfelelő rekordjában `APPROVED`, név szerinti `approved_by` és Europe/Budapest időzónás `approved_at` nélkül nem érvényes.

## Gyűjtési sorrend

| Sorrend | Kategória | Módszer | Elsődleges eredmény |
|---:|---|---|---|
| 1 | EIR scope és owner | Kézi tulajdonosi attestáció | öt EIR jóváhagyott definíciója és felelőse |
| 2 | Compute és virtualizáció | Meglévő rendszer exportja | host/VM/rendszerelem alapleltár |
| 3 | Identitás és címtár | Titkot nem tartalmazó riport | releváns objektumok és tulajdonosok |
| 4 | Hálózat és IPAM | Read-only export | eszköz, zóna, helyszín és státusz |
| 5 | Backup és recovery | Read-only védettségi riport | leltárelem–backup kapcsolat |
| 6 | Endpoint és szoftver | Meglévő menedzsmentriport | kliens- és szoftverleltár |
| 7 | Alkalmazás és felhőszolgáltatás | Alkalmazásgazdai attestáció | üzleti/technikai owner és lifecycle |
| 8 | Adattár és adatfolyam | Adatgazdai attestáció | besorolás, tárolás, forrás és cél |
| 9 | Fizikai helyszín | Telephelyi attestáció | hosting-hely és hozzáférési zóna |

Nincs automatikus csatlakozás, agenttelepítés, aktív scan vagy éles módosítás. A nyers export nem kerül Gitbe: védett evidenciatárban tárolandó, SHA-256 hash-sel és `data/evidence_register.csv` metaadatrekorddal.

## Normalizált rekordminimum

- EIR: `eir_id`, név, audit-scope, owner, forrás, forrásbizalom, rekordstátusz.
- Asset: `asset_id`, EIR, név, típus, owner, helyszín, forrás, forrásbizalom, rekordstátusz.
- Adatkészlet: `data_id`, EIR, név, besorolás, owner, forrás, forrásbizalom, rekordstátusz.
- Helyszín: `location_id`, név, owner, forrás, forrásbizalom, rekordstátusz.
- Függőség: `dependency_id`, forrásobjektum típusa/azonosítója, célobjektum típusa/azonosítója, kapcsolat típusa, owner, forrás és rekordstátusz.

Az azonosítók belső technikai kulcsok. Nem helyettesítik az eszköz sorozatszámát, címtár-azonosítóját vagy a vállalati CMDB kulcsát.

## Minőségkapuk

1. Nincs duplikált EIR-, asset-, adat-, helyszín- vagy dependency-azonosító.
2. Minden asset és adatkészlet létező EIR-re hivatkozik.
3. Minden függőség mindkét végpontja létező rekord.
4. Minden rekordnak van forrása, forrásbizalma, owner mezője és frissítési nyoma.
5. Az öt EIR 100%-a emberileg ellenőrzött; a kritikus assetek és adatfolyamok 100%-os owner review-t kapnak.
6. A duplikációk, orphan rekordok és scope-konfliktusok külön exception listára kerülnek.
7. `APPROVED` összállapot csak reviewer, időzónás review-időpont és döntési hivatkozás mellett adható.

## A-011 készre jelentésének feltétele

Az A-011 addig nem `DONE`, amíg az eszköz-, adat-, helyszín- és függőségi listák üresek, az EIR ownerek `TBD-HUMAN` értékűek, a read-only források nincsenek jóváhagyva, és nincs G1 reviewer sign-off. A jelenlegi eredmény végrehajtható terv és validált baseline, nem jóváhagyott leltár.

## Táblázatos artifact technikai korlát

A munkamenetben a Spreadsheets skill által kötelező `load_workspace_dependencies` szolgáltatás nem volt elérhető. Emiatt `.xlsx` vagy új CSV artifact nem készült, és a `data/actions.csv` A-011 státusza sem módosult automatikusan. A JSON baseline és validator használható; a táblázatos nézet külön munkamenetben, az előírt artifact runtime elérhetőségekor generálandó.
