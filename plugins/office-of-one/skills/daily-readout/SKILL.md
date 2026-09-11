---
name: daily-readout
description: Build and send the Morning Memo and the Evening Debrief. Use for the scheduled daily runs, and whenever the user asks to see either one now, including "run my morning memo", "run my evening debrief", "run my memo", or the older phrasings "run my daily brief", "run my readout", "run my evening brief". Also use it when the user replies to a memo or debrief.
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

## The run, in order

1. **Read the standing context.** tasks.md, log.md,
   ways-of-working.md, people.md, personality.md, and every topic
   file listed in ways-of-working.md. tasks.md is the system of
   record.
2. **Sweep.** Calendar for the day. Mail received AND sent since
   the last run. Sent matters as much as received: it says what
   the user already handled and what they promised. Mail is the
   source, never the store.
3. **Reconcile.** Fold everything new into tasks.md in this same
   run, with a thread pointer (who, subject, last touched) on any
   item that has one. Anything not written down now is lost.
4. **Work the list.** Before writing a single line of the memo,
   go item by item and take each one as far as it can go on its
   own. This is the step that makes the memo worth sending. See
   below.
5. **Write the memo**, in the order `readout-format.md` sets.
6. **Send** the HTML and the plain-text alternative. If no mail
   connector is available, deliver in the app only and say so once,
   in a single line at the end: "I couldn't email this one. Say
   'Test my setup' and I'll help you connect mail." Never fail
   silently.
7. **Log** one line in log.md: what closed, what changed, what the
   user decided.

## Working the list before writing (step 4)

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

Rules that keep this honest:

- Never invent a URL, a price, a phone number or a review count.
  A named product with no number beats a number that is wrong.
- Name what could not be verified, in the sources line.
- Mark an inference as an inference, in the ledger and in the
  memo.
- The reasoning goes in the ledger. The memo gets the pick and the
  link, nothing else.
- Volume cap: two unsolicited drafts in flight. If the last two
  went untouched, stop drafting and ask.

## Scheduling

The Morning Memo, the Evening Debrief and the Friday 1:1 are the
only auto-created recurring tasks. Their times and days come from
ways-of-working.md.
Everything else recurring is proposed and confirmed.

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
