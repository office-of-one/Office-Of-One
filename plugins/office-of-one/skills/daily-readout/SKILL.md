---
name: daily-readout
description: Runs the user's Morning Memo and Evening Debrief. Triggered by the scheduled tasks, or when the user says "run my morning memo", "run my evening debrief", "run my memo", or the older phrasings "run my daily brief", "run my readout", "run my evening brief". Also use this skill when the user replies to a memo or debrief with corrections or comments. Reads the brain files, the calendar, and both received and sent mail, and produces a concise readout the user can reply to inline.
---

# The Morning Memo and the Evening Debrief

**Read readout-format.md in this skill folder before writing
either.** That file owns the structure, the section order, the
markers and numbering, the close, and the style rules. This file
owns the procedure. If the two ever disagree, readout-format.md
wins.

The two names the user sees are **Morning Memo** and **Evening
Debrief**. Never call them briefs in anything the user reads. Older
phrasings still trigger this skill, because people trained in
earlier workshops learned them, but the output always uses the
current names.

## Before writing the Morning Memo: catch up the record

The Morning Memo is the one thing that runs every day on a
schedule, so it is the safety net for anything an interrupted
session failed to save.

Before composing, check log.md for yesterday's line. If it is
missing but yesterday clearly had activity — calendar events that
happened, a conversation, a decision visible in mail — write the
line now, following the rules in the memorialize skill.

If the previous month has not yet been condensed into archive.md and
today is in a new month, do that first, also per memorialize.

Do all of this silently. It never appears in the memo.

## Producing either one

1. Read personality.md, people.md, ways-of-working.md and tasks.md.
2. Read any reply that has come in since the last one and apply it
   before composing. Last night's reply changes this morning's
   memo.
3. Sweep the calendar and BOTH mail folders for the window it
   covers. See below.
4. Build it per readout-format.md.
5. Update tasks.md: what was surfaced, what is still open, and the
   date each item was last shown. This is what makes the next one
   able to say "carried over 3 days" instead of repeating itself.

## Reading mail: received AND sent

Both the Morning Memo and the Evening Debrief read both folders,
every time. Reading only what arrived produces a memo that is
confidently wrong.

**Received** is what came in and might need them.

**Sent** is what they promised and what they have already handled.

Four things come out of reading both:

1. **Nothing is surfaced that they already did.** If a reply was
   sent at 11pm, "reply to the coach" does not appear at 6:45am.
   Check sent before listing any mail-derived action.
2. **Commitments they made become action items.** "I'll get you
   that by Friday" lives only in sent mail. It becomes an item with
   the person's name and the date promised, phrased with a verb:
   "Send Dana the numbers · you · promised Friday".
3. **Who is waiting on them.** Received with no matching sent
   reply, weighted by whoever is on the flag list in people.md.
4. **Patterns worth automating.** Something written by hand three
   times in sent mail is what the Friday idea is drawn from.

For the Evening Debrief, sent mail is often what moved: something
they sent today may have closed an item or created a new
commitment. Read it before writing "what moved today".

Map structure and relationships. Do not read deeply into personal
content, and never quote a private message back in a memo.

## Delivery

Both go out by email and are available in the app. There is no
delivery setting; the user was never asked to choose.

If no mail connector is available, deliver in the app only and say
so once, plainly, in a single line at the end: "I couldn't email
this one. Say 'Test my setup' and I'll help you connect mail."
Never fail silently.

## Using the long memory

log.md and archive.md hold what has happened over time. Read them
when something today connects to the past: an annual commitment
coming round again, a decision made before that today's events
touch, a person who hasn't come up in months reappearing.

Use it sparingly and naturally — a single line in a status note
("same weekend as last year's trip") is the right weight. Never
recite history, never quote a dated line back, and never add a
"looking back" section. The memo is about today.

## Timing rule

Anything due tomorrow is surfaced TODAY in the Morning Memo, and
tonight in the Evening Debrief if it needs preparing. Never surface
a deadline for the first time on the day it is due if it was
visible earlier.

## The reply loop

Replies are the whole point of the format. When the user replies:

1. Match what they wrote to items in this order: number, then name,
   then time. "Brief is done, fees are September, 3 pushed, Alex
   has the 5:15" resolves four things.
2. Treat every comment as a correction or an instruction.
3. Update tasks.md and the relevant brain files immediately.
   Corrections outrank anything already stored.
4. Anything they mention that is not on the list is new
   information: write it down.
5. If the reply asks to start the 1:1, hand off to the one-on-one
   skill.
6. If the reply is about the product rather than their own life,
   point them at support@officeofone.ai rather than composing
   anything on their behalf.
7. Confirm briefly, in one or two lines, and reflect the changes in
   the next one.

Never ask the user to reply in a particular format. They will write
whatever they write; the matching is your job.

## Voice and noise rules

- Clear, concise, zero noise. The Morning Memo is scannable in
  under a minute, the Evening Debrief in ten seconds. When in
  doubt, cut.
- Facts, never judgments. Report what you found and how much of it;
  never characterise it.
- NEVER include meta-narration: nothing about how it was generated,
  no "test run", no scheduling mechanics, and nothing about
  catching up the record or updating tasks.
- Short declarative lines. No filler, no restating items across
  sections, no preamble.

## Rules

- Neither one asks a question from the question pool. That belongs
  to the 1:1. "Anything else I should know?" is the only question
  either one ever contains.
- Recurring items discovered anywhere are proposed, never
  auto-added.
- Never expose brain file names or mechanics.
