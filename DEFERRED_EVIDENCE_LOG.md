# Pótlandó evidencia és utólagos dokumentálási napló

```json
{
  "status": "HUMAN_ACCEPTED_PROCESS_CONTINUATION",
  "agent_role": "evidence_curator",
  "source_refs": ["DECISIONS.md:D-022", "DECISIONS.md:D-025", "DECISIONS.md:D-026", "DECISIONS.md:D-027"],
  "assumptions": [],
  "confidence": "high",
  "proposed_changes": [],
  "required_human_gate": "DEFERRED_EVIDENCE_COMPLETION",
  "forbidden_automatic_actions": ["accept_missing_evidence", "close_action", "submit_external", "change_production"]
}
```

Ez a napló azokat a pontokat tartja nyilván, amelyek folyamat szempontjából emberi engedménnyel továbbléphetnek, de a tényleges evidencia vagy adminisztratív rekord még hiányzik. A bejegyzés nem helyettesíti a felsorolt dokumentumot, aláírást, tárhivatkozást vagy review-t.

| ID | Kapcsolódó rekord | Folyamatállapot | Ténylegesen pótlandó | Pótlási kapu | Felelős | Jóváhagyó | Státusz |
|---|---|---|---|---|---|---|---|
| DEF-001 | A-002; D-026 | A 2026-06-26-i baseline és a 2026-09-24-i határidő alapján a projekt továbbhaladhat. | A G2/G4 nyilatkozat tényleges aláírt példánya, aláírási dátuma, SHA-256 értéke, védett URI-ja és reviewer-rekordja. | Külső benyújtás előtt. | Pásztor András | Lángi Zoltán | `OPEN_DEFERRED` |
| DEF-002 | A-035; SRC-008; D-025; D-026 | Az SRC-008 kanonikus forrásként használható. | Az SRC-008 jóváhagyott védett tárhivatkozása és a G2 reviewer elfogadási rekordja. | Külső benyújtás előtt. | Pásztor András | Lángi Zoltán | `OPEN_DEFERRED` |
| DEF-003 | A-002; D-022 | A 2026-06-26-i kézhezvételi dátum elfogadott baseline. | Hivatalos címzetti kézbesítési igazolás nem áll rendelkezésre. Ha később előkerül, hash-sel és védett URI-val csatolandó; addig a hiány elfogadott kockázatként jelölendő. | Folyamatos nyilvántartási korlát. | Pásztor András | Lángi Zoltán | `NOT_AVAILABLE_ACCEPTED_RISK` |
| DEF-004 | SRC-008:p388; D-025 | Az auditjelentés kanonikus használatát nem blokkolja. | Az angol auditigazolás 388. oldalán jelzett Poppler-renderelt mezők olvashatóságának ellenőrzési feljegyzése emberi PDF-megjelenítőből. | Külső felhasználás előtt, ha az angol igazolás része a csomagnak. | Pásztor András | Lángi Zoltán | `OPEN_DEFERRED` |
| DEF-005 | A-001; A-036; D-027 | A jóváhagyott név szerinti szerepkiosztással a projekttervezés továbbhaladhat. | Aláírt projekt-RACI, formális IBF-kijelölés, feladat- és hatáskör, helyettesítés, kihirdetési nyom, valamint az alkalmazandó hatósági bejelentési vagy nyilvántartási rekord védett URI-ja, hash-e és review-ja. | A szerepkörre épülő kontroll elfogadása, de legkésőbb külső benyújtás előtt. | Pásztor András | Lángi Zoltán | `OPEN_DEFERRED` |
| DEF-006 | A-001; D-027 | Lángi Zoltán a projekt folyamataiban IBF-ként kezelhető, de az alkalmasság nem tekinthető bizonyítottnak. | A metALCOM Kiberbiztonsági tv. 1. § (1) szerinti besorolási jogcíme; az alkalmazandó végzettségi, szakképzettségi vagy szakmai tapasztalati feltétel teljesítésének védett igazolása; büntetlen előéleti és éves továbbképzési megfelelés kezelési rekordja. Személyes okirat Gitbe nem kerülhet. | Formális IBF-kijelölés és hatósági használat előtt. | Pásztor András | Dr. Berta Brigitta | `OPEN_DEFERRED` |
| DEF-007 | A-036; D-027 | Kollár Csaba technikai infrastruktúra- és incidenskezelési feladatokat végezhet. | Belső metALCOM infrastruktúra-/incidenskezelési kontrollgazda kijelölése, valamint a Serversystem Kft. incidensjelzési, napló-, evidencia-, hozzáférési, titoktartási, helyettesítési és auditálhatósági kötelezettségeinek dokumentált review-ja. | Technikai evidencia elfogadása vagy incidenskezelési folyamat jóváhagyása előtt. | Kóczán Mónika | Lángi Zoltán | `OPEN_DEFERRED` |
| DEF-008 | A-011; `config/inventory_export_plan.json` | Az öt EIR proposal baseline-ja és a read-only gyűjtési terv használható az előkészítéshez. | Az öt EIR tulajdonosának és helyettesének kijelölése; a kilenc tényleges forrásrendszer és forrásgazda megnevezése; az exportok adatminősítése, védett tárolási helye, legkisebb read-only jogosultsága és G1 jóváhagyása. | Bármely valós rendszerexport vagy leltárfeltöltés előtt. | Pásztor András | Lángi Zoltán | `OPEN_DEFERRED` |
| DEF-009 | A-011; `data/inventory_register.json` | A JSON-séma és validátor kész, de csak az öt EIR baseline-rekordot tartalmazza. | A jóváhagyott read-only exportok végrehajtása; az asset-, adat-, helyszín- és függőségi listák feltöltése; nyers exportok védett tárolása hash-sel; duplikáció/orphan/scope exception review; EIR- és kritikusrekord-owner sign-off. | Az A-011 review-ra kész vagy `DONE` állapota előtt. | Pásztor András | Lángi Zoltán | `OPEN_DEFERRED` |

## Lezárási szabály

Egy `OPEN_DEFERRED` tétel csak akkor zárható le, ha a tényleges dokumentum vagy review létrejött, a védett tárhivatkozás és SHA-256 rögzítve van, valamint a kijelölt ember a tételt felülvizsgálta. A folyamatengedmény önmagában nem elfogadott evidencia.
