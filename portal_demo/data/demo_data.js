window.NIS2_DEMO_DATA = {
  "actions": [
    {
      "ai_eligibility": "partial",
      "ai_role": "report_writer",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.2",
          "control_title": "Elektronikus információs rendszerek biztonságáért felelős személy",
          "explanation": "Az érintett szervezet vezetője a jogszabályi követelményeknek megfelelően nevezi ki az EIR biztonságáért felelős személyt. Ez a személy felelős az érintett szervezet szintű információbiztonsági szabályzatnak való megfelelés koordinálásáért, fejlesztéséért, bevezetéséért és fenntartásáért. Az érintett szervezet vezetője biztosítja számára a célok eléréséhez szükséges erőforrásokat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet vezetője kijelöl egy személyt, aki felelős lesz az elektronikus információs rendszerek biztonságáért. Ennek a személynek függetlennek kell lennie (pl. nem lehet egy személyben az informatikai vagy más vezető).\n2. A szervezet vezetője biztosítja, hogy a kijelölt személy rendelkezzen a célok eléréséhez szükséges erőforrásokkal. Ez magában foglalhatja a megfelelő képzést, eszközöket, technológiát és támogató személyzetet.",
          "iso_27001_ref": "5.1; 5.3; A.5.2",
          "nist_sp_800_53_rev5_ref": "PM-2",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.2"
      ],
      "cost_band": "B0",
      "days_to_target": -49,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "TERMINAL",
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
      "status": "DONE",
      "target_date": "2026-06-27",
      "task": "Rögzítse a 2026.06.26-i kézhezvétel bizonyítékának védett evidenciatári vagy iratkezelési hivatkozásját és reviewerét, majd véglegesítse a jóváhagyandó határidőnaptárt.",
      "title": "Hatósági határidő"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "evidence_curator",
      "approver": "Lángi Zoltán",
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -51,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -44,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -39,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.4",
          "control_title": "Intézkedési terv és mérföldkövei",
          "explanation": "Az intézkedési terv és a mérföldkövei kulcsfontosságú szervezeti dokumentum, amelyet a vezetőség felé jelenteni kell. A szervezetek intézkedési terveket és mérföldköveket dolgoznak ki az egész szervezetre kiterjedően, a priorizált kockázatkezelési intézkedésekkel, biztosítva az összhangot a szervezet céljaival és célkitűzéseivel. Az intézkedési terv és a mérföldköveinek frissítése a végrehajtott intézkedések értékelése és a folyamatos monitoring tevékenység alapján történik. Több intézkedési terv is létezhet egyszerre, az EIR-nek, az üzleti folyamatnak és a szervezet összetettségének megfelelően.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek be kell vezetnie egy folyamatot, amely biztosítja, hogy az információbiztonsági és ellátási lánc kockázatkezelési intézkedések, valamint az EIR-ek intézkedési tervei kidolgozásra és karbantartásra kerüljenek.\n2. A szervezetnek dokumentálnia kell a helyreállító információbiztonsági és ellátási lánc kockázatkezelési intézkedéseket, hogy megfelelően reagálhasson a szervezet műveleteinek és eszközeinek, személyeknek, más szervezeteknek a kockázataira.\n3. A szervezetnek be kell tartania a meghatározott jelentési követelményeket, hogy megfeleljen a szabályozási előírásoknak.\n4. A szervezetnek át kell tekintenie az intézkedési terveket és mérföldköveket, hogy biztosítsa, hogy azok összhangban vannak a szervezet kockázatkezelési stratégiájával és a kockázatkezelési intézkedések szervezeti szintű prioritásaival.\n5. A szervezetnek dokumentálnia kell az összes lépést és intézkedést, hogy biztosítsa a folyamat átláthatóságát és nyomon követhetőségét.",
          "iso_27001_ref": "6.1.1; 6.2; 7.5.1; 7.5.2; 7.5.3; 8.3; 9.3.2; 10.2",
          "nist_sp_800_53_rev5_ref": "PM-4",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.4"
      ],
      "cost_band": "B0",
      "days_to_target": -24,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.4",
          "control_title": "Intézkedési terv és mérföldkövei",
          "explanation": "Az intézkedési terv és a mérföldkövei kulcsfontosságú szervezeti dokumentum, amelyet a vezetőség felé jelenteni kell. A szervezetek intézkedési terveket és mérföldköveket dolgoznak ki az egész szervezetre kiterjedően, a priorizált kockázatkezelési intézkedésekkel, biztosítva az összhangot a szervezet céljaival és célkitűzéseivel. Az intézkedési terv és a mérföldköveinek frissítése a végrehajtott intézkedések értékelése és a folyamatos monitoring tevékenység alapján történik. Több intézkedési terv is létezhet egyszerre, az EIR-nek, az üzleti folyamatnak és a szervezet összetettségének megfelelően.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek be kell vezetnie egy folyamatot, amely biztosítja, hogy az információbiztonsági és ellátási lánc kockázatkezelési intézkedések, valamint az EIR-ek intézkedési tervei kidolgozásra és karbantartásra kerüljenek.\n2. A szervezetnek dokumentálnia kell a helyreállító információbiztonsági és ellátási lánc kockázatkezelési intézkedéseket, hogy megfelelően reagálhasson a szervezet műveleteinek és eszközeinek, személyeknek, más szervezeteknek a kockázataira.\n3. A szervezetnek be kell tartania a meghatározott jelentési követelményeket, hogy megfeleljen a szabályozási előírásoknak.\n4. A szervezetnek át kell tekintenie az intézkedési terveket és mérföldköveket, hogy biztosítsa, hogy azok összhangban vannak a szervezet kockázatkezelési stratégiájával és a kockázatkezelési intézkedések szervezeti szintű prioritásaival.\n5. A szervezetnek dokumentálnia kell az összes lépést és intézkedést, hogy biztosítsa a folyamat átláthatóságát és nyomon követhetőségét.",
          "iso_27001_ref": "6.1.1; 6.2; 7.5.1; 7.5.2; 7.5.3; 8.3; 9.3.2; 10.2",
          "nist_sp_800_53_rev5_ref": "PM-4",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.4"
      ],
      "cost_band": "B0",
      "days_to_target": 36,
      "deadline_bucket": "LATER",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.4",
          "control_title": "Intézkedési terv és mérföldkövei",
          "explanation": "Az intézkedési terv és a mérföldkövei kulcsfontosságú szervezeti dokumentum, amelyet a vezetőség felé jelenteni kell. A szervezetek intézkedési terveket és mérföldköveket dolgoznak ki az egész szervezetre kiterjedően, a priorizált kockázatkezelési intézkedésekkel, biztosítva az összhangot a szervezet céljaival és célkitűzéseivel. Az intézkedési terv és a mérföldköveinek frissítése a végrehajtott intézkedések értékelése és a folyamatos monitoring tevékenység alapján történik. Több intézkedési terv is létezhet egyszerre, az EIR-nek, az üzleti folyamatnak és a szervezet összetettségének megfelelően.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek be kell vezetnie egy folyamatot, amely biztosítja, hogy az információbiztonsági és ellátási lánc kockázatkezelési intézkedések, valamint az EIR-ek intézkedési tervei kidolgozásra és karbantartásra kerüljenek.\n2. A szervezetnek dokumentálnia kell a helyreállító információbiztonsági és ellátási lánc kockázatkezelési intézkedéseket, hogy megfelelően reagálhasson a szervezet műveleteinek és eszközeinek, személyeknek, más szervezeteknek a kockázataira.\n3. A szervezetnek be kell tartania a meghatározott jelentési követelményeket, hogy megfeleljen a szabályozási előírásoknak.\n4. A szervezetnek át kell tekintenie az intézkedési terveket és mérföldköveket, hogy biztosítsa, hogy azok összhangban vannak a szervezet kockázatkezelési stratégiájával és a kockázatkezelési intézkedések szervezeti szintű prioritásaival.\n5. A szervezetnek dokumentálnia kell az összes lépést és intézkedést, hogy biztosítsa a folyamat átláthatóságát és nyomon követhetőségét.",
          "iso_27001_ref": "6.1.1; 6.2; 7.5.1; 7.5.2; 7.5.3; 8.3; 9.3.2; 10.2",
          "nist_sp_800_53_rev5_ref": "PM-4",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.4"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.1",
          "control_title": "Információbiztonsági szabályzat",
          "explanation": "Az információbiztonsági szabályzat egy szervezeti szintű dokumentum, amely átfogó képet nyújt az érintett szervezet információbiztonsági követelményeiről. Leírja az egész szervezetre érvényes biztonsági szabályokat és követelményeket, amelyek az egész szervezeten belül kötelező érvényűek. Az információbiztonsági szabályzat lehet egyetlen dokumentum vagy dokumentumok gyűjteménye is. A szabályzat elegendő információt nyújt a biztonsági követelményekről, hogy lehetővé tegye a szabályzat szándékával egyértelműen összhangban lévő megvalósítást. Az információbiztonsági szabályzat frissítései során az érintett szervezet reagál a szervezetben bekövetkezett változásokra, valamint a szabályzatban foglaltak végrehajtása és a (felül)vizsgálatok során azonosított problémákra. A meghatározott biztonsági követelményeket végre kell hajtani szervezeti szinten, valamint az üzleti folyamatok szintjén, továbbá elengedhetetlenek a szervezet információbiztonsági céljainak kezeléséhez és eléréséhez. Az egyes EIR-ekhez tartozó rendszerbiztonsági tervek és az érintett szervezet információbiztonsági szabályzatnak együtt teljes képet kell nyújtaniuk a szervezetben alkalmazott biztonsági követelményekről és megvalósított védelmi intézkedésekről. Amennyiben ez szükséges, az információbiztonsági szabályzat hivatkozik a különálló rendszerbiztonsági tervekre vagy eljárásrendekre, amelyek tartalmazzák az alacsonyabb szintű rendelkezéseket. Az információbiztonsági szabályzat frissítését kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. Az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia egy információbiztonsági szabályzatot, amely átfogó képet nyújt a szervezet biztonsági követelményeiről és ezek alapján bevezetett vagy bevezetni kívánt védelmi intézkedésekről. Ez a szabályzat meghatározza a szervezet biztonsági célkitűzéseit, a hatályát, szerep- és felelősségi köröket, a vezetői elkötelezettséget, a szervezeten belüli és kívüli együttműködés kereteit, valamint a megfelelőségi kritériumokat.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy az információbiztonsági szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak. Az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet elfogadható információbiztonsági szabályzatnak.\n3. A szervezet vezetőjének jóvá kell hagynia a szabályzatot, és felelősséget kell vállalnia a szervezeti tevékenységekért, a szervezeti eszközökért, a szervezethez köthető személyekért, a más szervezetek szempontjából számottevőnek tartott kockázatokért.\n4. A szervezetnek gondoskodnia kell az információbiztonsági szabályzat megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell az információbiztonsági szabályzatban megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek gondoskodnia kell arról, hogy az informatikai biztonsági szabályzat jogosulatlanok számára ne legyen megismerhető. Az információbiztonsági szabályzat módosítására csupán az erre jogosultsággal rendelkező személyeknek, dokumentált módon van lehetősége.\n7. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális információbiztonsági szabályzatot a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "4.1; 4.2; 4.3; 4.4; 5.2; 5.3; 6.1.1; 6.2; 7.4; 7.5.1; 7.5.2; 7.5.3; 8.1; 9.3.1; 10.1; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36",
          "nist_sp_800_53_rev5_ref": "PM-1",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.1"
      ],
      "cost_band": "B0",
      "days_to_target": -24,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.3",
          "control_title": "Információbiztonságot érintő erőforrások",
          "explanation": "A szervezetek fontolóra vehetik egy információbiztonságért felelős szakértői csoport létrehozását, amelybe a szükséges erőforrások bevonásának részeként speciális szakértelemmel rendelkező személyeket vonnak be. A szervezetek kijelölhetnek és felhatalmazhatnak egy beruházási felülvizsgálati bizottságot vagy hasonló csoportot, hogy irányítsa és felügyelje a beruházástervezési és -ellenőrzési folyamat információbiztonsági szempontjait.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell fontolnia, hogy olyan speciális szakértelemmel és szakmai elhivatottsággal rendelkező felelős(ök)et [ún. \"security champion\"] nevez ki az információbiztonság területére, és a szükséges erőforrások bevonásának részeként biztosítja számára/számukra a szükséges jogköröket és erőforrásokat.\n2. A szervezet kijelölhet és felhatalmazhat egy, a beruházások felülvizsgálatáért felelős csoportot, hogy kezelje és felügyelje az információbiztonsági szempontokat a költségvetés tervezési és ellenőrzési folyamatában.\n3. A szervezet gondoskodik arról, hogy a szükséges dokumentáció összhangban legyen a hatályos törvényekkel, végrehajtási rendeletekkel, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal. Ez magában foglalja az EIR biztonsági szabályzatainak, eljárásrendjeinek, eljárásainak dokumentálását, valamint a kivételek dokumentálását és naplózását.\n4. A szervezet biztosítja az információbiztonsági célok végrehajtásához és fejlesztéséhez tervezett forrásokat. Ez magában foglalja a szükséges anyagi források biztosítását, valamint a szükséges személyi és technikai erőforrások biztosítását. Az érintett szervezetnek biztosítania kell, hogy ezek az erőforrások beépüljenek az éves költségvetés tervezésébe és beruházási kérelmeibe.",
          "iso_27001_ref": "5.1; 6.2; 7.1",
          "nist_sp_800_53_rev5_ref": "PM-3",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.3"
      ],
      "cost_band": "B0",
      "days_to_target": -24,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.5",
          "control_title": "Elektronikus információs rendszerek nyilvántartása",
          "explanation": "Az érintett szervezetnek létre kell hoznia egy listát vagy adatbázist, amelyben nyomon követi az összes elektronikus információs rendszerének (EIR) rendszerelemeit és összetevőit. Ez magában foglalja a szoftvereket, hardvereket, hálózati infrastruktúrát és egyéb technológiai eszközöket.\nAz EIR-ek nyilvántartása rendkívül fontos a szervezet számára, mivel segít azonosítani, hogy mely rendszerek fontosak az üzletmenet szempontjából, lehetővé teszi, hogy a szervezet nyomon követhesse a rendszerek jelenlegi állapotát, beleértve a frissítéseket, konfigurációkat és egyéb változásokat, segít a szervezetnek felmérni a rendszerek kockázatát, mivel a régi vagy elavult rendszerek gyakran nagyobb kockázatot jelentenek, lehetővé teszi az IT csapat számára, hogy hatékonyabban tervezzen és végrehajtson karbantartási és frissítési feladatokat és elősegíti a szükséges dokumentáció és a hitelesítési követelmények teljesítését.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek először létre kell hoznia egy EIR nyilvántartást. Ez magában foglalja az összes EIR azonosítását és kategorizálását a szervezeten belül.\n2. A szervezetnek meg kell határoznia a nyilvántartás frissítésének gyakoriságát. Ez lehet hetente, havi vagy negyedéves rendszerességgel, attól függően, hogy milyen gyakran változnak az EIR-ek vagy azok rendszerelemei, összetevői.\n3. A szervezetnek rendszeresen ellenőriznie kell az EIR-eket, hogy biztosítsa azok megfelelőségét és naprakészségét. Ez magában foglalja az EIR-ek ellenőrzését a nyilvántartásban rögzített változások alapján.\n4. A szervezetnek dokumentálnia kell az EIR-ek változásait, beleértve az új rendszerelemek hozzáadását, a meglévők módosítását vagy törlését.\n5. A szervezetnek biztosítania kell, hogy az EIR-ek nyilvántartása naprakész és pontosan egyezik a valósággal. Ez magában foglalja a nyilvántartás rendszeres felülvizsgálatát és frissítését.\n6. A szervezetnek biztosítania kell, hogy a nyilvántartásban szereplő összes EIR megfelel az aktuális kiberbiztonsági követelményeknek. Ez magában foglalja a naplóban rögzített biztonsági események ellenőrzését és a szükséges intézkedések megtételét a biztonsági problémák kezelésére.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "PM-5",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "6.36",
          "control_title": "Rendszerelem leltár",
          "explanation": "Az EIR elemei olyan azonosítható információs technológiai eszközök, amelyek hardvert, szoftvert és firmware-t tartalmaznak. Az érintett szervezet dönthetnek úgy, hogy központosított leltárt hoz létre, amely magában foglalja az összes szervezeti rendszerelemet. Ilyen helyzetekben a szervezet biztosítja, hogy a leltárak tartalmazzák a rendszerspecifikus információkat, amelyek az elemek elszámolásához szükségesek. A rendszerelemek hatékony elszámolásához szükséges információk közé tartozik az EIR neve, a szoftver tulajdonosai, a szoftver verziószámai, a hardver leltárspecifikációi, a szoftverlicensz információk, és a hálózatba kötött elemek esetében a gépnevek és hálózati címek az összes implementált protokollon (pl. IPv4, IPv6) keresztül. A leltárspecifikációk tartalmazzák a beérkezés dátumát, a költséget, a modellt, a sorozatszámot, a gyártót, a beszállítói információt, az elem típusát és a fizikai helyszínt.\nA rendszerelemek kettős elszámolásának megakadályozása az elszámoltathatóság hiányát kezeli, amely akkor következik be, amikor az elem tulajdonjoga és az EIR-hez meglévő viszonya nem ismert. Ez különösen nagy vagy összetett hálózatot alkotó EIR-ek esetén fordulhat elő. A rendszerelemek kettős elszámolásának megakadályozására hatékony intézkedés lehet, ha a szervezet minden elemhez egyedi azonosító rendel. A szoftverleltár esetében a központilag kezelt szoftvert, amelyet más rendszereken keresztül érnek el, azon az EIR-en belüli elemként kezelik, amelyen telepítve és kezelve van. A szoftver, amelyet több szervezeti EIR-re telepítettek és az EIR szintjén kezelnek, minden egyes EIR-re vonatkozóan kezelt, és többször is szerepelhet a központosított elemleltárban, ami szükségessé teszi az EIR kapcsolatot minden szoftverpéldányhoz a központosított leltárban, hogy elkerüljék az elemek kettős elszámolását. A több hálózati protokollt (pl. IPv4 és IPv6) implementáló rendszerek szkennelése kettős elem azonosítást eredményezhet különböző címtartományokban. A \"Rendszerelem leltár – Automatizált karbantartás\" kontroll esetén elvárt biztonsági követelmények implementálása segíthet kiküszöbölni az elemek kettős elszámolását.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek leltárt kell készítenie a rendszerelemekről. A rendszerelemek diszkrét, azonosítható információs technológiai eszközök, amelyek hardvert, szoftvert és firmware-t tartalmaznak.\n2. A szervezetnek biztosítania kell, hogy a leltár pontosan tükrözi az EIR-t és tartalmazza az EIR-en belül található összes elemet.\n3. A szervezet létrehozhat központosított leltárt, amely magában foglalja az összes szervezeti rendszerelemet. A szervezetnek biztosítania kell, hogy a leltár tartalmazza a rendszerspecifikus információkat, amelyek az elemek elszámolásához szükségesek. A rendszerelemek hatékony elszámolásához szükséges információk közé tartozik az EIR neve, a szoftver tulajdonosai, a szoftver verziószámai, a hardver leltárspecifikációi, a szoftverlicensz információk, és a hálózatba kötött elemek esetében a gépnevek és hálózati címek az összes implementált protokollon (pl. IPv4, IPv6) keresztül. A leltárspecifikációk tartalmazzák a beérkezés dátumát, a költséget, a modellt, a sorozatszámot, a gyártót, a beszállítói információt, az elem típusát és a fizikai helyszínt.\n4. A szervezetnek törekednie kell a rendszerelemek kettős elszámolásának kiküszöbölésére. Ennek  megakadályozására hatékony intézkedés lehet, ha a szervezet minden elemhez egyedi azonosító rendel.\n5. Megakadályozza az elemek kettős elszámolását. Az érintett szervezet hatékonyan megakadályozza a rendszerelemek kettős elszámolását egyedi azonosítók használatával minden komponens számára.\n6. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia és frissítenie kell az elektronikus információs rendszerelemek leltárát.",
          "iso_27001_ref": "A.5.9; A.8.9",
          "nist_sp_800_53_rev5_ref": "CM-8",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.5",
        "6.36"
      ],
      "cost_band": "B0",
      "days_to_target": -34,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -40,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "9.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A biztonsági eseménykezelési szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a biztonsági eseménykezelési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a biztonsági eseménykezelési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a biztonsági eseménykezelési szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális biztonsági eseménykezelési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "IR-1",
          "requirement_family": "9",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "9.2",
          "control_title": "Képzés a biztonsági események kezelésére",
          "explanation": "A biztonsági eseményekre felkészítő képzés alapvetően szerepkör alapú. A szerepkörök figyelembevételével kell meghatározni a képzés tartalmát és mélységét. Például előfordulhat, hogy a felhasználóknak csak azt kell tudniuk, kit értesítsenek és milyen csatornán, vagy hogyan ismerjenek fel egy eseményt, azonban a rendszergazdák további képzést igényelhetnek a biztonsági események kezelésével kapcsolatban. A biztonsági eseményekre reagáló személyzet specifikusabb képzésben részesülhet az adatgyűjtési technikák, a jelentéstétel, a rendszer-helyreállítás és a rendszer-visszaállítás témakörében. A biztonsági eseményekre felkészítő képzés magában foglalja a felhasználók képzését a külső és belső forrásokból származó gyanús tevékenységek azonosítására és azok jelentésére. Az események, amelyek előidézhetik a reagálásra vonatkozó képzési tartalom frissítését (többek között) az eseménykezelési eljárás tesztelése; egy tényleges biztonsági eseményre adott válaszból levont tanulságok; az értékelés vagy az ellenőrzés megállapításai; a vonatkozó törvények, végrehajtási rendeletek, irányelvek, előírások, szabványok, ajánlások változásai.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztonsági eseménykezelési képzést kell biztosítania a szervezethez köthető személyek számára a rájuk bízott szerepek és felelősségek szerint.\n2. A szervezetnek gondoskodnia kell a biztonsági eseménykezeléssel kapcsolatos felelősségek ellátásáról.\n3. A szervezetnek rendszeresen frissítenie kell a képzési anyagot és szükség esetén továbbképzést kell biztosítania (például amikor az EIR változásai ezt szükségessé teszik).\n4. A szervezetnek meghatározott gyakorisággal meg kell ismételnie a képzést annak érdekében, hogy a felhasználók biztonsági ismeretei naprakészek legyenek.\n5. A szervezet meghatározott gyakorisággal, valamint meghatározott eseményeket követően felülvizsgálja és frissíti a biztonsági események kezelésére vonatkozó képzés tartalmát.",
          "iso_27001_ref": "A.6.3",
          "nist_sp_800_53_rev5_ref": "IR-2",
          "requirement_family": "9",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "9.9",
          "control_title": "Biztonsági események kezelése",
          "explanation": "",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "",
          "iso_27001_ref": "",
          "nist_sp_800_53_rev5_ref": "",
          "requirement_family": "9",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "9.34",
          "control_title": "Biztonsági eseménykezelési terv",
          "explanation": "Fontos, hogy az érintett szervezet összehangolt megközelítést dolgozzon ki és alkalmazzon a biztonsági események kezelésére. A biztonsági eseményekre való reagálás szerkezetét és struktúráját a szervezeti célok és az üzleti funkciók határozzák meg. A reagálási képesség kialakításának része, hogy a szervezetek megvizsgálják a külső szervezetekkel, köztük a külső szolgáltatókkal és az ellátási láncban érintett egyéb szervezetekkel való együttműködés és információmegosztás lehetőségét. A személyes adatokat érintő biztonsági eseményekhez kapcsolódóan a szervezetnek rendelkeznie kell az értesítésre vonatkozó eljárással, amely alapján meghatározásra kerül az értesítendő szereplők köre (felügyeletet végző szervezetek, érintett személyek stb.).",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia egy biztonsági eseménykezelési tervet. A tervnek ki kell elégítenie a szervezet feladatkörével, méretével, szervezeti felépítésével és funkcióival kapcsolatos egyedi igényeit. Meg kell határoznia a bejelentésköteles biztonsági eseményeket, és mérőszámokat kell alkalmaznia a biztonsági eseménykezelési folyamatok működésének belső mérésére.\n2. A szervezetnek meg kell határoznia azokat az erőforrásokat és vezetői támogatást, amelyek szükségesek a biztonsági eseménykezelési folyamatok kialakítására, fenntartására, bővítésére és  hatékonyabbá tételére. Emellett meg kell határoznia a biztonsági eseményekkel kapcsolatos információmegosztás módját.\n3. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia a biztonsági eseménykezelési tervet, amelyet a szervezet által meghatározott személyek és szerepkörök jóváhagynak. Emellett meg kell határoznia a biztonsági eseménykezelés felelőseit.\n4. A szervezetnek ki kell hirdetnie a biztonsági eseménykezelési tervet a biztonsági eseményeket kezelő személyek és szervezeti egységek számára.\n5. A szervezetnek ismertetnie kell a biztonsági eseménykezelési terv változásait a szervezet által meghatározott biztonsági eseménykezelésért felelős személyzettel. Gondoskodnia kell arról, hogy a biztonsági eseménykezelési terv jogosulatlanok számára ne legyen megismerhető vagy módosítható.\n6. A szervezetnek rendszeresen felül kell vizsgálnia és szükség esetén frissítenie kell a biztonsági eseménykezelési tervet annak érdekében, hogy az naprakész és hatékony legyen.",
          "iso_27001_ref": "7.5.1; 7.5.2; 7.5.3; A.5.24",
          "nist_sp_800_53_rev5_ref": "IR-8",
          "requirement_family": "9",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "9.1",
        "9.2",
        "9.9",
        "9.34"
      ],
      "cost_band": "B0",
      "days_to_target": 6,
      "deadline_bucket": "DUE_7_DAYS",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "3.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A biztonságtudatossági képzésre vonatkozó szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a biztonságtudatossági képzésre vonatkozó szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a biztonságtudatossági képzésre vonatkozó szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a biztonságtudatossági képzésre vonatkozó szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális biztonságtudatossági képzésre vonatkozó szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "AT-1",
          "requirement_family": "3",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "3.13",
          "control_title": "A biztonsági képzésre vonatkozó dokumentációk",
          "explanation": "A szervezet dokumentálja és nyomon követi az általános- és a szerepkör alapú biztonságtudatossági képzéseket. A dokumentálás magában foglalhatja magát a képzési anyagot, illetve a képzés lebonyolításával kapcsolatos egyéb dokumentációkat is pl.: jelenléti ívek használata, automatikusan generált részvételi igazolás. A szervezet a vonatkozó hatályos jogszabályokat, irányelveket, szabályozásokat, szabványokat és ajánlásokat figyelembe véve meghatározott ideig megőrzi a képzésről készült dokumentumokat.\n\nAz érintett szervezet dokumentálja és nyomon követi az információbiztonsági képzési tevékenységeket. Az érintett szervezet számára fontos, hogy a képzési tevékenységek dokumentálása és nyomon követése segítse a szervezetet abban, hogy biztosítsa a személyzet megfelelő képzését és felkészültségét az információbiztonsági kihívások kezelésére.\nA dokumentáció megőrzése lehetővé teszi az érintett szervezet számára, hogy bizonyítékot szolgáltasson a képzési tevékenységekről, és hogy értékelje a képzési programok hatékonyságát.\nAz érintett szervezet meghatározott ideig megőrzi a képzésről készült dokumentumokat. A megőrzés időtartama a szervezet belső szabályaitól és a vonatkozó jogszabályi követelményektől függ.\nAz érintett szervezet a képzési tevékenységek dokumentálásának és nyomon követésének hatékonyabbá tételére EIR-t vehet igénybe, ami lehetővé teszi a képzési tevékenységek adatainak centralizált tárolását és könnyű hozzáférhetőségét, illetve az anyagokkal kapcsolatos tevékenységek nyomon követését.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek dokumentálnia kell és egyúttal nyomon kell követnie az általános- és a szerepkör alapú biztonságtudatossági képzéseket. A dokumentálás magában foglalhatja magát a képzési anyagot, illetve a képzés lebonyolításával kapcsolatos egyéb dokumentációkat is pl.: jelenléti ívek használata, automatikusan generált részvételi igazolás.\n2. A szervezetnek a vonatkozó hatályos jogszabályokat, irányelveket, szabályozásokat, szabványokat és ajánlásokat figyelembe véve meghatározott ideig meg kell őriznie a képzésről készült dokumentumokat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "AT-4",
          "requirement_family": "3",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "3.1",
        "3.13"
      ],
      "cost_band": "B0",
      "days_to_target": 6,
      "deadline_bucket": "DUE_7_DAYS",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.2",
          "control_title": "Fiókkezelés",
          "explanation": "Az EIR fióktípusok lehetnek például egyéni, megosztott, csoport, rendszer, vendég, névtelen, vészhelyzeti, fejlesztői, ideiglenes és szolgáltatási fiókok. Az érintett szervezet meghatározza, hogy milyen fióktípusok létesíthetők az EIR-en belül, és milyen fióktípusok használata tiltott. Bizonyos fióktípusok különleges jóváhagyási folyamat után állíthatók be az EIR-en, ilyen jóváhagyást hajthat végre például az EIR üzleti oldali felelőse, vagy az elektronikus információs rendszer biztonságáért felelős személy. A tiltott fióktípusokhoz tartozhatnak például kockázati alapon a megosztott, csoportos, vészhelyzeti, névtelen, ideiglenes és vendégfiókok.\nAz ideiglenes és vészhelyzeti fiókok rövid távú használatra valók, speciális paraméterekkel ellátva. Az ilyen fiókok létrehozásakor a szervezet megfelelő körültekintéssel jár el, figyelembe véve a speciális fióktípusokkal együtt járó kockázatokat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia és dokumentálnia kell az EIR-ben engedélyezett és kifejezetten tiltott fióktípusokat, mint például az egyéni, megosztott, csoport, rendszer, vendég, névtelen, vészhelyzeti, fejlesztői, ideiglenes és szolgáltatási fiókok.\n2. A szervezetnek gondoskodnia kell a fiókkezeléssel kapcsolatos felelősi feladatok ellátásáról.\n3. A szervezetnek ki kell alakítania a csoport- és szerepkör tagsági feltételeket és kritériumokat, figyelembe véve a biztonsági szempontokat.\n4. A szervezetnek meg kell határoznia az EIR-ben engedélyezett felhasználókat, a csoport- és szerepkör tagságokat, a hozzáférési jogosultságokat és a felhasználói fiókokhoz tartozó szükséges jellemzőket minden egyes felhasználói fiókra.\n5. A szervezetnek jóváhagyást kell kérnie a meghatározott szerepköröket betöltő személyektől a felhasználói fiókok létrehozására vonatkozó kérelmek esetén.\n6. A szervezetnek a fiókokat a meghatározott irányelvek, eljárások, előfeltételek és kritériumok alapján kell kezelnie (létrehozás, engedélyezés, módosítás, letiltás és törlés).\n7. A szervezetnek nyomon kell követnie a fiókok használatát, és naplóznia kell az azokkal végzett tevékenységeket.\n8. A szervezetnek értesítenie kell a fiókkezelőket és a meghatározott személyeket vagy szerepköröket a következő esetekben: amikor a fiókok már nem szükségesek, amikor a felhasználók jogviszonya megszűnik, vagy amikor a rendszerhasználat vagy az egyén számára szükséges ismeretek megváltoznak.\n9. A szervezetnek az EIR-hez való hozzáférést az érvényes hozzáférési engedély, a tervezett rendszerhasználat és egyéb, a szervezet által meghatározott jellemzők alapján kell engedélyeznie.\n10. A szervezetnek ellenőriznie kell a felhasználói fiókokat a fiókkezelési követelmények betartása szempontjából, a meghatározott gyakorisággal.\n11. A szervezetnek létre kell hoznia és végre kell hajtania egy folyamatot a megosztott vagy csoport felhasználói fiókok hitelesítési adatainak megváltoztatására az egyének csoportból történő eltávolításának esetére.\n12. A szervezetnek össze kell hangolnia a fiókkezelési folyamatokat a felhasználók jogviszonyának megszüntetési folyamataival.",
          "iso_27001_ref": "A.5.16; A.5.18; A.8.2",
          "nist_sp_800_53_rev5_ref": "AC-2",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "8.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "Az azonosítási és hitelesítési szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a azonosítási és hitelesítési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy az azonosítási és hitelesítési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell az azonosítási és hitelesítési szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális azonosítási és hitelesítési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "IA-1",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "8.2",
          "control_title": "Azonosítás és hitelesítés",
          "explanation": "A szervezeti felhasználók közé tartoznak a munkavállalók vagy azok a személyek, akiket az érintett szervezet munkavállalókkal egyenértékű státuszúnak tekint. A felhasználók egyedi azonosítása és hitelesítése minden hozzáférésre vonatkozik, kivéve azokat, amelyeket az \"azonosítás vagy hitelesítés nélkül engedélyezett tevékenységek\" követelmény kapcsán azonosítanak. Az érintett szervezet megkövetelheti az egyének egyedi azonosítását a csoportfiókokban az egyéni tevékenység részletes elszámoltathatósága érdekében.\nA szervezet jelszavakat, fizikai hitelesítőket vagy biometriai adatokat használ a felhasználói azonosság hitelesítésére, vagy többtényezős hitelesítés esetén ezeknek valamilyen kombinációját. A szervezet EIR-jeihez való hozzáférés helyi hozzáférésnek vagy hálózati hozzáférésnek minősül. A helyi hozzáférés bármilyen hozzáférés az érintett szervezet EIR-jeihez a felhasználók vagy a felhasználók nevében cselekvő folyamatok által, ahol a hozzáférést közvetlen kapcsolatokon keresztül, hálózatok használata nélkül lehet elérni. A hálózati hozzáférés a szervezet EIR-jeihez való hozzáférés a felhasználók (vagy a felhasználók nevében eljáró folyamatok) által, ahol a hozzáférés hálózati kapcsolatokon keresztül lehetséges (azaz nem lokális). A távoli hozzáférés egy olyan hálózati hozzáférés típus, amely külső hálózatokon keresztüli kommunikációt foglal magában. A belső hálózatok magukban foglalhatják a helyi hálózatokat (LAN) és a széles körű hálózatokat (WAN).\nA titkosított virtuális magánhálózatok (VPN) használata a hálózati kapcsolatokhoz a szervezet által ellenőrzött végpontok és nem szervezet által ellenőrzött végpontok között kezelhető belső hálózatokként a hálózaton áthaladó információk bizalmasságának és sértetlenségének védelme szempontjából.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a felhasználói körét, beleértve az munkavállalókat és azokat a személyeket, akiket a szervezet alkalmazottakkal egyenértékű státuszúnak tekint.\n2. A szervezetnek egyedileg kell azonosítania és hitelesítenie a felhasználókat, kivéve a meghatározott eseteket.\n3. A szervezetnek jelszavakat, fizikai hitelesítőket vagy biometrikus adatokat kell alkalmaznia a felhasználói azonosságok hitelesítésére, vagy többtényezős hitelesítés esetén ezek kombinációját.\n4. A szervezetnek meg kell határoznia az EIR-hez való hozzáférés típusát (helyi, helyi hálózati, belső stb.).\n5. A szervezetnek naplóznia kell, hogy nyomon követhesse a felhasználók által végzett tevékenységeket és azokat egyedi azonosítóhoz kapcsolhassa.\n6. A szervezetnek meg kell határoznia azonosítási és hitelesítési követelményeket a nem szervezeti felhasználók számára, amelyeket az \"Azonosítás és hitelesítés (szervezeten kívüli felhasználók)\" követelménypontban került meghatározásra.",
          "iso_27001_ref": "A.5.16",
          "nist_sp_800_53_rev5_ref": "IA-2",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.2",
        "8.1",
        "8.2"
      ],
      "cost_band": "B0",
      "days_to_target": -9,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.3",
          "control_title": "Azonosítás és hitelesítés (felhasználók) – Privilegizált fiókok többtényezős hitelesítése",
          "explanation": "A többtényezős hitelesítés megköveteli, hogy két vagy több különböző tényező kerüljön használatra a hitelesítés elvégzéséhez. A hitelesítési tényezőket a következőképpen határozzuk meg: valami, amit a személy tud (pl. jelszó), valami, amit birtokol (pl. fizikai hitelesítő, mint a kriptográfiai privát kulcs), vagy a személy valamilyen tulajdonsága (pl. biometrikus adat). A fizikai hitelesítőket tartalmazó többtényezős hitelesítési megoldások közé tartoznak a hardver hitelesítők, amelyek időalapú vagy hívás-válasz alapú megoldásokat biztosítanak. A szervezet a felhasználók hitelesítését az EIR szintjén (azaz bejelentkezéskor) végezhetik el, és saját belátásuk szerint alkalmazhatnak hitelesítési mechanizmusokat alkalmazások szintjén is a megnövelt biztonság érdekében. Függetlenül a hozzáférés típusától (azaz helyi, hálózati, távoli), a privilegizált fiókokat a kockázatnak megfelelő többtényezős hitelesítési megoldásokkal hitelesítik. A szervezet további biztonsági intézkedéseket is hozzáadhat, például további vagy szigorúbb hitelesítési mechanizmusokat bizonyos hozzáférési típusokhoz. A szervezet dokumentálja hitelesítési folyamatait és eljárásait, annak érdekében, hogy minden bejelentkezés nyomon követhető legyen.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia, mely fiókokat tekinti privilegizáltnak. Ezek általában olyan fiókok, amelyeknek széleskörű jogosultságuk van az EIR-hez és/vagy érzékeny adatokhoz.\n2. A szervezetnek ki kell választania egy többtényezős hitelesítési megoldást.\n3. A szervezetnek be kell vezetnie a kiválasztott többtényezős hitelesítési megoldást az EIR-ben. Ez magában foglalja a szoftver telepítését, a hardver beállítását, és a felhasználók képzését.\n4. A szervezetnek be kell állítania a többtényezős hitelesítést a privilegizált fiókokhoz.\n5. A szervezetnek dokumentálnia kell a bevezetett megoldást, a hitelesítési folyamatot és eljárást.\n6. A szervezet EIR-jének naplóznia kell a bejelentkezéseket. Ez magában foglalja a sikeres és sikertelen hitelesítési kísérletek rögzítését.\n7. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a többtényezős hitelesítési szabályzatát és gyakorlatát, hogy biztosítsa a kiberbiztonsági követelményeknek való megfelelést.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IA-2(1)",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.3"
      ],
      "cost_band": "B0",
      "days_to_target": 6,
      "deadline_bucket": "DUE_7_DAYS",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "7.2",
          "control_title": "Üzletmenet-folytonossági terv",
          "explanation": "Az üzletmenet-folytonossági tervezés egy átfogó koncepció része, a folyamatos működés elérésére, a szervezeti és üzleti célok érdekében. Az üzletmenet-folytonossági tervezés a rendszer-visszaállítással és az alternatív folyamatok életbe léptetésével foglalkozik, amennyiben a rendszer üzemszerű működése nem biztosított. Ez az EIR tervezésének és fejlesztési életciklusának is szerves részét kell képezze. A üzletmenet-folytonossági tervek leírják az EIR-ek helyreállíthatóságának szintjét, ugyanis nem minden rendszernek kell teljes mértékben helyreállnia a működés folytonosságához. A rendszer-helyreállítási céloknak tükrözni szükséges az alkalmazandó törvényeket, végrehajtási rendeleteket, egyéb rendeleteket, irányelveket, szabványokat, ajánlásokat, a szervezeti kockázattűrés mértékét és a rendszer esetleges kiesésének hatását. Az üzletmenet-folytonossági tervben szereplő intézkedések magukban foglalják a rendszer elavulását, leállítását, a manuális üzemmódba való visszaállást, az alternatív információáramlást és a rendszerek támadása esetére fenntartott üzemmódokban való működést. A vészhelyzeti tervezés és a biztonsági események kezelési tevékenységeinek összehangolásával a szervezetek biztosítják, hogy a szükséges tervezési tevékenységek elvégzésre kerülnek és biztonsági esemény esetén végrehajtásra kerüljenek. Az üzletmenet-folytonossági tervezés során javasolt olyan nemzetközi szabványok szerint felépíteni az érintett szervezet folyamatait, mint pl. az ISO 22301.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Az üzletmenet-folytonossági terv összhangban kell, hogy legyen a szervezet kockázatmenedzsment stratégiájával.\n2. A terv készítése során fel kell becsülni a rendszer helyreállítási idejét és az adatvesztés toleranciáját, szem előtt tartva a rendszer kiesésének hatását, figyelembe véve a jogi és szabályozási követelményeket, szabványokat és ajánlásokat.\n3. Meg kell állapítani azt a minimális szolgáltatási szintet, amely a működés folytonosságának fenntartása érdekében szükséges, és fel kell készülni az esetleges redundáns rendszerek és biztonsági mentések használatára.\n4. Fel kell készülni a rendszerek manuális működésére, az alternatív információáramlásra és a rendszer támadása esetén alkalmazandó vészüzemre.\n5. Meg kell határozni, hogy milyen szinten kell helyreállni a rendszereknek a működés folytonossága érdekében.\n6. Rendszeres gyakorlatokat és teszteket kell végezni, hogy biztosítsák a terv hatékonyságát és a személyzet felkészültségét.\n7. Felülvizsgálatokat és aktualizálásokat kell végrehajtani a terven, hogy biztosítsák annak relevanciáját és hatékony működését, figyelembe véve a változó üzleti, technológiai és fenyegetési környezetet.",
          "iso_27001_ref": "7.5.1; 7.5.2; 7.5.3; A.5.2; A.5.29; A.8.14",
          "nist_sp_800_53_rev5_ref": "CP-2",
          "requirement_family": "7",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "7.35",
          "control_title": "Az elektronikus információs rendszer mentései",
          "explanation": "Az EIR információk magukban foglalják az EIR állapotinformációkat, az operációs rendszert, a köztes szoftvert, az alkalmazásszoftvert és a licenceket. A felhasználói szintű információk olyan információkat is tartalmaznak, amelyek nem EIR információk. Az EIR biztonsági mentések sértetlenségének védelmére alkalmazott mechanizmusok közé tartoznak a digitális aláírások és a kriptográfiai hash-ek. Az EIR biztonsági mentések tükrözik a vészhelyzeti tervekben foglalt követelményeket, valamint az érintett szervezet egyéb követelményeit az információk biztonsági mentésével kapcsolatban.\nAz EIR dokumentációja magában foglalja a biztonsági információkat is. Az érintett szervezet gondoskodik a mentett információk bizalmasságának, sértetlenségének és rendelkezésre állásának védelméről mind az elsődleges, mind a biztonsági tárolási helyszínen. A naplókban rögzítik az EIR-ben tárolt információk biztonsági mentésének gyakoriságát, összhangban a helyreállítási időre és a helyreállítási pontokra vonatkozó célokkal.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meghatározott gyakorisággal mentést kell készítenie az EIR-ben tárolt felhasználói szintű információkról. Ezek nem az EIR információk, szervezetenként eltérhet a felhasználóiként meghatározott információ.\n2. Az szervezetnek meghatározott gyakorisággal mentést kell készítenie az EIR-ben tárolt rendszerszintű információkról. Ez magában foglalja a rendszer állapotára vonatkozó információkat, az operációs rendszer szoftvert, a köztes szoftvert, az alkalmazás szoftvert és a licenceket.\n3. A szervezetnek meghatározott gyakorisággal mentést kell készítenie az EIR dokumentációjáról, beleértve a biztonságra vonatkozó információkat is.\n4. A szervezetnek meg kell védenie a mentett információk bizalmasságát, sértetlenségét és rendelkezésre állását mind az elsődleges, mind a biztonsági tárolási helyszínen. A mentések sértetlenségének védelmére használt mechanizmusok közé tartoznak a digitális aláírások és a kriptográfiai hash-ek.\n5. A szervezetnek biztosítania kell, hogy az EIR mentések tükrözzék a vészhelyzeti tervekben foglalt követelményeket, valamint az információk mentésére vonatkozó egyéb szervezeti követelményeket.\n6. A szervezetnek tisztában kell lennie azzal, hogy vonatkozó törvények, végrehajtási rendeletek, irányelvek, szabályok, szabályzatok, szabványok és iránymutatások vonatkozhatnak rá, amelyek követelményeket támasztanak bizonyos információkkal (pl. személyes adatok, különleges személyes adatok) kapcsolatban. A szervezetnek be kell vonnia a szervezet vezető adatvédelmi tisztviselőjét és jogi tanácsadóját ezen követelmények helyes teljesítése érdekében.",
          "iso_27001_ref": "A.5.29; A.5.33; A.8.13",
          "nist_sp_800_53_rev5_ref": "CP-9",
          "requirement_family": "7",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "7.43",
          "control_title": "Az elektronikus információs rendszer helyreállítása és újraindítása",
          "explanation": "A helyreállítás a vészhelyzeti terv tevékenységeinek végrehajtását jelenti, amelyek célja az érintett szervezet alapfeladatainak és alapfunkcióinak helyreállítása. Az újraindítás a helyreállítást követően történik, és magában foglalja az EIR-ek teljes, üzembiztos állapotba való visszaállításának tevékenységeit. A helyreállítási és újraindítási műveletek tükrözik a szervezeti alapfeladatokat és az üzleti (ügymeneti) célkitűzéseket; a helyreállítási pontokat, a helyreállítási időt és a újraindítási célkitűzéseketet; valamint az érintett szervezet mérőszámait, amelyek összhangban vannak a vészhelyzeti terv követelményeivel. Az újraindítás magában foglalja azoknak az ideiglenes EIR képességeknek a kikapcsolását, amelyekre a helyreállítási műveletek során szükség lehetett. Az újraindítás továbbá magában foglalja a teljesen helyreállított EIR képességek értékelését, a folyamatos monitorozási tevékenységek újraindítását, az EIR újraengedélyezését, és a tevékenységeket, amelyek az EIR-t és az érintett szervezetet felkészítik a jövőbeli összeomlásokra, szabályok megsértésére, kompromittálódásokra vagy hibákra. A helyreállítási és újraindítási képességek magukban foglalhatják az automatizált mechanizmusokat és a manuális eljárásokat. Az érintett szervezetek a vészhelyzeti tervezés részeként határozzák meg a helyreállítási időt és a helyreállítási pont célkitűzéseket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet a vészhelyzeti tervezés részeként meghatározza a helyreállítási időt és a helyreállítási pont célokat.\n2. A szervezetnek a helyreállítás során végre kell hajtania a vészhelyzeti tervnek foglaltakat az érintett szervezet alapfeladatának és alapfunkcióinak helyreállítása érdekében.\n3. A helyreállítást követően az újraindítás során meghatározott tevékenységeket hajtanak végre az EIR teljes üzembiztos állapotba való visszaállításához.\n4. A helyreállítási és újraindítási műveletek tükrözik az alapfeladatokat és üzleti (ügymeneti) célkitűzéseket, úgy, mint helyreállítási pont és idő, valamint az újraindítási célok, és a szervezet által meghatározott mérőszámok, amelyek összhangban vannak a vészhelyzeti terv követelményeivel.\n5. A helyreállítási folyamat során dokumentálni kell az összes tevékenységet, hogy nyomon követhető legyen a folyamat és a jövőbeni biztonsági események megelőzése érdekében tanulni lehessen belőle.",
          "iso_27001_ref": "A.5.29",
          "nist_sp_800_53_rev5_ref": "CP-10",
          "requirement_family": "7",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "7.2",
        "7.35",
        "7.43"
      ],
      "cost_band": "B0",
      "days_to_target": -24,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "4.2",
          "control_title": "Naplózható események",
          "explanation": "Azok az eseménytípusok igényelnek naplózást az EIR-ben, amelyek jelentősek és relevánsak az EIR biztonsága szempontjából. Az események naplózása támogatja a specifikus monitorozási és naplózási igényeket is. A naplózandó eseménytípusok közé tartoznak pl. a jelszóváltozások, a sikeres vagy sikertelen bejelentkezési kísérletek, a biztonsági funkciókhoz kapcsolódó sikertelen hozzáférések, a privilegizált jogosultságok használata, a hitelesítő adatok használata, az adatműveletek változásai, illetve a bizalmas adatokhoz kapcsolódó lekérdezések.\nAz események naplózásának követelményei, beleértve a specifikus eseménytípusok naplózásának szükségességét, számos más védelmi intézkedés kapcsán megjelennek. A naplóbejegyzések különböző szinteken generálhatók, beleértve a csomagszintet is, ahogy az információ áthalad a hálózaton. Az eseménynaplózás megfelelő szintjének kiválasztása fontos része a monitorozási és naplózási képességnek, és segíthet azonosítani a problémák gyökérokait. Az egyes naplózandó események a szervezet igényei alapján idővel változhatnak. Például a szervezet meghatározza, hogy az EIR-nek képesnek kell lennie naplózni minden sikeres és sikertelen fájlhozzáférést, azonban ezt a funkciót nem kapcsolja be a szervezet, mivel negatívan hatna az EIR teljesítményére. Ezért fontos, hogy a szervezet időről-időre felülvizsgálja és szükség esetén frissítse a naplózandó eseményeket annak érdekében, hogy azok továbbra is relevánsak legyenek és támogassák a szervezeti igények megvalósulását. A naplózandó és naplózható eseményekkel kapcsolatos biztonsági követelmények a \"Fiókkezelés – Automatikus naplózási műveletek\", a \"Hozzáférési szabályok érvényesítése – Hozzáférés-ellenőrző mechanizmusok ellenőrzött felülbírálata\", a \"Legkisebb jogosultság elve – Privilegizált funkciók használatának naplózása\", a \"Távoli hozzáférés – Felügyelet és irányítás\", a \"A konfigurációváltozások felügyelete (változáskezelés)\", a \"A változtatásokra vonatkozó hozzáférés korlátozások – Automatizált hozzáférés-érvényesítés és naplóbejegyzések\", az \"Eszközök azonosítása és hitelesítése – Dinamikus címkiosztás\", a \"Távoli karbantartás – Naplózás és felülvizsgálat\", az \"Adathordozók tárolása – Automatizált korlátozott hozzáférés\", a \"A fizikai belépés ellenőrzése\", a \"A határok védelme – Hálózati privilegizált hozzáférések\", a \"Kártékony kódok elleni védelem – Jogosulatlan parancsok észlelése\", a \"Az EIR monitorozása – Engedély nélküli hálózati szolgáltatások\", a \"Szoftver- és információsértetlenség – Naplózás és riasztás\", a \"Bemeneti információ ellenőrzés – Manuális felülírási képesség\" kontrolloknál is kifejtésre kerültek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a naplózható és naplózandó eseményeket, és fel kell készítenie az EIR-t erre a feladatra.\n2. A szervezetnek egyeztetnie kell a naplózási elvárásokat a naplózási információt igénylő szervezeti egységekkel, hogy minden szükséges információ rendelkezésre álljon a naplókban.\n3. A szervezetnek meg kell határoznia az EIR-en belül naplózandó eseménytípusokat, és az azokhoz kapcsolódó gyakoriságot vagy az azt szükségessé tevő eseményeket.\n4. A szervezetnek úgy kell meghatároznia a naplózandó eseményeket, hogy azok ne akadályozzák az EIR szervezeti célok eléréséhez szükséges teljesítményét.\n5. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia és szükség esetén frissítenie kell a naplózásra kiválasztott eseménytípusokat.",
          "iso_27001_ref": "A.8.15",
          "nist_sp_800_53_rev5_ref": "AU-2",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "4.3",
          "control_title": "Naplóbejegyzések tartalma",
          "explanation": "A naplózás funkciót támogató tartalom magában foglalhatja az esemény leírását, az időbélyegeket, forrás és cél címeket, felhasználói vagy végreható folyamat azonosítókat, a sikeres vagy sikertelen végrehajtásra vonatkozó információkat, és az érintett fájlneveket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy a naplóbejegyzések tartalmazzák az események leírását. Ez lehetővé teszi, hogy megállapíthassák, milyen típusú esemény történt.\n2. A naplóbejegyzéseknek időbélyegeket is tartalmazniuk kell, amelyek segítségével meghatározható, mikor történt az esemény.\n3. A szervezetnek biztosítania kell, hogy a naplóbejegyzések tartalmazzák a forrás- és célobjektumok címét. Ez lehetővé teszi, hogy megállapíthassák, az esemény forrását és célját.\n4. A naplóbejegyzéseknek tartalmazniuk kell a felhasználói vagy a végrehajtói folyamat azonosítóját. Ez lehetővé teszi, annak a megállapítását, hogy az eseményt mely felhasználó vagy mely feldolgozó folyamat hajtotta végre.\n5. A szervezetnek biztosítania kell, hogy a naplóbejegyzések tartalmazzák az események kimenetelét.",
          "iso_27001_ref": "A.5.28; A.8.15",
          "nist_sp_800_53_rev5_ref": "AU-3",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "4.5",
          "control_title": "Naplózás tárkapacitása",
          "explanation": "Az érintett szervezet figyelembe veszi a naplózási típusokat és a naplófeldolgozási követelményeket, amikor a naplók számára fenntartott tárhelykapacitást meghatározza. Elegendő tárkapacitás biztosítása a naplóbejegyzések számára csökkenti annak valószínűségét, hogy a nem megfelelő kapacitás a naplózási képesség elvesztését vagy csökkenését eredményezheti.\n\nA szervezetnek biztosítania kell, hogy az EIR rendelkezzen elegendő tárhellyel a naplózáshoz, figyelembe véve az elvárt naplózási funkciókat és a meghatározott megőrzési követelményeket is. Ez azt jelenti, hogy az EIR-nek képesnek kell lennie arra, hogy kezelje és tárolja az összes naplóbejegyzést, amelyeket a szervezet naplózási szabályzata előír, és teljesíti a szabályozói előírásokat is.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek elegendő tárkapacitást kell biztosítania a naplózásra, figyelembe véve a meghatározott naplózási típusokat, illetve funkciókat, valamint a meghatározott megőrzési- és naplófeldolgozási követelményeket.\n2. A szervezetnek rendszeresen ellenőriznie kell a naplózásra fenntartott tárkapacitását, annak érdekében, hogy elősegítse a naplózás folyamatos működését. Az ellenőrzés során a szervezetnek meg kell bizonyosodnia arról, hogy a naplóbejegyzések által elfoglalt tárhely nem foglalja el a rendelkezésre álló tárhely adott százalékát.\n3. A szervezetnek meg kell terveznie és végre kell hajtania egy naplókezelési stratégiát, amely magában foglalja a naplófájlok rendszeres archiválását és törlését, így biztosítva a tárkapacitás optimális kihasználását, ill. a megőrzési követelményeket is.",
          "iso_27001_ref": "A.8.6",
          "nist_sp_800_53_rev5_ref": "AU-4",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "4.7",
          "control_title": "Naplózási hiba kezelése",
          "explanation": "A naplózási hibák közé tartoznak a szoftver- és hardverhibák, a naplóbejegyzések rögzítési mechanizmusainak hibái, valamint a naplóbejegyzések tárolókapacitásának a kritikus küszöbértéket meghaladó kihasználása. Az érintett szervezet által meghatározott intézkedések közé tartozhat a legrégebbi naplóbejegyzések felülírása, az EIR leállítása és a naplóbejegyzések generálásának leállítása. A szervezet további intézkedéseket is meghatározhat a naplózási folyamat hibái esetén, a hiba típusa, helye, súlyossága vagy ezek kombinációja alapján.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell alakítania egy naplózási hibakezelő megoldást, amely képes azonosítani a naplózási tevékenységhez kapcsolódó szoftver- és hardverhibákat, vagy a naplóbejegyzések rögzítési mechanizmusának hibáit, valamint a napló tárolókapacitásra vonatkozó kritikus kihasználási szint elérését.\n2. A szervezetnek meg kell határoznia a teendőket a naplózási folyamat hibái esetén. Ezek az intézkedések tartalmazhatják a legrégebbi naplóbejegyzések felülírását, az EIR leállítását, vagy a naplóbejegyzések generálásának leállítását.\n3. A szervezetnek további intézkedések meghozatalára is szükség lehet a naplózási folyamat hibái esetén, figyelembe véve a hiba típusát, helyét, súlyosságát vagy ezek kombinációját.\n4. A szervezetnek nyilvántartást kell vezetnie az összes riasztásról, hogy nyomon követhesse a hibaeseményeket és a válaszintézkedéseket. A nyilvántartás segíthet az érintett szervezetnek felismerni a mintázatokat, értékelni a riasztási rendszer hatékonyságát és továbbfejleszteni a biztonsági követelményeket.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "AU-5",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "4.13",
          "control_title": "Naplóbejegyzések felülvizsgálata, elemzése és jelentéstétel",
          "explanation": "A naplóbejegyzések felülvizsgálata, elemzése és jelentése magában foglalja az érintett szervezet által végzett információbiztonsági naplózást, beleértve a fiókok használatának, távoli hozzáférésnek, vezeték nélküli kapcsolatnak, mobil eszköz csatlakozásnak, konfigurációs beállításoknak, a rendszerkomponens leltárának, karbantartó eszközök használatának és nem helyi karbantartásnak, fizikai hozzáférésnek, hőmérsékletnek és páratartalomnak, berendezések szállításának és eltávolításának, az EIR interfészeinél történő kommunikációnak, valamint a mobil kód vagy az internetes hanghívás (VoIP) használatának monitorozásából eredő naplózást. Az eredményeket jelenthetik a  szervezet olyan egységeinek, mint a biztonsági eseménykezelő csapat, a helpdesk, valamint a biztonsági szakterület. Ha a szervezetnek megtiltják a naplóbejegyzések felülvizsgálatát és elemzését, vagy képtelen ilyen tevékenységeket végrehajtani, a felülvizsgálatot vagy elemzést más, ilyen felhatalmazással rendelkező szervezet végezheti el. A naplóbejegyzések felülvizsgálatának, elemzésének és jelentésének gyakoriságát, hatókörét és/vagy mélységét a szervezet igényei szerint lehet módosítani az újonnan beérkezett információk alapján.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek először kell határoznia a naplóbejegyzések felülvizsgálatának és elemzésének gyakoriságát. Ez magában foglalja a  szervezet által végzett információbiztonsági naplózást, beleértve a fiókok használatának, távoli hozzáférésnek, vezeték nélküli kapcsolatnak, mobil eszköz csatlakozásnak, konfigurációs beállításoknak, a rendszerkomponens leltárának, karbantartó eszközök használatának és nem helyi karbantartásnak, fizikai hozzáférésnek, hőmérsékletnek és páratartalomnak, berendezések szállításának és eltávolításának, az EIR interfészeinél történő kommunikációnak, valamint a mobil kód vagy az internetes hanghívás (VoIP) használatának monitorozásából eredő naplózást.\n2. A szervezetnek jelentenie kell a naplóbejegyzések felülvizsgálatának és elemzésének eredményeit a szervezet által meghatározott személyeknek vagy szerepköröknek. Ez magában foglalhatja a biztonsági eseménykezelő csapatot, a helpdesket, valamint a biztonsági szakterületet.\n3. Ha a szervezet nem tudja elvégezni a naplóbejegyzések felülvizsgálatát és elemzését,akkor a felülvizsgálatot vagy elemzést más, ilyen felhatalmazással rendelkező szervezettel végeztetheti el.\n4. A szervezetnek módosítania kell a naplóbejegyzések felülvizsgálatának, elemzésének és jelentésének gyakoriságát, hatókörét és/vagy mélységét, ha olyan információk birtokába jut, amelyek ezt indokolttá teszik.\n5. A szervezetnek meg kell határoznia a naplóelemzés eredményei alapján szükséges cselekvéseket, és végre kell hajtania ezeket annak érdekében, hogy kezelje az azonosított kiberbiztonsági kockázatokat.\n6. A szervezetnek dokumentálnia kell a naplófelülvizsgálati és elemzési folyamatot, beleértve a gyűjtött adatokat, az elemzési eredményeket és a végrehajtott cselekvéseket, hogy bizonyítékot szolgáltasson a kiberbiztonsági követelményeknek való megfelelésről.",
          "iso_27001_ref": "A.5.25; A.6.8; A.8.15",
          "nist_sp_800_53_rev5_ref": "AU-6",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "5.15",
          "control_title": "Folyamatos felügyelet",
          "explanation": "A rendszerszintű folyamatos felügyelet lehetővé teszi az EIR biztonsági helyzetének folyamatos ismeretét. A folyamatos felügyelet támogatja az érintett szervezet kockázatkezelési döntéseit. A folyamatos és folytonos kifejezések arra utalnak, hogy a szervezet a szükséges gyakorisággal értékeli és monitorozza a védelmi intézkedéseket és kockázatokat, így támogatva a kockázatalapú döntéseket. Különböző típusú védelmi intézkedések különböző felügyeleti gyakoriságot igényelhetnek. A folyamatos felügyelet eredményeként a szervezet kockázatkezelési intézkedéseket hajt végre. Amikor több olyan, funkció alapján csoportosított védelmi intézkedés hatékonyságát felügyelik, akkor a problémás védelmi intézkedések esetén, a problémát kiváltó okok elemzésre is szükség lehet. A folyamatos felügyelet lehetővé teszi a szervezet számára, hogy az EIR-ek és a közös védelmi intézkedések engedélyezését egy rendkívül dinamikus működési környezetben is fenntartsák, ahol változnak a működési célok és üzleti igények, fenyegetések, sérülékenységek és technológiák. A biztonsági információkhoz történő folyamatos hozzáférés  - különféle jelentések és irányítópultok (dashboard) által - lehetővé teszi a felelős, szervezethez köthető személyek számára, hogy hatékony és megfelelően időzített kockázatkezelési döntéseket hozzanak, beleértve a folyamatos engedélyezési döntéseket is.\nAz automatizálás támogatja a hardver-, szoftver- és firmware-leltárak, engedélyezési csomagok és egyéb rendszerinformációk gyakoribb frissítését. A hatékonyságot tovább növeli, ha a folyamatos felügyelet kimenetei úgy vannak kialakítva, hogy konkrét, mérhető, megvalósítható, releváns és időszerű információkat szolgáltassanak. A folyamatos felügyeleti tevékenységet a rendszerek biztonsági kategóriáinak megfelelően kell méretezni.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia egy rendszerszintű folyamatos felügyeleti stratégiát, amelyet meg is kell valósítania a gyakorlatban. A kialakítás során a szervezetnek figyelnie kell arra, hogy a rendszerszintű folyamatos felügyeleti stratégia összhangban legyen szervezeti szintű stratégiával.\n2. A szervezetnek meg kell határoznia az rendszerszintű metrikákat, amelyek segítségével mérhető a védelmi intézkedések hatékonysága.\n3. A szervezetnek rendszeres felügyeletet kell biztosítania a védelmi intézkedések hatékonyságának értékelésére.\n4. A szervezetnek folyamatos értékelést kell végeznie az alkalmazott védelmi intézkedésekről, és nyomon kell követnie az EIR és az érintett szervezet által meghatározott mutatókat.\n5.A szervezetnek össze kell gyűjtenie és fel kell dolgoznia a védelmi intézkedésekről gyűjtött információkat, majd összegeznie kell és ki kell értékelnie azokat.\n6. A szervezetnek létre kell hoznia válaszintézkedéseket a védelmi intézkedések értékelése és elemzése alapján.\n7. A szervezetnek rendszeres időközönként jelentést kell készíteni az EIR biztonsági állapotáról a fellelős személyek számára.\n8. A szervezetnek automatizálnia kell a folyamatokat, hogy gyakrabban frissíthessen a hardver, szoftver és firmware leltárakon, engedélyezési csomagokon és egyéb rendszerinformációkon.\n9. A szervezetnek a folyamatos felügyeleti tevékenységeket skáláznia kell az EIR biztonsági kategóriái szerint.",
          "iso_27001_ref": "9.1; 9.3.2; 9.3.3; A.5.36",
          "nist_sp_800_53_rev5_ref": "CA-7",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "4.2",
        "4.3",
        "4.5",
        "4.7",
        "4.13",
        "5.15"
      ],
      "cost_band": "B0",
      "days_to_target": 21,
      "deadline_bucket": "DUE_30_DAYS",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "6.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A konfigurációkezelési szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a konfigurációkezelési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a konfigurációkezelési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a konfigurációkezelési szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális konfigurációkezelési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37; A.8.9",
          "nist_sp_800_53_rev5_ref": "CM-1",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "6.2",
          "control_title": "Alapkonfiguráció",
          "explanation": "Az EIR-ek és a rendszerelemek alapkonfigurációi a rendszerek csatlakoztathatósági, üzemeltetési és kommunikációs szempontjait foglalják magukban. Az alapkonfigurációk a rendszerek vagy a rendszereken belüli konfigurációs elemek dokumentált, hivatalosan felülvizsgált és elfogadott specifikációi. Az alapkonfigurációk szolgálnak a rendszerek jövőbeni felépítésének, kiadásának vagy módosításának alapjául, és tartalmazzák a biztonsági követelmények végrehajtását, az üzemeltetési eljárásokat, a rendszerelemekre vonatkozó információkat, a hálózati topológiát és az összetevők logikai elhelyezését a rendszerarchitektúrában. Az alapkonfigurációk fenntartása új alapkonfigurációk létrehozását teszi szükségessé, ahogy a szervezeti rendszerek idővel változnak. A rendszerek alapkonfigurációi az aktuális szervezeti architektúrát tükrözik.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell fejlesztenie az EIR alapkonfigurációját, amely magában foglalja az EIR és a rendszerelemeinek csatlakoztathatósági, üzemeltetési és kommunikációs aspektusait.\n2. A szervezetnek dokumentálnia kell az EIR alapkonfigurációját, melyet a szervezetnek felül kell vizsgálnia és el kell fogadnia. Ez a dokumentáció tartalmazza a biztonsági elvárások implementációját, az üzemeltetési eljárásokat, a rendszerelekre vonatkozó információkat, a hálózati topológiát és az az összetevők logikai elhelyezését a rendszerarchitektúrában.\n3. A szervezetnek karban kell tartania az EIR alapkonfigurációját, ami azt jelenti, hogy a szervezetnek idővel új alapkonfigurációt kell létrehoznia, ahogy a szervezeti rendszerek változnak.\n4. A szervezetnek meghatározott időközönként felül kell vizsgálnia és frissítenie kell az EIR és a rendszerelemek alapkonfigurációját.\n5. Az EIR vagy az EIR rendszerelemeinek telepítésekor vagy frissítésekor a szervezetnek felül kell vizsgálnia és frissítenie kell az EIR alapkonfigurációját.\n6. A szervezetnek nyilvántartást kell vezetnie az EIR alapkonfigurációjának felülvizsgálatáról és frissítéséről.",
          "iso_27001_ref": "A.8.9",
          "nist_sp_800_53_rev5_ref": "CM-2",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "10.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A  karbantartási szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a karbantartási szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a karbantartási szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a karbantartási szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális karbantartási szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.37",
          "nist_sp_800_53_rev5_ref": "MA-1",
          "requirement_family": "10",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "18.2",
          "control_title": "Hibajavítás",
          "explanation": "Az érintett szervezet azonosítja azokat az EIR-eket, amelyeket bejelentett szoftversérülékenységek érintenek, majd ezekről jelentést készít és a kijelölt, IT biztonsági felelősséggel rendelkező szervezeti szereplőknek továbbítja. Biztonsági szempontból releváns szoftverfrissítések például a patch-ek, szervízcsomagok, az ún. \"hotfix-ek\", antivírus leírók alkalamazása. A szervezet kezeli azokat a hibákat is, amelyeket a biztonsági felmérések, folyamatos ellenőrzés, biztonsági eseménykezelés, rendszerhiba-kezelés során tárnak fel.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek azonosítania kell az EIR hibáit, beleértve a potenciális sebezhetőségeket, amelyek ezekből a hibákból adódhatnak, és jelentenie kell ezt az információt a szervezet kijelölt személyzetének, akiknek információbiztonsági és adatvédelmi felelősségei vannak.\n2. A biztonsági szempontból releváns frissítések telepítése előtt a szervezetnek tesztelnie kell a hibajavításokat a hatékonyság és a potenciális mellékhatások szempontjából. Ezek a frissítések tartalmazhatnak javítócsomagokat, szervízcsomagokat és rosszindulatú kód leírásokat.\n3. A szervezetnek a frissítések kiadását követő meghatározott időtartamon belül telepítenie kell a biztonsági szempontból releváns szoftver- és firmware-frissítéseket. Az szervezet által meghatározott időszakok változhatnak számos kockázati tényező alapján, beleértve az EIR biztonsági kategóriáját, a frissítés kritikusságát, a szervezet kockázattűrését, az EIR által támogatott alapfeladatokat vagy a fenyegetési környezetet.\n4. A szervezetnek be kell építenie a hibajavítást a konfigurációkezelési folyamatába, hogy a szükséges hibajavítási intézkedéseket nyomon követhesse és ellenőrizhesse.\n5. A szervezetnek meg kell határoznia a hibajavítási tevékenység típusát, figyelembe véve a változások típusát, amelyeket konfigurációkezelés alá kell vonni. Bizonyos esetekben a szervezet úgy dönthet, hogy a szoftver- vagy firmware-frissítések tesztelése nem szükséges vagy nem praktikus, például egyszerű rosszindulatú kód leírások frissítése esetén. A tesztelési döntések során a szervezet figyelembe veszi, hogy a biztonsági szempontból releváns szoftver- vagy firmware-frissítések hiteles forrásból származnak-e megfelelő digitális aláírásokkal.",
          "iso_27001_ref": "A.6.8; A.8.8; A.8.32",
          "nist_sp_800_53_rev5_ref": "SI-2",
          "requirement_family": "18",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "6.1",
        "6.2",
        "10.1",
        "18.2"
      ],
      "cost_band": "B0",
      "days_to_target": -9,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "12.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A fizikai védelmi szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a fizikai védelmi szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a fizikai védelmi szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a fizikai védelmi szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális fizikai védelmi szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "PE-1",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.2",
          "control_title": "A fizikai belépési engedélyek",
          "explanation": "A fizikai belépési engedélyek a munkavállalókra és a látogatókra egyaránt vonatkoznak. Azokat a személyeket, akiknek folyamatosan fennálló fizikai belépési engedélyük van, nem tekinthetők látogatóknak. A hitelesítő eszközök közé tartoznak a kitűzők, azonosító kártyák és intelligens kártyák. Az érintett szervezet a belépési jogosultságokat a vonatkozó jogszabályok, irányelvek, szabályok, szabványok és útmutatókkal összhangban határozza meg. Az érintett szervezetnek lehetnek olyan, bárki által megközelíthető területei, melyek esetében nincs szükség fizikai belépési engedélyre.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek össze kell állítania, jóvá kell hagynia és karban kell tartania egy listát azokról, akik jogosultak belépni az EIR-eknek helyt adó létesítményekbe.\n2. A szervezetnek belépési jogosultságot igazoló dokumentumokat, hitelesítő eszközöket kell kibocsátania a belépni szándékozó részére.\n3. A szervezetnek a szervezeti előírások szerinti gyakorisággal rendszeresen felül kell vizsgálnia a belépésre jogosult személyek listáját.\n4. A szervezetnek el kell távolítania a belépésre jogosult személyek listájáról azokat, akik már nem jogosultak a belépésre.\n5. A szervezetnek a belépési jogosultságokat a vonatkozó jogszabályokkal, irányelvekkel, szabályokkal, szabványokkal és útmutatókkal összhangban kell meghatároznia.\n6. A szervezetnek lehetnek olyan, bárki által megközelíthető (nyilvános zónába tartozó) területei, melyek esetében nincs szükség fizikai belépési engedélyre.",
          "iso_27001_ref": "A.7.2",
          "nist_sp_800_53_rev5_ref": "PE-2",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.6",
          "control_title": "A fizikai belépés ellenőrzése",
          "explanation": "A fizikai hozzáférésre vonatkozó elvárások a munkavállalókra és a látogatókra egyaránt alkalmazandóak. Az állandó fizikai hozzáférési jogosultsággal rendelkező személyek nem minősülnek látogatónak. A nyilvános területek fizikai hozzáférés felügyelete magában foglalhatja a fizikai hozzáférések rögzítését, az őröket vagy a fizikai hozzáférést korlátozó eszközöket és sorompókat, amelyek meggátolják a bejutást a nyilvánosan hozzáférhető területekről a nem nyilvános területekre. Az érintett szervezet meghatározza milyen őrző-védő személyzetre van szükség pl.: hivatásos biztonsági személyzet, rendszer felhasználói, adminisztratív személyzet. Fizikai hozzáférési eszközökhöz soroljuk a kulcsokat, a zárakat, a számkombinációkat, biometrikus és kártyaolvasókat. A fizikai hozzáférés felügyeletét elvégző rendszereknek meg kell felelniük a vonatkozó törvényeknek, végrehajtási rendeleteknek, irányelveknek, előírásoknak, szabványoknak és ajánlásoknak. A szervezetek rugalmasan dönthetnek arról, hogy milyen módon valósítják meg a fizikai hozzáférésekre vonatkozó bejegyzések kezelésére alkalmazott különböző naplóbejegyzéseket. A bejegyzések készülhetnek valamilyen eljárás során, automatikusan vagy ezek valamilyen kombinációjával. A fizikai hozzáférési pontok magukban foglalhatják a létesítmény ki- és belépési pontjait, a rendszerek belső hozzáférési pontjait, amelyek további hozzáférésellenőrzést igényelhetnek. A rendszer elemei elhelyezhetőek a szervezet által meghatározott publikus zónában, amennyiben a szervezet ellenőrzi a rendszerelemekhez történő hozzáférést.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek kizárólag az általa meghatározott be- és kilépési pontokon szabad biztosítania a belépésre jogosultak számára a fizikai belépést.\n2. A szervezetnek ellenőriznie kell az egyéni jogosultságokat a létesítménybe való belépés előtt. Ez magában foglalhatja a személyazonosság ellenőrzését, a belépési jogosultságok ellenőrzését, és a belépési kódok vagy kulcsok ellenőrzését.\n3. A szervezetnek ellenőriznie kell a létesítménybe való be- és kilépést a meghatározott fizikai beléptető rendszerek vagy eszközök, illetve őrök segítségével.\n4. A szervezetnek naplóznia kell a fizikai be- és kilépéseket. Ez magában foglalhatja a belépés és kilépés idejének, a belépő és kilépő személyek, illetve a belépési és kilépési események rögzítését.\n5. A szervezetnek ellenőrzés alatt kell tartania a létesítményen belüli, belépésre jogosultak által elérhető helyiségeket.\n6. A szervezetnek kísérnie kell a létesítménybe ad hoc belépésre jogosultakat, és figyelemmel kell követnie a tevékenységüket.\n7. A szervezetnek meg kell óvnia a kulcsokat, hozzáférési kódokat és az egyéb fizikai hozzáférést biztosító eszközöket. Ez magában foglalhatja a kulcsok, hozzáférési kódok és eszközök tárolását, ellenőrzését és karbantartását.\n8. A szervezetnek nyilvántartást kell vezetnie a fizikai belépést ellenőrző eszközökről, és meghatározott gyakorisággal frissítenie kell azokat.\n9. A szervezetnek meghatározott rendszerességgel meg kell változtatnia a hozzáférési kódokat és kulcsokat, illetve ha a kulcs elveszik, a hozzáférési kód kompromittálódik, vagy az azokkal rendelkező személy elveszíti a belépési jogosultságát.",
          "iso_27001_ref": "A.7.1; A.7.2; A.7.3; A.7.4",
          "nist_sp_800_53_rev5_ref": "PE-3",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.17",
          "control_title": "A fizikai hozzáférések felügyelete",
          "explanation": "Az EIR-eket tartalmazó létesítményekben a fizikai hozzáférések felügyelete azt jelenti, hogy az érintett szervezet folyamatosan figyelemmel kíséri és észleli a fizikai biztonsági eseményeket, illetve szükség esetén reagál azokra. A fizikai hozzáférések felügyelete magában foglalja a bárki által hozzáférhető, az érintett szervezethez tartozó területek felügyeletét is. Az érintett szervezet a fizikai felügyeletet megvalósíthatja biztonsági őrök, biztonsági kamerák és egyéb érzékelő berendezések segítségével. Az érintett szervezet rendszeresen átvizsgálja a fizikai belépéssel kapcsolatos naplókat, és elemzi azokat, ha a rendelkezésre álló információk jogosulatlan fizikai belépési utalnak. Jogosulatlan fizikai belépésre utalhat a normál munkaórákon kívül eső belépés, a szokatlan ideig történő bent tartózkodás a létesítményben, ismételten végrehajtott belépések nem szokványos területekre és minden egyéb, a megszokott mintázattól eltérő belépés. Az ellenőrzések és vizsgálatok eredményeit az érintett szervezet összehangolja az eseménykezelési képességével, így hatékonyabban kezelheti a biztonsági eseményeket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ellenőrznie kell a fizikai hozzáféréseket az EIR-eket tartalmazó létesítményekben így képes lehet észlelni a fizikai biztonsági eseményeket és reagálni tud azokra.\n2. A szervezetnek rendszeresen át kell vizsgálnia a fizikai hozzáférési naplókat. Ez segíthet a gyanús tevékenységek, a normális működéstől eltérő események vagy potenciális fenyegetések azonosításában.\n3. A szervezetnek azonnal elemeznie kell a naplókat, ha a rendelkezésre álló információk jogosulatlan fizikai hozzáférésre utalnak.\n4. A szervezetnek össze kell hangolnia az ellenőrzések és vizsgálatok eredményeit a szervezet eseménykezelési képességével.",
          "iso_27001_ref": "A.7.4; A.8.16",
          "nist_sp_800_53_rev5_ref": "PE-6",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.22",
          "control_title": "Látogatói hozzáférési naplók",
          "explanation": "A látogatók belépési nyilvántartása tartalmazza a látogató személy nevét és a képviselt szervezetet, a látogató aláírását, az azonosítás módját, a belépés dátumát, a belépés és a távozás időpontjait, a látogatás célját, valamint a felkeresett személyek nevét és szervezetét vagy szervezeti egységét. A hozzférési naplók felülvizsgálatával megállapítható, hogy a hozzáférési jogosultságok napra készek-e és továbbra is szükségesek-e a szervezeti alapfeladatokhoz és az üzleti funkcióhoz. Hozzáférési naplókat nem szükséges készíteni a nyilvánosan hozzáférhető területek vonatkozásában.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek rögzítenie kell fizikai és környezeti védelemről szóló szabályzatában a látogatók naplózását, valamint létre kell hoznia egy eljárásrendet, amely biztosítja, hogy a szervezet nyomon követi és rögzíti a látogatók belépéseit az EIR-eknek helyt adó létesítményekbe.\n2. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia a látogatói belépésekről szóló nyilvántartást. Ez a felülvizsgálat annak ellenőrzését szolgálja, hogy a hozzáférési engedélyek aktuálisak-e és továbbra is szükségesek-e az érintett szervezet célkitűzéseihez és üzleti funkcióinak támogatásához.\n3. A szervezetnek azonnal jelentenie kell a látogatói belépésekről szóló nyilvántartásban észlelt rendellenességeket a meghatározott személynek vagy szerepkörnek.\n4. A szervezetnek meg kell határoznia, hogy mennyi ideig őrzi meg a látogatói belépésekről szóló információkat. Ennek során az érintett szervezetnek figyelembe kell venni a jogszabályi előírásokat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "PE-8",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.31",
          "control_title": "Vészvilágítás",
          "explanation": "A vészvilágítás biztosítása elsősorban az érintett szervezet azon létesítményeire vonatkozik, amelyek egyszerre több rendszererőforrást tartalmaznak, pl. adatközpontok, számítógéptermek, szerverszobák. A vészvilágítással kapcsolatos előírások az érintett szervezet vészhelyzeti tervében találhatók.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azokat a területeket, amelyek egyszerre több rendszererőforrást tartalmaznak, pl. adatközpontok, számítógéptermek, szerverszobák.\n2. A szervezetnek létre kell hoznia és karban kell tartania egy automatikus vészvilágítási rendszert, amely áramszünet esetén aktiválódik, és megvilágítja a vészkijáratokat és a menekülési útvonalakat.\n3. A szervezetnek tesztelnie kell az automatikus vészvilágítási rendszerét, hogy biztosítsa annak megfelelő működését áramszünet esetén.\n4. A szervezetnek dokumentálnia kell az automatikus vészvilágítási rendszerének tesztelését és karbantartását, így biztosítva a rendszer megfelelő működését.",
          "iso_27001_ref": "A.7.11",
          "nist_sp_800_53_rev5_ref": "PE-12",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.33",
          "control_title": "Tűzvédelem",
          "explanation": "A tűzérzékelő és tűzoltó rendszerek biztosítása elsősorban az érintett szervezet azon létesítményeire vonatkozik, amelyek egyszerre több rendszererőforrást tartalmaznak, pl. adatközpontok, számítógéptermek, szerverszobák. A tűzérzékelő és tűzoltó rendszerekhez tartozó sprinkler rendszerek és füstérzékelők független energiaforrást igényelhetnek. A független energiaforrás biztosítja, hogy a tűzérzékelő és tűzoltó rendszerek akkor is működőképesek maradjanak, ha a létesítmény többi részének energiaellátása megszakad. Ez lehetővé teszi a tűz gyors észlelését és eloltását, csökkentve az EIR-ekben bekövetkező károkat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azokat a területeket, amelyek egyszerre több rendszererőforrást tartalmaznak, pl. adatközpontok, számítógéptermek, szerverszobák.\n2. A szervezet meghatározza, milyen tűzérzékelő és tűzoltó rendszerekre van szükség az EIR-ek védelme érdekében.\n3. A szervezet biztosítja, hogy amennyiben szükséges a tűzérzékelő és tűzoltó rendszerek független energiaforrással rendelkezzenek.\n4. A szervezetnek gondoskodnia kell arról, hogy a független energiaforrások rendelkezésre álljanak és működjenek, ha szükséges.\n5. A szervezetnek biztosítania kell, hogy a tűzérzékelő és tűzoltó rendszerek megfelelően vannak telepítve és karbantartva, illetve biztosítania kell, hogy a személyzet megfelelően képzett és felkészült a tűzeset esetén megteendő intézkedések tekintetében.\n6. A szervezetnek dokumentálnia kell a rendszerek tesztelését, karbantartását és az esetleges tűzeseteket is. A rendszeres teszteléssel és karbantartással biztosítható az eszközök megfelelő működése.",
          "iso_27001_ref": "A.7.5; A.7.8",
          "nist_sp_800_53_rev5_ref": "PE-13",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.40",
          "control_title": "Víz-, és más, csővezetéken szállított anyag okozta kár elleni védelem",
          "explanation": "A vízkár elleni védekezés elsősorban azokra a szervezeti létesítményekre vonatkozik, amelyekben rendszererőforrások koncentrálódnak, beleértve az adatközpontokat, szervertermeket és nagy telejesítményű számítógépes helyiségeket. Az elzárószelepek a főelzárószelepek mellett vagy helyett is alkalmazhatók a vízellátás elzárására az egyes problémás területeken anélkül, hogy az egész szervezetet érintené.\nAz EIR védelme a csővezeték rongálódásból származó károk ellen nem csak a fizikai infrastruktúra védelmét jelenti, hanem a hozzáférhetőség és a működőképesség biztosítását is. A főelzáró szelepeknek hozzáférhetőnek és működőképesnek kell lenniük, hogy a szükséges intézkedéseket gyorsan és hatékonyan lehessen végrehajtani. Ezenkívül fontos, hogy az EIR védelmében kulcsszerepet játszó személyek tisztában legyenek a feladataikkal és felelősségeikkel. .",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy az EIR-t vagy rendszerelemeit tartalmazó létesítményei, mint például adatközpontok, szervertermek és főszámítógép-termek, megfelelően védettek legyenek a csővezeték rongálódásból származó károk ellen.\n2. A szervezetnek használnia kell az elzárószelepeket, amelyeket a főelzárószelepek mellett vagy helyett lehet alkalmazni, hogy lezárják a vízellátást a különösen veszélyeztetett területeken, anélkül, hogy az egész szervezetet érintenék.\n3. A szervezetnek biztosítania kell, hogy a főelzárószelepek hozzáférhetők és működőképesek legyenek. Ez magában foglalja a szelepek karbantartását és rendszeres ellenőrzést.\n4. A szervezetnek dokumentálnia kell az EIR-el kapcsolatos tevékenységeket, beleértve a vízcsövek karbantartását, a helyiséghez való hozzáférést és a változásokat. Ez lehetővé teszi a szervezet számára, hogy nyomon kövesse és ellenőrizze az EIR állapotát, és időben észlelje a potenciális problémákat.",
          "iso_27001_ref": "A.7.5; A.7.8; A.7.11",
          "nist_sp_800_53_rev5_ref": "PE-15",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "12.42",
          "control_title": "Be- és kiszállítás",
          "explanation": "Az érintett szervezetnek megfelelő engedélyezési eljárásokat kell bevezetnie a rendszerelemek létesítménybe történő beszállításának, ill. a létesítményből történő kiszállításának esetére. A szervezetnek felügyelni kell a be- és kiszállítási folyamatokat, és naprakész, hiteles nyilvántartást kell vezetni ezekről. A szervezetnek ki kell kényszerítenie, hogy a szervezet által bevezetett engedélyezési eljárást megkerülve, vagy annak adminisztrálását elmulasztva ne lehessen be- és kiszállítani rendszerelemeket, ezért szükség lehet a szállítási területekhez való hozzáférés korlátozására, valamint a területek elkülönítésére a EIR-ektől és a adathordozó tárolóktól.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek engedélyeznie kell és felügyelnie kell a rendszerelemek létesítménybe történő beszállítását és kiszállítását. Ez magában foglalhatja a szállítási területekhez való hozzáférés korlátozását és azok izolálását az EIR-től.\n2. A szervezetnek be kell vezetnie és folyamatosan karban kell tartania egy nyilvántartási rendszert, amely nyomon követi a rendszerelemek mozgását. Ez magában foglalhatja az elemek azonosítását, a beszállítás és kiszállítás időpontját, a célállomást és a felelős személyt.\n3. A szervezetnek naplót kell vezetnie minden rendszerelem mozgásáról. Ez magában foglalhatja az elem mozgásának időpontját, a célállomást, a felelős személyt és a mozgás okát.\n4. A szervezetnek gondoskodnia kell róla, hogy a fenti lépéseket következetesen és szigorúan végrehajtják. Ez magában foglalhatja a szabályok betartásának ellenőrzését és a szükséges intézkedések megtételét a szabályok megsértése esetén.",
          "iso_27001_ref": "A.5.10; A.7.2; A.7.10",
          "nist_sp_800_53_rev5_ref": "PE-16",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "12.1",
        "12.2",
        "12.6",
        "12.17",
        "12.22",
        "12.31",
        "12.33",
        "12.40",
        "12.42"
      ],
      "cost_band": "B0",
      "days_to_target": -24,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "Az ellátási láncra vonatkozó kockázatkezelési szabályzat és eljárások az ellátási lánc kockázatkezelése követelménycsoportba tartozó védelmi intézkedésekkel foglalkoznak, amelyek az EIR-ekben, illetve a szervezetekben bevezetésre kerülnek.\nA kockázatkezelési stratégia fontos tényező az ilyen típusú szabályzatok és eljárásrendek létrehozása során. A szabályzatok és eljárásrendek hozzájárulnak a biztonság garantálásához. Ezért fontos, hogy a szervezet információbiztonsági szabályozási környezete, az ellátási láncra vonatkozó kockázatkezelési szabályzat és az ahhoz kapcsolódó eljárásrendek összhangban legyenek egymással. A szervezeti szintű biztonsági szabályzatok és eljárásrendek általában előnyösebbek, és szükségtelenné tehetik a szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szabályok helyet kaphatnak egy általános biztonsági szabályzatban (pl.: Információbiztonsági Szabályzat (IBSZ)), illetve több szabályzatban is megjelenhetnek, attól függően, hogy az érintett szervezetnek milyen a felépítése. Amennyiben szükséges, létrehozhatók eljárásrendek az információbiztonsági irányítási rendszer, a szervezeti célok vagy üzleti folyamatok, illetve az EIR-ek támogatására. Az eljárásrendek leírják miként valósulnak meg a szabályok vagy a védelmi intézkedések, és azok hogyan érintik az eljárásrend tárgyát képező egyént vagy szerepkört. Az eljárásrendek képezhetik a rendszerbiztonsági terv részét, illetve egy vagy több külön dokumentumban is helyet kaphatnak. Az ellátási láncra vonatkozó kockázatkezelési szabályzat és eljárásrendek frissítését kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események, vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. Az elvárt védelmi intézkedések egyszerű újraközlése",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell az ellátási láncra vonatkozó kockázatkezelési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy az ellátási láncra vonatkozó kockázatkezelési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell az ellátási láncra vonatkozó kockázatkezelési szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális ellátási láncra vonatkozó kockázatkezelési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.19; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "SR-1",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "19.4",
          "control_title": "Ellátási láncra vonatkozó követelmények és folyamatok",
          "explanation": "Az ellátási lánc elemei magukban foglalják azokat a szervezeteket, szereplőket vagy eszközöket, amelyeket az EIR és a rendszerelemeinek kutatására és fejlesztésére, tervezésére, gyártására, beszerzésére, szállítására, integrációjára, üzemeltetésére és karbantartására, valamint selejtezésére használnak. Az ellátási lánc folyamatai magukban foglalják a hardver-, szoftver- és firmware-fejlesztési folyamatokat; a szállítási és kezelési eljárásokat; a személyi és fizikai biztonsági programokat; a konfigurációs menedzsment eszközeit, technikáit és intézkedéseit az eredetiség biztosítására; vagy más programokat, folyamatokat vagy eljárásokat, amelyek az EIR és a rendszerelemeinek fejlesztésével, beszerzésével, karbantartásával és selejtezésével kapcsolatosak. Az ellátási lánc elemeit és folyamatait a szervezet, az rendszerintegrátorok vagy külső szolgáltatók biztosíthatják. Az ellátási lánc elemeiben vagy folyamataiban lévő gyengeségek vagy hiányosságok potenciális sérülékenységeket jelentenek, amelyeket a támadók kihasználhatnak a szervezet károsítására és annak képességének befolyásolására, hogy végrehajtsa ügymeneti feladatait vagy üzleti funkcióit.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azon EIR-hez kötődő ellátási láncot és ellátási láncelemeket, melyek gyengeségeit azonosítani és kezelni kell.\n2. A szervezetnek meg kell határoznia az ellátási láncért felelős személyeket.\n3. A szervezetnek meg kell határoznia az ellátási lánccal kapcsolatos események naplózására használt dokumentumokat.\n4. A szervezetnek ki kell dolgoznia egy stratégiát, mely alapján a meghatározott ellátási lánc gyengeségeit, vagy hiányosságait azonosítja és kezeli. Ez magában foglalja az ellátási láncért felelős személyekkel való együttműködést is.\n5. A szervezetnek naplóznia kell a meghatározott ellátási lánccal kapcsolatos eseményeket a meghatározott dokumentumokba.",
          "iso_27001_ref": "A.5.20; A.5.21",
          "nist_sp_800_53_rev5_ref": "SR-3",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.1",
        "19.4"
      ],
      "cost_band": "B0",
      "days_to_target": 21,
      "deadline_bucket": "DUE_30_DAYS",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "16.3",
          "control_title": "A rendszer fejlesztési életciklusa",
          "explanation": "A jól definiált rendszerfejlesztési életciklusok alapját képezik a szervezeti információs rendszerek sikeres fejlesztésének, megvalósításának és üzemeltetésének. A szükséges biztonsági követelmények alkalmazása a rendszerfejlesztési életciklus során az információbiztonság, a fenyegetések, sérülékenységek, kedvezőtlen hatások és kritikus üzleti célok/üzleti funkciók kockázatainak alapvető megértését igényli. A követelmény alapján kialakítandó biztonsági tervezés alapelvei nem alkalmazhatók megfelelően, ha a szakértők, akik az EIR-eket és a rendszerelemeket tervezik, fejlesztik és tesztelik, nem értik a biztonsági elvárásokat. Ezért a szervezetek képzett munkatársakat, például információbiztonsági szakértőket, biztonsági architektúra tervezőket, biztonságtechnikai mérnököket és információbiztonsági felelőst alkalmaznak a rendszerfejlesztési életciklus megvalósításához. A biztonsági követelmények a szervezeti architektúrába történő hatékony implementálása segít annak biztosításában is, hogy a fontos biztonsági szempontok a rendszer teljes életciklusa során érvényesüljenek, és hogy ezek a megfontolások közvetlenül kapcsolódjanak a szervezeti működési célokhoz és az üzleti folyamatokhoz. Ez a folyamat megkönnyíti továbbá az információbiztonsági architektúrák integrálását a szervezeti architektúrába, összhangban a szervezet kockázatkezelési stratégiájával. Mivel egy rendszerfejlesztési életciklusban több szervezet is részt vesz (pl. külső beszállítók, fejlesztők, integrátorok, szolgáltatók), a beszerzési és ellátási lánc kockázatkezelési funkciói és intézkedései jelentős szerepet játszanak az EIR hatékony felügyeletében, annak teljes életciklusa alatt.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia és dokumentálnia az információbiztonsági szerepköröket és felelősségeket az EIR fejlesztési életciklusa során. Ez magában foglalja a szükséges személyek bevonását is az EIR fejlesztési életciklusába, hogy biztosítsák a meghatározott biztonsági követelmények beépítését az EIR-be.\n2. A szervezetnek azonosítania kell azokat a személyeket, akik rendelkeznek információbiztonsággal kapcsolatos felelősségi körökkel. Ez magában foglalja a szerepkör-alapú biztonsági képzési programok biztosítását is, hogy a kulcsfontosságú biztonsági szerepkörökkel és felelősségekkel rendelkező személyek rendelkezzenek a szükséges tapasztalattal, készségekkel és szakértelemmel a rendszerfejlesztési életciklus tevékenységeinek végrehajtásához.\n3. Az érintett szervezetnek be kell építenie az információbiztonsági kockázatkezelési folyamatot a rendszerfejlesztési életciklus tevékenységeibe. Ez magában foglalja a biztonsági követelmények beépítését a vállalati architektúrába, hogy biztosítsák a releváns biztonsági szempontok figyelembevételét az EIR életciklusa során, és hogy ezek a szempontok közvetlenül kapcsolódjanak az érintett szervezet céljaihoz és üzleti folyamataihoz.\n4. Mivel a rendszerfejlesztési életciklus több szervezetet is érint, az érintett szervezetnek figyelembe kell vennie a beszerzési és ellátási lánc kockázatkezelési funkcióit és intézkedéseit az rendszeréletciklusa során történő hatékony kezelés érdekében.\n5. A szervezetnek figyelemmel kell kísérnie az EIR információbiztonsági helyzetét az EIR teljes életútján, minden életciklusában. Ez magában foglalja a naplózást és a rendszeres ellenőrzéseket is, hogy biztosítsák az EIR információbiztonsági állapotának megfelelőségét.",
          "iso_27001_ref": "A.5.2; A.5.8; A.8.25; A.8.31",
          "nist_sp_800_53_rev5_ref": "SA-3",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "16.99",
          "control_title": "Támogatással nem rendelkező rendszerelemek",
          "explanation": "A rendszerelemek támogatása magában foglalja a szoftverjavításokat, a firmware-frissítéseket, a cserealkatrészeket és a karbantartási szerződéseket. A nem támogatott elemekre példa, amikor a gyártók már nem biztosítanak kritikus szoftverjavításokat vagy termékfrissítéseket, ami lehetőséget adhat a támadóknak a telepített elemek gyengeségeinek kihasználására. A nem támogatott rendszerelemek cseréje alóli kivételek közé tartoznak a kritikus ügymeneti vagy üzleti képességeket biztosító rendszerek, ahol nem állnak rendelkezésre újabb technológiák, vagy ahol az EIR-ek annyira elszigeteltek, hogy a csereelemek telepítése nem lehetséges.\nAz alternatív támogatási források arra az igényre vonatkoznak, hogy folyamatos támogatást nyújtsanak az eredeti gyártók, fejlesztők vagy szállítók által már nem támogatott rendszerelemekhez, amennyiben ezek az elemek továbbra is alapvető fontosságúak a szervezeti ügymeneti és az üzleti funkciók szempontjából. Szükség esetén a szervezetek a kritikus szoftverelemekhez testreszabott javítások kifejlesztésével házon belüli támogatást hozhatnak létre, vagy alternatívaként külső szolgáltatók szolgáltatásait vehetik igénybe, akik szerződéses kapcsolatok révén folyamatos támogatást nyújtanak a kijelölt, nem támogatott elemekhez. Az ilyen szerződéses kapcsolatok közé tartozhatnak a nyílt forráskódú szoftverek értéknövelő szállítói. A nem támogatott rendszerelemek használatának megnövekedett kockázata csökkenthető például az ilyen elemek nyilvános vagy nem ellenőrzött hálózatokhoz való csatlakoztatásának megtiltásával, vagy az elszigetelés más formáinak megvalósításával.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek le kell cserélnie a rendszerelemeket, amikor azok támogatása már nem elérhető a fejlesztőtől, szállítótól vagy gyártótól. Ez magában foglalja a szoftverfrissítéseket, firmware frissítéseket, alkatrész cseréket és karbantartási szerződéseket.\n2. Ha a rendszerelemek támogatása már nem elérhető, és ezek az elemek továbbra is létfontosságúak a szervezet ügymeneti és üzleti funkcióihoz, akkor a szervezetnek alternatív támogatást kell biztosítania.\n3. Az alternatív támogatás biztosítása magában foglalhatja a belső erőforrások használatát, például a kritikus szoftverelemekhez szükséges egyedi javítások kifejlesztését.\n4. Alternatív megoldásként a szervezetnek lehetősége van bevonnia külső szolgáltatókat, akik szerződéses kapcsolatok révén folyamatos támogatást nyújtanak a támogatás nélküli rendszerelemekhez.\n5. A szervezetnek csökkentenie kell a rendszerelemek használatának kockázatát, például azzal, hogy megtiltja ezeknek az elemeknek a nyilvános vagy ellenőrizetlen hálózatokhoz való csatlakozását, vagy más izolációs formákat alkalmaz.\n6. A szervezetnek dokumentálnia kell az összes lépést, hogy bizonyíthassa a kiberbiztonsági követelményeknek való megfelelést.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SA-22",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "16.3",
        "16.99"
      ],
      "cost_band": "B0",
      "days_to_target": -24,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": 407,
      "deadline_bucket": "LATER",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -47,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -33,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "15.9",
          "control_title": "Sérülékenységek ellenőrzése",
          "explanation": "A biztonsági intézkedés az EIR-ek vonatkozásában releváns sérülékenységek figyelemmel kísérését foglalja magába, valamint azok belső eljárárásrendekkel összhangban történő javítását. Ilyen tevékenységnek tekintendő az NBSZ NKI, a jelentős gyártók, valamint egyéb iparági szereplők által publikált sérülékenységek nyomonkövetése, és a kiadott biztonsági frissítések, valamint új szoftver- és firmware verziók telepítése. A sérülékenységek ellenőrzésének folyamata, amennyiben technológiai szempontból lehetséges, megvalósítható az NBSZ NKI ASR rendszerének igénybevételével az arra jogosult szervezetek esetében.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "A sérülékenységekről a meghatározott szerepkörben lévő személy, meghatározott rendszerességgel tájékozódik pl. a https://nki.gov.hu/figyelmeztetesek/cve-serulekenysegek/ vagy a https://cve.mitre.org/ oldalakon.",
          "iso_27001_ref": "",
          "nist_sp_800_53_rev5_ref": "",
          "requirement_family": "15",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "18.2",
          "control_title": "Hibajavítás",
          "explanation": "Az érintett szervezet azonosítja azokat az EIR-eket, amelyeket bejelentett szoftversérülékenységek érintenek, majd ezekről jelentést készít és a kijelölt, IT biztonsági felelősséggel rendelkező szervezeti szereplőknek továbbítja. Biztonsági szempontból releváns szoftverfrissítések például a patch-ek, szervízcsomagok, az ún. \"hotfix-ek\", antivírus leírók alkalamazása. A szervezet kezeli azokat a hibákat is, amelyeket a biztonsági felmérések, folyamatos ellenőrzés, biztonsági eseménykezelés, rendszerhiba-kezelés során tárnak fel.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek azonosítania kell az EIR hibáit, beleértve a potenciális sebezhetőségeket, amelyek ezekből a hibákból adódhatnak, és jelentenie kell ezt az információt a szervezet kijelölt személyzetének, akiknek információbiztonsági és adatvédelmi felelősségei vannak.\n2. A biztonsági szempontból releváns frissítések telepítése előtt a szervezetnek tesztelnie kell a hibajavításokat a hatékonyság és a potenciális mellékhatások szempontjából. Ezek a frissítések tartalmazhatnak javítócsomagokat, szervízcsomagokat és rosszindulatú kód leírásokat.\n3. A szervezetnek a frissítések kiadását követő meghatározott időtartamon belül telepítenie kell a biztonsági szempontból releváns szoftver- és firmware-frissítéseket. Az szervezet által meghatározott időszakok változhatnak számos kockázati tényező alapján, beleértve az EIR biztonsági kategóriáját, a frissítés kritikusságát, a szervezet kockázattűrését, az EIR által támogatott alapfeladatokat vagy a fenyegetési környezetet.\n4. A szervezetnek be kell építenie a hibajavítást a konfigurációkezelési folyamatába, hogy a szükséges hibajavítási intézkedéseket nyomon követhesse és ellenőrizhesse.\n5. A szervezetnek meg kell határoznia a hibajavítási tevékenység típusát, figyelembe véve a változások típusát, amelyeket konfigurációkezelés alá kell vonni. Bizonyos esetekben a szervezet úgy dönthet, hogy a szoftver- vagy firmware-frissítések tesztelése nem szükséges vagy nem praktikus, például egyszerű rosszindulatú kód leírások frissítése esetén. A tesztelési döntések során a szervezet figyelembe veszi, hogy a biztonsági szempontból releváns szoftver- vagy firmware-frissítések hiteles forrásból származnak-e megfelelő digitális aláírásokkal.",
          "iso_27001_ref": "A.6.8; A.8.8; A.8.32",
          "nist_sp_800_53_rev5_ref": "SI-2",
          "requirement_family": "18",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "15.9",
        "18.2"
      ],
      "cost_band": "B0",
      "days_to_target": 36,
      "deadline_bucket": "LATER",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": 36,
      "deadline_bucket": "LATER",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -51,
      "deadline_bucket": "OVERDUE",
      "deliverable": "Jóváhagyott canonical source record.",
      "evidence": "SRC-008 fájl, SHA-256, védett tárhivatkozás, aláírásstruktúra-metaadat, összehasonlítási jegyzőkönyv, D-025 és reviewer.",
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
      "task": "Rögzítse a D-025 szerinti G2 emberi review elfogadását.",
      "title": "Forrásverzió-kezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "orchestrator",
      "approver": "Lángi Zoltán",
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": -49,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "11.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "Az adathordozók védelmére vonatkozó szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell az adathordozók védelmére vonatkozó szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy az adathordozók védelmére vonatkozó szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell az adathordozók védelmére vonatkozó szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális adathordozók védelmére vonatkozó szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "MP-1",
          "requirement_family": "11",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "11.2",
          "control_title": "Hozzáférés az adathordozókhoz",
          "explanation": "Az EIR adathordozói lehetnek digitális és analóg adathordozók. Digitális adathordozók alatt például a következőket érthetjük: lemezek, mágnesszalagok, külső/cserélhető merevlemezek, flash meghajtók, CD és DVD. Az analóg adathordozók közé tartozik például a papír és a mikrofilm.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia, hogy mely digitális és analóg adathordozókhoz kívánja korlátozni a hozzáférést.\n2. A szervezetnek meg kell határoznia azokat a személyeket vagy szerepköröket, akik számára engedélyezni kívánja a hozzáférést az említett adathordozókhoz.\n3. A szervezetnek alkalmaznia kell a megfelelő hozzáférési szabályokat és eljárásrendeket, így biztosítva a hozzáférés korlátozását a meghatározott adathordozókhoz.\n4. A szervezetnek dokumentálnia kell a kiosztott hozzáférési jogosultságokat, illetve azok változásait, így nyomon követheti és ellenőrizheti azokat.\n5. A szervezetnek rendszeresen felül kell vizsgálnia és szükség esetén frissítenie kell a hozzáférési jogosultságokat annak érdekében, hogy biztosítsa azok hatékonyságát és naprakészségét.\n.",
          "iso_27001_ref": "A.5.10; A.7.7; A.7.10",
          "nist_sp_800_53_rev5_ref": "MP-2",
          "requirement_family": "11",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "11.8",
          "control_title": "Adathordozók törlése",
          "explanation": "Ez a követelmény alkalmazandó minden adathordozó - legyen az digitális vagy analóg - megsemmisítésére vagy újrahasznosítására, még a hordozható adathordozókra is. Digitális adathordozó lehet szkenner, nyomtató, laptop, munkaállomás, hálózati- és hordozható eszköz. A biztonságos törlési eljárás eltávolítja az adathordozóról az információt oly módon, hogy azt nem lehet visszaállítani. A törlési eljárások megakadályozzák hogy az információt arra nem jogosult személyek megismerjék, amennyiben az adathordozót újra felhasználják vagy az kikerül a szervezet irányítása alól. A szervezet meghatározza a megfelelő törlési módszereket, melynek során figyelembe veszi, hogy a fizikai megsemmisítés szükséges lehet, amennyiben más módszerek alkalmazása nem szolgálna az elérni kívánt eredménnyel. A szervezet nem feltétlenül kell, hogy a jóváhagyott megsemmisítési technikákat és eljárásokat alkalmazza olyan esetekben, amikor az adathordozó olyan információkat tartalmaz, amelyek nyilvánosan hozzáférhetőnek minősülnek, vagy amelyek nyilvánosan közzétehetőek. Az analóg adathordozók biztonságos törlése magában foglalja például egy minősített melléklet eltávolítását egy egyébként nem minősített dokumentumból, vagy a kiválasztott szakaszok, illetve szavak olvashatatlanná tételét úgy, hogy maszkolják vagy eltávolítják a módosított részeket/szavakat. A biztonságos törlésnél, illetve megsemmisítésnél nemzetközi ajánlások figyelembevétele javasolt.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek minden meghatározott digitális és analóg EIR adathordozót biztonságos törlési technikákkal és eljárásokkal törölnie kell a leselejtezés, a szervezet ellenőrzési körén kívülre kerülés, vagy az újra felhasználásra való kibocsátás előtt.\n2. A szervezetnek a törlési mechanizmusokat az információ biztonsági besorolásával és sértetlenségi követelményével arányosan kell kiválasztania és alkalmaznia. A törlési eljárásnak vagy technikának úgy kell eltávolítania az információt az adathordozóról, hogy az információt ne lehessen visszaállítani.\n3. A szervezetnek mérlegelnie kell, hogy a jóváhagyott megsemmisítési technikákat és eljárásokat alkalmazza-e olyan esetekben, amikor az adathordozó olyan információkat tartalmaz, amelyek nyilvánosan hozzáférhetőnek minősülnek, vagy amelyek nyilvánosan közzé tehetőek.",
          "iso_27001_ref": "A.5.10; A.7.10; A.7.14; A.8.10",
          "nist_sp_800_53_rev5_ref": "MP-6",
          "requirement_family": "11",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "11.14",
          "control_title": "Adathordozók használata",
          "explanation": "Az EIR adathordozói lehetnek digitális és analóg adathordozók. Digitális adathordozók alatt például a következőket érthetjük: lemezek, mágnesszalagok, külső/cserélhető merevlemezek, flash meghajtók, CD és DVD. Az analóg adathordozók közé tartozik például a papír és a mikrofilm. Ezen követelmény szabályait abban az esetben is alkalmazni kell, amennyiben valamilyen mobil eszköz rendelkezik adattárolási lehetőséggel p.: okostelefonok, tabletek, e-könyv olvasók. Ez a követelmény korlátozza bizonyos típusú adathordozók használatát az EIR-ekben, például korlátozza vagy tiltja a flash meghajtók vagy külső merevlemezek használatát. Az érintett szervezet korlátozhatja a hordozható tárolóeszközök használatát, például fizikailag elzárhatják a munkaállomásokat, ami azt jelenti, hogy megakadályozzák bizonyos külső portokhoz történő hozzáférést, illetve nem teszik lehetővé az említett eszközök csatlakoztatását, így azokat írni és olvasni sem lehet. A szervezetek korlátozhatják a hordozható tárolóeszközök használatát oly módon is, hogy csak a jóváhagyott, például a szervezet vagy más külső fél által biztosított eszközök csatlakoztathatóak, viszont a személyes tulajdonban álló eszközök kizárásra kerülnek. Végül a szervezetek korlátozhatják a hordozható tárolóeszközöket típustól függően. Az érintett szervezet tilthatja az írható, hordozható tárolóeszközök használatát, melyet akár logikai követelmény alkalmazásával ki lehet kényszeríteni. Az éirintett szervezet tulajdonosokat rendelhet a hordozható adattároló eszközökhöz csökkentve ezzel az eszközök használatával kapcsolatos kockázatot és egyúttal megteremti az eszközökkel kapcsolatos sérülékenységek kezelésének felelősségét.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek azonosítania kell, illetve meg kell határoznia azokat a típusú adathordozókat, amelyek használatát korlátozni vagy tiltani kívánja az EIR-eken vagy rendszerelemeken, a szervezet által meghatározott irányítási mechanizmusok alkalmazásával.\n2. A szervezetnek meg kell tiltania a hordozható adattároló eszközök használatát a szervezeti EIR-ekben, ha azoknak nincs azonosítható tulajdonosa.\n3. A szervezet korlátozhatja a hordozható tárolóeszközök használatát.\n4. A szervezet korlátozhatja a hordozható tárolóeszközök használatát oly módon is, hogy csak a jóváhagyott, például a szervezet vagy más, ellenőrzött külső fél által biztosított eszközök csatlakoztathatóak, viszont a személyes tulajdonban álló eszközök kizárásra kerülnek.\n5. A szervezet korlátozhatja a hordozható tárolóeszközöket típustól függően.\n6. A szervezetnek naplóznia, illetve rendszeresen ellenőriznie kell az adathordozók használatát, hogy biztosítsa a szabályok betartását és azonnal észlelje a szabályok megsértését.",
          "iso_27001_ref": "A.5.10; A.7.10",
          "nist_sp_800_53_rev5_ref": "MP-7",
          "requirement_family": "11",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "11.1",
        "11.2",
        "11.8",
        "11.14"
      ],
      "cost_band": "B0",
      "days_to_target": 6,
      "deadline_bucket": "DUE_7_DAYS",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "14.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A személyi biztonságra vonatkozó szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a személyi biztonságra vonatkozó szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a személyi biztonságra vonatkozó szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a személyi biztonságra vonatkozó szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális személyi biztonságra vonatkozó szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "PS-1",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.2",
          "control_title": "Munkakörök biztonsági szempontú besorolása",
          "explanation": "Az érintett szervezet minden munkakörhöz hozzárendel egy kockázati besorolást. Értékeli egy pozíció feladatait és felelősségeit annak meghatározására, hogy a pozíció betöltőjének hibázása esetén milyen mértékben okozhat kárt a szolgáltatás hatékonyságában vagy sértetlenségében, amely alapján meghatározza a pozíció kockázati szintjét. Az értékelés azt is meghatározhatja, hogy adott pozíció feladatai és felelősségei milyen mértékben lehetnek károsak anyagilag vagy gyakorolhatnak negatív hatást a nemzetbiztonságra, és ennek a potenciális hatásnak a mértékét. Az értékelés eredményei meghatározzák, hogy milyen szintű átvilágítás történik egy pozícióra nézve. A kockázati besorolások iránymutatást adhatnak és informatívak lehetnek arra nézve is, hogy az adott személynek mekkora mértékű és milyen típusú engedélye van az EIR-hez való hozzáféréshez.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek minden szervezeti munkakörhöz hozzá kell rendelnie egy kockázati besorolást.\n2. A szervezetnek létre kell hoznia egy besorolási rendszert a munkakörökhöz, amely értékeli a pozíció feladatait és felelősségeit.\n3. A szervezetnek átvilágítási kritériumokat kell felállítania a munkaköröket betöltő személyek számára.\n4. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia és frissítenie a kockázati besorolást.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "PS-2",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.3",
          "control_title": "Személyek háttérellenőrzése",
          "explanation": "Az érintett szervezet ellenőrzi az egyéneket, mielőtt engedélyezné a hozzáférésüket az EIR-hez, és ismételten ellenőrzi az egyéneket a meghatározott feltételeknek megfelelően, ha változás történt az egyén jogosultságában vagy munkakörében, illetve meghatározott gyakorisággal. Az ellenőrzés és az ismételt ellenőrzés célja, hogy biztosítsa az EIR bizalmasságát és sértetlenségét, valamint megvédje az érintett szervezet információit a nem megfelelő hozzáféréstől vagy használattól.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek először meg kell határoznia a személyzet ellenőrzésének és ismételt ellenőrzésének szabályait. Az ellenőrzés például háttérkutatásokat és szervezeti ellenőrzéseket is magában foglalhat.\n2. A szervezetnek meg kell határoznia a különböző típusú ismételt ellenőrzési feltételeket és gyakoriságokat az EIR-hez hozzáféréssel rendelkező személyek számára.\n4. A szervezetnek ellenőriznie kell a személyeket, mielőtt engedélyezné a hozzáférésüket az EIR-hez.\n5. A szervezetnek ismételten ellenőriznie kell az egyéneket a meghatározott körülmények bekövetkezése esetén, ha változás történt a személy jogosultsági szintjében vagy munkakörében, illetve meghatározott gyakorisággal.\n6. A szervezetnek dokumentálnia kellaz ellenőrzésekről és az ismételt ellenőrzésekről, hogy bizonyítékot szolgáltasson a folyamatok megfelelőségéről és a kiberbiztonsági követelmények betartásáról.",
          "iso_27001_ref": "A.6.1",
          "nist_sp_800_53_rev5_ref": "PS-3",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.5",
          "control_title": "Személyek munkaviszonyának megszűnése",
          "explanation": "A szervezet tulajdona magában foglalja a hardveres hitelesítési tokeneket, a műszaki kézikönyveket, a kulcsokat, a belépő- és azonosító kártyákat. A kilépő interjúk biztosítják, hogy az elbocsátott személyek megértsék a rájuk vonatkozó és továbbiakban is érvényben lévő információbiztonsági kötelezettségeket, valamint, hogy a megfelelő elszámoltathatóság valósuljon meg a visszaadott szervezeti eszközökkel kapcsolatban. A kilépő interjúk témái közé kell tartozzon, hogy a távozó kollégát emlékeztessék a titoktartási megállapodásokra és a jövőbeli foglalkoztatás lehetséges korlátaira.\nElőfordulhat, hogy egyes személyek esetében nem mindig lehetséges a kilépő interjú végrehajtása, ideértve a nem elérhető, vagy beteg kollégákat. A felmondási folyamat lépéseinek időben történő végrehajtása kiemelt fontosságú azon személyek esetében, akik magas jogosultsággal rendelkeztek, illetve akik esetében indokolt az azonnali felmondás. Bizonyos esetekben az is előfordulhat, hogy a rendszerfiókok letiltása is szükséges még azelőtt, hogy a elbocsátott egyént értesítették volna róla.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meghatározott időn belül le kell tiltania annak a személynek az EIR-hez való hozzáférését, akinek munkaviszonya megszűnt.\n2. A szervezetnek meg kell szüntetnie vagy vissza kell vonnia az adott személyhez kapcsolódó összes jogosultságot, a munkaviszonyának megszűnésével a távozó személynek pedig minden birtokában álló hitelesítő eszközt.\n3. A szervezetnek le kell folytatnia a kilépési interjúkat, amelyek meghatározott információbiztonsági témákat tartalmaznak.\n4. A szervezetnek vissza kell vennie az összes biztonsági szempontból releváns, az EIR-hez kapcsolódó biztonsági eszközt.\n5. A szervezetnek meghatározott ideig meg kell őriznie a megszűnt munkaviszonyú személy hozzáférését és az általa kezelt információt.\n6. A szervezetnek dokumentálnia kell a fenti lépések végrehajtásáról, hogy bizonyíthassa a megfelelő eljárások betartását.",
          "iso_27001_ref": "A.5.11; A.6.5",
          "nist_sp_800_53_rev5_ref": "PS-4",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.8",
          "control_title": "Az áthelyezések, átirányítások és kirendelések kezelése",
          "explanation": "Indokoltnak tekinthető egy áthelyezés, ha a személyzet egy tagja olyan hosszú időre kerül kiküldetésre vagy folyamatosan kiküldésre kerül. Az érintett szervezetek meghatározzák a megfelelő intézkedéseket az áthelyezések vagy átirányítások típusaihoz, legyenek azok állandóak vagy hosszú távúak. Az áthelyezés vagy átirányítás során szükséges tevékenységek közé tartozhatnak a régi kulcsok visszaadása és új kulcsok kiadása, azonosító kártyák és belépőkártyák cseréje; felhasználói fiók bezárása és új fiók létrehozása; a hozzáférési jogosultságok módosítása.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek folyamatosan felül kell vizsgálnia és meg kell erősítenie az EIR-hez és létesítményekhez rendelt érvényes logikai és fizikai hozzáférési jogosultságokat. Ez minden olyan esetben szükséges, amikor az egyének a szervezeten belül más munkakörbe, áthelyezésre vagy átirányításra kerülnek.\n2. A szervezetnek meghatározott időn belül kezdeményeznie kell az áthelyezési és átirányítási intézkedéseket.\n3. A szervezetnek szükség szerint módosítania kell a hozzáférési jogosultságot, hogy az megfeleljen az áthelyezés vagy átirányítás miatt bekövetkező változások működési szükségleteinek.\n4. A szervezetnek meghatározott időn belül értesítenie kell a megadott személyeket vagy szerepköröket.",
          "iso_27001_ref": "A.5.11; A.6.5",
          "nist_sp_800_53_rev5_ref": "PS-5",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.9",
          "control_title": "Hozzáférési megállapodások",
          "explanation": "A hozzáférési szabályok magukban foglalják a titoktartási megállapodásokat, az elfogadható használati megállapodásokat, a viselkedési szabályokat. Az aláírt hozzáférési megállapodások tartalmazzák annak elismerését, hogy az egyének elolvasták, megértették és egyetértenek azzal, hogy betartják a korlátozásokat, amelyek az érintett szervezet EIR-jeihez való hozzáféréssel járnak. Az érintett szervezet elektronikus aláírásokat használhat a hozzáférési megállapodások elismerésére, kivéve, ha azt az érintett szervezet valamely szabályzata ezt kifejezetten tiltja.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia és dokumentálnia kell az EIR-ekhez való hozzáférés szabályait.\n2. A szervezetnek a szervezet által meghatározott gyakorisággal felül kell vizsgálnia és frissítenie kell a hozzáférési szabályokat, hogy biztosítsa azok naprakészségét és relevanciáját.\n3. A szervezetnek ellenőriznie kell, hogy az EIR-ekhez hozzáférést igénylő személyek megismerték és dokumentált módon elfogadták a vonatkozó hozzáférési szabályokat a hozzáférés megadása előtt. Amennyiben a hozzáférési szabályok változnak, (vagy a szervezet által meghatározott gyakorisággal vagy meghatározott esetekben) a szervezetnek biztosítania kell, hogy az EIR-ekhez hozzáférést igénylő személyek megismerték és dokumentált módon elfogadták az aktuális hozzáférési szabályokat az EIR-ekhez való hozzáférés megtartása érdekében.\n5. A szervezetnek dokumentálnia kell a fenti folyamatot.",
          "iso_27001_ref": "A.5.4; A.5.14; A.6.2; A.6.6",
          "nist_sp_800_53_rev5_ref": "PS-6",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.11",
          "control_title": "Külső személyekhez kapcsolódó biztonsági követelmények",
          "explanation": "A külső szolgáltató kifejezés olyan szervezetekre utal, amelyek nem közvetlenül az EIR-t üzemeltető vagy azt beszerző szervezetek. A külső szolgáltatók közé tartoznak a szerződéses partnerek és más szervezetek, amelyek rendszerfejlesztést, informatikai szolgáltatásokat, tesztelési vagy értékelési szolgáltatásokat, kiszervezett alkalmazásokat és hálózatkezelést nyújtanak stb.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek először meg kell határoznia a személyi biztonsági követelményeket a külső szolgáltatók számára. Ezeknek a követelményeknek tartalmazniuk kell a szükséges biztonsági szerep- és felelősségeket.\n2. A szervezetnek meg kell követelnie a külső szolgáltatóktól, hogy tartsák be a szervezet által meghatározott személyi biztonsági szabályokat.\n3. A szervezetnek dokumentálnia kell a személyi biztonsági követelményeket, hogy biztosítsa azok átláthatóságát és nyomon követhetőségét.\n4. A szervezetnek meg kell követelnie a külső szolgáltatóktól, hogy a meghatározott időn belül értesítsék a meghatározott személyeket vagy szerepköröket minden olyan külső személy áthelyezéséről vagy kilépéséről, akik EIR hitelesítő eszközzel, belépőkártyával vagy EIR jogosultsággal rendelkeztek.\n5. A szervezetnek ellenőriznie kell, hogy a szolgáltató megfelel-e a személyi biztonsági követelményeknek. Ez magában foglalhatja a szolgáltató által készített dokumentáció, jegyzőkönyvek és naplók vizsgálatát, valamint a személyi biztonsági szabályok betartásának ellenőrzését.\n6. Amennyiben a szolgáltató nem felel meg a személyi biztonsági követelményeknek, a szervezetnek intézkedéseket kell hoznia a helyzet javítása érdekében, amely magában foglalhatja a szolgáltatóval való szerződés felülvizsgálatát vagy megszüntetését.",
          "iso_27001_ref": "A.5.2; A.5.4",
          "nist_sp_800_53_rev5_ref": "PS-7",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.12",
          "control_title": "Fegyelmi intézkedések",
          "explanation": "A fegyelmi eljárások lehetséges szankciót az hozzáférési megállapodásokban írják le, és általános személyi biztonsági szabályok részét képezhetik a szervezeteknél vagy meghatározhatók a biztonsági szabályokban. Amikor fegyelmi eljárás kerül megindításra, az érintett szervezet meghatározott időn belül értesíti a szervezet által meghatározott személyeket vagy szerepköröket. Az értesítésben azonosítják az eljárás alá vont személyt és az eljárás okát. Fontos, hogy az érintett szervezetben mindenki tisztában legyen azzal, hogy az EIR szabályok és eljárások megsértése komoly következményekkel járhat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek létre kell hoznia a fegyelmi eljárás intézményét saját magán belül, amelyet alkalmaznak azokkal az egyénekkel szemben, akik nem tartják be az EIR biztonsági szabályokat és eljárásokat. Ez a fegyelmi eljárás összhangban van a szervezetre vonatkozó, hatályos jogszabályokkal, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal.\n2. A szervezetnek be kell építenie a szankciók folyamatát a hozzáférési megállapodásokba, és ezeket a szankciókat be kell foglalni a szervezet általános személyi szabályzataiba és/vagy a szervezet információbiztonsági szabályzataiba.\n3. A szervezetnek dokumentálnia kell a fegyelmi eljárásokat, beleértve az érintett személyeket, az eljárás okát és az értesítés időpontját. Ez a napló segít az érintett szervezetnek nyomon követni és értékelni a fegyelmi eljárások hatékonyságát.",
          "iso_27001_ref": "7.3; A.6.4",
          "nist_sp_800_53_rev5_ref": "PS-8",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "14.13",
          "control_title": "Munkaköri leírások",
          "explanation": "A biztonsági szerepkörök meghatározása az egyes szervezeti munkaköri leírásokban elősegíti a szerepkörökkel kapcsolatos biztonsági felelősségek, valamint a szerepkör alapú biztonsági képzési követelmények megértését. Az érintett szervezetnek fontos, hogy a munkaköri leírásokban tisztázza a biztonsági szerepköröket és felelősségeket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a biztonsági szerep- és felelősségi köröket, amelyek szükségesek a szervezeti vagyon, személyek és EIR biztonságának megőrzéséhez.\n2. A szervezetnek bele kell foglalja ezeket a szerep- és felelősségi köröket a szervezeti munkaköri leírásokba. Ez magában foglalja a munkaköri leírások frissítését, hogy tükrözzék a biztonsági szerep- és felelősségi köröket, valamint az új munkaköri leírások létrehozását, ha szükséges.\n3. A szervezetnek biztosítania kell, hogy minden alkalmazott, aki biztonsági szerepkörben dolgozik, megfelelő képzést kapjon. Ez magában foglalhatja a biztonsági szabályzatok és eljárásrendek, az EIR használatának legjobb gyakorlatai, a naplózás és a biztonsági események kezelésének képzését, de külső képzéseket is.\n4. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a munkaköri leírásokat, hogy biztosítsa azok naprakészségét, valamint hogy tükrözzék a jelenlegi biztonsági szerep- és felelősségi köröket. Ez magában foglalhatja a munkaköri leírások éves felülvizsgálatát, vagy amikor jelentős változások történnek az EIR-ben vagy a biztonsági környezetben.\n5. A szervezetnek dokumentálnia kell a biztonsági szerep- és felelősségi körökkel kapcsolatos tevékenységeket, hogy bizonyítékot szolgáltasson a megfelelőségről és segítse az esetleges biztonsági problémák azonosításában és kezelésében.",
          "iso_27001_ref": "A.5.2",
          "nist_sp_800_53_rev5_ref": "PS-9",
          "requirement_family": "14",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "14.1",
        "14.2",
        "14.3",
        "14.5",
        "14.8",
        "14.9",
        "14.11",
        "14.12",
        "14.13"
      ],
      "cost_band": "B0",
      "days_to_target": 6,
      "deadline_bucket": "DUE_7_DAYS",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "15.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A kockázatkezelési szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a kockázatkezelési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a kockázatkezelési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a kockázatkezelési szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális kockázatkezelési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "RA-1",
          "requirement_family": "15",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "15.2",
          "control_title": "Biztonsági osztályba sorolás",
          "explanation": "A biztonsági osztályok leírják a szervezeti működésre, a szervezeti eszközökre és az egyénekre gyakorolt ​​lehetséges káros hatásokat vagy negatív következményeket, ha a szervezeti információ és rendszerek a bizalmasság, a sértetlenség vagy a rendelkezésre állás elvesztése miatt veszélybe kerülnek. A szervezetek a biztonsági osztályozásba sorolási folyamatot az egész szervezetre kiterjedően végzik, közvetlenül bevonva az informatikai felelősöket, az információbiztonsági felelősöket, a rendszerek tulajdonosait, az üzleti- és ügymeneti folyamatok felelőseit, valamint az adatgazdákat. A szervezetek figyelembe veszik a lehetséges hatásokat más szervezetekre nézve, valamint ha releváns, akkor a nemzetbiztonsági hatásokkal is számolni kell a szervezetre vonatkozó, hatályos jogszabályokkal, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal összhangban. A biztonsági osztályba sorolás elősegíti a EIR(-ek) rendszerelem leltárának fejlesztését, azzal, hogy rendszerelemeket rendel az információk feldolgozásához, tárolásához és továbbításához, valamint megjeleníti az ezekhez kapcsolódó biztonsági követelményt rendszerelem leltárra vonatkozó követelménnyel együtt. A biztonsági osztálybasorolást a rendszerfejlesztési életciklus során a szervezet felülvizsgálja annak biztosítása érdekében, hogy a biztonsági osztálybasorolás pontos és releváns maradhasson.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztonsági osztályba kell sorolnia az EIR-t.\n2. A biztonsági osztályba sorolás eredményeit dokumentálnia kell a rendszerbiztonsági tervben, beleértve az azt alátámasztó indoklást is. Ez azt jelenti, hogy az érintett szervezetnek részletesen le kell írnia, hogy milyen potenciális káros hatásokat vett figyelembe, és hogy ezek alapján milyen biztonsági osztályba sorolta az EIR-t.\n3. A szervezet vezetőjének vagy meghatalmazott képviselőjének jóvá kell hagynia a biztonsági osztályba sorolási döntést. A biztonsági osztályba sorolást szervezeti szinten kell végrehajtani, az információbiztonsági felelős(ök), az adatvédelmi tisztviselő(k), az EIR tulajdonosok, az alapfeladatok és üzleti folyamatok tulajdonosai, valamint az adatgazdák közvetlen bevonásával.\n4. A szervezetnek az EIR fejlesztési életciklusa során rendszeresen felül kell vizsgálnia a biztonsági osztályba sorolást, hogy biztosítsa a biztonsági osztályok pontosságát és relevanciáját.",
          "iso_27001_ref": "A.5.12",
          "nist_sp_800_53_rev5_ref": "RA-2",
          "requirement_family": "15",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "15.4",
          "control_title": "Kockázatelemzés",
          "explanation": "A kockázatértékelések figyelembe veszik a fenyegetéseket, a sérülékenységeket, a káresemények bekövetkezésének valószínűségét, valamint a szervezet működésére és eszközeire, az egyénekre, más szervezetekre és a nemzetre gyakorolt hatásokat. A kockázatértékelések a külső felek által jelentett kockázatokat is figyelembe veszik, beleértve a szervezet által megbízott, rendszereket üzemeltető vállalkozókat, a szervezeti rendszerekhez hozzáféréssel rendelkező személyeket, a szolgáltatókat és a kiszervezett tevékenységeket.\nA szervezetek a kockázatkezelési hierarchia mindhárom szintjén [azaz a szervezet szintjén, a célok és üzleti (ügymeneti) folyamatok szintjén vagy az EIR szintjén] és a rendszerfejlesztési életciklus bármely szakaszában végezhetnek kockázatértékelést. A kockázatértékeléseket a kockázatkezelési keretrendszer különböző lépéseiben is el lehet végezni, beleértve az előkészítést, a kategorizálást, a biztonsági követelmények kiválasztását, a biztonsági intézkedések végrehajtását, a biztonsági követelmények és intézkedések értékelését, az engedélyezést és a felügyeletet. Fontos, hogy a kockázatértékelés folyamatos tevékenység, melyet a rendszerfejlesztési életciklus során rendszeresen el kell végezni.\nA kockázatértékelések a rendszerrel kapcsolatos információkkal is foglalkozhatnak, beleértve a rendszertervet, a rendszerbiztonsági tervet, a rendszer tervezett felhasználását, a tesztelési eredményeket és az ellátási lánchoz kapcsolódó információkat vagy vagyontárgyakat. A kockázatértékelések fontos szerepet játszhatnak a biztonsági követelmények kiválasztásában, különösen a testreszabás alkalmazása során és a képességek meghatározásának legkorábbi szakaszaiban.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek rendszer szintű kockázatértékelést kell végeznie, amely magába foglalja az EIR-re vonatkozó fenyegetések és sérülékenységek azonosítását, melyben megállapítja a jogosulatlan hozzáférés, használat, közzététel, zavarás, módosítás vagy az EIR megsemmisítésének valószínűségét és káros hatásait, valamint az általa feldolgozott, tárolt vagy továbbított információkra és minden kapcsolódó információra vonatkozóan. Meg kell állapítania továbbá a személyes adatok feldolgozásából eredő, egyénekre vetített kedvezőtlen hatások valószínűségét és mértékét.\n2. A szervezetnek össze kell hangolnia a szervezet, a szervezeti célok vagy alapfunkciók szempontjából végzett kockázatértékelés eredményeit és a kockázatkezelési döntéseket az EIR szintű kockázatértékelésekkel.\n3. A szervezetnek dokumentálnia kell a kockázatértékelés eredményeit a kockázatértékelési jelentésben és a szervezet által meghatározott dokumentumokban.\n4. A szervezetnek gondoskodnia kell róla, hogy a kockázatértékelés eredményeit a meghatározott személyekkel vagy szerepkörökkel megismertesse.\n5. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia és frissítenie kell a kockázatértékelést, továbbá minden olyan esetben, amikor jelentős változások történnek az EIR-ben, annak működési környezetében, vagy más olyan körülményekben, amelyek befolyásolhatják az EIR biztonsági állapotát.",
          "iso_27001_ref": "6.1.2; 8.2; 9.3.2; A.8.8",
          "nist_sp_800_53_rev5_ref": "RA-3",
          "requirement_family": "15",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "15.5",
          "control_title": "Kockázatelemzés – Ellátási lánc",
          "explanation": "Az ellátási láncra vonatkozó események közé tartozik a működési zavar, hibás eszközök vagy alkatrészek használata, hamis eszközök beszerzése és rendszerbe illesztése, lopás, rosszindulatú fejlesztési gyakorlatok, helytelen szállítási gyakorlatok és kártékony kódok rendszerbe jutása. Ezek az események jelentős hatással lehetnek egy EIR és annak információinak bizalmasságára, sértetlenségére vagy rendelkezésre állására, és ezért kedvezőtlenül befolyásolhatják a szervezet működését, a szervezet eszközeit, az egyéneket, más szervezeteket és a nemzetet. Az ellátási láncra vonatkozó események szándékosak vagy véletlenek is lehetnek, és bármikor bekövetkezhetnek az EIR életciklusa során. Az ellátási lánc kockázatának elemzése segíthet az érintett szervezetnek azonosítani azokat az EIR-eit vagy rendszerelemeket, amelyeknél további ellátási lánc kockázatcsökkentő intézkedések szükségesek.\nAz érintett szervezetnek rendszeresen frissítenie kell az ellátási lánc kockázatértékelését, különösen akkor, ha jelentős változások történnek az érintett ellátási láncban, vagy amikor az EIR, a működési környezet vagy más körülmények változása esetén szükségessé válhat az ellátási lánc megváltoztatása. A megfelelően részletes dokumentáció vezetése segít az érintett szervezetnek nyomon követni az ilyen változásokat és időben reagálni rájuk.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek fel kell mérnie az ellátási lánc kockázatait az EIR-ei, rendszerelemei és rendszerszolgáltatásai szempontjából.\n2. A szervezetnek meg kell határoznia, hogy mely EIR-ek vagy rendszerelemek esetében szükségesek további ellátási lánc kockázatcsökkentő intézkedések. Ez az elemzés segíthet az érintett szervezetnek azonosítani azokat az EIR-eket, amelyeknél nagyobb a kockázat.\n3. A szervezetnek rendszeresen frissítenie kell az ellátási lánc kockázatértékelését. Ez különösen fontos, amikor jelentős változások történnek az érintett ellátási láncban, vagy amikor az EIR, a működési környezet vagy más körülmények változása esetén szükségessé válhat az ellátási lánc megváltoztatása.\n4. A szervezetnek folyamatosan dokumentálnia kell az ellátási lánc kockázatértékelését és annak változásait.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "RA-3(1)",
          "requirement_family": "15",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "15.20",
          "control_title": "Kockázatokra adott válasz",
          "explanation": "Az érintett szervezetnek számos lehetősége van a kockázatokra reagálni, beleértve a kockázat csökkentését új biztonsági követelmények bevezetésével, illetve a meglévő védelmi intézkedések megerősítésével. A kockázat megfelelő indoklással elfogadható, csökkenthető, megosztható vagy átadható, illetve megszüntethető. A szervezet kockázattűrő képessége befolyásolja a kockázatra adott válaszokat és intézkedéseket. A kockázatra adott válasz sorána  szervezet megfelelő választ igyekszik adni a kockázatra azt megelőzően, mielőtt intézkedési tervet hozna létre és ahhoz kapcsolódó mérföldköveket határozna meg. A válasz lehet a kockázat elfogadása vagy annak megszüntetése, illetve az is lehetséges, hogy a szervezet döntése alapján a kockázatot azonnal csökkenteni kell, így nem szükséges intézkedési tervet létrehozni és ahhoz kapcsolódó mérföldköveket meghatározni. Azonban, ha a szervezet a kockázatra a kockázat csökkentésével válaszol, és az nem végezhető el azonnal, akkor létre kell hozni egy intézkedési tervet és meg kell határozni az ahhoz kapcsolódó mérföldköveket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a kockázatkezelési szabályait.\n2. A szervezetnek a kockázatkezelési szabályokkal összhangban reagálnia kell biztonsági értékelések, ellenőrzések és vizsgálatok megállapításaira.\n3. A szervezetnek el kell döntenie, hogy milyen választ ad a felmerült kockázatokra. A szervezet a megfelelő indoklással elfogadhatja, csökkentheti, megoszthatja vagy átadhatja, illetve meg is szüntetheti a kockázatokat.\n4. A szervezet a kockázatkezelésre adott válasz eredményeként új biztonsági követelményeket is bevezethet vagy akár a meglévő védelmi intézkedéseket is erősítheti.\n5. Amennyiben a szervezet a kockázat csökkentése mellett dönt és nem képes azt azonnal kivitelezni, akkor létre kell hoznia ehhez kapcsolódóan egy intézkedési tervet és meg kell határoznia az ahhoz kapcsolódó mérföldköveket.\n6. A szervezetnek dokumentálnia kell a kockázatkezelési folyamatot.",
          "iso_27001_ref": "6.1.3; 8.3; 10.2",
          "nist_sp_800_53_rev5_ref": "RA-7",
          "requirement_family": "15",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "15.1",
        "15.2",
        "15.4",
        "15.5",
        "15.20"
      ],
      "cost_band": "B0",
      "days_to_target": -9,
      "deadline_bucket": "OVERDUE",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "13.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A biztonságtervezési szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a biztonságtervezési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a biztonságtervezési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a biztonságtervezési szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális biztonságtervezési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "PL-1",
          "requirement_family": "13",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "13.2",
          "control_title": "Rendszerbiztonsági terv",
          "explanation": "A rendszerbiztonsági terv a meghatározott hatókörön belüli EIR-re és annak rendszerelemeire terjed ki, és tartalmazza a rendszer biztonsági követelményeinek áttekintését, valamint a követelmények teljesítéséhez kiválasztott intézkedéseket. A tervek leírják minden egyes kiválasztott intézkedés tervezett alkalmazását az EIR-rel összefüggésben, kellő részletességgel ahhoz, hogy az intézkedéseket helyesen lehessen végrehajtani, és ezt követően értékelni lehessen azok hatékonyságát. A dokumentáció leírja a rendszerspecifikus és hibrid intézkedések végrehajtásának módját, valamint az EIR működésére vonatkozó terveket és elvárásokat. A rendszerbiztonsági terv a rendszerek tervezése és fejlesztése során is felhasználható az életciklus-alapú biztonsági tervezési folyamatok támogatására. A rendszerbiztonsági terv egy élő dokumentum, amelyet a szervezet a rendszerfejlesztési életciklus során folyamatosan frissít és fejleszt.\nAz érintett szervezet kidolgozhat egyetlen integrált rendszerbiztonsági tervet, vagy fenntarthat külön EIR-ekre külön terveket. A rendszerbiztonsági terv a biztonsági követelményeket egy sor intézkedéshez és intézkedés-fejlesztéshez kapcsolja. A terv leírja, hogy az intézkedések és az intézkedés-fejlesztések hogyan felelnek meg a biztonsági követelményeknek, de nem tartalmaz részletes, technikai leírást az intézkedések és az intézkedés-fejlesztések kialakításáról vagy végrehajtásáról. A rendszerbiztonsági terv elegendő információt tartalmaz (beleértve a biztonsági követelmények kiválasztásának és egyes funkciókhoz való hozzárendelésének kifejezett vagy hivatkozással történő meghatározását) ahhoz, hogy lehetővé tegye a terv szándékának egyértelműen megfelelő tervezést és végrehajtást, valamint a terv végrehajtása során a szervezeti műveletekre és eszközökre, egyénekre, más szervezetekre és a nemzetre vonatkozó kockázatok későbbi meghatározását.\nA rendszerbiztonsági tervnek nem szükségszerűen egyetlen dokumentum. A terv különböző dokumentumok gyűjteménye is lehet, beleértve a már létező dokumentumokat is. A hatékony munkát támogató rendszerbiztonsági terv(ek)et széleskörűen tartalmaz az irányelvekre, eljárásokra és további dokumentumokra való hivatkozásokat. A rendszerbiztonsági terveknek nem kell részletes üzletmenet folytonossági tervekkel vagy biztonsági eseménykezelési tervekkel kapcsolatos információkat tartalmazniuk, hanem ehelyett - kifejezetten vagy hivatkozással - elegendő információt nyújthatnak annak meghatározásához, hogy mit kell megvalósítaniuk ezeknek a terveknek.\nA tervezés és a koordináció kiterjed a vészhelyzetekre és a nem vészhelyzetekre (azaz a tervezett vagy nem sürgős, nem tervezett helyzetekre). Az érintett szervezetek által a biztonsággal kapcsolatos tevékenységek tervezésére és koordinálására meghatározott folyamatot adott esetben más dokumentumok is tartalmazhatják.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia egy rendszerbiztonsági tervet.\n2. A szervezetnek gondoskodnia kell arról, hogy a terveket a jóváhagyó felelős áttekinti és jóváhagyja a terv végrehajtása előtt.\n3. A szervezetnek gondoskodnia kell arról, hogy a rendszerbiztonsági tervet a meghatározott személyek és szerepkörök megismerjék.\n4. A szervezetnek az általa meghatározott gyakorisággal vagy a meghatározott változások és/vagy események bekövetkezése, vagy probléma felmerülése esetén felül kell vizsgálnia és szükség esetén frissítenie a rendszerbiztonsági tervet.\n5. A szervezetnek gondoskodnia kell arról, hogy a rendszerbiztonsági terv jogosulatlanok számára ne legyen megismerhető vagy módosítható.",
          "iso_27001_ref": "7.5.1; 7.5.2; 7.5.3; 10.2; A.5.8; A.5.34",
          "nist_sp_800_53_rev5_ref": "PL-2",
          "requirement_family": "13",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "13.3",
          "control_title": "Viselkedési szabályok",
          "explanation": "A viselkedési szabályok egyfajta hozzáférési megállapodást jelentenek a szervezeti felhasználók számára. A hozzáférési megállapodások egyéb típusai közé tartoznak a titoktartási megállapodások, az összeférhetetlenségi megállapodások és az elfogadható használati megállapodások. A szervezetek a viselkedési szabályokat az egyes felhasználói szerepkörök és felelősségi körök alapján mérlegelik, és különbséget tesznek a privilegizált felhasználókra és az általános felhasználókra vonatkozó szabályok között. A nem szervezeti felhasználók bizonyos típusaira - beleértve az állami EIR-ekből információt kapó személyeket - vonatkozó viselkedési szabályok megállapítása gyakran nem kivitelezhető, tekintettel az ilyen felhasználók nagy számára és a rendszerekkel való interakcióik korlátozott jellegére. A szervezeti és nem szervezeti felhasználókra vonatkozó viselkedési szabályokat a \"rendszerhasználat jelzése\" biztonsági követelmény alapján lehet megállapítani. A kapcsolódó követelmények szakasz a szervezeti viselkedési szabályok szempontjából releváns ellenőrzések listáját tartalmazza. A \"viselkedési szabályok\" című követelmény meghatározott dokumentált tudomásulvételi részhez tartozik, az érintett szervezetek által végzett biztonságtudatossági képzés, valamint szerepkör alapú képzési programok által teljesíthető, ha az ilyen képzés tartalmazza a viselkedési szabályokat. A magatartási szabályok dokumentált elismerése magában foglalja az elektronikus vagy fizikai aláírásokat és az elektronikus egyetértési jelölőnégyzeteket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell fogalmaznia és dokumentálnia kell az EIR-hez hozzáférési jogosultságot igénylő személyekkel, felhasználókkal szembeni elvárásokat, a rájuk vonatkozó szabályokat, felelősségüket, az EIR-hez kapcsolódó kötelezően elvárt vagy tiltott tevékenységet. Ezt az információt az érintett szervezeten belül ki kell hirdetni.\n2. A szervezetnek dokumentált nyilatkozattételre kell köteleznie a hozzáférési jogosultságot igénylő személyt, felhasználót, mielőtt hozzáférést engedélyezne az EIR-hez. A felhasználónak nyilatkozatával igazolnia kell, hogy megismerte és saját felelősségére betartja az EIR használatához kapcsolódó biztonsági szabályokat és kötelezettségeket.\n3. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia és frissítenie kell az EIR-hez hozzáférési jogosultságot igénylő személyekkel, felhasználókkal szembeni elvárásokat, a rájuk vonatkozó szabályokat, felelősségüket, az EIR-hez kapcsolódó kötelezően elvárt vagy tiltott tevékenységet, a viselkedési szabályok betartását.\n4. A szervezetnek gondoskodnia kell arról, hogy a viselkedési szabályok korábbi változatát elismerő személyek elolvassák és újra dokumentált nyilatkozattételt tegyenek a viselkedési szabályok elfogadásáról, azok felülvizsgálata vagy frissítése esetén.\n5. A szervezetnek dokumentálnia kell a fenti tevékenységeket, hogy bizonyíthassa a követelményeknek való megfelelést.",
          "iso_27001_ref": "A.5.4; A.5.10; A.6.2",
          "nist_sp_800_53_rev5_ref": "PL-4",
          "requirement_family": "13",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "13.4",
          "control_title": "Viselkedési szabályok – Közösségi média és külső webhelyek, alkalmazások használatára vonatkozó korlátozások",
          "explanation": "A vislekedési szabályoknak ki kell terjedniük a közösségi média, a közösségi hálózatok és a külső webhelyek/alkalmazások használatára vonatkozó korlátozásokra. Abban az esetben, ha egy szervezethez köthető személy ezeket használja hivatalos feladatának ellátására vagy hivatalos ügyek intézésére a közösségi médiával és a közösségi hálózatokkal kapcsolatos hálózati üzenetváltásban szervezeti információk vesznek részt, mert az adott személy(ek) a közösségi médiához és a webhelyekhez a szervezeti EIR-en keresztül fér hozzá. Az érintett szervezetek olyan specifikus szabályokkal is foglalkoznak, amelyek megakadályozzák, hogy illetéktelen entitások közvetlenül vagy következtetés útján nem nyilvános szervezeti információkhoz jussanak a közösségi média és egyéb oldalakról. A nem nyilvános információk közé tartoznak például a személyazonosításra alkalmas információk és a rendszerfiókok adatai.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek be kell építenie a viselkedési szabályzatába a közösségi média, közösségi oldalak és külső oldalak, valamint alkalmazások használatának korlátozásait. Ez magában foglalja a személyzet számára adott utasításokat arra vonatkozóan, hogy mikor és hogyan használhatják ezeket az oldalakat és alkalmazásokat hivatalos feladatok ellátása vagy hivatalos üzleti tevékenység során.\n2. A szervezetnek korlátoznia kell a szervezeti információk közzétételét nyilvános weboldalakon. Ez azt jelenti, hogy a szervezetnek meg kell határoznia, milyen információk tekinthetők nyilvánosnak, és milyen információk bizalmasak.\n3. A szervezetnek korlátoznia kell az EIR által biztosított azonosító és hitelesítő adatok használatát külső weboldalakon, illetve alkalmazásokban való fiókok létrehozásakor. Ez azt jelenti, hogy a szervezetnek meg kell határoznia, milyen adatokat használhatnak a személyzet tagjai külső weboldalakon vagy alkalmazásokban történő fióklétrehozás során.\n4. A szervezetnek dokumentálnia kell a fenti korlátozásokat, és rendszeresen ellenőriznie kell, hogy a személyzet betartja-e ezeket a szabályokat. Dokumentálnia kell minden esetet, amikor a szervezethez köthető személy(ek) megsérti ezeket a szabályokat, és megfelelő intézkedéseket kell hozni a jövőbeni szabálysértések megelőzése érdekében.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "PL-4(1)",
          "requirement_family": "13",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "13.11",
          "control_title": "Biztonsági követelmények testre szabása",
          "explanation": "A testreszabás lehetővé teszi a szervezetek számára, hogy a testreszabási folyamatok segítségével magukra szabják a vonatkozó követelményeket vagy egy részüket. A testreszabás megkönnyíti az ilyen specializálást, mivel lehetővé teszi a szervezetek számára, hogy olyan biztonsági követelményeket, intézkedéseket és folyamatokat dolgozzanak ki, amelyek tükrözik sajátos céljukat és üzleti (ügymeneti) funkcióikat, a környezetet, amelyben a rendszereik működnek, a rendszereiket érintő fenyegetéseket és sérülékenységeket, valamint bármely más olyan körülményt vagy helyzetet, amely hatással lehet a céljukra vagy működésükre.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia és dokumentálnia kell a szervezeti biztonsági követelményeket. A szervezetnek figyelembe kell vennie a hatókörbe tartozó szempontokat. Ez azt jelenti, hogy az érintett szervezetnek figyelembe kell vennie az EIR környezetét, ahol működik, és annak specifikus igényeit.\n2. A szervezetnek - amennyiben ez szükséges - ki kell választania a kiegészítő védelmi intézkedéseit. Ezek olyan biztonsági intézkedések, amelyeket akkor alkalmaznak, ha egy meglévő biztonsági védelmi intézkedés nem alkalmazható vagy nem hatékony.\n3. A szervezetnek további biztonsági követelményeket kell kidolgoznia és bevezetnie, amennyiben ezt szükségesnek ítéli.\n6. A szervzeetnek dokumentálnia kell a bevezetett és működő biztonsági követelményeket, hogy később értékelhesse azok hatékonyságát.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "PL-11",
          "requirement_family": "13",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "13.1",
        "13.2",
        "13.3",
        "13.4",
        "13.11"
      ],
      "cost_band": "B0",
      "days_to_target": 6,
      "deadline_bucket": "DUE_7_DAYS",
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
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "16.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A beszerzési szabályzat és eljárások a Beszerzések  követelménycsoportba tartozó védelmi intézkedésekkel foglalkoznak, amelyek az EIR-ekben, illetve a szervezetekben bevezetésre kerülnek. A kockázatkezelési stratégia fontos tényező az ilyen szabályok és eljárások létrehozásában. A szabályok és eljárások hozzájárulnak a biztonság garantálásához. Ezért fontos, hogy a szervezet információbiztonsági szabályozási környezete és a beszerzési szabályzat és eljárások összhangban legyenek egymással. A szervezeti szintű biztonsági szabályzatok és eljárásrendek általában előnyösebbek, és szükségtelenné tehetik a működési célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásokat. A szabályokat be lehet illeszteni az általános biztonsági szabályzatba, vagy több szabályzatban is megjelenhetnek, amelyek tükrözik az érintett szervezetek összetett természetét. Eljárásokat létre lehet hozni az információbiztonsági irányítási rendszer, a működési és üzleti célok, és az EIR-ek támogatására, amennyiben azok szükségesek. Az eljárások leírják, hogy hogyan valósulnak meg a szabályok vagy a védelmi intézkedések, és hogyan vonatkoznak az eljárás tárgyát képező egyénre vagy szerepkörre. Az eljárásokat dokumentálhatják a rendszerbiztonsági tervekben, vagy egy vagy több külön dokumentumban. A beszerzési szabályzat és eljárások frissítését kiváltó események lehetnek értékelési vagy audit megállapítások, biztonsági események, vagy változások az alkalmazandó jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. Az elvárt védelmi intézkedések egyszerű újra közlése nem minősülhet szervezeti szabályzatnak vagy eljárásnak.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia, dokumentálnia, kiadnia és megismertetnie a szervezet által meghatározott személyekkel szerepkörük szerint a szervezeti-, folyamat és EIR-szintű követelményeket tartalmazó beszerzési szabályzatot.\n2. A beszerzési szabályzat meghatározza a célkitűzéseket, a hatókört, a szerepköröket, a felelősségeket, a vezetői elkötelezettséget, az érintett szervezeten belüli együttműködés kereteit és a megfelelőségi kritériumokat.\n3. A beszerzési szabályzat összhangban van az érintett szervezetre vonatkozó, hatályos jogszabályokkal, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal.\n4. A szervezetnek ki kell dolgoznia a beszerzési eljárásrendet, amely a beszerzési szabályzat és az ahhoz kapcsolódó követelmények megvalósítását segíti elő.\n5. A szervezetnek ki kell jelölnie egy, a szervezet által meghatározott személyt, aki a beszerzési szabályzat és eljárások kidolgozásának, dokumentálásának, kiadásának és megismertetésének irányításáért felel.\n6. A szervezetnek felül kell vizsgálnia és frissítenie kell az aktuális beszerzési szabályzatot és a beszerzési eljárásokat és eljárásrendet a szervezet által meghatározott gyakorisággal és a szervezet által meghatározott események bekövetkezését követően.\nEsemények, amelyek felülvizsgálatot és frissítést követelhetnek meg lehetnek például audit megállapítások, biztonsági események vagy jogszabályi változások.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; 8.1; A.5.1; A.5.2; A.5.4; A.5.23; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "SA-1",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "16.2",
          "control_title": "Erőforrások rendelkezésre állása",
          "explanation": "Az információbiztonság érdekében történő erőforrás tervezés magában foglalja a rendszerrel és rendszerszolgáltatásokkal kapcsolatos beszerzést, fenntartást és az ellátási lánccal kapcsolatos kockázatokat a rendszer fejlesztési életciklusban.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek az üzletmenet és alapfunkciók tervezése során meg kell határoznia az EIR vagy rendszerszolgáltatás magas szintű információbiztonsági követelményeit. Ez magában foglalja a kockázatkezelési stratégiák, a biztonsági szabályok és eljárások, valamint a biztonsági technológiák meghatározását.\n2. A szervezetnek biztosítania kell az EIR és annak szolgáltatásai védelméhez szükséges erőforrásokat, a beruházás tervezés részeként. Ez magában foglalja a szükséges pénzügyi forrásokat, a személyzetet és a technológiai eszközöket.\n3. A szervezetnek elkülönített tételként kell kezelnie az EIR-ek biztonságát a beruházás tervezési dokumentumaiban. Ez azt jelenti, hogy a biztonsági költségeket külön kell kezelni a többi költségtől, és külön költségvetési tételként kell szerepeltetni.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SA-2",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "16.3",
          "control_title": "A rendszer fejlesztési életciklusa",
          "explanation": "A jól definiált rendszerfejlesztési életciklusok alapját képezik a szervezeti információs rendszerek sikeres fejlesztésének, megvalósításának és üzemeltetésének. A szükséges biztonsági követelmények alkalmazása a rendszerfejlesztési életciklus során az információbiztonság, a fenyegetések, sérülékenységek, kedvezőtlen hatások és kritikus üzleti célok/üzleti funkciók kockázatainak alapvető megértését igényli. A követelmény alapján kialakítandó biztonsági tervezés alapelvei nem alkalmazhatók megfelelően, ha a szakértők, akik az EIR-eket és a rendszerelemeket tervezik, fejlesztik és tesztelik, nem értik a biztonsági elvárásokat. Ezért a szervezetek képzett munkatársakat, például információbiztonsági szakértőket, biztonsági architektúra tervezőket, biztonságtechnikai mérnököket és információbiztonsági felelőst alkalmaznak a rendszerfejlesztési életciklus megvalósításához. A biztonsági követelmények a szervezeti architektúrába történő hatékony implementálása segít annak biztosításában is, hogy a fontos biztonsági szempontok a rendszer teljes életciklusa során érvényesüljenek, és hogy ezek a megfontolások közvetlenül kapcsolódjanak a szervezeti működési célokhoz és az üzleti folyamatokhoz. Ez a folyamat megkönnyíti továbbá az információbiztonsági architektúrák integrálását a szervezeti architektúrába, összhangban a szervezet kockázatkezelési stratégiájával. Mivel egy rendszerfejlesztési életciklusban több szervezet is részt vesz (pl. külső beszállítók, fejlesztők, integrátorok, szolgáltatók), a beszerzési és ellátási lánc kockázatkezelési funkciói és intézkedései jelentős szerepet játszanak az EIR hatékony felügyeletében, annak teljes életciklusa alatt.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia és dokumentálnia az információbiztonsági szerepköröket és felelősségeket az EIR fejlesztési életciklusa során. Ez magában foglalja a szükséges személyek bevonását is az EIR fejlesztési életciklusába, hogy biztosítsák a meghatározott biztonsági követelmények beépítését az EIR-be.\n2. A szervezetnek azonosítania kell azokat a személyeket, akik rendelkeznek információbiztonsággal kapcsolatos felelősségi körökkel. Ez magában foglalja a szerepkör-alapú biztonsági képzési programok biztosítását is, hogy a kulcsfontosságú biztonsági szerepkörökkel és felelősségekkel rendelkező személyek rendelkezzenek a szükséges tapasztalattal, készségekkel és szakértelemmel a rendszerfejlesztési életciklus tevékenységeinek végrehajtásához.\n3. Az érintett szervezetnek be kell építenie az információbiztonsági kockázatkezelési folyamatot a rendszerfejlesztési életciklus tevékenységeibe. Ez magában foglalja a biztonsági követelmények beépítését a vállalati architektúrába, hogy biztosítsák a releváns biztonsági szempontok figyelembevételét az EIR életciklusa során, és hogy ezek a szempontok közvetlenül kapcsolódjanak az érintett szervezet céljaihoz és üzleti folyamataihoz.\n4. Mivel a rendszerfejlesztési életciklus több szervezetet is érint, az érintett szervezetnek figyelembe kell vennie a beszerzési és ellátási lánc kockázatkezelési funkcióit és intézkedéseit az rendszeréletciklusa során történő hatékony kezelés érdekében.\n5. A szervezetnek figyelemmel kell kísérnie az EIR információbiztonsági helyzetét az EIR teljes életútján, minden életciklusában. Ez magában foglalja a naplózást és a rendszeres ellenőrzéseket is, hogy biztosítsák az EIR információbiztonsági állapotának megfelelőségét.",
          "iso_27001_ref": "A.5.2; A.5.8; A.8.25; A.8.31",
          "nist_sp_800_53_rev5_ref": "SA-3",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "16.7",
          "control_title": "Beszerzések",
          "explanation": "Az érintett szervezet a beszerzési folyamat során - beleértve az EIR fejlesztését, adaptálását, követését és karbantartását - a szerződéseiben egységes nyelvezetet alkalmaz, továbbá követelményként rögzíti az alábbiakat:\nFunkcionális biztonsági követelmények: Ezek általában magas szintű biztonsági követelményekből származnak. A levezetett követelmények magukban foglalják a biztonsági képességeket, funkciókat és mechanizmusokat.\nA mechanizmusok erősségére vonatkozó követelmények: Ezek magukban foglalják a helyesség, teljesség, manipuláció vagy megkerülés elleni ellenállás, valamint a közvetlen támadás elleni ellenállás mértékét.\nA biztonság garanciális követelményei: Ezek magukban foglalják a fejlesztési folyamatokat, eljárásokat és módszertanokat, valamint a fejlesztési és értékelési tevékenységekből származó bizonyítékokat, amelyek bizonyosságot nyújt arra, hogy a szükséges funkcionalitás megvalósításra került, és rendelkezik a szükséges erősségű mechanizmusokkal. Az EIR biztonsági osztályát és az ahhoz tartozó, illetve az érintett szervezet által meghatározott további biztonsági követelmények teljesítéséhez szükséges védelmi intézkedések: Ezek a biztonsági célok eléréséhez szükséges biztonsági képességek leírásait tartalmazzák.\nA biztonsággal kapcsolatos dokumentációs követelmények: Ezek az EIR fejlesztési életciklusának minden szakaszát lefedik. A dokumentáció felhasználói és adminisztrátori útmutatókat biztosít a követelmények megvalósításához és működtetéséhez. A biztonsággal kapcsolatos dokumentumok védelmére vonatkozó követelmények: Ezek az EIR biztonsági osztályában szükséges képességekre, funkciókra vagy mechanizmusokra való függőség mértékén alapulnak. Az EIR fejlesztési környezetére és tervezett üzemeltetési környezetére vonatkozó előírások: Ezek magukban foglalják az EIR, rendszerelemek és rendszerszolgáltatások elfogadási kritériumait. A felelősség megosztását vagy az információbiztonságért és az ellátási lánc kockázatkezeléséért felelős felek azonosítását: Ezek a fejlesztő és a szervezeti felelősségeket tartalmazzák. A teljesítési kritériumok: Ezek az érintett szervezet bármely beszerzési vagy fejlesztési kritériumának meghatározását tartalmazzák.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek egységes nyelvezetet kell alkalmaznia a beszerzési folyamat során.\n2. A szervezetnek szerződésekben rögzítenie kell a funkcionális biztonsági követelményeket, a mechanizmusok erősségére vonatkozó követelményeket, a biztonság garanciális követelményeit, az érintett EIR biztonsági osztályát és az ahhoz tartozó, illetve a szervezet által meghatározott további biztonsági követelmények teljesítéséhez szükséges védelmi intézkedéseket.\n3. A szervezetnek a szerződésekben rögzítenie kell a biztonsággal kapcsolatos dokumentációs követelményeket és a biztonsággal kapcsolatos dokumentumok védelmére vonatkozó követelményeket.\n4. A szervezetnek szerződésekben rögzítenie kell az EIR fejlesztési környezetére és tervezett üzemeltetési környezetére vonatkozó előírásokat.\n5. A szervezetnek a szerződésekben rögzítenie kell a felelősség megosztását vagy az információbiztonságért és az ellátási lánc kockázatkezeléséért felelős felek azonosítását.\n6. A szervezetnek a szerződésekben rögzíteni kell a teljesítési kritériumokat.\n7. A szervezetnek biztosítania kell, hogy a szerződésekben rögzített követelményeket a beszállítók és a fejlesztők is betartsák.\n8. A szervezetnek dokumentálnia kell a szerződésekben rögzített követelmények teljesítését, és rendszeresen ellenőriznie, hogy a követelményeket betartják-e.",
          "iso_27001_ref": "8.1; A.5.8; A.5.20; A.5.23; A.8.29; A.8.30",
          "nist_sp_800_53_rev5_ref": "SA-4",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "16.8",
          "control_title": "Beszerzések – Alkalmazandó védelmi intézkedések funkcionális tulajdonságai",
          "explanation": "Az alkalmazandó védelmi intézkedések funkcionális tulajdonságai leírják a funkcionalitást, amelyek a védelmi intézkedések interfészein láthatók, és kifejezetten kizárják a belső működéshez tartozó funkcionalitást és adatszerkezeteket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek fel kell vennie a kapcsolatot az EIR, rendszerelem vagy rendszerszolgáltatás fejlesztőjével.\n2. A szervezetnek meg kell követelnie a fejlesztőtől, hogy adjon részletes leírást az alkalmazandó védelmi intézkedések funkcionális tulajdonságairól. Ez magában foglalja a biztonsági vagy adatvédelmi képességeket, funkciókat vagy mechanizmusokat, amelyek láthatóak a vezérlők interfészein, és kifejezetten kizárják a vezérlők működésének belső funkcionalitását és adatszerkezeteit.\n3. A szervezetnek gondoskodnia kell arról, hogy a fejlesztő által biztosított információk megfelelőek és kielégítőek. Ha szükséges, a szervezetnek további információkat kell kérnie a fejlesztőtől.\n4. A szervezetnek be kell építenie ezeket a védelmi intézkedéseket az EIR-be, és gondoskodnia kell arról, hogy megfelelően működjenek.\n5. A szervezetnek dokumentálnia kell a folyamatot, beleértve a fejlesztővel folytatott kommunikációt, a kért információkat és a védelmi intézkedések implementálásának folyamatát.\n6. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a védelmi intézkedéseket, hogy biztosítsa az EIR folyamatos biztonságát.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SA-4(1)",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "16.15",
          "control_title": "Az elektronikus információs rendszerre vonatkozó dokumentáció",
          "explanation": "Az EIR-re vonatkozó dokumentáció segít a védelmi intézkedések megvalósításának és működtetésének megértésében. A szervezetek bevezethetnek intézkedéseket a dokumentáció tartalmi minőségének és teljességének javítására. A rendszert leíró dokumentáció felhasználható az ellátási lánc kockázatának, a biztonsági események és egyéb funkciók kezelésének támogatására is. A dokumentációt el kell juttatni az egyes személyeknek vagy szerepköröknek (például a rendszerek tulajdonosai, a rendszerbiztonsági felelős és a rendszergazdák). A dokumentáció beszerezhető a gyártóktól vagy beszállítókkal való kapcsolatfelvétellel és/ vagy a webes kereséssel. Amennyiben kiderül, hogy a dokumentáció beszerzése nem lehetséges, az jelezheti, hogy a rendszer vagy rendszerelem elavult, fejlesztői/gyártói támogatása megszűnt. Ha a dokumentáció nem szerezhető be, a szervezeteknek újra el kell készíteniük, amennyiben az szükséges a védelmi intézkedések végrehajtásához. A dokumentáció védelme arányos a rendszer biztonsági osztályával vagy besorolásával. Az EIR sérülékenységeit tartalmazó dokumentáció magasabb szintű védelmet igényelhet. A biztonságos működésébe beletartozik a rendszer indítása és a működés újraindítása egy kiesés után.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek be kell szereznie, vagy beszerezhetetlenség esetén ki kell dolgoznia az EIR, rendszerelem vagy rendszerszolgáltatás adminisztrátori és üzemeltetői dokumentációját. Ez a dokumentáció tartalmazza az EIR, rendszerelem vagy rendszerszolgáltatás biztonságos konfigurációját, telepítését és üzemeltetését, a biztonsági funkciók hatékony használatát és karbantartását, valamint az ismert sérülékenységeket a konfigurációval és a rendszergazdai vagy privilegizált funkciók használatával kapcsolatban.\n2. A szervezetnek be kell szereznie, vagy beszerezhetetlenség esetén ki kell dolgozni az EIR, rendszerelem vagy rendszerszolgáltatás felhasználói dokumentációját. Ez a dokumentáció tartalmazza a felhasználók számára elérhető biztonsági funkciókat és mechanizmusokat és ezek hatékony használatának módját, a felhasználói interakció biztonságos módját, valamint a felhasználók felelősségét az EIR, rendszerelem, rendszerszolgáltatás biztonságának fenntartásában.\n3. Amennyiben nem áll rendelkezésre vagy nem létezik adminisztrátori, üzemeltetői és felhasználói dokumentáció, a szervezetnek dokumentálnia kell az EIR, rendszerelem vagy rendszerszolgáltatás dokumentációjának beszerzésére tett kísérleteket, ha szükséges el kell készíteni a dokumentumokat és végre kell hajtania a szervezet által meghatározott intézkedéseket.\n4. A szervezetnek el kell juttatnia a dokumentációkat a szervezet által meghatározott személyeknek vagy szerepköröknek. A dokumentáció védelme arányos az EIR biztonsági osztályával vagy besorolásával. Az EIR sérülékenységeit tárgyaló dokumentáció esetén nagyobb védelmi szintre lehet szükség. Az EIR biztonságos működése magában foglalja az EIR kezdeti indítását és a működés újraindítását egy kiesést követően.",
          "iso_27001_ref": "7.5.1; 7.5.2; 7.5.3; A.5.37",
          "nist_sp_800_53_rev5_ref": "SA-5",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        },
        {
          "basic_applicability": "X",
          "control_ref": "16.99",
          "control_title": "Támogatással nem rendelkező rendszerelemek",
          "explanation": "A rendszerelemek támogatása magában foglalja a szoftverjavításokat, a firmware-frissítéseket, a cserealkatrészeket és a karbantartási szerződéseket. A nem támogatott elemekre példa, amikor a gyártók már nem biztosítanak kritikus szoftverjavításokat vagy termékfrissítéseket, ami lehetőséget adhat a támadóknak a telepített elemek gyengeségeinek kihasználására. A nem támogatott rendszerelemek cseréje alóli kivételek közé tartoznak a kritikus ügymeneti vagy üzleti képességeket biztosító rendszerek, ahol nem állnak rendelkezésre újabb technológiák, vagy ahol az EIR-ek annyira elszigeteltek, hogy a csereelemek telepítése nem lehetséges.\nAz alternatív támogatási források arra az igényre vonatkoznak, hogy folyamatos támogatást nyújtsanak az eredeti gyártók, fejlesztők vagy szállítók által már nem támogatott rendszerelemekhez, amennyiben ezek az elemek továbbra is alapvető fontosságúak a szervezeti ügymeneti és az üzleti funkciók szempontjából. Szükség esetén a szervezetek a kritikus szoftverelemekhez testreszabott javítások kifejlesztésével házon belüli támogatást hozhatnak létre, vagy alternatívaként külső szolgáltatók szolgáltatásait vehetik igénybe, akik szerződéses kapcsolatok révén folyamatos támogatást nyújtanak a kijelölt, nem támogatott elemekhez. Az ilyen szerződéses kapcsolatok közé tartozhatnak a nyílt forráskódú szoftverek értéknövelő szállítói. A nem támogatott rendszerelemek használatának megnövekedett kockázata csökkenthető például az ilyen elemek nyilvános vagy nem ellenőrzött hálózatokhoz való csatlakoztatásának megtiltásával, vagy az elszigetelés más formáinak megvalósításával.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek le kell cserélnie a rendszerelemeket, amikor azok támogatása már nem elérhető a fejlesztőtől, szállítótól vagy gyártótól. Ez magában foglalja a szoftverfrissítéseket, firmware frissítéseket, alkatrész cseréket és karbantartási szerződéseket.\n2. Ha a rendszerelemek támogatása már nem elérhető, és ezek az elemek továbbra is létfontosságúak a szervezet ügymeneti és üzleti funkcióihoz, akkor a szervezetnek alternatív támogatást kell biztosítania.\n3. Az alternatív támogatás biztosítása magában foglalhatja a belső erőforrások használatát, például a kritikus szoftverelemekhez szükséges egyedi javítások kifejlesztését.\n4. Alternatív megoldásként a szervezetnek lehetősége van bevonnia külső szolgáltatókat, akik szerződéses kapcsolatok révén folyamatos támogatást nyújtanak a támogatás nélküli rendszerelemekhez.\n5. A szervezetnek csökkentenie kell a rendszerelemek használatának kockázatát, például azzal, hogy megtiltja ezeknek az elemeknek a nyilvános vagy ellenőrizetlen hálózatokhoz való csatlakozását, vagy más izolációs formákat alkalmaz.\n6. A szervezetnek dokumentálnia kell az összes lépést, hogy bizonyíthassa a kiberbiztonsági követelményeknek való megfelelést.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SA-22",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "16.1",
        "16.2",
        "16.3",
        "16.7",
        "16.8",
        "16.15",
        "16.99"
      ],
      "cost_band": "B0",
      "days_to_target": 21,
      "deadline_bucket": "DUE_30_DAYS",
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
      "control_details": [],
      "control_refs": [],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
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
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.6",
          "control_title": "Biztonsági teljesítmény mérése",
          "explanation": "Az érintett szervezet - az információbiztonsági szervezési intézkedéseire, valamint azok ellenőrzésére vonatkozó hatékonyság növelése érdekében - kifejleszti az EIR-ek biztonsági mérésének rendszerét. A mérési rendszer akkor eredményes, ha az az érintett szervezet kockázatkezelési stratégiájával, továbbá működési és menedzsment céljaival szoros kapcsolatban áll. Egy szofisztikáltan megalkotott, biztonsági teljesítmény mérésére szolgáló program olyan teljesítménymutatókat használ, melyek valós és reprezentatív képet adnak a menedzsment számára az EIR biztonságáról, illetőleg az érintett szervezet által alkalmazott biztonsági irányítási rendszer állapotáról. A biztonsági teljesítménymutatók irányulhatnak például a rendszer állapotára (rendszerfrissítések és azok hatékonysága - rendszerek naprakészsége), irányulhatnak az érintett szervezet kiberbiztonsági rezilienciájára (vírusvédelem hatékonysága, dolgozók biztonságtudatossága - például egy phishing kampánnyal szembeni ellenállása, egy adott képzést követő vizsga eredményei, vagy a felhasználók jelszókezelési szokásai), irányulhatnak többek között a szervezet reakcióidejére (pl. átlagos biztonsági esemény reagálási idő, sérülékenységek felfedése utáni frissítési és hibakezelési eljárási idő), de a rendelkezésre állás monitoring kapcsán is számos teljesítménymutató meghatározható. Gyakori teljesítménymutató továbbá az üzletmenet-folytonosság vonatkozásában az üzletmenet-folytonossági és katasztrófa utáni helyreállítási tesztelés végrehajtási ideje és annak hatékonysága. Az érintett szervezetek függetlenül attól, hogy tanúsítottak-e az ISO/IEC 27001 szabványra, a teljesítménymutatók megfelelő kiválasztása érdekében segítségül hívhatják az ISO/IEC 27004 nemzetközi szabványt.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell fejlesztenie az EIR-re vonatkozó biztonsági mérésének rendszerét.\n2. A szervezetnek folyamatosan monitoroznia kell az általa meghatározott teljesítménymutatókat. Rendszeresen ellenőrizni kell a meghatározott mérőszámokat, és figyelemmel kell kísérni a változásokat. Ez lehetővé teszi a szervezet számára, hogy időben észlelje a potenciális biztonsági problémákat, és megtegye a szükséges lépéseket a kockázatok csökkentése érdekében.\n3. A szervezetnek rendszeresen jelentéseket kell készítenie az EIR biztonsági mérési rendszerének eredményeiről. Ezek a jelentések részletes információkat tartalmaznak a mérőszámok aktuális állapotáról, a változásokról és a potenciális kockázatokról. A jelentések segítenek a szervezetnek a kiberbiztonsági stratégia finomításában, és lehetővé teszik a vezetőség számára, hogy megalapozott döntéseket hozzanak a biztonsági kérdésekben.\n4. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell az EIR biztonsági mérési rendszerét, hogy biztosítsa annak relevanciáját és hatékonyságát a változó kiberbiztonsági környezetben.",
          "iso_27001_ref": "5.3; 6.1.1; 6.2; 9.1",
          "nist_sp_800_53_rev5_ref": "PM-6",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.6"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.6 – Biztonsági teljesítmény mérése végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-043",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.6 – Biztonsági teljesítmény mérése: 1) A szervezetnek ki kell fejlesztenie az EIR-re vonatkozó biztonsági mérésének rendszerét. 2) A szervezetnek folyamatosan monitoroznia kell az általa meghatározott teljesítménymutatókat. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell az EIR biztonsági mérési rendszerét, hogy biztosítsa annak relevanciáját és hatékonyságát a változó kiberbiztonsági környezetben. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.10",
          "control_title": "Kockázatmenedzsment stratégia",
          "explanation": "Az egész szervezetre kiterjedő kockázatkezelési stratégia magában foglalja a szervezet kockázattűrésének meghatározását, a kockázatcsökkentési stratégiákat, az elfogadható kockázatértékelési módszereket, a szervezet egészére kiterjedő kockázatértékelésének folyamatát, valamint a kockázat időbeli nyomon követésére szolgáló megközelítéseket. A kockázatkezelésért felelős vezető (a szervezet vezetője vagy kijelölt képviselője) összehangolja az információbiztonság irányítási folyamatait a stratégiai, operatív és költségvetési tervezési folyamatokkal. A kockázatkezelésért felelős vezető által vezetett kockázatkezelési irányítási funkció elősegítheti a kockázatkezelési stratégia következetes alkalmazását az egész szervezetre kiterjedően. A kockázatkezelési stratégiát a szervezeten belüli és kívüli, más forrásokból származó, a kockázatokkal kapcsolatos információkkal lehet alátámasztani annak biztosítása érdekében, hogy a stratégia kellően széles körű és átfogó legyen. Az ellátási lánc kockázatkezelési stratégiája szintén hasznos információkat szolgáltathat a szervezet egészére kiterjedő kockázatkezelési stratégiához.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia egy átfogó kockázatkezelési stratégiát, amely tartalmazza a szervezet kockázattűrését, a kockázatok csökkentésének stratégiáit, az elfogadható kockázatértékelési módszertanokat, egy folyamatot a biztonsági kockázatok értékelésére az egész szervezeten belül, valamint a szervezet kockázattűrésével összhangban, és a megközelítéseket a kockázatok időbeli nyomon követésére.\n2. A kockázatkezelésért felelős személy összehangolja az információbiztonsági irányítási folyamatokat a stratégiai, operatív és költségvetési tervezési folyamatokkal.\n3. Az EIR-ekkel kapcsolatos ellátási lánc kockázatkezelési stratégia,  hasznos bemeneteket is nyújthat az érintett szervezet széles körű kockázatkezelési stratégiájához.\n4. Az érintett szervezet által meghatározott gyakorisággal és esetekben felülvizsgálja és frissíti a kockázatkezelési stratégiát, hogy meg tudjon felelni a szervezeti változásoknak. Ezt a folyamatot naplózni kell, hogy biztosítsa a folyamat átláthatóságát és nyomon követhetőségét.",
          "iso_27001_ref": "4.3; 4.4; 6.1.1; 6.1.2; 6.2; 7.5.1; 7.5.2; 7.5.3; 10.1",
          "nist_sp_800_53_rev5_ref": "PM-9",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.10"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.10 – Kockázatmenedzsment stratégia végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-044",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.10 – Kockázatmenedzsment stratégia: 1) A szervezetnek ki kell dolgoznia egy átfogó kockázatkezelési stratégiát, amely tartalmazza a szervezet kockázattűrését, a kockázatok csökkentésének stratégiáit, az elfogadható kockázatértékelési módszertanokat, egy folyamatot a biztonsági kockázatok értékelésére az egész szervezeten belül, valamint a szervezet kockázattűrésével… 2) A kockázatkezelésért felelős személy összehangolja az információbiztonsági irányítási folyamatokat a stratégiai, operatív és költségvetési tervezési folyamatokkal. 3) Az érintett szervezet által meghatározott gyakorisággal és esetekben felülvizsgálja és frissíti a kockázatkezelési stratégiát, hogy meg tudjon felelni a szervezeti változásoknak. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.11",
          "control_title": "Engedélyezési folyamatok meghatározása",
          "explanation": "A szervezeti rendszerek és működési környezetük engedélyezési folyamatai megkövetelik az egész szervezetre kiterjedő kockázatkezelési eljárás kialakítását, amelyhez a szervezet segítségül hívhatja meglévő kockázatkezelési keretrendszerek iránymutatásait, valamint a kapcsolódó biztonsági szabványokat, amelyek alapján implementálhat és végrehajthat az egész szervezetre kiterjedően. Ezen eljárás kialakításában kulcsfontosságú szerepet tölt be egy kockázatkezelésért felelős vezető és minden egyes szervezeti rendszer esetében egy kijelölt engedélyező. A szervezet engedélyezési folyamatait a folyamatos ellenőrzési folyamatokkal integrálják, hogy megkönnyítsék a szervezeti működésre, a szervezeti eszközökre, személyekre, és más szervezetekre vonatkozó biztonsági kockázatok folyamatos megértését és elfogadását.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek engedélyezési folyamatokat kell létrehoznia az EIR-ek és azok működési környezetének biztonsági állapotának kezelésére. A kockázatkezelési folyamatokért felelős személyt és az egyes EIR-ekért felelős engedélyezőket kell kijelölni.\n3. A szervezetnek be kell illesztenie az engedélyezési folyamatokat a szervezet egészét átfogó kockázatkezelési keretrendszerbe.\n4. A szervezet engedélyezési folyamatait össze kell hangolni a folyamatos felügyeleti folyamatokkal, hogy elősegítsék a biztonsági kockázatok folyamatos megértését és elfogadását az érintett szervezet működésére, eszközeire, személyekre, más szervezetekre.\n5. A szervezetnek dokumentálnia kell az engedélyezési folyamatokat, hogy nyomon követhesse és ellenőrizhesse a folyamatokat és az esetleges biztonsági eseményeket.",
          "iso_27001_ref": "A.5.2",
          "nist_sp_800_53_rev5_ref": "PM-10",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.11"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.11 – Engedélyezési folyamatok meghatározása végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-045",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.11 – Engedélyezési folyamatok meghatározása: 1) A szervezetnek engedélyezési folyamatokat kell létrehoznia az EIR-ek és azok működési környezetének biztonsági állapotának kezelésére. 2) A szervezetnek be kell illesztenie az engedélyezési folyamatokat a szervezet egészét átfogó kockázatkezelési keretrendszerbe. 3) A szervezetnek dokumentálnia kell az engedélyezési folyamatokat, hogy nyomon követhesse és ellenőrizhesse a folyamatokat és az esetleges biztonsági eseményeket. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.12",
          "control_title": "Szervezeti működés és üzleti folyamatok meghatározása",
          "explanation": "A szervezeti célokkal és az alapfunkciókkal összhangban megalkotott információvédelmi igények határozzák meg a szervezet és az EIR-ek számára szükséges biztonsági követelményeket. A biztonsági követelmények meghatározásához hozzátartozik annak a káros hatásnak a megértése, amelyet az információk veszélyeztetése vagy sérülése eredményezhet. A működési célokat és az alapfunkciókat, valamint a kapcsolódó védelmi követelményeket a szervezeti irányelvekkel és eljárásokkal összhangban dokumentálni szükséges.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a szervezeti célokat és az alapfunkciókat, figyelembe véve az információbiztonságot és a szervezeti működésre, EIR-re, személyekre, más szervezetekre gyakorolt kockázatokat.\n2. A szervezetnek meg kell határoznia a szervezeti célokból és alapfunkciókból adódó információvédelmi igényeket.\n3. A szervezetnek dokumentálnia kell az alapfeladatok és az alapfunkciók meghatározásait, valamint a hozzájuk kapcsolódó védelmi követelményeket az érintett szervezet szabályzatai és eljárásrendjei szerint.\n4. A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia és módosítania a szervezeti célokat és az alapfunkciókat, hogy biztosítsa azok relevanciáját és hatékonyságát a változó környezeti és üzleti körülmények között.",
          "iso_27001_ref": "4.1",
          "nist_sp_800_53_rev5_ref": "PM-11",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.12"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.12 – Szervezeti működés és üzleti folyamatok meghatározása végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-046",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.12 – Szervezeti működés és üzleti folyamatok meghatározása: 1) A szervezetnek meg kell határoznia a szervezeti célokat és az alapfunkciókat, figyelembe véve az információbiztonságot és a szervezeti működésre, EIR-re, személyekre, más szervezetekre gyakorolt kockázatokat. 2) A szervezetnek meg kell határoznia a szervezeti célokból és alapfunkciókból adódó információvédelmi igényeket. 3) A szervezetnek meghatározott gyakorisággal felül kell vizsgálnia és módosítania a szervezeti célokat és az alapfunkciókat, hogy biztosítsa azok relevanciáját és hatékonyságát a változó környezeti és üzleti körülmények között. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.14",
          "control_title": "Biztonsági személyzet képzése",
          "explanation": "A biztonsági személyzet képzését és fejlesztését elősegítő programok magukban foglalják a biztonsági feladatok és feladatok ellátásához szükséges ismeretek, készségek és képességek meghatározását, a szerepkör alapú képzési programok kidolgozását a biztonsági szerep- és felelősségi körökkel megbízott személyek számára, valamint szabályok és iránymutatások kidolgozását a biztonsággal kapcsolatos pozíciókat betöltő személyek és a pályázók egyéni képzettségének mérésére és fejlesztésére. A képzési programok mérhetővé teszik az egyéni teljesítményt, valamint karrierutat biztosítanak a biztonsági szerepköröket betöltők számára, ezzel is ösztönözve a szakembereket a területen való előrelépésre és a nagyobb felelősséggel járó pozíciók betöltésére.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azt a tudást, készségeket és képességeket, amelyekre szükség van a biztonsággal kapcsolatos feladatok elvégzéséhez.\n2. A szervezetnek szerepkör-alapú képzési programokat kell kifejlesztenie azok számára, akik biztonsági szerep- és felelősségi köröket látnak el.\n3. A szervezetnek meglévő szabványokat és irányelveket kell alkalmaznia az egyéni képesítések méréséhez és fejlesztéséhez a biztonsági pozíciókban dolgozók és jelentkezők számára.\n4. A szervezetnek biztonsági karrierutakat be kell kidolgoznia a programban, hogy ösztönözze a biztonsági szakembereket a területen való előrelépésre és a nagyobb felelősségfel járó pozíciók betöltésére.\n5. A szervezetnek a programokat úgy kell kialakítania, hogy ösztönözzék a képesítéssel rendelkező személyeket a biztonsági pozíciók betöltésére.\n6. A szervezetnek a biztonsági munkaerő-fejlesztési programokat össze kell hangolnia a szervezeti biztonsági tudatosság és képzési programokkal, és összpontosítania kell a személyzet alapvető biztonsági képességeinek fejlesztésére és intézményesítésére, hogy ilyen módon is védje a szervezet működését, eszközeit és a személyeket.\n7. A szervezetnek dokumentálnia kell a programban részt vevők előrehaladásáról és fejlődéséről, hogy biztosítsa a program hatékonyságát és folyamatos fejlesztését.",
          "iso_27001_ref": "7.2; A.6.3",
          "nist_sp_800_53_rev5_ref": "PM-13",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.14"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.14 – Biztonsági személyzet képzése végrehajtási csomag: jóváhagyott EIR-scope, 7 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 7 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-047",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.14 – Biztonsági személyzet képzése: 1) A szervezetnek meg kell határoznia azt a tudást, készségeket és képességeket, amelyekre szükség van a biztonsággal kapcsolatos feladatok elvégzéséhez. 2) A szervezetnek szerepkör-alapú képzési programokat kell kifejlesztenie azok számára, akik biztonsági szerep- és felelősségi köröket látnak el. 3) A szervezetnek dokumentálnia kell a programban részt vevők előrehaladásáról és fejlődéséről, hogy biztosítsa a program hatékonyságát és folyamatos fejlesztését. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.15",
          "control_title": "Tesztelés, képzés és felügyelet",
          "explanation": "Az egész szervezetre kiterjedő biztonsági tesztelési, képzési és felügyeleti folyamat segít biztosítani, hogy a szervezet mindig tisztán lássa a tesztelési, képzési és felügyeleti tevékenységek aktuális állapotát, és lehetősége nyílik arra, hogy ezeket a tevékenységeket összehangoltan kezelje. A folyamatos felügyeleti folyamatok növekvő fontosságával, az információbiztonsági védelmi intézkedések megvalósításával a kockázatelemzések alapján, valamint az egész szervezetre kiterjedő biztonsági követelmények széles körű használatával a szervezet összehangolja és konszolidálja a különböző biztonsági követelmények megvalósulását támogató folyamatos értékelések részeként rutinszerűen végzett tesztelési és felügyeleti tevékenységeket. A biztonsági képzési tevékenységek, bár az egyes rendszerekre és konkrét szerepkörökre összpontosítanak, az összes szervezeti elemre kiterjedő koordinációt igényelnek. A tesztelési, képzési és felügyeleti terveket és tevékenységeket az aktuális fenyegetés- és sérülékenységi vizsgálatok eredményei alapján határozzák meg.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek be kell vezetnie egy folyamatot, amely biztosítja, hogy az EIR-ekhez kapcsolódó biztonsági tesztelések, képzések és felügyeleti tevékenységek folyamatosan végrehajtásra kerüljenek. Ez magában foglalja a tesztelési, képzési és felügyeleti tervek fejlesztését és karbantartását.\n2. A szervezetnek gondoskodnia kell arról, hogy ezek a tevékenységek összehangoltak legyenek.\n3. A szervezetnek biztosítania kell, hogy a tesztelési, képzési és felügyeleti tervek és tevékenységek a jelenlegi fenyegetés- és sérülékenységi vizsgálati eredmények alapján készülnek.\n4. A szervezetnek felül kell vizsgálnia és össze kell hangolnia a terveit a szervezeti kockázatkezelési stratégiával és a kockázatkezelési intézkedésekre vonatkozó, az egész szervezetre kiterjedő prioritásokkal.\n5. A szervezetnek dokumentálnia kell a tesztelési, képzési és felügyeleti tevékenységeket, hogy biztosítsa a folyamatok átláthatóságát és a felelősséget.",
          "iso_27001_ref": "6.2",
          "nist_sp_800_53_rev5_ref": "PM-14",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.15"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.15 – Tesztelés, képzés és felügyelet végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-048",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.15 – Tesztelés, képzés és felügyelet: 1) A szervezetnek be kell vezetnie egy folyamatot, amely biztosítja, hogy az EIR-ekhez kapcsolódó biztonsági tesztelések, képzések és felügyeleti tevékenységek folyamatosan végrehajtásra kerüljenek. 2) A szervezetnek gondoskodnia kell arról, hogy ezek a tevékenységek összehangoltak legyenek. 3) A szervezetnek dokumentálnia kell a tesztelési, képzési és felügyeleti tevékenységeket, hogy biztosítsa a folyamatok átláthatóságát és a felelősséget. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.16",
          "control_title": "Szakmai csoportokkal és közösségekkel való kapcsolattartás",
          "explanation": "A szakmai csoportokkal és közösségekkel való folyamatos kapcsolattartás fontos a gyorsan változó technológiák és fenyegetések közepette. A szakmai csoportok és közösségek közé tartoznak a speciális érdekcsoportok, szakmai szövetségek, fórumok, hírcsoportok, felhasználói csoportok és a hasonló szervezetekben dolgozó biztonsági szakemberek csoportjai. A szervezetek a működési célok és az üzleti funkciók alapján választják ki a biztonsági csoportokat és egyesületeket. A szervezetek megosztják egymással a fenyegetésekkel, sebezhetőségekkel és biztonsági eseményekkel kapcsolatos információkat (megfelelő feltételek mentén), valamint a kontextuális tudást igénylő ismereteket és a vonatkozó törvényeknek, végrehajtási rendeleteknek, irányelveknek, szabályzatoknak, előírásoknak, szabványoknak és iránymutatásoknak való megfelelési technikákat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell választania azokat a szakmai csoportokat és közösségeket, amelyekkel kapcsolatot kíván létrehozni.\n2. Miután kiválasztotta a megfelelő csoportokat, a szervezetnek kapcsolatot kell létesítenie ezekkel a csoportokkal, és aktívan részt kell vennie a közösségek és csoportok tevékenységeiben. Ez magában foglalhatja a rendszeres kommunikációt, a szakmai- vagy érdekcsoportok által szervezett eseményeken való részvételt, és a közzétett információk követését.\n3. A szervezetnek folyamatosan biztosítania kell a szervezethez köthető személyek biztonsági oktatását és képzését. Ez magában foglalhatja a biztonsági gyakorlatok, technikák és technológiák oktatását, valamint a fenyegetések, sérülékenységek és biztonsági események ismertetését.\n4. A szervezetnek naprakész információkkal kell rendelkeznie az ajánlott biztonsági gyakorlatokról, technikákról és technológiákról. Ez magában foglalhatja a csoportoktól és közösségektől származó információk követését, valamint saját kutatások és elemzések végzését.\n5. A szervezetnek meg kell osztania az aktuális biztonsággal kapcsolatos információkat, beleértve a fenyegetéseket, sérülékenységeket és biztonsági eseményeket. Ez magában foglalhatja az információk megosztását a csoportokkal és közösségekkel.\n6. A szervezetnek dokumentálnia kell a biztonsági eseményeket, és rendszeresen felül kell vizsgálnia a naplót, hogy azonosítsa a potenciális problémákat és javítási lehetőségeket.",
          "iso_27001_ref": "7.4; A.5.6",
          "nist_sp_800_53_rev5_ref": "PM-15",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.16"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.16 – Szakmai csoportokkal és közösségekkel való kapcsolattartás végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-049",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.16 – Szakmai csoportokkal és közösségekkel való kapcsolattartás: 1) A szervezetnek ki kell választania azokat a szakmai csoportokat és közösségeket, amelyekkel kapcsolatot kíván létrehozni. 2) Miután kiválasztotta a megfelelő csoportokat, a szervezetnek kapcsolatot kell létesítenie ezekkel a csoportokkal, és aktívan részt kell vennie a közösségek és csoportok tevékenységeiben. 3) A szervezetnek dokumentálnia kell a biztonsági eseményeket, és rendszeresen felül kell vizsgálnia a naplót, hogy azonosítsa a potenciális problémákat és javítási lehetőségeket. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.17",
          "control_title": "Fenyegetettség tudatosító program",
          "explanation": "A folyamatosan változó és egyre kifinomultabb fenyegetések, különösen a fejlett, tartós fenyegetések (APT csoportok) miatt egyre valószínűbb, hogy a támadók sikeresen behatolnak a szervezeti EIR-ekbe, rendszerelemekbe vagy veszélyeztetik azokat. Az egyik legjobb technika ennek kezelésére az, ha a szervezetek megosztják egymással a fenyegetésekkel kapcsolatos információikat, beleértve a szervezetek által tapasztalt fenyegetési eseményeket (azaz azokat a taktikákat, technikákat és eljárásokat), szervezetek által bizonyos típusú fenyegetésekkel szemben hatásosnak talált kockázatcsökkentő intézkedéseket, valamint a fenyegetési információkat (azaz a fenyegetésekre vonatkozó jelzéseket és figyelmeztetéseket). A fenyegetésekre vonatkozó információk megosztása lehet kétoldalú vagy többoldalú. A többoldalú fenyegetésmegosztás keretében a szereplők fenyegetési információkat megosztó csoportot hoznak létre. A fenyegetésekkel kapcsolatos információk különleges megállapodásokat és védelmet igényelhetnek, vagy szabadon megoszthatók.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek először létre kell hoznia egy fenyegetettség tudatosító programot. Ez a program magában foglalja a fenyegetések felderítését és azokról szóló információk megosztását a szervezeten belül és más szervezetekkel.\n2. A szervezetnek ki kell dolgoznia egy stratégiát a fenyegetések felderítésére. Ez magában foglalhatja a fenyegetések azonosítását, értékelését és prioritizálását az EIR-en belül.\n3. A szervezetnek létre kell hoznia egy információmegosztási rendszert, amely lehetővé teszi a fenyegetésekkel kapcsolatos információk gyors és hatékony megosztását a szervezeten belül és más szervezetekkel.\n4. A szervezetnek meg kell határoznia a fenyegetésekkel kapcsolatos információk megosztásának szabályait és eljárásait. Ez magában foglalhatja a megosztandó információk típusát, a megosztás módját és időzítését, valamint a megosztásért felelős személyeket vagy csoportokat.\n5. A szervezetnek rendszeresen naplót kell vezetnie a fenyegetésekkel kapcsolatos információk megosztásáról, hogy nyomon követhesse a program hatékonyságát és szükség esetén módosíthassa azt.\n6. A szervezetnek biztosítania kell, hogy a fenyegetésekkel kapcsolatos információk megosztása megfelelően védett legyen, hogy megakadályozza az információk illetéktelen hozzáférését vagy felhasználását.\n7. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a fenyegetettség tudatosító programját, hogy biztosítsa annak relevanciáját és hatékonyságát a folyamatosan változó fenyegetési környezetben.",
          "iso_27001_ref": "A.5.7",
          "nist_sp_800_53_rev5_ref": "PM-16",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.17"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.17 – Fenyegetettség tudatosító program végrehajtási csomag: jóváhagyott EIR-scope, 7 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 7 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-050",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.17 – Fenyegetettség tudatosító program: 1) A szervezetnek először létre kell hoznia egy fenyegetettség tudatosító programot. 2) A szervezetnek ki kell dolgoznia egy stratégiát a fenyegetések felderítésére. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a fenyegetettség tudatosító programját, hogy biztosítsa annak relevanciáját és hatékonyságát a folyamatosan változó fenyegetési környezetben. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.19",
          "control_title": "Kockázatmenedzsment keretrendszer",
          "explanation": "A kockázatkezelési keretrendszer kialakítása akkor a leghatékonyabb, ha a szervezet szintjén és az érdekelt felekkel - beleértve a működési célok, az üzleti funkciók és a rendszer tulajdonosait - konzultálva történik. A kockázatkezelési folyamat részeként azonosított feltételezések, korlátozások, kockázattűrő képesség, prioritások és kompromisszumok alapul szolgálnak a kockázatkezelési stratégiához, amely viszont a kockázatértékelés, a kockázati válaszadás és a kockázatfigyelési tevékenységek elvégzéséhez szükséges információkkal szolgál. A kockázatkezelés eredményeit megosztják az érintett szervezethez köthető személyekkel, beleértve a működési célok és az üzleti funkciók tulajdonosait, az információk tulajdonosait vagy kezelőit, a rendszer tulajdonosait, az engedélyezésre jogosult vezetőket, a szervezet információbiztonsági vezetőjét és a kockázatkezelésért felelős személyt.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek azonosítania és dokumentálnia kell a kockázatelemzést, kockázatkezelést és a kockázatok felügyeletét érintő feltételezéseit. Ez magában foglalja a kockázatkezelés során figyelembe vett prioritásokat és kompromisszumokat, valamint az érintett szervezet kockázattűrő képességét, továbbá azonosítania és dokumentálnia kell a kockázatelemzést, kockázatkezelést és a kockázatok felügyeletét érintő megkötéseit.\n2. A szervezetnek meg kell osztania a kockázatkezelési tevékenység eredményeit a szervezet által meghatározott személyekkel.\n4. A szervezet által meghatározott gyakorisággal el kell végeznie a kockázatkezelési keretrendszer szempontrendszerének felülvizsgálatát és frissítését. Ez magában foglalja a kockázatkezelési stratégia, a kockázatelemzés, a kockázatválasz és a kockázatfelügyeleti tevékenységek felülvizsgálatát és frissítését.\n5. A naplózás során az érintett szervezetnek figyelemmel kell kísérnie és dokumentálnia kell a kockázatkezelési tevékenységeket, beleértve a kockázatok azonosítását, értékelését, kezelését és felügyeletét.",
          "iso_27001_ref": "4.3; 6.1.2; 6.2; 7.4; 7.5.1; 7.5.2; 7.5.3",
          "nist_sp_800_53_rev5_ref": "PM-28",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.19"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.19 – Kockázatmenedzsment keretrendszer végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-051",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.19 – Kockázatmenedzsment keretrendszer: 1) A szervezetnek azonosítania és dokumentálnia kell a kockázatelemzést, kockázatkezelést és a kockázatok felügyeletét érintő feltételezéseit. 2) A szervezetnek meg kell osztania a kockázatkezelési tevékenység eredményeit a szervezet által meghatározott személyekkel. 3) A naplózás során az érintett szervezetnek figyelemmel kell kísérnie és dokumentálnia kell a kockázatkezelési tevékenységeket, beleértve a kockázatok azonosítását, értékelését, kezelését és felügyeletét. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.20",
          "control_title": "Kockázatkezelésért felelős szerepkörök",
          "explanation": "A kockázatkezelésért felelős személy kinevezése elősegíti, hogy a szervezeti információbiztonsági irányítási folyamatok illeszkedjenek a szervezet stratégiai, működési és költségvetés-tervezési folyamataiba, ill. összhangban legyenek azokkal. A kockázati vezető a szervezet egészére kiterjedő kockázatkezelési tevékenységek vezetésért felelős. A kockázati vezető szerepkört betöltő személy kinevezése elősegíti, hogy a kockázatok a szervezet egészére kiterjedő szemszögből kerüljenek áttekintésre és elemzésre, valamint azt, hogy a kockázatkezelés az egész szervezeten belül következetes legyen.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell jelölnie egy kockázatkezelésért felelős személyt.\n2. A szervezetnek ki kell jelölnie egy kockázati vezetőt.\n3. A kockázatkezelésért felelős személynek és a kockázati vezetőnek együtt kell működniük, hogy biztosítsák a szervezeti kockázatkezelési folyamatok integrálását a szervezet összes releváns folyamatába.\n4. A kockázatkezelésért felelős személynek és a kockázati vezetőnek rendszeresen dokumentálniuk kell a kockázatkezelési tevékenységeket, beleértve a kockázatok azonosítását, értékelését, kezelését és monitorozását.\n5. A szervezetnek biztosítania kell, hogy a kockázatkezelésért felelős személy és a kockázati vezető rendelkezzen a szükséges képesítéssel, erőforrásokkal és támogatással a feladataik eredményes végrehajtásához.\n6. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a kockázatkezelési folyamatokat, hogy biztosítsa azok hatékonyságát és relevanciáját a változó kockázati környezetben.",
          "iso_27001_ref": "5.1; 5.2; 5.3; 9.3.1; A.5.2",
          "nist_sp_800_53_rev5_ref": "PM-29",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.20"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.20 – Kockázatkezelésért felelős szerepkörök végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-052",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.20 – Kockázatkezelésért felelős szerepkörök: 1) A szervezetnek ki kell jelölnie egy kockázatkezelésért felelős személyt. 2) A szervezetnek ki kell jelölnie egy kockázati vezetőt. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a kockázatkezelési folyamatokat, hogy biztosítsa azok hatékonyságát és relevanciáját a változó kockázati környezetben. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.21",
          "control_title": "Ellátási lánc kockázatmenedzsment stratégiája",
          "explanation": "Az egész szervezetre kiterjedő ellátási lánc kockázatainak kezelésére vonatkozó stratégia tartalmazza a szervezet ellátási láncra vonatkozó kockázattűrésének egyértelmű kifejezését, az elfogadható ellátási lánc kockázatcsökkentési stratégiákat vagy védelmi intézkedéseket, az ellátási láncból fakadó kockázatok következetes értékelésére és nyomon követésére szolgáló folyamatot, az ellátási lánc kockázatkezelési stratégia végrehajtására és kommunikációjára vonatkozó megközelítéseket, valamint a kapcsolódó szerep- és felelősségi köröket. Az ellátási láncra vonatkozó kockázatkezelés magában foglalja az EIR-ek, rendszerelemek és rendszerszolgáltatások fejlesztésével, beszerzésével, karbantartásával és selejtezésével kapcsolatos biztonsági kockázatok figyelembevételét. Az ellátási lánc kockázatkezelési stratégiája beépíthető a szervezet átfogó kockázatkezelési stratégiájába, iránymutató és tájékoztató jellegű lehet az ellátási láncra vonatkozó irányelvek és a rendszerszintű ellátási lánc kockázatkezelési tervek tekintetében. Ezen túlmenően ezen kockázatkezelési funkció alkalmazása elősegítheti az ellátási lánc kockázatkezelési stratégiájának következetes, az egész szervezetre kiterjedő alkalmazását. Az ellátási láncra vonatkozó kockázatkezelési stratégiát szervezeti, valamint üzleti funkciók szintjén hajtják végre, míg az ellátási lánc kockázatkezelési tervek rendszerszinten kerülnek végrehajtásra.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet kidolgoz egy, az egész szervezetre kiterjedő ellátási láncra vonatkozó kockázatkezelési stratégiát.\n2. A szervezetnek meg kell fontolnia, hogy az ellátási láncra vonatkozó kockázatkezelési stratégiát beépíti a szervezeti kockázatkezelési stratégiájába.\n3. A szervezetnek meg kell különböztetnie az ellátási lánc kockázatkezelési stratégiát, amelyet a szervezeti és üzleti folyamatok szintjén kell végrehajtania, valamint az ellátási lánc kockázatkezelési terveit, amelyeket az EIR-ek szintjén.\n4. A szervezet rendszeresen felülvizsgálja és frissíti az ellátási lánc kockázatkezelési stratégiáját a változások nyomon követése érdekében az általa meghatározott gyakorisággal.",
          "iso_27001_ref": "4.4; 6.2; 7.5.1; 7.5.2; 7.5.3",
          "nist_sp_800_53_rev5_ref": "PM-30",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.21"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.21 – Ellátási lánc kockázatmenedzsment stratégiája végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-053",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.21 – Ellátási lánc kockázatmenedzsment stratégiája: 1) A szervezet kidolgoz egy, az egész szervezetre kiterjedő ellátási láncra vonatkozó kockázatkezelési stratégiát. 2) A szervezetnek meg kell fontolnia, hogy az ellátási láncra vonatkozó kockázatkezelési stratégiát beépíti a szervezeti kockázatkezelési stratégiájába. 3) A szervezet rendszeresen felülvizsgálja és frissíti az ellátási lánc kockázatkezelési stratégiáját a változások nyomon követése érdekében az általa meghatározott gyakorisággal. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "1.23",
          "control_title": "Folyamatos felügyeleti stratégia",
          "explanation": "A szervezeti szinten történő folyamatos felügyelet elősegíti, hogy a szervezetnek folyamatos és valós képe legyen a szervezet biztonsági állapotáról, ezzel támogatva a szervezet kockázatkezelési döntéseit. A folyamatos kifejezés azt jelenti, hogy a szervezetek a kockázatalapú döntések támogatásához megfelelő gyakorisággal értékelik és monitorozzák a védelmi intézkedéseket és a kapcsolódó kockázatokat. A különböző típusú védelmi intézkedések eltérő felügyeleti gyakoriságot igényelhetnek. A folyamatos felügyelet eredményei iránymutatást adnak és támogatják a szervezetek kockázatkezelési válaszait (intézkedéseit). A folyamatos felügyeleti programok lehetővé teszik a szervezetek számára, hogy a védelmi intézkedéseket a változó működési célokkal és üzleti igényekkel, fenyegetésekkel, sérülékenységekkel és technológiákkal jellemezhető, rendkívül dinamikus működési környezetekben is fenntartsák. A biztonsággal kapcsolatos információkhoz való folyamatos hozzáférés a jelentéseken keresztül biztosítja a szervezet vezetői számára a hatékony, gyors és megalapozott kockázatkezelési döntések meghozatalának képességét, beleértve a folyamatos jóváhagyási döntéseket is. A kockázatok kezelésének további megkönnyítése érdekében a szervezet fontolóra veszi a szervezet által meghatározott felügyeleti mérőszámok összehangolását a kockázatkezelési stratégiában meghatározott kockázattűréssel.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia egy stratégiát, amely meghatározza a felügyeleti tevékenységek gyakoriságát és módszereit, valamint a mérőszámokat, amelyek alapján a felügyeleti tevékenységek hatékonyságát értékelik.\n2. A szervezetnek fen kell tartania kell egy programot, amely a felügyeleti stratégia szerint folyamatosan figyelemmel kíséri a mérőszámokat.\n3.  A szervezetnek elemeznie kell a felügyeleti és vizsgálati adatok közötti összefüggéseket, hogy meghatározza a védelmi intézkedések hatékonyságát.\n4. A szervezetnek válaszlépéseket kell tennie a védelmi intézkedések értékelése és a felügyeleti információk eredményei alapján.\n5. A szervezetnek rendszeres időközönként jelentést kell készítenie az EIR biztonsági állapotáról a kijelölt személyek számára.\n6.A szervezetnek dokumentálnia kell a folyamatos felügyeleti tevékenységeket, hogy nyomon követhető legyen a felügyeleti tevékenységek hatékonysága és a védelmi intézkedések hatékonysága.",
          "iso_27001_ref": "4.4; 6.2; 7.4; 7.5.1; 7.5.2; 7.5.3; 9.1; 9.2.2; 10.1; 10.2",
          "nist_sp_800_53_rev5_ref": "PM-31",
          "requirement_family": "1",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "1.23"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "1.23 – Folyamatos felügyeleti stratégia végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott szabályozás, szerep- és felelősségi rekord, mérési vagy felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-054",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "1.23 – Folyamatos felügyeleti stratégia: 1) A szervezetnek ki kell dolgoznia egy stratégiát, amely meghatározza a felügyeleti tevékenységek gyakoriságát és módszereit, valamint a mérőszámokat, amelyek alapján a felügyeleti tevékenységek hatékonyságát értékelik. 2) A szervezetnek fen kell tartania kell egy programot, amely a felügyeleti stratégia szerint folyamatosan figyelemmel kíséri a mérőszámokat. 3) A szervezetnek dokumentálnia kell a folyamatos felügyeleti tevékenységeket, hogy nyomon követhető legyen a felügyeleti tevékenységek hatékonysága és a védelmi intézkedések hatékonysága. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A hozzáférés-felügyeleti szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a hozzáférés-felügyeleti szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a hozzáférés-felügyeleti szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a hozzáférés-felügyeleti szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális hozzáférés-felügyeleti szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.15; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "AC-1",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.1"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.1 – Szabályzat és eljárásrendek végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-055",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.1 – Szabályzat és eljárásrendek: 1) A szervezetnek gondoskodnia kell a hozzáférés-felügyeleti szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról. 2) A szervezetnek meg kell bizonyosodnia arról, hogy a hozzáférés-felügyeleti szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak. 3) A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális hozzáférés-felügyeleti szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.15",
          "control_title": "Hozzáférési szabályok érvényesítése",
          "explanation": "Az EIR-ben megvalósított logikai hozzáférés-felügyeleti szabályokkal szemben, a fizikai hozzáférés-felügyeleti szabályok a fizikai hozzáféréssel/belépéssel kapcsolatos kontrolloknál kerültek bővebben kifejtésre. Az hozzáférés-felügyeleti szabályzatok szabályozzák a hozzáférést az aktív entitások vagy alanyok és a passzív entitások vagy objektumok (azaz eszközök, fájlok, rekordok, domainek) között az érintett szervezet infrastruktúrájában. Az EIR biztosítja, hogy csak azok a felhasználók és folyamatok férjenek hozzá az információkhoz és az EIR erőforrásaihoz, akiknek erre jogosultságuk van. Ez a jogosultság a felhasználói szinttől, a felhasználói csoportokon át, egészen az alkalmazások és szolgáltatások szintjéig terjedhet.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia és dokumentálnia a logikai hozzáférési jogosultságokat az EIR-hez. Ez magában foglalja a felhasználói jogosultságok, a rendszergazdai jogosultságok és a hozzáférési szintek meghatározását.\n2. A szervezetnek létre kell hoznia egy szabályzatot, amely meghatározza, hogyan kell kezelni és érvényesíteni a logikai hozzáférési jogosultságokat az EIR-ben. Ez a szabályzat magában foglalja a jogosultságok létrehozásának, módosításának, törlésének és felülvizsgálatának folyamatát.\n3. A szervezetnek implementálnia kell a logikai hozzáférési jogosultságokat az EIR-ben a szabályzatnak megfelelően. Ez magában foglalja a jogosultságok hozzárendelését a megfelelő felhasználókhoz, valamint a hozzáférési szintek beállítását.\n4. A szervezetnek naplóznia kell a logikai hozzáférési jogosultságok használatát az EIR-ben. Ez magában foglalja a hozzáférési kísérletek, a sikeres és sikertelen hozzáférési események, valamint a jogosultságok módosításának naplózását.",
          "iso_27001_ref": "A.5.15; A.5.33; A.8.3; A.8.4; A.8.18; A.8.20; A.8.26",
          "nist_sp_800_53_rev5_ref": "AC-3",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.15"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.15 – Hozzáférési szabályok érvényesítése végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-056",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.15 – Hozzáférési szabályok érvényesítése: 1) A szervezetnek meg kell határoznia és dokumentálnia a logikai hozzáférési jogosultságokat az EIR-hez. 2) A szervezetnek létre kell hoznia egy szabályzatot, amely meghatározza, hogyan kell kezelni és érvényesíteni a logikai hozzáférési jogosultságokat az EIR-ben. 3) A szervezetnek naplóznia kell a logikai hozzáférési jogosultságok használatát az EIR-ben. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.71",
          "control_title": "Sikertelen bejelentkezési kísérletek",
          "explanation": "A sikertelen bejelentkezési kísérletek korlátozásának és a megengedett próbálkozások számának túllépése esetén követendő további lépéseknek szükségessége független attól, hogy a bejelentkezés helyi vagy hálózati kapcsolaton keresztül történt. A szolgáltatásmegtagadás lehetősége miatt kezdeményezett automatikus zárolások általában ideiglenesek, és automatikusan feloldódnak egy előre meghatározott, az érintett szervezet által meghatározott időszak után. Késleltetési algoritmus használata esetén az érintett szervezetek különböző algoritmusokat alkalmazhatnak a különböző rendszerelemekre, attól függően, hogy a rendszerelem milyen képességekkel rendelkezik. A sikertelen bejelentkezési kísérletekre adott válaszok az operációs rendszer és az alkalmazás szintjén is megvalósíthatók. Az érintett szervezet által meghatározott intézkedések, amelyek a megengedett egymást követő érvénytelen bejelentkezési kísérletek számának túllépése esetén lépnek életbe lehetnek például egy titkos kérdés megválaszolásának megkövetelése a felhasználónév és jelszó mellett, egy korlátozott felhasználói képességekkel rendelkező zárolási mód bevezetése, bejelentkezés korlátozása és egy meghatározott IP (Internet Protocol) címhez, mint forráscímhez kötése, CAPTCHA igényelése az automatizált támadások megakadályozása érdekében, vagy felhasználói profilok alkalmazása, melyek a bejelentkezést megfelelő napszakhoz, IP címhez, eszközhöz vagy MAC (Media Access Control) címhez köthetik.. Ha az automatikus zárolás, vagy a késleltetési algoritmus végrehajtása nem történik meg, a szervezet más intézkedések kombinációját is mérlegelheti a kimerítő próbálkozásos módszerre (brute-force) épülő támadások megakadályozása érdekében. A szervezet arra is kérheti a felhasználókat, hogy válaszoljanak egy titkos kérdésre, mielőtt a megengedett sikertelen bejelentkezési kísérletek száma túllépné a meghatározott értéket. Egy fiók automatikus feloldása egy meghatározott időszak után általában nem engedélyezett, azonban lehetnek kivételek a szervezeti célok vagy igények figyelembevételével.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meghatározott esetszám korlátot kell alkalmaznia a felhasználló meghatározott időtartamon belül egymást követő sikertelen bejelentkezési kísérleteire.\n2. A szervezetnek implementálnia kell egy olyan megoldást, amely képes nyomon követni és naplózni a sikertelen bejelentkezési kísérleteket.\n3. A szervezetnek biztosítania kell, hogy a meghatározott esetszám túllépése esetén az EIR automatikusan zárolja a felhasználói fiókot egy meghatározott időtartamra vagy amíg a rendszergazda fel nem oldja a zárolást. Emellett késleltetheti a következő bejelentkezési lehetőséget egy meghatározott algoritmus szerint.\n4. A szervezetnek biztosítania kell, hogy az EIR értesíti a rendszergazdát, amennyiben a sikertelen próbálkozások maximális számát túllépte egy felhasználó.\n5. A szervezet például az alábbi intézkedéseket határozhatja meg a meghatározott időtartamon belül egymást követő sikertelen bejelentkezési kísérleteire: titkos kérdés megválaszolása a felhasználónév és jelszó mellett, korlátozott felhasználói képességekkel rendelkező zárolási mód bevezetése, bejelentkezés korlátozása és egy meghatározott Internet Protocol (IP) címhez, mint forráscímhez kötése, CAPTCHA használata az automatizált támadások megakadályozására, illetve felhasználói profilok alkalmazása, melyek a bejelentkezést megfelelő napszakhoz, IP címhez, eszközhöz vagy MAC címhez köthetik.\n6. A szervezetnek meghatározott időközönként, rendszeresen felül kell vizsgálnia és szükség esetén frissítenie kell a bejelentkezési kísérletekkel kapcsolatos intézkedéseket, így biztosítva azok hatékonyságát és naprakészségét.",
          "iso_27001_ref": "A.8.5",
          "nist_sp_800_53_rev5_ref": "AC-7",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.71"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.71 – Sikertelen bejelentkezési kísérletek végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-057",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.71 – Sikertelen bejelentkezési kísérletek: 1) A szervezetnek meghatározott esetszám korlátot kell alkalmaznia a felhasználló meghatározott időtartamon belül egymást követő sikertelen bejelentkezési kísérleteire. 2) A szervezetnek implementálnia kell egy olyan megoldást, amely képes nyomon követni és naplózni a sikertelen bejelentkezési kísérleteket. 3) A szervezetnek meghatározott időközönként, rendszeresen felül kell vizsgálnia és szükség esetén frissítenie kell a bejelentkezési kísérletekkel kapcsolatos intézkedéseket, így biztosítva azok hatékonyságát és naprakészségét. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.75",
          "control_title": "A rendszerhasználat jelzése",
          "explanation": "",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "",
          "iso_27001_ref": "",
          "nist_sp_800_53_rev5_ref": "",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.75"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.75 – A rendszerhasználat jelzése végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-058",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.75 – A rendszerhasználat jelzése: 1) Határozza meg az EIR-ek belépési felületén megjelenítendő, jogilag és információbiztonságilag jóváhagyott rendszerhasználati figyelmeztetés tartalmát. 2) Állítsa be a jóváhagyott figyelmeztetés megjelenítését minden alkalmazandó interaktív belépési ponton, még a hitelesítés vagy a hozzáférés engedélyezése előtt. 3) Dokumentálja a szövegváltozatot, a konfigurációt, a képernyőképes vagy konfigurációexport-alapú próbaeredményt és a felülvizsgálati ciklust. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.88",
          "control_title": "Azonosítás vagy hitelesítés nélkül engedélyezett tevékenységek",
          "explanation": "Bizonyos felhasználói tevékenységek végrehajhatók azonosítás és hitelesítés nélkül is, amennyiben a szervezet úgy dönt. A szervezet például olyan esetekben engedélyezhet azonosítás és hitelesítés nélküli felhasználói tevékenységet, mikor a felhasználóknak egy publikusan elérhető weboldalhoz kell hozzáférniük vagy amikor mobiltelefonon fogadnak hívásokat. Olyan felhasználói tevékenység nem minősül azonosítás és hitelesítés nélkül engedélyezett tevékenységnek, melynek megtételéhez már egyszer szükség volt azonosításra és hitelesítésre.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek azonosítania kell azokat a felhasználói tevékenységeket, amelyeket az EIR-ben azonosítás vagy hitelesítés nélkül is végrehajthatnak.\n2. A szervezetnek meg kell határoznia azokat a tevékenységeket, amelyek normál esetben azonosítást vagy hitelesítést igényelnek, de bizonyos körülmények között lehetővé teszik az azonosítási vagy hitelesítési mechanizmusok megkerülését.\n3. A szervezetnek dokumentálnia és indokolnia kell az EIR-ben azonosítás vagy hitelesítés nélkül végrehajtható felhasználói tevékenységeket a rendszerbiztonsági tervben.\n4. A szervezetnek rendszeresen felül kell vizsgálnia ezeket az azonosítást és hitelesítést nem igénylő felhasználói tevékenységeket, és amennyiben azok már nincsenek összhangban a szervezeti célokkal és az üzleti funkciókkal, meg kell szüntetnie azokat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "AC-14",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.88"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.88 – Azonosítás vagy hitelesítés nélkül engedélyezett tevékenységek végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-059",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.88 – Azonosítás vagy hitelesítés nélkül engedélyezett tevékenységek: 1) A szervezetnek azonosítania kell azokat a felhasználói tevékenységeket, amelyeket az EIR-ben azonosítás vagy hitelesítés nélkül is végrehajthatnak. 2) A szervezetnek meg kell határoznia azokat a tevékenységeket, amelyek normál esetben azonosítást vagy hitelesítést igényelnek, de bizonyos körülmények között lehetővé teszik az azonosítási vagy hitelesítési mechanizmusok megkerülését. 3) A szervezetnek rendszeresen felül kell vizsgálnia ezeket az azonosítást és hitelesítést nem igénylő felhasználói tevékenységeket, és amennyiben azok már nincsenek összhangban a szervezeti célokkal és az üzleti funkciókkal, meg kell szüntetnie azokat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.100",
          "control_title": "Távoli hozzáférés",
          "explanation": "A távoli hozzáférés olyan hozzáférés, amely az érintett szervezet EIR-jéhez kapcsolódik és amely külső hálózatokon, például az interneten keresztül kommunikál. A szervezet jellemzően titkosított virtuális magánhálózatokat (VPN-eket) használ a távoli kapcsolatok bizalmasságának és integritásának megőrzése érdekében. A titkosított VPN-ek használata elegendő biztosítékot nyújt az érintett szervezet számára arra, hogy hatékonyan kezelje ezeket a kapcsolatokat belső hálózatokként, ha a használt kriptográfiai mechanizmusokat a hatályos jogszabályok, irányelvek, szabályozások, szabványok és ajánlások szerint hajtják végre. A VPN kapcsolatok külső hálózatokon keresztül haladnak át, a titkosított VPN nem növeli a távoli kapcsolatok rendelkezésre állását. A titkosított VPN-ek befolyásolhatják a hálózati kommunikációs forgalom megfelelő monitorozásának képességét a rosszindulatú kódok szempontjából. A távoli hozzáférési szabályok alkalmazása más rendszerekre is vonatkozik, nem csak a nyilvános webkiszolgálókra vagy az olyan EIR-ekre, melyeket úgy terveztek, hogy nyilvánosan hozzáférhetők legyenek. Minden távoli hozzáférési típust engedélyeznie kell a szervezetnek, azt megelőzően, hogy a távoli hozzáférést lehetővé tenné a szervezet. A használati korlátozások mind biztonsági, mind funkcionális korlátozások lehetnek (pl. az átviteli sebességre való tekintettel a streaming szolgáltatások tiltása). A szervezet használhat információcserére, illetve rendszerkapcsolatokra vonatkozó megállapodásokat/szerződéseket, melyekben szabályozzák a távoli hozzáférést is. A említett megállapodásokkal/szerződésekkel kapcsolatos elvárások az \"Információcsere\" kontrollnál kerültek bővebben kifejtésre. A távoli hozzáférésre vonatkozó korlátozások érvényesítése a \"Hozzáférés-ellenőrzés érvényesítése\" kontrollnál kerültek bővebben kifejtésre.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia és dokumentálnia kell az engedélyezett távoli hozzáférés minden egyes típusára vonatkozó használati korlátozásokat, a konfigurációs vagy csatlakozási követelményeket és az alkalmazási útmutatókat.\n2. A szervezetnek titkosított magánhálózatokat (VPN-eket) kell használnia a távoli kapcsolatok bizalmasságának és integritásának megőrzése érdekében.\n3. Minden távoli hozzáférési típust engedélyeznie kell a szervezetnek, azt megelőzően, hogy a távoli hozzáférést lehetővé tenné a szervezet.\n4. A szervezetnek érvényesítenie kell a távoli hozzáférésre vonatkozó hozzáférési korlátozásokat a biztonsági és a rendelkezésre állási szempontok figyelembevételével.\n5. A szervezetnek dokumentálnia kell, hogy mely felhasználók részére került engedélyezésre a távoli hozzáférés.",
          "iso_27001_ref": "A.5.14; A.6.7",
          "nist_sp_800_53_rev5_ref": "AC-17",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.100"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.100 – Távoli hozzáférés végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-060",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.100 – Távoli hozzáférés: 1) A szervezetnek ki kell dolgoznia és dokumentálnia kell az engedélyezett távoli hozzáférés minden egyes típusára vonatkozó használati korlátozásokat, a konfigurációs vagy csatlakozási követelményeket és az alkalmazási útmutatókat. 2) A szervezetnek titkosított magánhálózatokat (VPN-eket) kell használnia a távoli kapcsolatok bizalmasságának és integritásának megőrzése érdekében. 3) A szervezetnek dokumentálnia kell, hogy mely felhasználók részére került engedélyezésre a távoli hozzáférés. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.108",
          "control_title": "Vezeték nélküli hozzáférés",
          "explanation": "A vezeték nélküli technológiák közé sorolható a mikrohullám, a nagyon magas- vagy ultra magas rádiós frekvencia, a 802.11x és a Bluetooth. A vezeték nélküli hálózatok hitelesítési protokollokat használnak, amelyek biztosítják a hitelesítő védelmét és a kölcsönös hitelesítést.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek konfigurációs követelményeket, kapcsolódási követelményeket és alkalmazási útmutatót kell kidolgoznia minden egyes vezeték nélküli hozzáférési típusra. Ez magában foglalja a mikrohullámú, a nagyon magas- vagy ultra magas frekvenciájú rádió frekvenciákat, a 802.11x-et és a Bluetooth-t is.\n2. A szervezetnek engedélyezési eljárást kell lefolytatnia az EIR-hez való vezeték nélküli hozzáférés minden egyes típusára, mielőtt lehetővé tenné ezeket a kapcsolatokat. Ez azt jelenti, hogy az érintett szervezetnek ellenőriznie kell, hogy a vezeték nélküli hozzáférést biztosító technológiák megfelelnek-e a biztonsági követelményeknek, és hogy azokat megfelelően konfigurálták-e.\n3. A szervezetnek rendszeresen felül kell vizsgálnia és szükség esetén frissítenie kell az általa alkalmazott vezeték nélküli hozzáférési technológiákat, hogy biztosítsa azok naprakészségét és hatékonyságát.\n4. A szervezetnek biztosítania kell, hogy a vezeték nélküli hozzáféréshez kapcsolódó biztonsági elvárásokat minden releváns személy megismerje és azokat be is tartsa. Releváns személyek lehetnek a szervezet munkavállalói, alvállalkozói, illetve beszállítói is.",
          "iso_27001_ref": "A.5.14; A.8.20",
          "nist_sp_800_53_rev5_ref": "AC-18",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.108"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.108 – Vezeték nélküli hozzáférés végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-061",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.108 – Vezeték nélküli hozzáférés: 1) A szervezetnek konfigurációs követelményeket, kapcsolódási követelményeket és alkalmazási útmutatót kell kidolgoznia minden egyes vezeték nélküli hozzáférési típusra. 2) A szervezetnek engedélyezési eljárást kell lefolytatnia az EIR-hez való vezeték nélküli hozzáférés minden egyes típusára, mielőtt lehetővé tenné ezeket a kapcsolatokat. 3) A szervezetnek biztosítania kell, hogy a vezeték nélküli hozzáféréshez kapcsolódó biztonsági elvárásokat minden releváns személy megismerje és azokat be is tartsa. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.113",
          "control_title": "Mobil eszközök hozzáférés-ellenőrzése",
          "explanation": "Az érintett szervezet a mobil eszközök számára kialakítja a konfigurációs követelményeket, kapcsolódási követelményeket és alkalmazási útmutatót. Az érintett szervezetnek akkor is gondoskodni kell a mobil eszközök biztonságáról, amikor azok a felhasználók kezelésében, az érintett szervezet által felügyelt helyen kívül vannak. Az érintett szervezetnek ezért megfelelően kell konfigurálnia az eszközöket és szabályzati oldalról intézkedéseket kell foganatosítania, hogy a felhasználók felügyelete alatt is megfelelő biztonságban legyenek az eszközök és a rajtuk tárolt adatok.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell alakítania a konfigurációs követelményeket, kapcsolódási követelményeket és alkalmazási útmutatót a mobil eszközök számára, különös tekintettel azokra az esetekre, amikor a mobil eszközök az érintett szervezet által ellenőrzött területen kívül helyezkednek el.\n2. A szervezetnek engedélykötelessé kell tennie a mobil eszközökkel történő kapcsolódást az EIR-hez. Ez azt jelenti, hogy a mobil eszközök csak akkor csatlakozhatnak az EIR-hez, ha ezt engedélyezték. Célszerű a kiemelt kockázat miatt az ilyen intézkedési engedélyezéseket az üzemeltetéstől független félnek, például a szervezet elektronikus információs rendszer biztonságáért felelős személyének jóváhagynia.\n3. A szervezetnek felügyelnie kell a mobil eszközökkel történő csatlakozásokat, továbbá a mobil eszközökön kikényszerített biztonsági beállítások megfelelő és folyamatos működését pl.: MDM (Mobile Device Management) rendszer használata.\n4. A szervezetnek rendszeresen felül kell vizsgálnia a kiadott engedélyeket, és a már nem szükséges engedélyeket vissza kell vonnia.",
          "iso_27001_ref": "A.5.14; A.7.9; A.8.1",
          "nist_sp_800_53_rev5_ref": "AC-19",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.113"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.113 – Mobil eszközök hozzáférés-ellenőrzése végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-062",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.113 – Mobil eszközök hozzáférés-ellenőrzése: 1) A szervezetnek ki kell alakítania a konfigurációs követelményeket, kapcsolódási követelményeket és alkalmazási útmutatót a mobil eszközök számára, különös tekintettel azokra az esetekre, amikor a mobil eszközök az érintett szervezet által ellenőrzött területen kívül helyezkednek el. 2) A szervezetnek engedélykötelessé kell tennie a mobil eszközökkel történő kapcsolódást az EIR-hez. 3) A szervezetnek rendszeresen felül kell vizsgálnia a kiadott engedélyeket, és a már nem szükséges engedélyeket vissza kell vonnia. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.115",
          "control_title": "Külső elektronikus információs rendszerek használata",
          "explanation": "Az érintett szervezet meghatározza a követelmény szerinti felhasználási feltételeket, és megállapítja, hogy az elvárt követelmények megvalósultak-e a külső rendszerekben. A szervezet érvényesíti az elvárásait a külső rendszerrel történő információfeldolgozás és -továbbítás kapcsán, továbbá a szervezet által meghatározott típusú külső rendszerek használatát logikai és adminisztratív úton megtiltja.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a felhasználási feltételeket a külső rendszerekkel kapcsolatban. Ez magában foglalja a specifikus alkalmazásokat, amelyekhez hozzáférhetnek külső rendszerekhez, és a legmagasabb biztonsági kategóriájú információt, amelyet feldolgozhatnak, tárolhatnak vagy továbbíthatnak a külső rendszereken.\n2. A szervezetnek bizalmi kapcsolatokat kell létrehoznia a külső rendszereket birtokló, üzemeltető vagy karbantartó szervezetekkel. Ezek a kapcsolatok lehetővé teszik, hogy az arra jogosult személyek hozzáférjenek az EIR-hez külső rendszerekből, és feldolgozzák, tárolják vagy továbbítsák az érintett szervezet által ellenőrzött információkat külső rendszerek használatával.\n3. A szervezetnek döntenie kell arról, hogy megtiltja-e a meghatározott típusú külsőrendszerek használatát. Például megtilthatja bármely külső rendszer használatát, amelyet nem a szervezet birtokol, vagy megtilthatja a személyes tulajdonban lévő EIR-ek használatát.\n4. Ha a felhasználási feltételeket nem lehet meghatározni a külső rendszerek tulajdonosaival, a szervezet korlátozásokat vezethet be azokkal a személyekkel szemben, akik ezeket a külső rendszereket használják.",
          "iso_27001_ref": "A.5.14; A.7.9; A.8.20",
          "nist_sp_800_53_rev5_ref": "AC-20",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.115"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.115 – Külső elektronikus információs rendszerek használata végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-063",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.115 – Külső elektronikus információs rendszerek használata: 1) A szervezetnek meg kell határoznia a felhasználási feltételeket a külső rendszerekkel kapcsolatban. 2) A szervezetnek bizalmi kapcsolatokat kell létrehoznia a külső rendszereket birtokló, üzemeltető vagy karbantartó szervezetekkel. 3) Ha a felhasználási feltételeket nem lehet meghatározni a külső rendszerek tulajdonosaival, a szervezet korlátozásokat vezethet be azokkal a személyekkel szemben, akik ezeket a külső rendszereket használják. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "2.124",
          "control_title": "Nyilvánosan elérhető tartalom",
          "explanation": "Az érintett szervezet a vonatkozó hatályos jogszabályok, irányelvek, szabályozások, szabványok és ajánlások szerint, nem engedélyezi a nyilvánosság számára a nem nyilvános információkhoz való hozzáférést. A nyilvánosan hozzáférhető tartalom olyan EIR-eket érint, amelyeket az érintett szervezet kontrollál, és amelyek általában azonosítás vagy hitelesítés nélkül hozzáférhetők a nyilvánosság számára. Az információk nem szervezeti rendszerekben történő közzétételét (pl.: nem szervezethez köthető publikusan elérhető weboldalak, fórumok és közösségi média) az érintett szervezet szabályozásában kezelni kell.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a nyilvános információk közzétételével kapcsolatos feladatok ellátásról. Meg kell határoznia, hogy kik azok a személyek, akik jogosultak nyilvános elérésre szánt információk közzétételére.\n2. A szervezetnek tájékoztatást kell nyújtania a jogosult személyeknek annak érdekében, hogy képesek legyenek annak a megállapítására, hogy mely információk tehetők nyilvánosan elérhetővé.\n3. A szervezetnek át kell tekintenie az információ tartalmát közzététel előtt és meg kell bizonyosodnia róla, hogy a közzétételre szánt információ nem tartalmaz olyan információt amely nem minősül nyilvánosnak.\n4. A szervezetnek meghatározott gyakorisággal át kell tekintenie a nyilvánosan elérhető tartalmakat, hogy azok tartalmaznak-e nem nyilvános információkat. Amennyiben a szervezet felfedez nyilvánosan elérhető nem nyilvános tartalmat, akkor gondoskodnia kell annak minél hamarabbi eltávolításáról.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "AC-22",
          "requirement_family": "2",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "2.124"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "2.124 – Nyilvánosan elérhető tartalom végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott hozzáférési szabály, konfigurációexport, jogosultsági vagy hozzáférési teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-064",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "2.124 – Nyilvánosan elérhető tartalom: 1) A szervezetnek gondoskodnia kell a nyilvános információk közzétételével kapcsolatos feladatok ellátásról. 2) A szervezetnek tájékoztatást kell nyújtania a jogosult személyeknek annak érdekében, hogy képesek legyenek annak a megállapítására, hogy mely információk tehetők nyilvánosan elérhetővé. 3) A szervezetnek meghatározott gyakorisággal át kell tekintenie a nyilvánosan elérhető tartalmakat, hogy azok tartalmaznak-e nem nyilvános információkat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "3.2",
          "control_title": "Biztonságtudatossági képzés",
          "explanation": "Az érintett szervezet alap- és haladó szintű biztonságtudatossági képzést biztosít a felhasználók számára, mely magában foglalja a felhasználók tudásszintjének mérését is. A szervezet a biztonságtudatossági képzés tartalmát a szervezeti követelmények, a felhasználók által elérhető rendszerek, és a munkakörnyezet alapján (pl.: távmunka) határozzák meg. A képzés tartalma magában foglalja a biztonság szükségességének megértését, a felhasználók által a biztonság fenntartása érdekében megteendő intézkedéseket, valamint a biztonsági eseményekre történő reagálást. A képzés hangsúlyozza a biztonságos működés fontosságát. A biztonságtudatosság erősítésére használt eszközök közé sorolhatjuk a plakátok kihelyezését, a biztonsági emlékeztetőkkel ellátott tárgyak biztosítását, a bejelentkezési képernyőn üzenetek elhelyezését, a szervezet vezetőitől kapott e-mailes figyelmeztetéseket vagy tanácsokat, valamint tudatosító események lebonyolítását.\nA kezdeti képzést követően a biztonságtudatossági képzést a szervezetre vonatkozó hatályos jogszabályok, irányelvek, szabályozások, szabványok és ajánlások alapján meghatározott  minimális gyakorisággal kell lefolytatni. A későbbi biztonságtudatossági képzés egy vagy több rövid ad hoc képzéssel is teljesíthető és tartalmazhat aktuális információkat a legutóbbi támadási sémákról, a szervezeti biztonsági irányelvek változásairól, a felülvizsgált biztonsági elvárásokról vagy a kezdeti képzés témaköreinek egyes részeiből. A biztonságtudatossági képzés és a figyelemfelhívó anyagok rendszeres frissítése segít abban, hogy a tartalom releváns maradjon. A biztonságtudatossági képzés tartalmi frissítését kiváltó események többek között lehetnek értékelésből vagy felülvizsgálatból eredő megállapítások, biztonsági események, vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia egy alap- és haladó szintű biztonságtudatossági képzést és azokat meg kell tartania a felhasználók számára, mely magában foglalja a felhasználók tudásszintjének mérését is. A felhasználók alatt a vezetők, felsővezetők és a szervezet szerződéses partnerei is értendők.\n2.  A szervezetnek a biztonságtudatossági képzés tartalmát a szervezeti követelmények, a felhasználók által elérhető rendszerek, és a munkakörnyezet alapján (pl.: távmunka) kell meghatároznia.\n3. A szervezetnek úgy kell kidolgoznia a biztonságtudatossági képzést, hogy az képes legyen megértetni a felhasználókkal a biztonság fontosságát és szükségességét. Emellett tartalmaznia kell, hogy a felhasználóknak milyen intézkedéseket kell megtenniük, hogy elősegítsék a biztonság fenntartását. A képzésnek arra is ki kell térnie , hogy egy felhasználónak hogyan kell reagálnia egy biztonsági eseményre pl.: hová kell bejelentenie a felhasználónak egy általa biztonsági eseménynek vélt történést.\n3. A szervezetnek meg kell határoznia, hogy milyen biztonságtudatosságot elősegítő eszközöket fog használni és a gyakorlatban is alkalmaznia kell azokat pl.: plakátok kihelyezése, biztonsági emlékeztetőkkel ellátott tárgyak biztosítása, a bejelentkezési képernyőn üzenetek elhelyezését, a szervezet vezetőitől kapott e-mailes figyelmeztetések vagy tanácsok, valamint biztonságtudatosságot erősítő események lebonyolítása. A biztonságtudatosságot erősítő események közé sorolható egy adathalász kampány szimulálása.\n4. A kezdeti képzést követően a szervezetnek a vonatkozó hatályos jogszabályok, irányelvek, szabályozások, szabványok és ajánlások alapján meghatározott  minimális gyakorisággal kell lefolytatnia a biztonságtudatossági képzéseket.\n5. A kezdeti képzést követő biztonságtudatossági képzés egy vagy több rövid ad hoc képzéssel is teljesíthető és tartalmazhat aktuális információkat a legutóbbi támadási sémákról, a szervezeti biztonsági irányelvek változásairól, a felülvizsgált biztonsági elvárásokról vagy a kezdeti képzés témaköreinek egyes részeiből.\n6. A szervezetnek rendszeresen felül kell vizsgálnia és szükség esetén frissítenie kell a biztonságtudatossági képzést és a figyelemfelhívó anyagokat annak érdekében, hogy azok tartalma releváns maradjon.\n7. A szervezetnek a biztonságtudatossági képzés tartalmát frissítenie kell a meghatározott események bekövetkezését követően pl.: értékelésből vagy felülvizsgálatból eredő megállapítások, biztonsági események, vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban.\n8. A szervezetnek be kell építenie a belső és külső biztonsági eseményekből levont tanulságokat a biztonságtudatossági képzési anyagokba, valamint az alkalmazott biztonságtudatossági eszközrendszerébe.\n9. A szervezetnek dokumentálnia kell a biztonságtudatossági képzések lebonyolítását pl.: jelenléti ívek használata, automatikusan generált részvételi igazolás.",
          "iso_27001_ref": "7.3; A.6.3; A.8.7",
          "nist_sp_800_53_rev5_ref": "AT-2",
          "requirement_family": "3",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "3.2"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "3.2 – Biztonságtudatossági képzés végrehajtási csomag: jóváhagyott EIR-scope, 10 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott képzési terv és anyag, résztvevői nyilvántartás, tudásellenőrzés és felülvizsgálati rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 10 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-065",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "3.2 – Biztonságtudatossági képzés: 1) A szervezetnek ki kell dolgoznia egy alap- és haladó szintű biztonságtudatossági képzést és azokat meg kell tartania a felhasználók számára, mely magában foglalja a felhasználók tudásszintjének mérését is. 2) A szervezetnek a biztonságtudatossági képzés tartalmát a szervezeti követelmények, a felhasználók által elérhető rendszerek, és a munkakörnyezet alapján (pl.: távmunka) kell meghatároznia. 3) A szervezetnek dokumentálnia kell a biztonságtudatossági képzések lebonyolítását pl.: jelenléti ívek használata, automatikusan generált részvételi igazolás. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Tudatosság és képzés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "3.4",
          "control_title": "Biztonságtudatossági képzés – Belső fenyegetés",
          "explanation": "A belső fenyegetések potenciális tünete és lehetséges előjele lehet a szélsőséges és hosszú ideig tartó munkahelyi elégedetlenség, a munkavégzéshez nem szükséges információkhoz való hozzáférési kísérlet, a pénzügyi forrásokhoz történő megmagyarázhatatlan hozzáférési kísérlet, a munkatársak zaklatása vagy bántalmazása, a munkahelyi erőszak és a szabályzatok, eljárások, utasítások, szabályok vagy gyakorlatok súlyos megsértése. A biztonságtudatossági képzésnek tartalmaznia kell, hogy a munkavállalók és a vezetőség hogyan kommunikálhatják az észrevételeiket a belső fenyegetések potenciális jeleivel kapcsolatban. A szervezet erre a célra létesíthet - a meghatározott szabályzatokkal és eljárásrendekkel összhangban - egy kommunikációs csatornát.\nA szervezet megfontolhatja a belső fenyegetésekkel kapcsolatos tudatosság témáinak személyre szabását az érintettek szerepköre szerint. Például a vezetőknek szóló képzés a beosztottak viselkedésének változásaira összpontosíthat, míg az alkalmazottaknak szóló képzés általánosabb megfigyelésekre összpontosíthat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek tisztában kell lennie azzal, hogy mi a belső fenyegetés és mik lehetnek annak potenciális jelei. Illetve mindez milyen veszélyekkel járhat a szervezet egészére nézve.\n2. A szervezetnek törekednie kell a belső fenyegetések potenciális jeleinek felismerésére és meg kell tennie a szükséges intézkedéseket, melyekkel igyekszik csökkenteni a fenyegetés mértékét vagy megszüntetni azt.\n3. A szervezetnek a biztonságtudatossági képzés keretében foglalkoznia kell a belső fenyegetéssel. A képzésnek tartalmaznia kell, hogy mi számít belső fenyegetésnek, mik lehetnek a belső fenyegetés potenciális jelei. Emellett a képzésben szerepelnie kell annak, hogy a munkavállalók milyen kommunikációs csatornán keresztül jelezhetik, amennyiben belső fenyegetsére utaló történést érzékelnek.\n4. A szervezet a belső fenyegetéssel kapcsolatos tudnivalók oktatását megvalósíthatja személyre szabottan is, az érintettek szerepköre szerint. Például a vezetőknek szóló képzés a beosztottak viselkedésének változásaira összpontosíthat, míg az alkalmazottaknak szóló képzés általánosabb megfigyelésekre összpontosíthat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "AT-2(2)",
          "requirement_family": "3",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "3.4"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "3.4 – Biztonságtudatossági képzés – Belső fenyegetés végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott képzési terv és anyag, résztvevői nyilvántartás, tudásellenőrzés és felülvizsgálati rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-066",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "3.4 – Biztonságtudatossági képzés – Belső fenyegetés: 1) A szervezetnek tisztában kell lennie azzal, hogy mi a belső fenyegetés és mik lehetnek annak potenciális jelei. 2) A szervezetnek törekednie kell a belső fenyegetések potenciális jeleinek felismerésére és meg kell tennie a szükséges intézkedéseket, melyekkel igyekszik csökkenteni a fenyegetés mértékét vagy megszüntetni azt. 3) A szervezet a belső fenyegetéssel kapcsolatos tudnivalók oktatását megvalósíthatja személyre szabottan is, az érintettek szerepköre szerint. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Tudatosság és képzés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "3.9",
          "control_title": "Szerepkör alapú biztonsági képzés",
          "explanation": "Az érintett szervezet a képzés tartalmát az egyének által betöltött szerepkörök és felelősségek, valamint a szervezet biztonsági követelményei alapján határozza meg, beleértve a személyzetnek az EIR-hez való hozzáférését is, amely speciálisan az adott feladatokra szabott technikai képzést tartalmaz. A szerepköralapú képzést igénylő szerepek közé tartoznak a vezetők vagy a menedzsment tagjai, EIR tulajdonosok; engedélyező tisztviselők; biztonsági tisztviselők; adatvédelmi tisztviselők; beszerzési tisztviselők; rendszer tervezőmérnökök; rendszermérnökök; szoftverfejlesztők; biztonsági mérnökök; rendszer-, hálózati és adatbázis-adminisztrátorok; központi naplózás adminisztátorai; konfigurációkezelési tevékenységeket végző személyek; ellenőrzési tevékenységeket végző személyek; rendszerszintű szoftverhez hozzáféréssel rendelkező személyek; vészhelyzeti és biztonsági eseménykezelési feladatokat ellátó személyek; adatvédelmi feladatokat ellátó személyek; és személyes adatokhoz hozzáféréssel rendelkező személyek.\nA szerepköralapú képzés átfogóan kezeli a menedzsment, az operatív és a technikai szerepeket és felelősségeket, beleértve a fizikai, személyi és technikai ellenőrzéseket. A szerepköralapú képzés magában foglalja a biztonsági szerepekre vonatkozó szabályokat, eljárásokat, eszközöket, módszereket és dokumentumokat. A szervezet a szükséges képzést biztosítja az egyének számára, hogy képesek legyenek ellátni az operatív és ellátási lánc kockázatkezelési feladataikat a szervezet biztonsági elvárásainak megfelelően. A képzés típusai közé tartozik a web-alapú- és számítógépes képzés, a dedikált helyiségben megtartott képzés és a gyakorlati képzés is. A szerepköralapú képzés rendszeres frissítése segít annak biztosításában, hogy a képzés tartalma továbbra is releváns és hatékony maradjon. A szerepkör alapú biztonságtudatossági képzés tartalmi frissítését kiváltó események többek között lehetnek értékelésből vagy felülvizsgálatból eredő megállapítások, biztonsági események, vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek szerepkör alapú biztonsági képzést kell biztosítania a felhasználóknak. A képzés tartalmát az egyének által betöltött szerepkörök és felelősségek, valamint az érintett szervezet biztonsági követelményei határozzák meg.\n2. A kezdeti képzést követően a szervezetnek a vonatkozó hatályos jogszabályok, irányelvek, szabályozások, szabványok és ajánlások alapján meghatározott  minimális gyakorisággal kell lefolytatnia a biztonságtudatossági képzéseket.\n3. A képzésnek meg kell előznie az EIR-hez vagy az információhoz való hozzáférés biztosítását, vagy a kijelölt feladat végrehajtását. A képzést rendszeresen, az érintett szervezet által meghatározott gyakorisággal meg kell ismételni.\n4. A szervezetnek rendszeresen, illetve az érintett szervezet által meghatározott események bekövetkezése után is frissítenie kell a szerepköralapú képzés tartalmát.\n5. A szervezetnek be kell építenie a belső vagy külső biztonsági eseményekből levont tanulságokat a szerepköralapú biztonsági képzésekbe.",
          "iso_27001_ref": "A.6.3",
          "nist_sp_800_53_rev5_ref": "AT-3",
          "requirement_family": "3",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "3.9"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "3.9 – Szerepkör alapú biztonsági képzés végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott képzési terv és anyag, résztvevői nyilvántartás, tudásellenőrzés és felülvizsgálati rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-067",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "3.9 – Szerepkör alapú biztonsági képzés: 1) A szervezetnek szerepkör alapú biztonsági képzést kell biztosítania a felhasználóknak. 2) A kezdeti képzést követően a szervezetnek a vonatkozó hatályos jogszabályok, irányelvek, szabályozások, szabványok és ajánlások alapján meghatározott minimális gyakorisággal kell lefolytatnia a biztonságtudatossági képzéseket. 3) A szervezetnek be kell építenie a belső vagy külső biztonsági eseményekből levont tanulságokat a szerepköralapú biztonsági képzésekbe. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Tudatosság és képzés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "4.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A naplózást és elszámoltathatóságot magában foglaló szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a naplózást és elszámoltathatóságot magában foglaló szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a naplózást és elszámoltathatóságot magában foglaló szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a naplózást és elszámoltathatóságot magában foglaló szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális naplózást és elszámoltathatóságot magában foglaló szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "AU-1",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "4.1"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "4.1 – Szabályzat és eljárásrendek végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "naplózási szabály, read-only konfigurációexport, mintanapló, megőrzési és hozzáférési ellenőrzés, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-068",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "4.1 – Szabályzat és eljárásrendek: 1) A szervezetnek gondoskodnia kell a naplózást és elszámoltathatóságot magában foglaló szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról. 2) A szervezetnek meg kell bizonyosodnia arról, hogy a naplózást és elszámoltathatóságot magában foglaló szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak. 3) A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális naplózást és elszámoltathatóságot magában foglaló szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "4.25",
          "control_title": "Naplóinformációk védelme",
          "explanation": "A naplóinformációk magukban foglalják az EIR-ben végrehajtott tevékenységek sikeres ellenőrzéséhez szükséges összes információt, például a naplóbejegyzéseket, a naplófájlok beállításait, a vizsgálati jelentéseket és a személyazonosításra alkalmas információkat. A naplókezelő eszközök azok a programok és eszközök, amelyeket az EIR naplózására és a naplózási tevékenységek elvégzésére használnak. Az naplóinformációk védelme a technikai védelemre összpontosít, és a naplókezelő eszközökhöz történő hozzáférést és azok futtatását az arra jogosult személyekre korlátozza. A naplóinformációk fizikai védelmét mind az adathordozók védelmének intézkedései, mind a fizikai és környezeti védelem intézkedései biztosítják. A naplóinformációkhoz történő jogosulatlan hozzáférés felügyelete kritikus fontosságú a kiberbiztonsági események gyors észleléséhez és kezeléséhez, valamint az érintett szervezet kiberbiztonsági állapotának folyamatos monitorozásához.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy az EIR-ben végrehajtott tevékenységek sikeres ellenőrzéséhez szükséges összes információ rendelkezésre álljon pl.: naplóbejegyzések, naplófájlok beállításai, a vizsgálati jelentéseket és a személyazonosításra alkalmas információk.\n2. A szervezetnek kiemelt figyelmet kell fordítania a naplóinformációk technikai védelmére. Korlátoznia kell a naplózási eszközökhöz történő hozzáférést, annak érdekében, hogy megakadályozza a jogosulatlan hozzáférést, módosítást, illetve törlést.\n4. A szervezetnek fizikailag is meg kell védenie kell a naplóinformációkat. A naplóinformációk fizikai védelmét a szervezet az adathordozók védelmére, illetve a fizikai és környezeti védelemre vonatkozó biztonsági követelmények betartásával tudja biztosítani.\n5. A szervezetnek úgy kell beállítania az EIR-t, hogy amennyiben jogosulatlan hozzáférést, módosítást vagy a naplóinformációk törlését észleli, képes legyen értesítést küldeni a meghatározott személyeknek vagy szerepköröknek.",
          "iso_27001_ref": "A.5.33; A.8.15",
          "nist_sp_800_53_rev5_ref": "AU-9",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "4.25"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "4.25 – Naplóinformációk védelme végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "naplózási szabály, read-only konfigurációexport, mintanapló, megőrzési és hozzáférési ellenőrzés, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-069",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "4.25 – Naplóinformációk védelme: 1) A szervezetnek biztosítania kell, hogy az EIR-ben végrehajtott tevékenységek sikeres ellenőrzéséhez szükséges összes információ rendelkezésre álljon pl.: naplóbejegyzések, naplófájlok beállításai, a vizsgálati jelentéseket és a személyazonosításra alkalmas információk. 2) A szervezetnek kiemelt figyelmet kell fordítania a naplóinformációk technikai védelmére. 3) A szervezetnek úgy kell beállítania az EIR-t, hogy amennyiben jogosulatlan hozzáférést, módosítást vagy a naplóinformációk törlését észleli, képes legyen értesítést küldeni a meghatározott személyeknek vagy szerepköröknek. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "4.38",
          "control_title": "A naplóbejegyzések megőrzése",
          "explanation": "A szervezet a naplóbejegyzéseket addig őrzi meg, amíg meg nem állapítja, hogy azokra már nincs szükség és nem használhatók fel adminisztratív, jogi, naplózási vagy egyéb működési célokra. A naplóbejegyzések megőrzését és elérhetőségét biztosítani kell a vonatkozó jogszabályok szerint arra az esetre is, ha egy illetékes hatóság (pl.: rendvédelmi szerv) megkeresést küld a szervezetnek. A szervezet standard kategóriákat dolgoz ki a naplóbejegyzések számára az ilyen típusú intézkedésekkel kapcsolatban, és standard válaszadási folyamatot dolgoz ki minden egyes intézkedéstípushoz.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a naplóbejegyzések megőrzésének időtartamát, figyelembe véve az adminisztratív, jogi, naplózási és egyéb működési szempontokat.\n2. A szervezetnek biztosítania kell a naplóbejegyzések elérhetőségét az esetleges hatósági megkeresések esetére.\n3. A szervezetnek standard kategóriákat kell kialakítania a naplóbejegyzések besorolására.\n4. A szervezetnek standard válaszadási folyamatokat kell kidolgoznia a hatósági keresések kezelésére.",
          "iso_27001_ref": "A.5.28; A.8.15",
          "nist_sp_800_53_rev5_ref": "AU-11",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "4.38"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "4.38 – A naplóbejegyzések megőrzése végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "naplózási szabály, read-only konfigurációexport, mintanapló, megőrzési és hozzáférési ellenőrzés, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-070",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "4.38 – A naplóbejegyzések megőrzése: 1) A szervezetnek meg kell határoznia a naplóbejegyzések megőrzésének időtartamát, figyelembe véve az adminisztratív, jogi, naplózási és egyéb működési szempontokat. 2) A szervezetnek biztosítania kell a naplóbejegyzések elérhetőségét az esetleges hatósági megkeresések esetére. 3) A szervezetnek standard válaszadási folyamatokat kell kidolgoznia a hatósági keresések kezelésére. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "4.40",
          "control_title": "Naplóbejegyzések létrehozása",
          "explanation": "Az EIR különböző elemeiből naplóbejegyzések generálhatóak. Az események utólagos kivizsgálásában támogatást nyújtó eseménytípusok azok az eseménytípusok, amelyekre naplóbejegyzéseket kell generálni, és ezek csak egy részét képezik az összes eseménytípusnak, amelyekre az EIR képes naplóbejegyzéseket generálni. Az eseménytípusokra vonatkozó előírások a \"Naplózható események\" kontrollnál kerültek bővebben kifejtésre.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Az EIR-nek képesnek kell lennie naplóbejegyzések generálni a \"Naplózható események\" pontban meghatározott előírásoknak megfelelően.\n2. Az EIR-nek lehetővé kell tennie meghatározott személyeknek vagy szerepköröknek, hogy kiválasszák, mely naplózható események legyenek naplózva az EIR egyes elemei által.\n3. Az EIR-nek naplóbejegyzéseket kell előállítania a \"Naplózható események\" pont szerinti eseményekre az \"Naplóbejegyzések tartalma\" pontban meghatározott tartalommal.\n4. Az érintett szervezetnek biztosítania kell, hogy az EIR működése megfeleljen a fenti követelményeknek.",
          "iso_27001_ref": "A.8.15",
          "nist_sp_800_53_rev5_ref": "AU-12",
          "requirement_family": "4",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "4.40"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "4.40 – Naplóbejegyzések létrehozása végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "naplózási szabály, read-only konfigurációexport, mintanapló, megőrzési és hozzáférési ellenőrzés, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-071",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "4.40 – Naplóbejegyzések létrehozása: 1) Az EIR-nek képesnek kell lennie naplóbejegyzések generálni a \"Naplózható események\" pontban meghatározott előírásoknak megfelelően. 2) Az EIR-nek lehetővé kell tennie meghatározott személyeknek vagy szerepköröknek, hogy kiválasszák, mely naplózható események legyenek naplózva az EIR egyes elemei által. 3) Az érintett szervezetnek biztosítania kell, hogy az EIR működése megfeleljen a fenti követelményeknek. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "5.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A biztonságértékelési szabályzatnak és a kapcsolódó eljárásrend(ek)nek illeszkednie kell az érintett szervezet kockázatkezelési stratégiájához. A megfelelő minőségben és megfelelő szempontok mentén elkészített szabályzatok és eljárásrendek nagy mértékben járulnak hozzá a szervezet biztonságának megőrzéséhez. Az elkészült szabályzatoknak és eljárásrendeknek összhangban kell lenniük egymással és a szervezet információbiztonsági környezetével. A szervezeti szintű biztonsági szabályzatok és eljárásrendek használata általában előnyösebb, hiszen szükségtelenné teheti a különböző szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szervezet azonban dönthet úgy (amennyiben a szervezet felépítése ezt indokolja), hogy a szabályzati szinten megjelenő követelményeket egy általános biztonsági szabályzatban [pl.: Információbiztonsági Szabályzat (IBSZ)], vagy több szabályzatban implementálja, míg az eljárásrendek szintjén megjelenő követelményeket (melyek a szabályzatban foglalt követelményeket részletezik rendszer- és szerepköri szinten) beépítheti a rendszerbiztonsági tervébe, vagy több különböző dokumentumban jeleníti meg azokat. A szervezetnek kiemelt figyelmet kell fordítania mind a szabályzat, mind az eljárásrendek megfelelő frissítésére. A frissítéseket kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. A szervezetnek szem előtt kell tartania, hogy az elvárt védelmi intézkedések egyszerű újraközlése nem minősülhet szervezeti szabályzatnak vagy eljárásrendnek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a biztonságértékelési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a biztonságértékelési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a biztonságértékelési szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális biztonságértékelési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; 9.2.2; 9.3.1; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "CA-1",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "5.1"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "5.1 – Szabályzat és eljárásrendek végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-072",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "5.1 – Szabályzat és eljárásrendek: 1) A szervezetnek gondoskodnia kell a biztonságértékelési szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról. 2) A szervezetnek meg kell bizonyosodnia arról, hogy a biztonságértékelési szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak. 3) A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális biztonságértékelési szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "5.2",
          "control_title": "Biztonsági értékelések",
          "explanation": "A szervezet biztosítja, hogy a védelmi intézkedések értékelői rendelkezzenek a szükséges készségekkel és technikai szakértelemmel a hatékony értékelési tervek kidolgozásához és a rendszerspecifikus, hibrid, közös (több szervezetet érintő, ágazati, stb.) és az információbiztonsági irányítási rendszert érintő védelmi intézkedések értékelésének elvégzéséhez. A szükséges készségek közé tartozik a kockázatkezelési koncepciók és megközelítések általános ismerete, valamint a hardver, szoftver és firmware rendszerelemek átfogó ismerete és tapasztalata.\nA szervezet értékeli az EIR-ek és a működési környezetük vonatkozásában alkalmazott védelmi intézkedéseket a kezdeti és folyamatos engedélyezés, a folyamatos felügyelet, az éves értékelések, a rendszertervezés és -fejlesztés, a rendszerbiztonsági tervezés, valamint a rendszerfejlesztési életciklus részeként.  Az értékelések segítenek biztosítani, hogy a szervezetek megfeleljenek az információbiztonsági követelményeknek, azonosítsák a rendszertervezési és -fejlesztési folyamat gyengeségeit és hiányosságait, az engedélyezési folyamatok részeként kockázatalapú döntések meghozatalához szükséges alapvető információkat szolgáltassanak, és megfeleljenek a sérülékenységeket csökkentő eljárásoknak. A szervezet a biztonsági tervekben dokumentált módon végzi el a megvalósított védelmi intézkedések értékelését. Az értékelések a rendszerfejlesztési életciklus során is elvégezhetők a rendszertervezési és rendszerbiztonsági tervezési folyamatok részeként. A védelmi intézkedések tervezése értékelhető az ajánlattételi felhívások kidolgozása, a válaszok értékelése és a tervezési felülvizsgálatok elvégzése során. Ha a fejlesztés során értékelik az ellenőrzések végrehajtására vonatkozó tervet és a tervnek megfelelő későbbi végrehajtást, a végső ellenőrzési tesztelés lehet egy egyszerű megerősítés a korábban elvégzett ellenőrzési értékelés felhasználásával és az eredmények összesítésével.\nA szervezet kidolgozhat egyetlen, összevont biztonsági értékelési tervet az EIR-re vonatkozóan, illetve fenntarthat külön terveket is. Az összevont értékelési terv egyértelműen meghatározza az ellenőrzési értékeléssel kapcsolatos szerepeket és felelősségi köröket. Ha egy EIR értékelésében több szervezet is részt vesz, az összehangolt megközelítés csökkentheti a redundanciákat és a kapcsolódó költségeket.\nA szervezet más típusú értékelési tevékenységeket, például sérülékenységszkennelést és rendszerfelügyeletet is alkalmazhat a rendszerek biztonsági helyzetének fenntartására a rendszer életciklusa során. Az értékelési jelentések a szervezet által szükségesnek ítélt megfelelő részletességgel dokumentálják az értékelési eredményeket, annak érdekében, hogy meghatározható legyen a jelentések pontossága és teljessége, valamint azt, hogy az ellenőrzések helyesen vannak-e végrehajtva, a tervezett módon működnek-e, és a kívánt eredményt hozzák-e a követelmények teljesítése tekintetében. Az értékelési eredményeket az elvégzett értékelések típusának megfelelő személyek vagy szerepkörök kapják meg. Például az engedélyezési döntések alátámasztására végzett értékeléseket az engedélyező tisztviselők, a vezető információbiztonsági tisztviselők és az engedélyező tisztviselők kijelölt képviselői kapják meg.\nAz éves értékelési követelmények teljesítéséhez a szervezet a következő forrásokból származó értékelési eredményeket használhatja: kezdeti vagy folyamatos rendszerengedélyezés, folyamatos felügyelet, rendszertervezési folyamatok vagy rendszerfejlesztési életciklussal kapcsolatos tevékenységek. A szervezet biztosítja, hogy az értékelési eredmények naprakészek, az ellenőrzés hatékonyságának meghatározása szempontjából relevánsak, és az azokat készítő értékelő kellően független volt. A meglévő védelmi intézkedések értékelési eredményei újra felhasználhatók, amennyiben az eredmények még mindig érvényesek, és szükség szerint további értékelésekkel is kiegészíthetők. A kezdeti jóváhagyások után a szervezet a folyamatos ellenőrzés során értékeli a védelmi intézkedéseket. A szervezet a folyamatos értékelések gyakoriságát is a szervezetben meglévő, folyamatos felügyeleti stratégiákkal összhangban határozza meg. A külső ellenőrzések (pl.: felügyeleti szervek által lefolytatott biztonsági értékelés) nem tartoznak a biztonsági értékelések alá.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy a védelmi intézkedések értékelői rendelkezzenek a szükséges készségekkel és technikai szaktudással a hatékony értékelési tervek kialakításához és a rendszerspecifikus, hibrid, közös és programkezelési kontrollok értékeléséhez, amennyiben ez szükséges. A szükséges készségek közé tartozik az általános ismeret a kockázatkezelési koncepciókról és megközelítésekről, valamint átfogó ismeretek és tapasztalat az EIR hardver, szoftver és firmware komponenseivel kapcsolatban.\n2. A szervezetnek értékelnie kell az EIR, illetve az EIR működési környezetét érintő védelmi intézkedéseket, beleértve az elsődleges és folyamatos engedélyezés, a folyamatos felügyelet, az éves értékelések, a rendszertervezés és fejlesztés, a rendszerbiztonsági tervezés és az rendszerfejlesztési életciklus részét. Az értékelések segítenek biztosítani, hogy a szervezet megfeleljen az információbiztonsági követelményeknek, azonosítsa a rendszertervezési és fejlesztési folyamatának gyengeségeit és hiányosságait, szükséges információkat szolgáltasson a kockázatalapú döntések meghozatalához az engedélyezési folyamatok során, és megfeleljen a sérülékenységek enyhítésére vonatkozó eljárásoknak.\n3. A szervezetnek el kell döntenie, hogy egyetlen, összevont biztonsági értékelési tervet készít az EIR számára, vagy külön terveket tart fenn. Egy összevont értékelési terv világosan meghatározza a védelmi intézkedésekkel kapcsolatos értékelő szerepköröket.\n4. A szervezetnek meg kell fontolnia más típusú értékelési tevékenységek használatát is, mint például a sérülékenységszkennelés és a rendszerfelügyelet, annak érdekében, hogy fenntartsa az EIR biztonsági állapotát az EIR életciklusa során.\n5. A szervezetnek gondoskodnia kell arról, hogy az értékelési jelentések a szervezet által szükségesnek ítélt megfelelő részletességgel dokumentálja az értékelési eredményeket, annak érdekében, hogy meghatározható legyen a jelentések pontossága és teljessége, valamint az, hogy az ellenőrzések helyesen vannak-e végrehajtva, a tervezett módon működnek-e, és a kívánt eredményt hozzák-e a követelmények teljesítése tekintetében.\n6. A szervezetnek gondoskodnia kell arról, hogy értékelési eredményeket az adott értékelések típusának megfelelő illetékes személyek vagy szerepkörök megkapják. Például az engedélyezési döntések támogatására végzett értékeléseket az engedélyező tisztségviselő.\n7. A szervezetnek gondoskodnia kell az értékelések során feltárt kockázatok kezeléséről. Erre vonatkozóan intézkedési tervet kell készíteni, és gondoskodni kell annak folyamatos monitorozásáról, ill. az abban szereplő feladatok végrehajtásáról.",
          "iso_27001_ref": "9.2; 9.2.1; 9.2.2; A.5.30; A.5.36; A.8.29",
          "nist_sp_800_53_rev5_ref": "CA-2",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "5.2"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "5.2 – Biztonsági értékelések végrehajtási csomag: jóváhagyott EIR-scope, 7 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 7 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-073",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "5.2 – Biztonsági értékelések: 1) A szervezetnek biztosítania kell, hogy a védelmi intézkedések értékelői rendelkezzenek a szükséges készségekkel és technikai szaktudással a hatékony értékelési tervek kialakításához és a rendszerspecifikus, hibrid, közös és programkezelési kontrollok értékeléséhez, amennyiben ez szükséges. 2) A szervezetnek értékelnie kell az EIR, illetve az EIR működési környezetét érintő védelmi intézkedéseket, beleértve az elsődleges és folyamatos engedélyezés, a folyamatos felügyelet, az éves értékelések, a rendszertervezés és fejlesztés, a rendszerbiztonsági tervezés és az rendszerfejlesztési életciklus részét. 3) A szervezetnek gondoskodnia kell az értékelések során feltárt kockázatok kezeléséről. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "5.4",
          "control_title": "Biztonsági értékelések – Kiberbiztonsági audit",
          "explanation": "A védelmi intézkedés a Kibertantv. hatálya alá tartozó szervezetek esetében kötelező. A Kibertantv. 23. § (1) bekezdés szerinti intézkedés értendő alatta: „Az érintett szervezet az e törvény szerinti kiberbiztonsági követelményeknek való megfelelés bizonyítására köteles kétévente a tevékenység végzésére jogosult, független auditor (a továbbiakban: auditor) által kiberbiztonsági auditot végeztetni.”",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "A végrehajtásra irányadó rendelkezésekről az alábbi linken lehet tájékozódni:  https://sztfh.hu/tevekenysegek/kiberbiztonsagi-tanusitas/kiberbiztonsagi-felugyelet/",
          "iso_27001_ref": "9.2.2; A.5.35",
          "nist_sp_800_53_rev5_ref": "CA-2(1)",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "5.4"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "5.4 – Biztonsági értékelések – Kiberbiztonsági audit végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-074",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "5.4 – Biztonsági értékelések – Kiberbiztonsági audit: 1) Az SRC-010 hatályos követelménye és a hatósági/auditori feltételek alapján rögzítse az audit hatókörét, az érintett EIR-eket és az auditütemezést. 2) Ellenőrizze és dokumentálja az auditor jogosultságát, függetlenségét, szerződéses kereteit és a szükséges információátadást. 3) Őrizze meg a jóváhagyott auditjelentést, a javítási evidenciákat és a lezáró vezetői döntést védett tárban. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "5.7",
          "control_title": "Információcsere",
          "explanation": "Az EIR és más rendszerek közti rendszerinformáció-csere követelményei a két vagy több rendszer közötti információcserére vonatkoznak. A rendszerinformáció-csere magában foglalja a bérelt vonalakon vagy virtuális magánhálózatokon keresztül történő kapcsolatokat, az internetszolgáltatókkal való kapcsolatokat, az adatbázisok megosztását vagy az adatbázis-tranzakciós információk cseréjét, a felhőszolgáltatásokkal való kapcsolatokat és cseréket, a webalapú szolgáltatásokon keresztül történő cseréket vagy a fájlok cseréjét fájlátviteli protokollokon, hálózati protokollokon, e-mailen vagy más szervezetek közötti kommunikáción keresztül. A szervezetek figyelembe veszik az új vagy megnövekedett fenyegetésekkel kapcsolatos kockázatokat, amelyek akkor merülhetnek fel, amikor az EIR-ek más rendszerekkel cserélnek információt, amelyek eltérő biztonsági követelményekkel és védelmi intézkedésekkel rendelkeznek. Ez magában foglalja a szervezeten belüli és a szervezeten kívüli rendszereket is.\nAz engedélyezésre jogosult felelősők meghatározzák az EIR információcseréjéhez kapcsolódó kockázatot és a megfelelő követelményeket a kockázatcsökkentéshez.\nA kiválasztott megállapodás-típusok olyan tényezőkön alapulnak, mint például a cserében érintett információ hatásszintje, az információt kicserélő szervezetek közötti kapcsolat (pl. kormányzat a kormányzat között, kormányzat a vállalkozások között, vállalkozás a vállalkozás között, kormányzat vagy vállalkozás a szolgáltató között, kormányzat vagy vállalkozás a magánszemély között), vagy a másik rendszer felhasználóinak a szervezeti EIR-hez való hozzáférési szintje. Ha az információt cserélő rendszereknek ugyanaz az engedélyezésre jogosult felelőse, a szervezetnek nem kell megállapodásokat kidolgoznia. Ehelyett a rendszerek közötti interfész jellemzőit (pl. hogyan történik az információcsere?, hogyan védik az információt?) a vonatkozó biztonsági tervekben írják le. A szervezet a megállapodással kapcsolatos információkat beépítheti a hivatalos szerződésekbe, különösen az állami és a nem állami szervezetek (beleértve a szolgáltatókat, vállalkozókat, rendszerfejlesztőket és rendszerintegrátorokat) között létrejött információcserék esetében. A kockázati megfontolások magukban foglalják az azonos hálózatokon osztozó rendszereket is.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek jóvá kell hagynia és szabályoznia kell az információcserét az EIR és más rendszerek között, összhangban a kapcsolódásokra és az információcserére vonatkozó biztonsági megállapodásokkal. Ezt figyelembe véve, a szervezetnek figyelembe kell vennie a szolgáltatási szintre, a felhasználókra és a titoktartásra vonatkozó, valamint a szervezet által meghatározott egyéb megállapodásokat.\n2. A szervezetnek minden egyes információcsere-megállapodás keretében dokumentálnia kell az EIR interfészeinek jellemzőit, biztonsági követelményeit, védelmi intézkedéseit és felelősségi körét. Ezen felül rögzítenie kell a megosztott információk hatásának szintjét is.\n3. A szervezetnek rendszeres időközönként felül kell vizsgálnia és frissítenie kell a megállapodásokat.\n4. A szervezetnek figyelembe kell vennie a kockázatot, amelyet az új vagy növekvő fenyegetések jelenthetnek, amikor az EIR információt cserél más rendszerekkel, amelyek eltérő biztonsági követelményekkel és védelmi intézkedésekkel rendelkezhetnek.\n5. Ha az információt cserélő EIR-eknek ugyanaz az engedélyező tisztviselője, akkor az érintett szervezetnek nem kell megállapodásokat készítenie. Ehelyett a rendszerek közötti interfész jellemzőit a megfelelő biztonsági tervekben kell leírni.\n6. A szervezetnek be kell építenie a megállapodás információit a hivatalos szerződésekbe, különösen az állami és nem állami szervezetek (beleértve a szolgáltatókat, rendszerfejlesztőket és rendszerintegrátorokat) között létrejött információcserék esetében.\n7.  A szervezetnek a kockázatok mérlegelése során figyelembe kell vennie azokat az EIR-eket is, amelyek ugyanabban a hálózatban találhatóak.",
          "iso_27001_ref": "A.5.14; A.8.21",
          "nist_sp_800_53_rev5_ref": "CA-3",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "5.7"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "5.7 – Információcsere végrehajtási csomag: jóváhagyott EIR-scope, 7 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 7 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-075",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "5.7 – Információcsere: 1) A szervezetnek jóvá kell hagynia és szabályoznia kell az információcserét az EIR és más rendszerek között, összhangban a kapcsolódásokra és az információcserére vonatkozó biztonsági megállapodásokkal. 2) A szervezetnek minden egyes információcsere-megállapodás keretében dokumentálnia kell az EIR interfészeinek jellemzőit, biztonsági követelményeit, védelmi intézkedéseit és felelősségi körét. 3) A szervezetnek a kockázatok mérlegelése során figyelembe kell vennie azokat az EIR-eket is, amelyek ugyanabban a hálózatban találhatóak. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "5.12",
          "control_title": "Engedélyezés",
          "explanation": "Az engedélyezések hivatalos vezetői döntések, amelyeket a felső vezetők hoznak meg. Ennek során engedélyezhetik bizonyos EIR-ek működését, közös biztonsági követelmények átörökítését szervezeti EIR-ekre, emellett elfogadhatják a közös biztonsági követelmények implementációjával járó kockázatot a szervezeti működés és eszközök, az egyének és egyéb szervezetek vonatkozásában. Az engedélyezésért felelős személyek költségvetési felügyeletet biztosítanak az érintett szervezet EIR-jei és közös védelmi intézkedései számára, vagy felelősséget vállalnak az azok által támogatott szervezeti célok és üzleti funkciók megfelelő működéséért.  Az engedélyezésért felelős személyek felelősek, illetve elszámoltathatók a szervezet EIR-jeinek működésével és használatával kapcsolatos biztonsági kockázatokért.\nAz engedélyezésért felelős személyek folyamatosan adnak ki engedélyeket az EIR-ekkel kapcsolatban, a megvalósított folyamatos felügyeleti programokból származó bizonyítékok alapján. A robosztus folyamatos felügyeleti programok csökkentik a különálló újraengedélyezési folyamatok szükségességét. Az átfogó folyamatos felügyeleti folyamatok alkalmazásával az engedélyezési csomagokban (pl.: felmérésekről készült jelentések, intézkedési tervek és mérföldkövek) található információk folyamatosan frissülnek. Ez naprakész információval látja el az engedélyezésért felelős személyeket, a közös biztonsági követelmények kidolgozásáért felelős személyeket és rendszertulajdonosokat az EIR-jeik, a biztonsági követelményeik és működési környezetük biztonsági helyzetéről. Az újraengedélyezés költségeinek csökkentése érdekében az engedélyezésért felelős személyek a lehető legnagyobb mértékben kihasználhatják a folyamatos felügyeleti folyamatok eredményeit az újraengedélyezési döntések meghozatalához.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell az olyan engedélyezési folyamattal kapcsolatos feladatok ellátásáról, mely az EIR-ért felel. A kijelölt személy a felelős az EIR működésének engedélyezéséért és a közös, más EIR-ekből áthozott (átörökített) biztonsági követelmények elfogadásáért.\n2. A szervezetnek gondoskodnia kell az olyan engedélyezési folyamattal kapcsolatos feladatok ellátásáról, mely a szervezeti EIR-ekre vonatkozó közös, más EIR-ekből áthozott (átörökített) biztonsági követelmények elfogadásáért felel.\n3. A szervezetnek biztosítania kell, hogy a kijelölt felelős az EIR használatbavételét megelőzően elfogadja a közös, más EIR-ekből áthozott (átörökített) biztonsági követelmények alkalmazását és engedélyezi az EIR működését.\n4. A szervezetnek biztosítania kell, hogy a közös biztonsági követelményekért felelős személy engedélyezze a közös, más EIR-ekből áthozott biztonsági követelmények használatát.\n5. A szervezetnek rendszeresen felül kell vizsgálnia az engedélyeket. Ez a lépés biztosítja, hogy az EIR-ek biztonsági állapota naprakész maradjon, és hogy a szervezet időben észlelje és kezelje a biztonsági kockázatokat.\n6. A szervezetnek nyilvántartást kell vezetnie a folyamatokról és az engedélyezési döntésekről, annak érdekében, hogy bizonyítékot tudjon szolgáltatni a folyamatos felügyeleti programokból származó eredményekről.",
          "iso_27001_ref": "9.3.1; 9.3.3",
          "nist_sp_800_53_rev5_ref": "CA-6",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "5.12"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "5.12 – Engedélyezés végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-076",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "5.12 – Engedélyezés: 1) A szervezetnek gondoskodnia kell az olyan engedélyezési folyamattal kapcsolatos feladatok ellátásáról, mely az EIR-ért felel. 2) A szervezetnek gondoskodnia kell az olyan engedélyezési folyamattal kapcsolatos feladatok ellátásáról, mely a szervezeti EIR-ekre vonatkozó közös, más EIR-ekből áthozott (átörökített) biztonsági követelmények elfogadásáért felel. 3) A szervezetnek nyilvántartást kell vezetnie a folyamatokról és az engedélyezési döntésekről, annak érdekében, hogy bizonyítékot tudjon szolgáltatni a folyamatos felügyeleti programokból származó eredményekről. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "5.18",
          "control_title": "Folyamatos felügyelet – Kockázatmonitorozás",
          "explanation": "A kockázatmonitorozást az érintett szervezet által meghatározott kockázattűrő képesség határozza meg. A hatékonyság ellenőrzése meghatározza a megvalósított kockázatkezelési intézkedések folyamatos hatékonyságát. A megfelelés ellenőrzése vizsgálja, hogy a szükséges kockázatkezelési intézkedésekből mik azok amik megvalósultak. Továbbá azt is vizsgálja, hogy a biztonsági követelmények közül mi az ami teljesül. A változások nyomon követése azonosítja azokat a változásokat, amelyek az érintett szervezet EIR-jében és működési környezetében történnek, és amelyek befolyásolhatják a biztonsági kockázatokat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a szervezeti kockázattűrési szintjét, ami a kockázatmonitorozás szükséges bementi információja.\n2. A szervezetnek be kell vezetnie egy hatékonyság ellenőrzési rendszert, amely meghatározza a bevezetett kockázatkezelési válasz intézkedések folyamatos hatékonyságát.\n3. A szervezetnek megfelelés ellenőrzés kerebéen vizsgálnia kell, hogy a kockázatkezelési intézkedésekből mik azok amik megvalósultak. Emellett ennek keretében a szervezetnek azt is vizsgálnia kell, hogy mely biztonsági követelmények teljesülnek.\n4. A szervezetnek be kell vezetnie a változások nyomon követését, amely azonosítja az EIR és a működési környezet változásait, amelyek befolyásolhatják a biztonsági kockázatokat.\n5. A szervezetnek nyilvántartást kell vezetnie a fent említett lépések végrehajtásáról és az eredményekről, hogy biztosítsa a folyamatos felügyeletet és a kockázatkezelési stratégia hatékonyságának értékelését.",
          "iso_27001_ref": "9.3.2",
          "nist_sp_800_53_rev5_ref": "CA-7(4)",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "5.18"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "5.18 – Folyamatos felügyelet – Kockázatmonitorozás végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-077",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "5.18 – Folyamatos felügyelet – Kockázatmonitorozás: 1) A szervezetnek meg kell határoznia a szervezeti kockázattűrési szintjét, ami a kockázatmonitorozás szükséges bementi információja. 2) A szervezetnek be kell vezetnie egy hatékonyság ellenőrzési rendszert, amely meghatározza a bevezetett kockázatkezelési válasz intézkedések folyamatos hatékonyságát. 3) A szervezetnek nyilvántartást kell vezetnie a fent említett lépések végrehajtásáról és az eredményekről, hogy biztosítsa a folyamatos felügyeletet és a kockázatkezelési stratégia hatékonyságának értékelését. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "5.25",
          "control_title": "Belső rendszerkapcsolatok",
          "explanation": "A belső rendszerkapcsolatok olyan kapcsolatok, melyek az adott szervezet rendszerelemei és egyéb, ugyanazon rendszer részét képező, de különálló rendszerelemek között állnak fenn, ideértve a fejlesztésére használt eszközöket is. Belső rendszerkapcsolatok részét képezhetik mobiltelefonok, notebookok és asztali számítógépek, tabletgépek, nyomtatók, másolók, faxgépek, szkennerek, szenzorok és szerverek. Az érintett szervezet a belső rendszerkapcsolatokat nem különálló esetenként hagyja jóvá, hanem közös jellemzőkkel és/vagy konfigurációval, valamint interfésszel rendelkező kategóriákkal dolgozik, beleérte a meghatározott feldolgozási, továbbítás és tárolási képességekkel rendelkező nyomtatókat, szkennereket és másolókat, vagy a specifikus alapkonfigurációval rendelkező okostelefonokat és táblagépeket. Egy belső rendszerkapcsolat szükségességét az érintett szervezet céljainak, vagy üzleti funkcióinak támogatásának szempontjából kell felülvizsgálni.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet minden belső kapcsolat esetében dokumentálja az interfész jellemzőit, a biztonsági követelményeket, továbbá a kommunikációban részt vevő információ jellegét.\n2. A szervezet leltárt készít azon kategóriákból, melyekbe a belső rendszerkapcsolatok az egyedi jellemzőik alapján rendezhetőek.\n3. A szervezet meghatározza a különböző kategóriák által érintett belső rendszerkapcsolatok, valamint a kapcsolódó rendszerelemek felé támasztott biztonsági és funkcionális elvárásokat.\n4. A szervezet rendszeresen felülvizsgálja a különböző kategóriákat és szükség esetén módosítja a belső rendszerkapcsolat, valamint az érintett rendszerelemek felé támasztott elvárásokat, vagy eltávolítja azokat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "CA-9",
          "requirement_family": "5",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "5.25"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "5.25 – Belső rendszerkapcsolatok végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott értékelési terv, vizsgálati jegyzőkönyv, engedélyezési döntés és nyomonkövetési rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-078",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "5.25 – Belső rendszerkapcsolatok: 1) A szervezet minden belső kapcsolat esetében dokumentálja az interfész jellemzőit, a biztonsági követelményeket, továbbá a kommunikációban részt vevő információ jellegét. 2) A szervezet leltárt készít azon kategóriákból, melyekbe a belső rendszerkapcsolatok az egyedi jellemzőik alapján rendezhetőek. 3) A szervezet rendszeresen felülvizsgálja a különböző kategóriákat és szükség esetén módosítja a belső rendszerkapcsolat, valamint az érintett rendszerelemek felé támasztott elvárásokat, vagy eltávolítja azokat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "6.15",
          "control_title": "Biztonsági hatásvizsgálatok",
          "explanation": "A biztonsági hatásvizsgálatokat végző felelősöknek rendelkezniük kell a szükséges készségekkel és technikai szaktudással az EIR-ben tervezett változások, valamint a biztonsági következmények elemzéséhez. A biztonsági hatásvizsgálatok magukban foglalják a biztonsági tervek, szabályzatok és eljárásrendek áttekintését a szabályozási követelmények megértése érdekében; az EIR tervezési dokumentációjának és működési eljárásainak áttekintését a szabályozási megvalósítás megértése és a specifikus EIR változások hatásának megértése érdekében; a változások hatásának áttekintését a szervezet ellátási láncában érintett partnereivel és az egyéb érdekelt felekkel. A hatásvizsgálatok magukban foglalják a kockázatok értékelését, mely által világossá válik a változások hatása és hogy szükség van-e további védelmi intézkedésekre.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek a megfelelően képzett felelősök bevonásával el kell végeznie a hatásvizsgálatot.\n2. A hatásvizsgálatoknak magukban kell foglalniuk a biztonsági tervek, szabályzatok és eljárások áttekintését a követelmények tisztázása végett, valamint az EIR tervezési dokumentációjának és üzemeltetési eljárásainak áttekintését.\n3. A szervezetnek meg kell határoznia, hogy a változások milyen hatással lesznek az érintett szervezet ellátási lánc partnereire és az egyéb érdekelt felekre, illetve hogy a változások az EIR-ben hogyan teremtenek új kockázatokat a megvalósított védelmi képességek vonatkozásában.\n4. A változások bevezetése előtt a szervezet felülvizsgálja a tervezett változásokat és elemzi azok kockázatait, illetve információbiztonsági hatásait. Ez segít abban, hogy a szervezet megfeleljen a kiberbiztonsági követelményeknek, és biztosítsa, hogy az EIR-ben tervezett változások ne jelentsenek kockázatot az információbiztonságra. Emellett segít a szervezetnek meghatározni, hogy a tervezett változások miatt szükséges-e további védelmi intézkedések bevezetése.",
          "iso_27001_ref": "A.8.9",
          "nist_sp_800_53_rev5_ref": "CM-4",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "6.15"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "6.15 – Biztonsági hatásvizsgálatok végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott baseline, read-only konfigurációexport, változásjegy, teszt és rollback- vagy kivételrekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-079",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "6.15 – Biztonsági hatásvizsgálatok: 1) A szervezetnek a megfelelően képzett felelősök bevonásával el kell végeznie a hatásvizsgálatot. 2) A hatásvizsgálatoknak magukban kell foglalniuk a biztonsági tervek, szabályzatok és eljárások áttekintését a követelmények tisztázása végett, valamint az EIR tervezési dokumentációjának és üzemeltetési eljárásainak áttekintését. 3) A változások bevezetése előtt a szervezet felülvizsgálja a tervezett változásokat és elemzi azok kockázatait, illetve információbiztonsági hatásait. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Konfigurációkezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "6.18",
          "control_title": "A változtatásokra vonatkozó hozzáférés korlátozások",
          "explanation": "Az EIR-ek hardver-, szoftver- vagy firmware-elemeinek vagy az EIR-hez kapcsolódó üzemeltetési eljárásoknak a megváltoztatása jelentős hatással lehet az EIR-ek biztonságára. Ezért az érintett szervezet csak a meghatározott személyeknek engedélyezi az EIR-ekhez való hozzáférést a változtatások kezdeményezése céljából. A hozzáférési korlátozások közé tartoznak a fizikai és logikai hozzáférés-felügyeletek (az ezekre vonatkozó biztonsági követelmények a \"Hozzáférés-ellenőrzés érvényesítése\" és \"A fizikai belépés ellenőrzése\" kontrolloknál kerültek bővebben kifejtésre), a szoftverkönyvtárak, a munkafolyamatok automatizálása, az adathordozón található könyvtárak, az absztrakt rétegek (azaz a külső interfészekbe, nem pedig közvetlenül az EIR-ekbe implementált változtatások) és a változtatási időablakok (azaz a változtatások csak meghatározott időpontokban történnek).",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet meghatározza azokat a fizikai és logikai hozzáférési korlátozásokat, amelyek az EIR változásaihoz kapcsolódnak. Ez magában foglalhatja a fizikai és logikai hozzáférési kontrollokat, szoftverkönyvtárakat, munkafolyamat-automatizálást, az adathordozókon található könyvtárakat, absztrakt rétegeket, és változtatási időablakokat (amikor a változások csak meghatározott időpontokban történnek).\n2. A szervezetnek dokumentálnia kell a korlátozásokat. A szervezetnek írásban kell rögzítenie az összes fizikai és logikai hozzáférési korlátozást, beleértve a hozzáférési szabályokat, a hozzáférési jogosultságokat és a hozzáférési eljárásokat.\n3. A szervezetnek jóvá kell hagynia a dokumentált korlátozásokat. Ez azt jelenti, hogy a jóváhagyásra jogosult felelősnek el kell fogadnia és jóvá kell hagynia a korlátozásokat, mielőtt azokat érvényesítenék.\n4. A szervezetnek érvényesítenie kell a jóváhagyott korlátozásokat. Ez azt jelenti, hogy a szervezetnek be kell vezetnie és alkalmaznia kell a korlátozásokat az EIR-ben, és naplóznia kell minden hozzáférési kísérletet, hogy nyomon követhető legyen, ki próbált hozzáférni az EIR-hez, mikor és milyen célból.\n5. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a hozzáférési korlátozásokat, hogy biztosítsa azok relevanciáját és hatékonyságát. A naplókat is rendszeresen át kell nézni, hogy azonosítsák a szabálytalanságokat és a potenciális biztonsági réseket.",
          "iso_27001_ref": "A.8.2; A.8.4; A.8.9; A.8.19; A.8.31; A.8.32",
          "nist_sp_800_53_rev5_ref": "CM-5",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "6.18"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "6.18 – A változtatásokra vonatkozó hozzáférés korlátozások végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott baseline, read-only konfigurációexport, változásjegy, teszt és rollback- vagy kivételrekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-080",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "6.18 – A változtatásokra vonatkozó hozzáférés korlátozások: 1) A szervezet meghatározza azokat a fizikai és logikai hozzáférési korlátozásokat, amelyek az EIR változásaihoz kapcsolódnak. 2) A szervezetnek dokumentálnia kell a korlátozásokat. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a hozzáférési korlátozásokat, hogy biztosítsa azok relevanciáját és hatékonyságát. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Konfigurációkezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "6.23",
          "control_title": "Konfigurációs beállítások",
          "explanation": "A konfigurációs beállítások olyan paraméterek, amelyeket a hardver, szoftver vagy firmware rendszerelemekben lehet módosítani, és amelyek befolyásolják az EIR biztonsági állapotát vagy funkcionalitását. Azon eszközök, amelyekhez konfigurációs beállításokat lehet meghatározni, lehetnek nagy teljesítményű számítógépek, szerverek, munkaállomások, operációs rendszerek, mobil eszközök, bemeneti/kimeneti eszközök, protokollok és alkalmazások. A következő paraméterek fejthetnek ki hatást az EIR biztonsági állapotára: rendszerleíró adatbázis (registry) beállításai; felhasználói fiók, fájl vagy könyvtár jogosultságok beállításai; a funkciókhoz, protokollokhoz, portokhoz, szolgálatásokhoz és távoli kapcsolatokhoz tartozó beállítások.\nA szervezet feladata, hogy meghatározza a szervezeti szintű konfigurációs elvárásokat, majd ezekből származtassa az EIR specifikus konfigurációs beállításokat. Az így meghatározott beállítások az EIR alapkonfigurációját képezik. A központilag előírt biztonsági konfigurációs beállítások (common secure configuration) (biztonsági konfigurációra vonatkozó ellenőrző lista, biztonsági útmutatók (hardening guide/security reference guide)) elismert, sztenderdizált és jól bevált referenciák, amelyek útmutatásul szolgálnak az EIR biztonságos konfigurálásához. Ezáltal az EIR-ek megfelelhetnek a működéssel kapcsolatos előírásoknak. Központilag előírt biztonsági konfigurációs beállításokat (common secure configurations) több szervezet is kidolgozhat, beleértve az EIR-ek fejlesztőit, gyártóit, viszonteladóit, állami szerveket, tudományos intézeteket, iparági szereplőket és egyéb köz- és versenyszférában tevékenykedő szervezeteket. A központilag előírt biztonsági konfigurációs beállítások (common secure configuration) implementációjával kapcsolatos elvárás megjelenhet szervezeti szinten, a szervezeti célok és üzleti folyamatok szintjén, az EIR szintjén vagy akár magasabb szinten is, egy hatóság által.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a szervezeti szintű, egységes konfigurációs elvárásokat, melyeket dokumentálnia is kell. Ezeknek a beállításoknak a szükséges minimum elvét kell képviselniük, összhangban az üzemeltetési követelményekkel.\n2. A szervezetnek a szervezeti szinten meghatározott konfigurációs elvárásokból kell származtatnia az  elektronikus információs rendszerelemekben alkalmazott biztonsági konfigurációs beállításokat. Ezeknek a beállításoknak a szükséges minimum elvét kell képviselniük, összhangban az üzemeltetési követelményekkel.\n3. A szervezet a konfigurációs beállítások meghatározásához felhasználhatja a központilag előírt biztonsági konfigurációs beállításokat (common secure configuration), melyek elismert, sztenderdizált és jól bevált referenciák, illetve amelyek útmutatásul szolgálhatnak az EIR biztonságos konfigurálásához pl.: biztonsági útmutatók (hardening guide/security reference guide).\n4. A szervezetnek el kell végeznie a konfigurációs beállításokat az EIR összes elemében. Ez magában foglalja a hardver, szoftver és firmware rendszerelemek beállításait, amelyek befolyásolhatják az EIR biztonsági állapotát vagy funkcionalitását pl.: rendszerleíró adatbázis (registry) beállításokat, a fiók-, fájl- vagy könyvtár beállítások, valamint a funkciók, protokollok, portok, szolgáltatások és távoli kapcsolatok beállításai.\n5. A szervezetnek szükséges azonosítania, dokumentálnia, illetve el kell fogadnia a meghatározott rendszerelemek konfigurációs beállításaiban a működési követelmények által meghatározott konfigurációs beállításoktól való eltéréseket.\n4. A szervezet figyelemmel kíséri és ellenőrzi a konfigurációs beállítások változásait a szervezeti szabályzatokkal és eljárásokkal összhangban.",
          "iso_27001_ref": "A.8.9",
          "nist_sp_800_53_rev5_ref": "CM-6",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "6.23"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "6.23 – Konfigurációs beállítások végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott baseline, read-only konfigurációexport, változásjegy, teszt és rollback- vagy kivételrekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-081",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "6.23 – Konfigurációs beállítások: 1) A szervezetnek meg kell határoznia a szervezeti szintű, egységes konfigurációs elvárásokat, melyeket dokumentálnia is kell. 2) A szervezetnek a szervezeti szinten meghatározott konfigurációs elvárásokból kell származtatnia az elektronikus információs rendszerelemekben alkalmazott biztonsági konfigurációs beállításokat. 3) A szervezet figyelemmel kíséri és ellenőrzi a konfigurációs beállítások változásait a szervezeti szabályzatokkal és eljárásokkal összhangban. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Konfigurációkezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "6.26",
          "control_title": "Legszűkebb funkcionalitás",
          "explanation": "Egy EIR számos funkciót és szolgáltatást nyújthat. Néhány, alapértelmezés szerint rendszeresen nyújtott funkció és szolgáltatás nem feltétlenül szükséges az érintett szervezet ügy- és üzletmenetének támogatásához. Ugyan kényelmes lehet egyetlen rendszerelemből több szolgáltatást nyújtani, de ez növeli a kockázatot. Amennyiben lehetséges, a szervezet  a rendszerelemek funkcióit egyetlen funkcióra korlátozza rendszerelemenként. A szervezet megfontolhatja a nem használt vagy felesleges szoftverek eltávolítását, valamint a nem használt vagy felesleges fizikai és logikai portok és protokollok letiltását, hogy megakadályozzák a rendszerelemek jogosulatlan csatlakoztatását és az információ kiszivárgását. A szervezet hálózati szkennelő eszközöket, behatolásjelző (intrusion detection system (IDS)) és behatolásmegelőző (intrusion prevention system (IPS)) rendszereket, valamint végpontvédelmi technológiákat alkalmazhatnak, mint például tűzfalakat és hoszt alapú behatolásjelző rendszereket (host-based intrusion detection system), hogy azonosítsák és megakadályozzák a tiltott funkciók, protokollok, portok és szolgáltatások használatát. A legszűkebb funkcionalitás elvét figyelembe kell venni az EIR tervezése és teljes fejlesztési életciklusa során (az ezzel kapcsolatos információk bővebben kifejtésre kerültek a \"Biztonságtervezési elvek\", a \"Rendszer és felhasználói funkciók szétválasztása\", valamint a \"Biztonsági funkciók elkülönítése\" kontrolloknál).",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek úgy kell konfigurálnia az EIR-t, hogy az csak az ügy- és üzletmenet szempontjából létfontosságú szolgáltatásokat nyújtsa.\n2. A szervezet határozza meg a tiltott vagy korlátozott funkciókat, portokat, protokollokat, szoftvereket és szolgáltatásokat. Ez azt jelenti, hogy az EIR-ben le kell tiltani vagy korlátozni kell azokat a funkciókat, portokat, protokollokat, szoftvereket és szolgáltatásokat, amelyek nem szükségesek az ügy- és üzletmenet szempontjából, vagy amelyek kockázatot jelenthetnek a szervezet számára.\n3. A szervezet alkalmazzon olyan megoldásokat, melyek képesek azonosítani és megakadályozni a a tiltott funkciók, protokollok, portok és szolgáltatások használatát pl.: hálózati szkennelő eszközök, behatolásjelző (intrusion detection system (IDS)) és behatolásmegelőző (intrusion prevention system (IPS)) rendszerek,  végpontvédelmi technológiák, mint például tűzfalak és hoszt alapú behatolásjelző rendszerek (host-based intrusion detection system).\n4. A szervezet vegye figyelembe a legszűkebb funkcionalitás elvét az EIR tervezése és teljes fejlesztési életciklusa során.\n5. A szervezetnek dokumentálnia kell az EIR konfigurációját és ebben szerepeltetnie kell a tiltott vagy korlátozott funkciókat, portokat, protokollokat, szoftvereket és szolgáltatásokat.",
          "iso_27001_ref": "A.8.19",
          "nist_sp_800_53_rev5_ref": "CM-7",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "6.26"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "6.26 – Legszűkebb funkcionalitás végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott baseline, read-only konfigurációexport, változásjegy, teszt és rollback- vagy kivételrekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-082",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "6.26 – Legszűkebb funkcionalitás: 1) A szervezetnek úgy kell konfigurálnia az EIR-t, hogy az csak az ügy- és üzletmenet szempontjából létfontosságú szolgáltatásokat nyújtsa. 2) A szervezet határozza meg a tiltott vagy korlátozott funkciókat, portokat, protokollokat, szoftvereket és szolgáltatásokat. 3) A szervezetnek dokumentálnia kell az EIR konfigurációját és ebben szerepeltetnie kell a tiltott vagy korlátozott funkciókat, portokat, protokollokat, szoftvereket és szolgáltatásokat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Konfigurációkezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "6.47",
          "control_title": "A szoftverhasználat korlátozásai",
          "explanation": "Az érintett szervezetnek gondoskodnia kell arról, hogy minden használt szoftver és dokumentáció megfeleljen a szerződésben meghatározott követelményeknek, beleértve a szerzői jogi és egyéb jogszabályi előírásokat is. Nyomon kell követni a mennyiségi licenc alá eső szoftverek és a kapcsolódó dokumentációk használatát, hogy ellenőrizze a szervezet a másolatok és megosztások számát. Ez a nyomon követés lehet manuális vagy automatizált, a szervezet igényeitől függően. A szerződési megállapodások például szoftverlicenc-megállapodásokat is tartalmazhatnak, melyeket központilag szükséges kezelni és periodikusan felül kell vizsgálni. A szervezetnek ellenőrzni és dokumentálni szükséges a megosztásokat, hogy meggyőződjön arról, hogy ezt a lehetőséget nem használják szerzői joggal védett művek, szoftverek jogosulatlan terjesztésére, megjelenítésére vagy sokszorosítására. Ez azt jelenti, hogy a szervezetnek naplót kell vezetnie minden EIR megosztásról, és rendszeresen ellenőriznie kell, hogy a megosztások megfelelnek-e a szerzői jogi és egyéb jogszabályi előírásoknak.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy csak olyan szoftvereket és kapcsolódó dokumentációkat használjon, amelyek megfelelnek a szerződéses elvárásoknak és a szerzői jogi vagy más jogszabályi előírásoknak. Ez azt jelenti, hogy az érintett szervezetnek át kell néznie a szoftverek licencszerződéseit és a kapcsolódó dokumentációkat, hogy meggyőződjön arról, hogy megfelelnek-e a szerződéses követelményeknek.\n2. A szervezetnek nyomon kell követnie a mennyiségi licenc alá eső szoftverek és a kapcsolódó dokumentációk használatát. Ez azt jelenti, hogy a szervezetnek rendszeresen ellenőriznie kell hogy, mely szoftvereket használják, és milyen kihasználtsággal használják őket. Ezt meg lehet tenni manuálisan, de automatizált eszközök is léteznek, amelyek segíthetnek ebben a folyamatban.\n3. A szervezetnek ellenőriznie és dokumentálnia kell az állománymegosztásokat. Ez azt jelenti, hogy a szervezetnek naplót kell vezetnie arról, hogy mely fájlok vannak megosztva, és kikkel vannak megosztva. Ez segít meggyőződni arról, hogy a szerzői joggal védett műveket, szoftvereket nem terjesztik, jelenítik meg, vagy nem sokszorosítanak jogosulatlanul.\n4. A szervezetnek rendszeresen felül kell vizsgálnia ezeket a folyamatokat, hogy biztosítsa, hogy továbbra is megfelelnek a követelményeknek. Ez magában foglalja a szoftverlicenc-nyomon követési folyamatok, az állománymegosztás-ellenőrzési folyamatok és a naplózás felülvizsgálatát.",
          "iso_27001_ref": "A.5.32",
          "nist_sp_800_53_rev5_ref": "CM-10",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "6.47"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "6.47 – A szoftverhasználat korlátozásai végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott baseline, read-only konfigurációexport, változásjegy, teszt és rollback- vagy kivételrekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-083",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "6.47 – A szoftverhasználat korlátozásai: 1) A szervezetnek biztosítania kell, hogy csak olyan szoftvereket és kapcsolódó dokumentációkat használjon, amelyek megfelelnek a szerződéses elvárásoknak és a szerzői jogi vagy más jogszabályi előírásoknak. 2) A szervezetnek nyomon kell követnie a mennyiségi licenc alá eső szoftverek és a kapcsolódó dokumentációk használatát. 3) A szervezetnek rendszeresen felül kell vizsgálnia ezeket a folyamatokat, hogy biztosítsa, hogy továbbra is megfelelnek a követelményeknek. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Konfigurációkezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "6.49",
          "control_title": "Felhasználó által telepített szoftver",
          "explanation": "Az érintett szervezetben a felhasználók, ha megfelelő jogosultságokkal rendelkeznek, telepíthetnek szoftvereket az EIR-ben. A telepített szoftverek felett tartott ellenőrzés érdekében az érintett szervezet meghatározza a szoftvertelepítéssel kapcsolatos engedélyezett és tiltott tevékenységeket. Az engedélyezett szoftvertelepítések közé tartozhatnak a meglévő szoftverek frissítései és biztonsági javításai, valamint az új alkalmazások letöltése az érintett szervezet által jóváhagyott alkalmazásboltokból. A tiltott szoftvertelepítések közé tartoznak az ismeretlen vagy gyanús eredetű szoftverek, vagy azok a szoftverek, amelyeket az érintett szervezet potenciálisan károsnak tart. A felhasználó által telepített szoftverekre vonatkozó szabályokat az érintett szervezet által kidolgozott vagy valamilyen külső entitás által biztosított szabályzat tartalmazza. A szabályok érvényesítési módszerei közé tartozhatnak az ellenőrző eljárások, valamint az automatizált eszközök.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a szoftvertelepítéssel kapcsolatos szervezetre érvényes követelményeket, melyeknek tartalmaznia kell a felhasználók lehetőségeit a szoftvertelepítéssel kapcsolatban, valamint a szoftvertelepítéssel kapcsolatos engedélyezett és tiltott tevékenységeket.\n2. A szervezetnek figyelembe kell vennie a szoftvertelepítéssel kapcsolatos szervezetre érvényes követelmények kidolgozásakor, hogy a felhasználók privilegizált jogosultság nélkül is képesek lehetnek telepíteni hordozható (portable) programokat. A szervezetnek a hordozható (portable) programok futtatásának megakadályozására védelmi követelményeket kell kidolgoznia.\n3. A szervezetnek érvényesítenie kell a szoftvertelepítésre vonatkozó szabályokat az általa meghatározott módszerek szerint.\n4. A szervezetnek meghatározott gyakorisággal ellenőriznie kell a szabályok betartását.",
          "iso_27001_ref": "A.8.19",
          "nist_sp_800_53_rev5_ref": "CM-11",
          "requirement_family": "6",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "6.49"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "6.49 – Felhasználó által telepített szoftver végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott baseline, read-only konfigurációexport, változásjegy, teszt és rollback- vagy kivételrekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-084",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "6.49 – Felhasználó által telepített szoftver: 1) A szervezetnek meg kell határoznia a szoftvertelepítéssel kapcsolatos szervezetre érvényes követelményeket, melyeknek tartalmaznia kell a felhasználók lehetőségeit a szoftvertelepítéssel kapcsolatban, valamint a szoftvertelepítéssel kapcsolatos engedélyezett és tiltott tevékenységeket. 2) A szervezetnek figyelembe kell vennie a szoftvertelepítéssel kapcsolatos szervezetre érvényes követelmények kidolgozásakor, hogy a felhasználók privilegizált jogosultság nélkül is képesek lehetnek telepíteni hordozható (portable) programokat. 3) A szervezetnek meghatározott gyakorisággal ellenőriznie kell a szabályok betartását. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Konfigurációkezelés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "7.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A szervezeti-, folyamat és rendszerszintű követelményeket tartalmazó üzletmenet-folytonossági szabályzat és üzletmenet-folytonossági eljárásrend megfelelő szintű kidolgozása alapvető fontosságú a szervezet és az EIR-ek üzletmenet-folytonosságának biztosítása érdekében. A két dokumentum - mint keretrendszer - tartalmazza a szervezet elvárásait az üzletmenet-folytonosságra vonatkozóan, melyek megállapításánál figyelembe szükséges venni az érdekelt felek által támasztott, üzletmenet-folytonosságra vonatkozó elvárásokat is. Fontos, hogy a dokumentumok összhangban legyenek a szervezet információbiztonsági környezetével, kockázatkezelési stratégiájával. A szabályokat be lehet illeszteni az általános biztonsági szabályzatokba, vagy több szabályzatban is megjelenhetnek (amennyiben a szervezet felépítése ezt indokolttá teszi), azonban javasolt külön kezelni őket. Az üzletmenet-folytonossági szabályzó dokumentumokat és eljárásokat javasolt a nemzetközi sztenderdekkel összhangban (pl.: ISO 22301) megalkotni. A megfelelő működés megteremtése és az elszámoltathatóság biztosítása érdekében kompetens személyek kijelölése szükséges a szabályzó dokumentumok megalkozásához és  karbantartásához.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell dolgoznia és dokumentálnia kell egy üzletmenet-folytonossági szabályzatot, amely tartalmazza a szervezeti-, folyamat és rendszerszintű követelményeket. Ez a szabályzat meghatározza a célkitűzéseket, a hatókört, a szerepköröket, a felelősségeket, a vezetői elkötelezettséget, az érintett szervezeten belüli együttműködés kereteit és a megfelelőségi kritériumokat.\n2. A szabályzatnak összhangban kell lennie a szervezetre vonatkozó, hatályos jogszabályokkal, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal.\n3. A szervezetnek ki kell dolgoznia egy üzletmenet-folytonossági eljárásrendet, amely segíti az üzletmenet-folytonossági szabályzatban foglaltak és az ahhoz kapcsolódó ellenőrzések megvalósítását.\n4. A szervezetnek ki kell jelölnie egy személyt, aki felelős az üzletmenet-folytonossági szabályzat és eljárások kidolgozásának, dokumentálásának, kiadásának és megismertetésének irányításáért.\n5. A szervezetnek felül kell vizsgálnia és frissítenie kell az aktuális üzletmenet-folytonossági szabályzatot és az üzletmenet-folytonossági eljárásokat és eljárásrendet a szervezet által meghatározott gyakorisággal és a szervezet által meghatározott események bekövetkezését követően.\n.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "CP-1",
          "requirement_family": "7",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "7.1"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "7.1 – Szabályzat és eljárásrendek végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott folytonossági eljárás, képzési vagy gyakorlatjegyzőkönyv, eredmény és javítási napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-085",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "7.1 – Szabályzat és eljárásrendek: 1) A szervezetnek ki kell dolgoznia és dokumentálnia kell egy üzletmenet-folytonossági szabályzatot, amely tartalmazza a szervezeti-, folyamat és rendszerszintű követelményeket. 2) A szabályzatnak összhangban kell lennie a szervezetre vonatkozó, hatályos jogszabályokkal, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal. 3) A szervezetnek felül kell vizsgálnia és frissítenie kell az aktuális üzletmenet-folytonossági szabályzatot és az üzletmenet-folytonossági eljárásokat és eljárásrendet a szervezet által meghatározott gyakorisággal és a szervezet által meghatározott események bekövetkezését követően. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Üzletmenet-folytonosság és helyreállítás"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "7.10",
          "control_title": "A folyamatos működésre felkészítő képzés",
          "explanation": "A folyamatos működésre felkészítő képzést az érintett szervezet a személyzet szerepkörének és felelősségi körének megfelelően szervezi meg, hogy a képzés tartalma és részletessége megfelelő legyen. Például, néhány személynek csak azt kell tudnia, hogy mikor és hol jelentkezzenek munkavégzésre a folyamatos működés ideje alatt, és hogy a normál feladataikat érinti-e ez. Az EIR adminisztrátoroknak további képzésre lehet szükségük arra vonatkozóan, hogyan hozzanak létre rendszereket alternatív feldolgozási és tárolási helyeken, hogyan működtessék megfelelően a kijelölt rendszereket. A vészhelyzeti tervezésben érintett további munkavállalók, vezetők pedig részletesebb képzést kaphatnak arról, hogyan végezzék el a létfontosságú feladatokat kijelölt helyszíneken, és hogyan létesítsenek kommunikációt más szervezetekkel, külső felekkel a folyamatos működéssel kapcsolatos tevékenységek koordinálása érdekében. A képzések tartalmát rendszeresen, ill. a szervezet által meghatározott események mentén felül kell vizsgálni és aktualizálni szükséges.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek folyamatos működésre felkészítő képzést kell biztosítania az EIR felhasználói számára, amely képzés a felhasználók szerepkörének vagy felelősségi körének megfelelő.\n2. A képzést a szerepkörbe vagy felelősségbe kerülésüket követő meghatározott időn belül kell elvégezni.\n3. Amikor az EIR változásai ezt szükségessé teszik, a képzést frissíteni kell.\n4. A képzést az érintett szervezet által meghatározott gyakorisággal kell elvégezni.\n5. A szervezetnek meghatározott gyakorisággal vagy meghatározott eseményeket követően felül kell vizsgálnia és frissítenie a folyamatos működésre felkészítő képzés tartalmát.",
          "iso_27001_ref": "A.6.3",
          "nist_sp_800_53_rev5_ref": "CP-3",
          "requirement_family": "7",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "7.10"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "7.10 – A folyamatos működésre felkészítő képzés végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott folytonossági eljárás, képzési vagy gyakorlatjegyzőkönyv, eredmény és javítási napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-086",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "7.10 – A folyamatos működésre felkészítő képzés: 1) A szervezetnek folyamatos működésre felkészítő képzést kell biztosítania az EIR felhasználói számára, amely képzés a felhasználók szerepkörének vagy felelősségi körének megfelelő. 2) A képzést a szerepkörbe vagy felelősségbe kerülésüket követő meghatározott időn belül kell elvégezni. 3) A szervezetnek meghatározott gyakorisággal vagy meghatározott eseményeket követően felül kell vizsgálnia és frissítenie a folyamatos működésre felkészítő képzés tartalmát. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Üzletmenet-folytonosság és helyreállítás"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.7",
          "control_title": "Azonosítás és hitelesítés (felhasználók) – Hozzáférés a fiókokhoz – Visszajátszás elleni védelem",
          "explanation": "A szervezetnek biztosítania kell, hogy a hitelesítési mechanizmusokat alkalmazzák mind a privilegizált, mind a nem privilegizált fiókokhoz való hozzáféréshez. A privilegizált fiókok olyan fiókok, amelyeknek kiterjedt jogosultságaik vannak az EIR-hez, és képesek változtatni az EIR működését vagy beállításait. A nem privilegizált fiókok korlátozottabb hozzáféréssel rendelkeznek az EIR-hez.\nA visszajátszás elleni védelem biztosítása érdekében az érintett szervezetnek naplózásra és monitorozásra is szüksége van. A naplózás segít azonosítani a visszajátszásos támadásokat, míg a monitorozás lehetővé teszi az érintett szervezet számára, hogy észlelje a visszajátszásos támadásokat és azonnal reagáljon rájuk.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia, hogy mely fiókokat tekinti privilegizáltnak és melyeket nem.\n2. A szervezetnek implementálnia kell a visszajátszás elleni védelmet biztosító hitelesítési mechanizmusokat. Ez magában foglalhatja a protokollokat, amelyek ún. kihívásokat használnak, mint például időszinkron vagy kriptográfiai hitelesítők.\n3. A szervezetnek biztosítania kell, hogy ezek a hitelesítési mechanizmusok mind a privilegizált, mind a nem privilegizált fiókokhoz való hozzáféréshez alkalmazva legyenek.\n4. A szervezetnek tesztelnie kell a hitelesítési mechanizmusokat, hogy biztosítsa, hogy azok hatékonyan működnek a visszajátszás elleni védelem érdekében.\n5. A szervezetnek naplóznia kell a hitelesítési folyamatokat, hogy nyomon követhesse a hitelesítési kísérleteket és azonosíthassa a visszajátszásra utaló jeleket.\n6. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a hitelesítési mechanizmusokat, hogy biztosítsa, hogy azok naprakészek és hatékonyak maradnak a visszajátszás elleni védekezésben.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IA-2(8)",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.7"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.7 – Azonosítás és hitelesítés (felhasználók) – Hozzáférés a fiókokhoz – Visszajátszás elleni védelem végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-087",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.7 – Azonosítás és hitelesítés (felhasználók) – Hozzáférés a fiókokhoz – Visszajátszás elleni védelem: 1) A szervezetnek meg kell határoznia, hogy mely fiókokat tekinti privilegizáltnak és melyeket nem. 2) A szervezetnek implementálnia kell a visszajátszás elleni védelmet biztosító hitelesítési mechanizmusokat. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a hitelesítési mechanizmusokat, hogy biztosítsa, hogy azok naprakészek és hatékonyak maradnak a visszajátszás elleni védekezésben. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.14",
          "control_title": "Azonosító kezelés",
          "explanation": "A gyakran használt eszközazonosítók közé tartoznak például a MAC vagy az IP címek vagy az eszközök egyedi azonosítói. Megosztott, nem nevesített azonosítók nem alkalmazhatók egyéni azonosítóként. Az egyedi azonosítók általában azon felhasználónevek, melyek adott személyhez lettek rendelve. Ez a biztonsági követelmény azon egyedi azonosítókra is kiterjed, melyek nem feltétlen kapcsolódnak az EIR fiókokhoz. Az azonosítók újbóli felhasználásának megakadályozása azt jelenti, hogy a korábban használt egyén, csoport, szerepkör vagy eszköz azonosítók újbóli hozzárendelése nem megengedett különböző egyénekhez, csoportokhoz, szerepekhez vagy eszközökhöz. Ez azért fontos, mert az azonosító korábbi tulajdonosa, ismerője így nem tud visszaélni az információval, nem keletkezik elszámoltathatósági probléma.\n.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azokat a személyeket vagy szerepköröket, akik jogosultak az egyéni, csoport, szerepkör vagy eszköz azonosítók kiosztására. Ez magában foglalhatja a kiberbiztonsági csapatot, az IT menedzsmentet vagy más releváns szerepköröket.\n2. A szervezetnek ki kell választania egy azonosítót, amely azonosítja az egyént, csoportot, szerepkört, szolgáltatást vagy eszközt. Ez lehet például MAC cím, IP cím, vagy eszköz-specifikus token.\n3. A szervezetnek hozzá kell rendelnie az azonosítót a kívánt egyénhez, csoporthoz, szerepkörhöz, szolgáltatáshoz vagy eszközhöz. Ez általában az EIR felhasználói fiókok felhasználóneveinek hozzárendelését jelenti az adott személyekhez.\n4. A szervezetnek meg kell akadályoznia az azonosítók újbóli felhasználását egy meghatározott időszakon belül. Ez azt jelenti, hogy meg kell akadályoznia, hogy a korábban használt egyéni, csoport, szerepkör, szolgáltatás, vagy eszköz azonosítókat más személyekhez, csoportokhoz, szerepkörökhöz, szolgáltatásokhoz vagy eszközökhöz rendeljék.\n5. A szervezetnek dokumentálnia kell az azonosítók kiosztását és használatát, hogy nyomon követhető legyen az azonosítók használata és a hozzájuk rendelt személyek, csoportok, szerepkörök, szolgáltatások és eszközök.",
          "iso_27001_ref": "A.5.16",
          "nist_sp_800_53_rev5_ref": "IA-4",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.14"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.14 – Azonosító kezelés végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-088",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.14 – Azonosító kezelés: 1) A szervezetnek meg kell határoznia azokat a személyeket vagy szerepköröket, akik jogosultak az egyéni, csoport, szerepkör vagy eszköz azonosítók kiosztására. 2) A szervezetnek ki kell választania egy azonosítót, amely azonosítja az egyént, csoportot, szerepkört, szolgáltatást vagy eszközt. 3) A szervezetnek dokumentálnia kell az azonosítók kiosztását és használatát, hogy nyomon követhető legyen az azonosítók használata és a hozzájuk rendelt személyek, csoportok, szerepkörök, szolgáltatások és eszközök. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.21",
          "control_title": "A hitelesítésre szolgáló eszközök kezelése",
          "explanation": "A hitelesítésre alkalmas mechanizmusok közé tartoznak a jelszavak, a kriptográfiai eszközök, a biometrikus adatok, a tanúsítványok, az egyszer használatos jelszó eszközök és az azonosító kártyák. Hitelesítő eszközök fejlesztői gyári alapértelmezett hitelesítési adatokkal szállíthatják az eszközeiket, hogy lehetővé tegyék a kezdeti telepítést és konfigurációt. Alapértelmezett adatnak hívjuk a hitelesítő eszköz tartalmát az inicializációs lépés után (pl. egy kezdeti jelszó \"password\" alapbeállítással). Az alapértelmezett hitelesítési adatok gyakran jól ismertek, könnyen felfedezhetők és jelentős kockázatot jelentenek. Ezzel szemben a hitelesítő eszköz tartalmának követelményei specifikus kritériumokat vagy jellemzőknek kell megfeleljenek (pl. a jelszó minimális hossza). Az érintett szervezetnek támogatnia kell a hitelesítő eszközök kezelését meghatározott beállításokkal és korlátozásokkal a különböző hitelesítő eszközök sajátos jellemzői alapján (pl. a jelszó minimális hossza, az időszinkron egy alkalommal használatos tokenek érvényesítési időablaka, és a biometrikus hitelesítés ellenőrzési szakaszában megengedett elutasítások száma). Lépéseket lehet tenni továbbá az egyéni hitelesítő eszközök védelme érdekében, beleértve a hitelesítő eszközök birtoklásának fenntartását, a hitelesítő eszközök másokkal való megosztásának elkerülését, és az elveszett, ellopott vagy kompromittált hitelesítő eszközök azonnali bejelentését. A hitelesítő eszközök kezelése magában foglalja a hitelesítő eszközök kiadását és visszavonását az ideiglenes hozzáféréshez, amikor már nincs rájuk szükség.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet számba veszi és dokumentálja azon rendszereket, melyek elérése hitelesítő eszközhöz kötött.\n2. A szervezet számba veszi és dokumentálja azon egyének, csoportok, szerepkörök, szolgáltatások vagy eszközök identitását, akik hitelesítő eszközöket kaphatnak. Ez magában foglalhatja a személyazonosság igazolását, a szerepkörök ellenőrzését és a csoporttagság megerősítését.\n3. A szervezet meghatározza a hitelesítő eszközök tartalma és konfigurációja felé támasztott követelményeket, ezeket szabályzatba foglalja. Ebbe beleértendő a kezdeti tartalom definiálása és beállítása.\n4. A szervezet létrehozza a hitelesítő eszközök kezelésének szabályzatát. Ez magába foglalja a kiosztásra, használatra, a tartalom rendszeres, meghatározott gyakorisággal való frissítésére, elveszett, vagy kompromittált eszközök visszavonására, a tartalom védelmére és a követelmények betartásának nem teljesítése esetére vonatkozó intézkedések leírását.",
          "iso_27001_ref": "A.5.16; A.5.17",
          "nist_sp_800_53_rev5_ref": "IA-5",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.21"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.21 – A hitelesítésre szolgáló eszközök kezelése végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-089",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.21 – A hitelesítésre szolgáló eszközök kezelése: 1) A szervezet számba veszi és dokumentálja azon rendszereket, melyek elérése hitelesítő eszközhöz kötött. 2) A szervezet számba veszi és dokumentálja azon egyének, csoportok, szerepkörök, szolgáltatások vagy eszközök identitását, akik hitelesítő eszközöket kaphatnak. 3) A szervezet létrehozza a hitelesítő eszközök kezelésének szabályzatát. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.22",
          "control_title": "A hitelesítésre szolgáló eszközök kezelése – Jelszó alapú hitelesítés",
          "explanation": "Az érintett szervezet jelszóalapú hitelesítést alkalmaz a jelszavakra, függetlenül attól, hogy azokat egyszintű vagy többszintű hitelesítésben használja-e. A hosszú jelszavak vagy jelmondatok előnyösebbek a rövidebb jelszavaknál. A szervezet által meghatározott és betartatott jelszóösszetételi szabályok (bonyolultság - pl. kötelező speciális karakterek, számok stb.) nem jelentenek jelentős biztonsági előnyt, miközben csökkentik a használhatóságot. Az érintett szervezet bizonyos körülmények között dönthet úgy, hogy szabályokat állapít meg a jelszógeneráláshoz (pl. fiókvisszaállítás). A kriptográfiailag védett jelszavak magukban foglalják a jelszavak sózott egyirányú kriptográfiai hash-eit. A gyakran használt, kompromittált vagy várható jelszavak listája tartalmazza a korábbi adatszivárgásokból származó jelszavakat, szótári szavakat és ismétlődő vagy sorozatos karaktereket, valamint a kontextusspecifikus szavakat is, mint például az EIR neve, a felhasználónév és annak derivatívái.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet fenntartja a gyakran használt, könnyen kitalálható vagy kompromittált jelszavak listáját, és ezt a listát a szervezet által meghatározott gyakorisággal frissíti.\n2. Ellenőrzi, hogy a felhasználók által létrehozott vagy módosított jelszavak szerepelnek-e a gyakran használt, könnyen kitalálható vagy kompromittált jelszavak listáján.\n3. A jelszavakat csak kriptográfiailag védett csatornákon keresztül továbbítja.\n4. A jelszavakat egy jóváhagyott, sózott kulcsszármaztatási funkcióval, lehetőleg egykulcsos hash-t használva tárolja.\n5. Megköveteli a jelszó azonnali megváltoztatását fiókvisszaállítás esetén.\n6. Engedélyezi a felhasználóknak hosszú jelszavak és jelmondatok kiválasztását, beleértve a szóközöket és a digitálisan megjeleníthető karaktereket.\n7. Automatizált eszközökkel támogatja a felhasználókat az erős jelszavak kiválasztásában.\n8. A jelszavakra az érintett szervezet által meghatározott összetételi és komplexitási szabályokat érvényesíti. Ez magában foglalhatja például a hosszú jelszavak minimális karakterhosszát.\n9. Dokumentálja és rendszeres időközönként felülvizsgálja a jelszókezelési folyamatokat, hogy biztosítsa a szabályok betartását és az esetleges szabálytalanságok azonnali észlelését.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IA-5(1)",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.22"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.22 – A hitelesítésre szolgáló eszközök kezelése – Jelszó alapú hitelesítés végrehajtási csomag: jóváhagyott EIR-scope, 9 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 9 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-090",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.22 – A hitelesítésre szolgáló eszközök kezelése – Jelszó alapú hitelesítés: 1) A szervezet fenntartja a gyakran használt, könnyen kitalálható vagy kompromittált jelszavak listáját, és ezt a listát a szervezet által meghatározott gyakorisággal frissíti. 2) Ellenőrzi, hogy a felhasználók által létrehozott vagy módosított jelszavak szerepelnek-e a gyakran használt, könnyen kitalálható vagy kompromittált jelszavak listáján. 3) Dokumentálja és rendszeres időközönként felülvizsgálja a jelszókezelési folyamatokat, hogy biztosítsa a szabályok betartását és az esetleges szabálytalanságok azonnali észlelését. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.36",
          "control_title": "Hitelesítési információk visszajelzésének elrejtése",
          "explanation": "Az EIR visszacsatolása nem szolgáltathat olyan információt, amely lehetővé tenné a jogosulatlan személyek számára a hitelesítési mechanizmusok kijátszását. Egyes típusú eszközöknél, mint például a viszonylag nagy monitorral rendelkező asztali számítógépek vagy notebookok, a fenyegetés jelentős lehet. Más típusú eszközöknél, mint például a kis kijelzővel rendelkező mobil eszközök, a fenyegetés kevésbé jelentős, és arányos a kis billentyűzetek miatti beviteli hibák megnövekedett valószínűségével, így a hitelesítési visszacsatolás elfedésének eszközét ennek megfelelően választhatja ki egy szervezet. A visszacsatolás elhomályosítása (obfuscation) magában foglalja a csillag karakterek megjelenítését, amikor a felhasználók jelszavakat írnak be a beviteli mezőkbe, vagy a visszacsatolás nagyon korlátozott ideig történő megjelenítését, mielőtt a rendszer elfedné azt.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek először meg kell határoznia, hogy mely eszközök esetében jelentős a jogosulatlan személyek általi hitelesítési információ felfedezésének és kihasználásának veszélye.\n2. A szervezetnek ki kell választania a megfelelő módszert a visszacsatolás elrejtésére.\n3. A szervezetnek implementálnia kell a kiválasztott módszert az EIR-ekben. Ez magában foglalhatja a szoftverfrissítéseket, a beállítások módosítását, vagy új hardverek beszerzését.\n4. A szervezetnek dokumentálnia kell a változtatásokat, hogy nyomon követhető legyen a folyamat, és bizonyítékot szolgáltathasson a megfelelőségről.\n5. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a hitelesítési visszacsatolás elrejtésének módszerét, hogy biztosítsa a folyamatos védelmet a jogosulatlan hozzáférés ellen.",
          "iso_27001_ref": "A.8.5",
          "nist_sp_800_53_rev5_ref": "IA-6",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.36"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.36 – Hitelesítési információk visszajelzésének elrejtése végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-091",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.36 – Hitelesítési információk visszajelzésének elrejtése: 1) A szervezetnek először meg kell határoznia, hogy mely eszközök esetében jelentős a jogosulatlan személyek általi hitelesítési információ felfedezésének és kihasználásának veszélye. 2) A szervezetnek ki kell választania a megfelelő módszert a visszacsatolás elrejtésére. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a hitelesítési visszacsatolás elrejtésének módszerét, hogy biztosítsa a folyamatos védelmet a jogosulatlan hozzáférés ellen. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.37",
          "control_title": "Hitelesítés kriptográfiai modul esetén",
          "explanation": "Az EIR kriptográfiai moduljában hitelesítési mechanizmusokra lehet szükség annak érdekében, hogy hitelesítse a modulhoz hozzáférő operátort, és ellenőrizze, hogy az operátor jogosult-e a kért szerep betöltésére és a szerephez tartozó szolgáltatások végrehajtására.\nAz EIR hitelesítési mechanizmusai a kriptográfiai modul hitelesítési útmutatójának, a hatályos törvényeknek, a végrehajtási utasításoknak, szabályzatoknak és szabványoknak megfelelően működnek. Ezek a mechanizmusok biztosítják, hogy csak a megfelelően hitelesített és jogosult felhasználók férjenek hozzá az EIR kriptográfiai moduljához, és végezzenek el műveleteket.\nAz EIR hitelesítési mechanizmusai közé tartozhatnak jelszavak, digitális aláírások, biometrikus adatok, hardveres kulcsok és más, a hitelesítési útmutatóban meghatározott eszközök. Ezek a mechanizmusok biztosítják, hogy az EIR kriptográfiai modulja csak a megfelelően hitelesített és jogosult felhasználók számára legyen hozzáférhető.\nAz érintett szervezetnek gondoskodnia kell arról, hogy az EIR hitelesítési mechanizmusai megfelelően működjenek, és naplózzák a hitelesítési eseményeket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia, hogy milyen kriptográfiai modul hitelesítési mechanizmusokat kíván alkalmazni.\n2. A szervezetnek implementálnia kell ezeket a mechanizmusokat az EIR-en belül.\n3. A szervezetnek biztosítania kell, hogy az EIR képes legyen azonosítani és hitelesíteni azokat a felhasználókat, akik hozzáférnek a kriptográfiai modulhoz.\n4. A szervezetnek naplózni kell minden hozzáférési kísérletet és műveletet, amelyet a kriptográfiai modulon belül végeznek. Ez lehetővé teszi a szervezet számára, hogy nyomon kövesse és ellenőrizze a modul használatát, és azonosítsa az esetleges biztonsági problémákat.\n5. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a kriptográfiai modul hitelesítési mechanizmusait, hogy biztosítsa azok hatékonyságát és megfelelőségét a jelenlegi biztonsági követelményeknek.\n6. A szervezetnek biztosítania kell, hogy a kriptográfiai modul hitelesítési mechanizmusai megfelelnek a hatályos törvényeknek, szabályzatoknak és szabványoknak.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IA-7",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.37"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.37 – Hitelesítés kriptográfiai modul esetén végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-092",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.37 – Hitelesítés kriptográfiai modul esetén: 1) A szervezetnek meg kell határoznia, hogy milyen kriptográfiai modul hitelesítési mechanizmusokat kíván alkalmazni. 2) A szervezetnek implementálnia kell ezeket a mechanizmusokat az EIR-en belül. 3) A szervezetnek biztosítania kell, hogy a kriptográfiai modul hitelesítési mechanizmusai megfelelnek a hatályos törvényeknek, szabályzatoknak és szabványoknak. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.38",
          "control_title": "Azonosítás és hitelesítés (szervezeten kívüli felhasználók)",
          "explanation": "A nem szervezeti felhasználók közé tartoznak azon felhasználók, akik a szervezeti felhasználóktól eltérnek, úgy, mint például szerződéses partnerek, külső projekt résztvevők stb. Ezeket a személyeket a szervezet egyedileg azonosítja és hitelesíti, kivéve a meghatározott és dokumentált hozzáférések esetében. A szervezet a kockázatértékelések alkalmazásával meghatározzák a hitelesítési igényeket. Ennek során az információs rendszerekhez történő egyszerű hozzáférés mellett figyelembe veszik a skálázhatóságot, hatékonyságot és biztonságot is, ezáltal garantálva a kockázatok csökkentését és a fenyegetések enyhítését.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia, kiket tekint nem szervezeti felhasználóknak.\n2. A szervezetnek biztosítania kell, hogy a nem szervezeti felhasználók egyedileg azonosíthatók és hitelesíthetők legyenek az EIR-ben.\n3. A szervezetnek meg kell fontolnia a nem szervezeti felhasználók egyedi azonosítását és hitelesítését, amikor az EIR-hez való hozzáférnek.\n4. A szervezetnek figyelembe kell vennie számos tényezőt - beleértve a biztonságot, az adatvédelmi követelményeket, melyek más jogszabályokból származhatnak, a skálázhatóságot és a használhatóságot - amikor mérlegeli a szervezeti információkhoz és az EIR-hez való hozzáférés könnyű használatának szükségességét a kockázatok megfelelő mérséklésének és védelmének szükségességével.\n5. A szervezetnek naplóznia kell a nem szervezeti felhasználók tevékenységét és az ő nevükben futó folyamatokat az EIR-ben. Ez segít azonosítani és nyomon követni a potenciális veszélyeket és kockázatokat.",
          "iso_27001_ref": "A.5.16",
          "nist_sp_800_53_rev5_ref": "IA-8",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.38"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.38 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók) végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-093",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.38 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók): 1) A szervezetnek meg kell határoznia, kiket tekint nem szervezeti felhasználóknak. 2) A szervezetnek biztosítania kell, hogy a nem szervezeti felhasználók egyedileg azonosíthatók és hitelesíthetők legyenek az EIR-ben. 3) A szervezetnek naplóznia kell a nem szervezeti felhasználók tevékenységét és az ő nevükben futó folyamatokat az EIR-ben. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.39",
          "control_title": "Azonosítás és hitelesítés (szervezeten kívüli felhasználók) – Meghatározott azonosítási profilok használata",
          "explanation": "Az érintett szervezet nyílt személyazonosság-kezelési szabványok alapján azonosítási profilokat határoz meg a személyazonosság-kezeléshez. Annak biztosítása érdekében, hogy a nyílt személyazonosság-kezelési szabványok a dokumentáltak szerint életképesek, szilárdak, megbízhatóak, fenntarthatóak és interoperábilisak legyenek, az arra feljogosított állami szervek értékelhetik a szabványokat és a technológiai megvalósításokat, és a vonatkozó törvények, végrehajtási rendeletek, irányelvek, szabályok, szabályzatok, szabványok és iránymutatások alapján vizsgálják azokat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia az azonosítási profilokat, amelyeket az azonosítási folyamat során alkalmazni kíván.\n2. A szervezetnek biztosítania kell, hogy választott és használt nyílt személyazonosság-kezelési szabvány életképes, megbízható, fenntartható és interoperábilis más rendszerekkel, rendszerelemekkel.\n3. A szervezetnek értékelnie kell a szabványokat és a technológiai megvalósításokat az alkalmazandó törvények, rendeletek, irányelvek, szabályozások és irányelvek alapján.\n4. A szervezetnek be kell vezetnie az EIR-ben az azonosítási profilokat.\n5. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a meghatározott azonosítási profilokat az EIR-ben, annak érdekében, hogy biztosítsa azok folyamatos megfelelőségét.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IA-8(4)",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.39"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.39 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók) – Meghatározott azonosítási profilok használata végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-094",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.39 – Azonosítás és hitelesítés (szervezeten kívüli felhasználók) – Meghatározott azonosítási profilok használata: 1) A szervezetnek meg kell határoznia az azonosítási profilokat, amelyeket az azonosítási folyamat során alkalmazni kíván. 2) A szervezetnek biztosítania kell, hogy választott és használt nyílt személyazonosság-kezelési szabvány életképes, megbízható, fenntartható és interoperábilis más rendszerekkel, rendszerelemekkel. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell a meghatározott azonosítási profilokat az EIR-ben, annak érdekében, hogy biztosítsa azok folyamatos megfelelőségét. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "8.43",
          "control_title": "Újrahitelesítés",
          "explanation": "Az eszközök zárolásával kapcsolatos újrahitelesítési követelményeken túl az érintett szervezet bizonyos helyzetekben megkövetelheti az egyének újrahitelesítését, beleértve, amikor a szerepkörök, hitelesítők vagy a hitelesítéssel kapcsolatos adatok megváltoznak. Emellett akkor is kérheti egy érintett szervezet az újrahitelesítést, amikor az EIR biztonsági osztálya megváltozik, illetve privilegizált funkciók futnak le egy meghatározott időszak után, vagy időszakosan.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azokat a körülményeket vagy helyzeteket, amikor újrahitelesítést kér az egyénektől. Ilyen körülmény vagy helyzet lehet például szerepkört, hitelesítőt vagy hitelesítési adatokat érintő változás, az EIR biztonsági osztályának változása, privilegizált funkciók rendszeres vagy meghatározott időszak utáni végrehajtása.\n2. A szervezetnek szabályoznia kell az újrahitelesítést, melynek során meghatározza az újrahitelesítési eljárásokat és kritériumokat. Ez magában foglalhatja a hitelesítési adatok újbóli megadását, a biometrikus adatok használatát, vagy a többtényezős hitelesítést.\n3. A szervezetnek biztosítania kell, hogy az EIR képes legyen kezelni az újrahitelesítési kéréseket. Ez magában foglalhatja a szükséges hardver- és szoftverfrissítések végrehajtását, valamint a hitelesítési protokollok és mechanizmusok beállítását.\n4. A szervezetnek naplóznia kell az újrahitelesítési eseményeket. Ez lehetővé teszi az érintett szervezet számára, hogy nyomon kövesse és elemezze az újrahitelesítési tevékenységeket, és szükség esetén beavatkozzon.\n5. A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell az újrahitelesítésre vonatkozó szabályzatát és eljárásrendjeit annak érdekében, hogy biztosítsa azok hatékonyságát és aktualitását. Ez magában foglalhatja a a szabályzat és eljárásrendek felülvizsgálatát, a felhasználói visszajelzések és a naplóelemzések alapján történő módosításokat, valamint a legújabb biztonsági trendek és fenyegetések figyelembevételét.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IA-11",
          "requirement_family": "8",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "8.43"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "8.43 – Újrahitelesítés végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott IAM-szabály, read-only beállításexport, hitelesítési teszt, kivétel- és felülvizsgálati napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-095",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "8.43 – Újrahitelesítés: 1) A szervezetnek meg kell határoznia azokat a körülményeket vagy helyzeteket, amikor újrahitelesítést kér az egyénektől. 2) A szervezetnek szabályoznia kell az újrahitelesítést, melynek során meghatározza az újrahitelesítési eljárásokat és kritériumokat. 3) A szervezetnek rendszeresen felül kell vizsgálnia és frissítenie kell az újrahitelesítésre vonatkozó szabályzatát és eljárásrendjeit annak érdekében, hogy biztosítsa azok hatékonyságát és aktualitását. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "9.25",
          "control_title": "A biztonsági események nyomonkövetése",
          "explanation": "A biztonsági eseményeket kezelő automatizált rendszerek, melyek az események begyűjtését és elemzését végzik, a CSIRT-ek és egyéb rendelkezésre álló elektronikus adatbázisok és hálózati monitorozó eszközök adatait használják fel.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek létre kell hoznia egy eljárásrendet, amely meghatározza, hogyan kell nyomon követni és dokumentálni a biztonsági eseményeket. Ez az eljárásrend tartalmazza az eseményekről szóló jegyzőkönyvek karbantartását, az események állapotát és más, a digitális forenzikus vizsgálatokhoz és az események részleteinek, trendjeinek és kezelésének értékeléséhez szükséges információkat.\n2. A biztonsági eseményekkel kapcsolatos információk számos forrásból szerezheti be az érintett szervezet, beleértve a hálózat monitorozását, a biztonsági eseményekről készült jelentéseket, a biztonsági eseményeket kezelő csapatokat, a felhasználói panaszokat, a beszállítói partnereket, a naplók monitorozását, a fizikai hozzáférés monitorozását, valamint a felhasználói és adminisztrátori jelentéseket.\n3. Az érintett szervezetnek meg kell határoznia, mely biztonsági eseményeket kell nyomon követnie.\n4. A szervezetnek rendszeresen felül kell vizsgálnia és szükség esetén frissítenie kell az biztonsági események nyomon követését érintő eljárásrendet annak érdekében, hogy biztosítsa annak naprakészségét és hatékonyságát.\n5. A szervezetnek biztosítania kell, hogy a személyzet megfelelően képzett és felkészült, annak érdekében, hogy a biztonsági eseményeket nyomon követése és dokumentálása megfelelő legyen.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IR-5",
          "requirement_family": "9",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "9.25"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "9.25 – A biztonsági események nyomonkövetése végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott eljárás, eseményjegy, értesítési vagy eszkalációs nyom, gyakorlat és lessons-learned rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-096",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "9.25 – A biztonsági események nyomonkövetése: 1) A szervezetnek létre kell hoznia egy eljárásrendet, amely meghatározza, hogyan kell nyomon követni és dokumentálni a biztonsági eseményeket. 2) A biztonsági eseményekkel kapcsolatos információk számos forrásból szerezheti be az érintett szervezet, beleértve a hálózat monitorozását, a biztonsági eseményekről készült jelentéseket, a biztonsági eseményeket kezelő csapatokat, a felhasználói panaszokat, a beszállítói partnereket, a naplók monitorozását, a fizikai hozzáférés… 3) A szervezetnek biztosítania kell, hogy a személyzet megfelelően képzett és felkészült, annak érdekében, hogy a biztonsági eseményeket nyomon követése és dokumentálása megfelelő legyen. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági események kezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "9.27",
          "control_title": "A biztonsági események jelentése",
          "explanation": "A bejelentett biztonsági események típusainak, tartalmának és időszerűségének igazodnia kell a jogszabályban elvártakhoz, illetve azokat a jogszabályban meghatározott szervek felé kell az érintett szervezetnek bejelentenie. A biztonsági eseményekből nyert információk fontos bemeneti információként szolgálnak a kockázatelemzéshez, a beszerzések biztonsági szempontjainak meghatározásához, a technológiai termékek kiválasztásához, valamint a szervezeti védelmi intézkedések értékeléséhez.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek olyan szabályzatot kell alkotnia vagy meglévő szabályzatai valamelyikébe (pl. IBSZ) illesztenie, amely kötelezi a szervezethez köthető személyeket arra, hogy jelentsék a biztonsági esemény gyanúját vagy bekövetkeztét.\n2. A szervezetnek biztosítania kell, hogy a személyek megfelelő képzést kapjanak a biztonsági események felismerésére és jelentésére.\n3. A szervezetnek létre kell hoznia egy jelentéstételre vonatkozó eljárásrendet, amely érthetővé teszi a szervezethez köthető személyek számára, hogy jelentse a biztonsági eseményeket. Az eljárásrend lehetővé teszi a gyors és hatékony jelentéstételt, és biztosítja, hogy a jelentések megfelelően dokumentálva legyenek.\n4. A szervezetnek biztosítania kell, hogy a biztonsági eseményekről szóló információkat a jogszabályban meghatározottak szerint jelentik a jogszabályban meghatározott szervek felé. Ez magában foglalja a jelentéshez köthető eljárásrendet, a jelentendő információkat és a jelentés időben történő megtételével kapcsolatos előírásokat.\n5. A szervezetnek dokumentálnia kell a biztonsági eseményeket, beleértve a jelentett eseményeket, a megtett intézkedéseket és a következményeket. A dokumentálás segíthet az érintett szervezetnek a kockázatelemzésben, a biztonsági előírások hatékonyságának értékelésében, a biztonsági követelmények meghatározásában a beszerzésekhez és a technológiai termékek kiválasztási kritériumainak meghatározásában.",
          "iso_27001_ref": "A.5.5; A.6.8",
          "nist_sp_800_53_rev5_ref": "IR-6",
          "requirement_family": "9",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "9.27"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "9.27 – A biztonsági események jelentése végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott eljárás, eseményjegy, értesítési vagy eszkalációs nyom, gyakorlat és lessons-learned rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-097",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "9.27 – A biztonsági események jelentése: 1) A szervezetnek olyan szabályzatot kell alkotnia vagy meglévő szabályzatai valamelyikébe (pl. 2) A szervezetnek biztosítania kell, hogy a személyek megfelelő képzést kapjanak a biztonsági események felismerésére és jelentésére. 3) A szervezetnek dokumentálnia kell a biztonsági eseményeket, beleértve a jelentett eseményeket, a megtett intézkedéseket és a következményeket. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági események kezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "9.31",
          "control_title": "Segítségnyújtás a biztonsági események kezeléséhez",
          "explanation": "A biztonsági események kezelésében a általában szervezetek helpdesk szolgáltatói és támogatási csoportjai vesznek részt, amely folyamatok támogatására a szervezetek (automatizált) jegykezelő rendszereit használják. A jegykezelő rendszerek képesek létrehozni és kezelni a hibajegyeket és ezek segítségével nyomon követni a biztonsági eseményeket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek létre kell hoznia egy helpdesk szolgáltatói és támogatási csoportot, amely támogatást nyújt az EIR felhasználóinak a biztonsági események kezelésében.\n2. A szervezetnek be kell vezetnie egy jegykezelő rendszert, amely lehetővé teszi a biztonsági események kezeléséhez köthető jegyek megnyitását és nyomon követését.\n3. A szervezetnek dokumentálnia kell az összes biztonsági eseményt, beleértve azokat, amelyeket az EIR felhasználói jelentettek.\n4. A szervezetnek meg kell bizonyosodnia arról, hogy az EIR felhasználói tisztában vannak azzal, hogyan jelenthetik a biztonsági eseményeket, és milyen támogatást kaphatnak az események kezelésében. Ez magában foglalhatja a képzéseket, útmutatókat, és a helpdesk szolgáltatói és támogatási csoport elérhetőségét.\n6. A szervezetnek folyamatosan felül kell vizsgálnia és szükség esetén frissítenie kell a biztonsági események kezelésére és jelentésére vonatkozó szabályzatait és eljárásrendjeit annak érdekében, hogy hatékony támogassa az EIR felhasználóit a biztonsági események bejelentésében.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "IR-7",
          "requirement_family": "9",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "9.31"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "9.31 – Segítségnyújtás a biztonsági események kezeléséhez végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott eljárás, eseményjegy, értesítési vagy eszkalációs nyom, gyakorlat és lessons-learned rekord, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-098",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "9.31 – Segítségnyújtás a biztonsági események kezeléséhez: 1) A szervezetnek létre kell hoznia egy helpdesk szolgáltatói és támogatási csoportot, amely támogatást nyújt az EIR felhasználóinak a biztonsági események kezelésében. 2) A szervezetnek be kell vezetnie egy jegykezelő rendszert, amely lehetővé teszi a biztonsági események kezeléséhez köthető jegyek megnyitását és nyomon követését. 3) A szervezetnek folyamatosan felül kell vizsgálnia és szükség esetén frissítenie kell a biztonsági események kezelésére és jelentésére vonatkozó szabályzatait és eljárásrendjeit annak érdekében, hogy hatékony támogassa az EIR felhasználóit a biztonsági események bejelentésében. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Biztonsági események kezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "10.2",
          "control_title": "Szabályozott karbantartás",
          "explanation": "A rendszeres karbantartás meghatározza az EIR karbantartási programját minden rendszerelem és minden karbantartási típus vonatkozásában függetlenül attól, hogy azt maga a szervezet vagy külső szolgáltató végzi (szerződéses, garanciális, házon belüli, szoftver-karbantartási megállapodás). A rendszer karbantartása magában foglalja azokat az elemeket is, amelyek nem vesznek közvetlenül részt az információ feldolgozásban és/vagy az adatok/információk megőrzésében, mint például a szkennerek, másolók és nyomtatók. Annak érdekében, hogy a karbantartási nyilvántartások hatékonyak legyenek, a jegyzőkönyveknek tartalmazniuk kell például a karbantartás dátumát és idejét, a karbantartást végző szervezet, valamint személyek nevét, amennyiben szükséges, úgy a felügyeletet biztosító kísérők nevét, a végrehajtott karbantartás leírását és az eltávolított vagy kicserélt rendszerelemek, alkatrészek meghatározását, leírását.\nAz EIR-ek biztonsági osztálya meghatározza a karbantartási bejegyzések részletességével kapcsolatos elvárásokat. A szervezetek figyelembe veszik az információs rendszerek tartalék alkatrészeinek beszerzésével kapcsolatos szemmpontokat is.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet ütemezi, dokumentálja és felülvizsgálja a rendszerelemek karbantartásának, javításának és cseréjének nyilvántartásait a gyártó vagy szállító specifikációi és az érintett szervezet követelményei szerint.\n2. A szervezetnek jóvá kell hagyja és ellenőriznie kell az összes karbantartási tevékenységet, függetlenül attól, hogy azt a helyszínen vagy távolról végzik-e, és hogy az EIR-t vagy a rendszerelemeket a helyszínen szervizelik-e, vagy más helyszínre szállítják.\n3. A szervezetnek meg kell követelnie, hogy a meghatározott személyek vagy szerepkörök egyedileg jóváhagyják az EIR vagy a rendszerelemek szervezeti létesítményekből történő elszállítását külső karbantartás, javítás vagy csere céljából.\n4. A szervezetnek gondoskodnia kell arról, hogy biztonságosan törli a meghatározott besorolású információkat a hozzájuk kapcsolódó adathordozókról, mielőtt azokat szervezet létesítményeiből külső karbantartás, javítás vagy csere céljából elszállítanák.\n5. A szervezetnek ellenőriznie kell a biztonsági intézkedések megfelelő működését a karbantartás, javítás vagy csere után.\n6. A szervezetnek biztosítania kell, hogy rögzíti a meghatározott információkat a karbantartási jegyzőkönyvekbe.\n7. A szervezetnek a tulajdonában álló EIR-ek biztonsági osztálya alapján meg kell határoznia a karbantartási jegyzőkönyvek részletességével kapcsolatos elvárásokat.\n8. A szervezet figyelembe veszi az információs rendszerek tartalék alkatrészeinek beszerzésével kapcsolatos szempontokat is.",
          "iso_27001_ref": "A.7.10; A.7.13; A.8.10",
          "nist_sp_800_53_rev5_ref": "MA-2",
          "requirement_family": "10",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "10.2"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "10.2 – Szabályozott karbantartás végrehajtási csomag: jóváhagyott EIR-scope, 8 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott karbantartási eljárás, munkajegy, hozzáférési napló, felügyeleti és lezárási ellenőrzés, kontrollgazdai és G1 reviewer sign-off. Továbbá: 8 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-099",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "10.2 – Szabályozott karbantartás: 1) A szervezet ütemezi, dokumentálja és felülvizsgálja a rendszerelemek karbantartásának, javításának és cseréjének nyilvántartásait a gyártó vagy szállító specifikációi és az érintett szervezet követelményei szerint. 2) A szervezetnek jóvá kell hagyja és ellenőriznie kell az összes karbantartási tevékenységet, függetlenül attól, hogy azt a helyszínen vagy távolról végzik-e, és hogy az EIR-t vagy a rendszerelemeket a helyszínen szervizelik-e, vagy más helyszínre szállítják. 3) A szervezet figyelembe veszi az információs rendszerek tartalék alkatrészeinek beszerzésével kapcsolatos szempontokat is. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Karbantartás"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "10.11",
          "control_title": "Távoli karbantartás",
          "explanation": "Távoli karbantartásnak nevezzük azt, amikor egy személy hálózat segítségével végez karbantartási munkát, függetlenül attól, hogy az külső vagy belső hálózaton történik. Az egyének által hálózat igénybevétele nélkül, információs rendszer vagy rendszerelem mellett történő fizikai jelenlét során zajló tevékenységeket helyszíni karbantartásnak tekintjük. Az erős hitelesítési megoldások általában többfaktoros hitelesítést használnak és védelmet nyújtanak a visszajátszásos támadások ellen. Megfelelő hitelesítő eszköz lehet például a nyilvános kulcsú infrastruktúra (PKI), ahol a tanúsítványok egy token-en kerülnek tárolásra és jelszóval, jelmondattal vagy biometrikusan védettek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet jóváhagyja, nyomon követi és ellenőrzi a távoli karbantartási és diagnosztikai tevékenységeket. Ez azt jelenti, hogy az érintett szervezetnek rendszeresen ellenőriznie kell a távoli karbantartási és diagnosztikai tevékenységeket, és biztosítania kell, hogy ezek megfelelnek a szervezeti szabályoknak és a rendszerbiztonsági tervnek.\n2. A szervezet csak akkor engedélyezi a távoli karbantartási és diagnosztikai eszközök használatát, amennyiben az összhangban áll a szervezeti szabályokkal és az EIR rendszerbiztonsági tervében dokumentált.\n3. A szervezet erős hitelesítési eljárásokat alkalmaz a távoli karbantartási és diagnosztikai munkaszakaszok létrehozásakor. Ez azt jelenti, hogy az érintett szervezetnek biztosítania kell, hogy a távoli karbantartási és diagnosztikai munkaszakaszok létrehozása során erős hitelesítési eljárásokat alkalmaznak, például többtényezős hitelesítést vagy PKI-t, ahol a tanúsítványokat jelszóval, jelmondattal vagy biometrikus adatokkal védett token-en tárolják.\n4. A szervezet nyilvántartást vezet a távoli karbantartási és diagnosztikai tevékenységekről. Ez azt jelenti, hogy az érintett szervezetnek dokumentálnia kell a távoli karbantartási és diagnosztikai tevékenységeket annak érdekében, hogy nyomon követhető legyen milyen tevékenységek történtek és ki végezte azokat.\n5. A szervezet lezárja a munkaszakaszokat és a hálózati kapcsolatokat, amikor a távoli karbantartás befejeződik.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "MA-4",
          "requirement_family": "10",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "10.11"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "10.11 – Távoli karbantartás végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott karbantartási eljárás, munkajegy, hozzáférési napló, felügyeleti és lezárási ellenőrzés, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-100",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "10.11 – Távoli karbantartás: 1) A szervezet jóváhagyja, nyomon követi és ellenőrzi a távoli karbantartási és diagnosztikai tevékenységeket. 2) A szervezet csak akkor engedélyezi a távoli karbantartási és diagnosztikai eszközök használatát, amennyiben az összhangban áll a szervezeti szabályokkal és az EIR rendszerbiztonsági tervében dokumentált. 3) A szervezet lezárja a munkaszakaszokat és a hálózati kapcsolatokat, amikor a távoli karbantartás befejeződik. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Karbantartás"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "10.18",
          "control_title": "Karbantartó személyek",
          "explanation": "A karbantartó személyzet olyan személyekre utal, akik hardveres vagy szoftveres karbantartást végeznek az érintett szervezet EIR-jén. Azok a személyek, akiket korábban nem azonosítottak jogosult karbantartó személyzetként - mint például a gyártók, szolgáltatók, rendszerintegrátorok és tanácsadók - előfordulhat, hogy privilegizált hozzáférést igényelnek a szervezet EIR-jéhez. Ez például akkor fordulhat elő, amikor rövid határidővel vagy azonnal kell karbantartási tevékenységeket végezniük. A szervezet kockázatelemzése alapján ideiglenes hozzáférési jogosultságot adhat ezeknek a személyeknek. Az ideiglenes hozzáférési jogosultságok egyszeri használatra vagy korlátozott időszakra szólhatnak.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet kialakít egy folyamatot a karbantartási munkákhoz szükséges hozzáférési jogosultságok kezelésére.\n2. A szervezet nyilvántartást vezet a hozzáférési jogosultsággal rendelkező karbantartó szervezetekről vagy személyekről.\n3. A szervezetnek ellenőrznie kell az EIR-en kíséret nélkül karbantartást végző személyek hozzáférési jogosultságait.\n4. A szervezet gondoskodik arról, hogy a szervezethez tartozó és a kívánt hozzáférési jogosultságokkal, valamint a megfelelő műszaki szakértelemmel rendelkező személyek felügyeljék a szükséges jogosultságokkal nem rendelkező személyek karbantartási tevékenységeit.\n5. A szervezet ideiglenes hozzáférési jogosultságot adhat a karbantartást végző személyeknek, azonban ennek kockázatát a kockázatelemzésben értékelnie kell. Az ideiglenes hozzáférési jogosultságok egyszeri használatra vagy korlátozott időszakra szólhatnak.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "MA-5",
          "requirement_family": "10",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "10.18"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "10.18 – Karbantartó személyek végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott karbantartási eljárás, munkajegy, hozzáférési napló, felügyeleti és lezárási ellenőrzés, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-101",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "10.18 – Karbantartó személyek: 1) A szervezet kialakít egy folyamatot a karbantartási munkákhoz szükséges hozzáférési jogosultságok kezelésére. 2) A szervezet nyilvántartást vezet a hozzáférési jogosultsággal rendelkező karbantartó szervezetekről vagy személyekről. 3) A szervezet ideiglenes hozzáférési jogosultságot adhat a karbantartást végző személyeknek, azonban ennek kockázatát a kockázatelemzésben értékelnie kell. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Karbantartás"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "12.37",
          "control_title": "Környezeti védelmi intézkedések",
          "explanation": "A környezeti feltételekhez kapcsolódó követelmények elsősorban a szervezet azon létesítményeire vonatkoznak, ahol koncentráltan találhatóak meg informatikai erőforrások. A környezeti feltételekhez kapcsolódó követelmények biztosítása elsősorban az érintett szervezet azon létesítményeire vonatkozik, amelyek egyszerre több rendszererőforrást tartalmaznak (pl.: adatközpontok, számítógéptermek, szerverszobák). A környezeti tényezők elégtelen felügyelete - különösen zord működési környezetben - negatívan befolyásolhatja a szervezet ügymeneti és üzleti funkcióinak ellátásához szükséges EIR-ek és rendszerelemek rendelkezésre állását. Az érintett szervezetnek gondoskodnia kell arról, hogy a környezeti tényezők ne lépjék túl a biztonságos határokat, mivel ebben az esetben károsíthatják a rendszererőforrásokat vagy veszélyeztethetik azok működését.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a biztonságos szinteket (tartományokat) a környezeti feltételeket illetően .\n2. A szervezetnek be kell állítania a környezeti szabályozó rendszereket, hogy fenntartsa ezeket a biztonságos szinteket. Ez magában foglalhatja a klímaberendezések, páramentesítők, légnyomás szabályozók és sugárzásvédelmi eszközök használatát, illetve azok beállításait.\n3. A szervezetnek rendszeresen ellenőriznie kell a környezeti szabályozási szinteket. Ez magában foglalhatja a hőmérséklet, páratartalom, légnyomás és sugárzás mérését, valamint a mérési adatok dokumentálását.\n4. A szervezetnek be kell állítania automatikus riasztást, amely figyelmezteti a meghatározott személyzetet, ha a környezeti szabályozási szintek a biztonságos tartományon kívül esnek. Ez lehetővé teszi a gyors reagálást és a problémák korai megoldását.\n5. A szervezetnek rendszeresen felül kell vizsgálnia a környezeti szabályozási szinteket és a riasztási rendszert, hogy biztosítsa azok hatékonyságát és naprakészségét. Szükség esetén módosítania kell ezeket.",
          "iso_27001_ref": "A.7.5; A.7.8; A.7.11",
          "nist_sp_800_53_rev5_ref": "PE-14",
          "requirement_family": "12",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "12.37"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "12.37 – Környezeti védelmi intézkedések végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott környezeti követelmény, mérési vagy szenzorrekord, riasztási próba és felülvizsgálati jegyzőkönyv, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-102",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "12.37 – Környezeti védelmi intézkedések: 1) A szervezetnek meg kell határoznia a biztonságos szinteket (tartományokat) a környezeti feltételeket illetően . 2) A szervezetnek be kell állítania a környezeti szabályozó rendszereket, hogy fenntartsa ezeket a biztonságos szinteket. 3) A szervezetnek rendszeresen felül kell vizsgálnia a környezeti szabályozási szinteket és a riasztási rendszert, hogy biztosítsa azok hatékonyságát és naprakészségét. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Fizikai és környezeti védelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "16.16",
          "control_title": "Biztonságtervezési elvek",
          "explanation": "A biztonságtervezési elvek szorosan kapcsolódnak a rendszer fejlesztési életciklushoz és annak minden fázisában alkalmazandóak. A szervezetek a biztonságtervezési elveket alkalmazhatják új rendszerek fejlesztésekor vagy fejlesztés alatt álló rendszereken. Meglévő rendszerek esetén a szervezetek a biztonságtervezési elveket alkalmazzák a rendszer fejlesztései és módosításai során - amennyire ez lehetséges - figyelembe véve a rendszereken belüli hardver-, szoftver- és firmware-elemek jelenlegi állapotát. A biztonságtervezési elvek alkalmazása segíti az érintett szervezetet megbízható, biztonságos és ellenálló rendszerek fejlesztésében, csökkenti a zavarokkal, veszélyekkel, fenyegetésekkel szembeni érzékenységet. .\nA rendszerbiztonság-technikai elvekre példák: többszintű védelem kialakítása, a tervezés és fejlesztés alapjául szolgáló biztonsági irányelvek, architektúra és biztonsági intézkedések kialakítása, a biztonsági követelmények beépítése a rendszerfejlesztési életciklusba, a fizikai és logikai biztonsági határok kijelölése, annak biztosítása, hogy a fejlesztők képzést kapjanak a biztonságos szoftverek létrehozására, az ellenőrzések testre szabása a szervezeti igényeknek megfelelően, és fenyegetésmodellezés a felhasználási esetek, a fenyegető tényezők, a támadási vektorok és minták, a tervezési minták és a kockázat mérsékléséhez szükséges kompenzációs intézkedések azonosítása érdekében.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a biztonságtervezési elveit, amelyeket az EIR fejlesztési életciklusa során alkalmazni fog.\n2. A szervezetnek alkalmaznia kell ezeket a biztonságtervezési elveket új EIR fejlesztésénél, vagy amikor az EIR frissítésre kerül. A meglévő EIR esetében az érintett szervezetnek a lehető legnagyobb mértékben alkalmaznia kell a biztonságtervezési elveket az EIR frissítésekor és módosításakor, figyelembe véve a hardver, szoftver és firmware elemek jelenlegi állapotát.\n3. A szervezetnek a biztonságtervezési elvek alkalmazásával olyan megbízható, biztonságos és ellenálló EIR-t kell kifejlesztenie, amely csökkenti a zavarok, veszélyek, fenyegetések valószínűségét.\n4. A szervezetnek például a következő biztonságtervezési elveket kell alkalmaznia: mélységi védelem kialakítása; biztonsági jógyakorlatok alkalmazása, biztonsági architektúra és követelmények létrehozása a tervezés és fejlesztés alapjául; a biztonsági követelmények beépítése az EIR fejlesztési életciklusába; fizikai és logikai biztonsági határok meghatározása; a fejlesztők képzése biztonságos szoftverek fejlesztésére; a védelmi intézkedések szervezeti igényekhez történő igazítása; fenyegetésmodellezés készítése a használati esetek, fenyegetést jelentő szereplők, támadási vektorok és minták, tervezési minták és a kockázat csökkentéséhez szükséges kiegészítő védelmi intézkedések azonosításához.\n5. A szervezetnek a biztonságtervezési elvek alkalmazásával elfogadható szintre kell csökkentenie a kockázatot, és tájékozott kockázatkezelési döntéseket kell hoznia.\n6. A szervezetnek a biztonságtervezési elveket a beszállítói lánc bizonyos kockázatainak kezelésére is alkalmaznia kell, beleértve a manipuláció ellen védett hardver beépítését a tervezésbe.\n7. A szervezetnek naplót kell vezetnie az EIR módosításairól és frissítéseiről, hogy nyomon követhető legyen a biztonságtervezési elvek alkalmazása.",
          "iso_27001_ref": "A.8.27; A.8.28",
          "nist_sp_800_53_rev5_ref": "SA-8",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "16.16"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "16.16 – Biztonságtervezési elvek végrehajtási csomag: jóváhagyott EIR-scope, 7 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott követelmény- és értékelési checklist, szerződéses vagy tervi kontroll, eltérés- és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 7 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-103",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "16.16 – Biztonságtervezési elvek: 1) A szervezetnek meg kell határoznia a biztonságtervezési elveit, amelyeket az EIR fejlesztési életciklusa során alkalmazni fog. 2) A szervezetnek alkalmaznia kell ezeket a biztonságtervezési elveket új EIR fejlesztésénél, vagy amikor az EIR frissítésre kerül. 3) A szervezetnek naplót kell vezetnie az EIR módosításairól és frissítéseiről, hogy nyomon követhető legyen a biztonságtervezési elvek alkalmazása. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és szolgáltatásbeszerzés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "16.49",
          "control_title": "Külső elektronikus információs rendszerek szolgáltatásai",
          "explanation": "A külső EIR szolgáltatásokat külső szolgáltató nyújtja, az érintett szervezetnek nincs közvetlen kontrollja a szükséges intézkedések végrehajtásában, vagy az intézkedések hatékonyságának értékelésében. A szervezetek különféle módokon alakítanak ki kapcsolatokat külső szolgáltatókkal, többek között üzleti partnerségek, szerződések, szervezetek közötti megállapodások, üzletági megállapodások, licenszmegállapodások stb. révén. A külső rendszer szolgáltatások használatából eredő kockázatok kezelésének felelőssége továbbra is az azt jóváhagyó szerepkörnél marad.\nA szervezeteken kívüli szolgáltatások esetében a bizalmi lánc megköveteli, hogy a fogyasztó-szolgáltató vonatkozásában minden szolgáltató megfelelő védelmet alakítson ki és biztosítson a szolgáltatásnyújtás során. Ebben a bizalmi láncban a bizalom mértéke és jellege a szervezetek és a külső szolgáltatók közötti kapcsolatok függvényében változik. Az érintett szervezetek dokumentálják a külsős kapcsolataikat, melyek monitorozhatóak. A külső rendszerszolgáltatások dokumentációja tartalmazza a kormányzati, szolgáltatói, felhasználói biztonsági feladatokat és felelősségeket, valamint a szolgáltatási szintre vonatkozó megállapodásokat. A szolgáltatási szintre vonatkozó megállapodások meghatározzák az alkalmazott rendelkezésekkel kapcsolatos elvárásokat, leírják a mérhető eredményeket, és meghatározzák az eljárást valamelyik fél követelményeknek való nem megfelelésére.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Az érintett szervezetnek szerződéses kötelezettségként meg kell követelnie, hogy az általa igénybe vett EIR-ek szolgáltatásai megfeleljenek az érintett szervezet elektronikus információbiztonsági követelményeinek. Ez azt jelenti, hogy a szolgáltatási szerződésben egyértelműen rögzíteni kell a biztonsági követelményeket és a szervezet által meghatározott védelmi intézkedéseket.\n2. Az érintett szervezetnek meg kell határoznia és dokumentálnia kell a szervezeti felügyelet és az érintett szervezet felhasználóinak feladatait és kötelezettségeit a külső EIR-ek szolgáltatásával kapcsolatban. Ez magában foglalja a felhasználói jogosultságok, a hozzáférési jogok és a biztonsági protokollok meghatározását.\n3. Az érintett szervezetnek külső és belső ellenőrzési eszközökkel kell ellenőriznie, hogy a külső EIR szolgáltatója megfelel-e az elvárt védelmi intézkedéseknek. Ez magában foglalja a biztonsági események naplózását, a rendszeres biztonsági ellenőrzéseket és a biztonsági protokollok betartásának ellenőrzését.\n4. Az érintett szervezetnek rendszeresen felül kell vizsgálnia és értékelnie kell a külső EIR szolgáltató teljesítményét, hogy biztosítsa a szerződésben meghatározott követelmények betartását. Ez magában foglalja a szolgáltatási szint-megállapodások felülvizsgálatát és a szolgáltató által biztosított biztonsági jelentések elemzését.\n5. Az érintett szervezetnek biztosítania kell, hogy a külső EIR szolgáltatóval való kapcsolatát szabályozó szerződés tartalmazza a biztonsági események kezelésére vonatkozó eljárásokat, beleértve a biztonsági események jelentését, a válaszidőt és a helyreállítási terveket.",
          "iso_27001_ref": "A.5.2; A.5.4; A.5.8; A.5.14; A.5.22; A.5.23; A.8.21",
          "nist_sp_800_53_rev5_ref": "SA-9",
          "requirement_family": "16",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "16.49"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "16.49 – Külső elektronikus információs rendszerek szolgáltatásai végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott követelmény- és értékelési checklist, szerződéses vagy tervi kontroll, eltérés- és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-104",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "16.49 – Külső elektronikus információs rendszerek szolgáltatásai: 1) Az érintett szervezetnek szerződéses kötelezettségként meg kell követelnie, hogy az általa igénybe vett EIR-ek szolgáltatásai megfeleljenek az érintett szervezet elektronikus információbiztonsági követelményeinek. 2) Az érintett szervezetnek meg kell határoznia és dokumentálnia kell a szervezeti felügyelet és az érintett szervezet felhasználóinak feladatait és kötelezettségeit a külső EIR-ek szolgáltatásával kapcsolatban. 3) Az érintett szervezetnek biztosítania kell, hogy a külső EIR szolgáltatóval való kapcsolatát szabályozó szerződés tartalmazza a biztonsági események kezelésére vonatkozó eljárásokat, beleértve a biztonsági események jelentését, a válaszidőt és a helyreállítási terveket. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és szolgáltatásbeszerzés"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A rendszer- és kommunikációvédelmi szabályzat és eljárások a rendszer- és kommunikációvédelem követelménycsoportba tartozó védelmi intézkedésekkel foglalkoznak, amelyek az EIR-ekben, illetve a szervezetekben bevezetésre kerülnek.\nA kockázatkezelési stratégia fontos tényező az ilyen típusú szabályzatok és eljárásrendek létrehozása során. A szabályzatok és eljárásrendek hozzájárulnak a biztonság garantálásához. Ezért fontos, hogy a szervezet információbiztonsági szabályozási környezete, a rendszer- és kommunikációvédelmi szabályzat és az ahhoz kapcsolódó eljárásrendek összhangban legyenek egymással. A szervezeti szintű biztonsági szabályzatok és eljárásrendek általában előnyösebbek, és szükségtelenné tehetik a szervezeti célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásrendeket. A szabályok helyet kaphatnak egy általános biztonsági szabályzatban (pl.: Információbiztonsági Szabályzat (IBSZ)), illetve több szabályzatban is megjelenhetnek, attól függően, hogy az érintett szervezetnek milyen a felépítése. Amennyiben szükséges, létrehozhatók eljárásrendek az információbiztonsági irányítási rendszer, a szervezeti célok vagy üzleti folyamatok, illetve az EIR-ek támogatására. Az eljárásrendek leírják miként valósulnak meg a szabályok vagy a védelmi intézkedések, és azok hogyan érintik az eljárásrend tárgyát képező egyént vagy szerepkört. Az eljárásrendek képezhetik a rendszerbiztonsági terv részét, illetve egy vagy több külön dokumentumban is helyet kaphatnak. A rendszer- és kommunikációvédelmi szabályzat és eljárásrendek frissítését kiváltó események lehetnek értékelésből vagy (felül)vizsgálatból eredő megállapítások, biztonsági események, vagy változások a hatályos jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. Az elvárt védelmi intézkedések egyszerű újraközlése",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek gondoskodnia kell a rendszer- és kommunikációvédelmi szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról.\n2. A szervezetnek meg kell bizonyosodnia arról, hogy a rendszer- és kommunikációvédelmi szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak.\n3. A szervezetnek - a megfelelő szereplők bevonásával, dokumentált módon - ki kell dolgoznia a vonatkozó szabályzatot és a kapcsolódó eljárásrendeket, és gondoskodnia kell a szabályzat és az eljárásrendek megfelelő kihirdetéséről, valamint az érintett felekkel történő megismertetéséről.\n4. A szabályzat és a kapcsolódó eljárásrendek kidolgozásánál a szervezetnek figyelembe kell vennie a rá vonatkozó sajátosságokat. Az elvárt védelmi intézkedések szó szerinti átvétele nem minősül szervezeti szabályzatnak vagy eljárásrendnek.\n5. A szervezetnek a gyakorlatban is alkalmaznia kell a rendszer- és kommunikációvédelmi szabályzatban és az ahhoz kapcsolódó eljárásrendekben megfogalmazott elvárásokat, ezáltal biztosítva azok tényleges megvalósulását.\n6. A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális rendszer- és kommunikációvédelmi szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "SC-1",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.1"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.1 – Szabályzat és eljárásrendek végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-105",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.1 – Szabályzat és eljárásrendek: 1) A szervezetnek gondoskodnia kell a rendszer- és kommunikációvédelmi szabályzat és eljárásrendek kidolgozásával, dokumentálásával, jóváhagyásával, kiadásával és megismertetésével kapcsolatos feladatok ellátásáról. 2) A szervezetnek meg kell bizonyosodnia arról, hogy a rendszer- és kommunikációvédelmi szabályzatban foglaltak megfelelnek a szervezetre vonatkozó hatályos jogszabályoknak, irányelveknek, szabályozásoknak, szabványoknak és ajánlásoknak. 3) A szervezetnek felül kell vizsgálnia és szükség esetén frissítenie kell az aktuális rendszer- és kommunikációvédelmi szabályzatot/szabályokat, illetve a kapcsolódó eljárásrendeket a szervezet által meghatározott gyakorisággal, valamint a szervezet által meghatározott események bekövetkezését követően. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.12",
          "control_title": "Szolgáltatásmegtagadással járó támadások elleni védelem",
          "explanation": "A szolgáltatásmegtagadással járó események számos belső és külső ok miatt következhetnek be, például egy támadás vagy a szervezeti igények támogatására irányuló tervezés hiánya miatt a nem megfelelő szintű kapacitás és a sávszélesség miatt. Ilyen támadások a hálózati protokollok széles skáláján (pl. IPv4, IPv6. fordulhatnak elő. A szolgáltatásmegtagadással járó események keletkezésének és hatásainak korlátozására vagy kiküszöbölésére számos technológia áll rendelkezésre. A határvédelmi eszközök például képesek bizonyos típusú csomagok szűrésére, hogy megvédjék a belső hálózatok rendszerelemeit attól, hogy a szolgáltatásmegtagadással járó támadások közvetlenül érintsék őket, vagy ne legyenek a forrásuk. A megnövelt hálózati kapacitás és sávszélesség alkalmazása a szolgáltatás redundanciával kombinálva szintén csökkenti a szolgáltatásmegtagadással járó eseményekre való fogékonyságot.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek azonosítania kell a lehetséges belső és külső okokat, amelyek szolgáltatásmegtagadással járó eseményeket okozhatnak.\n2. A szervzezetnek elemzést kell végeznie a hálózati protokollok széles skáláján, hogy felderítse, melyik lehet a leginkább kitett a szolgáltatásmegtagadással járó támadásokkal szemben.\n3. A szervezetnek különböző technológiákat  kell alkalmaznia a szolgáltatásmegtagadással járó események eredetének vagy hatásainak korlátozására vagy megszüntetésére. Például a határvédelmi eszközök képesek szűrni bizonyos típusú csomagokat, hogy megvédjék a rendszerelemeit a belső hálózatokon a szolgáltatásmegtagadással járó támadások közvetlen hatásaitól vagy forrásaitól.\n4. A szervezetnek növelnie kell a hálózati kapacitást és sávszélességet, és szolgáltatás redundanciát kell alkalmaznia, hogy csökkentse az EIR sebezhetőségét a szolgáltatásmegtagadással járó eseményekkel szemben.\n5. A szervezetnek naplóznia kell a szolgáltatásmegtagadással járó támadásokat és a hozzájuk kapcsolódó védelmi intézkedéseket annak érdekében, hogy folyamatosan értékelje és javítsa a védelmi stratégiákat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SC-5",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.12"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.12 – Szolgáltatásmegtagadással járó támadások elleni védelem végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-106",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.12 – Szolgáltatásmegtagadással járó támadások elleni védelem: 1) A szervezetnek azonosítania kell a lehetséges belső és külső okokat, amelyek szolgáltatásmegtagadással járó eseményeket okozhatnak. 2) A szervzezetnek elemzést kell végeznie a hálózati protokollok széles skáláján, hogy felderítse, melyik lehet a leginkább kitett a szolgáltatásmegtagadással járó támadásokkal szemben. 3) A szervezetnek naplóznia kell a szolgáltatásmegtagadással járó támadásokat és a hozzájuk kapcsolódó védelmi intézkedéseket annak érdekében, hogy folyamatosan értékelje és javítsa a védelmi stratégiákat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.49",
          "control_title": "Kriptográfiai kulcs előállítása és kezelése",
          "explanation": "A kriptográfiai kulcsok kezelése és létrehozása manuális eljárásokkal támogatott automatizált mechanizmusokkal történhet. Az érintett szervezetek meghatározzák a kulcskezelési követelményeket a vonatkozó jogszabályi előírások, vezetői utasítások és előírások, belső szabályzatok, szabványok és iránymutatások figyelembevételével, meghatározva a megfelelő paramétereket. A szervezet egy bizalmi tárolót tart fenn, amelyben csak jóváhagyott megbízható elemek kerülnek tárolásra. Ez magában foglalja az EIR-ek belső műveletekhez kapcsolódó tanúsítványokat és az EIR-ek külső láthatóságú tanúsítványait.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezet először határozza meg a kriptográfiai kulcskezelési követelményeket, amelyek összhangban vannak az alkalmazandó törvényekkel, végrehajtási rendeletekkel, irányelvekkel, szabályozásokkal, szabályokkal, szabványokkal és útmutatókkal.\n2. Az érintett szervezetnek döntenie kell a megfelelő opciókról, paraméterekről és szintekről, amelyeket a kriptográfiai kulcskezelés során alkalmaznak.\n3. A szervezetnek kezelnie kell a bizalmi tárolókat, hogy biztosítsa, csak a jóváhagyott bizalmi ankerpontok legyenek része ezeknek a tárolóknak. Ez magában foglalja az EIR-en kívüli láthatósággal rendelkező tanúsítványokat, valamint az EIR belső működésével kapcsolatos tanúsítványokat.\n4. A szervezetnek elő kell állítania és kezelnie kell a kriptográfiai kulcsokat a szervezet által meghatározott előállítási, szétosztási, tárolási, hozzáférési és megsemmisítési követelményekkel összhangban.\n5. A szervezetnek dokumentálnia kell a kriptográfiai kulcskezelési és generálási folyamatokat, hogy nyomon követhető legyen a kulcsok életciklusa.",
          "iso_27001_ref": "A.8.24",
          "nist_sp_800_53_rev5_ref": "SC-12",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.49"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.49 – Kriptográfiai kulcs előállítása és kezelése végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-107",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.49 – Kriptográfiai kulcs előállítása és kezelése: 1) A szervezet először határozza meg a kriptográfiai kulcskezelési követelményeket, amelyek összhangban vannak az alkalmazandó törvényekkel, végrehajtási rendeletekkel, irányelvekkel, szabályozásokkal, szabályokkal, szabványokkal és útmutatókkal. 2) Az érintett szervezetnek döntenie kell a megfelelő opciókról, paraméterekről és szintekről, amelyeket a kriptográfiai kulcskezelés során alkalmaznak. 3) A szervezetnek dokumentálnia kell a kriptográfiai kulcskezelési és generálási folyamatokat, hogy nyomon követhető legyen a kulcsok életciklusa. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.53",
          "control_title": "Kriptográfiai védelem",
          "explanation": "A kriptográfia számos biztonsági megoldás támogatására alkalmazható, beleértve a minősített és az ellenőrzött, nem minősített információk védelmét, a digitális aláírások biztosítását és végrehajtását, valamint az információk elkülönítésének érvényesítését, amikor a jogosult személyek rendelkeznek a szükséges engedélyekkel, de nincsenek meg a szükséges formális hozzáférési jóváhagyások. A kriptográfia a véletlenszám- és hash-generálás támogatására is használható. Az általánosan alkalmazandó kriptográfiai szabványok közé tartozik az NBSZ által jóváhagyott kriptográfia. Például azok a szervezetek, amelyeknek minősített információkat kell védeniük, előírhatják az NBSZ által jóváhagyott kriptográfia használatát. Azok a szervezetek, amelyeknek digitális aláírásokat kell biztosítaniuk és végrehajtaniuk, szabványos hitelesített kriptográfiát használhatnak. A kriptográfiát a vonatkozó törvényekkel, végrehajtási utasításokkal, irányelvekkel, szabályzatokkal, szabályokkal, szabványokkal és iránymutatásokkal összhangban hajtják végre.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Az érintett szervezetnek először meg kell határoznia a kriptográfia felhasználási területeit az EIR-en belül. Ez magában foglalhatja a titkosított információk és az ellenőrzött nem titkosított információk védelmét, a digitális aláírások biztosítását és megvalósítását, valamint az információ szeparációjának érvényesítését, amikor a jogosult személyek rendelkeznek a szükséges engedélyekkel, de nincsenek meg a szükséges formális hozzáférési jóváhagyások.\n2. A szervezetnek meg kell valósítania a kriptográfiai megoldásokat az egyes kriptográfiai felhasználási területeken. Ez magában foglalhatja az NBSZ által jóváhagyott kriptográfiát.\n3. A szervezetnek a kriptográfiát az alkalmazható törvények, rendeletek, irányelvek, szabályozások, szabályok, szabványok és útmutatók szerint kell megvalósítania.\n4. A szervezetnek dokumentálnia kell a kriptográfiai megoldások implementációját és használatát, hogy biztosítsa a folyamatok átláthatóságát és a kriptográfiai követelményeknek való megfelelőséget.",
          "iso_27001_ref": "A.8.24; A.8.26",
          "nist_sp_800_53_rev5_ref": "SC-13",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.53"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.53 – Kriptográfiai védelem végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-108",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.53 – Kriptográfiai védelem: 1) Az érintett szervezetnek először meg kell határoznia a kriptográfia felhasználási területeit az EIR-en belül. 2) A szervezetnek meg kell valósítania a kriptográfiai megoldásokat az egyes kriptográfiai felhasználási területeken. 3) A szervezetnek dokumentálnia kell a kriptográfiai megoldások implementációját és használatát, hogy biztosítsa a folyamatok átláthatóságát és a kriptográfiai követelményeknek való megfelelőséget. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.54",
          "control_title": "Együttműködésen alapuló informatikai eszközök",
          "explanation": "Az együttműködésen alapuló számítástechnikai eszközök közé tartoznak például a hálózatba kapcsolt kamerák és mikrofonok. A használat kifejezett jelzése magában foglalja például a felhasználók felé küldött jelzéseket az együttműködésen alapuló számítástechnikai eszközök bekapcsolásakor és használatakor.\n.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azokat az eszközöket és alkalmazásokat, amelyek az együttműködésen alapuló számítástechnikai eszközök kategóriájába tartoznak. Ilyenek lehetnek például a távoli találkozók eszközei és alkalmazásai, kamerák és mikrofonok.\n2. A szervezetnek be kell állítania az EIR-t úgy, hogy tiltsa ezeknek az eszközöknek és alkalmazásoknak a távoli aktiválását, kivéve azokat az eseteket, amelyeket a szervezet kifejezetten meghatározott.\n3. A szervezetnek biztosítania kell, hogy az EIR egyértelmű visszajelzést adjon a felhasználóknak, amikor ezek az eszközök és alkalmazások aktiválódnak.\n4. A szervezetnek naplóznia kell az eszközök és alkalmazások aktiválását, hogy nyomon követhető legyen, mikor és milyen körülmények között történtek a távoli aktiválások.",
          "iso_27001_ref": "A.5.14",
          "nist_sp_800_53_rev5_ref": "SC-15",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.54"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.54 – Együttműködésen alapuló informatikai eszközök végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-109",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.54 – Együttműködésen alapuló informatikai eszközök: 1) A szervezetnek meg kell határoznia azokat az eszközöket és alkalmazásokat, amelyek az együttműködésen alapuló számítástechnikai eszközök kategóriájába tartoznak. 2) A szervezetnek be kell állítania az EIR-t úgy, hogy tiltsa ezeknek az eszközöknek és alkalmazásoknak a távoli aktiválását, kivéve azokat az eseteket, amelyeket a szervezet kifejezetten meghatározott. 3) A szervezetnek naplóznia kell az eszközök és alkalmazások aktiválását, hogy nyomon követhető legyen, mikor és milyen körülmények között történtek a távoli aktiválások. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.69",
          "control_title": "Biztonságos név/cím feloldási szolgáltatás (hiteles forrás)",
          "explanation": "Ez az intézkedés lehetővé teszi, hogy a külső kliensek, beleértve például a távoli internetes klienseket, eredethitelesítéssel és integritás-ellenőrzéssel kapcsolatos biztos információt szerezzenek a hoszt/szolgáltatás név hálózati címre való feloldásával kapcsolatban. A név- és címfeloldási szolgáltatásokat nyújtó információs rendszerek közé tartoznak például a DNS-kiszolgálók. A további lehetőségek közé tartozik például a DNS biztonsági elektronikus aláírások (DNSSEC) és a kriptográfiai kulcsok. A DNS erőforrásrekord (resource record) példa a hiteles adatokra. A gyermektartomány (child zones) biztonsági állapotának jelzésére szolgáló eszközök közé tartozik például a delegáció-aláíró erőforrásrekordok (DS) használata a DNS-ben. Azon EIR-ek számára, amelyek nem DNS-t használnak a hoszt/szolgáltatás nevek hálózati címmel való összerendelésére, más eszközöket használnak a válaszadatok hitelességének és integritásának ellenőrzésére.\n.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Az EIR-nek biztosítania kell a név- és címfeloldási kérésekhez hiteles névfeloldási adatokat, valamint az információ eredetére és a tartalom sértetlenségére vonatkozó kiegészítő adatokat. Ez lehetővé teszi a külső kliensek számára, beleértve a távoli internetes klienseket is, hogy eredet hitelesítéssel és integritás ellenőrzéssel kapcsolatos biztos információt szerezzenek a szolgáltatáson keresztül megszerzett név és hálózati cím feloldással kapcsolatban.\n2. Az EIR-nek, amennyiben egy elosztott, hierarchikus névtér részeként működik, vissza kell jeleznie a gyermektartományok biztonsági állapotával kapcsolatosan. Ezt a delegáció aláíró erőforrás rekordok használatával teheti meg a DNS-ben.\n3. Az EIR-nek lehetővé kell tennie a szülő- és gyermektartományok közötti bizalmi lánc ellenőrzését, amennyiben a gyermektartományok támogatják a biztonságos névfeloldási szolgáltatásokat.\n4. Az EIR-nek, amelyek olyan technológiákat használnak, amelyek nem a DNS-t használják a hoszt és szolgáltatás nevek és hálózati címek közötti leképezéshez, más eszközöket kell biztosítania a válaszadatok hitelességének és integritásának biztosítására.\n5. Az EIR-nek további eszközöket kell biztosítania, mint például a DNS Biztonsági Kiterjesztések digitális aláírások és kriptográfiai kulcsok.\n6. Az EIR-nek hiteles adatokat kell biztosítania, beleértve a DNS erőforrás rekordokat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SC-20",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.69"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.69 – Biztonságos név/cím feloldási szolgáltatás (hiteles forrás) végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-110",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.69 – Biztonságos név/cím feloldási szolgáltatás (hiteles forrás): 1) Az EIR-nek biztosítania kell a név- és címfeloldási kérésekhez hiteles névfeloldási adatokat, valamint az információ eredetére és a tartalom sértetlenségére vonatkozó kiegészítő adatokat. 2) Az EIR-nek, amennyiben egy elosztott, hierarchikus névtér részeként működik, vissza kell jeleznie a gyermektartományok biztonsági állapotával kapcsolatosan. 3) Az EIR-nek hiteles adatokat kell biztosítania, beleértve a DNS erőforrás rekordokat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.71",
          "control_title": "Biztonságos név/cím feloldó szolgáltatás (rekurzív vagy gyorsítótárat használó feloldás)",
          "explanation": "A névfeloldási szolgáltatások minden kliense önállóan végzi el ezt az ellenőrzést, vagy hitelesített csatornákkal rendelkezik a megbízható hitelesítési szolgáltatók irányába. A helyi kliensek számára név- és címfeloldási szolgáltatásokat nyújtó információs rendszerek közé tartozik például a rekurzív feloldású vagy gyorsítótárazó domainnév szerverek. A DNS-kliens feloldók elvégzik a DNSSEC-aláírások validálását, vagy a kliensek hitelesített csatornákat használnak az ilyen validálásokat végrehajtó rekurzív feloldókhoz kapcsolódva. A DNS-től eltérő technológiákat használó információs rendszerek a hoszt/szolgáltatásnevek és a hálózati címek közötti összerendeléshez más eszközöket biztosítanak a kliensek számára a válaszadatok hitelességének és sértetlenségének ellenőrzésére.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy minden név- és címfeloldó szolgáltatásokat igénybe vevő kliens önállóan végezze el ezt a hitelesítést, vagy hitelesített csatornákon keresztül kapcsolódjon a megbízható hitelesítési szolgáltatókhoz.\n2. A szervezetnek meg kell határoznia, hogy a DNS kliens feloldóknak vagy el kell végezniük a DNSSEC aláírások hitelesítését, vagy a klienseknek hitelesített csatornákon keresztül kell csatlakozniuk a rekurzív feloldókhoz, amelyek ilyen hitelesítéseket végeznek.\n3. Az EIR-nek, amelyek más technológiákat használnak a DNS-nél a host és szolgáltatásnevek és hálózati címek közötti leképezéshez, biztosítania kell valamilyen más módot a kliensek számára, hogy ellenőrizhessék a válaszadatok hitelességét és sértetlenségét.\n4. A szervezetnek naplóznia kell a hitelesítési folyamatokat és az adatok sértetlenségét, hogy nyomon követhesse és ellenőrizhesse azokat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SC-21",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.71"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.71 – Biztonságos név/cím feloldó szolgáltatás (rekurzív vagy gyorsítótárat használó feloldás) végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-111",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.71 – Biztonságos név/cím feloldó szolgáltatás (rekurzív vagy gyorsítótárat használó feloldás): 1) A szervezetnek biztosítania kell, hogy minden név- és címfeloldó szolgáltatásokat igénybe vevő kliens önállóan végezze el ezt a hitelesítést, vagy hitelesített csatornákon keresztül kapcsolódjon a megbízható hitelesítési szolgáltatókhoz. 2) A szervezetnek meg kell határoznia, hogy a DNS kliens feloldóknak vagy el kell végezniük a DNSSEC aláírások hitelesítését, vagy a klienseknek hitelesített csatornákon keresztül kell csatlakozniuk a rekurzív feloldókhoz, amelyek ilyen hitelesítéseket végeznek. 3) A szervezetnek naplóznia kell a hitelesítési folyamatokat és az adatok sértetlenségét, hogy nyomon követhesse és ellenőrizhesse azokat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.72",
          "control_title": "Architektúra és tartalékok név/cím feloldási szolgáltatás esetén",
          "explanation": "A név- és címfeloldási szolgáltatásokat nyújtó információs rendszerek közé tartoznak például a DNS-kiszolgálók. A kritikus hibapontok (ún. single points of failure) kiküszöbölése és a redundancia fokozása érdekében a szervezetek legalább két hiteles tartománynév-kiszolgálót alkalmaznak, az egyiket elsődleges kiszolgálóként, a másik pedig másodlagos kiszolgálóként konfigurálva. Ezen túlmenően a szervezetek rendszerint két földrajzilag elkülönített alhálózaton (azaz nem ugyanabban a fizikai létesítményben) telepítik a szervereket. A szerepkör-szétválasztáshoz a belső szerepkörrel rendelkező DNS-kiszolgálók csak a szervezeten belüli (azaz belső kliensektől származó) név- és címfeloldási kérelmeket dolgoznak fel. A külső szerepekkel rendelkező DNS-kiszolgálók csak a szervezeteken kívüli kliensek név- és címfeloldási kéréseit kezelik (azaz külső hálózatokon, beleértve az internetet is). A szervezetek meghatározzák a klienseket, akik bizonyos szerepkörökben elérhetik a hiteles DNS-kiszolgálókat (pl. címtartományok, explicit listák).",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy az EIR-ek, amelyek név- és címfeloldási szolgáltatást biztosítanak, hibatűrő képességgel rendelkeznek. Ez azt jelenti, hogy legalább két hiteles DNS kiszolgálót kell alkalmazni - az egyiket elsődleges szerverként, a másikat pedig másodlagos szerverként konfigurálva. A hibatűrés növelése érdekében a szervezetnek a kiszolgálókat két földrajzilag elválasztott alhálózatban kell telepítenie.\n2. A szervezetnek biztosítania kell, hogy a belső és külső szerepkörök szétválasztása érdekében a kiszolgálók, amelyek belső szerepkörrel rendelkeznek, csak a szervezeten belüli név- és címfeloldási kéréseket dolgozzák fel, míg azon kiszolgálók, amelyek külső szerepkörrel rendelkeznek, csak a szervezeten kívüli kliensektől érkező név- és címfeloldási információs kéréseket dolgozzák fel (pl. internet irányából).\n4. A szervezetnek meg kell határoznia azokat a klienseket, amelyek bizonyos szerepekkörökben elérhetnek a hiteles DNS szerverekhez (például címtartományok és explicit listák alapján).",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SC-22",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.72"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.72 – Architektúra és tartalékok név/cím feloldási szolgáltatás esetén végrehajtási csomag: jóváhagyott EIR-scope, 3 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 3 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-112",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.72 – Architektúra és tartalékok név/cím feloldási szolgáltatás esetén: 1) A szervezetnek biztosítania kell, hogy az EIR-ek, amelyek név- és címfeloldási szolgáltatást biztosítanak, hibatűrő képességgel rendelkeznek. 2) A szervezetnek biztosítania kell, hogy a belső és külső szerepkörök szétválasztása érdekében a kiszolgálók, amelyek belső szerepkörrel rendelkeznek, csak a szervezeten belüli név- és címfeloldási kéréseket dolgozzák fel, míg azon kiszolgálók, amelyek külső szerepkörrel rendelkeznek, csak a szervezeten kívüli kliensektől érkező… 3) A szervezetnek meg kell határoznia azokat a klienseket, amelyek bizonyos szerepekkörökben elérhetnek a hiteles DNS szerverekhez (például címtartományok és explicit listák alapján). Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "17.108",
          "control_title": "A folyamatok elkülönítése",
          "explanation": "Az EIR-eknek minden végrehajtott folyamathoz külön végrehajtási tartományt javasolt fenntartaniuk, azzal, hogy minden egyes folyamatot külön címtartományban hajtanak végre. Mindegyik EIR folyamatnak egy külön címtartománya van, így a folyamatok közötti kommunikáció a biztonsági funkciók által ellenőrzött módon történhet, és az egyik folyamat nem tudja módosítani egy másik folyamat végrehajtó kódját. Az elkülönített végrehajtási tartományok fenntartása a folyamatok végrehajtásához például külön címterek kialakításával érhető el. A folyamat elszigetelési technológiák, beleértve a sandboxingot vagy a virtualizációt, logikailag elválasztják a szoftvert és a firmware-t más szoftverektől, firmware-től és adatoktól. A folyamat elszigetelés segít korlátozni a potenciálisan nem megbízható szoftverek hozzáférését más rendszererőforrásokhoz.Ez a lehetőség a legtöbb kereskedelmi operációs rendszerben elérhető, amely támogatja a többállapotú processzortechnológiákat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy az EIR-ek megfelelő folyamatai számára elkülönített végrehajtási tartományt tartson fenn. Ez azt jelenti, hogy minden ilyen folyamat esetén külön címtartományt kell alkalmazni.\n2. A szervezetnek gondoskodnia kell arról, hogy az EIR-ek folyamatai közötti kommunikáció a biztonsági funkciók által szabályozott módon történjen, és egy folyamat ne tudja módosítani egy másik folyamat végrehajtó kódját.\n3. A szervezetnek implementálnia kell az elkülönített címtartományokat, hogy biztosítsa a rendszerfolyamatok elkülönített végrehajtási tartományát.\n4. A szervezetnek alkalmaznia kell folyamat izolációs technológiákat, mint például a sandboxingot vagy a virtualizációt, hogy logikailag elválassza a szoftvereket és firmwareeket a többi szoftvertől, firmware-től és adattól.\n5. A szervezetnek biztosítania kell, hogy az EIR képes legyen fenntartani az elkülönített végrehajtási tartományokat. Ez a képesség rendelkezésre áll a kereskedelemben kapható operációs rendszerekben is.\n6. A szervezetnek dokumentálnia kell az általa meghatározott valamennyi végrehajtási tartományt és az azokhoz tartozó végrehajtó folyamatot, melyet rendszeres időnként felül kell vizsgálnia.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SC-39",
          "requirement_family": "17",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "17.108"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "17.108 – A folyamatok elkülönítése végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott műszaki baseline, read-only konfigurációexport, kulcs- vagy névfeloldási nyilvántartás, teszt és kivételnapló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-113",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "17.108 – A folyamatok elkülönítése: 1) A szervezetnek biztosítania kell, hogy az EIR-ek megfelelő folyamatai számára elkülönített végrehajtási tartományt tartson fenn. 2) A szervezetnek gondoskodnia kell arról, hogy az EIR-ek folyamatai közötti kommunikáció a biztonsági funkciók által szabályozott módon történjen, és egy folyamat ne tudja módosítani egy másik folyamat végrehajtó kódját. 3) A szervezetnek dokumentálnia kell az általa meghatározott valamennyi végrehajtási tartományt és az azokhoz tartozó végrehajtó folyamatot, melyet rendszeres időnként felül kell vizsgálnia. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "18.1",
          "control_title": "Szabályzat és eljárásrendek",
          "explanation": "A rendszer- és információsértetlenségi szabályzat és eljárások a Rendszer- és információsértetlenség követelménycsoportba tartozó védelmi intézkedésekkel foglalkoznak, amelyek az EIR-ben, illetve a szervezetekben bevezetésre kerülnek. A kockázatkezelési stratégia fontos tényező az ilyen szabályok és eljárások létrehozásában. A szabályok és eljárások hozzájárulnak a biztonság garantálásához. Ezért fontos, hogy a szervezet információbiztonsági szabályozási környezete és rendszer- és információsértetlenségi szabályzat és eljárások összhangban legyenek egymással. A szervezeti szintű biztonsági szabályzatok és eljárásrendek általában előnyösebbek, és szükségtelenné tehetik a működési célok vagy rendszerek szintjén kialakítandó szabályzatokat és eljárásokat. A szabályokat be lehet illeszteni az általános biztonsági szabályzatba, vagy több szabályzatban is megjelenhetnek, amelyek tükrözik az érintett szervezetek összetett természetét. Eljárásokat létre lehet hozni az információbiztonsági irányítási rendszer, a működési és üzleti célok, és az EIR-ek támogatására, amennyiben azok szükségesek. Az eljárások leírják, hogy hogyan valósulnak meg a szabályok vagy a védelmi intézkedések, és hogyan vonatkoznak az eljárás tárgyát képező egyénre vagy szerepkörre. Az eljárásokat dokumentálhatják a rendszerbiztonsági tervekben, vagy egy vagy több külön dokumentumban. A rendszer- és információsértetlenségi szabályzat és eljárások frissítését kiváltó események lehetnek értékelési vagy audit megállapítások, biztonsági események, vagy változások az alkalmazandó jogszabályokban, irányelvekben, szabályozásokban, szabványokban és ajánlásokban. Az elvárt védelmi intézkedések egyszerű újra közlése nem minősülhet szervezeti szabályzatnak vagy eljárásnak.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Az érintett szervezet dolgozzon ki, dokumentáljon, adja ki és ismertesse meg a szervezet által meghatározott személyekkel szerepkörük szerint az rendszer- és kommunikációvédelmi szabályzatot, amely tartalmazza a szervezeti-, folyamat- és EIR-szintű követelményeket. Ez a szabályzat meghatározza a célkitűzéseket, a hatókört, a szerepköröket, a felelősségeket, a vezetői elkötelezettséget, az érintett szervezeten belüli együttműködés kereteit és a megfelelőségi kritériumokat.\n2. A szabályzatnak összhangban kell lennie az érintett szervezetre vonatkozó, hatályos jogszabályokkal, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal.\n3. Az érintett szervezet dolgozzon ki egy rendszer- és kommunikációvédelmi eljárásrendet, amely elősegíti a rendszer- és kommunikációvédelmi szabályok és az ahhoz kapcsolódó ellenőrzések megvalósítását.\n4. Az érintett szervezet jelöljön ki egy meghatározott személyt, aki felelős a rendszer- és kommunikációvédelmi szabályzat és eljárások kidolgozásának, dokumentálásának, kiadásának és megismertetésének irányításáért.",
          "iso_27001_ref": "5.2; 5.3; 7.5.1; 7.5.2; 7.5.3; A.5.1; A.5.2; A.5.4; A.5.31; A.5.36; A.5.37",
          "nist_sp_800_53_rev5_ref": "SI-1",
          "requirement_family": "18",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "18.1"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "18.1 – Szabályzat és eljárásrendek végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott védelmi és megőrzési szabály, read-only állapotexport, riasztási vagy észlelési teszt és review-napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-114",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "18.1 – Szabályzat és eljárásrendek: 1) Az érintett szervezet dolgozzon ki, dokumentáljon, adja ki és ismertesse meg a szervezet által meghatározott személyekkel szerepkörük szerint az rendszer- és kommunikációvédelmi szabályzatot, amely tartalmazza a szervezeti-, folyamat- és EIR-szintű követelményeket. 2) A szabályzatnak összhangban kell lennie az érintett szervezetre vonatkozó, hatályos jogszabályokkal, irányelvekkel, szabályozásokkal, szabványokkal és ajánlásokkal. 3) Az érintett szervezet jelöljön ki egy meghatározott személyt, aki felelős a rendszer- és kommunikációvédelmi szabályzat és eljárások kidolgozásának, dokumentálásának, kiadásának és megismertetésének irányításáért. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "18.8",
          "control_title": "Kártékony kódok elleni védelem",
          "explanation": "Az információs rendszerek be- és kilépési pontjai lehetnek például a tűzfalak, az elektronikus levelezőkiszolgálók, a webkiszolgálók, a proxy szerverek, a távoli hozzáférést biztosító kiszolgálók, a munkaállomások, notebook számítógépek és mobileszközök. Kártékony kód lehet például vírus, féreg, trójai vírus, vagy kémprogramok. Kártékony kód több formátumban kódolható, tárolható tömörített vagy rejtett fájlokban, vagy szteganográfiával elrejtett fájlokban. Kártékony kód különböző módokon is terjedhet, például webes hozzáférésen keresztül, elektronikus levélben, elektronikus levél csatolmányaként, hordozható tárolókon. A kártékony kód bejuttatása a rendszerbe az információs rendszer sérülékenységén keresztül is történhet. A kártékony kód elleni védelmi mechanizmusok lehetnek például az antivírus leírók és a heurisztikán alapuló rendszerek. Számos technológia és eljárás létezik a kártékony kódok hatásának csökkentésére vagy megszüntetésére. Átható konfigurációkezelés és átfogó szoftver integritási intézkedések hatékonyak lehetnek a jogosulatlan kód futásának megakadályozásában. A piacon elérhető szoftvereken felül kártékony kódot az egyedi fejlesztéssel készített szoftverek is tartalmazhatnak. Ilyenekre példa a logikai bombák, backdoorok és egyéb kibertámadási megoldások, amelyek a szervezet üzleti céljaira és funkcióira lehetnek hatással. A hagyományos kártékony kód elleni védelmi mechanizmusok nem mindig érzékelik ezeket a támadásokat. Ezekben a helyzetekben a szervezet más biztosítékra kell, hogy támaszkodjon, például biztonságos fejlesztési (kódolási) eljárások, konfiguráció kezelés, megbízható beszerzési eljárások, monitorozási gyakorlat segíthet abban, hogy a szoftver csak a kívánt funkciókat hajtsa végre. A szervezet dönthet úgy, hogy a kártékony kód észlelésére adott válasz eltérő tevékenységeket foglalhat magában. Például, a szervezet meghatározhat teendőket a rendszeresen futtatott ellenőrzésekkel talált kód esetére, a kártékony letöltésekkel kapcsolatban, vagy amikor futtatható állományok viselkedésében ismernek fel kártékony működést. Kártékony kód elleni védelmi mechanizmus használata esetén az érintett szervezetnek olyan megoldást javasolt választania, mely egyaránt képes blokkolni, valamint független környezetben vizsgálni a kártékony kódot, képes azt karanténba helyezni - a terjedését meggátolva. Kiemelten fontos a kártékony kód elleni védelemnél a frissítések (pl. vírusdefiníciós adatbázis) gyakorisága, valamint a rendszer általi átvizsgálások ütemezhetőségi és mélységi beállítási lehetőségei.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Kártékony kódok elleni védelmi mechanizmusokat szükséges alkalmazni a rendszerek belépési és kilépési pontjain. Ezek a pontok magukban foglalhatják a tűzfalakat, távoli hozzáférési szervereket, munkaállomásokat, elektronikus levelező szervereket, web szervereket, proxy szervereket, notebook számítógépeket és mobil eszközöket.\n2. Automatikusan frissíteni szükséges a védelmi mechanizmusokat minden olyan esetben, amikor új verziók jelennek meg, összhangban a szervezet konfigurációkezelési szabályaival.\n3. Szükséges a megfelelő konfiguráció alkalmazása a kártékony kódok elleni védelmi mechanizmusok esetén, hogy meghatározott időközönként átvizsgálják a rendszereket, és valós időben ellenőrizzék a külső forrásokból származó fájlokat a végpontokon, a hálózati belépési vagy kilépési pontokon a biztonsági szabályzatnak megfelelően, amint a fájlokat letöltik, megnyitják vagy futtatják.\n4. Kártékony kód észlelésekor szükséges blokkolni vagy karanténba helyezni a kártékony kódokat, vagy a szervezet által meghatározott egyéb intézkedéseket végrehajtani; továbbá riasztást küldeni a szervezet által meghatározott személyeknek vagy szerepköröknek.\n5. Ellenőrizni szükséges a téves riasztásokat a kártékony kód észlelése és megsemmisítése során, valamint figyelembe kell venni ezek lehetséges kihatását a rendszerek rendelkezésre állására.\n6. Biztosítani szükséges további védelmi intézkedéseket, mint például biztonságos kódolási gyakorlatok, konfigurációkezelés és -ellenőrzés, megbízható beszerzési folyamatok és naplózás, hogy biztosítsa, hogy az EIR nem hajt végre más funkciókat, mint amelyeket szándékozott.",
          "iso_27001_ref": "A.8.7",
          "nist_sp_800_53_rev5_ref": "SI-3",
          "requirement_family": "18",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "18.8"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "18.8 – Kártékony kódok elleni védelem végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott védelmi és megőrzési szabály, read-only állapotexport, riasztási vagy észlelési teszt és review-napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-115",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "18.8 – Kártékony kódok elleni védelem: 1) Kártékony kódok elleni védelmi mechanizmusokat szükséges alkalmazni a rendszerek belépési és kilépési pontjain. 2) Automatikusan frissíteni szükséges a védelmi mechanizmusokat minden olyan esetben, amikor új verziók jelennek meg, összhangban a szervezet konfigurációkezelési szabályaival. 3) Biztosítani szükséges további védelmi intézkedéseket, mint például biztonságos kódolási gyakorlatok, konfigurációkezelés és -ellenőrzés, megbízható beszerzési folyamatok és naplózás, hogy biztosítsa, hogy az EIR nem hajt végre más funkciókat, mint amelyeket szándékozott. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "18.13",
          "control_title": "Az EIR monitorozása",
          "explanation": "A rendszerek monitorozása magában foglalja a külső és belső monitorozást. A külső monitorozás a rendszer külső interfészeinél bekövetkező események megfigyelését jelenti. A belső monitorozás a rendszeren belül bekövetkező események megfigyelését jelenti. Az érintett szervezetek monitorozzák a rendszereket a napló tevékenységek valós idejű megfigyelésével vagy más rendszeraspektusok, például hozzáférési minták, hozzáférési jellemzők és más műveletek megfigyelésével. A monitorozási lehetővé teszi a megfelelő döntések meghozatalát, az irányítást és az események észlelését. A rendszerek monitorozását számos eszköz és technika segítségével érik el, beleértve az behatolás észlelő és megelőző rendszereket, a kártékony kód elleni védelmi szoftvereket, a szkennelő eszközöket, a napló rekord monitorozó szoftvereket és a hálózat monitorozó szoftvereket.\nA biztonsági architektúrától függően a monitorozó eszközök elosztása és konfigurációja befolyásolhatja a kulcsfontosságú belső és külső határokon, valamint a hálózat más helyein a hálózati áteresztőkészség késleltetésének bevezetése miatt az áteresztőképességet. Ha szükséges az áteresztőképesség kezelése, az ilyen eszközöket olyan stratégiával helyezik el és telepítik, hogy a szervezet által meghatározott szervezeti szintű biztonsági architektúra részeként jelenjenek meg. A monitorozó eszközök stratégiailag megfontolt helyei közé tartoznak a kiválasztott hálózati határok és a kulcsfontosságú szerverek és szerverfarmok, amelyek kritikus alkalmazásokat támogatnak. Az összegyűjtött információ a szervezet monitorozási céljainak és a rendszerek képességeinek függvényében kerül összeállításra. A figyelembe vett tranzakciók különleges típusai közé tartozik a HTTP proxy-kat megkerülő HTTP forgalom. Az EIR monitorozása a szervezet folyamatos monitorozási és biztonsági eseményválasz programjainak szerves része, és az EIR monitorozásból származó kimenet bemenetként szolgál ezekhez a programokhoz.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. Szükséges az EIR monitorozása, hogy észlelésre kerüljenek a támadások és a potenciális támadásokra utaló jelek, összhangban a meghatározott szervezeti célokkal. Ez magában foglalja a külső és belső monitorozást is.\n2. Azonosítani szükséges a rendszerek jogosulatlan használatát a meghatározott technikák és módszerek alkalmazásával.\n3. Aktiválni szükséges az EIR belső felügyeleti képességeit vagy telepíteni a megfelelő felügyeleti eszközöket az egész EIR-re kiterjedően a szervezet által meghatározott információk gyűjtése érdekében; illetve az EIR-en belül ad-hoc módon meghatározott helyeken a szervezet által meghatározott információk gyűjtése érdekében.\n4. Elemezni szükséges az észlelt eseményeket és rendellenességeket.\n5. Módosítani szükséges az EIR felügyeleti tevékenység szintjét, amennyiben változik a szervezeti műveletekkel, az eszközökkel, az egyénekkel, a külső szervezetekkel kapcsolatos kockázati szintje.\n6. Jogi állásfoglalást szükséges kérni az EIR felügyeleti tevékenységeiről.\n7. Biztosítani szükséges a szervezet által meghatározott EIR felügyeleti információkat a meghatározott személyeknek vagy szerepköröknek a szervezet által meghatározott gyakorisággal.\n8. A naplózás fontos része az EIR felügyeletének, melynek során figyelemmel kell kísérni a rendszerben történő eseményeket és tevékenységeket.",
          "iso_27001_ref": "A.8.16",
          "nist_sp_800_53_rev5_ref": "SI-4",
          "requirement_family": "18",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "18.13"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "18.13 – Az EIR monitorozása végrehajtási csomag: jóváhagyott EIR-scope, 8 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott védelmi és megőrzési szabály, read-only állapotexport, riasztási vagy észlelési teszt és review-napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 8 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-116",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "18.13 – Az EIR monitorozása: 1) Szükséges az EIR monitorozása, hogy észlelésre kerüljenek a támadások és a potenciális támadásokra utaló jelek, összhangban a meghatározott szervezeti célokkal. 2) Azonosítani szükséges a rendszerek jogosulatlan használatát a meghatározott technikák és módszerek alkalmazásával. 3) A naplózás fontos része az EIR felügyeletének, melynek során figyelemmel kell kísérni a rendszerben történő eseményeket és tevékenységeket. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "18.37",
          "control_title": "Biztonsági riasztások és tájékoztatások",
          "explanation": "A Kormányzati Eseménykezelő Központ biztonsági riasztásokat tesz közzé és tanácsokat ad a helyzetismeret elősegítése érdekében. A biztonsági irányelveket a BM vagy más kijelölt szervezetek adják ki, amelyeknek felelőssége és hatásköre az ilyen irányelvek kiadása. Az irányelvek betartása elengedhetetlen, mivel sok esetben kritikus jelentőségűek, és ha nem hajtják végre időben, az az érintett szervezet működésére és eszközeire, az egyénekre, más szervezetekre és az egész nemzetre nézve is káros hatással lehet. A külső szervezetek közé tartoznak a beszállítói lánc partnerei, külső missziós vagy üzleti partnerek, külső szolgáltatók és más, egyenrangú vagy támogató szervezetek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek biztosítania kell, hogy folyamatosan fogadja a meghatározott külső szervezetektől a biztonsági figyelmeztetéseket, tanácsokat és iránymutatásokat. Ez magában foglalhatja a kapcsolattartást hivatalos szervezetekkel, melyek ilyen jellegű információkat szolgáltatnak.\n2. A szervezetnek alkalmaznia kell a biztonsági iránymutatásokat az azokban foglaltak szerint. Ez magában foglalhatja a biztonsági irányelvek és eljárások frissítését, valamint a biztonsági intézkedések végrehajtását és ellenőrzését az EIR-en.",
          "iso_27001_ref": "A.5.6; A.8.8",
          "nist_sp_800_53_rev5_ref": "SI-5",
          "requirement_family": "18",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "18.37"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "18.37 – Biztonsági riasztások és tájékoztatások végrehajtási csomag: jóváhagyott EIR-scope, 2 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott védelmi és megőrzési szabály, read-only állapotexport, riasztási vagy észlelési teszt és review-napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 2 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-117",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "18.37 – Biztonsági riasztások és tájékoztatások: 1) A szervezetnek biztosítania kell, hogy folyamatosan fogadja a meghatározott külső szervezetektől a biztonsági figyelmeztetéseket, tanácsokat és iránymutatásokat. 2) A szervezetnek alkalmaznia kell a biztonsági iránymutatásokat az azokban foglaltak szerint. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "18.67",
          "control_title": "Információ kezelése és megőrzése",
          "explanation": "Az információkezelési és megőrzési követelmények az információ teljes életciklusát lefedik, néhány esetben a rendszer megsemmisítésén túl is. A megőrzendő információk közé tartozhatnak az irányelvek, eljárások, tervek, jelentések, a követelménymegvalósításból származó adatkimenetek és egyéb adminisztratív információk. Ha a szervezetnek van iratkezelési részlege, érdemes lehet együttműködni az iratkezelési személyzettel.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": ". A szervezetnek meg kell határoznia és dokumentálnia a rendszerben lévő és onnan kikerülő információk kezelésének és megőrzésének szabályzatát, eljárásait és terveit a hatályos jogszabályok, irányelvek, szabályozások, szabványok és ajánlások, valamint a működési követelmények szerint.\n2. A szervezetnek alkalmaznia kell a meghatározott szabályzatokat és eljárásokat a rendszerből kikerülő információk kezelésének és megőrzésének során.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SI-12",
          "requirement_family": "18",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "18.67"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "18.67 – Információ kezelése és megőrzése végrehajtási csomag: jóváhagyott EIR-scope, 2 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott védelmi és megőrzési szabály, read-only állapotexport, riasztási vagy észlelési teszt és review-napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 2 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "id": "A-118",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "18.67 – Információ kezelése és megőrzése: 1) . 2) A szervezetnek alkalmaznia kell a meghatározott szabályzatokat és eljárásokat a rendszerből kikerülő információk kezelésének és megőrzésének során. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.2",
          "control_title": "Ellátási láncra vonatkozó kockázatmenedzsment szabályzat",
          "explanation": "Az érintett szervezet függősége a külső szolgáltatóktól származó termékektől, rendszerektől és szolgáltatásoktól, valamint a szolgáltatókkal való kapcsolatok jellege, növekvő kockázatot jelent. A tevékenységek, amelyek növelhetik a biztonsági vagy adatvédelmi kockázatokat, magukban foglalják a jogosulatlan gyártást, a hamisítványokra való cserét, vagy azok használatát, a módosításokat, a lopást, a rosszindulatú szoftverek és hardverek beillesztését, valamint a nem megfelelő gyártási és fejlesztési gyakorlatot az ellátási láncban. Az ellátási lánc kockázatai endémiásak vagy rendszerszintűek lehetnek egy rendszerelemben, egy EIR-en, egy szervezeten, egy ágazaton vagy a nemzeten belül. Az ellátási lánc kockázatkezelése összetett, többoldalú feladat, amely koordinált erőfeszítést igényel a szervezeten belül a bizalmi kapcsolatok kiépítéséhez és a belső és külső érdekeltekkel való kommunikációhoz. Az ellátási lánc kockázatkezelési tevékenységek (SCRM) magukban foglalják a kockázatok azonosítását és értékelését, a megfelelő kockázat válaszintézkedések meghatározását, a kockázatkezelési tervek kidolgozását a válaszintézkedések dokumentálására, és a teljesítmény ellenőrzését a tervekkel szemben. Az ellátási lánc kockázatkezelési (SCRM) terv (a rendszer szintjén) implementáció specifikus, biztosítja a szabályzatok végrehajtását, követelményeket, korlátozásokat és következményeket. Ez lehet önálló, vagy beépíthető a rendszer biztonsági és adatvédelmi terveibe. Az ellátási lánc kockázatkezelési terv kezeli a kockázatkezelési követelmények végrehajtását és nyomon követését, valamint a rendszerek fejlesztését/fenntartását a rendszerfejlesztési életcikluson (SDLC) keresztül az ügymeneti és üzleti funkciók támogatása érdekében.\nMivel az ellátási láncok jelentősen eltérhetnek a szervezeten belül és között, az ellátási lánc kockázatkezelési (SCRM) tervek az egyéni programokhoz, szervezeti és működési kontextusokhoz igazodnak. A testre szabott kockázatkezelési tervek azon meghatározás alapját képezik, hogy egy technológia, szolgáltatás, rendszerelem, vagy rendszer alkalmas-e a célra, és ennek megfelelően szükséges a követelmények testre szabása. A testre szabott kockázatkezelési tervek segítenek a szervezeteknek a legkritikusabb ügymeneti és üzleti funkciókra összpontosítani erőforrásaikat az ügymeneti és üzleti követelmények, valamint a kockázati környezet alapján.\nA kockázatkezelési tervek tartalmazzák a szervezet ellátási lánc kockázattűrésének értékeit, az elfogadható ellátási lánc kockázatcsökkentő stratégiákat vagy követelményeket, egy folyamatot az elfogadható kockázat kiértékelésére és nyomon követésére, a tervek alkalmazásáról, illetve az arról való tájékoztatás folyamatát, valamint egy összefoglalót a megtett intézkedések szükségességéről és az érintett személyekről és szerepkörökről.\nEzek mellett az ellátási lánc kockázatkezelési tervei a megbízható, biztonságos, aszemélyes adatokat védő és rugalmas rendszerelemek és -rendszerek fejlesztésére vonatkozó követelményekkel is foglalkoznak, beleértve az életciklus-alapú rendszerek biztonságtechnikai folyamatainak részeként megvalósított biztonsági tervezési elvek alkalmazását (lásd Rendszer- és szolgáltatásbeszerzés kontrollcsaládot).",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia azon rendszereket, rendszerelemeket vagy rendszerszolgáltatásokat, melyek ellátási láncával kapcsolatos kockázatokat kezelni kell.\n2. A szervezetnek meg kell határoznia egy szabályzatot a szükséges kockázatkezelési intézkedések elvégzésére a meghatározott rendszerek, rendszerelemek vagy rendszerszolgáltatások ellátási láncával kapcsolatosan.\n3. A szervezetnek meg kell határoznia a gyakoriságot, melyel a meghatározott kockázatkezelési szabályzatot felüvizsgálja.\n4. A szervezetnek alkalmaznia kell a meghatározott szabályzatot az érintett rendszerek, rendszerelemek vagy rendszerszolgáltatások ellátási láncának kockázatkezelésére.\n5. A szervezetnek biztosítania kell, hogy az ellátási lánc kockázatkezelési szabályzata tartalmazza a rendszerfejlesztési életciklus során fennálló kockázatok meghatározását és kezelését is.\n6. A szervezetnek felül kell vizsgálnia az ellátási lánc kockázatkezelési szabályzatot a meghatározott gyakorisággal.",
          "iso_27001_ref": "A.5.19; A.5.20; A.5.21; A.8.30",
          "nist_sp_800_53_rev5_ref": "SR-2",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.2"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.2 – Ellátási láncra vonatkozó kockázatmenedzsment szabályzat végrehajtási csomag: jóváhagyott EIR-scope, 6 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 6 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-119",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.2 – Ellátási láncra vonatkozó kockázatmenedzsment szabályzat: 1) A szervezetnek meg kell határoznia azon rendszereket, rendszerelemeket vagy rendszerszolgáltatásokat, melyek ellátási láncával kapcsolatos kockázatokat kezelni kell. 2) A szervezetnek meg kell határoznia egy szabályzatot a szükséges kockázatkezelési intézkedések elvégzésére a meghatározott rendszerek, rendszerelemek vagy rendszerszolgáltatások ellátási láncával kapcsolatosan. 3) A szervezetnek felül kell vizsgálnia az ellátási lánc kockázatkezelési szabályzatot a meghatározott gyakorisággal. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.7",
          "control_title": "Ellátási lánc ellenőrzések és folyamatok – Alvállalkozók",
          "explanation": "Az ellátási lánc kockázatának hatékony és átfogó kezelése érdekében fontos, hogy az érintett szervezetek biztosítsák az ellátási lánc kockázatkezelési szabályainak beépítését az ellátási lánc összes szintjén. Ez magában foglalja azt is, hogy az 1. szintű vállalkozók megvalósították-e azokat a folyamatokat, amelyek lehetővé teszik az ellátási lánc kockázatkezelési szabályainak és intézkedéseinek továbbítását az alacsonyabb szintű alvállalkozók felé. Erről bővebb információt az Ellátási láncra vonatkozó követelmények és folyamatok című biztonsági követelményél találhat.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek fel kell mérnie a kiberbiztonsági kockázatokat, amelyek az EIR-rel összefüggő szerződésekben szerepelnek.\n2. A szervezetnek biztosítania kell, hogy a fővállalkozók tisztában vannak az EIR-rel összefüggő szerződésekben szereplő információbiztonsági követelményekkel.\n3. A szervezetnek meg kell követelnie, hogy a fővállalkozók biztosítsák, hogy az alvállalkozók szerződései is tartalmazzák az EIR-rel összefüggő szerződésekben szereplő információbiztonsági követelményeket.\n4. A szerveztnek rendszeresen felül kell vizsgálnia a fővállalkozóktól elvárt  az EIR-rel összefüggő szerződésekben szereplő információbiztonsági követelmények relevanicáját és ha szükséges módosítania kell azokat.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SR-3(3)",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.7"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.7 – Ellátási lánc ellenőrzések és folyamatok – Alvállalkozók végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-120",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.7 – Ellátási lánc ellenőrzések és folyamatok – Alvállalkozók: 1) A szervezetnek fel kell mérnie a kiberbiztonsági kockázatokat, amelyek az EIR-rel összefüggő szerződésekben szerepelnek. 2) A szervezetnek biztosítania kell, hogy a fővállalkozók tisztában vannak az EIR-rel összefüggő szerződésekben szereplő információbiztonsági követelményekkel. 3) A szerveztnek rendszeresen felül kell vizsgálnia a fővállalkozóktól elvárt az EIR-rel összefüggő szerződésekben szereplő információbiztonsági követelmények relevanicáját és ha szükséges módosítania kell azokat. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.13",
          "control_title": "Beszerzési stratégiák, eszközök és módszerek",
          "explanation": "A beszerzési folyamat fontos eszköz lehet az ellátási lánc védelmében. Sok hasznos eszköz és technika áll rendelkezésre, beleértve az EIR és rendszerelemek végső felhasználásának elrejtését, vak vagy szűrt vásárlásokat, módosításoknak ellenálló csomagolás megkövetelését, vagy megbízható vagy ellenőrzött forgalmazás használatát. Az ellátási lánc kockázatértékeléséből származó eredmények szabhatják meg a leginkább alkalmazható stratégiákat, eszközöket és módszereket. Az eszközök és technikák védelmet nyújthatnak a jogosulatlan gyártás, lopás, manipuláció, hamisítványokra való csere, kártékony szoftverek vagy hátsó ajtók beállítása, valamint a rossz fejlesztési gyakorlatok ellen a fejlesztési életciklus során. Az érintett szervezetek azt is mérlegelhetik, hogy ösztönözzék azon szállítókat, amelyek ellenőrzéseket hajtanak végre, átláthatóságot biztosítanak folyamataikba és biztonsági és adatvédelmi gyakorlataikba, szerződést biztosítanak, amely megtiltja a hamisított elemek használatát, és korlátozzák a vásárlásokat megbízhatatlan szállítóktól. A szervezetek mérlegelik a személyzet számára a beszállítói lánccal kapcsolatos kockázatokról, a rendelkezésre álló védelmi stratégiákról és a programok alkalmazásának időpontjáról szóló képzési, oktatási és tudatosságnövelő programok biztosítását. A fejlesztési tervek, dokumentációk és bizonyítékok áttekintésére és védelmére szolgáló módszerek összemérhetőek az érintett szervezet biztonsági és adatvédelmi követelményeivel. A szerződések meghatározhatják a dokumentáció védelmi követelményeit.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek azonosítania kell az ellátási láncból eredő kockázatokat.\n2. A szervezetnek meg kell határoznia a beszerzési stratégiáit, amelyek segítenek kivédeni, azonosítani és csökkenteni az ellátási láncból eredő kockázatokat.\n3. A szervezetnek alkalmaznia kell az ellátási láncból eredő kockázatok kivédésére, azonosítására és csökkentésére szolgáló beszerzési stratégiát.\n4. A szervezetnek lehetősége van beszállítói lánccal kapcsolatos kockázatokról, a rendelkezésre álló védelmi stratégiákról  biztonságtudatosságot növelő képzést biztosíthat a személyzet számára.\n5. A szervezetnek dokumentálnia kell a beszerzési startégiát, az alkalmazott eszközöket és technikákat, melyeket rendszeresen felül kell vizsgálnia a változó fenyegetési környezet elleni eredményes védekezés érdekében.",
          "iso_27001_ref": "A.5.20; A.5.21; A.5.23",
          "nist_sp_800_53_rev5_ref": "SR-5",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.13"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.13 – Beszerzési stratégiák, eszközök és módszerek végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-121",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.13 – Beszerzési stratégiák, eszközök és módszerek: 1) A szervezetnek azonosítania kell az ellátási láncból eredő kockázatokat. 2) A szervezetnek meg kell határoznia a beszerzési stratégiáit, amelyek segítenek kivédeni, azonosítani és csökkenteni az ellátási láncból eredő kockázatokat. 3) A szervezetnek dokumentálnia kell a beszerzési startégiát, az alkalmazott eszközöket és technikákat, melyeket rendszeresen felül kell vizsgálnia a változó fenyegetési környezet elleni eredményes védekezés érdekében. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.19",
          "control_title": "Értesítési megállapodások",
          "explanation": "Az egyezmények és eljárások létrehozása elősegíti a beszállítói láncban részt vevő szervezetek közötti kommunikációt. Az EIR, rendszerelemek vagy rendszerszolgáltatásokat negatívan befolyásoló vagy befolyásolható támadások és potenciális támadásokra figyelmeztető korai értesítése elengedhetetlen, hogy a szervezet hatékonyan reagálhasson az ilyen eseményekre. A felmérések vagy naplók eredményei tartalmazhatnak nyílt forrású információkat, amelyek hozzájárultak egy döntéshez vagy eredményhez, és segíthetnek a beszállítói láncban részt vevő szervezetnek megoldani egy problémát vagy javítani a folyamatait.\n.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia a beszállítói láncában részt vevő szervezeteket.\n2. A szervezetnek megállapodásokat kell kötnie a beszállítói láncában részt vevő szervezetekkel, amelyek meghatározzák a felelősségi köröket, a biztonsági követelményeket és a kommunikációs protokollokat.\n3. A szervezetnek rendszeresen naplót kell vezetnie a beszállítói láncának értékeléséről vagy auditálásáról.\n4. A szervezetnek biztosítania kell, hogy az EIR rendelkezik a rendszerelemeket vagy rendszerszolgálatásokat potenciálisan bekövetkező támadásokra való előrejelző figyelmeztetési képességgel.\n5. A szervezetnek lehetősége van a fenti eljárások és technikák segítségével javítania a beszállítói láncot ért biztonsági eseményekre való szervezeti reagálást.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SR-8",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.19"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.19 – Értesítési megállapodások végrehajtási csomag: jóváhagyott EIR-scope, 5 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 5 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-122",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.19 – Értesítési megállapodások: 1) A szervezetnek meg kell határoznia a beszállítói láncában részt vevő szervezeteket. 2) A szervezetnek megállapodásokat kell kötnie a beszállítói láncában részt vevő szervezetekkel, amelyek meghatározzák a felelősségi köröket, a biztonsági követelményeket és a kommunikációs protokollokat. 3) A szervezetnek lehetősége van a fenti eljárások és technikák segítségével javítania a beszállítói láncot ért biztonsági eseményekre való szervezeti reagálást. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.22",
          "control_title": "Rendszerek vagy rendszerelemek vizsgálata",
          "explanation": "Az EIR-ek vagy rendszerelemek hamisítással kapcsolatos ellenállóképességének és felderítésének ellenőrzése a fizikai és logikai hamisítást érinti, mely az érintett szervezet által ellenőrzött területekről eltávolított EIR-ekre és rendszerelemekre vonatkozik. Az ellenőrzés szükségességére utaló jelek közé tartozik a csomagolás, a specifikációk, a gyár helyszínének vagy az alkatrész beszerzéséért felelős entitás változása, valamint amikor személyek magas kockázati besorolással rendelkező helyszínekről térnek vissza.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia mely rendszerelemeket szükséges ellenőrizni a hamisítás felderítésének érdekében.\n2. A szervezetnek szükség esetén meg kell határoznia milyen gyakorisággal ellenőrzi a meghatározott rendszerelemeket a hamisítás felderítésének érdekében.\n3. A szervezetnek alkalmaznia kell a meghatározott rendszerelemek vizsgálatát az általa meghatározott ellenőrzés szükségességére utaló jelek észlelése esetekben.\n4. A szervezetnek dokumentálnia kell a meghatározott ellenőrzés szükségességére utaló jeleket,  és valamennyi elvégzett ellenőrzést .",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SR-10",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.22"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.22 – Rendszerek vagy rendszerelemek vizsgálata végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-123",
      "owner": "Pásztor András",
      "phase": "M3_3_6M",
      "priority": "P2",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.22 – Rendszerek vagy rendszerelemek vizsgálata: 1) A szervezetnek meg kell határoznia mely rendszerelemeket szükséges ellenőrizni a hamisítás felderítésének érdekében. 2) A szervezetnek szükség esetén meg kell határoznia milyen gyakorisággal ellenőrzi a meghatározott rendszerelemeket a hamisítás felderítésének érdekében. 3) A szervezetnek dokumentálnia kell a meghatározott ellenőrzés szükségességére utaló jeleket, és valamennyi elvégzett ellenőrzést . Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.23",
          "control_title": "Rendszerelem hitelessége",
          "explanation": "Hamisított alkatrészek érkezhetnek gyártóktól, fejlesztőktől, szállítóktól és szerződéses partnerektől. A hamisítás elleni szabályok és eljárások támogatják a hamisítás elleni védelmet, valamint további védelmet biztosítanak a kártékony kódok ellen is.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek ki kell alakítania a hamisítás elleni szabályokat és eljárásokat.\n2. A szervezetnek jelentenie kell a hamisított rendszerelemeket és azok forrását a szervezet által meghatározott személyeknek vagy szerepköröknek.\n3. A szervezetnek dokumentálnia kell, amennyiben hamisított rendszerelemeket vagy alkatrészeket fedez fel és fel kel vennie a kapcsolatot a hamisított alkatrész forrásával, vagy az illetékes hatósággal.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SR-11",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.23"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.23 – Rendszerelem hitelessége végrehajtási csomag: jóváhagyott EIR-scope, 3 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 3 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-124",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.23 – Rendszerelem hitelessége: 1) A szervezetnek ki kell alakítania a hamisítás elleni szabályokat és eljárásokat. 2) A szervezetnek jelentenie kell a hamisított rendszerelemeket és azok forrását a szervezet által meghatározott személyeknek vagy szerepköröknek. 3) A szervezetnek dokumentálnia kell, amennyiben hamisított rendszerelemeket vagy alkatrészeket fedez fel és fel kel vennie a kapcsolatot a hamisított alkatrész forrásával, vagy az illetékes hatósággal. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.24",
          "control_title": "Rendszerelem hitelessége – Hamisítás elleni képzés",
          "explanation": "Az érintett szervezetnek meg kell határozni a rendszerek felügyeletéért felelős szerepköröket, majd ezen szerepkörök részére olyan képzési programokat kell kialakítania és végrehajtania, amelyek segítenek megérteni és felismerni a hamisított rendszerelemeket. A képzésnek magában kell foglalnia a hamisított hardverek, szoftverek és firmware-ek felismerésének módszereit és technikáit. A képzésnek részletesnek kell lennie, és magában kell foglalnia a hamisított EIR-ekkel kapcsolatos legújabb trendeket és fenyegetéseket.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia, mely személyek vagy szerepkörök felelősek az rendszerek felügyeletéért és kezeléséért.\n2. A szervezetnek ki kell dolgoznia egy képzési programot, amely részletesen bemutatja, hogyan lehet felismerni a hamisított hardvert, szoftvert és firmware-t.\n3. A szervezetnek implementálnia kell a képzési programot, és biztosítania kell, hogy a meghatározott személyek vagy szerepkörök részt vesznek a képzésen.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SR-11(1)",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.24"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.24 – Rendszerelem hitelessége – Hamisítás elleni képzés végrehajtási csomag: jóváhagyott EIR-scope, 3 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 3 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-125",
      "owner": "Pásztor András",
      "phase": "M2_31_90D",
      "priority": "P1",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.24 – Rendszerelem hitelessége – Hamisítás elleni képzés: 1) A szervezetnek meg kell határoznia, mely személyek vagy szerepkörök felelősek az rendszerek felügyeletéért és kezeléséért. 2) A szervezetnek ki kell dolgoznia egy képzési programot, amely részletesen bemutatja, hogyan lehet felismerni a hamisított hardvert, szoftvert és firmware-t. 3) A szervezetnek implementálnia kell a képzési programot, és biztosítania kell, hogy a meghatározott személyek vagy szerepkörök részt vesznek a képzésen. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.25",
          "control_title": "Rendszerelem hitelessége – Konfigurációfelügyelet",
          "explanation": "A konfigurációfelügyelet magában foglalja a változások naplózását, amelyeket a rendszerelemen végeznek, beleértve a szervizelést és a javítást is. A naplózás lehetővé teszi az érintett szervezet számára, hogy nyomon követhesse a rendszerelem teljes élettartamát, és biztosítsa, hogy minden változást megfelelően dokumentálnak és ellenőriznek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek nyilvántartást kell vezetnie a rendszerelemekről, amelyek szervizelésre vagy javításra várnak, vagy amelyeket már szervizeltek vagy javítottak, és arra várnak, hogy újból üzembe állítsák őket\n2. A szervezetnek ki kell dolgoznia egy konfiguráció felügyeleti rendszert, mely lehetővé teszi a konfiguráció felügyeletét a meghatározott rendszerelemekre.\n3. A szervezetnek alkalmaznia kell a meghatározott felügyeleti rendszert a meghatározott rendszerelemekre.\n4. A szervezetnek minden egyes rendszerelemen elvégzett módosítást naplóznia kell, hogy nyomon követhetőek legyenek a változások a rendszerelem teljes életciklusa alatt.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SR-11(2)",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.25"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.25 – Rendszerelem hitelessége – Konfigurációfelügyelet végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-126",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.25 – Rendszerelem hitelessége – Konfigurációfelügyelet: 1) A szervezetnek nyilvántartást kell vezetnie a rendszerelemekről, amelyek szervizelésre vagy javításra várnak, vagy amelyeket már szervizeltek vagy javítottak, és arra várnak, hogy újból üzembe állítsák őket 2) A szervezetnek ki kell dolgoznia egy konfiguráció felügyeleti rendszert, mely lehetővé teszi a konfiguráció felügyeletét a meghatározott rendszerelemekre. 3) A szervezetnek minden egyes rendszerelemen elvégzett módosítást naplóznia kell, hogy nyomon követhetőek legyenek a változások a rendszerelem teljes életciklusa alatt. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "ai_eligibility": "partial",
      "ai_role": "remediation_planner",
      "approver": "Lángi Zoltán",
      "control_details": [
        {
          "basic_applicability": "X",
          "control_ref": "19.27",
          "control_title": "Rendszerelem selejtezése, megsemmisítése",
          "explanation": "Az adatok, dokumentációk, eszközök vagy rendszerelemek bármikor selejtezhetők a rendszerfejlesztési életciklus során. Például a selejtezés megtörténhet a kutatás és fejlesztés, tervezés, prototípus készítés vagy üzemeltetés/karbantartás során és magában foglalhat olyan módszereket, mint a lemez tisztítása, a kriptográfiai kulcsok eltávolítása, az alkatrészek részleges újrafelhasználása. A selejtezés során bekövetkezett esetleges kompromittálódás érinti a fizikai és logikai adatokat, beleértve a papíralapú vagy digitális formában meglévő rendszerdokumentációt; a szállítással és kézbesítéssel kapcsolatos dokumentációt; a szoftverkóddal rendelkező memóriakártyákat; illetve routereket vagy szervereket, amelyek állandó adathordozóval rendelkeznek és bizalmas, vagy védett információkat tartalmazhatnak. Emellett az rendszerelemek megfelelő selejtezése segít megakadályozni, hogy az említett elemekkel kétes eredetű árukat forgalmazó piactereken kereskedjenek.",
          "high_applicability": "X",
          "human_review_status": "PROPOSED",
          "implementation_steps": "1. A szervezetnek meg kell határoznia, mely adatokat, dokumentációkat, eszközöket és rendszerelemeket kell selejteznie.\n2. A szervezetnek ki kell dolgoznia egy módszertant és technikákat a selejtezésre.\n3. A szervezetnek alkalmaznia kell a kidolgozott selejtezési módszertant a selejtezére szorú rendszerelemekre.\n4. A szervezetnek dokumentálnia kell a selejtezést és annak tárgyát képező rendszerelemet, alkatrészt vagy adatot, valamint gondoskodnia kell az érintett elemek kivezetéséről rendszerelem leltárból.",
          "iso_27001_ref": "Nincs vonatkozó referencia.",
          "nist_sp_800_53_rev5_ref": "SR-12",
          "requirement_family": "19",
          "significant_applicability": "X",
          "source_confidence": "unverified_internal",
          "source_ref": "SRC-009"
        }
      ],
      "control_refs": [
        "19.27"
      ],
      "cost_band": "B0",
      "days_to_target": null,
      "deadline_bucket": "DATE_REQUIRED",
      "deliverable": "19.27 – Rendszerelem selejtezése, megsemmisítése végrehajtási csomag: jóváhagyott EIR-scope, 4 pontos státuszchecklist, kontrollbeállítás vagy eljárás, kivételjegyzék és próbaeredmény.",
      "evidence": "jóváhagyott ellátásilánc-szabály, beszállítói vagy rendszerelem-ellenőrzés, szerződéses rekord és döntési napló, kontrollgazdai és G1 reviewer sign-off. Továbbá: 4 pontos végrehajtási checklist; scope- és kontrollgazda-jóváhagyás; teszt- vagy működési mintarekord; kivétellista; védett URI, SHA-256 és reviewer-döntés.",
      "external_submission": "no",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "id": "A-127",
      "owner": "Pásztor András",
      "phase": "M1_0_30D",
      "priority": "P0",
      "source_confidence": "machine_unvalidated",
      "source_ref": "SRC-008",
      "status": "NEW",
      "target_date": "Emberi ütemezés szükséges",
      "task": "19.27 – Rendszerelem selejtezése, megsemmisítése: 1) A szervezetnek meg kell határoznia, mely adatokat, dokumentációkat, eszközöket és rendszerelemeket kell selejteznie. 2) A szervezetnek ki kell dolgoznia egy módszertant és technikákat a selejtezésre. 3) A szervezetnek dokumentálnia kell a selejtezést és annak tárgyát képező rendszerelemet, alkatrészt vagy adatot, valamint gondoskodnia kell az érintett elemek kivezetéséről rendszerelem leltárból. Az alkalmazhatóságot és a végrehajtást érintett EIR-enként rögzítse; az eltérésekhez nevezzen meg felelőst, céldátumot és kompenzáló kontrollt.",
      "title": "Ellátási lánc kockázatkezelése"
    }
  ],
  "agent_pilot": {
    "formal_effect": false,
    "metrics": {
      "events_seen": 10,
      "false_alert_rate": "NOT_MEASURED_REQUIRES_HUMAN_GOLD_CASE_REVIEW",
      "proposals_created": 10,
      "simulated_manual_steps_baseline": 30,
      "simulated_manual_steps_saved": 20,
      "simulated_pilot_human_steps": 10,
      "synthetic_eval": {
        "cases": 10,
        "classification": "SYNTHETIC_TECHNICAL_CASES_NOT_HUMAN_APPROVED_GOLD_CASES",
        "pass_rate": 1.0,
        "passed": 10
      }
    },
    "pilot_id": "H002-CA-JOB-001",
    "proposals": [
      {
        "agent_role": "evidence_curator",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-001",
        "proposed_changes": [
          "Naplókivétel emberi vizsgálata"
        ],
        "required_human_gate": "G1_DOMAIN_REVIEW",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:log-01"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "remediation_planner",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-002",
        "proposed_changes": [
          "Kontrolleltérés javítási javaslata"
        ],
        "required_human_gate": "G1_DOMAIN_REVIEW",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:control-01"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "orchestrator",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-003",
        "proposed_changes": [
          "Határidőkockázat felülvizsgálata"
        ],
        "required_human_gate": "G2_SECURITY_LEGAL",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:deadline-01"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "evidence_curator",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-004",
        "proposed_changes": [
          "Naplókivétel emberi vizsgálata"
        ],
        "required_human_gate": "G1_DOMAIN_REVIEW",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:log-02"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "remediation_planner",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-005",
        "proposed_changes": [
          "Kontrolleltérés javítási javaslata"
        ],
        "required_human_gate": "G1_DOMAIN_REVIEW",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:control-03"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "remediation_planner",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-006",
        "proposed_changes": [
          "Kontrolleltérés javítási javaslata"
        ],
        "required_human_gate": "G1_DOMAIN_REVIEW",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:control-02"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "orchestrator",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-007",
        "proposed_changes": [
          "Határidőkockázat felülvizsgálata"
        ],
        "required_human_gate": "G2_SECURITY_LEGAL",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:deadline-02"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "evidence_curator",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-008",
        "proposed_changes": [
          "Naplókivétel emberi vizsgálata"
        ],
        "required_human_gate": "G1_DOMAIN_REVIEW",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:log-03"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "orchestrator",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-009",
        "proposed_changes": [
          "Határidőkockázat felülvizsgálata"
        ],
        "required_human_gate": "G2_SECURITY_LEGAL",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:deadline-03"
        ],
        "status": "PROPOSAL"
      },
      {
        "agent_role": "remediation_planner",
        "assumptions": [
          "A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."
        ],
        "confidence": "medium",
        "forbidden_automatic_actions": [
          "close_action",
          "submit_external",
          "change_production",
          "purchase",
          "accept_evidence"
        ],
        "human_review_status": "PENDING_HUMAN",
        "proposal_id": "PROP-H002-CA-PILOT-001-010",
        "proposed_changes": [
          "Kontrolleltérés javítási javaslata"
        ],
        "required_human_gate": "G1_DOMAIN_REVIEW",
        "source_confidence": "synthetic",
        "source_refs": [
          "SYNTHETIC:H002:control-04"
        ],
        "status": "PROPOSAL"
      }
    ],
    "status": "PROPOSAL"
  },
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
      "action_id": "A-043",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-045",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-046",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-047",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-048",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-049",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-050",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-051",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-052",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-053",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-054",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-056",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-058",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-059",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-060",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-062",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-064",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-065",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Tudatosság és képzés"
    },
    {
      "action_id": "A-066",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Tudatosság és képzés"
    },
    {
      "action_id": "A-067",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Tudatosság és képzés"
    },
    {
      "action_id": "A-069",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "action_id": "A-071",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "action_id": "A-074",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "action_id": "A-075",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "action_id": "A-076",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "action_id": "A-077",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "action_id": "A-078",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "action_id": "A-079",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Konfigurációkezelés"
    },
    {
      "action_id": "A-080",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Konfigurációkezelés"
    },
    {
      "action_id": "A-081",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Konfigurációkezelés"
    },
    {
      "action_id": "A-083",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Konfigurációkezelés"
    },
    {
      "action_id": "A-086",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Üzletmenet-folytonosság és helyreállítás"
    },
    {
      "action_id": "A-087",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-088",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-089",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-090",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-091",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-092",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-093",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-096",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági események kezelése"
    },
    {
      "action_id": "A-097",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági események kezelése"
    },
    {
      "action_id": "A-098",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági események kezelése"
    },
    {
      "action_id": "A-099",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Karbantartás"
    },
    {
      "action_id": "A-100",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Karbantartás"
    },
    {
      "action_id": "A-101",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Karbantartás"
    },
    {
      "action_id": "A-103",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és szolgáltatásbeszerzés"
    },
    {
      "action_id": "A-104",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és szolgáltatásbeszerzés"
    },
    {
      "action_id": "A-107",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-109",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-110",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-111",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-112",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-113",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-118",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "action_id": "A-120",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "action_id": "A-121",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "action_id": "A-124",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "action_id": "A-126",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "action_id": "A-127",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P0",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
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
      "action_id": "A-044",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Irányítás és programmenedzsment"
    },
    {
      "action_id": "A-055",
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
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-057",
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
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-063",
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
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-068",
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
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "action_id": "A-070",
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
      "title": "Naplózás és elszámoltathatóság"
    },
    {
      "action_id": "A-072",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "action_id": "A-082",
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
      "title": "Konfigurációkezelés"
    },
    {
      "action_id": "A-084",
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
      "title": "Konfigurációkezelés"
    },
    {
      "action_id": "A-085",
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
      "title": "Üzletmenet-folytonosság és helyreállítás"
    },
    {
      "action_id": "A-094",
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
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-095",
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
      "title": "Azonosítás és hitelesítés"
    },
    {
      "action_id": "A-102",
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
      "title": "Fizikai és környezeti védelem"
    },
    {
      "action_id": "A-106",
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
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-108",
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
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-114",
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
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "action_id": "A-117",
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
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "action_id": "A-122",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "action_id": "A-125",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P1",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
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
    },
    {
      "action_id": "A-061",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Hozzáférés-felügyelet"
    },
    {
      "action_id": "A-073",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Biztonsági értékelés és engedélyezés"
    },
    {
      "action_id": "A-105",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és kommunikációvédelem"
    },
    {
      "action_id": "A-115",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "action_id": "A-116",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL",
        "G3_PRODUCTION_CHANGE"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Rendszer- és információsértetlenség"
    },
    {
      "action_id": "A-119",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
    },
    {
      "action_id": "A-123",
      "approver": "Lángi Zoltán",
      "gates": [
        "G1_DOMAIN_REVIEW",
        "G2_SECURITY_LEGAL"
      ],
      "owner": "Pásztor András",
      "priority": "P2",
      "status": "EMBERI DÖNTÉSRE VÁR",
      "target_date": "Emberi ütemezés szükséges",
      "title": "Ellátási lánc kockázatkezelése"
    }
  ],
  "catalog_review": {
    "amended_controls": [
      "5.3",
      "5.4"
    ],
    "applicability_match_count": 914,
    "deferred_task_id": "DEF-036",
    "formal_effect": false,
    "identifier_match_count": 914,
    "legal_precheck_status": "READY_FOR_G1_HUMAN_REVIEW",
    "official_control_count": 914,
    "pending_checks": 6,
    "pending_eir_classifications": 5,
    "protected_folder_uri": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-005/SRC-009",
    "required_gate": "G1_DOMAIN_REVIEW",
    "review_form_uri": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-005/SRC-009/CONTROL_CATALOG_G1_REVIEW.md",
    "source_ref": "SRC-009",
    "status": "PENDING_G1_REVIEW",
    "text_review_required_count": 7,
    "title_match_count": 914
  },
  "deadline_reconciliation": {
    "as_of": "2026-07-29",
    "formal_effect": false,
    "pending_count": 16,
    "record_count": 16,
    "records": [
      {
        "action_id": "A-003",
        "approver": "Lángi Zoltán",
        "days_overdue": 30,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "IN_PROGRESS",
        "registered_target_date": "2026-06-29",
        "required_gates": [
          "G2_SECURITY_LEGAL"
        ]
      },
      {
        "action_id": "A-035",
        "approver": "Lángi Zoltán",
        "days_overdue": 30,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "IN_PROGRESS",
        "registered_target_date": "2026-06-29",
        "required_gates": [
          "G2_SECURITY_LEGAL"
        ]
      },
      {
        "action_id": "A-001",
        "approver": "Lángi Zoltán",
        "days_overdue": 28,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "IN_PROGRESS",
        "registered_target_date": "2026-07-01",
        "required_gates": [
          "G2_SECURITY_LEGAL"
        ]
      },
      {
        "action_id": "A-036",
        "approver": "Lángi Zoltán",
        "days_overdue": 28,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "IN_PROGRESS",
        "registered_target_date": "2026-07-01",
        "required_gates": [
          "G2_SECURITY_LEGAL"
        ]
      },
      {
        "action_id": "A-031",
        "approver": "Lángi Zoltán",
        "days_overdue": 26,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-03",
        "required_gates": [
          "G2_SECURITY_LEGAL"
        ]
      },
      {
        "action_id": "A-004",
        "approver": "Lángi Zoltán",
        "days_overdue": 23,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "IN_PROGRESS",
        "registered_target_date": "2026-07-06",
        "required_gates": [
          "G1_DOMAIN_REVIEW"
        ]
      },
      {
        "action_id": "A-012",
        "approver": "Lángi Zoltán",
        "days_overdue": 19,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "IN_PROGRESS",
        "registered_target_date": "2026-07-10",
        "required_gates": [
          "G2_SECURITY_LEGAL"
        ]
      },
      {
        "action_id": "A-005",
        "approver": "Lángi Zoltán",
        "days_overdue": 18,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "IN_PROGRESS",
        "registered_target_date": "2026-07-11",
        "required_gates": [
          "G1_DOMAIN_REVIEW"
        ]
      },
      {
        "action_id": "A-011",
        "approver": "Lángi Zoltán",
        "days_overdue": 13,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-16",
        "required_gates": [
          "G1_DOMAIN_REVIEW"
        ]
      },
      {
        "action_id": "A-006",
        "approver": "Lángi Zoltán",
        "days_overdue": 3,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-26",
        "required_gates": [
          "G4_EXTERNAL_SUBMISSION"
        ]
      },
      {
        "action_id": "A-017",
        "approver": "Lángi Zoltán",
        "days_overdue": 3,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-26",
        "required_gates": [
          "G3_PRODUCTION_CHANGE"
        ]
      },
      {
        "action_id": "A-020",
        "approver": "Lángi Zoltán",
        "days_overdue": 3,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-26",
        "required_gates": [
          "G2_SECURITY_LEGAL"
        ]
      },
      {
        "action_id": "A-032",
        "approver": "Lángi Zoltán",
        "days_overdue": 12,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-17",
        "required_gates": [
          "G1_DOMAIN_REVIEW"
        ]
      },
      {
        "action_id": "A-009",
        "approver": "Lángi Zoltán",
        "days_overdue": 3,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-26",
        "required_gates": [
          "G1_DOMAIN_REVIEW"
        ]
      },
      {
        "action_id": "A-010",
        "approver": "Lángi Zoltán",
        "days_overdue": 3,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-26",
        "required_gates": [
          "G5_PURCHASE"
        ]
      },
      {
        "action_id": "A-029",
        "approver": "Lángi Zoltán",
        "days_overdue": 3,
        "outcome": "PENDING_HUMAN",
        "owner": "Pásztor András",
        "registered_status": "NEW",
        "registered_target_date": "2026-07-26",
        "required_gates": [
          "G5_PURCHASE"
        ]
      }
    ],
    "status": "PROPOSAL_PENDING_HUMAN_RECONCILIATION"
  },
  "deferred_tasks": [
    {
      "approver": "Lángi Zoltán",
      "gate": "Lezárva 2026-07-29-én.",
      "id": "DEF-001",
      "owner": "Pásztor András",
      "process_state": "A G2/G4 nyilatkozat kézzel aláírt, beszkennelt példánya 2026-07-29-én a védett SharePoint evidenciatárba került; URI-ja, SHA-256 értéke, aláírási dátuma, reviewer-rekordja és emberi elfogadása rögzített.",
      "related": "A-002; D-026; D-031; EV-GOV-001",
      "required": "Nincs további pótlandó elem. Az elektronikus aláírás hiánya a D-031 szerint nem hiányosság.",
      "status": "CLOSED_ACCEPTED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "Külső benyújtás előtt.",
      "id": "DEF-002",
      "owner": "Pásztor András",
      "process_state": "Az SRC-008 kanonikus forrásként használható; védett SharePoint-hivatkozása 2026-07-23-án rögzítve.",
      "related": "A-035; SRC-008; D-025; D-026",
      "required": "A G2 reviewer D-025-höz kapcsolt elfogadási rekordja.",
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
      "gate": "Bármely fennmaradó kapcsolódó kontroll elfogadása vagy külső benyújtás, valamint az érintett nyitott akció DONE státusza előtt.",
      "id": "DEF-029",
      "owner": "Pásztor András; Kóczán Mónika",
      "process_state": "Elkészült az öt irányítási akció bizonyítéklánc-regisztere. Az A-002 G2/G4 rekordja a D-031/EV-GOV-001 alapján elfogadott, ezért az A-002 és a DEF-001 lezárt; a többi irányítási evidencia továbbra is pótlandó.",
      "related": "A-001; A-007; A-035; A-036; data/governance_work_packages.json",
      "required": "Formális IBF-kijelölés és alkalmassági/jogi review; SRC-008 reviewer-rekordja; aláírt RACI, vezetői szponzor és belső infrastruktúra-/incidenskontroll-gazda; végleges terv G1/G2/G4 review-ja, jogosult emberi aláírás és benyújtás, védett végleges csomag SHA-256-tal, valamint átvételi igazolás.",
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
      "gate": "Bármely nem loopback kötés, többfelhasználós használat, valós Microsoft-bejelentkezés, hitelesített döntés, tokenkérés, fájlfeltöltés, védett tár- vagy éles adatkapcsolat és belső hálózati pilot előtt.",
      "id": "DEF-032",
      "owner": "Pásztor András; kijelölendő portálüzemeltető",
      "process_state": "Elkészült a loopback-only helyi portál-MVP, a read-only SharePoint-linknézet, az élő Graph-olvasás readiness-csomagja és a vállalati Entra + NIS2 site read-probe alapú auth/RBAC policy-prototípus. Valós hitelesítés, hálózati publikálás, tokenkérés és éles integráció nincs.",
      "related": "D-028; D-029; A-042; config/portal_mvp.json; config/sharepoint_graph_readiness.json; config/portal_auth_policy.json; SHAREPOINT_GRAPH_DECISION_PACKAGE.md; PORTAL_AUTH_DECISION_PACKAGE.md; portal_demo/; src/nis2_harness/portal.py; src/nis2_harness/portal_server.py",
      "required": "Kijelölt belső szerver és üzemeltető; jóváhagyott hálózati zóna; valós tenant/client ID és Entra app registration; authorization code + PKCE és jóváhagyott tokenkönyvtár; HTTPS redirect URI, Secure/HttpOnly/SameSite session, CSRF és kijelentkezés; delegált NIS2 site read-probe; név szerinti vagy jóváhagyott forrású szerepkör-hozzárendelések; hozzáférés-visszavonás és vendégkezelés; auditlog-retention, backup/restore, monitoring és incidensfolyamat; a Graph mezőtérkép, frissességi küszöb, site/list azonosító és szolgáltatásazonosság; Sites.Selected read grant nem éles technikai próbája; credential védett tárhivatkozása; a hitelesített jóváhagyási rekord és a formális workflow külön terve; G1 funkcionális/szerepkör-, G2 biztonsági/jogi architektúra-review, G3 pilot/deploy döntés; pozitív, negatív, session-, CSRF-, szerepköremelés-, visszavonási, helyreállítási és ember által tanúsított kill-switch teszt.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "gate": "Bármely valós vagy érzékeny forrás csatlakoztatása, tokenkérés, ütemezett futás, többfelhasználós portálintegráció vagy az A-032/A-042 lezárása előtt.",
      "id": "DEF-033",
      "owner": "Pásztor András; kijelölendő agent-üzemeltető és forrásgazdák",
      "process_state": "Elkészült a SHA-256-tal rögzített local-only agent job és az első valós forrásjelölt, a SharePoint-feladatlista élő olvasásának hálózatmentes readiness-csomagja. A szintetikus 10/10 eredmény nem emberi gold-case elfogadás; tokenkérés és élő Graph-kapcsolat nincs.",
      "related": "H-002; A-032; A-042; config/h002_agent_pilot.json; config/sharepoint_graph_readiness.json; SHAREPOINT_GRAPH_DECISION_PACKAGE.md; generated/h002_agent_pilot_output.json",
      "required": "A tíz A-032 gold case tényleges kitöltése és emberi jóváhagyása; false-positive/false-negative review; valós emberimunka-baseline és pilotmérés; adatminősítés, forrásgazdák, engedélyezett read-only forráslista és jogosultság; a Graph-mezőtérkép és frissességi küszöb G1 jóváhagyása; a Sites.Selected read grant, credential-kezelés, retention és naplózás G2 jóváhagyása; az app registration, site/list grant és pilot G3 döntése; ember által tanúsított kill-switch és helyreállítási próba; védett futási evidencia URI/SHA-256 és reviewer-rekord.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; szükség szerint Dr. Berta Brigitta",
      "gate": "Bármely jelölt SUBMITTED/ACCEPTED státusza vagy kapcsolódó akció review-ra kész/DONE állapota előtt.",
      "id": "DEF-034",
      "owner": "Pásztor András; érintett dokumentum-, EIR-, HR-, beszállítói és infrastruktúra-gazdák",
      "process_state": "A 182 állományos helyi hash-jegyzék elkészült; a 19 magas értékű jelölt névszabály szerinti másolata 2026-07-23-án létrejött a SharePoint NIS2_EVIDENCE ágában, valós URI-val és egyező visszaolvasott fájlmérettel. A rekordok DRAFT állapotúak, egyetlen tartalom sem lett elfogadva.",
      "related": "INTAKE-VC-20260720; DOCUMENT_INTAKE_REVIEW_2026-07-20.md; data/evidence_register.csv",
      "required": "Készítő- és forrásgazda-megerősítés; bizalmassági/retention G2 döntés; EIR- és kontrollscope; szakmai G1 review; szabályzatok verzió-, aláírás-, kihirdetés- és megismerési ellenőrzése; helyőrzős tervek javítása; történeti képernyőképek frissítése; személyügyi és műszaki minták célhoz kötött minimalizált kezelése; rekordonként reviewer-idő és döntési hivatkozás.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; szükség szerint Dr. Berta Brigitta",
      "gate": "A SharePoint evidenciatár végleges jóváhagyása, bármely rekord SUBMITTED/ACCEPTED státusza és a kameravizsgálati irat felhasználása előtt.",
      "id": "DEF-035",
      "owner": "Pásztor András; kijelölendő SharePoint-/backup-owner",
      "process_state": "A SharePoint-kapcsolat olvasási és írási próbája sikeres; a célmappastruktúra és 19 DRAFT másolat létrejött. A 2026-07-20-i helyi baseline-hoz képest talált öt forráseltérés 2026-07-23-án tételesen besorolásra került. Az SRC-001 és SRC-008 rendezett példánya, valamint az SRC-002 történeti archívuma létrejött; a másik három eltérés nem került automatikusan az evidenciatárba.",
      "related": "EVIDENCE_STORAGE.md; NIS2_EVIDENCE; data/evidence_register.csv; SHAREPOINT_SOURCE_DELTA_REVIEW_2026-07-23.md",
      "required": "Store owner és backup owner név szerinti kijelölése; mappaszintű least-privilege jogosultság és külső megosztás review; verziózás/auditnapló/elfogadott fájl felülírásának tiltása; backup és restore-próba; retention és bizalmassági taxonómia; negyedéves review-gazda és ütem; a személyes adatokat tartalmazó kameravizsgálati irat célhoz kötöttségének, adatminimalizálásának és hozzáférésének G2 döntése.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán",
      "gate": "A katalógus APPROVED minősítése, EIR-re alkalmazandó kontrollkör automatikus kiválasztása, rendszerbiztonsági terv jóváhagyása vagy megfelelőségi állítás előtt.",
      "id": "DEF-036",
      "owner": "Pásztor András; érintett EIR-ownerek",
      "process_state": "A 7/2024. MK rendelethez kapcsolódó Excelből 914 kontroll és 1878 részletes követelmény determinisztikus, PROPOSED nyilvántartása készült; a jelenlegi 164 használt kontrollhivatkozás teljesen lefedett. A hivatalos 7/2024. és 18/2024. MK forrásokkal végzett előellenőrzés 914/914 azonosító-, cím- és osztályjelölés-egyezést mutatott; 907 követelményszöveg normalizáltan egyezik. A célzott második ellenőrzés 2 kisebb és 5 tartalmi eltérést azonosított: a 2.17.2.4 pontból hiányzó tagadást, a módosított 5.3/5.4 szöveget, a 9.24.2 hiányát és a 16.66.5 többletét külön kiemeli. A SharePoint-listaelem és az elkülönített A-005/SRC-009 mappa létrejött. A feltöltött XLSX 977503 bájt, míg a kanonikus helyi forrás 970666 bájt, ezért byteazonossága nincs igazolva.",
      "related": "A-005; A-011; A-040; SRC-009; SRC-010; data/control_catalog.csv; data/control_requirements.csv; data/official_control_baseline.csv; data/control_catalog_legal_comparison.csv; CONTROL_CATALOG_G1_REVIEW.md; CONTROL_CATALOG_TARGETED_G1_DECISION_2026-07-28.md; EIR_SECURITY_CLASSIFICATION_QUESTIONNAIRE.md",
      "required": "A hét megjelölt kontroll célzott G1 ellenőrzése és döntési lapja; a SharePoint-példány kézi cseréje és visszaolvasott SHA-256 ellenőrzése; store-owner; eredet, verzió és felhasználási jog; reviewer, időzónás review-idő és döntési hivatkozás; az öt EIR kérdőíves hatáselemzése, Alap/Jelentős/Magas besorolásának emberi jóváhagyása és kontrolltestreszabási döntése.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; az akció szerinti G1–G5 reviewer",
      "gate": "Bármely érintett akció státuszának vagy céldátumának módosítása, evidenciaelfogadása vagy lezárása előtt.",
      "id": "DEF-037",
      "owner": "Pásztor András",
      "process_state": "Az A-002 D-031/EV-GOV-001 szerinti lezárása után a 2026-07-29-i állapot szerint 16 nem terminális akció nyilvántartott céldátuma lejárt. Elkészült a snapshot-mezőket védő, proposal-only egyeztetési nyilvántartás és emberi munkalap; minden rekord PENDING_HUMAN. A helyi portál append-only, hitelesítetlen rögzítői státusztervezetet tud fogadni; a hash-ellenőrzött review-, döntési-, változásjavaslati, stale-safe preflight- és pre/post hash utóellenőrzési lánc elkészült. A baseline még 0 tervezetet tartalmaz. Státusz vagy céldátum nem változott.",
      "related": "16 lejárt akció; data/deadline_reconciliation.json; DEADLINE_RECONCILIATION_FORM_2026-07-29.md",
      "required": "Akciónként tényleges állapotleírás és outcome; reviewer, időzónás review-idő és védett döntési hivatkozás; elkészült tételnél védett evidencia URI/SHA-256 és külön evidencia-review; újraütemezésnél indokolt, jövőbeli céldátum és jogosult jóváhagyás; az elfogadott döntések kézi, preflighttal és utóellenőrzéssel kontrollált átvezetése az actions.csv fájlba.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "gate": "Bármely nem loopback használat, többfelhasználós pilot, valós bejelentkezés, SharePoint-feltöltés vagy szervertelepítés előtt.",
      "id": "DEF-038",
      "owner": "Pásztor András; kijelölendő portálüzemeltető",
      "process_state": "Elkészült a többfelhasználós pilot tranzakciós SQLite-tárolása, párhuzamos állapotvédelme, csatolmány- és hash-kezelése, korábbi JSONL-adatok egyszeri átvétele, ellenőrzött mentése, fail-closed konfigurációja, indító/mentő segédje és UAT-terve. A hálózati publikálás, hitelesítés, szerepkör-kikényszerítés és SharePoint-írás kikapcsolt.",
      "related": "D-029; D-032; D-033; D-034; config/multiuser_pilot.json; MULTIUSER_PILOT_DEPLOYMENT.md; PILOT_UAT_CHECKLIST.md",
      "required": "Belső Windows szerver, üzemeltető, DNS, hálózati zóna, HTTPS gateway és tanúsítvány; Entra tenant/client/redirect adatok és támogatott auth-könyvtár; Entra object ID alapú, jóváhagyott szerepkiosztás; kiválasztott hatókörű Graph/site/folder grant; secret-store és naplóretention; G1/G2/G3 jóváhagyás; a 16 pontos UAT, mentési és elkülönített visszaállítási próba valós reviewerrel és védett evidenciával.",
      "status": "OPEN_DEFERRED"
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; érintett G1/G3/G4 reviewer",
      "gate": "A cselekvési terv végleges aláírása, a javasolt dátumok kanonikus átvezetése, bármely éles változtatás vagy az A-043–A-127 akciók DONE állapota előtt.",
      "id": "DEF-039",
      "owner": "Pásztor András; javasolt kontrollgazdák",
      "process_state": "Mind a 85 lefedettségpótló akcióhoz elkészült a kontrollspecifikus végrehajtási checklist, mérhető elfogadási feltétel, evidenciaelvárás, javasolt kontrollgazda/közreműködő és proposal-only ütemezés. A kanonikus céldátumok és jóváhagyási státuszok nem változtak.",
      "related": "A-043–A-127; data/action_execution_details.csv; COVERAGE_MATURATION_REVIEW_2026-08-19.md",
      "required": "A 85 tétel forrásoldalas G1 szakmai review-ja; a TBD belső kontrollgazdák név szerinti kijelölése; az SRC-009 támpontok alkalmazhatósági döntése; a javasolt 2026-09-11-i G1 review és 2027-01-31/2027-04-30/2027-06-30 teljesítési hullámok G2/G4 jóváhagyása; az 52 technikai tétel G3 review-ja; helyi evidenciajelöltek regisztrálása, védett URI/SHA-256 és reviewer-döntés; akciónként tényleges végrehajtás és elfogadott evidencia.",
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
  "human_task_pilot": {
    "allowed_transitions": {
      "RETURN_FOR_REWORK": {
        "from": [
          "READY_FOR_REVIEW"
        ],
        "to": "REWORK_REQUIRED"
      },
      "SAVE_PROGRESS": {
        "from": [
          "IN_PROGRESS"
        ],
        "to": "IN_PROGRESS"
      },
      "START_WORK": {
        "from": [
          "REWORK_REQUIRED",
          "TODO"
        ],
        "to": "IN_PROGRESS"
      },
      "SUBMIT_FOR_REVIEW": {
        "from": [
          "IN_PROGRESS"
        ],
        "to": "READY_FOR_REVIEW"
      }
    },
    "attachments": [],
    "authentication_required_for_formal_use": true,
    "events": [],
    "formal_effect": false,
    "pilot_id": "HTW-PILOT-001",
    "state_counts": {
      "IN_PROGRESS": 0,
      "READY_FOR_REVIEW": 0,
      "REWORK_REQUIRED": 0,
      "TODO": 5
    },
    "status": "LOCAL_PILOT_READY",
    "task_count": 5,
    "tasks": [
      {
        "approver": "Lángi Zoltán",
        "attachments": [],
        "checklist": [
          "Nyisd meg a kapcsolódó auditjelentést és a D-025 döntést.",
          "Ellenőrizd, hogy a fájl és a döntés ugyanarra a kanonikus jelentésre vonatkozik.",
          "Töltsd fel az aláírt vagy jóváhagyott review-rekordot, majd rögzítsd a linket és a hash-t."
        ],
        "evidence_label": "SRC-008 – aláírt, beadott auditjelentés",
        "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/01_AUDIT_SOURCE/A-035/SRC-008__A-035__SIGNED-SUBMITTED-AUDIT-REPORT__v01__20260605.pdf",
        "formal_effect": false,
        "latest_event": null,
        "materials": [
          {
            "download_url": "/api/task-materials/DEF-002/DEF-002_kanonikus_auditjelentes_review.docx",
            "filename": "DEF-002_kanonikus_auditjelentes_review.docx",
            "label": "Kanonikus auditjelentés – review-munkalap",
            "material_id": "MAT-DEF-002-01",
            "path": "portal_materials/DEF-002_kanonikus_auditjelentes_review.docx"
          }
        ],
        "must_be_completed_before": "Külső benyújtás előtt.",
        "owner": "Pásztor András",
        "pilot_order": 1,
        "plain_language_goal": "Lángi Zoltán erősítse meg írásban, hogy az aláírt auditjelentés a használható kanonikus példány.",
        "required_result": "A G2 reviewer D-025-höz kapcsolt elfogadási rekordja.",
        "status": "TODO",
        "task_id": "DEF-002",
        "work_type": "Szakmai elfogadás"
      },
      {
        "approver": "Lángi Zoltán",
        "attachments": [],
        "checklist": [
          "Nyisd meg az SRC-008 dokumentum 388. oldalát.",
          "Ellenőrizd az összes mező olvashatóságát, és írd le az eredményt.",
          "Mentsd a feljegyzést a védett tárba, majd rögzítsd a linket és a hash-t."
        ],
        "evidence_label": "SRC-008 – aláírt auditjelentés",
        "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/01_AUDIT_SOURCE/A-035/SRC-008__A-035__SIGNED-SUBMITTED-AUDIT-REPORT__v01__20260605.pdf",
        "formal_effect": false,
        "latest_event": null,
        "materials": [
          {
            "download_url": "/api/task-materials/DEF-004/DEF-004_auditigazolas_olvashatosagi_ellenorzes.docx",
            "filename": "DEF-004_auditigazolas_olvashatosagi_ellenorzes.docx",
            "label": "Auditigazolás – olvashatósági ellenőrzőlap",
            "material_id": "MAT-DEF-004-01",
            "path": "portal_materials/DEF-004_auditigazolas_olvashatosagi_ellenorzes.docx"
          }
        ],
        "must_be_completed_before": "Külső felhasználás előtt, ha az angol igazolás része a csomagnak.",
        "owner": "Pásztor András",
        "pilot_order": 2,
        "plain_language_goal": "Emberi PDF-megjelenítőben ellenőrizni kell, hogy az angol auditigazolás 388. oldala olvasható.",
        "required_result": "Az angol auditigazolás 388. oldalán jelzett Poppler-renderelt mezők olvashatóságának ellenőrzési feljegyzése emberi PDF-megjelenítőből.",
        "status": "TODO",
        "task_id": "DEF-004",
        "work_type": "Dokumentumellenőrzés"
      },
      {
        "approver": "Lángi Zoltán",
        "attachments": [],
        "checklist": [
          "Ellenőrizd a szerepeket, helyettesítést és hatásköröket.",
          "Írasd alá a RACI- és IBF-kijelölési dokumentumokat.",
          "Töltsd fel a végleges csomagot, majd rögzítsd a SharePoint-linket és a hash-t."
        ],
        "evidence_label": "A-036 – szervezeti és RACI-evidencia mappa",
        "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-036",
        "formal_effect": false,
        "latest_event": null,
        "materials": [
          {
            "download_url": "/api/task-materials/DEF-005/DEF-005_RACI_es_IBF_kijelolesi_csomag.docx",
            "filename": "DEF-005_RACI_es_IBF_kijelolesi_csomag.docx",
            "label": "RACI- és IBF-kijelölési csomag",
            "material_id": "MAT-DEF-005-01",
            "path": "portal_materials/DEF-005_RACI_es_IBF_kijelolesi_csomag.docx"
          }
        ],
        "must_be_completed_before": "A szerepkörre épülő kontroll elfogadása, de legkésőbb külső benyújtás előtt.",
        "owner": "Pásztor András",
        "pilot_order": 3,
        "plain_language_goal": "A jóváhagyott szerepkiosztást formális, aláírt RACI- és IBF-kijelölési csomaggal kell igazolni.",
        "required_result": "Aláírt projekt-RACI, formális IBF-kijelölés, feladat- és hatáskör, helyettesítés, kihirdetési nyom, valamint az alkalmazandó hatósági bejelentési vagy nyilvántartási rekord védett URI-ja, hash-e és review-ja.",
        "status": "TODO",
        "task_id": "DEF-005",
        "work_type": "Szerepkijelölés"
      },
      {
        "approver": "Dr. Berta Brigitta",
        "attachments": [],
        "checklist": [
          "Határozd meg a metALCOM-ra alkalmazandó jogcímet és követelményeket.",
          "Ellenőrizd a szükséges végzettségi, tapasztalati és továbbképzési feltételeket.",
          "Csak a review-rekordot és a védett tárhivatkozást rögzítsd; személyes okirat ne kerüljön Gitbe."
        ],
        "evidence_label": "A-036 – IBF- és szerepkijelölési evidencia mappa",
        "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-036",
        "formal_effect": false,
        "latest_event": null,
        "materials": [
          {
            "download_url": "/api/task-materials/DEF-006/DEF-006_IBF_alkalmassagi_jogi_review.docx",
            "filename": "DEF-006_IBF_alkalmassagi_jogi_review.docx",
            "label": "IBF-alkalmasság – jogi review-lap",
            "material_id": "MAT-DEF-006-01",
            "path": "portal_materials/DEF-006_IBF_alkalmassagi_jogi_review.docx"
          }
        ],
        "must_be_completed_before": "Formális IBF-kijelölés és hatósági használat előtt.",
        "owner": "Pásztor András",
        "pilot_order": 4,
        "plain_language_goal": "Dr. Berta Brigitta ellenőrizze és dokumentálja az IBF-re vonatkozó alkalmassági feltételek teljesülését.",
        "required_result": "A metALCOM Kiberbiztonsági tv. 1. § (1) szerinti besorolási jogcíme; az alkalmazandó végzettségi, szakképzettségi vagy szakmai tapasztalati feltétel teljesítésének védett igazolása; büntetlen előéleti és éves továbbképzési megfelelés kezelési rekordja. Személyes okirat Gitbe nem kerülhet.",
        "status": "TODO",
        "task_id": "DEF-006",
        "work_type": "Jogi megfelelőség"
      },
      {
        "approver": "Lángi Zoltán",
        "attachments": [],
        "checklist": [
          "Kóczán Mónika jelölje ki a belső kontrollgazdát.",
          "Ellenőrizzétek a Serversystem Kft. incidens-, napló-, hozzáférési és auditkötelezettségeit.",
          "Töltsétek fel a kijelölést és a review-t, majd rögzítsétek a linket és a hash-t."
        ],
        "evidence_label": "A-036 – kontrollgazdai kijelölések mappa",
        "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-036",
        "formal_effect": false,
        "latest_event": null,
        "materials": [
          {
            "download_url": "/api/task-materials/DEF-007/DEF-007_kontrollgazda_es_partner_review.docx",
            "filename": "DEF-007_kontrollgazda_es_partner_review.docx",
            "label": "Kontrollgazda-kijelölés és partneri review",
            "material_id": "MAT-DEF-007-01",
            "path": "portal_materials/DEF-007_kontrollgazda_es_partner_review.docx"
          }
        ],
        "must_be_completed_before": "Technikai evidencia elfogadása vagy incidenskezelési folyamat jóváhagyása előtt.",
        "owner": "Kóczán Mónika",
        "pilot_order": 5,
        "plain_language_goal": "Ki kell jelölni a belső infrastruktúra- és incidenskezelési kontrollgazdát, és át kell nézni a partner kötelezettségeit.",
        "required_result": "Belső metALCOM infrastruktúra-/incidenskezelési kontrollgazda kijelölése, valamint a Serversystem Kft. incidensjelzési, napló-, evidencia-, hozzáférési, titoktartási, helyettesítési és auditálhatósági kötelezettségeinek dokumentált review-ja.",
        "status": "TODO",
        "task_id": "DEF-007",
        "work_type": "Kontrollgazda-kijelölés"
      }
    ]
  },
  "meta": {
    "as_of": "2026-08-19",
    "auth_status": "NOT_CONFIGURED",
    "disclaimer": "A felület helyi MVP. A review-tervezet nem jóváhagyás, nem evidencia, nem módosít akcióstátuszt és a portál nem hajt végre jóváhagyást.",
    "mode": "LOCAL_MVP",
    "product": "metALCOM NIS2 Audit Control Center",
    "source": "local repository metadata",
    "write_scope": "DRAFT_REVIEW_NOTES_ONLY"
  },
  "portal_auth_readiness": {
    "admission_rule": "ENTRA_AUTH_AND_NIS2_SITE_READ_PROBE",
    "authentication_enabled": false,
    "formal_effect": false,
    "hard_errors": 0,
    "mode": "DESIGN_ONLY_NO_SIGN_IN",
    "network_allowed": false,
    "pending_gates": [
      "G1_DOMAIN_REVIEW",
      "G2_SECURITY_LEGAL",
      "G3_PRODUCTION_CHANGE"
    ],
    "status": "BLOCKED_PENDING_G1_G2_G3",
    "warnings": 4
  },
  "reconciliation_drafts": [],
  "review_drafts": [],
  "sharepoint_integration": {
    "captured_at": "2026-08-19T09:30:00+02:00",
    "formal_effect": false,
    "linked_task_count": 39,
    "list_url": "https://metalcom.sharepoint.com/sites/NIS2/Lists/NIS2%20emberi%20feladatok/AllItems.aspx",
    "mode": "READ_ONLY_CONNECTOR_SNAPSHOT",
    "network_allowed": false,
    "site_url": "https://metalcom.sharepoint.com/sites/NIS2",
    "status": "READ_ONLY_SNAPSHOT_ACTIVE",
    "task_count": 39,
    "unlinked_task_count": 0,
    "write_back_allowed": false
  },
  "sharepoint_live_readiness": {
    "candidate_permission": "Sites.Selected",
    "formal_effect": false,
    "gate_count": 3,
    "hard_errors": 0,
    "mode": "DESIGN_ONLY_NO_NETWORK",
    "network_allowed": false,
    "pending_gates": [
      "G1_DOMAIN_REVIEW",
      "G2_SECURITY_LEGAL",
      "G3_PRODUCTION_CHANGE"
    ],
    "status": "BLOCKED_PENDING_HUMAN_GATES",
    "token_acquisition_allowed": false,
    "warnings": 4,
    "write_back_allowed": false
  },
  "sharepoint_tasks": [
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "EV-GOV-001 – aláírt G2/G4 határidő-jóváhagyás",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/00_AUTHORITY/A-002/D-026__A-002__G2-G4-HATARIDO-JOVAHAGYAS__v01__20260714_signed.pdf",
      "formal_effect": false,
      "gate": "Lezárva 2026-07-29-én.",
      "id": "DEF-001",
      "owner": "Pásztor András",
      "process_state": "A G2/G4 nyilatkozat kézzel aláírt, beszkennelt példánya 2026-07-29-én a védett SharePoint evidenciatárba került; URI-ja, SHA-256 értéke, aláírási dátuma, reviewer-rekordja és emberi elfogadása rögzített.",
      "related": "A-002; D-026; D-031; EV-GOV-001",
      "required": "Nincs további pótlandó elem. Az elektronikus aláírás hiánya a D-031 szerint nem hiányosság.",
      "sharepoint_status": "Lezárt – elfogadva",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "CLOSED_ACCEPTED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "SRC-008 – aláírt, beadott auditjelentés",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/01_AUDIT_SOURCE/A-035/SRC-008__A-035__SIGNED-SUBMITTED-AUDIT-REPORT__v01__20260605.pdf",
      "formal_effect": false,
      "gate": "Külső benyújtás előtt.",
      "id": "DEF-002",
      "owner": "Pásztor András",
      "process_state": "Az SRC-008 kanonikus forrásként használható; védett SharePoint-hivatkozása 2026-07-23-án rögzítve.",
      "related": "A-035; SRC-008; D-025; D-026",
      "required": "A G2 reviewer D-025-höz kapcsolt elfogadási rekordja.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "A-002 – hatósági döntés és kézhezvételi alap",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/00_AUTHORITY/A-002",
      "formal_effect": false,
      "gate": "Folyamatos nyilvántartási korlát.",
      "id": "DEF-003",
      "owner": "Pásztor András",
      "process_state": "A 2026-06-26-i kézhezvételi dátum elfogadott baseline.",
      "related": "A-002; D-022",
      "required": "Hivatalos címzetti kézbesítési igazolás nem áll rendelkezésre. Ha később előkerül, hash-sel és védett URI-val csatolandó; addig a hiány elfogadott kockázatként jelölendő.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "NOT_AVAILABLE_ACCEPTED_RISK",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "SRC-008 – aláírt auditjelentés",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/01_AUDIT_SOURCE/A-035/SRC-008__A-035__SIGNED-SUBMITTED-AUDIT-REPORT__v01__20260605.pdf",
      "formal_effect": false,
      "gate": "Külső felhasználás előtt, ha az angol igazolás része a csomagnak.",
      "id": "DEF-004",
      "owner": "Pásztor András",
      "process_state": "Az auditjelentés kanonikus használatát nem blokkolja.",
      "related": "SRC-008:p388; D-025",
      "required": "Az angol auditigazolás 388. oldalán jelzett Poppler-renderelt mezők olvashatóságának ellenőrzési feljegyzése emberi PDF-megjelenítőből.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "A-036 – szervezeti és RACI-evidencia mappa",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-036",
      "formal_effect": false,
      "gate": "A szerepkörre épülő kontroll elfogadása, de legkésőbb külső benyújtás előtt.",
      "id": "DEF-005",
      "owner": "Pásztor András",
      "process_state": "A jóváhagyott név szerinti szerepkiosztással a projekttervezés továbbhaladhat.",
      "related": "A-001; A-036; D-027",
      "required": "Aláírt projekt-RACI, formális IBF-kijelölés, feladat- és hatáskör, helyettesítés, kihirdetési nyom, valamint az alkalmazandó hatósági bejelentési vagy nyilvántartási rekord védett URI-ja, hash-e és review-ja.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Dr. Berta Brigitta",
      "evidence_label": "A-036 – IBF- és szerepkijelölési evidencia mappa",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-036",
      "formal_effect": false,
      "gate": "Formális IBF-kijelölés és hatósági használat előtt.",
      "id": "DEF-006",
      "owner": "Pásztor András",
      "process_state": "Lángi Zoltán a projekt folyamataiban IBF-ként kezelhető, de az alkalmasság nem tekinthető bizonyítottnak.",
      "related": "A-001; D-027",
      "required": "A metALCOM Kiberbiztonsági tv. 1. § (1) szerinti besorolási jogcíme; az alkalmazandó végzettségi, szakképzettségi vagy szakmai tapasztalati feltétel teljesítésének védett igazolása; büntetlen előéleti és éves továbbképzési megfelelés kezelési rekordja. Személyes okirat Gitbe nem kerülhet.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "A-036 – kontrollgazdai kijelölések mappa",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-036",
      "formal_effect": false,
      "gate": "Technikai evidencia elfogadása vagy incidenskezelési folyamat jóváhagyása előtt.",
      "id": "DEF-007",
      "owner": "Kóczán Mónika",
      "process_state": "Kollár Csaba technikai infrastruktúra- és incidenskezelési feladatokat végezhet.",
      "related": "A-036; D-027",
      "required": "Belső metALCOM infrastruktúra-/incidenskezelési kontrollgazda kijelölése, valamint a Serversystem Kft. incidensjelzési, napló-, evidencia-, hozzáférési, titoktartási, helyettesítési és auditálhatósági kötelezettségeinek dokumentált review-ja.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "A-011 – informatikai leltár munkafüzet",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/_layouts/15/Doc.aspx?sourcedoc=%7BFF365360-10C8-4550-898E-E2E9617953D3%7D&file=EV-VC-001__A-011__MIND__INVENTORY-WORKBOOK__v01__20260720.xlsx&action=default&mobileredirect=true",
      "formal_effect": false,
      "gate": "Bármely valós rendszerexport vagy leltárfeltöltés előtt.",
      "id": "DEF-008",
      "owner": "Pásztor András",
      "process_state": "Az öt EIR proposal baseline-ja és a read-only gyűjtési terv használható az előkészítéshez.",
      "related": "A-011; config/inventory_export_plan.json",
      "required": "Az öt EIR tulajdonosának és helyettesének kijelölése; a kilenc tényleges forrásrendszer és forrásgazda megnevezése; az exportok adatminősítése, védett tárolási helye, legkisebb read-only jogosultsága és G1 jóváhagyása.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "A-011 – informatikai leltár munkafüzet",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/_layouts/15/Doc.aspx?sourcedoc=%7BFF365360-10C8-4550-898E-E2E9617953D3%7D&file=EV-VC-001__A-011__MIND__INVENTORY-WORKBOOK__v01__20260720.xlsx&action=default&mobileredirect=true",
      "formal_effect": false,
      "gate": "Az A-011 review-ra kész vagy DONE állapota előtt.",
      "id": "DEF-009",
      "owner": "Pásztor András",
      "process_state": "A JSON-séma és validátor kész, de csak az öt EIR baseline-rekordot tartalmazza.",
      "related": "A-011; data/inventory_register.json",
      "required": "A jóváhagyott read-only exportok végrehajtása; az asset-, adat-, helyszín- és függőségi listák feltöltése; nyers exportok védett tárolása hash-sel; duplikáció/orphan/scope exception review; EIR- és kritikusrekord-owner sign-off.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Irányítási evidenciák célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE",
      "formal_effect": false,
      "gate": "Az A-032 baseline jóváhagyása vagy bármely agent-kimenet minőségi elfogadása előtt.",
      "id": "DEF-010",
      "owner": "Pásztor András",
      "process_state": "A helyi eval-validator, tíz pending slot, mintakimenet és defect workflow elkészült.",
      "related": "A-032; evals/gold_cases.json",
      "required": "Tíz redaktált gold-case bemenet és elvárt szakmai eredmény; elvárt források/kapuk/tiltások; név szerinti reviewer, időzónás review-idő és döntési hivatkozás; teljes eval-futtatás, defectek és retest.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta",
      "evidence_label": "AI-használati szabályzat célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/03_POLICIES",
      "formal_effect": false,
      "gate": "AI-policy kihirdetése, külső AI-környezet használata vagy A-031 lezárása előtt.",
      "id": "DEF-011",
      "owner": "Pásztor András",
      "process_state": "A deny-by-default AI-policy, acknowledgement-, környezetengedély- és redakciós sablon elkészült.",
      "related": "A-031; D-017; config/ai_usage_policy.json",
      "required": "Lángi Zoltán biztonsági és Dr. Berta Brigitta jogi G2 review-ja; engedélyezett AI-környezet vagy local-only döntés; vállalati adatminősítési illesztés; policy verzió/hash és kihirdetési rekord; felhasználói acknowledgement-ek védett URI-ja/hash-e; felülvizsgálati ciklus és incidensjelzési csatorna.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Repeat-audit és időszakos jelentések célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/10_QUARTERLY_REPORTS",
      "formal_effect": false,
      "gate": "Bármely külső auditor-kommunikáció, beszerzés vagy az A-030 lezárása előtt.",
      "id": "DEF-012",
      "owner": "Pásztor András",
      "process_state": "A D-021 szerinti 2027-09-30-i baseline-hoz elkészült a proposal-only readiness-, mock-audit- és javítási roadmap.",
      "related": "A-030; D-021; data/repeat_audit_roadmap.json",
      "required": "A köztes dátumok és a mock audit scope-jának G4 review-ja; az A-034 scope-döntés beépítése; auditor esetén entitlement/kapacitás/B0/pilot/acceptance/purchase-trigger/halasztási kockázat csomag és G5 döntés; jóváhagyott naptárbejegyzések, mock jegyzőkönyv, finding- és remediation-evidencia védett URI-val, hash-sel és reviewer-rekorddal.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Negyedéves jelentések célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/10_QUARTERLY_REPORTS",
      "formal_effect": false,
      "gate": "Az első negyedéves beszámoló véglegesítése és minden külső benyújtás előtt.",
      "id": "DEF-013",
      "owner": "Pásztor András",
      "process_state": "A negyedéves riportnaptár, adat-cut-off workflow, dry run és sablon proposal-only formában elkészült; a 2026-09-24 dátum csak tervezési horgony.",
      "related": "A-008; A-006; A-007; data/quarterly_reporting_plan.json",
      "required": "A tényleges cselekvésiterv-benyújtási dátum, benyújtási/átvételi evidencia és reviewer; a naptár újraszámítása; jogi vagy IBF G2 review az ütemezési logikáról és formáról; Lángi Zoltán G4 jóváhagyása; naptárbejegyzések; dry-run jegyzőkönyv; riportonként forráscsomag, approval, benyújtási és átvételi evidencia védett URI-val és SHA-256-tal.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Cselekvési terv és jóváhagyások célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE",
      "formal_effect": false,
      "gate": "A cselekvési terv aláírása, véglegesítése és külső benyújtása előtt.",
      "id": "DEF-014",
      "owner": "Pásztor András",
      "process_state": "A 42 akciós tervezet 19/19 követelménycsaládot lefed, 0 hard hibával; strukturálisan review-ra kész, de G4 benyújtásra nem kész.",
      "related": "A-006; A-007; generated/action_plan.md; data/action_plan_submission_checklist.json",
      "required": "A-004 finding-minta és A-005 mapping G1 review; A-036 formális RACI-evidencia; A-008/A-022–A-028/A-042 fix dátuma vagy jóváhagyott indoklása; A-022/A-024/A-026/A-027/A-028 read-only forrásvalidációja; G2 jogi/IBF review; Lángi Zoltán G4 jóváhagyása; aláírt végleges verzió, jogosult benyújtó, védett URI, SHA-256, benyújtási és átvételi igazolás.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Belső portál műszaki evidenciáinak célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL",
      "formal_effect": false,
      "gate": "Portálfejlesztés éles adatkapcsolata, hálózati megnyitása vagy deployja előtt.",
      "id": "DEF-015",
      "owner": "Pásztor András",
      "process_state": "A helyi hálózaton, böngészőből elérhető belső portál jóváhagyott célfelület.",
      "related": "D-028; A-042; LOCAL_PORTAL_BASELINE.md",
      "required": "Belső szerver és üzemeltető; hálózati zóna; hitelesítés és szerepkörök; TLS/tanúsítvány; védett evidenciatár-kapcsolat; backup/restore; naplómegőrzés; adatminősítés; G2 architektúra-review; G3 élesítési döntés; pilot, jogosultság- és kill-switch teszt evidenciája.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "A-017 – backup és helyreállítás dokumentumai",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/08_BACKUP_RESTORE/A-017",
      "formal_effect": false,
      "gate": "Bármely restore-művelet előtt és az A-017 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-016",
      "owner": "Pásztor András",
      "process_state": "Az öt EIR backup/RPO/RTO váza és az izolált restore-teszt proposal elkészült; a végrehajtás G3-ig blokkolt.",
      "related": "A-017; data/backup_restore_plan.json; templates/restore_test_record.md",
      "required": "Öt EIR üzleti ownere, rendszerlistája, RPO/RTO-ja, mentési módja, retentionje és elkülönített másolata; mintarendszer és izolált cél; adatminősítés/G2; üzleti és rendszerowner, change approver G3 döntése; backup- és restore-job log, visszaállított objektum, integritás, eltelt idő, RPO/RTO összevetés, cleanup rekord, védett URI, SHA-256 és emberi review.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Fizikai biztonsági evidenciák célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/05_PHYSICAL",
      "formal_effect": false,
      "gate": "A helyszíni bejárás előtt, valamint az A-020 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-017",
      "owner": "Pásztor András; Német Péter",
      "process_state": "A kilenc kontrollos checklist, gap-register és fotó/adatkezelési korlát elkészült; a bejárás NOT_PERFORMED, minden kontroll NOT_ASSESSED.",
      "related": "A-020; data/physical_security_walkthrough.json; templates/physical_walkthrough_record.md",
      "required": "Német Péter és az IBF által jóváhagyott telephely/védett terület scope; időpont és résztvevők; fotó- és személyesadat-kezelési G2 döntés; kontrollonként tényleges megfigyelés, megfigyelő, időzónás időpont és védett evidencia; gapenként kockázat, B0 gyorsjavítás, intézkedés, felelős, céldátum és review; eredeti fotók/listák/jegyzőkönyvek védett URI-ja és SHA-256 metaadata.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "A-022 – technikai baseline dokumentum",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-KOZOS/A-022/EV-VC-014__A-022__INFRASTRUKTURA__TECHNICAL-BASELINE__v01__20260720.pdf",
      "formal_effect": false,
      "gate": "Bármely éles adatgyűjtés előtt, valamint az A-022 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-018",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső owner",
      "process_state": "Az öt scope-os read-only health snapshot módszertan elkészült; az SRC-004 RAID-, tárhely- és backup-állításai továbbra is unverified_internal; adatgyűjtés nem történt.",
      "related": "A-022; data/infrastructure_health_snapshot_plan.json; templates/infrastructure_health_snapshot_record.md",
      "required": "Belső metALCOM infrastruktúra-kontrollgazda; pontos host/VM/storage/RAID/backup célpontlista és adatminősítés; Kollár Csabával platformonként jóváhagyott read-only módszer; legkisebb jogosultság, időablak és stop condition; G2/G3 írásos jóváhagyás; időbélyeges export, gyűjtő és módszer; védett URI és SHA-256; observationönként emberi review; az eredeti állítás emberi minősítése; igazolt sürgős kockázat esetén külön A-023/G3 döntés. Secret, célpontlista és nyers export nem kerülhet Gitbe.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; jogosult költségkeret-gazda",
      "evidence_label": "A-029 – licenc- és entitlement-dokumentum",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-KOZOS/A-029/EV-VC-019__A-029__INFRASTRUKTURA__LICENSE-ENTITLEMENT-RECORD__v01__20260720.pdf",
      "formal_effect": false,
      "gate": "Bármely licenc-/supportmegfelelőségi állítás, fizetős javaslat, A-016/A-024/A-028 döntés vagy az A-029 DONE státusza előtt.",
      "id": "DEF-019",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső owner és szerződésgazda",
      "process_state": "A hat kategóriás entitlement/support mátrix és a költségkapu-validáció elkészült; minden tényleges jogosultság, használat és lifecycle státusz UNKNOWN_PENDING_EVIDENCE.",
      "related": "A-029; data/license_entitlement_plan.json; templates/license_entitlement_review_record.md",
      "required": "Belső metALCOM infrastruktúra-kontrollgazda és alkalmazásgazdák; szerződés/beszerzés gazda; szerződés-, számla-, SAM- és gyártói portál-export védett URI-val/SHA-256-tal; jóváhagyott read-only deployment/usage összesítés; hivatalos gyártói lifecycle-forrás és ellenőrzési dátum; kategóriánként entitlement/support minősítés és reviewer; eltérésenként B0/no-action döntés vagy meglévő entitlement, kapacitás, B0 alternatíva, pilot, mérhető acceptance criterion, purchase trigger és halasztási kockázat; B1–B3 esetén G5 döntés. Licenckulcs, személyes lista, szerződés és nyers export nem kerülhet Gitbe.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Belső portál és pilot műszaki célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL",
      "formal_effect": false,
      "gate": "Bármely valós adatkapcsolat, belső hálózati közzététel, hitelesítés vagy éles portáldeploy előtt.",
      "id": "DEF-020",
      "owner": "Pásztor András",
      "process_state": "A helyi, böngészős célállapot dependency-free prezentációs prototípusa elkészült; kizárólag statikus, nem érzékeny repository-metaadatot jelenít meg, műveletei szimulációk.",
      "related": "D-028; A-042; portal_demo/; LOCAL_PORTAL_BASELINE.md",
      "required": "Prezentáció utáni stakeholder-visszajelzés és elfogadott funkcionális scope; belső szerver/üzemeltető; hitelesítés, szerepkörök, hálózati zóna és TLS; védett evidenciatár-integráció; adatminősítés, naplózás, backup/restore és kill switch; G2 architektúra-review, G3 pilot/deploy döntés; jogosultsági, negatív, helyreállítási és leállítási teszt evidenciája.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "Naplózási és felügyeleti evidenciák célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-KOZOS",
      "formal_effect": false,
      "gate": "Bármely valós logkapcsolat vagy konfiguráció előtt, valamint az A-018 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-021",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső owner és forrásgazdák",
      "process_state": "A tíz forráskategóriás, három retention osztályos, öt hibariasztásos és napi/heti review-keret elkészült; konkrét loggyűjtés, riasztásteszt és review-run nem történt.",
      "related": "A-018; data/logging_monitoring_plan.json; templates/log_review_record.md",
      "required": "Belső infrastruktúra-/incidenskezelési kontrollgazda és forrásgazdák; kategóriánként konkrét rendszer, EIR-scope, jóváhagyott read-only módszer, adatminősítés és mintalog védett URI/SHA-256; G1 baseline-review, érzékeny loghoz G2, éles collector/alert konfigurációhoz G3; retention osztályonként jogalap, napérték, kapacitás és reviewer; öt alert szabálya, címzettje, nem destruktív tesztje és evidenciája; napi/heti reviewer, helyettes, escalation és első review-run ticket/exception/review rekorddal. Nyers log és secret nem kerülhet Gitbe.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; jogosult G3 approver",
      "evidence_label": "Karbantartási és változáskezelési evidenciák célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-KOZOS",
      "formal_effect": false,
      "gate": "Bármely éles patch, karbantartás vagy változtatás előtt, valamint az A-019 review-ra kész vagy DONE státusza előtt.",
      "id": "DEF-022",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső ownerek",
      "process_state": "A négy workstream, tízlépéses workflow, naptár-, change-, rollback- és kivételséma elkészült; konkrét scope, naptár vagy végrehajtás nincs.",
      "related": "A-019; data/maintenance_change_plan.json; templates/maintenance_change_record.md",
      "required": "Belső metALCOM rendszer-/szolgáltatásgazdák és változáskezelési approver; workstreamenként scope, owner, cadence és trigger; jóváhagyott baseline-, patch- és maintenance-naptár; első kontrollált minta change ticket kockázat/hatás, owner- és G3 döntés, backup proof, rollback terv és teszt/proof, időablak, értesítés, pre/post validáció, védett URI/SHA-256 és reviewer mellett; első lejáratos exception minta kompenzáló kontrollal; távoli karbantartás esetén külön hozzáférési/felügyeleti review. Secret és nyers konfiguráció Gitbe nem kerülhet.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; szükség esetén Dr. Berta Brigitta",
      "evidence_label": "A-021 – beszállítói dokumentumok mappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/09_SUPPLIERS/A-021",
      "formal_effect": false,
      "gate": "Bármely beszállítói végleges minősítés, megkeresés, szerződésmódosítás vagy az A-021 review-ra kész/DONE állapota előtt.",
      "id": "DEF-023",
      "owner": "Pásztor András; kijelölendő ellátásilánc-/beszerzési felelős és szerződésgazdák",
      "process_state": "A 19.1/19.4 kontrollhoz elkészült a hatdimenziós kritikalitás, tíz szerződéses kontroll, kockázati döntés és review-naptár proposal-only sémája; valós beszállítói adat nincs benne.",
      "related": "A-021; data/supplier_risk_plan.json; templates/supplier_risk_review_record.md",
      "required": "Kijelölt belső ellátásilánc-/beszerzési felelős és szerződésgazdák; jóváhagyott beszállítói és szerződéslista védett tárban; szolgáltatás/EIR/owner kapcsolatok; dimenziónkénti indokolt pontozás; kontrollonként szerződéses vagy kérdőív-evidencia és gap; hiányonként emberi treatment döntés, felelős és határidő; kritikalitás- és változástrigger-alapú review-naptár; G1 reviewer-rekord. Jogi értelmezéshez Dr. Berta Brigitta review-ja szükséges. Beszállítónév, szerződés, kapcsolattartó és ár Gitbe nem kerülhet.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; jogosult G3 approver",
      "evidence_label": "Exchange-függőségi evidenciák célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-IRODAI",
      "formal_effect": false,
      "gate": "Bármely éles lekérdezés, tesztüzenet, connector/DNS/routing változás vagy migrációs döntés, valamint az A-025 review-ra kész/DONE állapota előtt.",
      "id": "DEF-024",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső levelezési owner és alkalmazásgazdák",
      "process_state": "Elkészült a stratégiai/nem igazolt forráshelyzetet megőrző read-only felderítési, SMTP dependency-, hétszcenáriós teszt- és rollback-séma; éles lekérdezés, teszt vagy migráció nem történt.",
      "related": "A-025; data/exchange_dependency_plan.json; templates/exchange_dependency_record.md",
      "required": "Belső levelezési/infrastruktúra-kontrollgazda; pontos Exchange/SMTP scope és adatminősítés; Kollár Csabával jóváhagyott legkisebb jogosultságú read-only exportmódszer; message tracking minta, connector-, relay-, auth-, hálózati/DNS-export védett URI/SHA-256-tal; alkalmazás-, eszköz-, technikai és üzleti owner sign-off; dependency rekordok; tesztenként kontrollált címzett/scope, owner- és G3 approval, baseline, eredmény, stop condition és rollback proof; G1 review; külön migrációs célmodell és döntés. Valós cím, IP, credential, konfiguráció és nyers log Gitbe nem kerülhet.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "evidence_label": "Legacy megőrzési evidenciák célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-IRODAI",
      "formal_effect": false,
      "gate": "Bármely éles lekérdezés/export, restore/import, törlés, alkalmazásleállítás vagy migráció, valamint az A-026 review-ra kész/DONE állapota előtt.",
      "id": "DEF-025",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő üzleti-, adat-, alkalmazás- és belső rendszerowner",
      "process_state": "Elkészült az SRC-004 nem igazolt státuszát megőrző jogi retention-, adatleltár-, read-only export-, izolált restore/read-test és migrációs döntési séma; rendszerkapcsolat vagy végrehajtás nem történt.",
      "related": "A-026; data/legacy_retention_plan.json; templates/legacy_retention_review_record.md",
      "required": "Dr. Berta Brigitta jogi állásfoglalása jogalapokról, megőrzési időkről, legal holdról és selejtezési korlátokról; üzleti/adat-/alkalmazásowner és belső rendszerowner; jóváhagyott adatkategória- és függőségi lista; Kollár Csabával jóváhagyott read-only exportmódszer; adatszótár, rekorddarab, időtartomány, formátum, teljesség, kivételnapló, védett URI/SHA-256; izolált restore/read teszt owner- és G3 approval mellett; olvashatóság, integritás, idő, cleanup és reviewer; külön retention/migration/disposal döntés. Nyers export, személyes adat, üzleti dokumentum és credential Gitbe nem kerülhet.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; jogosult G3/G5 approver",
      "evidence_label": "RDS-szeparációs evidenciák célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-IRODAI",
      "formal_effect": false,
      "gate": "Bármely éles lekérdezés, user/session/workload mozgatás, konfigurációváltozás, konszolidáció vagy vásárlás, valamint az A-027 review-ra kész/DONE állapota előtt.",
      "id": "DEF-026",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső RDS-, alkalmazás- és üzleti ownerek",
      "process_state": "Elkészült az SRC-004 nem igazolt státuszát megőrző hatdomaines RDS-assessment, öttesztes, költségkapus és döntési séma; a jelenlegi szeparáció marad, éles lekérdezés vagy konszolidáció nem történt.",
      "related": "A-027; data/rds_separation_plan.json; templates/rds_separation_review_record.md",
      "required": "Belső RDS-/infrastruktúra-owner, Kollár Csaba, alkalmazás- és üzleti ownerek; jóváhagyott read-only user/CAL-, session-, workload-, teljesítmény-, konfigurációs és backup-export védett URI/SHA-256-tal; banki/könyvelési kulcs-/eszköz-scope metaadata secret nélkül; A-029 licencreview; szeparációs kockázat, continuity és rollback; öt kontrollált teszt owner- és G3 approval mellett; G1 review; fizetős eltérésnél hét költséginput és G5; külön konszolidációs vagy szeparációfenntartási döntés. Felhasználólista, banki/könyvelési adat, secret és kulcsanyag Gitbe nem kerülhet.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; jogosult G3/G5 approver",
      "evidence_label": "Közös műszaki munkacsomagok célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL/EIR-KOZOS",
      "formal_effect": false,
      "gate": "Bármely éles lekérdezés, scan, változtatás, konszolidáció, VM-mozgatás vagy vásárlás, valamint az érintett akció review-ra kész/DONE státusza előtt.",
      "id": "DEF-027",
      "owner": "Pásztor András; Kollár Csaba; kijelölendő belső rendszer-/EIR-ownerek",
      "process_state": "Elkészült az öt technikai akció egységes, proposal-only döntési csomagja; sem adatgyűjtés, scan, teszt, változtatás, vásárlás, sem külső művelet nem történt.",
      "related": "A-023; A-024; A-028; A-033; A-034; data/technical_work_packages.json",
      "required": "A-022/A-029 elfogadott inputok; belső rendszer- és EIR-ownerek; pontos scope; jóváhagyott read-only exportok védett URI/SHA-256-tal; VM/AD/DNS/DHCP dependency-, HA-, kapacitás-, backup-, licenc- és rollback-review; sérülékenységvizsgálati mód és SLA; két nem auditált EIR definíciója, assetje és függősége; G1/G2 review, minden teszt/változtatás előtt G3, fizetős döntés előtt hét költséginput és G5; végrehajtási és retest evidencia.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3/G5 approver",
      "evidence_label": "Működési kontrollok központi evidenciatára",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE",
      "formal_effect": false,
      "gate": "Bármely kihirdetés, gyakorlat, képzés, éles fiókművelet, MFA-pilot vagy vásárlás, valamint az érintett akció review-ra kész/DONE státusza előtt.",
      "id": "DEF-028",
      "owner": "Pásztor András; Kóczán Mónika; Koncz Erika; Kollár Csaba; kijelölendő belső kontroll-/alkalmazásgazdák",
      "process_state": "Elkészült a hat szervezeti/működési akció proposal-only regisztere és felelősségi útmutatója; működési vagy technikai végrehajtás nem történt.",
      "related": "A-009; A-010; A-013; A-014; A-015; A-016; data/operational_control_work_packages.json",
      "required": "Szabályzatgazda és review-naptár; kontrollgazdai kapacitásigény és költségkeret-review; belső incidenskontroll-gazda, kontaktlista, jogi/IBF review és tabletop; HR/IBF szerepkör-alapú képzési scope és végrehajtási evidencia; jóváhagyott read-only account/access export, alkalmazásgazdai döntés, külön G3 change és post-check; A-029 licencreview, privilegizált MFA-scope, pilot, rollback, G3 és szükség esetén G5. Személyes lista, incidensadat, credential és védett dokumentum csak evidenciatárban kezelhető.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult benyújtó",
      "evidence_label": "Projektirányítási evidenciák mappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE",
      "formal_effect": false,
      "gate": "Bármely fennmaradó kapcsolódó kontroll elfogadása vagy külső benyújtás, valamint az érintett nyitott akció DONE státusza előtt.",
      "id": "DEF-029",
      "owner": "Pásztor András; Kóczán Mónika",
      "process_state": "Elkészült az öt irányítási akció bizonyítéklánc-regisztere. Az A-002 G2/G4 rekordja a D-031/EV-GOV-001 alapján elfogadott, ezért az A-002 és a DEF-001 lezárt; a többi irányítási evidencia továbbra is pótlandó.",
      "related": "A-001; A-007; A-035; A-036; data/governance_work_packages.json",
      "required": "Formális IBF-kijelölés és alkalmassági/jogi review; SRC-008 reviewer-rekordja; aláírt RACI, vezetői szponzor és belső infrastruktúra-/incidenskontroll-gazda; végleges terv G1/G2/G4 review-ja, jogosult emberi aláírás és benyújtás, védett végleges csomag SHA-256-tal, valamint átvételi igazolás.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; jogosult G5 approver",
      "evidence_label": "Szabályzatok és kontrollbaseline-ok célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/03_POLICIES",
      "formal_effect": false,
      "gate": "Hatálybalépés, kontrollműködés elfogadása, beszerzési döntés vagy az érintett akció DONE státusza előtt.",
      "id": "DEF-030",
      "owner": "Pásztor András; Koncz Erika; Dr. Berta Brigitta; kijelölendő dokumentum-, EIR-, kockázat-, beszerzési és szerződésgazdák",
      "process_state": "Elkészült az öt szabályozási terület kötelező minimumtartalma és proposal-only kitöltési kerete; hatályos szabályzat vagy működési evidencia nem jött létre.",
      "related": "A-037; A-038; A-039; A-040; A-041; data/policy_baseline_work_packages.json; templates/control_policy_baseline.md",
      "required": "Dokumentumgazdák/helyettesek és scope; A-037 médialeltár, törlési módszer és mintajegyzőkönyv; A-038 HR/jogi/IT JML és visszavonási SLA; A-039 vezetői kockázati étvágy, skála, gazdák és treatment review; A-040 három auditált EIR kitöltött, verziózott SSP-je owner/IBF review-val; A-041 beszerzési/szerződésgazda, kitöltött checklist, klauzulák, support/EOL és kivétel/G5; mindegyikhez jóváhagyás, kihirdetés, megismerés, védett URI/SHA-256 és működési mintavétel.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "evidence_label": "Folyamatos auditfelkészültségi agent célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL",
      "formal_effect": false,
      "gate": "Bármely valós forrás, érzékeny adat, belső hálózati szolgáltatás vagy éles portálintegráció előtt, valamint az A-042 DONE státusza előtt.",
      "id": "DEF-031",
      "owner": "Pásztor András; kijelölendő agent-/portálüzemeltető és forrásgazdák",
      "process_state": "Elkészült a hálózat nélküli, allowlistelt szintetikus metaadaton futó proposal/approval-queue/auditlog pilot, automatikus negatív és kill-switch tesztekkel; éles kapcsolat nincs.",
      "related": "A-042; config/continuous_assurance_pilot.json; generated/continuous_assurance_pilot_output.json; CONTINUOUS_ASSURANCE_AGENT_PILOT.md",
      "required": "Funkcionális scope és forrásgazdák; redaktált, emberileg elfogadott gold-case készlet; téves riasztási és tényleges emberimunka-csökkentési baseline/pilot mérés; belső portál és védett evidenciatár API-ja; szerver, üzemeltető, hitelesítés, RBAC, TLS, adatminősítés, retention, backup/restore és monitoring; G1 funkcionális, G2 biztonsági/jogi és G3 éles adatkapcsolati/pilot döntés; jogosultsági, negatív, helyreállítási és ember által tanúsított kill-switch próba.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "evidence_label": "Portál MVP műszaki evidenciáinak célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL",
      "formal_effect": false,
      "gate": "Bármely nem loopback kötés, többfelhasználós használat, valós Microsoft-bejelentkezés, hitelesített döntés, tokenkérés, fájlfeltöltés, védett tár- vagy éles adatkapcsolat és belső hálózati pilot előtt.",
      "id": "DEF-032",
      "owner": "Pásztor András; kijelölendő portálüzemeltető",
      "process_state": "Elkészült a loopback-only helyi portál-MVP, a read-only SharePoint-linknézet, az élő Graph-olvasás readiness-csomagja és a vállalati Entra + NIS2 site read-probe alapú auth/RBAC policy-prototípus. Valós hitelesítés, hálózati publikálás, tokenkérés és éles integráció nincs.",
      "related": "D-028; D-029; A-042; config/portal_mvp.json; config/sharepoint_graph_readiness.json; config/portal_auth_policy.json; SHAREPOINT_GRAPH_DECISION_PACKAGE.md; PORTAL_AUTH_DECISION_PACKAGE.md; portal_demo/; src/nis2_harness/portal.py; src/nis2_harness/portal_server.py",
      "required": "Kijelölt belső szerver és üzemeltető; jóváhagyott hálózati zóna; valós tenant/client ID és Entra app registration; authorization code + PKCE és jóváhagyott tokenkönyvtár; HTTPS redirect URI, Secure/HttpOnly/SameSite session, CSRF és kijelentkezés; delegált NIS2 site read-probe; név szerinti vagy jóváhagyott forrású szerepkör-hozzárendelések; hozzáférés-visszavonás és vendégkezelés; auditlog-retention, backup/restore, monitoring és incidensfolyamat; a Graph mezőtérkép, frissességi küszöb, site/list azonosító és szolgáltatásazonosság; Sites.Selected read grant nem éles technikai próbája; credential védett tárhivatkozása; a hitelesített jóváhagyási rekord és a formális workflow külön terve; G1 funkcionális/szerepkör-, G2 biztonsági/jogi architektúra-review, G3 pilot/deploy döntés; pozitív, negatív, session-, CSRF-, szerepköremelés-, visszavonási, helyreállítási és ember által tanúsított kill-switch teszt.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "evidence_label": "H-002 agent pilot műszaki evidenciáinak célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL",
      "formal_effect": false,
      "gate": "Bármely valós vagy érzékeny forrás csatlakoztatása, tokenkérés, ütemezett futás, többfelhasználós portálintegráció vagy az A-032/A-042 lezárása előtt.",
      "id": "DEF-033",
      "owner": "Pásztor András; kijelölendő agent-üzemeltető és forrásgazdák",
      "process_state": "Elkészült a SHA-256-tal rögzített local-only agent job és az első valós forrásjelölt, a SharePoint-feladatlista élő olvasásának hálózatmentes readiness-csomagja. A szintetikus 10/10 eredmény nem emberi gold-case elfogadás; tokenkérés és élő Graph-kapcsolat nincs.",
      "related": "H-002; A-032; A-042; config/h002_agent_pilot.json; config/sharepoint_graph_readiness.json; SHAREPOINT_GRAPH_DECISION_PACKAGE.md; generated/h002_agent_pilot_output.json",
      "required": "A tíz A-032 gold case tényleges kitöltése és emberi jóváhagyása; false-positive/false-negative review; valós emberimunka-baseline és pilotmérés; adatminősítés, forrásgazdák, engedélyezett read-only forráslista és jogosultság; a Graph-mezőtérkép és frissességi küszöb G1 jóváhagyása; a Sites.Selected read grant, credential-kezelés, retention és naplózás G2 jóváhagyása; az app registration, site/list grant és pilot G3 döntése; ember által tanúsított kill-switch és helyreállítási próba; védett futási evidencia URI/SHA-256 és reviewer-rekord.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; szükség szerint Dr. Berta Brigitta",
      "evidence_label": "Váraljai Csabától átvett forrásdokumentumok",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/Dokumentumok%20V%C3%A1raljai%20Csab%C3%A1t%C3%B3l",
      "formal_effect": false,
      "gate": "Bármely jelölt SUBMITTED/ACCEPTED státusza vagy kapcsolódó akció review-ra kész/DONE állapota előtt.",
      "id": "DEF-034",
      "owner": "Pásztor András; érintett dokumentum-, EIR-, HR-, beszállítói és infrastruktúra-gazdák",
      "process_state": "A 182 állományos helyi hash-jegyzék elkészült; a 19 magas értékű jelölt névszabály szerinti másolata 2026-07-23-án létrejött a SharePoint NIS2_EVIDENCE ágában, valós URI-val és egyező visszaolvasott fájlmérettel. A rekordok DRAFT állapotúak, egyetlen tartalom sem lett elfogadva.",
      "related": "INTAKE-VC-20260720; DOCUMENT_INTAKE_REVIEW_2026-07-20.md; data/evidence_register.csv",
      "required": "Készítő- és forrásgazda-megerősítés; bizalmassági/retention G2 döntés; EIR- és kontrollscope; szakmai G1 review; szabályzatok verzió-, aláírás-, kihirdetés- és megismerési ellenőrzése; helyőrzős tervek javítása; történeti képernyőképek frissítése; személyügyi és műszaki minták célhoz kötött minimalizált kezelése; rekordonként reviewer-idő és döntési hivatkozás.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; szükség szerint Dr. Berta Brigitta",
      "evidence_label": "NIS2 központi evidenciatár",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE",
      "formal_effect": false,
      "gate": "A SharePoint evidenciatár végleges jóváhagyása, bármely rekord SUBMITTED/ACCEPTED státusza és a kameravizsgálati irat felhasználása előtt.",
      "id": "DEF-035",
      "owner": "Pásztor András; kijelölendő SharePoint-/backup-owner",
      "process_state": "A SharePoint-kapcsolat olvasási és írási próbája sikeres; a célmappastruktúra és 19 DRAFT másolat létrejött. A 2026-07-20-i helyi baseline-hoz képest talált öt forráseltérés 2026-07-23-án tételesen besorolásra került. Az SRC-001 és SRC-008 rendezett példánya, valamint az SRC-002 történeti archívuma létrejött; a másik három eltérés nem került automatikusan az evidenciatárba.",
      "related": "EVIDENCE_STORAGE.md; NIS2_EVIDENCE; data/evidence_register.csv; SHAREPOINT_SOURCE_DELTA_REVIEW_2026-07-23.md",
      "required": "Store owner és backup owner név szerinti kijelölése; mappaszintű least-privilege jogosultság és külső megosztás review; verziózás/auditnapló/elfogadott fájl felülírásának tiltása; backup és restore-próba; retention és bizalmassági taxonómia; negyedéves review-gazda és ütem; a személyes adatokat tartalmazó kameravizsgálati irat célhoz kötöttségének, adatminimalizálásának és hozzáférésének G2 döntése.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán",
      "evidence_label": "SRC-009 kontrollkatalógus G1 review célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-005/SRC-009",
      "formal_effect": false,
      "gate": "A katalógus APPROVED minősítése, EIR-re alkalmazandó kontrollkör automatikus kiválasztása, rendszerbiztonsági terv jóváhagyása vagy megfelelőségi állítás előtt.",
      "id": "DEF-036",
      "owner": "Pásztor András; érintett EIR-ownerek",
      "process_state": "A 7/2024. MK rendelethez kapcsolódó Excelből 914 kontroll és 1878 részletes követelmény determinisztikus, PROPOSED nyilvántartása készült; a jelenlegi 164 használt kontrollhivatkozás teljesen lefedett. A hivatalos 7/2024. és 18/2024. MK forrásokkal végzett előellenőrzés 914/914 azonosító-, cím- és osztályjelölés-egyezést mutatott; 907 követelményszöveg normalizáltan egyezik. A célzott második ellenőrzés 2 kisebb és 5 tartalmi eltérést azonosított: a 2.17.2.4 pontból hiányzó tagadást, a módosított 5.3/5.4 szöveget, a 9.24.2 hiányát és a 16.66.5 többletét külön kiemeli. A SharePoint-listaelem és az elkülönített A-005/SRC-009 mappa létrejött. A feltöltött XLSX 977503 bájt, míg a kanonikus helyi forrás 970666 bájt, ezért byteazonossága nincs igazolva.",
      "related": "A-005; A-011; A-040; SRC-009; SRC-010; data/control_catalog.csv; data/control_requirements.csv; data/official_control_baseline.csv; data/control_catalog_legal_comparison.csv; CONTROL_CATALOG_G1_REVIEW.md; CONTROL_CATALOG_TARGETED_G1_DECISION_2026-07-28.md; EIR_SECURITY_CLASSIFICATION_QUESTIONNAIRE.md",
      "required": "A hét megjelölt kontroll célzott G1 ellenőrzése és döntési lapja; a SharePoint-példány kézi cseréje és visszaolvasott SHA-256 ellenőrzése; store-owner; eredet, verzió és felhasználási jog; reviewer, időzónás review-idő és döntési hivatkozás; az öt EIR kérdőíves hatáselemzése, Alap/Jelentős/Magas besorolásának emberi jóváhagyása és kontrolltestreszabási döntése.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; az akció szerinti G1–G5 reviewer",
      "evidence_label": "Lejárt akciók státusz- és határidő-egyeztetésének célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE",
      "formal_effect": false,
      "gate": "Bármely érintett akció státuszának vagy céldátumának módosítása, evidenciaelfogadása vagy lezárása előtt.",
      "id": "DEF-037",
      "owner": "Pásztor András",
      "process_state": "Az A-002 D-031/EV-GOV-001 szerinti lezárása után a 2026-07-29-i állapot szerint 16 nem terminális akció nyilvántartott céldátuma lejárt. Elkészült a snapshot-mezőket védő, proposal-only egyeztetési nyilvántartás és emberi munkalap; minden rekord PENDING_HUMAN. A helyi portál append-only, hitelesítetlen rögzítői státusztervezetet tud fogadni; a hash-ellenőrzött review-, döntési-, változásjavaslati, stale-safe preflight- és pre/post hash utóellenőrzési lánc elkészült. A baseline még 0 tervezetet tartalmaz. Státusz vagy céldátum nem változott.",
      "related": "16 lejárt akció; data/deadline_reconciliation.json; DEADLINE_RECONCILIATION_FORM_2026-07-29.md",
      "required": "Akciónként tényleges állapotleírás és outcome; reviewer, időzónás review-idő és védett döntési hivatkozás; elkészült tételnél védett evidencia URI/SHA-256 és külön evidencia-review; újraütemezésnél indokolt, jövőbeli céldátum és jogosult jóváhagyás; az elfogadott döntések kézi, preflighttal és utóellenőrzéssel kontrollált átvezetése az actions.csv fájlba.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; jogosult G3 approver",
      "evidence_label": "Többfelhasználós portálpilot műszaki és UAT evidenciáinak célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/04_TECHNICAL",
      "formal_effect": false,
      "gate": "Bármely nem loopback használat, többfelhasználós pilot, valós bejelentkezés, SharePoint-feltöltés vagy szervertelepítés előtt.",
      "id": "DEF-038",
      "owner": "Pásztor András; kijelölendő portálüzemeltető",
      "process_state": "Elkészült a többfelhasználós pilot tranzakciós SQLite-tárolása, párhuzamos állapotvédelme, csatolmány- és hash-kezelése, korábbi JSONL-adatok egyszeri átvétele, ellenőrzött mentése, fail-closed konfigurációja, indító/mentő segédje és UAT-terve. A hálózati publikálás, hitelesítés, szerepkör-kikényszerítés és SharePoint-írás kikapcsolt.",
      "related": "D-029; D-032; D-033; D-034; config/multiuser_pilot.json; MULTIUSER_PILOT_DEPLOYMENT.md; PILOT_UAT_CHECKLIST.md",
      "required": "Belső Windows szerver, üzemeltető, DNS, hálózati zóna, HTTPS gateway és tanúsítvány; Entra tenant/client/redirect adatok és támogatott auth-könyvtár; Entra object ID alapú, jóváhagyott szerepkiosztás; kiválasztott hatókörű Graph/site/folder grant; secret-store és naplóretention; G1/G2/G3 jóváhagyás; a 16 pontos UAT, mentési és elkülönített visszaállítási próba valós reviewerrel és védett evidenciával.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    },
    {
      "approver": "Lángi Zoltán; Dr. Berta Brigitta; érintett G1/G3/G4 reviewer",
      "evidence_label": "A-043–A-127 szakmai és határidő-jóváhagyásának célmappája",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE",
      "formal_effect": false,
      "gate": "A cselekvési terv végleges aláírása, a javasolt dátumok kanonikus átvezetése, bármely éles változtatás vagy az A-043–A-127 akciók DONE állapota előtt.",
      "id": "DEF-039",
      "owner": "Pásztor András; javasolt kontrollgazdák",
      "process_state": "Mind a 85 lefedettségpótló akcióhoz elkészült a kontrollspecifikus végrehajtási checklist, mérhető elfogadási feltétel, evidenciaelvárás, javasolt kontrollgazda/közreműködő és proposal-only ütemezés. A kanonikus céldátumok és jóváhagyási státuszok nem változtak.",
      "related": "A-043–A-127; data/action_execution_details.csv; COVERAGE_MATURATION_REVIEW_2026-08-19.md",
      "required": "A 85 tétel forrásoldalas G1 szakmai review-ja; a TBD belső kontrollgazdák név szerinti kijelölése; az SRC-009 támpontok alkalmazhatósági döntése; a javasolt 2026-09-11-i G1 review és 2027-01-31/2027-04-30/2027-06-30 teljesítési hullámok G2/G4 jóváhagyása; az 52 technikai tétel G3 review-ja; helyi evidenciajelöltek regisztrálása, védett URI/SHA-256 és reviewer-döntés; akciónként tényleges végrehajtás és elfogadott evidencia.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
      "write_back_allowed": false
    }
  ],
  "summary": {
    "accepted_risks": 1,
    "action_plan_deadline": "2026-09-24",
    "catalog_controls": 914,
    "catalog_pending_checks": 6,
    "catalog_pending_eir_classifications": 5,
    "catalog_review_status": "PENDING_G1_REVIEW",
    "days_to_deadline": 36,
    "deadline_reconciliation_pending": 16,
    "due_within_30_days": 3,
    "due_within_7_days": 6,
    "gate_counts": {
      "G1": 97,
      "G2": 99,
      "G3": 63,
      "G4": 4,
      "G5": 6
    },
    "human_task_pilot_count": 5,
    "human_task_ready_for_review": 0,
    "in_progress": 7,
    "linked_human_tasks": 39,
    "new_actions": 119,
    "open_human_tasks": 37,
    "overdue_actions": 19,
    "p0_actions": 76,
    "priority_counts": {
      "P0": 76,
      "P1": 41,
      "P2": 10
    },
    "repeat_audit_target": "2027-09-30",
    "status_counts": {
      "DONE": 1,
      "IN_PROGRESS": 7,
      "NEW": 119
    },
    "total_actions": 127,
    "undated_actions": 94,
    "unlinked_human_tasks": 0
  }
};
