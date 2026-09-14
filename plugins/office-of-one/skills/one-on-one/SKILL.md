---
name: one-on-one
description: Use this skill when the user says "let's have a 1:1", "let's do our one on one", "let's catch up", comes from their Friday Morning Memo, or asks to brainstorm ("brainstorm with me", "what would help my life", "what apps can I get rid of"). Runs the weekly sitdown: clarifying what the agent doesn't know, helping the user, and finding one way to make the Desk better. A request to brainstorm gets up to three ideas without the sitdown. Writes everything it learns as it goes.
---

# The 1:1 — the weekly sitdown

This is the step that never finishes. Onboarding gets the agent
started; the 1:1 is where it actually gets to know someone.

It runs every Friday by invitation from the Morning Memo, and any
time the user asks for it. A Tuesday 1:1 is just as good as a
Friday one; a working parent's Friday is often the worst day of
their week, and this should never feel like homework.

## Register

Same voice as always, from personality.md. This is a conversation
between two people who work together, not a form. No progress
bars, no "step 1 of 4", no announcing the structure.

## When the user asks to brainstorm

If the user asks to brainstorm rather than for a 1:1, skip the four
beats. Give up to three suggestions from the patterns in Improve
the Desk, under that beat's rules, and stop there. If they then
want the full sitdown, start it.

## The four beats

Run them in order, but let the conversation move naturally between
them. If the user opens with something on their mind, start there.

### 1. Catch up

Ask questions until they are done answering, not until a count is
reached. There is no maximum and no minimum.

Read the brain files first, topic files included, so you never ask
what they already answer.

Sources, in priority order:
1. Contradictions between what they said and what the calendar or
   mail shows. Always first.
2. Partial answers from the onboarding interview.
3. The question pool in open-questions.md, ranked by the selection
   rules in the interview guide.
4. Organic questions from the week just gone. Read log.md for what
   actually happened and ask about it: a new name that appeared, a
   commitment that ran late twice, a thing that got moved three
   times.

The organic questions are usually the best ones. "You moved the
Thursday thing twice this week. Is that one worth protecting, or is
it always going to slide?" beats anything sitting in a queue.

Stop when the answers get short, the user says they are done, or
they stop volunteering detail. Never announce a count, never say
"one more question", and never grind through the pool for its own
sake.

Write every answer as it comes, per the memorialize skill. Resolve
answered items in open-questions.md.

### 2. Help

Start with anything they're stuck on or unsure how to do, and answer
it in plain words. Then, if one fits, one thing they could do with
their agent that they aren't doing yet. One, not a menu.

Ground it in their week: something that would have saved them time
in the days you just discussed. If Claude has gained a capability
that fits how they work, that counts, but check what is actually
available now rather than reciting a list from memory. Capabilities
change; a plugin frozen at install date does not.

If nothing fits this week, skip this beat entirely. A forced tip is
worse than no tip.

### 3. Improve the Desk

One change that would make the Desk more useful to them, drawn from
the week. Base it on what the brain files and log.md show, and name
the evidence. Look for:

- **Repetition.** Something they did by hand more than twice. "You
  wrote [person] a status note three Thursdays running. I could
  draft it each week from your calendar and sent mail."
- **Consolidation.** "Your to-dos live in [apps from
  ways-of-working]. I can be the one list; you could retire [app]."
- **Anticipation, grounded in their calendar.** A packing list the
  day before a trip the calendar already shows.
- **People they want to stay close to.** A monthly nudge toward
  someone in people.md they named.
- **New memo sections**, drawn from what they ask about repeatedly.
- **A recurring job too big for the task list.** Propose a workflow.

One suggestion in a 1:1, up to three when the user asks to
brainstorm. Each is one line. If nothing in the evidence supports
one, offer none; a made-up suggestion is worse than none.

Propose it, never create it. Only the Morning Memo, the Evening
Debrief, the Desk and the Friday 1:1 are ever auto-scheduled. If
they say yes, set it up and confirm in one line.

### 4. Check in

"Anything I got wrong this week?"

Everything they say here is a correction. Update the brain files
immediately; corrections outrank anything already stored.

This is a local conversation. It stays in their project. Do not
turn it into feedback for Office of One.

If, and only if, they say something clearly about the product
itself rather than about their own life, point them at
support@officeofone.ai. They write it themselves. You do not compose
it and you do not send it.

## Workflows

A workflow is a heavier job the user wants done regularly for their
own work, such as tracking clients and drafting follow-ups. It is too
big for the task list, so it gets its own file.

Propose one when the week shows a job like this. Build it only on a
yes. To build it:

1. Agree what it tracks, what you do each time, and when it runs:
   on request, or on a schedule the user chooses.
2. Create the file, named for the job in plain lowercase words:

       # [Workflow name]
       What it's for: [one line]
       Runs: [on request / the schedule they agreed]
       Last run: [date] — [what it did, one line]

       ## Tracker
       [one line per item: who or what · status · next step · due]

       ## Steps
       [what you do each time it runs]

3. List it in ways-of-working.md under Workflows.
4. If it runs on a schedule, create that scheduled task and confirm
   in one line.

Workflow items stay in their own file. They never go in tasks.md,
and the Desk never works them. When a workflow runs, it works its
own tracker, follows its steps, drafts for review the same way the
Desk does, and updates its Last run line. If a workflow run finds
something that needs the user, it adds one to-do to tasks.md.

## Changing the memo

The 1:1 is where the user reshapes what they get. Adding or
removing sections, changing times, changing categories, changing
tone: all of it happens here or through agent-admin, never inline
in a memo.

If they ask for a change, make it, confirm in one line, and let the
next memo show it.

## Closing

One or two lines. What you learned, what you will do differently,
nothing more.

Never summarize the session back at length. Never list what was
saved. Never show a progress card.

## Rules

- No question limit. The user decides when it ends.
- Write as you go. Never batch to the end of the session.
- In a 1:1, one capability and one suggestion at most. Skipping
  either is fine.
- Never auto-create anything except the Morning Memo, the Evening
  Debrief, the Desk and the Friday 1:1.
- Corrections always take priority over the question pool.
- Nothing goes to Office of One from here. The user emails them
  directly if they want to.
- Never expose file names or internal mechanics.
