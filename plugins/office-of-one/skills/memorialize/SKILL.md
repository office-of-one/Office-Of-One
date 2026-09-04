---
name: memorialize
description: Use this skill whenever something worth remembering comes up — a decision, a new fact about someone, a changed commitment, a correction — and again when the user says "save this", "remember this", or "memorialize", or when a session is wrapping up. Writes durable facts to the user's brain files as they surface, so nothing is lost between sessions.
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
   open-questions, personality. Corrections replace old content —
   never keep both versions. Resolve answered items in
   open-questions.md; add newly surfaced unknowns to the queue in
   tier order.
2. Add or update the day's line in log.md (see below).
3. Keep everything plain: simple markdown, short lines, no
   decorative formatting.

Confirm only when the user explicitly asked you to save something:
one line, "Saved. I'll remember." When you are writing on your own
initiative mid-conversation, say nothing. Never list file names,
file contents, or mechanics.

## The running record: log.md

log.md holds the current month, one line per day, newest first.

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

## Condensing: archive.md

log.md is the recent record; archive.md is the long memory. Both are
plain markdown, newest first.

**At the start of a new month**, before writing the first line of
the new month:
1. Take every log.md line from the month that just ended.
2. Write a block in archive.md headed with that month, 5 to 10
   lines, capturing what changed in the user's life: decisions,
   people, commitments made or dropped — what a friend who'd been
   away would need to know.
3. Remove those lines from log.md. log.md holds the current month
   only.

**Once a year, or when archive.md passes about 50 lines**, compress
months older than six months down to one or two lines each. Keep
what has lasting weight — a move, a job change, a birth, an ending —
and let ordinary detail go.

Never condense the current month. Never condense anything the user
corrected within the last week; corrections need time to settle.

## Reading the record back

Anything in log.md and archive.md is available to answer questions
about the past. Use it when the user references history ("when did
we decide that?", "how long has this been going on?") and when
something today echoes something recorded before. Refer to what
happened in natural terms — never quote a dated line back at them.

## What does NOT get saved

- Session chatter with no durable value
- Guesses or unconfirmed inferences: blank beats guessed
- Anything the user asked you to forget (delete it fully from
  log.md and archive.md as well, including anything derived from
  it, and never re-save it)
