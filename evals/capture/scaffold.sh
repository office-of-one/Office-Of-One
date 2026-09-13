#!/usr/bin/env bash
# Gives the eval run a finished-looking brain, so capture has somewhere
# to file what it extracts. Without this the agent has no brain files and
# talks about the plumbing instead of the user's day.
#
# Invented people only: Sam (the user), Mia (their child).
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

## Invite rules

Calendar invites go to Sam only unless Sam says otherwise.
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
   - Agent work: every day at 5am and 7pm
   - Friday 1:1: weekly on Friday
5. System of record for tasks: tasks.md

- Timezone: America/New_York

## Topic files

None yet.
EOF

cat > tasks.md <<'EOF'
# Tasks

The live list, and the ledger. This is the system of record.

## Priority today

1. Renew the car registration · due 2026-09-30 · open

## School

(nothing yet)

## Open questions put to them

(none)
EOF

cat > open-questions.md <<'EOF'
# Open Questions

(none)
EOF

cat > log.md <<'EOF'
# Log

Newest first.
EOF

cat > archive.md <<'EOF'
# Archive

Closed items, newest first.
EOF
