"""Deterministic calendar-date calculations."""

from __future__ import annotations

from datetime import date, timedelta


ACTION_PLAN_DAYS = 90
REPEAT_AUDIT_LATEST = date(2027, 12, 31)


def parse_iso_date(value: str, *, field_name: str = "date") -> date:
    """Parse a strict ISO date and return a helpful error."""
    try:
        parsed = date.fromisoformat(value)
    except (TypeError, ValueError) as exc:
        raise ValueError(f"{field_name}: hibás ISO-dátum: {value!r}") from exc
    if parsed.isoformat() != value:
        raise ValueError(f"{field_name}: YYYY-MM-DD formátum szükséges: {value!r}")
    return parsed


def action_plan_deadline(received: date) -> date:
    """Calculate receipt date plus 90 calendar days."""
    return received + timedelta(days=ACTION_PLAN_DAYS)


def add_months(value: date, months: int) -> date:
    """Add calendar months, clamping the day at month end."""
    target_index = value.year * 12 + value.month - 1 + months
    year, month_index = divmod(target_index, 12)
    month = month_index + 1
    next_index = target_index + 1
    next_year, next_month_index = divmod(next_index, 12)
    first_next = date(next_year, next_month_index + 1, 1)
    last_day = (first_next - timedelta(days=1)).day
    return date(year, month, min(value.day, last_day))


def draft_quarterly_schedule(
    submission_date: date, repeat_audit_latest: date = REPEAT_AUDIT_LATEST
) -> list[date]:
    """Return informational quarter dates, explicitly subject to human review."""
    result: list[date] = []
    offset = 3
    while True:
        candidate = add_months(submission_date, offset)
        if candidate > repeat_audit_latest:
            break
        result.append(candidate)
        offset += 3
    return result

