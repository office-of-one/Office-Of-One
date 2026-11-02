---
name: memorialize
description: Use this skill whenever something worth remembering comes up — a decision, a new fact about someone, a changed commitment, a correction — and again when the user says "save this", "remember this", or "memorialize", or when a session is wrapping up. Also use it whenever the user asks about something from the past that the brain files do not hold ("when did we…", "what happened with…", "remind me what…"): it looks it up in the archive. Writes durable facts to the user's brain files as they surface, so nothing is lost between sessions.
---

# Memorialize — save as you go

Context is the product. This skill writes durable material to the
brain files the moment it appears, not at the end of a session.

**Do not wait for the session to end.** Sessions rarely end cleanly:
people close the app, get interrupted, run out of battery. Anything
that waits for a tidy ending is eventually lost. Write it when it
happens.

## When to write

Write immediately, mid-conversation, whenever any of these appear.
Do not announce it or interrupt the flow — write, then carry on with
what you were saying.

- A decision the user makes
- A new fact about a person, schedule, commitment, or preference
- A correction (these override anything stored, and are the most
  important thing to save immediately)
- A task created or completed
- An answer to an open question
- Anything the user reacts to strongly — that reaction is itself
  worth knowing

Also write when the user says "save this", "remember this", or
"memorialize", and when a conversation is clearly wrapping up or
about to be compacted. Those are additional triggers, not the main
ones.

## What to write where

1. Update the relevant brain file: people, ways-of-working, tasks,
   open-questions, personality, or a topic file. Any change
   replaces what it changes — never keep both versions. A correction
   is the urgent case: it overrides anything stored. Resolve answered items in
   open-questions.md; add newly surfaced unknowns to the queue in
   tier order.
   A person has one line in people.md: who they are to the user and
   what stays true about them. A new fact about someone rewrites
   their line. A schedule goes on the calendar or in tasks.md, and
   what happened goes in log.md; neither goes in people.md. A name
   that came up once, on a flyer, in a thread or in a capture, stays
   on the item that mentioned it. Someone earns a line when they are
   household or family, carry a standing rule, come up again, or the
   user says they matter.
   A subject with real substance and no home gets its own topic
   file, under the same rules as onboarding (interview-guide.md,
   Step 5): only for more than a passing mention, plain lowercase
   name, add to an existing topic file first, list it in
   ways-of-working.md, and for a sensitive subject only when the
   user named it themselves. Dated actions still go in tasks.md,
   and people in people.md.
   When you write an item to tasks.md, note what it touches: a goal
   in goals.md, a person in people.md, a topic file, or another open
   item. Put the link on the item itself, as a "touches" line, so
   every skill that reads it sees the connection without re-deriving
   it. The touches line belongs to the item; a person's line in
   people.md never carries one. A link you are sure of is a fact; a link you are
   guessing at goes to open-questions.md as a question for the 1:1,
   never onto the item.
   Never start a workflow file on your own. Workflows are built
   only in a 1:1, after the user agrees. An update about a workflow
   goes in that workflow's file.
2. Add or update the day's line in log.md (see below).
3. Keep everything plain: simple markdown, short lines, no
   decorative formatting.

Confirm only when the user explicitly asked you to save something:
one line, "Saved. I'll remember." When you are writing on your own
initiative mid-conversation, say nothing. Never list file names,
file contents, or mechanics.

## The running record: log.md

log.md holds the last four weeks, one line per day, newest first.
The weekly archive moves older lines out.

Format: `YYYY-MM-DD — one sentence.`

The line describes what happened in the user's life or work, not
what you did to the files.

Good: `2026-09-14 — Decided against the Tahoe trip; too close to
Maya's recital.`
Bad: `2026-09-14 — Updated people.md and tasks.md.`

Rules:
- One line per day. If today's line already exists and something
  bigger happens later, rewrite the line to cover what will matter
  in six months. Do not add a second line for the same day.
- Many days produce nothing worth recording. Leave those days out
  rather than padding them.
- Never record anything the user asked you to forget.

## The archive

log.md is the recent record. Older material lives in two places,
both written by the Desk's weekly cleanup and archive (the rules are
in the desk skill):

- **archive/**, a folder of monthly files, archive/YYYY-MM.md: the
  detail, moved word for word. Old log.md lines, tasks closed more
  than a week ago, questions answered more than four weeks ago,
  people with no line any more, superseded facts and stray notes.
- **archive.md**, the long memory: one block per month, 5 to 10
  lines, written once a month has fully left log.md. It captures
  what changed in the user's life: decisions, people, commitments
  made or dropped. What a friend who'd been away would need to
  know.

**Once a year, or when archive.md passes about 50 lines**, compress
months older than six months down to one or two lines each. Keep
what has lasting weight: a move, a job change, a birth, an ending.
The detail is still in archive/.

Never summarize the current month into archive.md. Never archive
anything the user corrected within the last week; corrections need
time to settle.

**Every week**, the Desk cleans up the brain so each file holds only
what it is for, then archives what is not needed right now. If a
run finds that more than seven days overdue, it does it first.

## Reading the record back

When the user asks about the past ("when did we decide that?", "what
happened with the roofer?", "how long has this been going on?"), or
something today echoes something older, look in this order and stop
at the first that answers:

1. The brain files and log.md.
2. archive.md, for the month or the subject.
3. archive/: search the monthly files for the names, words and
   dates in the question, newest month first. Open only the months
   that match.

Answer from what you find, in natural terms. Never quote a dated line
back at them, and never mention files or the archive. If it is
nowhere, say you have no record of it rather than guessing.

Something found in archive/ that matters again (a person who is back,
a subject that is live again) goes back into its brain file, per
"What to write where".

## What does NOT get saved

- Session chatter with no durable value
- Guesses or unconfirmed inferences: blank beats guessed
- Anything the user asked you to forget (delete it fully from
  log.md, archive.md, every file in archive/ and any topic file as
  well, including
  anything derived from it, and never re-save it). If a whole
  topic file was about that subject, delete the file and remove
  it from the Topic files list.

Personal details are never left out for being personal.
