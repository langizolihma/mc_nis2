window.NIS2_DEMO_DATA = {
  "actions": [
    {
      "ai_eligibility": "partial",
      "ai_role": "report_writer",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Aláírt kinevezés, munkaköri leírás, RACI és szervezeti ábra.",
      "evidence": "Aláírt dokumentumok, kihirdetési nyom, vezetői jóváhagyás.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-001",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "IN_PROGRESS",
      "target_date": "2026-07-01",
      "task": "Formálisan jelölje ki az elektronikus információs rendszerek biztonságáért felelős személyt, biztosítson hatáskört, erőforrást és helyettesítést.",
      "title": "Irányítás"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "orchestrator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott receipt record és határidőnaptár.",
      "evidence": "Kézbesítési igazolás, receipt_date, reviewer és számítási napló.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-002",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "authority",
      "source_ref": "SRC-001",
      "status": "IN_PROGRESS",
      "target_date": "2026-06-27",
      "task": "Rögzítse a 2026.06.26-i kézhezvétel bizonyítékának védett evidenciatári vagy iratkezelési hivatkozásját és reviewerét, majd véglegesítse a jóváhagyandó határidőnaptárt.",
      "title": "Hatósági határidő"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Működő repository- és evidenciatár-struktúra.",
      "evidence": "Repository access list, evidenciatár-struktúra export/képernyőkép, naming convention, jóváhagyás.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-003",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "audited",
      "source_ref": "SRC-008:p7|DERIVED",
      "status": "IN_PROGRESS",
      "target_date": "2026-06-29",
      "task": "Hozza létre a privát Git workspace-t, az védett evidenciatár taxonomiáját, elnevezési szabályt és hozzáférési csoportokat.",
      "title": "Evidencia és repository"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "audit_extractor",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Emberileg ellenőrzött audit finding-regiszter és parser-hibajegy.",
      "evidence": "Mintavételi jegyzőkönyv, exception log, human_validated mező, reviewer sign-off.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-004",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008:p19–380|MACHINE_EXTRACT",
      "status": "IN_PROGRESS",
      "target_date": "2026-07-06",
      "task": "Validálja az audit finding-regisztert mintavétellel és kivétellistával; jelölje az emberileg ellenőrzött rekordokat.",
      "title": "Auditfeldolgozás"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "control_mapper",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott control-action-evidence mapping.",
      "evidence": "Mapping review log, hiány- és duplikációlista, owner sign-off.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-005",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "authority",
      "source_ref": "SRC-001:p2|SRC-008:p9–10",
      "status": "IN_PROGRESS",
      "target_date": "2026-07-11",
      "task": "Térképezze a findingokat követelménycsaládhoz, kontrollhoz, EIR-hez, akcióhoz, emberi gazdához és evidenciatípushoz.",
      "title": "Kontrolltérkép"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "report_writer",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Cselekvési terv tervezet.",
      "evidence": "Minden tételhez követelménycsalád, feladat, név szerinti felelős, dátum, deliverable, evidencia és forrás.",
      "external_submission": "yes",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "id": "A-006",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "authority",
      "source_ref": "SRC-001",
      "status": "NEW",
      "target_date": "2026-07-26",
      "task": "Készítse el a teljes hatósági cselekvési terv első tervezetét a 19 követelménycsalád szerint.",
      "title": "Hatósági cselekvési terv"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "report_writer",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Benyújtott csomag és átvételi igazolás.",
      "evidence": "Aláírt terv, jóváhagyási lánc, benyújtási és átvételi bizonyíték.",
      "external_submission": "yes",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "id": "A-007",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P0",
      "source_confidence": "authority",
      "source_ref": "SRC-001",
      "status": "NEW",
      "target_date": "2026-09-24",
      "task": "Végezze el a szakmai, jogi és vezetői felülvizsgálatot, majd ember nyújtsa be a jóváhagyott tervet.",
      "title": "Hatósági cselekvési terv"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "report_writer",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott riportnaptár és beszámolósablon.",
      "evidence": "Naptárbejegyzés, adatcut-off szabály, sablon, dry run és jóváhagyás.",
      "external_submission": "yes",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "id": "A-008",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "authority",
      "source_ref": "SRC-001",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Hozza létre a beszámolási naptár, adatvágás, sablon, felelős és jóváhagyási workflow tervezetét.",
      "title": "Negyedéves beszámoló"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Szabályzat-életciklus eljárás.",
      "evidence": "Review log, verziótörténet, jóváhagyás, kihirdetés és megismerési nyom.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-009",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-07-26",
      "task": "Alakítson ki szabályzatgazdát, review naptárt, esemény-triggerlistát, változásnaplót és kihirdetési evidenciát.",
      "title": "Szabályzat-életciklus"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "cost_guard",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott erőforrásterv és exception log.",
      "evidence": "Budget extract, kapacitásterv, döntési napló, halasztási kockázat.",
      "external_submission": "no",
      "gates": [
        "G5_PURCHASE"
      ],
      "id": "A-010",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-07-26",
      "task": "Hozzon létre éves erőforrás- és költségtervet, kivétel-/halasztási naplót és purchase trigger folyamatot.",
      "title": "Erőforrás és költség"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "control_mapper",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott EIR/asset/dependency register.",
      "evidence": "Read-only exportok, tulajdonosi jóváhagyás, adatfolyam- és függőségi lista.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-011",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-07-16",
      "task": "Frissítse az EIR-, eszköz-, adat-, tulajdonos-, helyszín- és függőségi leltárt.",
      "title": "EIR- és eszközleltár"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Működő evidence register és review workflow.",
      "evidence": "védett belső URI-k, hash manifest, review log, visszautasítási okok.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-012",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "IN_PROGRESS",
      "target_date": "2026-07-10",
      "task": "Vezesse be az evidence manifestet és acceptance workflow-t: forrás, dátum, EIR, kontroll, hash, készítő, reviewer, státusz.",
      "title": "Evidenciakezelés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Incidenskezelési terv és gyakorlatjegyzőkönyv.",
      "evidence": "Kontaktlista, ticket/timeline, döntések, lessons learned, javító akciók és résztvevői nyom.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-013",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-08-25",
      "task": "Formalizálja az incidens-életciklust, kontaktpontot, szerepköröket, playbookokat és hajtson végre tabletop gyakorlatot.",
      "title": "Incidenskezelés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Képzési terv, anyag, teszt és nyilvántartás.",
      "evidence": "Jelenlét/átvétel, teszteredmény, anyagverzió, utánkövetés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-014",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-08-25",
      "task": "Készítsen minimum szerepkör-alapú képzési programot, tudásellenőrzést és bizonyítható nyilvántartást.",
      "title": "Tudatosság és képzés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Access review csomag és jóváhagyott életciklus-eljárás.",
      "evidence": "Read-only export, alkalmazásgazdai döntések, change ticket és visszaellenőrzés.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-015",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008:p116,205,295|SRC-003:p3",
      "status": "NEW",
      "target_date": "2026-08-10",
      "task": "Készítsen read-only stale/duplicate account és kritikus hozzáférési review-t, majd onboarding/offboarding eljárást.",
      "title": "Identitás és hozzáférés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "cost_guard",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "MFA gap analysis és pilot report.",
      "evidence": "Licencmátrix, pilot scope, siker/hiba napló, rollback és jóváhagyás.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE",
        "G5_PURCHASE"
      ],
      "id": "A-016",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008:p167,257,346|SRC-003:p3",
      "status": "NEW",
      "target_date": "2026-08-25",
      "task": "Végezzen licenc- és technikai gap analysis-t, majd meglévő entitlementtel kockázatarányos privilegizált MFA pilotot.",
      "title": "MFA"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Backup matrix és restore test report.",
      "evidence": "Job log, helyreállított objektum/rendszer, időtartam, hiba, RPO/RTO összevetés és jóváhagyás.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-017",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-07-26",
      "task": "Határozza meg a backup scope/RPO/RTO mátrixot és hajtson végre dokumentált restore tesztet kritikus EIR mintán.",
      "title": "Mentés és helyreállítás"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Log source matrix, retention és review log.",
      "evidence": "Mintalog, alert teszt, review ticket, retention proof, exception log.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-018",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-09-09",
      "task": "Hozzon létre minimum log source matrixot, retentiont, hibariasztást és napi/heti review eljárást meglévő eszközökkel.",
      "title": "Naplózás és felügyelet"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott maintenance/patch/change workflow.",
      "evidence": "Baseline export, patch report, change ticket, exception, rollback proof.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-019",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-08-10",
      "task": "Vezessen be baseline-, patch-, karbantartási- és változásnaptárt bizonyítékokkal, kivétel- és rollback-kezeléssel.",
      "title": "Konfiguráció, patch, karbantartás"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Fizikai gap register és evidence csomag.",
      "evidence": "Checklist, dátumozott fotó, belépési lista, tesztjegyzőkönyv, intézkedési terv.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-020",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-07-26",
      "task": "Végezzen dokumentált helyszíni bejárást, rögzítse a költségmentes gyorsjavításokat, és készítsen kockázatalapú fizikai javítási tervet.",
      "title": "Fizikai védelem"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "control_mapper",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Supplier risk register és review terv.",
      "evidence": "Szerződéslista, kérdőív, kockázati döntés, hiánylista és review proof.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-021",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008:p101–112|SRC-003:p2",
      "status": "NEW",
      "target_date": "2026-09-09",
      "task": "Készítsen beszállítói leltárt, kritikalitást, szerződéses kontroll-gapet és felülvizsgálati naptárt.",
      "title": "Ellátási lánc"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Aláírt technikai health snapshot és eltéréslista.",
      "evidence": "Időbélyeges read-only export, RAID log, kapacitás, VM-lista, backup status és reviewer.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-022",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "unverified_internal",
      "source_ref": "SRC-004",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Read-only módszerrel azonnal validálja a hivatkozott hostok, VM-ek, lemezek, RAID és backup állapotát; semmit ne módosítson.",
      "title": "Műszaki validáció"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott emergency change plan vagy dokumentált no-action döntés.",
      "evidence": "Pre/post metrika, backup proof, törlési/áthelyezési jóváhagyás, rollback.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-023",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "conditional",
      "source_ref": "SRC-004|A-022",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Készítsen freespace/backup-protection emergency change tervet; törlés vagy áthelyezés csak tulajdonosi jóváhagyással.",
      "title": "Műszaki stabilizálás"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "cost_guard",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Migration/containment decision package.",
      "evidence": "Kapacitásmodell, dependency map, test, rollback, licenc review és kockázatelfogadás.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE",
        "G5_PURCHASE"
      ],
      "id": "A-024",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P1",
      "source_confidence": "unverified_internal",
      "source_ref": "SRC-004|A-022|A-029",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Készítsen VM dependency-, placement-, capacity-, backup- és licence-tervet; végrehajtás nélkül.",
      "title": "Kapacitás és VM-elhelyezés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "control_mapper",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Exchange dependency register és tesztterv.",
      "evidence": "SMTP log minta, eszköz-/alkalmazásgazda sign-off, teszteredmény és rollback.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-025",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "strategy_input",
      "source_ref": "SRC-003:p1,3,7|SRC-004",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Készítsen teljes SMTP relay/client dependency leltárt és teszttervet minden migrációs döntés előtt.",
      "title": "Exchange függőség"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "report_writer",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott retention/migration decision.",
      "evidence": "Jogi állásfoglalás, adatlista, export/restore/read test, owner approval.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-026",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "unverified_internal",
      "source_ref": "SRC-004",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Készítsen jogi megőrzési, adat-, alkalmazás-, export-, restore/read-test és migrációs döntési csomagot.",
      "title": "Legacy megőrzés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "cost_guard",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "RDS decision record.",
      "evidence": "User/CAL mátrix, secret/key scope, teljesítményadat, kockázati sign-off.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-027",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "unverified_internal",
      "source_ref": "SRC-004",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Tartsa fenn a szeparációt, amíg licenc-, banki/könyvelési kulcs-, workload- és kockázatelemzés nem igazolja az összevonást.",
      "title": "RDS szeparáció"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "AD/DHCP consolidation assessment.",
      "evidence": "Current role export, failure scenario, test plan, licenc- és rollback-hatás.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-028",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "unverified_internal",
      "source_ref": "SRC-004",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Csak assessmentet készítsen szerepkör, HA, site, DNS/DHCP, backup, licenc és rollback vizsgálattal.",
      "title": "AD/DHCP konszolidáció"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "cost_guard",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "License entitlement and support matrix.",
      "evidence": "Szerződés/SAM export, host/core/VM/user mapping, support lifecycle és reviewer sign-off.",
      "external_submission": "no",
      "gates": [
        "G5_PURCHASE"
      ],
      "id": "A-029",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008:p182,185,271,274,361,364|SRC-004",
      "status": "NEW",
      "target_date": "2026-07-26",
      "task": "Végezzen Windows Server, RDS, M365, Defender, virtualizáció és releváns alkalmazások entitlement/támogatási auditját.",
      "title": "Licenc és támogatás"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "orchestrator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Repeat-audit roadmap.",
      "evidence": "Jóváhagyott target, mock audit naptár, javítási buffer és auditor-procurement gate.",
      "external_submission": "yes",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "id": "A-030",
      "owner": "Pásztor András",
      "phase": "M4_REPEAT_AUDIT",
      "priority": "P1",
      "source_confidence": "authority",
      "source_ref": "SRC-001",
      "status": "NEW",
      "target_date": "2027-09-30",
      "task": "Készítse el a jóváhagyott 2027.09.30-i belső céldátumhoz tartozó negyedéves readiness gate-eket és legalább egy mock audit ütemezését.",
      "title": "Repeat audit"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "orchestrator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott AI usage rule és felhasználói visszaigazolás.",
      "evidence": "Policy note, acknowledgement, minta redakció, környezetengedély.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-031",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "derived",
      "source_ref": "DERIVED_FROM_PROJECT_RISK",
      "status": "NEW",
      "target_date": "2026-07-03",
      "task": "Hirdesse ki az AI-adatminősítési, redakciós, forráshierarchia-, prompt-injection- és proposal-only szabályt.",
      "title": "AI-irányítás"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "qa_auditor",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Eval baseline, gold cases és defect log.",
      "evidence": "Tesztfutás, reviewed examples, trace/output, hibajegy és javítási kör.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-032",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P1",
      "source_confidence": "derived",
      "source_ref": "DERIVED_FROM_PROJECT_RISK",
      "status": "NEW",
      "target_date": "2026-07-17",
      "task": "Hozzon létre helyi eval-harness-t és legalább 10 emberileg jóváhagyott gold case-t.",
      "title": "Agent QA és eval"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "cost_guard",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Vulnerability assessment and remediation plan.",
      "evidence": "Scope, G3 approval, scan log, finding register, remediation ticket és retest.",
      "external_submission": "no",
      "gates": [
        "G3_PRODUCTION_CHANGE",
        "G5_PURCHASE"
      ],
      "id": "A-033",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-09-24",
      "task": "Definiálja a scope-ot, credentialed/non-intrusive módot, javítási SLA-t és használja először a meglévő eszközöket.",
      "title": "Sérülékenységkezelés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "control_mapper",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "EIR scope and readiness record.",
      "evidence": "EIR definition, owner sign-off, asset/dependency list és döntési napló.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-034",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P2",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-09-24",
      "task": "Dokumentálja a két EIR scope-ját, tulajdonosát, assetjeit, függőségeit és következő audit/readiness tervét.",
      "title": "EIR scope"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott canonical source record.",
      "evidence": "SRC-008 fájl, SHA-256, aláírásstruktúra-metaadat, összehasonlítási jegyzőkönyv, D-025 és reviewer.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-035",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "audited",
      "source_ref": "SRC-001|SRC-008",
      "status": "IN_PROGRESS",
      "target_date": "2026-06-29",
      "task": "Rögzítse az SRC-008 védett tárhivatkozását és a D-025 szerinti G2 emberi review elfogadását.",
      "title": "Forrásverzió-kezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "orchestrator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott projekt-RACI és kitöltött P0 owner/approver mezők.",
      "evidence": "Aláírt RACI, vezetői döntés, actions.csv review log.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-036",
      "owner": "Pásztor András",
      "phase": "M0_STARTUP",
      "priority": "P0",
      "source_confidence": "authority",
      "source_ref": "DERIVED|SRC-001:p2",
      "status": "IN_PROGRESS",
      "target_date": "2026-07-01",
      "task": "Jelölje ki a vezetői szponzort, projektvezetőt, IBF-et, jogi reviewert, kontrollgazdákat és minden P0 akció felelősét/jóváhagyóját.",
      "title": "Projektirányítás"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Adathordozó-védelmi eljárás és nyilvántartás.",
      "evidence": "Médialeltár, jóváhagyott törlési módszer, hozzáférési lista, mintajegyzőkönyv és megsemmisítési/újrahasználati bizonyíték.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-037",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-08-25",
      "task": "Készítsen adathordozó-leltárt, felelősségi rendet, hozzáférési, törlési, szállítási és újrahasználati minimumeljárást.",
      "title": "Adathordozók védelme"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott personnel security és joiner-mover-leaver csomag.",
      "evidence": "Munkakör-besorolás, ellenőrzési szabály, checklist, hozzáférés-visszavonási SLA, nyilatkozat és mintafolyamat-evidencia.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-038",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-08-25",
      "task": "Alakítson ki szerepkör-alapú személyi biztonsági folyamatot a belépéstől a kilépésig, HR/IT/jogi felelősségekkel és határidőkkel.",
      "title": "Személyi biztonság"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott risk methodology, risk register és treatment workflow.",
      "evidence": "Kockázati skála, elfogadási hatáskör, mintakockázatok, kezelési döntések, review log és vezetői jóváhagyás.",
      "external_submission": "no",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-039",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-08-10",
      "task": "Egységesítse a kockázati módszertant, kockázati étvágyat, nyilvántartást, gazdákat, kezelési döntéseket és felülvizsgálati ciklust.",
      "title": "Kockázatkezelés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "report_writer",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Három jóváhagyott rendszerbiztonsági terv és közös sablon.",
      "evidence": "Verziózott tervek, EIR-owner és IBF jóváhagyás, dependency/threat mapping, változásnapló és megismertetési nyom.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "id": "A-040",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-08-25",
      "task": "Frissítse a három auditált EIR rendszerbiztonsági tervét egységes sablon szerint, függőségekkel, fenyegetésekkel, kontrolltestreszabással és review-ciklussal.",
      "title": "Biztonságtervezés"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "cost_guard",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott beszerzési biztonsági checklist és szerződéses követelményminta.",
      "evidence": "Kitöltött mintachecklist, szerződéses klauzulák, support/EOL döntés, kivétel és jóváhagyás.",
      "external_submission": "no",
      "gates": [
        "G5_PURCHASE"
      ],
      "id": "A-041",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "audited",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "2026-09-09",
      "task": "Vezessen be security-by-procurement minimumkövetelményt, szerződéses checklistet, lifecycle/support gate-et és kivételkezelést.",
      "title": "Biztonságos beszerzés és életciklus"
    },
    {
      "ai_eligibility": "yes",
      "ai_role": "orchestrator",
      "approver": "Lángi Zoltán",
      "cost_band": "B0",
      "deliverable": "Jóváhagyott agent-architektúra, fájlalapú pilot, runbook, approval queue és mérési riport.",
      "evidence": "Forrás- és jogosultságlista, futási auditlog, source_ref/confidence/review nyom, gold case és negatív teszt, téves riasztási és emberimunka-csökkentési metrika, kill switch próba.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-042",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P1",
      "source_confidence": "derived",
      "source_ref": "DECISIONS.md:D-024|DERIVED",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "Tervezzen, pilotoljon és fokozatosan vezessen be local-first folyamatos auditfelkészültségi ügynököt, amely jóváhagyott read-only forrásokat értelmez, karbantartja a nyilvántartásokat, jegyzőkönyv- és intézkedéstervezeteket készít, határidőt figyel és kivételt terjeszt ember elé.",
      "title": "Folyamatos auditfelkészültség"
    }
  ],
  "ai_proposals": [
    {
      "action_id": "A-001",
      "agent_role": "report_writer",
      "confidence": "audited",
      "proposal": "Formálisan jelölje ki az elektronikus információs rendszerek biztonságáért felelős személyt, biztosítson hatáskört, erőforrást és helyettesítést.",
      "required_gate": "G2_SECURITY_LEGAL",
      "source_ref": "SRC-008",
      "status": "PROPOSAL",
      "title": "Irányítás"
    },
    {
      "action_id": "A-002",
      "agent_role": "orchestrator",
      "confidence": "authority",
      "proposal": "Rögzítse a 2026.06.26-i kézhezvétel bizonyítékának védett evidenciatári vagy iratkezelési hivatkozásját és reviewerét, majd véglegesítse a jóváhagyandó határidőnaptárt.",
      "required_gate": "G2_SECURITY_LEGAL",
      "source_ref": "SRC-001",
      "status": "PROPOSAL",
      "title": "Hatósági határidő"
    },
    {
      "action_id": "A-003",
      "agent_role": "evidence_curator",
      "confidence": "audited",
      "proposal": "Hozza létre a privát Git workspace-t, az védett evidenciatár taxonomiáját, elnevezési szabályt és hozzáférési csoportokat.",
      "required_gate": "G2_SECURITY_LEGAL",
      "source_ref": "SRC-008:p7|DERIVED",
      "status": "PROPOSAL",
      "title": "Evidencia és repository"
    },
    {
      "action_id": "A-004",
      "agent_role": "audit_extractor",
      "confidence": "machine_unvalidated",
      "proposal": "Validálja az audit finding-regisztert mintavétellel és kivétellistával; jelölje az emberileg ellenőrzött rekordokat.",
      "required_gate": "G1_DOMAIN_REVIEW",
      "source_ref": "SRC-008:p19–380|MACHINE_EXTRACT",
      "status": "PROPOSAL",
      "title": "Auditfeldolgozás"
    },
    {
      "action_id": "A-005",
      "agent_role": "control_mapper",
      "confidence": "authority",
      "proposal": "Térképezze a findingokat követelménycsaládhoz, kontrollhoz, EIR-hez, akcióhoz, emberi gazdához és evidenciatípushoz.",
      "required_gate": "G1_DOMAIN_REVIEW",
      "source_ref": "SRC-001:p2|SRC-008:p9–10",
      "status": "PROPOSAL",
      "title": "Kontrolltérkép"
    },
    {
      "action_id": "A-006",
      "agent_role": "report_writer",
      "confidence": "authority",
      "proposal": "Készítse el a teljes hatósági cselekvési terv első tervezetét a 19 követelménycsalád szerint.",
      "required_gate": "G4_EXTERNAL_SUBMISSION",
      "source_ref": "SRC-001",
      "status": "PROPOSAL",
      "title": "Hatósági cselekvési terv"
    },
    {
      "action_id": "A-007",
      "agent_role": "report_writer",
      "confidence": "authority",
      "proposal": "Végezze el a szakmai, jogi és vezetői felülvizsgálatot, majd ember nyújtsa be a jóváhagyott tervet.",
      "required_gate": "G4_EXTERNAL_SUBMISSION",
      "source_ref": "SRC-001",
      "status": "PROPOSAL",
      "title": "Hatósági cselekvési terv"
    },
    {
      "action_id": "A-008",
      "agent_role": "report_writer",
      "confidence": "authority",
      "proposal": "Hozza létre a beszámolási naptár, adatvágás, sablon, felelős és jóváhagyási workflow tervezetét.",
      "required_gate": "G4_EXTERNAL_SUBMISSION",
      "source_ref": "SRC-001",
      "status": "PROPOSAL",
      "title": "Negyedéves beszámoló"
    }
  ],
  "approval_queue": [
    {
      "action_id": "A-002",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-06-27",
      "title": "Hatósági határidő"
    },
    {
      "action_id": "A-003",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-06-29",
      "title": "Evidencia és repository"
    },
    {
      "action_id": "A-035",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-06-29",
      "title": "Forrásverzió-kezelés"
    },
    {
      "action_id": "A-001",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-01",
      "title": "Irányítás"
    },
    {
      "action_id": "A-036",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-01",
      "title": "Projektirányítás"
    },
    {
      "action_id": "A-031",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-03",
      "title": "AI-irányítás"
    },
    {
      "action_id": "A-004",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-06",
      "title": "Auditfeldolgozás"
    },
    {
      "action_id": "A-012",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-10",
      "title": "Evidenciakezelés"
    },
    {
      "action_id": "A-005",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-11",
      "title": "Kontrolltérkép"
    },
    {
      "action_id": "A-011",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-16",
      "title": "EIR- és eszközleltár"
    },
    {
      "action_id": "A-006",
      "approver": "Lángi Zoltán",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-26",
      "title": "Hatósági cselekvési terv"
    },
    {
      "action_id": "A-017",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-26",
      "title": "Mentés és helyreállítás"
    },
    {
      "action_id": "A-020",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-26",
      "title": "Fizikai védelem"
    },
    {
      "action_id": "A-007",
      "approver": "Lángi Zoltán",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-09-24",
      "title": "Hatósági cselekvési terv"
    },
    {
      "action_id": "A-008",
      "approver": "Lángi Zoltán",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Negyedéves beszámoló"
    },
    {
      "action_id": "A-022",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Műszaki validáció"
    },
    {
      "action_id": "A-023",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Műszaki stabilizálás"
    },
    {
      "action_id": "A-032",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-17",
      "title": "Agent QA és eval"
    },
    {
      "action_id": "A-009",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-26",
      "title": "Szabályzat-életciklus"
    },
    {
      "action_id": "A-010",
      "approver": "Lángi Zoltán",
      "gates": [
        "G5_PURCHASE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-26",
      "title": "Erőforrás és költség"
    },
    {
      "action_id": "A-029",
      "approver": "Lángi Zoltán",
      "gates": [
        "G5_PURCHASE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-07-26",
      "title": "Licenc és támogatás"
    },
    {
      "action_id": "A-015",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-10",
      "title": "Identitás és hozzáférés"
    },
    {
      "action_id": "A-019",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-10",
      "title": "Konfiguráció, patch, karbantartás"
    },
    {
      "action_id": "A-039",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-10",
      "title": "Kockázatkezelés"
    },
    {
      "action_id": "A-013",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-25",
      "title": "Incidenskezelés"
    },
    {
      "action_id": "A-014",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-25",
      "title": "Tudatosság és képzés"
    },
    {
      "action_id": "A-016",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE",
        "G5_PURCHASE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-25",
      "title": "MFA"
    },
    {
      "action_id": "A-037",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-25",
      "title": "Adathordozók védelme"
    },
    {
      "action_id": "A-038",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-25",
      "title": "Személyi biztonság"
    },
    {
      "action_id": "A-040",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-08-25",
      "title": "Biztonságtervezés"
    },
    {
      "action_id": "A-018",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-09-09",
      "title": "Naplózás és felügyelet"
    },
    {
      "action_id": "A-021",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-09-09",
      "title": "Ellátási lánc"
    },
    {
      "action_id": "A-041",
      "approver": "Lángi Zoltán",
      "gates": [
        "G5_PURCHASE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-09-09",
      "title": "Biztonságos beszerzés és életciklus"
    },
    {
      "action_id": "A-033",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE",
        "G5_PURCHASE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-09-24",
      "title": "Sérülékenységkezelés"
    },
    {
      "action_id": "A-030",
      "approver": "Lángi Zoltán",
      "gates": [
        "G4_EXTERNAL_SUBMISSION"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2027-09-30",
      "title": "Repeat audit"
    },
    {
      "action_id": "A-024",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE",
        "G5_PURCHASE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Kapacitás és VM-elhelyezés"
    },
    {
      "action_id": "A-025",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Exchange függőség"
    },
    {
      "action_id": "A-026",
      "approver": "Lángi Zoltán",
      "gates": [
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Legacy megőrzés"
    },
    {
      "action_id": "A-042",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Folyamatos auditfelkészültség"
    },
    {
      "action_id": "A-034",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "2026-09-24",
      "title": "EIR scope"
    },
    {
      "action_id": "A-027",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "RDS szeparáció"
    },
    {
      "action_id": "A-028",
      "approver": "Lángi Zoltán",
      "gates": [
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "AD/DHCP konszolidáció"
    }
  ],
  "deferred_tasks": [
    {
      "approver": "Lángi Zoltán",
      "gate": "Külső benyújtás előtt.",
      "id": "DEF-001",
      "owner": "Pásztor András",
      "process_state": "A 2026-06-26-i baseline és a 2026-09-24-i határidő alapján a projekt továbbhaladhat.",
      "related": "A-002; D-026",
      "required": "A G2/G4 nyilatkozat tényleges aláírt példánya, aláírási dátuma, SHA-256 értéke, védett URI-ja és reviewer-rekordja.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Külső benyújtás előtt.",
      "id": "DEF-002",
      "owner": "Pásztor András",
      "process_state": "Az SRC-008 kanonikus forrásként használható.",
      "related": "A-035; SRC-008; D-025; D-026",
      "required": "Az SRC-008 jóváhagyott védett tárhivatkozása és a G2 reviewer elfogadási rekordja.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Folyamatos nyilvántartási korlát.",
      "id": "DEF-003",
      "owner": "Pásztor András",
      "process_state": "A 2026-06-26-i kézhezvételi dátum elfogadott baseline.",
      "related": "A-002; D-022",
      "required": "Hivatalos címzetti kézbesítési igazolás nem áll rendelkezésre. Ha később előkerül, hash-sel és védett URI-val csatolandó; addig a hiány elfogadott kockázatként jelölendő.",
      "status": "NOT_AVAILABLE_ACCEPTED_RISK"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Külső felhasználás előtt, ha az angol igazolás része a csomagnak.",
      "id": "DEF-004",
      "owner": "Pásztor András",
      "process_state": "Az auditjelentés kanonikus használatát nem blokkolja.",
      "related": "SRC-008:p388; D-025",
      "required": "Az angol auditigazolás 388. oldalán jelzett Poppler-renderelt mezők olvashatóságának ellenőrzési feljegyzése emberi PDF-megjelenítőből.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "A szerepkörre épülő kontroll elfogadása, de legkésőbb külső benyújtás előtt.",
      "id": "DEF-005",
      "owner": "Pásztor András",
      "process_state": "A jóváhagyott név szerinti szerepkiosztással a projekttervezés továbbhaladhat.",
      "related": "A-001; A-036; D-027",
      "required": "Aláírt projekt-RACI, formális IBF-kijelölés, feladat- és hatáskör, helyettesítés, kihirdetési nyom, valamint az alkalmazandó hatósági bejelentési vagy nyilvántartási rekord védett URI-ja, hash-e és review-ja.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Dr. Berta Brigitta",
      "gate": "Formális IBF-kijelölés és hatósági használat előtt.",
      "id": "DEF-006",
      "owner": "Pásztor András",
      "process_state": "Lángi Zoltán a projekt folyamataiban IBF-ként kezelhető, de az alkalmasság nem tekinthető bizonyítottnak.",
      "related": "A-001; D-027",
      "required": "A metALCOM Kiberbiztonsági tv. 1. § (1) szerinti besorolási jogcíme; az alkalmazandó végzettségi, szakképzettségi vagy szakmai tapasztalati feltétel teljesítésének védett igazolása; büntetlen előéleti és éves továbbképzési megfelelés kezelési rekordja. Személyes okirat Gitbe nem kerülhet.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Technikai evidencia elfogadása vagy incidenskezelési folyamat jóváhagyása előtt.",
      "id": "DEF-007",
      "owner": "Kóczán Mónika",
      "process_state": "Kollár Csaba technikai infrastruktúra- és incidenskezelési feladatokat végezhet.",
      "related": "A-036; D-027",
      "required": "Belső metALCOM infrastruktúra-/incidenskezelési kontrollgazda kijelölése, valamint a Serversystem Kft. incidensjelzési, napló-, evidencia-, hozzáférési, titoktartási, helyettesítési és auditálhatósági kötelezettségeinek dokumentált review-ja.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Bármely valós rendszerexport vagy leltárfeltöltés előtt.",
      "id": "DEF-008",
      "owner": "Pásztor András",
      "process_state": "Az öt EIR proposal baseline-ja és a read-only gyűjtési terv használható az előkészítéshez.",
      "related": "A-011; config/inventory_export_plan.json",
      "required": "Az öt EIR tulajdonosának és helyettesének kijelölése; a kilenc tényleges forrásrendszer és forrásgazda megnevezése; az exportok adatminősítése, védett tárolási helye, legkisebb read-only jogosultsága és G1 jóváhagyása.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Az A-011 review-ra kész vagy DONE állapota előtt.",
      "id": "DEF-009",
      "owner": "Pásztor András",
      "process_state": "A JSON-séma és validátor kész, de csak az öt EIR baseline-rekordot tartalmazza.",
      "related": "A-011; data/inventory_register.json",
      "required": "A jóváhagyott read-only exportok végrehajtása; az asset-, adat-, helyszín- és függőségi listák feltöltése; nyers exportok védett tárolása hash-sel; duplikáció/orphan/scope exception review; EIR- és kritikusrekord-owner sign-off.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Az A-032 baseline jóváhagyása vagy bármely agent-kimenet minőségi elfogadása előtt.",
      "id": "DEF-010",
      "owner": "Pásztor András",
      "process_state": "A helyi eval-validator, tíz pending slot, mintakimenet és defect workflow elkészült.",
      "related": "A-032; evals/gold_cases.json",
      "required": "Tíz redaktált gold-case bemenet és elvárt szakmai eredmény; elvárt források/kapuk/tiltások; név szerinti reviewer, időzónás review-idő és döntési hivatkozás; teljes eval-futtatás, defectek és retest.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta",
      "gate": "AI-policy kihirdetése, külső AI-környezet használata vagy A-031 lezárása előtt.",
      "id": "DEF-011",
      "owner": "Pásztor András",
      "process_state": "A deny-by-default AI-policy, acknowledgement-, környezetengedély- és redakciós sablon elkészült.",
      "related": "A-031; D-017; config/ai_usage_policy.json",
      "required": "Lángi Zoltán biztonsági és Dr. Berta Brigitta jogi G2 review-ja; engedélyezett AI-környezet vagy local-only döntés; vállalati adatminősítési illesztés; policy verzió/hash és kihirdetési rekord; felhasználói acknowledgement-ek védett URI-ja/hash-e; felülvizsgálati ciklus és incidensjelzési csatorna.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Bármely külső auditor-kommunikáció, beszerzés vagy az A-030 lezárása előtt.",
      "id": "DEF-012",
      "owner": "Pásztor András",
      "process_state": "A D-021 szerinti 2027-09-30-i baseline-hoz elkészült a proposal-only readiness-, mock-audit- és javítási roadmap.",
      "related": "A-030; D-021; data/repeat_audit_roadmap.json",
      "required": "A köztes dátumok és a mock audit scope-jának G4 review-ja; az A-034 scope-döntés beépítése; auditor esetén entitlement/kapacitás/B0/pilot/acceptance/purchase-trigger/halasztási kockázat csomag és G5 döntés; jóváhagyott naptárbejegyzések, mock jegyzőkönyv, finding- és remediation-evidencia védett URI-val, hash-sel és reviewer-rekorddal.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Az első negyedéves beszámoló véglegesítése és minden külső benyújtás előtt.",
      "id": "DEF-013",
      "owner": "Pásztor András",
      "process_state": "A negyedéves riportnaptár, adat-cut-off workflow, dry run és sablon proposal-only formában elkészült; a 2026-09-24 dátum csak tervezési horgony.",
      "related": "A-008; A-006; A-007; data/quarterly_reporting_plan.json",
      "required": "A tényleges cselekvésiterv-benyújtási dátum, benyújtási/átvételi evidencia és reviewer; a naptár újraszámítása; jogi vagy IBF G2 review az ütemezési logikáról és formáról; Lángi Zoltán G4 jóváhagyása; naptárbejegyzések; dry-run jegyzőkönyv; riportonként forráscsomag, approval, benyújtási és átvételi evidencia védett URI-val és SHA-256-tal.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "A cselekvési terv aláírása, véglegesítése és külső benyújtása előtt.",
      "id": "DEF-014",
      "owner": "Pásztor András",
      "process_state": "A 42 akciós tervezet 19/19 követelménycsaládot lefed, 0 hard hibával; strukturálisan review-ra kész, de G4 benyújtásra nem kész.",
      "related": "A-006; A-007; generated/action_plan.md; data/action_plan_submission_checklist.json",
      "required": "A-004 finding-minta és A-005 mapping G1 review; A-036 formális RACI-evidencia; A-008/A-022–A-028/A-042 fix dátuma vagy jóváhagyott indoklása; A-022/A-024/A-026/A-027/A-028 read-only forrásvalidációja; G2 jogi/IBF review; Lángi Zoltán G4 jóváhagyása; aláírt végleges verzió, jogosult benyújtó, védett URI, SHA-256, benyújtási és átvételi igazolás.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Portálfejlesztés éles adatkapcsolata, hálózati megnyitása vagy deployja előtt.",
      "id": "DEF-015",
      "owner": "Pásztor András",
      "process_state": "A helyi hálózaton, böngészőből elérhető belső portál jóváhagyott célfelület.",
      "related": "D-028; A-042; LOCAL_PORTAL_BASELINE.md",
      "required": "Belső szerver és üzemeltető; hálózati zóna; hitelesítés és szerepkörök; TLS/tanúsítvány; védett evidenciatár-kapcsolat; backup/restore; naplómegőrzés; adatminősítés; G2 architektúra-review; G3 élesítési döntés; pilot, jogosultság- és kill-switch teszt evidenciája.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Bármely restore-művelet előtt és az A-017 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-016",
      "owner": "Pásztor András",
      "process_state": "Az öt EIR backup/RPO/RTO váza és az izolált restore-teszt proposal elkészült; a végrehajtás G3-ig blokkolt.",
      "related": "A-017; data/backup_restore_plan.json; templates/restore_test_record.md",
      "required": "Öt EIR üzleti ownere, rendszerlistája, RPO/RTO-ja, mentési módja, retentionje és elkülönített másolata; mintarendszer és izolált cél; adatminősítés/G2; üzleti és rendszerowner, change approver G3 döntése; backup- és restore-job log, visszaállított objektum, integritás, eltelt idő, RPO/RTO összevetés, cleanup rekord, védett URI, SHA-256 és emberi review.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "A helyszíni bejárás előtt, valamint az A-020 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-017",
      "owner": "Pásztor András; Német Péter",
      "process_state": "A kilenc kontrollos checklist, gap-register és fotó/adatkezelési korlát elkészült; a bejárás NOT_PERFORMED, minden kontroll NOT_ASSESSED.",
      "related": "A-020; data/physical_security_walkthrough.json; templates/physical_walkthrough_record.md",
      "required": "Német Péter és az IBF által jóváhagyott telephely/védett terület scope; időpont és résztvevők; fotó- és személyesadat-kezelési G2 döntés; kontrollonként tényleges megfigyelés, megfigyelő, időzónás időpont és védett evidencia; gapenként kockázat, B0 gyorsjavítás, intézkedés, felelős, céldátum és review; eredeti fotók/listák/jegyzőkönyvek védett URI-ja és SHA-256 metaadata.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Bármely éles adatgyűjtés előtt, valamint az A-022 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-018",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső owner",
      "process_state": "Az öt scope-os read-only health snapshot módszertan elkészült; az SRC-004 RAID-, tárhely- és backup-állításai továbbra is unverified_internal; adatgyűjtés nem történt.",
      "related": "A-022; data/infrastructure_health_snapshot_plan.json; templates/infrastructure_health_snapshot_record.md",
      "required": "Belső metALCOM infrastruktúra-kontrollgazda; pontos host/VM/storage/RAID/backup célpontlista és adatminősítés; Kollár Csabával platformonként jóváhagyott read-only módszer; legkisebb jogosultság, időablak és stop condition; G2/G3 írásos jóváhagyás; időbélyeges export, gyűjtő és módszer; védett URI és SHA-256; observationönként emberi review; az eredeti állítás emberi minősítése; igazolt sürgős kockázat esetén külön A-023/G3 döntés. Secret, célpontlista és nyers export nem kerülhet Gitbe.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; jogosult költségkeret-gazda",
      "gate": "Bármely licenc-/supportmegfelelőségi állítás, fizetős javaslat, A-016/A-024/A-028 döntés vagy az A-029 DONE státusza előtt.",
      "id": "DEF-019",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső owner és szerződésgazda",
      "process_state": "A hat kategóriás entitlement/support mátrix és a költségkapu-validáció elkészült; minden tényleges jogosultság, használat és lifecycle státusz UNKNOWN_PENDING_EVIDENCE.",
      "related": "A-029; data/license_entitlement_plan.json; templates/license_entitlement_review_record.md",
      "required": "Belső metALCOM infrastruktúra-kontrollgazda és alkalmazásgazdák; szerződés/beszerzés gazda; szerződés-, számla-, SAM- és gyártói portál-export védett URI-val/SHA-256-tal; jóváhagyott read-only deployment/usage összesítés; hivatalos gyártói lifecycle-forrás és ellenőrzési dátum; kategóriánként entitlement/support minősítés és reviewer; eltérésenként B0/no-action döntés vagy meglévő entitlement, kapacitás, B0 alternatíva, pilot, mérhető acceptance criterion, purchase trigger és halasztási kockázat; B1–B3 esetén G5 döntés. Licenckulcs, személyes lista, szerződés és nyers export nem kerülhet Gitbe.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Bármely valós adatkapcsolat, belső hálózati közzététel, hitelesítés vagy éles portáldeploy előtt.",
      "id": "DEF-020",
      "owner": "Pásztor András",
      "process_state": "A helyi, böngészős célállapot dependency-free prezentációs prototípusa elkészült; kizárólag statikus, nem érzékeny repository-metaadatot jelenít meg, műveletei szimulációk.",
      "related": "D-028; A-042; portal_demo/; LOCAL_PORTAL_BASELINE.md",
      "required": "Prezentáció utáni stakeholder-visszajelzés és elfogadott funkcionális scope; belső szerver/üzemeltető; hitelesítés, szerepkörök, hálózati zóna és TLS; védett evidenciatár-integráció; adatminősítés, naplózás, backup/restore és kill switch; G2 architektúra-review, G3 pilot/deploy döntés; jogosultsági, negatív, helyreállítási és leállítási teszt evidenciája.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Bármely valós logkapcsolat vagy konfiguráció előtt, valamint az A-018 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-021",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső owner és forrásgazdák",
      "process_state": "A tíz forráskategóriás, három retention osztályos, öt hibariasztásos és napi/heti review-keret elkészült; konkrét loggyűjtés, riasztásteszt és review-run nem történt.",
      "related": "A-018; data/logging_monitoring_plan.json; templates/log_review_record.md",
      "required": "Belső infrastruktúra-/incidenskezelési kontrollgazda és forrásgazdák; kategóriánként konkrét rendszer, EIR-scope, jóváhagyott read-only módszer, adatminősítés és mintalog védett URI/SHA-256; G1 baseline-review, érzékeny loghoz G2, éles collector/alert konfigurációhoz G3; retention osztályonként jogalap, napérték, kapacitás és reviewer; öt alert szabálya, címzettje, nem destruktív tesztje és evidenciája; napi/heti reviewer, helyettes, escalation és első review-run ticket/exception/review rekorddal. Nyers log és secret nem kerülhet Gitbe.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; jogosult G3 approver",
      "gate": "Bármely éles patch, karbantartás vagy változtatás előtt, valamint az A-019 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-022",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső ownerek",
      "process_state": "A négy workstream, tízlépéses workflow, naptár-, change-, rollback- és kivételséma elkészült; konkrét scope, naptár vagy végrehajtás nincs.",
      "related": "A-019; data/maintenance_change_plan.json; templates/maintenance_change_record.md",
      "required": "Belső metALCOM rendszer-/szolgáltatásgazdák és változáskezelési approver; workstreamenként scope, owner, cadence és trigger; jóváhagyott baseline-, patch- és maintenance-naptár; első kontrollált minta change ticket kockázat/hatás, owner- és G3 döntés, backup proof, rollback terv és teszt/proof, időablak, értesítés, pre/post validáció, védett URI/SHA-256 és reviewer mellett; első lejáratos exception minta kompenzáló kontrollal; távoli karbantartás esetén külön hozzáférési/felügyeleti review. Secret és nyers konfiguráció Gitbe nem kerülhet.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; szükség esetén Dr. Berta Brigitta",
      "gate": "Bármely beszállítói végleges minősítés, megkeresés, szerződésmódosítás vagy az A-021 review-ra kész/DONE állapota előtt.",
      "id": "DEF-023",
      "owner": "Pásztor András; kijelölendő ellátásilánc-/beszerzési felelős és szerződésgazdák",
      "process_state": "A 19.1/19.4 kontrollhoz elkészült a hatdimenziós kritikalitás, tíz szerződéses kontroll, kockázati döntés és review-naptár proposal-only sémája; valós beszállítói adat nincs benne.",
      "related": "A-021; data/supplier_risk_plan.json; templates/supplier_risk_review_record.md",
      "required": "Kijelölt belső ellátásilánc-/beszerzési felelős és szerződésgazdák; jóváhagyott beszállítói és szerződéslista védett tárban; szolgáltatás/EIR/owner kapcsolatok; dimenziónkénti indokolt pontozás; kontrollonként szerződéses vagy kérdőív-evidencia és gap; hiányonként emberi treatment döntés, felelős és határidő; kritikalitás- és változástrigger-alapú review-naptár; G1 reviewer-rekord. Jogi értelmezéshez Dr. Berta Brigitta review-ja szükséges. Beszállítónév, szerződés, kapcsolattartó és ár Gitbe nem kerülhet.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; jogosult G3 approver",
      "gate": "Bármely éles lekérdezés, tesztüzenet, connector/DNS/routing változás vagy migrációs döntés, valamint az A-025 review-ra kész/DONE állapota előtt.",
      "id": "DEF-024",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső levelezési owner és alkalmazásgazdák",
      "process_state": "Elkészült a stratégiai/nem igazolt forráshelyzetet megőrző read-only felderítési, SMTP dependency-, hétszcenáriós teszt- és rollback-séma; éles lekérdezés, teszt vagy migráció nem történt.",
      "related": "A-025; data/exchange_dependency_plan.json; templates/exchange_dependency_record.md",
      "required": "Belső levelezési/infrastruktúra-kontrollgazda; pontos Exchange/SMTP scope és adatminősítés; Kollár Csabával jóváhagyott legkisebb jogosultságú read-only exportmódszer; message tracking minta, connector-, relay-, auth-, hálózati/DNS-export védett URI/SHA-256-tal; alkalmazás-, eszköz-, technikai és üzleti owner sign-off; dependency rekordok; tesztenként kontrollált címzett/scope, owner- és G3 approval, baseline, eredmény, stop condition és rollback proof; G1 review; külön migrációs célmodell és döntés. Valós cím, IP, credential, konfiguráció és nyers log Gitbe nem kerülhet.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "gate": "Bármely éles lekérdezés/export, restore/import, törlés, alkalmazásleállítás vagy migráció, valamint az A-026 review-ra kész/DONE állapota előtt.",
      "id": "DEF-025",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő üzleti-, adat-, alkalmazás- és belső rendszerowner",
      "process_state": "Elkészült az SRC-004 nem igazolt státuszát megőrző jogi retention-, adatleltár-, read-only export-, izolált restore/read-test és migrációs döntési séma; rendszerkapcsolat vagy végrehajtás nem történt.",
      "related": "A-026; data/legacy_retention_plan.json; templates/legacy_retention_review_record.md",
      "required": "Dr. Berta Brigitta jogi állásfoglalása jogalapokról, megőrzési időkről, legal holdról és selejtezési korlátokról; üzleti/adat-/alkalmazásowner és belső rendszerowner; jóváhagyott adatkategória- és függőségi lista; Kollár Csabával jóváhagyott read-only exportmódszer; adatszótár, rekorddarab, időtartomány, formátum, teljesség, kivételnapló, védett URI/SHA-256; izolált restore/read teszt owner- és G3 approval mellett; olvashatóság, integritás, idő, cleanup és reviewer; külön retention/migration/disposal döntés. Nyers export, személyes adat, üzleti dokumentum és credential Gitbe nem kerülhet.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; jogosult G3/G5 approver",
      "gate": "Bármely éles lekérdezés, user/session/workload mozgatás, konfigurációváltozás, konszolidáció vagy vásárlás, valamint az A-027 review-ra kész/DONE állapota előtt.",
      "id": "DEF-026",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső RDS-, alkalmazás- és üzleti ownerek",
      "process_state": "Elkészült az SRC-004 nem igazolt státuszát megőrző hatdomaines RDS-assessment, öttesztes, költségkapus és döntési séma; a jelenlegi szeparáció marad, éles lekérdezés vagy konszolidáció nem történt.",
      "related": "A-027; data/rds_separation_plan.json; templates/rds_separation_review_record.md",
      "required": "Belső RDS-/infrastruktúra-owner, Kollár Csaba, alkalmazás- és üzleti ownerek; jóváhagyott read-only user/CAL-, session-, workload-, teljesítmény-, konfigurációs és backup-export védett URI/SHA-256-tal; banki/könyvelési kulcs-/eszköz-scope metaadata secret nélkül; A-029 licencreview; szeparációs kockázat, continuity és rollback; öt kontrollált teszt owner- és G3 approval mellett; G1 review; fizetős eltérésnél hét költséginput és G5; külön konszolidációs vagy szeparációfenntartási döntés. Felhasználólista, banki/könyvelési adat, secret és kulcsanyag Gitbe nem kerülhet.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; jogosult G3/G5 approver",
      "gate": "Bármely éles lekérdezés, scan, változtatás, konszolidáció, VM-mozgatás vagy vásárlás, valamint az érintett akció review-ra kész/DONE státusza előtt.",
      "id": "DEF-027",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső rendszer-/EIR-ownerek",
      "process_state": "Elkészült az öt technikai akció egységes, proposal-only döntési csomagja; sem adatgyűjtés, scan, teszt, változtatás, vásárlás, sem külső művelet nem történt.",
      "related": "A-023; A-024; A-028; A-033; A-034; data/technical_work_packages.json",
      "required": "A-022/A-029 elfogadott inputok; belső rendszer- és EIR-ownerek; pontos scope; jóváhagyott read-only exportok védett URI/SHA-256-tal; VM/AD/DNS/DHCP dependency-, HA-, kapacitás-, backup-, licenc- és rollback-review; sérülékenységvizsgálati mód és SLA; két nem auditált EIR definíciója, assetje és függősége; G1/G2 review, minden teszt/változtatás előtt G3, fizetős döntés előtt hét költséginput és G5; végrehajtási és retest evidencia.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3/G5 approver",
      "gate": "Bármely kihirdetés, gyakorlat, képzés, éles fiókművelet, MFA-pilot vagy vásárlás, valamint az érintett akció review-ra kész/DONE státusza előtt.",
      "id": "DEF-028",
      "owner": "Pásztor András; Kóczán Mónika; Koncz Erika; Kollár Csaba; kijelölendő belső kontroll-/alkalmazásgazdák",
      "process_state": "Elkészült a hat szervezeti/működési akció proposal-only regisztere és felelősségi útmutatója; működési vagy technikai végrehajtás nem történt.",
      "related": "A-009; A-010; A-013; A-014; A-015; A-016; data/operational_control_work_packages.json",
      "required": "Szabályzatgazda és review-naptár; kontrollgazdai kapacitásigény és költségkeret-review; belső incidenskontroll-gazda, kontaktlista, jogi/IBF review és tabletop; HR/IBF szerepkör-alapú képzési scope és végrehajtási evidencia; jóváhagyott read-only account/access export, alkalmazásgazdai döntés, külön G3 change és post-check; A-029 licencreview, privilegizált MFA-scope, pilot, rollback, G3 és szükség esetén G5. Személyes lista, incidensadat, credential és védett dokumentum csak evidenciatárban kezelhető.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult benyújtó",
      "gate": "Bármely kapcsolódó kontroll elfogadása vagy külső benyújtás, valamint az érintett akció DONE státusza előtt.",
      "id": "DEF-029",
      "owner": "Pásztor András; Kóczán Mónika",
      "process_state": "Elkészült az öt irányítási akció bizonyítéklánc-regisztere; a D-022/D-025/D-026/D-027 baseline-ok megőrzöttek, de a pótlandó evidencia nem lett teljesítettnek jelölve.",
      "related": "A-001; A-002; A-007; A-035; A-036; data/governance_work_packages.json",
      "required": "Formális IBF-kijelölés és alkalmassági/jogi review; ténylegesen aláírt G2/G4 nyilatkozat; SRC-008 védett URI-ja és reviewer-rekordja; aláírt RACI, vezetői szponzor és belső infrastruktúra-/incidenskontroll-gazda; végleges terv G1/G2/G4 review-ja, jogosult emberi aláírás és benyújtás, védett végleges csomag SHA-256-tal, valamint átvételi igazolás.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; jogosult G5 approver",
      "gate": "Hatálybalépés, kontrollműködés elfogadása, beszerzési döntés vagy az érintett akció DONE státusza előtt.",
      "id": "DEF-030",
      "owner": "Pásztor András; Koncz Erika; Dr. Berta Brigitta; kijelölendő dokumentum-, EIR-, kockázat-, beszerzési és szerződésgazdák",
      "process_state": "Elkészült az öt szabályozási terület kötelező minimumtartalma és proposal-only kitöltési kerete; hatályos szabályzat vagy működési evidencia nem jött létre.",
      "related": "A-037; A-038; A-039; A-040; A-041; data/policy_baseline_work_packages.json; templates/control_policy_baseline.md",
      "required": "Dokumentumgazdák/helyettesek és scope; A-037 médialeltár, törlési módszer és mintajegyzőkönyv; A-038 HR/jogi/IT JML és visszavonási SLA; A-039 vezetői kockázati étvágy, skála, gazdák és treatment review; A-040 három auditált EIR kitöltött, verziózott SSP-je owner/IBF review-val; A-041 beszerzési/szerződésgazda, kitöltött checklist, klauzulák, support/EOL és kivétel/G5; mindegyikhez jóváhagyás, kihirdetés, megismerés, védett URI/SHA-256 és működési mintavétel.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "gate": "Bármely valós forrás, érzékeny adat, belső hálózati szolgáltatás vagy éles portálintegráció előtt, valamint az A-042 DONE státusza előtt.",
      "id": "DEF-031",
      "owner": "Pásztor András; kijelölendő agent-/portálüzemeltető és forrásgazdák",
      "process_state": "Elkészült a hálózat nélküli, allowlistelt szintetikus metaadaton futó proposal/approval-queue/auditlog pilot, automatikus negatív és kill-switch tesztekkel; éles kapcsolat nincs.",
      "related": "A-042; config/continuous_assurance_pilot.json; generated/continuous_assurance_pilot_output.json; CONTINUOUS_ASSURANCE_AGENT_PILOT.md",
      "required": "Funkcionális scope és forrásgazdák; redaktált, emberileg elfogadott gold-case készlet; téves riasztási és tényleges emberimunka-csökkentési baseline/pilot mérés; belső portál és védett evidenciatár API-ja; szerver, üzemeltető, hitelesítés, RBAC, TLS, adatminősítés, retention, backup/restore és monitoring; G1 funkcionális, G2 biztonsági/jogi és G3 éles adatkapcsolati/pilot döntés; jogosultsági, negatív, helyreállítási és ember által tanúsított kill-switch próba.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "gate": "Bármely nem loopback kötés, többfelhasználós használat, hitelesített döntés, fájlfeltöltés, védett tár- vagy éles adatkapcsolat és belső hálózati pilot előtt.",
      "id": "DEF-032",
      "owner": "Pásztor András; kijelölendő portálüzemeltető",
      "process_state": "Elkészült a loopback-only helyi portál-MVP: élő repository-snapshot, A-042 pilotnézet és append-only, formális hatás nélküli review-tervezet auditnyom. Hitelesítés, hálózati publikálás és éles integráció nincs.",
      "related": "D-028; A-042; config/portal_mvp.json; portal_demo/; src/nis2_harness/portal.py; src/nis2_harness/portal_server.py",
      "required": "Kijelölt belső szerver és üzemeltető; jóváhagyott hálózati zóna; vállalati vagy dokumentált helyi hitelesítés; RBAC és legkisebb jogosultság; TLS/tanúsítvány; védett evidenciatár API és adatminősítés; auditlog-retention, backup/restore, monitoring és incidensfolyamat; a hitelesített jóváhagyási rekord és a formális workflow külön terve; G1 funkcionális, G2 biztonsági/jogi architektúra-review, G3 pilot/deploy döntés; jogosultsági, session-, CSRF-, negatív, helyreállítási és ember által tanúsított kill-switch teszt.",
      "status": "OPEN_DEFERRED"
    }
  ],
  "gate_legend": [
    {
      "description": "Kontrollgazda vagy IBF szakmai ellenőrzése.",
      "id": "G1",
      "name": "Szakmai review"
    },
    {
      "description": "Adatkezelési, jogi vagy érzékeny információs döntés.",
      "id": "G2",
      "name": "Biztonság és jog"
    },
    {
      "description": "Rendszergazda és változáskezelés jóváhagyása.",
      "id": "G3",
      "name": "Éles változtatás"
    },
    {
      "description": "Jogi és vezetői aláírás külső továbbítás előtt.",
      "id": "G4",
      "name": "Külső benyújtás"
    },
    {
      "description": "Költségkeret-gazdai vagy vezetői jóváhagyás.",
      "id": "G5",
      "name": "Költési döntés"
    }
  ],
  "meta": {
    "as_of": "2026-07-20",
    "auth_status": "NOT_CONFIGURED",
    "disclaimer": "A felület helyi MVP. A review-tervezet nem jóváhagyás, nem evidencia, nem módosít akcióstátuszt és a portál nem hajt végre jóváhagyást.",
    "mode": "LOCAL_MVP",
    "product": "metALCOM NIS2 Audit Control Center",
    "source": "local repository metadata",
    "write_scope": "DRAFT_REVIEW_NOTES_ONLY"
  },
  "summary": {
    "accepted_risks": 1,
    "action_plan_deadline": "2026-09-24",
    "days_to_deadline": 66,
    "gate_counts": {
      "G1": 12,
      "G2": 14,
      "G3": 11,
      "G4": 4,
      "G5": 6
    },
    "in_progress": 8,
    "new_actions": 34,
    "open_human_tasks": 31,
    "p0_actions": 17,
    "priority_counts": {
      "P0": 17,
      "P1": 22,
      "P2": 3
    },
    "repeat_audit_target": "2027-09-30",
    "status_counts": {
      "IN_PROGRESS": 8,
      "NEW": 34
    },
    "total_actions": 42
  }
};
