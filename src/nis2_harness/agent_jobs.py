"""Safe, deterministic H-002 job packaging for the local assurance pilot."""

from __future__ import annotations

import hashlib
import json
import re
from datetime import datetime
from pathlib import Path
from typing import Any

from .continuous_assurance import FORBIDDEN_ACTIONS, build_pilot_output, validate_pilot
from .validation import HUMAN_GATES, Issue, ValidationResult, combine_results


def _issue(
    path: str | Path, severity: str, code: str, message: str, identity: str = "H-002"
) -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except (TypeError, ValueError):
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def _is_relative_to(path: Path, parent: Path) -> bool:
    try:
        path.relative_to(parent)
    except ValueError:
        return False
    return True


def _safe_repo_path(root: Path, value: str, allowed_parent: Path) -> Path | None:
    candidate = Path(value)
    if candidate.is_absolute() or ".." in candidate.parts:
        return None
    resolved = (root / candidate).resolve()
    parent = (root / allowed_parent).resolve()
    return resolved if _is_relative_to(resolved, parent) else None


def _sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(65536), b""):
            digest.update(block)
    return digest.hexdigest()


def validate_h002_job(job: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate the immutable safety envelope of a local fixture-only H-002 job."""
    issues: list[Issue] = []
    required = (
        "schema_version", "handoff_id", "job_id", "status", "mode",
        "generated_at", "input", "engine_config", "output_policy",
    )
    for field in required:
        if field not in job or job[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_H002_REQUIRED", f"hiányzó mező: {field}"))
    if job.get("handoff_id") != "H-002":
        issues.append(_issue(path, "ERROR", "E_H002_HANDOFF", "a handoff_id csak H-002 lehet"))
    if job.get("status") != "PROPOSAL":
        issues.append(_issue(path, "ERROR", "E_H002_STATUS", "a job státusza csak PROPOSAL lehet"))
    if job.get("mode") != "LOCAL_FIXTURE_ONLY":
        issues.append(_issue(path, "ERROR", "E_H002_MODE", "csak LOCAL_FIXTURE_ONLY mód engedélyezett"))
    if not _timestamp(str(job.get("generated_at", ""))):
        issues.append(_issue(path, "ERROR", "E_H002_TIMESTAMP", "időzónás generated_at szükséges"))

    input_config = job.get("input", {})
    if not isinstance(input_config, dict):
        issues.append(_issue(path, "ERROR", "E_H002_INPUT", "az input objektum szükséges"))
    else:
        input_path = input_config.get("path")
        if not isinstance(input_path, str) or not input_path:
            issues.append(_issue(path, "ERROR", "E_H002_INPUT_PATH", "az input.path szükséges"))
        elif Path(input_path).suffix.lower() != ".json":
            issues.append(_issue(path, "ERROR", "E_H002_INPUT_TYPE", "csak JSON fixture olvasható"))
        expected_hash = input_config.get("expected_sha256")
        if not isinstance(expected_hash, str) or re.fullmatch(r"[0-9a-fA-F]{64}", expected_hash) is None:
            issues.append(_issue(path, "ERROR", "E_H002_INPUT_HASH", "64 karakteres expected_sha256 szükséges"))
        if input_config.get("classification") != "SYNTHETIC_NON_SENSITIVE" or input_config.get("read_only") is not True:
            issues.append(_issue(path, "ERROR", "E_H002_INPUT_POLICY", "csak read-only, szintetikus nem érzékeny input engedélyezett"))

    policy = job.get("output_policy", {})
    required_policy = {
        "proposal_only": True,
        "formal_effect": False,
        "external_write_allowed": False,
        "production_change_allowed": False,
        "evidence_acceptance_allowed": False,
        "action_closure_allowed": False,
    }
    if not isinstance(policy, dict) or any(policy.get(key) is not value for key, value in required_policy.items()):
        issues.append(_issue(path, "ERROR", "E_H002_OUTPUT_POLICY", "a teljes fail-closed output policy kötelező"))

    engine = job.get("engine_config", {})
    if isinstance(engine, dict):
        safety = engine.get("safety", {})
        safe_flags = (
            "network_allowed", "production_connection_allowed",
            "external_ai_allowed", "raw_sensitive_data_allowed",
        )
        if (
            not isinstance(safety, dict)
            or any(safety.get(flag) is not False for flag in safe_flags)
            or safety.get("forbidden_automatic_actions") != FORBIDDEN_ACTIONS
        ):
            issues.append(_issue(path, "ERROR", "E_H002_FORBIDDEN", "a tiltott automatikus műveletek teljes listája kötelező"))
    else:
        issues.append(_issue(path, "ERROR", "E_H002_ENGINE", "az engine_config objektum szükséges"))
    return ValidationResult(tuple(issues))


def load_h002_inputs(job: dict[str, Any], root: Path, job_path: Path) -> tuple[dict[str, Any], Path, str]:
    """Load and integrity-check one allowlisted repository fixture."""
    input_value = str(job["input"]["path"])
    input_path = _safe_repo_path(root, input_value, Path("tests") / "fixtures")
    if input_path is None:
        raise ValueError("H-002 input csak a repository tests/fixtures könyvtárából olvasható")
    if not input_path.is_file():
        raise ValueError(f"H-002 fixture nem található: {input_value}")
    if input_path.stat().st_size > 1024 * 1024:
        raise ValueError("H-002 fixture legfeljebb 1 MiB lehet")
    actual_hash = _sha256(input_path)
    if actual_hash != job["input"]["expected_sha256"].lower():
        raise ValueError("H-002 fixture SHA-256 eltérés; a feldolgozás leállt")
    try:
        data = json.loads(input_path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError) as exc:
        raise ValueError(f"érvénytelen H-002 fixture: {exc}") from exc
    if not isinstance(data, dict):
        raise ValueError("a H-002 fixture gyökere JSON objektum kell legyen")
    return data, input_path, actual_hash


def _hash_chain(records: list[dict[str, Any]]) -> list[dict[str, Any]]:
    previous = "0" * 64
    chained: list[dict[str, Any]] = []
    for record in records:
        canonical = json.dumps(record, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
        record_hash = hashlib.sha256((previous + canonical).encode("utf-8")).hexdigest()
        chained.append({**record, "previous_hash": previous, "record_hash": record_hash})
        previous = record_hash
    return chained


def _synthetic_eval(inputs: dict[str, Any], proposals: list[dict[str, Any]]) -> dict[str, Any]:
    events = sorted(inputs.get("events", []), key=lambda item: item["event_id"])
    labeled = [event for event in events if event.get("expected_required_human_gate")]
    passed = sum(
        event["expected_required_human_gate"] == proposal["required_human_gate"]
        for event, proposal in zip(labeled, proposals)
    )
    return {
        "classification": "SYNTHETIC_TECHNICAL_CASES_NOT_HUMAN_APPROVED_GOLD_CASES",
        "cases": len(labeled),
        "passed": passed,
        "pass_rate": passed / len(labeled) if labeled else None,
    }


def build_h002_output(job: dict[str, Any], inputs: dict[str, Any], input_hash: str) -> dict[str, Any]:
    """Build a proposal-only job result with provenance and a tamper-evident log chain."""
    engine_output = build_pilot_output(job["engine_config"], inputs)
    proposals = engine_output.get("proposals", [])
    gates = sorted({item["required_human_gate"] for item in proposals})
    run_status = engine_output["status"]
    audit_records = [
        {
            "sequence": 1,
            "operation": "VERIFY_INPUT_SHA256",
            "result": input_hash,
        },
        *[
            {**record, "sequence": index}
            for index, record in enumerate(engine_output.get("audit_log", []), start=2)
        ],
        {
            "sequence": len(engine_output.get("audit_log", [])) + 2,
            "operation": "QUEUE_HUMAN_REVIEW",
            "result": f"{len(engine_output.get('approval_queue', []))} PENDING_HUMAN",
        },
    ]
    return {
        "schema_version": "1.0",
        "handoff_id": "H-002",
        "job_id": job["job_id"],
        "status": "PROPOSAL",
        "run_status": run_status,
        "agent_role": "continuous_assurance_operator",
        "source_refs": sorted({ref for item in proposals for ref in item["source_refs"]}),
        "assumptions": ["A bemenet kizárólag szintetikus fixture; nem igazol éles rendszerállapotot."],
        "confidence": "medium",
        "proposed_changes": [change for item in proposals for change in item["proposed_changes"]],
        "required_human_gate": ";".join(gates) if gates else "G1_DOMAIN_REVIEW",
        "forbidden_automatic_actions": FORBIDDEN_ACTIONS,
        "formal_effect": False,
        "human_review_status": "PENDING_HUMAN",
        "input_provenance": {
            "path": job["input"]["path"],
            "sha256": input_hash,
            "contains_sensitive_data": False,
        },
        "proposals": proposals,
        "approval_queue": engine_output.get("approval_queue", []),
        "audit_log": _hash_chain(audit_records),
        "metrics": {
            **engine_output.get("metrics", {}),
            "synthetic_eval": _synthetic_eval(inputs, proposals),
        },
    }


def validate_h002_run(job: dict[str, Any], inputs: dict[str, Any], path: str | Path) -> ValidationResult:
    """Validate both the job envelope and the existing assurance engine input."""
    label_issues = []
    for event in inputs.get("events", []) if isinstance(inputs.get("events", []), list) else []:
        if not isinstance(event, dict):
            continue
        expected = event.get("expected_required_human_gate")
        if expected not in HUMAN_GATES:
            label_issues.append(_issue(
                path, "ERROR", "E_H002_EXPECTED_GATE",
                "minden szintetikus technikai esethez ismert elvárt emberi kapu szükséges",
                str(event.get("event_id", "")),
            ))
    return combine_results(
        validate_h002_job(job, path),
        validate_pilot(job.get("engine_config", {}), inputs, path),
        ValidationResult(tuple(label_issues)),
    )


def ensure_generated_output(root: Path, output: Path) -> Path:
    """Reject writes outside the repository generated directory."""
    resolved = output.resolve() if output.is_absolute() else (root / output).resolve()
    generated = (root / "generated").resolve()
    if not _is_relative_to(resolved, generated):
        raise ValueError("H-002 output csak a repository generated könyvtárába írható")
    return resolved
