# Readout Formats

This file owns the structure and formatting of the Morning Memo and
the Evening Debrief. The daily-readout skill owns the procedure and
points here. If the two ever disagree, this file wins.

Design matters. The memo must be scannable on a phone in under a
minute. Short lines, no walls of text, no filler. Written in the
agent's voice from personality.md, signed with the agent's name.

## The reply rule, which decides the format

Both are written to be replied to inline. The user reads on a
phone, taps reply, and types under the lines that need a change.

That rules out tables for content. A table cannot reliably be typed
into inside a quoted reply on a phone, and mail clients collapse
quoted content without warning. Use flat lines only. Tables are for
layout wrappers, never for items.

## Every action starts with a verb

Every priority and every action item begins with the verb that does
it. "Sign Sam's field trip form", not "Field trip form". "Pay
Mia's soccer fees", not "Soccer fees". "Send Dana the partner
brief", not "Partner brief to Dana".

This is not a style preference. A noun is a topic and a verb is an
instruction: the reader knows in one glance whether this is
something to do or something to know, and "done" means something
unambiguous when they reply.

It also forces the owner field to be honest. "Field trip form ·
Sam" is ambiguous, because Sam is whose form it is, not who signs
it. "Sign Sam's field trip form · you" cannot be misread. Owner is
always the person who performs the verb.

Calendar entries and "what moved today" lines are statements, not
actions, and are written as they are.

## Dates that are not events

A thing with a date is not automatically a calendar entry. Most of
what arrives from schools, clinics, leagues and admin carries a
date and needs nobody anywhere at that time: a test on Thursday, a
form due the 15th, a fee window that opens Monday.

Those are dated ACTION ITEMS. They live in tasks.md with a due
date, the memo surfaces them the day before and the day of, and
they disappear when done. They do NOT go on the calendar.

A calendar entry is for something a person physically attends, at
a time, in a place. If nobody has to be anywhere, it is not a
calendar entry. The user's calendar is mostly other people's
commitments already; filling it with things they do not attend
makes the one surface they check less readable, not more.

One notice often produces both, and they are separate records:

    "Mid-Unit 1 Math Test, Thursday 9/10"
    -> action item: "Review with Sam for Thursday's math test",
       you, due Wednesday
    -> no calendar entry. Nobody attends.

    "Game Saturday 8am at Northgate"
    -> calendar entry. Someone drives, at a time, to a place.
    -> action item only if something must happen first:
       "Wash Mia's white jersey", you, due Friday.

Being unsure which one a notice is, is a reason to propose both
and let the user drop one. It is never a reason to record neither,
which is how a date vanishes entirely.

Priorities are not a third kind of record. A dated action item
becomes a priority when the ranking rules below promote it, and
stops being one when the date passes.

## Facts, never judgments

The memo reports what it found. It does not grade it.

"Built from 9 emails, 2 call transcripts and 3 chat sessions" is a
fact the user can check. "The rest was noise" is the agent's
opinion of their mail, and it is the kind of line that is quietly
wrong on the day something mattered.

The same discipline applies to every number in the memo: count only
what was actually read or recorded. Never estimate, never round up,
never invent. If a count cannot be made honestly, omit the line.

## Markers and numbering

Not everything is numbered. Each kind of line carries the handle
that people actually use for it.

| Line | Marker | How the user refers to it |
|---|---|---|
| Calendar entry | none | by time: "Alex has the 5:15" |
| Priority | small square | by name: "the brief is done" |
| Needs your input | ? | by answering: "September" |
| Remaining action item | number from 1 | by number: "3 pushed" |
| Evening Debrief items | number from 1 | by number |

There are only ever two or three priorities and they have names, so
a number adds nothing. A question is answered by its answer, not by
its index. Numbers are for the list that is genuinely a list.

**Numbers must be unique within one email.** In the Morning Memo
only one section is numbered, so it simply starts at 1. In the
Evening Debrief the numbering runs continuously across its two
sections, because two sections both starting at 1 would make "2
done" ambiguous.

So a reply reads: "brief is done, fees are September, 3 pushed to
next week, Alex has the 5:15." Four different handles, no
collisions.

Match a reply in this order: number, then name, then time.

## Sending the email

Send BOTH versions every time: the HTML as the rich version, and a
plain-text alternative. Where the mail tool has separate fields,
HTML goes in the html body and plain text in the body.

The plain-text version is not a fallback nobody sees. It is what
renders on a watch, in a stripped-down client, and in some reply
windows. It keeps the same markers, numbers and order, so replying
to it works identically.

### HTML that survives real mail clients

Users are on Gmail and business Outlook. Both are stricter than a
browser.

- Inline styles only. Never a style block; several clients drop it.
- No CSS variables, no flexbox, no grid.
- No web fonts. System stack and Georgia only.
- Do not depend on rounded corners or padded divs. Outlook on
  Windows renders through Word and flattens them.
- Colour must survive dark-mode inversion, which Outlook does on
  its own terms.
- No images, no image-based icons, no tracking pixels.

Colour is decoration. Meaning always travels in the text.
Full palette and type scale live in 05-Brand/STYLE-GUIDE.md.

## Density

Tight. This is a note, not a document.

Lines sit close together, sections are separated by a single small
gap, and nothing is padded for elegance. Generous white space reads
as calm on a web page and as length on a phone at 6:45am.

Length target: the Morning Memo fits on one phone screen, two at
most on a busy day. The Evening Debrief is always one screen.

---

# THE MORNING MEMO

Masthead: "Morning Memo" plus the date and, when there is one, the
count of things that need the user.

Then the greeting from personality.md as the first line of the
body.

Sections in this order. Omit any empty section entirely; never
write "nothing here".

## 1. Today

Every calendar item in CHRONOLOGICAL ORDER, one line each: time,
what, place. Never reorder by importance. Never numbered.

Conflicts are flagged IN PLACE, at their position in the day, never
hoisted to the top. A conflict is marked with the text ⚠ CONFLICT
on its own line, then EACH clashing event on its own line, in time
order, exactly as any other event is written:

    ⚠ CONFLICT
    5:00 Mia practice · Lakeside
    5:15 Sam game · Northgate

Never run two events together on one line; the times blur and the
user misreads them. Never add an explanatory question underneath.
The marker already says what is wrong, and the user replies in
their own words.

Mark whose event it is when the household shares a calendar.

## 2. Priorities

Two or three. Marked with a small square, not numbered. The item
itself is set in bold so it carries weight without a number, and
starts with a verb.

Rank by either of two rules:
- **Due today or tomorrow.** Deadline pressure.
- **The big rock.** Matters most and cannot be finished in one
  sitting, so it needs a piece of today or it never moves.

Rank from what the user has told you plus the daily connector scan.
The data will be incomplete. Rank on what you have rather than
waiting for certainty, and let the user correct you in the reply.
A wrong ranking they fix is more useful than no ranking.

Show the reason in the grey note underneath ("due today · he's
blocked without it", "big rock · open eleven days"). A ranking that
shows its reasoning can be corrected in one reply; a bare list
cannot.

## 3. Needs your input

Section header: "Needs your input". Each line marked with ?, never
numbered.

Blocking questions only: things you cannot work around, where a
capture or an email arrived incomplete and the gap stops you being
useful.

Maximum three. The number is driven by how much real ambiguity
exists, never by a quota. Most days this section does not appear at
all.

**Promotion rule.** A question that blocks something in today's
Priorities does not sit here. It moves up into that Priority,
phrased as the question, so it is read next to the work it is
blocking. Everything else stays batched here.

Cross-reference the item it blocks, and have that item point back
("pending the question above"). That is what makes this read as the
agent working rather than the agent quizzing.

## 4. Remaining action items

Section header: "Remaining action items". These are the items that
are clear: everything unambiguous that still needs doing but is not
a priority for today. Every one starts with a verb.

Numbered from 1. This is the only numbered section in the memo.

Grouped by category, nested under the section header as small
sub-labels. Categories are DERIVED from this person's life, never a
fixed set. One person gets Kids, Startup, Home. Another gets
Fitness, Work, Parents. Only categories with live items appear, and
the set changes as their life does. The numbering runs straight
through the categories; it does not restart per category.

Each item is one numbered line: the verb phrase, then owner · due
date · status note on a second line in grey. Owner is whoever
performs the verb. The status note is where carried-over items
admit it ("carried over 3 days") and where a reply is acknowledged
("you said signed last night, confirming").

## 5. Sources

One line, small and grey, at the end of the content:

    Built from 9 emails, 2 call transcripts and 3 chat sessions
    since yesterday.

Counts only. Name the kinds of source that actually contributed and
how many of each. No characterisation of what was in them, no
"the rest was noise", no assessment of importance. If a source type
contributed nothing, leave it out rather than writing a zero.

## 6. Flavor slots

Only those defined in personality.md or ways-of-working.md. One
line each.

## 7. Friday block

Fridays only, at the BOTTOM, above the sign-off, in a tinted panel.
Four short parts, in this order:

**Usage.** What they actually did with you this week, as a fact,
not a question. "This week: 5 memos, 12 items closed, 3 things you
handed me." Count only what is recorded in tasks.md and log.md.

**One idea.** A single concrete thing you could take off their
plate, drawn from something you actually observed this week:
"You wrote Dana a status note three Thursdays running. I could
draft it each week from your calendar and sent mail, and you just
fix and send."

One only. It must come from the week's evidence, never from a
generic list of agent tricks, and it must name the evidence so they
can see why you are suggesting it. Propose, never create. If
nothing was observed that supports an idea, omit this line; a
made-up suggestion is worse than none.

**The 1:1.** One line with the link:
"Let's have our 1:1 and find a few more things I can take off your
plate. [link]"
If no project link is stored:
"Let's have our 1:1 and find a few more things I can take off your
plate. Open your agent in Claude and say 'let's do our 1:1'."
The 1:1 itself is where brief changes and the full set of
suggestions happen. The memo only invites.

**Feedback.** One line, once a week, no rating scale:
"And if anything about me is working or not working, drop a note to
support@officeofone.ai. A sentence is plenty."
The user emails Office of One directly. The agent does not compose
it and does not send it.

Subject line: "{AGENT_NAME}: Morning Memo, {weekday}"

---

# THE EVENING DEBRIEF

Masthead: "Evening Debrief" plus the date.

Two sections. That is all. Numbering runs continuously across both.

## 1. Prepare tonight

What has to be found, signed, packed or laid out before the
morning. These are actions, so every one starts with a verb: "Lay
out Mia's white jersey", "Sign Sam's permission slip".

## 2. What moved today

Anything that changed since the Morning Memo: rescheduled,
cancelled, newly arrived. These are statements, not actions, and
are written plainly.

Then the close. Maximum eight lines total. If there is genuinely
nothing, one line: "Nothing needs you tonight. See you in the
morning." then the close.

Subject line: "{AGENT_NAME}: Evening Debrief"

---

## The close, both, verbatim

"Anything else I should know? Just hit reply.
— [agent name]"
"Office of One" (final line; if the user asked to remove it, it
stays removed forever)

## Closing the loop

The two are one conversation that runs all day. Neither is written
from scratch.

- Before writing, read tasks.md for what the last one surfaced and
  what is still open, and read any reply that came in since.
- Anything still open says so in its status note. Never resurface
  an item silently as though it were new.
- Anything the calendar or mail shows as done disappears. Do not
  announce that it is gone.
- A question asked twice with no answer is asked differently or
  dropped. Never repeat a question word for word.
- The Morning Memo reads last night's reply. The Evening Debrief
  reads this morning's memo and its reply. "What moved today" means
  different from what I told you this morning, which is only
  knowable if the morning was recorded.
- An unresolved conflict is carried into the Evening Debrief under
  "what moved today" only if it changed. Otherwise it appears again
  in tomorrow's Today section, in place, as it stands.
- After sending, update tasks.md: what was surfaced, what remains
  open, and the date each item was last shown.

## Style rules for both

- Every priority and action starts with a verb.
- Facts, never judgments. Counts, never characterisations.
- One line per item. Flat lists.
- Names, not descriptions ("Sam", not "your son").
- Times in the user's local timezone. No ISO dates.
- Colour never carries meaning on its own. Anything colour-coded
  also carries a text marker.
- If an item needs a paragraph, it is not a memo line. Say "ask me
  about X" instead.
- Never invent urgency. If nothing needs the user, the memo is
  proud to be three lines long.
