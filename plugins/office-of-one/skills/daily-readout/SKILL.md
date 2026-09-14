---
name: daily-readout
description: Build and send the Morning Memo and the Evening Debrief, which tell the user what is coming, what needs them and what got done, and close the loop on every open item. Use for the scheduled memo runs, and whenever the user asks to see either memo now, including "run my morning memo", "run my evening debrief", "run my memo", or the older phrasings "run my daily brief", "run my readout", "run my evening brief". Also use it when the user replies to a memo or debrief.
---

# Daily readout

Two things the user receives: the **Morning Memo** and the
**Evening Debrief**. Never call them briefs.

Read `readout-format.md` for the layout and the build rules, and
`agent-comms-style.md` for how write-ups and drafts look. If this
file and readout-format.md disagree, readout-format.md wins. Read the user's own
`ways-of-working.md` last; it overrides both wherever they
disagree.

## The memos and the Desk

The work is done by the Desk, in the desk skill, at 5am and 7pm
local. The Morning Memo runs at 6am and the Evening Debrief at 8pm
local, one hour after each Desk run, so each memo reports work that
is already done. If a scheduled task or the user asks this skill to
run the Desk, use the desk skill instead.

## The memo run

1. **Catch up.** Sweep mail received and sent since the Desk
   ran. Add anything new to tasks.md as a bare item marked
   "arrived after the Desk", with its thread pointer. No
   research or drafting here; the next Desk run takes it
   further.
2. **Check the Desk ran.** If any other open item has no state
   recorded, the Desk did not run or did not finish. Run the desk
   skill's steps now, then write the memo. A late memo beats a thin one.
3. **Write the memo**, in the order `readout-format.md` sets.
4. **Send** the HTML and the plain-text alternative. If no mail
   connector is available, deliver in the app only and say so once,
   in a single line at the end: "I couldn't email this one. Say
   'Test my setup' and I'll help you connect mail." Never fail
   silently.

## The test run

The setup check's Morning Memo test runs one real Morning Memo on
demand. It is the same run with three differences:

- **Two items worked.** Do the desk skill's steps 1 to 3, then take
  exactly two items as far as they can go. Pick the most
  research-heavy first: a lookup or comparison that ends in a
  RECOMMEND pick or a researched DRAFTED write-up. If there is no
  research to do, pick the next best, such as a reply to draft.
  Every other to-do is listed bare, and the gate does not apply.
- **Every to-do still appears**, per the complete-list rule.
- **Email only.** Send it to the user's own inbox and never show it
  in the chat. If no mail connector can send, the test fails;
  never fall back to showing the memo on screen.

Everything else follows this file and readout-format.md exactly.
Scheduled runs always do the full work.

## Before sending

Check the finished memo, fix anything that fails, and check again.
Never mention the checks, and never send a memo with one failing.

- Every open item in tasks.md is in the memo, numbered straight
  through with no gaps or repeats.
- Every to-do line has the shape readout-format.md sets.
- Every link opens. Every price, phone number or count came from a
  source recorded in the ledger; anything unchecked is named in the
  sources line instead.
- Tags match what happened: DRAFTED only if the draft exists,
  RECOMMEND only with a linked pick, LET'S TALK only where their
  position is needed.
- Nothing appears that the user already did. Check sent mail.
- The plain-text version has the same markers and numbering.

## Scheduling

Memo times come from ways-of-working.md. The scheduler's minimum
interval is one hour, so never promise anything faster.

## Replies

The user replies in their own words, usually by number ("do 6 and
7", "1 is sent, 8 pushed"). Resolve by number first, then name,
then time, against the numbering in tasks.md. Act on what is
reversible, ask on what is not, then update the ledger.

## Never

- Never send an email as the user without review.
- Never put file names, mechanics or how the memo was made in the
  memo: no "test run", no scheduling, nothing about updating the
  record. Getting ahead lines report work done, which is different.
- Never ask a question from open-questions.md in a memo. Those
  belong to the 1:1.
- Never bring up the Desk with the user, in the memo or in chat, and
  never explain why a memo is late or thin. If the user asks what
  the Desk is, say: "The Desk is where your work is delegated and
  executed."
