---
name: desk
description: Runs the Desk, where the agent's work is delegated and executed. Use for the scheduled tasks The Desk - Morning (5am local) and The Desk - Evening (7pm local), when the user says "run the Desk", and when a memo run finds the Desk did not run. Reads mail and the calendar, keeps the task list current, and takes every open item as far as it can go by looking things up, drafting and offering calendar entries.
---

# The Desk

The Desk is where work is delegated and executed. The Morning Memo
and the Evening Debrief report what it did; this file says how it
works. How write-ups and drafts look is in the daily-readout skill's
`agent-comms-style.md`. How the work shows up in the memo is set by
`readout-format.md`, which wins if the two files disagree on that.
Read the user's `ways-of-working.md` before
starting; it overrides this file wherever they disagree.

## When it runs

Every day at 5am and 7pm local, one hour before each memo, so each
memo goes out with the work already done. If the user moves a memo,
move its Desk task with it: The Desk - Morning for the Morning Memo,
The Desk - Evening for the Evening Debrief. If the user turns the
Evening Debrief off, stop The Desk - Evening too.

## The run

1. **Read the standing context.** tasks.md, log.md,
   ways-of-working.md, people.md, personality.md, goals.md, and
   every topic file listed in ways-of-working.md. tasks.md is the system of
   record. Never work a workflow file. You may read a workflow's
   tracker only to recognize who is in it.
2. **Sweep.** Calendar for the day. Mail received AND sent since
   the last run. If the Desk has not run before, start from the
   "Mail swept through" time in ways-of-working.md. Sent matters
   as much as received: it says what
   the user already handled and what they promised. Mail is the
   source, never the store. Never read from a connector listed as
   switched off in ways-of-working.md.
3. **Reconcile.** Fold everything new into tasks.md in this same
   run, with a thread pointer (who, subject, last touched) on any
   item that has one. Anything not written down now is lost.
   Connect each new item to what it touches: a goal in goals.md, a
   person in people.md, an open item, a calendar entry. Mail from
   someone in people.md is linked to whatever is already open with
   them; a calendar entry is linked to the to-do it is for. Write
   the link on the item as a "touches" line. A link that is a guess
   goes to open-questions.md for the 1:1, never onto the item.
   Mail from someone in a workflow's tracker stays out of tasks.md,
   unless it asks the user for something only they can decide, such
   as a meeting or a yes. Then add one to-do with a thread pointer.
   Otherwise that workflow picks it up on its next run. If that
   workflow only runs on request, add one to-do instead: "Run
   [workflow name] for [sender]."
4. **Work the list.** Go item by item and take each one as far as
   it can go on its own. This is the step that makes the memo
   worth sending. See below.
5. **Log.** Add or update today's line in log.md, per memorialize:
   what closed, what changed, what the user decided.
6. **Count the run.** Append one line to usage-desk.md: the date, the
   time, how many open items had a state recorded at the end of this
   run, and how many of those were bare. Numbers only, never an item.

## Fridays: the usage roll-up

The Friday evening run does one more thing after step 6. It never
appears in a memo or in chat.

1. **Read usage-log.md in full.** Skip the header and any line that
   does not parse. The week runs from Saturday to this Friday, and two
   of the numbers below need the whole log. If the file does not
   exist, treat it as empty and carry on.
2. **Count.** Write these into usage-summary.md, overwriting it:
   the period, the first and last entry dates in the whole log, how
   many days had at least one entry, the total number of entries, and
   how many entries it took to reach the first one with outcome done
   and autonomy 4 or 5. Then the share of entries by context, the
   count by artifact, the share by mode, the average autonomy to one
   decimal, the count by feature, the share by outcome, and the
   corrected and abandoned entries by artifact with their commonest
   reason. Group those same corrected and abandoned entries by
   autonomy level too, with their commonest reason. Add the plugin
   version, 3.38.0, as plugin_version; keep this number in step with
   the manifests on every release. Then read usage-desk.md for the
   same week, treating it as empty if it does not exist, and add three
   numbers: how many Desk runs there were, how many items had a state
   recorded, and how many were left bare.
3. **Hide small numbers.** Any count under 3 is written as <3, and a
   percentage from a bucket under 3 is left out. Days active, total
   entries and the first-win count are always written in full.
4. **Write the two human lines** at the top of usage-summary.md, in
   the agent's own voice, for the Monday memo to use. The first says
   how many days the user worked with the agent and what for. The
   second gives the count behind the commonest correction, and only
   when one artifact has 3 or more: "Three emails came back for
   tone." Otherwise "Nothing came back for a fix." Never characterise
   the work, never promise to do better, and never mention a specific
   message.
5. **Write the agent note** at the bottom of usage-summary.md, under
   "## agent note": three short lines about what was hard this week,
   what instruction would have helped, and what the user seems to
   want that cannot be done yet. General observations only, never a
   quote, a name or a subject.
6. **Then the full counts** as a JSON block in the same file.

**Sending it.** Only if ways-of-working.md says "Share summary: yes".

- Read usage-submissions.md, treating it as empty if it does not
  exist. If this week is already there, stop.
- Send any weeks waiting in usage-pending.md first, oldest first, and
  drop each one from that file as it succeeds.
- If the telemetry key is blank, call register_install once with the
  install ID and write the key. The key lives in ways-of-working.md;
  ignore the tool's mention of config.md, which does not exist here. If that fails, stop and try again
  next Friday.
- Call submit_summary on the officeofone-telemetry server with the
  install ID, the key, the period, the counts from the JSON block,
  any survey answers in survey.md dated in this week, treating that
  file as empty if it does not exist, and the agent note as three
  lines.
- If it returns "ok", append one line to usage-submissions.md:
  `YYYY-MM-DD | submitted | period YYYY-MM-DD to YYYY-MM-DD`.
- Anything else, including no answer at all, means append this week's
  JSON block to usage-pending.md and try again next Friday. Never
  retry within the week.
- If a submission returns "error: auth", clear the telemetry key in
  ways-of-working.md and register again on the next run. Any other
  rejection leaves the key alone. Never clear it twice in the same
  week.

Never send a line from usage-log.md, whole or in part. Never send
anything from survey.md but the answer text. Never send demographics
or a completeness score, even though the tool accepts them. Never send
anything at all when sharing is off. Never bother the user with any of
this.

## Working the list (step 4)

Every open item is in one of four states, and the agent's job is
to move as many as possible out of the first one. Work the items
that touch a goal in goals.md before the ones that don't, and when
two items tie, the one that moves a goal goes first.

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
a reason: only the user can do it, it is a payment only the user
can make, or its source could not be opened. If it needs their
position first, it is LET'S TALK, not bare. Record the state and the
reason on the item in tasks.md.

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
| **RECOMMEND** | ink | The agent looked it up. Here is the pick, linked |
| **DRAFTED** | ink | The agent already did it. Waiting in their drafts |
| **LET'S TALK** | ink | Needs their position first. Twenty minutes in a session |

**All three tags are set in ink,** like the rest of the line, and the
RECOMMEND link is the only accent on it. The tags are told apart by
their words, not their colour.

LET'S TALK maps exactly to the "wait for their position" list
below. Expect it
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
costs them nothing. Drafting is not sending: never send an email
as the user without review, even if ways-of-working.md says
otherwise.

**Draft it, no permission needed,** when the work is assembling
what is already true: comparisons, research, summaries, a reply
that mostly restates facts from a thread, chasing or confirming,
prep before a meeting.

**Wait for their position** when the deliverable requires their
POSITION rather than their information:

- What they believe about something contested.
- How much time or money they'll commit, and to which dates and
  scope.
- Anything defining a relationship (an offer, a decline, terms).
- Anything where two plausible drafts go in opposite directions,
  so picking one wastes the work.

When a draft unavoidably contains invented positions, say so in
the line that reports it, and name the specific inventions ("the
five hours a week is mine, not yours").

**Draft everything that qualifies.** If two drafts in a row go
untouched for two days, ask before drafting more. Drafts nobody
reads are just a tidier backlog.
