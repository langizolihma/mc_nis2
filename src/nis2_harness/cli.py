"""Command-line interface for the local NIS2 harness."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path
from typing import Sequence

from .deadlines import REPEAT_AUDIT_LATEST, action_plan_deadline, draft_quarterly_schedule, parse_iso_date
from .ai_policy import validate_ai_policy
from .action_plan_submission import validate_action_plan_submission
from .backup_restore import validate_backup_restore_plan
from .infrastructure_health import validate_infrastructure_health_plan
from .license_entitlement import validate_license_entitlement_plan
from .logging_monitoring import validate_logging_monitoring_plan
from .maintenance_change import validate_maintenance_change_plan
from .exchange_dependency import validate_exchange_dependency_plan
from .legacy_retention import validate_legacy_retention_plan
from .supplier_risk import validate_supplier_risk_plan
from .physical_security import validate_physical_security_plan
from .evals import (
    evaluate_agent_output,
    validate_defect_log,
    validate_eval_config,
    validate_gold_cases,
)
from .registry import (
    RegistryLoadError,
    default_project_dates_path,
    load_actions,
    load_control_action_mapping,
    load_evidence,
    load_findings,
    load_json_object,
    load_project_dates,
)
from .reports import render_action_plan, render_status
from .repeat_audit import validate_repeat_audit_roadmap
from .quarterly_reporting import validate_quarterly_reporting_plan
from .validation import (
    combine_results,
    validate_actions,
    validate_control_action_mapping,
    validate_evidence,
    validate_findings,
    validate_inventory_export_plan,
    validate_inventory_register,
    validate_project_dates,
)


def _parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="nis2_harness", description="Deterministic local NIS2 harness")
    subparsers = parser.add_subparsers(dest="command", required=True)
    for name in ("validate", "status"):
        command = subparsers.add_parser(name)
        command.add_argument("--actions", required=True, type=Path)
        command.add_argument("--project-dates", type=Path)
    deadlines = subparsers.add_parser("deadlines")
    deadlines.add_argument("--received", required=True)
    draft = subparsers.add_parser("draft-action-plan")
    draft.add_argument("--actions", required=True, type=Path)
    draft.add_argument("--project-dates", type=Path)
    draft.add_argument("--output", required=True, type=Path)
    evidence = subparsers.add_parser("validate-evidence")
    evidence.add_argument("--evidence", required=True, type=Path)
    evidence.add_argument("--actions", required=True, type=Path)
    findings = subparsers.add_parser("validate-findings")
    findings.add_argument("--findings", required=True, type=Path)
    findings.add_argument("--mapping", required=True, type=Path)
    findings.add_argument("--actions", required=True, type=Path)
    inventory = subparsers.add_parser("validate-inventory")
    inventory.add_argument("--inventory", required=True, type=Path)
    inventory.add_argument("--export-plan", required=True, type=Path)
    evals = subparsers.add_parser("validate-evals")
    evals.add_argument("--config", required=True, type=Path)
    evals.add_argument("--cases", required=True, type=Path)
    evals.add_argument("--output", required=True, type=Path)
    evals.add_argument("--defects", required=True, type=Path)
    ai_policy = subparsers.add_parser("validate-ai-policy")
    ai_policy.add_argument("--policy", required=True, type=Path)
    repeat_audit = subparsers.add_parser("validate-repeat-audit")
    repeat_audit.add_argument("--roadmap", required=True, type=Path)
    quarterly = subparsers.add_parser("validate-quarterly-reporting")
    quarterly.add_argument("--plan", required=True, type=Path)
    submission = subparsers.add_parser("validate-action-plan-submission")
    submission.add_argument("--actions", required=True, type=Path)
    submission.add_argument("--project-dates", type=Path)
    backup = subparsers.add_parser("validate-backup-restore")
    backup.add_argument("--plan", required=True, type=Path)
    physical = subparsers.add_parser("validate-physical-security")
    physical.add_argument("--plan", required=True, type=Path)
    infrastructure = subparsers.add_parser("validate-infrastructure-health")
    infrastructure.add_argument("--plan", required=True, type=Path)
    license_entitlement = subparsers.add_parser("validate-license-entitlement")
    license_entitlement.add_argument("--plan", required=True, type=Path)
    logging_monitoring = subparsers.add_parser("validate-logging-monitoring")
    logging_monitoring.add_argument("--plan", required=True, type=Path)
    maintenance_change = subparsers.add_parser("validate-maintenance-change")
    maintenance_change.add_argument("--plan", required=True, type=Path)
    supplier_risk = subparsers.add_parser("validate-supplier-risk")
    supplier_risk.add_argument("--plan", required=True, type=Path)
    exchange_dependency = subparsers.add_parser("validate-exchange-dependency")
    exchange_dependency.add_argument("--plan", required=True, type=Path)
    legacy_retention = subparsers.add_parser("validate-legacy-retention")
    legacy_retention.add_argument("--plan", required=True, type=Path)
    return parser


def _load_and_validate(actions_path: Path, dates_path: Path | None):
    project_path = dates_path or default_project_dates_path(actions_path)
    actions = load_actions(actions_path)
    dates = load_project_dates(project_path)
    result = combine_results(validate_actions(actions), validate_project_dates(dates, project_path))
    return actions, dates, result


def main(argv: Sequence[str] | None = None) -> int:
    """Run the CLI and return a process exit code."""
    args = _parser().parse_args(argv)
    try:
        if args.command == "validate-legacy-retention":
            plan = load_json_object(args.plan, "legacy retention és migrációs terv")
            result = validate_legacy_retention_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Legacy retention: {len(plan.get('data_inventory', []))} data set; "
                f"test={plan.get('restore_read_test', {}).get('status', 'UNKNOWN')}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-exchange-dependency":
            plan = load_json_object(args.plan, "Exchange/SMTP dependency terv")
            result = validate_exchange_dependency_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Exchange dependency: {len(plan.get('dependency_records', []))} record; "
                f"scenarios={len(plan.get('test_scenarios', []))}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-supplier-risk":
            plan = load_json_object(args.plan, "beszállítói kockázati terv")
            result = validate_supplier_risk_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Supplier risk: {len(plan.get('suppliers', []))} supplier; "
                f"controls={len(plan.get('contract_control_catalog', []))}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-maintenance-change":
            plan = load_json_object(args.plan, "maintenance, patch és change terv")
            result = validate_maintenance_change_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Maintenance/change: {len(plan.get('workstreams', []))} workstream; "
                f"changes={len(plan.get('change_records', []))}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-logging-monitoring":
            plan = load_json_object(args.plan, "naplózási és felügyeleti terv")
            result = validate_logging_monitoring_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Logging/monitoring: {len(plan.get('log_sources', []))} source category; "
                f"review_runs={len(plan.get('review_runs', []))}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-license-entitlement":
            plan = load_json_object(args.plan, "licenc- és supportaudit terv")
            result = validate_license_entitlement_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"License entitlement: {len(plan.get('records', []))} category; "
                f"cost_decisions={len(plan.get('cost_decisions', []))}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-infrastructure-health":
            plan = load_json_object(args.plan, "infrastruktúra health snapshot terv")
            result = validate_infrastructure_health_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Infrastructure health: {len(plan.get('scopes', []))} scope; "
                f"collection={plan.get('collection', {}).get('execution_status', 'UNKNOWN')}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-physical-security":
            plan = load_json_object(args.plan, "fizikai védelmi bejárási terv")
            result = validate_physical_security_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Physical security: {len(plan.get('control_checks', []))} control; "
                f"walkthrough={plan.get('walkthrough', {}).get('status', 'UNKNOWN')}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-backup-restore":
            plan = load_json_object(args.plan, "backup és restore tesztterv")
            result = validate_backup_restore_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Backup/restore: {len(plan.get('eir_backup_matrix', []))} EIR; "
                f"restore={plan.get('restore_test', {}).get('execution_status', 'UNKNOWN')}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-action-plan-submission":
            actions, dates, base_result = _load_and_validate(args.actions, args.project_dates)
            submission_result = validate_action_plan_submission(actions, dates, args.actions)
            result = combine_results(base_result, submission_result)
            for issue in result.issues:
                print(issue.format())
            covered = {family for action in actions for family in action.requirement_families}
            print(
                f"Action-plan submission: {len(actions)} action; "
                f"{len(covered & {str(value) for value in range(1, 20)})}/19 family; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-quarterly-reporting":
            plan = load_json_object(args.plan, "negyedéves beszámolási terv")
            result = validate_quarterly_reporting_plan(plan, args.plan)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Quarterly reporting: {len(plan.get('reports', []))} report; "
                f"anchor={plan.get('submission_anchor', {}).get('status', 'UNKNOWN')}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-repeat-audit":
            roadmap = load_json_object(args.roadmap, "repeat-audit roadmap")
            result = validate_repeat_audit_roadmap(roadmap, args.roadmap)
            for issue in result.issues:
                print(issue.format())
            print(
                f"Repeat audit: {len(roadmap.get('milestones', []))} milestone; "
                f"target={roadmap.get('approved_internal_target', 'UNKNOWN')}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-ai-policy":
            policy = load_json_object(args.policy, "AI használati policy")
            result = validate_ai_policy(policy, args.policy)
            for issue in result.issues:
                print(issue.format())
            print(
                f"AI policy: {len(policy.get('handling_classes', []))} handling class; "
                f"environment={policy.get('external_environment', {}).get('status', 'UNKNOWN')}; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-evals":
            eval_config = load_json_object(args.config, "eval config")
            gold_cases = load_json_object(args.cases, "gold-case registry")
            output = load_json_object(args.output, "agent output")
            defects = load_json_object(args.defects, "defect log")
            config_result = validate_eval_config(eval_config, args.config)
            gold_result = validate_gold_cases(gold_cases, eval_config, args.cases)
            output_result = evaluate_agent_output(output, eval_config, args.output)
            defect_result = validate_defect_log(defects, args.defects)
            result = combine_results(
                config_result, gold_result, output_result, defect_result,
            )
            for issue in result.issues:
                print(issue.format())
            approved = sum(
                case.get("status") == "APPROVED" for case in gold_cases.get("cases", [])
                if isinstance(case, dict)
            )
            print(
                f"Eval: {len(gold_cases.get('cases', []))} slot, {approved} APPROVED; "
                f"{len(defects.get('defects', []))} defect; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            output_codes = {issue.code for issue in output_result.errors}
            contract_codes = {
                "E_OUTPUT_REQUIRED", "E_OUTPUT_STATUS", "E_OUTPUT_LIST",
                "E_OUTPUT_CONFIDENCE", "E_OUTPUT_GATE",
            }
            print(
                "Metrika: "
                f"output_contract_compliance={0.0 if output_codes & contract_codes else 1.0:.1f}; "
                f"source_traceability={0.0 if 'E_OUTPUT_SOURCE' in output_codes else 1.0:.1f}; "
                f"guardrail_declaration={0.0 if 'E_OUTPUT_GUARDRAIL' in output_codes else 1.0:.1f}; "
                "forbidden_action_attempt_rate="
                f"{1.0 if 'E_OUTPUT_FORBIDDEN_ATTEMPT' in output_codes else 0.0:.1f}; "
                f"approved_case_pass_rate={'N/A' if not approved else 'NOT_RUN'}"
            )
            return 1 if result.errors else 0
        if args.command == "validate-inventory":
            inventory_data = load_json_object(args.inventory, "inventory")
            export_plan = load_json_object(args.export_plan, "inventory exportterv")
            result = combine_results(
                validate_inventory_register(inventory_data, args.inventory),
                validate_inventory_export_plan(export_plan, args.export_plan),
            )
            for issue in result.issues:
                print(issue.format())
            print(
                f"Inventory: {len(inventory_data.get('eir_records', []))} EIR, "
                f"{len(inventory_data.get('assets', []))} asset, "
                f"{len(inventory_data.get('dependencies', []))} dependency; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-findings":
            actions = load_actions(args.actions)
            finding_records = load_findings(args.findings)
            mapping_records = load_control_action_mapping(args.mapping)
            action_ids = {action.action_id for action in actions}
            finding_ids = {record.finding_id for record in finding_records}
            result = combine_results(
                validate_actions(actions),
                validate_findings(finding_records, action_ids),
                validate_control_action_mapping(mapping_records, action_ids, finding_ids),
            )
            for issue in result.issues:
                print(issue.format())
            reviewed = sum(record.human_validated == "yes" for record in finding_records)
            print(
                f"Findingok: {len(finding_records)} rekord, {reviewed} human_validated; "
                f"mapping: {len(mapping_records)} sor; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "validate-evidence":
            actions = load_actions(args.actions)
            records = load_evidence(args.evidence)
            result = combine_results(
                validate_actions(actions),
                validate_evidence(records, {action.action_id for action in actions}),
            )
            for issue in result.issues:
                print(issue.format())
            accepted = sum(record.review_status == "ACCEPTED" for record in records)
            print(
                f"Evidencia: {len(records)} rekord, {accepted} ACCEPTED; "
                f"{len(result.errors)} hard error, {len(result.warnings)} warning"
            )
            return 1 if result.errors else 0
        if args.command == "deadlines":
            received = parse_iso_date(args.received, field_name="received")
            deadline = action_plan_deadline(received)
            print(f"Kézhezvétel: {received.isoformat()}")
            print(f"Cselekvési terv határideje (receipt + 90 naptári nap): {deadline.isoformat()}")
            print(f"Megismételt audit legkésőbb: {REPEAT_AUDIT_LATEST.isoformat()}")
            print("Negyedéves ütemezés: DRAFT_SCHEDULE – emberi G2/G4 jóváhagyás szükséges")
            for item in draft_quarterly_schedule(deadline):
                print(f"  - {item.isoformat()} DRAFT_SCHEDULE")
            return 0

        actions, dates, result = _load_and_validate(args.actions, args.project_dates)
        if args.command == "validate":
            for issue in result.issues:
                print(issue.format())
            print(f"Összesítés: {len(result.errors)} hard error, {len(result.warnings)} warning")
            return 1 if result.errors else 0
        if args.command == "status":
            print(render_status(actions, result, dates), end="")
            return 1 if result.errors else 0
        if args.command == "draft-action-plan":
            if result.errors:
                for issue in result.errors:
                    print(issue.format(), file=sys.stderr)
                print("A tervezet hard validation error miatt nem készült el.", file=sys.stderr)
                return 1
            output: Path = args.output
            output.parent.mkdir(parents=True, exist_ok=True)
            output.write_text(render_action_plan(actions, dates), encoding="utf-8", newline="\n")
            print(f"Tervezet elkészült: {output}")
            return 0
    except (RegistryLoadError, ValueError, OSError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    return 2
