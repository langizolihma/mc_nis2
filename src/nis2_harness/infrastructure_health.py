"""Validation for the proposal-only A-022 infrastructure health snapshot."""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
import re
from typing import Any

from .validation import Issue, ValidationResult


REQUIRED_SCOPES = {"HOSTS", "VMS", "STORAGE_CAPACITY", "RAID_HEALTH", "BACKUP_STATUS"}
REQUIRED_GATES = {"G2_SECURITY_LEGAL", "G3_PRODUCTION_CHANGE"}
REQUIRED_EVIDENCE = {
    "timestamped_export", "collector_identity", "collection_method", "source_system",
    "sha256", "protected_uri", "human_review",
}
SHA256_PATTERN = re.compile(r"^[0-9a-fA-F]{64}$")


def _issue(path: str | Path, severity: str, code: str, message: str, identity: str = "") -> Issue:
    return Issue(severity, code, message, str(path), action_id=identity)


def _timestamp(value: str) -> bool:
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return False
    return parsed.tzinfo is not None and parsed.utcoffset() is not None


def validate_infrastructure_health_plan(data: dict[str, Any], path: str | Path) -> ValidationResult:
    """Reject unsafe collection settings and unsupported infrastructure claims."""
    issues: list[Issue] = []
    for field in (
        "schema_version", "status", "action_id", "source_refs", "source_confidence",
        "claim_status", "collection", "scopes", "required_evidence", "observations",
        "human_review",
    ):
        if field not in data or data[field] in (None, ""):
            issues.append(_issue(path, "ERROR", "E_INFRA_REQUIRED", f"hiányzó kötelező mező: {field}", "A-022"))
    if data.get("action_id") != "A-022":
        issues.append(_issue(path, "ERROR", "E_INFRA_ACTION", "az action_id értéke A-022 kell legyen"))
    if data.get("status") not in {"PROPOSAL", "READY_FOR_REVIEW", "APPROVED"}:
        issues.append(_issue(path, "ERROR", "E_INFRA_STATUS", f"ismeretlen plan status: {data.get('status')!r}"))
    if data.get("source_confidence") != "unverified_internal":
        issues.append(_issue(path, "ERROR", "E_INFRA_SOURCE_CONFIDENCE", "az SRC-004 állításai csak unverified_internal minősítéssel kezelhetők"))

    collection = data.get("collection", {})
    if not isinstance(collection, dict):
        issues.append(_issue(path, "ERROR", "E_INFRA_COLLECTION_TYPE", "collection objektum szükséges"))
        collection = {}
    for field in (
        "execution_status", "technical_contributor", "internal_accountable_owner",
        "required_gates", "approved_by", "approved_at", "decision_ref", "read_only_required",
        "remote_access_allowed", "write_operations_allowed", "deletion_allowed",
        "configuration_change_allowed", "credential_scope", "approved_time_window",
        "protected_output_uri",
    ):
        if field not in collection:
            issues.append(_issue(path, "ERROR", "E_INFRA_COLLECTION_REQUIRED", f"hiányzó collection mező: {field}"))
    if collection.get("read_only_required") is not True:
        issues.append(_issue(path, "ERROR", "E_INFRA_READ_ONLY", "a gyűjtésnek kötelezően read-only módszerűnek kell lennie"))
    for field in ("remote_access_allowed", "write_operations_allowed", "deletion_allowed", "configuration_change_allowed"):
        if collection.get(field) is not False:
            issues.append(_issue(path, "ERROR", "E_INFRA_UNSAFE_OPERATION", f"tiltott vagy nem explicit false művelet: {field}"))
    gates = set(collection.get("required_gates", [])) if isinstance(collection.get("required_gates"), list) else set()
    if gates != REQUIRED_GATES:
        issues.append(_issue(path, "ERROR", "E_INFRA_GATES", "a read-only éles adatgyűjtéshez G2 és G3 kapu szükséges"))
    execution_status = collection.get("execution_status")
    if execution_status not in {"BLOCKED_PENDING_G2_G3", "APPROVED_NOT_EXECUTED", "COLLECTED_PENDING_REVIEW", "REVIEWED"}:
        issues.append(_issue(path, "ERROR", "E_INFRA_EXECUTION_STATUS", "ismeretlen collection execution_status"))
    approval_fields = ("approved_by", "approved_at", "decision_ref")
    if execution_status == "BLOCKED_PENDING_G2_G3":
        if any(collection.get(field) for field in approval_fields):
            issues.append(_issue(path, "ERROR", "E_INFRA_FALSE_APPROVAL", "blokkolt gyűjtéshez nem rögzíthető jóváhagyás"))
        issues.append(_issue(path, "WARNING", "W_INFRA_GATES_PENDING", "a célrendszerek, jogosultság, időablak és G2/G3 jóváhagyás hiányzik"))
    elif any(not collection.get(field) for field in approval_fields) or not _timestamp(str(collection.get("approved_at", ""))):
        issues.append(_issue(path, "ERROR", "E_INFRA_APPROVAL", "engedélyezett gyűjtéshez teljes, időzónás emberi approval rekord szükséges"))

    scopes = data.get("scopes", [])
    if not isinstance(scopes, list):
        issues.append(_issue(path, "ERROR", "E_INFRA_SCOPE_TYPE", "scopes lista szükséges"))
        scopes = []
    seen: set[str] = set()
    targets_pending = False
    for scope in scopes:
        if not isinstance(scope, dict):
            issues.append(_issue(path, "ERROR", "E_INFRA_SCOPE_RECORD", "minden scope rekord objektum kell legyen"))
            continue
        scope_id = str(scope.get("scope_id", ""))
        for field in ("scope_id", "status", "targets", "required_fields", "collection_method"):
            if field not in scope:
                issues.append(_issue(path, "ERROR", "E_INFRA_SCOPE_REQUIRED", f"hiányzó scope mező: {field}", scope_id))
        if scope_id in seen:
            issues.append(_issue(path, "ERROR", "E_INFRA_SCOPE_DUPLICATE", "duplikált scope", scope_id))
        seen.add(scope_id)
        if scope.get("status") == "PENDING_HUMAN":
            if scope.get("targets"):
                issues.append(_issue(path, "ERROR", "E_INFRA_PENDING_TARGETS", "PENDING_HUMAN scope nem tartalmazhat nem jóváhagyott célpontot", scope_id))
            targets_pending = True
        elif scope.get("status") != "APPROVED":
            issues.append(_issue(path, "ERROR", "E_INFRA_SCOPE_STATUS", "a scope status PENDING_HUMAN vagy APPROVED lehet", scope_id))
        elif not scope.get("targets") or not scope.get("collection_method"):
            issues.append(_issue(path, "ERROR", "E_INFRA_APPROVED_SCOPE", "APPROVED scope-hoz célpont és jóváhagyott gyűjtési módszer szükséges", scope_id))
    if seen != REQUIRED_SCOPES:
        issues.append(_issue(path, "ERROR", "E_INFRA_SCOPE_COVERAGE", f"hibás scope-lefedettség; hiányzik={sorted(REQUIRED_SCOPES - seen)}, ismeretlen={sorted(seen - REQUIRED_SCOPES)}"))
    if targets_pending:
        issues.append(_issue(path, "WARNING", "W_INFRA_TARGETS_PENDING", "az infrastruktúra-célpontokat és módszereket embernek kell kijelölnie"))

    evidence = set(data.get("required_evidence", [])) if isinstance(data.get("required_evidence"), list) else set()
    if evidence != REQUIRED_EVIDENCE:
        issues.append(_issue(path, "ERROR", "E_INFRA_EVIDENCE_SET", "hiányos vagy ismeretlen kötelező evidencia-készlet"))

    observations = data.get("observations", [])
    if not isinstance(observations, list):
        issues.append(_issue(path, "ERROR", "E_INFRA_OBSERVATION_TYPE", "observations lista szükséges"))
        observations = []
    if not observations:
        issues.append(_issue(path, "WARNING", "W_INFRA_OBSERVATIONS_PENDING", "nincs begyűjtött és ember által felülvizsgált health snapshot"))
    for item in observations:
        if not isinstance(item, dict):
            issues.append(_issue(path, "ERROR", "E_INFRA_OBSERVATION_RECORD", "minden observation objektum kell legyen"))
            continue
        identity = str(item.get("observation_id", ""))
        required_fields = (
            "observation_id", "scope_id", "target_ref", "observed_state", "source_ref",
            "collected_at", "collector", "collection_method", "protected_uri", "sha256",
            "review_status", "reviewer", "reviewed_at",
        )
        if any(not item.get(field) for field in required_fields[:-3]):
            issues.append(_issue(path, "ERROR", "E_INFRA_OBSERVATION_REQUIRED", "hiányos observation evidenciarekord", identity))
        if item.get("scope_id") not in REQUIRED_SCOPES:
            issues.append(_issue(path, "ERROR", "E_INFRA_OBSERVATION_SCOPE", "ismeretlen observation scope", identity))
        if item.get("collected_at") and not _timestamp(str(item.get("collected_at"))):
            issues.append(_issue(path, "ERROR", "E_INFRA_OBSERVATION_TIME", "a collected_at időzónás időpont kell legyen", identity))
        if item.get("sha256") and not SHA256_PATTERN.fullmatch(str(item.get("sha256"))):
            issues.append(_issue(path, "ERROR", "E_INFRA_OBSERVATION_HASH", "a sha256 pontosan 64 hexadecimális karakter", identity))
        review_status = item.get("review_status")
        if review_status not in {"PENDING", "ACCEPTED", "REJECTED"}:
            issues.append(_issue(path, "ERROR", "E_INFRA_REVIEW_STATUS", "ismeretlen observation review_status", identity))
        if review_status in {"ACCEPTED", "REJECTED"}:
            if not item.get("reviewer") or not _timestamp(str(item.get("reviewed_at", ""))):
                issues.append(_issue(path, "ERROR", "E_INFRA_OBSERVATION_REVIEW", "review döntéshez reviewer és időzónás időpont szükséges", identity))
        elif item.get("reviewer") or item.get("reviewed_at"):
            issues.append(_issue(path, "ERROR", "E_INFRA_FALSE_REVIEW", "PENDING observation nem tartalmazhat review döntést", identity))

    claim_status = data.get("claim_status")
    review = data.get("human_review", {})
    if claim_status == "UNVERIFIED_PENDING_READ_ONLY_VALIDATION":
        if isinstance(review, dict) and any(review.get(field) for field in ("status", "reviewer", "reviewed_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_INFRA_FALSE_CLAIM_REVIEW", "nem igazolt állításhoz nem rögzíthető lezárt review"))
    elif claim_status in {"HUMAN_VERIFIED", "HUMAN_REJECTED"}:
        if not observations or not isinstance(review, dict) or any(not review.get(field) for field in ("status", "reviewer", "reviewed_at", "decision_ref")):
            issues.append(_issue(path, "ERROR", "E_INFRA_CLAIM_EVIDENCE", "emberi minősítéshez observation és teljes review rekord szükséges"))
        elif review.get("status") != "ACCEPTED" or not _timestamp(str(review.get("reviewed_at", ""))):
            issues.append(_issue(path, "ERROR", "E_INFRA_CLAIM_REVIEW", "a claim minősítéséhez elfogadott, időzónás emberi review szükséges"))
    else:
        issues.append(_issue(path, "ERROR", "E_INFRA_CLAIM_STATUS", "ismeretlen claim_status"))
    return ValidationResult(tuple(issues))
