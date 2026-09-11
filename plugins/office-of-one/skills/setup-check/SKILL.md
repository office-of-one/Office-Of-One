---
name: setup-check
description: Use this skill whenever the user says "Test my setup", "Status check", "Set up my schedules", "Is everything set up", or the older phrasing "Test daily summary", or asks whether their agent, memos, or connectors are working. Also used by the onboarding interview to run the four setup tests. Returns fixed-format status screens so every workshop participant sees identical output.
---

# Setup Check — deterministic status screens

This skill exists so that during the workshop, every participant who
types the same phrase sees the same screen. Output the formats below
EXACTLY, filling only the bracketed values. Add nothing before or
after the format block. No extra commentary, no analysis.

The agent's four scheduled tasks are the Morning Memo (daily 6am
local), the Evening Debrief (daily 8pm local), Agent work (daily
at 5am and 7pm local, one hour before each memo) and the Friday
1:1 (weekly on Friday). Times come from ways-of-working.md when the
user has changed them.

## Phrase: "Test my setup"

Run the four tests IN ORDER. The email test runs last because it
reports the results of the other three.

A failed test never blocks the user from finishing. Show the
failure, offer "Fix it" once, and carry on if they would rather
move on.

### The tests

1. CALENDAR
   Create an event 15 minutes from now titled "Office of One test —
   safe to delete". Confirm it exists. Delete it. PASS only if both
   the create and the delete succeed. Never leave the event behind.
   If the delete fails, say so plainly and name the event so the
   user can remove it.
   Fail line: "I can see your calendar but I can't add to it."

2. MORNING MEMO
   Confirm the daily scheduled tasks exist — the Morning Memo, the
   Evening Debrief and Agent work. Then send one real Morning Memo
   to the user's own inbox using the daily-readout skill's test
   run: every to-do listed, two items worked, nothing shown in the
   chat. PASS only when the memo was sent.
   Fail line: "Your Morning Memo isn't scheduled yet."
   If any is missing, the line names which.
   Fail line if mail cannot send: "I can't send your Morning Memo
   by email yet."
   If both apply, show the schedule line: missing schedules stop
   every memo from arriving, so they are reported first. A memo that
   sent does not make this test pass while a schedule is missing.

3. FRIDAY 1:1
   Confirm the weekly scheduled task exists, then run one real
   question from open-questions.md, live, using the one-on-one
   skill. Write the answer. This is the only test that produces
   something the user keeps.
   Fail line if the schedule is missing: "Your Friday 1:1 isn't
   scheduled yet."
   Fail line if there are no questions: "I don't have any questions
   queued for you yet."

4. EMAIL
   Draft the Office of One note per feedback-template.md, show it
   in full, and send only on an explicit yes.
   PASS means the mail connector can send. If the user declines to
   send, that is NOT a failure; the line reads
   "ready (nothing sent)".
   Fail line: "I can't send email yet."
   After a successful send, restate the rule it bent:
   "That was a one-off so we could check it works. From here I'll
   always show you a draft first."
   If the email test itself fails, the other failures are shown on
   screen only. Say so in one line.

### The screen

Output exactly:

TESTING YOUR SETUP
Calendar: [PASS / one-sentence fix]
Morning Memo: [PASS / one-sentence fix]
Friday 1:1: [PASS / one-sentence fix]
Email: [PASS / ready (nothing sent) / one-sentence fix]

Then ONE closing line, whichever applies:
"All tests passed. You're set."
"Say 'Fix it' and we'll work through what's left."

If the user says "Fix it", walk through the failures one at a time,
then re-run the check and show the screen again. A missing schedule
is fixed by running "Set up my schedules" below, not by asking the
user to do anything.

## Phrase: "Set up my schedules"

The recovery path for anyone whose interview was interrupted, or
whose schedules were never created. Check which of the four exist,
create only the missing ones at the times recorded in
ways-of-working.md (or the defaults if none are recorded), then
output exactly:

YOUR SCHEDULES
Morning Memo: [every day at TIME / just created]
Evening Debrief: [every day at TIME / just created]
Agent work: [every day at TIMES / just created]
Friday 1:1: [Fridays / just created]

Then one line only:
"That's everything running. Your next Morning Memo arrives [when]."

## Phrase: "Status check"

Output exactly:

STATUS
Agent: [agent name]
Connectors: [comma-separated list, or "none yet"]
Scheduled tasks: [count] ([name] on [days] at [time])
Setup: [filled/empty block progress bar] [n]% complete
Questions I'll ask at our next 1:1: [count]

Then one line only:
"Say 'Interview me' to continue setup, or 'Test my setup' to check
everything is working."

If the scheduled task count is under four, add one further line:
"Say 'set up my schedules' and I'll build the missing ones."

## Rules

- Formats are VERBATIM. Same words for every user, every time.
- The user-facing names are Morning Memo and Evening Debrief. Older
  phrasings still trigger this skill; the screens always use the
  current names.
- Never list brain file names or internal mechanics.
- Never invent status. If something cannot be verified, it counts
  as failed and appears with its fix line.
- The calendar test always cleans up after itself.
- Nothing is sent anywhere without an explicit yes.
