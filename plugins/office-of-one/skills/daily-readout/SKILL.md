---
name: daily-readout
description: Build and send the Morning Memo and the Evening Debrief, and run Agent work, the sweep that prepares them an hour earlier. Use for the scheduled runs, and whenever the user asks to see either memo now, including "run my morning memo", "run my evening debrief", "run my memo", "run agent work", or the older phrasings "run my daily brief", "run my readout", "run my evening brief". Also use it when the user replies to a memo or debrief.
---

# Daily readout

Two things the user receives: the **Morning Memo** and the
**Evening Debrief**. Never call them briefs.

Read `readout-format.md` for the layout and the build rules, and
`agent-comms-style.md` for the tags, the recommendation rules and
when to draft without asking. If this file and readout-format.md
disagree, readout-format.md wins. Read the user's own
`ways-of-working.md` last; it overrides both wherever they
disagree.

## Two kinds of run

The work and the memo are separate runs, an hour apart, so each
memo goes out with the work already done.

- **Agent work** runs every day at 5am and 7pm local. It does
  steps 1 to 5.
- **The Morning Memo** runs at 6am and **the Evening Debrief** at
  8pm local. Each does steps 6 to 9.

Agent work always runs one hour before each memo. If the user
moves a memo, move its Agent work run with it. If the user turns
the Evening Debrief off, stop the 7pm Agent work run too.

## Agent work

1. **Read the standing context.** tasks.md, log.md,
   ways-of-working.md, people.md, personality.md, and every topic
   file listed in ways-of-working.md. tasks.md is the system of
   record.
2. **Sweep.** Calendar for the day. Mail received AND sent since
   the last run. Sent matters as much as received: it says what
   the user already handled and what they promised. Mail is the
   source, never the store. Never read from a connector listed as
   switched off in ways-of-working.md.
3. **Reconcile.** Fold everything new into tasks.md in this same
   run, with a thread pointer (who, subject, last touched) on any
   item that has one. Anything not written down now is lost.
4. **Work the list.** Go item by item and take each one as far as
   it can go on its own. This is the step that makes the memo
   worth sending. See below.
5. **Log.** Add or update today's line in log.md, per memorialize:
   what closed, what changed, what the user decided.

## Working the list (step 4)

Every open item is in one of four states, and the agent's job is
to move as many as possible out of the first one.

- **A lookup?** Solve it. One pick, linked, tagged RECOMMEND. Buy
  X, find a Y, book a Z, get a quote, pick a provider, which form,
  what number to call: these are not tasks, they are questions
  nobody answered yet.
- **Assembling what is already true?** Draft it, tag DRAFTED, say
  so in one Getting ahead line. Comparisons, summaries, a reply
  that restates facts from a thread, chasing, confirming, meeting
  prep.
- **Needs their position first?** Tag LET'S TALK. Do not draft it
  blind.
- **Nothing to add?** Leave it bare.

**Things they have to be at.** When an item needs someone
somewhere at a set time and place, and it is not on the calendar,
offer to add it: one Getting ahead line that names the entry, such
as "Say yes and I'll put Mia's pickup at LAX on your calendar for
Thu 2pm." Never add it without a yes. The entry goes to the user
only unless they say otherwise. Once it exists, the item leaves the
to-do list, unless something must happen before it.

**The gate.** Agent work is not finished until every open item in
the ledger has a state recorded: RECOMMEND, DRAFTED, LET'S TALK,
calendar entry offered, or bare with its reason. A bare item needs a reason: it needs
their position, it spends money, or its source could not be
opened. Record the state and the reason on the item in tasks.md.

Rules that keep this honest:

- Never invent a URL, a price, a phone number or a review count.
  A named product with no number beats a number that is wrong.
- Name what could not be verified, in the sources line.
- Mark an inference as an inference, in the ledger and in the
  memo.
- The reasoning goes in the ledger. The memo gets the pick and the
  link, nothing else.
- Draft everything that qualifies. If two drafts in a row go
  untouched for two days, ask before drafting more.

## The memo run

6. **Catch up.** Sweep mail received and sent since Agent work
   ran. Add anything new to tasks.md as a bare item marked
   "arrived after Agent work", with its thread pointer. No
   research or drafting here; the next Agent work run takes it
   further.
7. **Check Agent work ran.** If any other open item has no state
   recorded, Agent work did not run or did not finish. Do its
   steps now, then write the memo. A late memo beats a thin one.
8. **Write the memo**, in the order `readout-format.md` sets.
9. **Send** the HTML and the plain-text alternative. If no mail
   connector is available, deliver in the app only and say so once,
   in a single line at the end: "I couldn't email this one. Say
   'Test my setup' and I'll help you connect mail." Never fail
   silently.

## The test run

The setup check's Morning Memo test runs one real Morning Memo on
demand. It is the same run with three differences:

- **Two items worked.** Do Agent work steps 1 to 3, then take
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

## Scheduling

The Morning Memo, the Evening Debrief, Agent work and the Friday
1:1 are the only auto-created recurring tasks. Their times and
days come from ways-of-working.md. Everything else recurring is
proposed and confirmed.

The scheduler's minimum interval is one hour. A faster pickup loop
is not available; do not promise one.

## Replies

The user replies in their own words, usually by number ("do 6 and
7", "1 is sent, 8 pushed"). Resolve by number first, then name,
then time, against the numbering in tasks.md. Act on what is
reversible, ask on what is not, then update the ledger.

## Never

- Never send an email as the user without review, unless they
  chose draft-and-send in ways-of-working.md.
- Never expose file names or internal mechanics in the memo. They
  have an agent, not a filesystem.
- Never ask a question from open-questions.md in a memo. Those
  belong to the 1:1.
- Never fabricate a Getting ahead line to fill the section.
- Never narrate how the memo was made: no "test run", no
  scheduling mechanics, nothing about updating the record. Getting
  ahead lines report work done for the user, which is different.
