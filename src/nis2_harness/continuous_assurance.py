"""Deterministic, local-only continuous-assurance pilot for synthetic metadata."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from .validation import Issue, ValidationResult


FORBIDDEN_ACTIONS = ["close_action", "submit_external", "change_production", "purchase", "accept_evidence"]
KIND_POLICY = {
    "LOG_EXCEPTION": ("evidence_curator", "G1_DOMAIN_REVIEW", "Naplókivétel emberi vizsgálata"),
    "DEADLINE_RISK": ("orchestrator", "G2_SECURITY_LEGAL", "Határidőkockázat felülvizsgálata"),
    "CONTROL_DRIFT": ("remediation_planner", "G1_DOMAIN_REVIEW", "Kontrolleltérés javítási javaslata"),
}


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def validate_pilot(config: dict[str, Any], inputs: dict[str, Any], path: str | Path) -> ValidationResult:
    """Reject non-allowlisted, sensitive or execution-capable pilot inputs."""
    issues: list[Issue] = []
    for field in ("schema_version", "pilot_id", "mode", "generated_at", "allowed_sources", "safety", "kill_switch", "metrics"):
        if field not in config or config[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_CA_CONFIG_REQUIRED", f"hiányzó config mező: {field}", "A-042"))
    if config.get("mode") != "LOCAL_SYNTHETIC_ONLY":
        issues.append(_issue(path, "ERROR", "E_CA_MODE", "a pilot csak LOCAL_SYNTHETIC_ONLY módban futhat", "A-042"))
    allowed = set(config.get("allowed_sources", []))
    if not allowed:
        issues.append(_issue(path, "ERROR", "E_CA_ALLOWLIST", "legalább egy szintetikus allowlisted forrás szükséges", "A-042"))
    safety = config.get("safety", {})
    if not isinstance(safety, dict) or safety.get("network_allowed") is not False or safety.get("production_connection_allowed") is not False:
        issues.append(_issue(path, "ERROR", "E_CA_SAFETY", "hálózat és éles kapcsolat explicit tiltása kötelező", "A-042"))
    elif safety.get("forbidden_automatic_actions") != FORBIDDEN_ACTIONS:
        issues.append(_issue(path, "ERROR", "E_CA_FORBIDDEN", "az automatikus tiltások sorrendhelyes teljes listája kötelező", "A-042"))
    kill = config.get("kill_switch", {})
    if not isinstance(kill, dict) or not isinstance(kill.get("engaged"), bool) or not kill.get("control_file"):
        issues.append(_issue(path, "ERROR", "E_CA_KILL_SWITCH", "explicit kill-switch konfiguráció szükséges", "A-042"))

    events = inputs.get("events", [])
    if not isinstance(events, list):
        issues.append(_issue(path, "ERROR", "E_CA_EVENTS", "events lista szükséges", "A-042"))
        events = []
    seen: set[str] = set()
    for event in events:
        if not isinstance(event, dict):
            issues.append(_issue(path, "ERROR", "E_CA_EVENT", "minden esemény objektum kell legyen", "A-042"))
            continue
        event_id = str(event.get("event_id", ""))
        for field in ("event_id", "source_id", "source_ref", "source_confidence", "observed_at", "kind", "summary", "contains_sensitive_data"):
            if field not in event or event[field] in (None, ""):
                issues.append(_issue(path, "ERROR", "E_CA_EVENT_REQUIRED", f"hiányzó eseménymező: {field}", event_id))
        if event_id in seen:
            issues.append(_issue(path, "ERROR", "E_CA_DUPLICATE", "duplikált event_id", event_id))
        seen.add(event_id)
        if event.get("source_id") not in allowed:
            issues.append(_issue(path, "ERROR", "E_CA_SOURCE_DENIED", "nem allowlisted pilotforrás", event_id))
        if event.get("contains_sensitive_data") is not False:
            issues.append(_issue(path, "ERROR", "E_CA_SENSITIVE", "érzékeny adatot jelző input tiltott", event_id))
        if event.get("kind") not in KIND_POLICY:
            issues.append(_issue(path, "ERROR", "E_CA_KIND", "ismeretlen eseménytípus", event_id))
        if event.get("source_confidence") not in {"audited", "authority", "derived", "synthetic"}:
            issues.append(_issue(path, "ERROR", "E_CA_CONFIDENCE", "ismeretlen source_confidence", event_id))
    if not events:
        issues.append(_issue(path, "WARNING", "W_CA_NO_EVENTS", "nincs feldolgozható pilot esemény", "A-042"))
    return ValidationResult(tuple(issues))


def build_pilot_output(config: dict[str, Any], inputs: dict[str, Any]) -> dict[str, Any]:
    """Create proposals and an audit trail; never mutate a source or approve a result."""
    result = validate_pilot(config, inputs, "pilot")
    if result.errors:
        raise ValueError("invalid continuous-assurance pilot input")
    events = sorted(inputs.get("events", []), key=lambda event: event["event_id"])
    if config["kill_switch"]["engaged"]:
        return {
            "schema_version": "1.0", "status": "STOPPED_BY_KILL_SWITCH",
            "pilot_id": config["pilot_id"], "generated_at": config["generated_at"],
            "proposals": [], "approval_queue": [],
            "audit_log": [{"sequence": 1, "event": "KILL_SWITCH_ENFORCED", "result": "NO_INPUT_PROCESSED"}],
            "metrics": {"events_seen": 0, "proposals_created": 0, "simulated_manual_steps_saved": 0},
        }
    proposals: list[dict[str, Any]] = []
    audit_log: list[dict[str, Any]] = []
    for sequence, event in enumerate(events, start=1):
        role, gate, recommendation = KIND_POLICY[event["kind"]]
        proposal_id = f"PROP-{config['pilot_id']}-{sequence:03d}"
        proposals.append({
            "proposal_id": proposal_id,
            "status": "PROPOSAL",
            "agent_role": role,
            "source_refs": [event["source_ref"]],
            "source_confidence": event["source_confidence"],
            "assumptions": ["A bemenet szintetikus pilot-metaadat; nem igazol éles rendszerállapotot."],
            "confidence": "medium" if event["source_confidence"] == "synthetic" else "high",
            "proposed_changes": [recommendation],
            "required_human_gate": gate,
            "human_review_status": "PENDING_HUMAN",
            "forbidden_automatic_actions": FORBIDDEN_ACTIONS,
        })
        audit_log.append({
            "sequence": sequence, "event_id": event["event_id"], "source_id": event["source_id"],
            "source_ref": event["source_ref"], "operation": "CREATE_PROPOSAL",
            "result": proposal_id, "review_status": "PENDING_HUMAN",
        })
    baseline = int(config["metrics"]["manual_steps_per_event_baseline"]) * len(events)
    pilot_steps = int(config["metrics"]["pilot_human_steps_per_event"]) * len(events)
    return {
        "schema_version": "1.0", "status": "PROPOSAL",
        "pilot_id": config["pilot_id"], "generated_at": config["generated_at"],
        "proposals": proposals,
        "approval_queue": [
            {"proposal_id": item["proposal_id"], "required_human_gate": item["required_human_gate"], "status": "PENDING_HUMAN"}
            for item in proposals
        ],
        "audit_log": audit_log,
        "metrics": {
            "events_seen": len(events), "proposals_created": len(proposals),
            "simulated_manual_steps_baseline": baseline,
            "simulated_pilot_human_steps": pilot_steps,
            "simulated_manual_steps_saved": max(0, baseline - pilot_steps),
            "false_alert_rate": "NOT_MEASURED_REQUIRES_HUMAN_GOLD_CASE_REVIEW",
        },
    }
