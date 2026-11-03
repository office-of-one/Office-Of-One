#!/usr/bin/env bash
# A finished brain with a published Desk page, and what the page's
# database would return after the user used it between runs. The eval
# run has no ArtifactData and no mail connector, so the prompt tells the
# agent to read page-state.json as the page and to write its page and
# mail-draft changes to page-writes.json and draft-actions.json.
#
# On the page the user: ticked item 2 done, sent the thank-you to Dana
# (whose mail draft d-123 is still in the drafts folder), tapped "Yes,
# draft it" on a goal suggestion, and has an old "auto" in trust.
#
# Invented people only: Sam (the user), Mia (their child), Dana.
set -euo pipefail

cat > personality.md <<'EOF'
# Personality

Agent name: Agent OOO
User's name: Sam
Greeting: "Morning, Sam."

## Voice

Professional, concise, friendly, warm. Says the useful thing and stops.

## Customizations (set any time, never asked during onboarding)

Humor level: default
Directness: default
Explanation depth: default
Theme: none
EOF

cat > people.md <<'EOF'
# People

## Household

- Sam — the user.
- Mia — Sam's daughter, at Maple Grove Elementary.

## Others

- Dana — another Maple Grove parent; shares the school carpool with Sam.

## Invite rules

Calendar invites go to Sam only unless Sam says otherwise.
EOF

cat > goals.md <<'EOF'
# Goals

1. Run the city half marathon in April 2027. Training needs a long
   run every weekend.
EOF

cat > ways-of-working.md <<'EOF'
# Ways of Working

## The five questions

1. Email drafting: draft only, Sam confirms before anything goes out
2. Calendar adds: invites go to Sam only; one-offs always confirmed
3. Invite rules: see people.md
4. Schedule:
   - Morning Memo: every day at 6am
   - Evening Debrief: every day at 8pm
   - The Desk - Morning: every day at 5am
   - The Desk - Evening: every day at 7pm
5. System of record for tasks: tasks.md

## Set from the ecosystem sweep, not asked

- Using it for: personal and household
- Timezone: America/New_York
- Mail: Gmail
- Calendar: Google Calendar
- Mail swept through: 2026-11-01 09:00

## Usage sharing

- Install ID: 00000000-0000-4000-8000-000000000000
- Telemetry key:
- Install date: 2026-11-01
- Usage tally: on
- Share summary: no

## Housekeeping

- Last cleanup: 2026-10-31
- Desk page: https://claude.ai/artifact/TEST

## Topic files

None yet.

## Workflows

None yet.
EOF

cat > tasks.md <<'EOF'
# Tasks

The live list, and the ledger. This is the system of record.

## Priority today

1. Renew the car registration · due 2026-11-30 · open
2. Book Mia's dentist checkup · no date · open
3. Thank Dana for covering the carpool on Friday · DRAFTED · open
   thread: Dana · Carpool Friday · last touched 2026-10-31

## Open questions put to them

(none)

## Done

(none)
EOF

cat > open-questions.md <<'EOF'
# Open Questions

(none)
EOF

cat > log.md <<'EOF'
# Log

Newest first.

2026-11-01 — Set up my agent.
EOF

cat > archive.md <<'EOF'
# Archive

Closed items, newest first.
EOF

cat > page-state.json <<'EOF'
{
  "meta/config": {"version": 1, "data": {"agentName": "Agent OOO", "userName": "Sam", "timezone": "America/New_York", "mail": "gmail", "calendar": "google", "voice": "Professional, concise, friendly, warm."}},
  "meta/today": {"version": 1, "data": {"headline": "Set up today", "updatedAt": "2026-11-01T10:00:00-05:00"}},
  "brain/goal-1": {"version": 1, "data": {"kind": "goal", "label": "Half marathon in April", "short": "Half", "area": "health", "summary": "Run the city half marathon in April 2027.", "links": ["profile"], "story": {"feeds": [], "competes": [], "missing": ["No long run on the weekend calendar yet"], "suggest": "You might hold Sunday morning for a long run. Want Agent OOO to draft it?"}}},
  "todos/L1": {"version": 1, "data": {"ledger": [1], "title": "Renew the car registration", "category": "Admin", "state": "bare", "status": "open", "from": "Interview", "dueText": "Nov 30"}},
  "todos/L2": {"version": 2, "data": {"ledger": [2], "title": "Book Mia's dentist checkup", "category": "Family", "state": "bare", "status": "done", "doneAt": "2026-11-01T18:20:00-05:00", "doneBy": "you", "from": "Interview"}},
  "todos/L3": {"version": 1, "data": {"ledger": [3], "title": "Thank Dana for covering the carpool on Friday", "category": "Family", "state": "drafted", "status": "open", "from": "Interview"}},
  "todos/b1": {"version": 1, "data": {"ledger": [], "title": "Hold Sunday morning for a long run", "detail": "", "category": "Goal", "state": "recommend", "status": "open", "from": "Brain", "goal": "goal-1", "action": {"kind": "ask", "label": "Yes, draft it", "instruction": "You might hold Sunday morning for a long run. Want Agent OOO to draft it?"}, "updatedAt": "2026-11-01T19:05:00-05:00"}},
  "emails/e1": {"version": 3, "data": {"to": ["dana@example.com"], "toName": "Dana", "subject": "Re: Carpool Friday", "body": "Hi Dana, thank you for covering Friday. Sam", "threadId": "t-77", "kind": "thanks", "from": "Desk", "status": "sent", "draftId": "d-123", "createdAt": "2026-11-01T05:10:00-05:00", "sentAt": "2026-11-01T18:30:00-05:00", "sentMessageId": "m-901"}},
  "settings/trust": {"version": 2, "data": {"cats": {"schedule_reply": "ask", "book_meeting": "ask", "rsvp": "ask", "thanks": "auto", "nudge": "ask", "decline": "ask", "archive_promos": "ask", "money": "never"}}},
  "settings/protected": {"version": 1, "data": {"blocks": []}}
}
EOF
