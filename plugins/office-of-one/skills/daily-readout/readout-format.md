# Readout format

This file is the spec for the Morning Memo and the Evening Debrief.
The user's ways-of-working.md overrides it. If this file and SKILL.md
disagree, this file wins.

## Section order

What needs the user comes first, and the calendar comes after it.

1. The opening
2. The title and date
3. Priority to-dos
4. Getting ahead
5. Needs your input
6. Today
7. Worth knowing
8. Remaining to-dos
9. How you used me, on Mondays
10. Sources, the Friday block and the sign-off

Every section from 3 to 9 is a card: a block with a tinted or paper
background, a 4px bar down its left edge, and a bold uppercase label
with a small filled circle in front of it. A section with nothing in
it is left out, card and all. If either to-do section is renamed,
rename both.

## The opening

The memo opens with two to four sentences in a pale green card with
a deep green bar, before the title. It starts with the greeting from
personality.md and then says, in this order, what today's headline
is, what is drafted and waiting, and what needs an answer. The
headline is the first Priority to-do, or the day's first fixed
commitment when nothing is due. Bold the headline and nothing else.

It states facts from the sections below and adds none of its own. No
judgments, no advice, nothing about how the memo was made. On a day
with nothing to say it is the greeting alone.

On Fridays the opening ends with these sentences, word for word:
"It's Friday, time for our 1:1. Open your [Agent Name] project and
say "let's have a 1:1"."

Under the opening sits the title, "Morning Memo" or "Evening
Debrief", in deep green, with the date in n-500 beneath it. It never
has a subtitle, the agent's name, an item count or a summary of the
day.

## Colors

The Office of One palette. Paper carries the page, ink carries the
words, and the brand green carries the structure: it marks what is a
heading, a number, a marker or a link, never a whole sentence.

| Token | Hex | Used for |
|---|---|---|
| paper | #FAF6EF | The page. Nothing else is a background |
| ink | #2B241C | Body text, to-do actions, the greeting and sign-off |
| hair | #E4DFD6 | Rules between sections and rows |
| surface | #DDE6D9 | The opening card and the Priority to-dos card |
| sand | #F1EADE | The Getting ahead card |
| brass tint | #F6EEDC | The Needs your input card |
| panel line | #CBD8C6 | Rules between rows inside a pale green card |
| n-500 | #6A6053 | Dates, the grey slot, category labels, the sources line, and the Worth knowing bar, label and circles |
| green | #3B5A43 | Card bars and labels, to-do numbers, the three tags, the sign-off, and the CONFLICT flag |
| deep green | #24382A | The title, links, and the bar and label of the opening and Priority to-dos cards |
| brass | #B08D3C | The Needs your input bar, label and circle, and the product footer |

Colour says what kind of card it is. Pale green is what the user has
to do, sand is what the agent did, the brass tint is the one card
that asks them something, and paper is everything else. The deep
green is too dark to read as colour at small sizes, so numbers and
most labels use the mid green. Tags are told apart by their words.
Never introduce another colour.

The memo is designed for light mode and has to survive dark mode on
its own, because the mail connector strips the head, every style
block and every class before sending. A dark-mode block never reaches
the inbox. Apple Mail and Gmail in a browser show the memo as
designed; the Gmail phone app recolours it, darkening the paper and
lifting the text, and these values hold up under that. Never rely on
colour alone: the circles, numbers, rules and bold priorities carry
the structure in black and white.

## Type scale

Everything in the memo uses one font stack: -apple-system,
BlinkMacSystemFont, "Segoe UI Variable Text", "Segoe UI", Helvetica,
Arial, sans-serif. It resolves to SF Pro on Apple, Segoe UI on
Windows and Roboto on Android. Write the whole stack inline on every
text style, never one face alone.

| Size | Used for |
|---|---|
| 24px bold | Title |
| 15px | The opening |
| 14px | To-do titles, calendar times, sign-off |
| 13.5px | Context lines, Getting ahead, Worth knowing, Needs your input, calendar events |
| 13px | Date line, sources, the Friday line |
| 12px bold uppercase | Card labels; grey slot and priority dates at 12px regular |
| 11px bold uppercase | Category labels; product footer at 11px regular |
| 10px bold uppercase | Tags, conflict flag |

## Today

A paper card with a green bar. Each event is one row: the time in
bold in a narrow left column, then the name and the location after a
middle dot, with a hair rule between rows. Keep locations short so
lines don't wrap, and never add rows to show free time.

If the calendar is empty, write "Nothing on your calendar today."

When two events conflict, set both lines in the green and end the
first with CONFLICT. Never write "clash" or add a header above them.

Meeting prep can take one short line under its event.

## Worth knowing

A paper card with an n-500 bar and label. These are facts where the
agent has nothing to do, marked with open circles in n-500. Include one only if it is new since the last memo and the
user would act differently or be annoyed to miss it. Show four at
most. This section is often empty.

A line may connect two things the user said themselves, stated as
fact: "Thursday's call lines up with the spring plan." Never a
connection the user didn't make; a guessed link is a 1:1 question,
not a memo line.

## Needs your input

The brass-tint card, with a brass bar and label. These are questions
that block something, marked with filled circles in brass and no
number or date. Bold the subject of each question. Ask three at most. There are usually none.

The first memos also ask about calendar contradictions from
onboarding, marked "from onboarding" in tasks.md. Each is one
question and counts toward the three. Double-bookings
show as CONFLICT in Today instead.

## Getting ahead

The sand card, with a green bar. Each row is work the agent did or
offers to do, never numbered: the subject in bold, a dash, then what
was done, with the tag as a pill in a narrow column on the right. A
finished job reads like "**Reply to [name]** — in your drafts, needs
the figure." and is tagged DRAFTED. An offer names the deliverable and anything the user
has to do first, like "Forward me the PDF and I'll confirm the part
and put both dates on the calendar."

A calendar offer reads like "Say yes and I'll put Mia's pickup at LAX
on your calendar for Thu 2pm." Nothing goes on the calendar without
a yes.

Offers come from the links on the items. A meeting on Thursday with
someone the user owes a proposal means the proposal is drafted on
Wednesday and the line says why: "Thursday's call is with [name].
The proposal is in your drafts."


A workflow that ran since the last Morning Memo gets one line in the
next one, taken from its Last run line.

- Show four lines at most, workflow lines included. Other drafted or
  researched items still show their tag in the to-do list.
- If nothing was done or offered, leave the section out. Never
  invent a line.
- Don't restate a to-do or a Worth knowing line. An offer to move a
  to-do forward is fine.
- Check sent mail, and never offer something the user already did.
- Name the deliverable, not the intention: "I'll pull the times and
  unblock Sunday", not "I could look into that".

New work that isn't on the list belongs in the 1:1, not the memo.

## Priority to-dos and Remaining to-dos

**Priority to-dos** sit in the pale green card with a deep green bar.
Each has two parts: on the left the number and the action in bold,
with its date underneath in green; on the right one sentence of
context from the ledger, such as who is waiting, what changed, or
which goal it moves. One sentence, a fact, never advice. On a phone
the two parts stack, the context under the title.

**Remaining to-dos** sit in a paper card with a green bar, and every
one fits on one line. It starts with the number in green, then the
action, then the tag if there is one, followed by the RECOMMEND link
if there is one. The date sits last, in the grey slot, pushed to the
far right so the dates line up. They are grouped under small category
labels that come from the user's life, not from a fixed list.

**Together, the two lists show every open item in the ledger, every
time, and each item appears once.** Never shorten the list to save
space. If it runs long, group it by category instead. Items that a
workflow file tracks stay out of these lists.

**Keep Remaining to-dos bare.** Why an item is stuck, who was called
and its history all belong in tasks.md, and the agent shares them
when the user asks. If a line only makes sense with that context,
turn it into a Needs your input question instead of adding a clause.
Only the three priorities carry a context sentence. Worth
knowing and Getting ahead lines are short, one or two sentences,
with no "because", no aside and no hedging.

**The grey slot holds a date and nothing else.** Examples are "no
date", "due Sat 9/12", "waiting since 9/9" and "open 14 days".

**The whole memo uses one numbering sequence.** Priorities are
numbered 1 to 3, and Remaining to-dos continue from 4 through every
category. Numbers match the last memo sent. The Morning Memo assigns
new numbers when it is written. The ledger uses the same numbers, so
a reply by number can be matched to it.

Don't add an owner to any line, and don't add a second line under a
Remaining to-do.

**Waiting-on items are to-dos, not offers.** When the user has
already sent an email and is waiting for a reply, it goes in
Remaining to-dos with "waiting since [date]" in the grey slot. It
never goes in Getting ahead, and the agent never offers to chase
something the user already chased. After five working days without
a reply, its status becomes "no reply in N days, chase?".

## The tags

The desk skill defines the tags. There are three of them, RECOMMEND,
DRAFTED and LET'S TALK. Each is a small pill: green background
#3B5A43, paper text, 10px bold uppercase with a little letter-spacing,
2px 7px of padding and 3px rounded corners, set as an inline-block
with the background as `background-color`. Green text alone blends
into the line; the pill is what makes a tag readable at a glance. A
to-do with no tag is simply the user's to handle.

In the memo, tags are labels, not buttons, and the only thing a user
can tap on a to-do line is a RECOMMEND link. The user hands work over
by replying in their own words, usually by number, such as "do 6 and
7". The next Desk run picks it up. For anything sooner, the user can
open the agent in Claude.

## How you used me (Mondays)

A paper card with an n-500 bar. The Monday memo carries the two lines that Friday's roll-up wrote at
the top of usage-summary.md, exactly as written. They read like this:

    You used me on 5 of 7 days last week, mostly for email and
    planning. Three emails came back for tone.

This is the one place the memo talks about the agent rather than the
user's day. Leave the section out on every other day, and on a Monday when
usage-summary.md is missing, when its period ended more than ten days
ago, or when the week had fewer than three entries.

Then one question at the very end of the memo, after the sign-off,
one a week, in the order below, never repeating one until all three
have been asked:

    If you have a second: what did I get wrong this week?
    If you have a second: what did you stop doing yourself because I
    do it now?
    If you have a second: is there anything you'd rather handle
    yourself than hand to me?

Read "Last survey question" in ways-of-working.md to choose the next
one, then record which one was asked, and the date, in the same
place. If the user answers, in that reply or later, add
one line to survey.md: the date, the question number, and their
answer in their words. If they ignore it, let it go and never ask it
again. The question appears only in the Monday memo, never in chat.

## Footer

No card. The sources line, then the Friday line on Fridays, then the
sign-off with the agent's name in green, then the product footer in
brass at 11px.

The sources line names what could NOT be opened, not just what
was. "Amazon blocks me, so the price is unverified" is the shape.

**The Friday line is one line:**

    This week: 5 memos, 12 items closed, 3 things you handed me.

"This week:" is bold in ink and the rest is n-500. Nothing else goes
in it.

**The usage line appears every Friday, even when a number is zero.**
Don't skip it, soften it or pad it. Count only what tasks.md and
log.md record. Leave out any number that can't be counted honestly,
and leave out the whole line if none can.

## Build rules for the email

- The width is fluid, never fixed. The outer table is `width:100%`
  in paper with 24px 16px of padding. Inside it one table carries
  `width:100%;max-width:680px` and is centred. Never put a `width`
  attribute on it. The memo fills a phone edge to edge and stops at
  680px on a desktop.
- Each card is its own table at `width:100%` with 18px of space under
  it. Its one cell carries the background, the 4px `border-left` in
  the card's colour, and 12px 16px of padding.
- Never put two cells side by side in a row of prose. Gmail's phone
  app squashes them together, as in "Morning MemoSept 12". Only
  these rows use two cells, each with an explicit width on the narrow
  one: calendar rows (64px for the time), Getting ahead rows (96px
  for the pill) and Remaining to-do rows (the date, never wrapping).
- Priority rows stack without a style block: the row's cell is set
  to `font-size:0`, and inside it sit two `display:inline-block`
  blocks at `width:100%`, the title block at `max-width:200px` and
  the context block at `max-width:420px`, both `vertical-align:top`
  with their own font size. Side by side when there is room, stacked
  when there isn't.
- Use tables and inline styles with the colors written out. Don't
  use flexbox, grid, CSS variables or class selectors.
- Write every colour inline on the element itself. No head, no
  style block, no classes; the connector removes all three.
- Backgrounds go on as a `bgcolor` attribute and as
  `background-color` in the inline style, on the outer table for the
  paper and on every card's table and cell. Never use the
  `background` shorthand; the connector strips it and the memo
  arrives on white with no panel.
- Always send the plain-text version, with the same markers and
  numbering. Every marker is a circle: ● for Needs your input, ○ for
  Worth knowing and Getting ahead.
- Every marker in the HTML is a circle too, never a square and never
  an emoji: a ● or ○ character in the card's colour.
- Use the tokens above, written out as hex on every element, and no
  other colour.
- In the plain-text version the opening comes first as a paragraph,
  then the sections in the same order, and each priority's context
  sits on an indented line under it.

## Evening Debrief

The Evening Debrief uses the same cards but is shorter. Its opening
says what closed and what is still waiting on the user. It covers
what closed today, what moved, tomorrow, and anything that needs an
answer before morning. It has no Getting ahead card and no Friday
line.

## Rules the rest of the plugin relies on

Other skills point to these rules.

### Every action starts with a verb

Start every to-do with the verb that does it. Write "Sign Sam's field
trip form", not "Field trip form", and "Pay Mia's soccer fees", not
"Soccer fees".

There is no owner field, in the memo or in tasks.md. The verb means
the user acts, unless the line names someone else.

Calendar entries and "what moved today" lines are statements, so
they don't need a verb.

### Dates that are not events

A date doesn't make something a calendar entry. A calendar entry is
for something a person attends, at a time, in a place. A test on
Thursday, a form due the 15th or a fee window that opens Monday needs
nobody anywhere, so it is a dated to-do instead. Dated to-dos live in
tasks.md and disappear when done. Like every open to-do, they
appear in each memo.

One notice can produce both:

    "Mid-Unit 1 Math Test, Thursday 9/10"
    -> to-do: "Review with Sam for Thursday's math test", due Wednesday
    -> no calendar entry, because nobody attends

    "Game Saturday 8am at Northgate"
    -> calendar entry, because someone drives there at a set time
    -> to-do only if something must happen first:
       "Wash Mia's white jersey", due Friday

If you can't tell which a notice is, propose both and let the user
drop one. Never record neither.

A dated to-do becomes a Priority to-do when the ranking below
promotes it, and stops being one when its date passes.

### Choosing the Priority to-dos

Pick three at most. A to-do qualifies if it is due today or
tomorrow, or if it moves one of the goals in goals.md and can't be
finished in one sitting, so it needs some of today to move at all. Rank with what you know,
and let the user correct you in their reply.

### Facts, never judgments

Report what you found without grading it. "Built from 9 emails, 2
call transcripts and 3 chat sessions" is a fact. "The rest was noise"
is an opinion, so never write it.

Count only what was actually read or recorded. Never estimate or
round up. If a number can't be counted honestly, leave the line out.

### Closing the loop

The memo and the debrief continue one conversation through the day.

- Before writing, read tasks.md for what the last one showed and
  what is still open, and read any reply since.
- If something is still open, its grey slot says so, like "open 14
  days". Never show an old item as if it were new.
- If the calendar or mail shows something is done, drop it without
  announcing it.
- If a question got no answer twice, ask it differently or drop it.
  Never repeat it word for word.
- The Morning Memo reads last night's reply. The Evening Debrief
  reads this morning's memo and its reply, so "what moved today"
  means what changed since the morning.
- Carry an unresolved conflict into the Evening Debrief only if it
  changed. Otherwise it appears again in tomorrow's Today section.
- After sending, update tasks.md with what was shown, what is still
  open, and the date each item was last shown.

### Greeting, sign-off and subject lines

The opening starts with the greeting from personality.md. Close with
this sign-off, word for word:

    Anything else I should know? Just hit reply.
    — [agent name]

The last line is "Office of One". If the user asked to remove it,
never add it back.

If an Evening Debrief has nothing in it, it is just this line,
followed by the sign-off:
"Nothing needs you tonight. See you in the morning."

The subject line carries the day's headline, so the memo is worth
opening from the inbox: "{AGENT_NAME}: {Day} {M/D} — {headline}", for
example "Juno: Fri 9/18 — commission agreement due today". The
headline is the same one the opening names, in a few words, and it
never includes anything sensitive, since a subject line shows on a
locked phone. When nothing is due it is "{AGENT_NAME}: {Day} {M/D} —
Morning Memo". The Evening Debrief is "{AGENT_NAME}: {Day} {M/D} —
Evening Debrief".

### Extra sections the user asked for

Add only sections defined in personality.md or recorded under Memo
format in ways-of-working.md. Each gets one line, after the to-dos
and before the footer.

### Plain language

- Use names, not descriptions, so "Sam" rather than "your son".
- Give times in the user's local timezone, and never use ISO dates.
- Include personal details, health included, like any other fact.
- Never invent urgency. If nothing needs the user, a three-line memo
  is fine.
