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
      "control_details": [],
      "control_refs": [],
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
      "control_details": [],
      "control_refs": [],
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
      "control_details": [],
      "control_refs": [],
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
  "catalog_review": {
    "deferred_task_id": "DEF-036",
    "formal_effect": false,
    "pending_checks": 6,
    "pending_eir_classifications": 5,
    "protected_folder_uri": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-005/SRC-009",
    "required_gate": "G1_DOMAIN_REVIEW",
    "review_form_uri": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/02_GOVERNANCE/A-005/SRC-009/CONTROL_CATALOG_G1_REVIEW.md",
    "source_ref": "SRC-009",
    "status": "PENDING_G1_REVIEW"
  },
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
      "process_state": "A 7/2024. MK rendelethez kapcsolódó Excelből 914 kontroll és 1878 részletes követelmény determinisztikus, PROPOSED nyilvántartása készült; a jelenlegi 164 használt kontrollhivatkozás teljesen lefedett, a portál akciórészleteiben megjelenik. A tényleges SharePoint-listaelem és az elkülönített védett A-005/SRC-009 mappa létrejött. A SharePoint-kapcsolaton át feltöltött XLSX 977503 bájt, míg a kanonikus helyi forrás 970666 bájt, ezért a feltöltött példány byteazonossága nincs igazolva.",
      "related": "A-005; A-011; A-040; SRC-009; data/control_catalog.csv; data/control_requirements.csv; data/control_catalog_metadata.json; CONTROL_CATALOG_G1_REVIEW.md",
      "required": "A SharePoint-példány kézi cseréje az eredeti fájllal és visszaolvasott SHA-256 ellenőrzése; a store-owner név szerinti rekordja; eredet, verzió, felhasználási jogosultság és a hatályos NJT-szöveggel való tételes vagy elfogadott mintavételes egyezés G1 review-ja; reviewer, időzónás review-idő és döntési hivatkozás; az öt EIR Alap/Jelentős/Magas biztonsági osztályának emberi igazolása és kontrolltestreszabási döntése.",
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
    "as_of": "2026-07-27",
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
  "review_drafts": [],
  "sharepoint_integration": {
    "captured_at": "2026-07-27T20:43:00+02:00",
    "formal_effect": false,
    "linked_task_count": 36,
    "list_url": "https://metalcom.sharepoint.com/sites/NIS2/Lists/NIS2%20emberi%20feladatok/AllItems.aspx",
    "mode": "READ_ONLY_CONNECTOR_SNAPSHOT",
    "network_allowed": false,
    "site_url": "https://metalcom.sharepoint.com/sites/NIS2",
    "status": "READ_ONLY_SNAPSHOT_ACTIVE",
    "task_count": 36,
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
      "evidence_label": "A-002 – hatósági és határidő-evidencia mappa",
      "evidence_url": "https://metalcom.sharepoint.com/sites/NIS2/Megosztott%20dokumentumok/NIS2_EVIDENCE/00_AUTHORITY/A-002",
      "formal_effect": false,
      "gate": "Külső benyújtás előtt.",
      "id": "DEF-001",
      "owner": "Pásztor András",
      "process_state": "A 2026-06-26-i baseline és a 2026-09-24-i határidő alapján a projekt továbbhaladhat.",
      "related": "A-002; D-026",
      "required": "A G2/G4 nyilatkozat tényleges aláírt példánya, aláírási dátuma, SHA-256 értéke, védett URI-ja és reviewer-rekordja.",
      "sharepoint_status": "Nyitott",
      "source": "SHAREPOINT_CONNECTOR_SNAPSHOT",
      "status": "OPEN_DEFERRED",
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
      "gate": "Bármely kapcsolódó kontroll elfogadása vagy külső benyújtás, valamint az érintett akció DONE státusza előtt.",
      "id": "DEF-029",
      "owner": "Pásztor András; Kóczán Mónika",
      "process_state": "Elkészült az öt irányítási akció bizonyítéklánc-regisztere; a D-022/D-025/D-026/D-027 baseline-ok megőrzöttek, de a pótlandó evidencia nem lett teljesítettnek jelölve.",
      "related": "A-001; A-002; A-007; A-035; A-036; data/governance_work_packages.json",
      "required": "Formális IBF-kijelölés és alkalmassági/jogi review; ténylegesen aláírt G2/G4 nyilatkozat; SRC-008 védett URI-ja és reviewer-rekordja; aláírt RACI, vezetői szponzor és belső infrastruktúra-/incidenskontroll-gazda; végleges terv G1/G2/G4 review-ja, jogosult emberi aláírás és benyújtás, védett végleges csomag SHA-256-tal, valamint átvételi igazolás.",
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
      "process_state": "A 7/2024. MK rendelethez kapcsolódó Excelből 914 kontroll és 1878 részletes követelmény determinisztikus, PROPOSED nyilvántartása készült; a jelenlegi 164 használt kontrollhivatkozás teljesen lefedett, a portál akciórészleteiben megjelenik. A tényleges SharePoint-listaelem és az elkülönített védett A-005/SRC-009 mappa létrejött. A SharePoint-kapcsolaton át feltöltött XLSX 977503 bájt, míg a kanonikus helyi forrás 970666 bájt, ezért a feltöltött példány byteazonossága nincs igazolva.",
      "related": "A-005; A-011; A-040; SRC-009; data/control_catalog.csv; data/control_requirements.csv; data/control_catalog_metadata.json; CONTROL_CATALOG_G1_REVIEW.md",
      "required": "A SharePoint-példány kézi cseréje az eredeti fájllal és visszaolvasott SHA-256 ellenőrzése; a store-owner név szerinti rekordja; eredet, verzió, felhasználási jogosultság és a hatályos NJT-szöveggel való tételes vagy elfogadott mintavételes egyezés G1 review-ja; reviewer, időzónás review-idő és döntési hivatkozás; az öt EIR Alap/Jelentős/Magas biztonsági osztályának emberi igazolása és kontrolltestreszabási döntése.",
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
    "days_to_deadline": 59,
    "gate_counts": {
      "G1": 12,
      "G2": 14,
      "G3": 11,
      "G4": 4,
      "G5": 6
    },
    "in_progress": 8,
    "linked_human_tasks": 36,
    "new_actions": 34,
    "open_human_tasks": 35,
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
    "total_actions": 42,
    "unlinked_human_tasks": 0
  }
};
