---
name: desk
description: Runs the Desk, where the agent's work is delegated and executed. Use for the Desk's scheduled runs at 5am and 7pm local, when the user says "run the Desk", and when a memo run finds the Desk did not run. Reads mail and the calendar, keeps the task list current, and takes every open item as far as it can go by looking things up, drafting and offering calendar entries.
---

# The Desk

The Desk is where work is delegated and executed. The Morning Memo
and the Evening Debrief report what it did; this file says how it
works. How write-ups and drafts look is in the daily-readout skill's
`agent-comms-style.md`. Read the user's `ways-of-working.md` before
starting; it overrides this file wherever they disagree.

## When it runs

Every day at 5am and 7pm local, one hour before each memo, so each
memo goes out with the work already done. If the user moves a memo,
move its Desk run with it. If the user turns the Evening Debrief off,
stop the 7pm Desk run too.

## The run

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

**The gate.** The Desk is not finished until every open item in
the ledger has a state recorded: RECOMMEND, DRAFTED, LET'S TALK,
calendar entry offered, or bare with its reason. A bare item needs
a reason: it needs their position, it spends money, or its source could not be
opened. Record the state and the reason on the item in tasks.md.

Rules that keep this honest:

- Never invent a URL, a price, a phone number or a review count.
  A named product with no number beats a number that is wrong.
- Name what could not be verified, in the sources line.
- Mark an inference as an inference, in the ledger and in the
  memo.
- The reasoning goes in the ledger. The memo gets the pick and the
  link, nothing else.

## Carry the answer, not the task

**Any to-do that is fundamentally a lookup gets solved before it
is listed.** "Buy wired headphones for [child]" is not really a
task, it is a question nobody has answered. Answer it first, so
the remaining work is one tap rather than an evening of research.

**The task stays theirs. The recommendation is marked as the
agent's.** Do not rewrite their to-do into the agent's answer:

    5. Buy wired headphones for [child] · RECOMMEND [product]
       [link] · no date

They can ignore the recommendation and the task still reads
correctly.

One pick, not a shortlist, unless the choice genuinely turns on
their preference (colour, budget tier) in which case name two and
say what separates them. Always link.

- Never print a price or a review count as fact when it could not
  be fetched. Some retail sites block automated fetching.
- Prefer the boring default a thousand people already use over the
  clever find.
- For services, the equivalent is: who is nearby, who takes the
  insurance, what the number is, what to say when they answer.

Do this during each Desk run, before the memo goes out,
not by asking which one they want.

## The four states, and the tags

Every to-do is in exactly one state. One tag per line, never two.

| Tag | Colour | Means |
|---|---|---|
| *(none)* | — | Theirs alone. The agent has nothing to add |
| **RECOMMEND** | Purple | The agent looked it up. Here is the pick, linked |
| **DRAFTED** | Purple tint | The agent already did it. Waiting in their drafts |
| **LET'S TALK** | Purple tint | Needs their position first. Twenty minutes in a session |

**All three tags are purple.** Purple means the agent is involved
in that line, whatever the stage. Pine stays structural: numbers,
squares, links, section furniture. The tags are told apart by
their words, not their colour.

LET'S TALK maps exactly to the "ask first" list below. Expect it
to be rare, one per memo at most. If it is on five items the agent
is avoiding work it could have done.

"LET'S TALK", never "LET'S 1:1": the 1:1 means the Friday sitdown,
and a tag saying 1:1 reads as "this waits until Friday", the
opposite of the intent.

No fifth tag. "Send me the PDF and I'll finish this" is a Getting
ahead line, not a state of the task. Five labels is where a system
starts looking like a dashboard.

## When to draft without asking

Default is DRAFT IT, then say so in one line. Asking first costs a
round trip that can span a whole memo cycle, and an unread draft
costs them nothing.

**Draft it, no permission needed,** when the work is assembling
what is already true: comparisons, research, summaries, a reply
that mostly restates facts from a thread, chasing or confirming,
prep before a meeting.

**Ask first** when the deliverable requires their POSITION rather
than their information:

- What they believe about something contested.
- What they will commit to: hours, money, dates, scope.
- Anything defining a relationship (an offer, a decline, terms).
- Anything where two plausible drafts go in opposite directions,
  so picking one wastes the work.

When a draft unavoidably contains invented positions, say so in
the line that reports it, and name the specific inventions ("the
five hours a week is mine, not yours").

**Draft everything that qualifies.** If two drafts in a row go
untouched for two days, ask before drafting more. Drafts nobody
reads are just a tidier backlog.
