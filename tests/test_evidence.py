from __future__ import annotations

import csv
import tempfile
import unittest
from pathlib import Path

from nis2_harness.registry import EvidenceRecord, RegistryLoadError, load_evidence
from nis2_harness.validation import validate_evidence


def evidence(**changes: str) -> EvidenceRecord:
    values = {
        "evidence_id": "EV-0001",
        "action_id": "A-001",
        "requirement_family": "1",
        "eir": "Szervezet",
        "title": "Jóváhagyott tesztevidencia",
        "evidence_type": "review_record",
        "source_ref": "SRC-008:p21",
        "source_confidence": "audited",
        "internal_uri": "protected://nis2/02_GOVERNANCE/EV-0001.pdf",
        "sha256": "a" * 64,
        "created_at": "2026-07-15T09:00:00+02:00",
        "created_by": "Készítő",
        "submitted_at": "2026-07-15T10:00:00+02:00",
        "reviewed_at": "2026-07-15T11:00:00+02:00",
        "reviewed_by": "Reviewer",
        "review_status": "ACCEPTED",
        "review_decision_ref": "REV-0001",
        "retention_class": "RET-TEST",
        "confidentiality": "CONFIDENTIAL",
        "row_number": 2,
        "source_path": "evidence.csv",
    }
    values.update(changes)
    return EvidenceRecord(**values)


class EvidenceValidationTests(unittest.TestCase):
    def test_valid_accepted_record(self) -> None:
        result = validate_evidence([evidence()], {"A-001"})
        self.assertFalse(result.errors)

    def test_accepted_requires_human_review(self) -> None:
        result = validate_evidence([evidence(reviewed_by="")], {"A-001"})
        self.assertIn("E_EVIDENCE_ACCEPTANCE", {item.code for item in result.errors})

    def test_unverified_record_cannot_be_accepted(self) -> None:
        result = validate_evidence(
            [evidence(source_confidence="unverified_internal")], {"A-001"}
        )
        self.assertIn(
            "E_EVIDENCE_UNVERIFIED_ACCEPTANCE", {item.code for item in result.errors}
        )

    def test_rejection_requires_reason(self) -> None:
        result = validate_evidence([
            evidence(
                review_status="NEEDS_CHANGES",
                rejection_reason="",
                internal_uri="",
                sha256="",
                submitted_at="",
                review_decision_ref="",
            )
        ], {"A-001"})
        self.assertIn("E_EVIDENCE_REJECTION", {item.code for item in result.errors})

    def test_action_reference_must_exist(self) -> None:
        result = validate_evidence([evidence(action_id="A-999")], {"A-001"})
        self.assertIn("E_EVIDENCE_ACTION_REF", {item.code for item in result.errors})

    def test_empty_register_is_warning(self) -> None:
        result = validate_evidence([], {"A-001"})
        self.assertFalse(result.errors)
        self.assertIn("W_EVIDENCE_EMPTY", {item.code for item in result.warnings})

    def test_loader_preserves_utf8(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "evidence.csv"
            record = evidence(evidence_id="EV-ÁRVÍZ", title="Árvíztűrő evidencia")
            excluded = {"row_number", "source_path"}
            row = {
                field: getattr(record, field)
                for field in record.__dataclass_fields__
                if field not in excluded
            }
            with path.open("w", encoding="utf-8", newline="") as handle:
                writer = csv.DictWriter(handle, fieldnames=list(row))
                writer.writeheader()
                writer.writerow(row)
            self.assertEqual(load_evidence(path)[0].title, "Árvíztűrő evidencia")

    def test_loader_rejects_incomplete_header(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "evidence.csv"
            path.write_text("evidence_id,action_id\n", encoding="utf-8")
            with self.assertRaises(RegistryLoadError):
                load_evidence(path)


if __name__ == "__main__":
    unittest.main()
