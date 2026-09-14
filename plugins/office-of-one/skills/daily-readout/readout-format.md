# Readout format

This file is the spec for the Morning Memo and the Evening Debrief.
The user's ways-of-working.md overrides it. If this file and SKILL.md
disagree, this file wins.

## Section order

1. Today
2. Worth knowing
3. Needs your input
4. Getting ahead
5. Priority to-dos
6. Remaining to-dos
7. Sources, the Friday block and the sign-off

Above them sits a Georgia title with the date in grey underneath.
It never shows the agent's name, an item count or a summary of the
day. The greeting comes right after it. If either to-do section is
renamed, rename both.

## Colors

| Color | Hex | Dark mode | Tint | Used for |
|---|---|---|---|---|
| Pine | #2b5f52 | #79c4b0 | #e6ede9 | The user's things: to-do numbers, input squares, links |
| Purple | #8a4fbd | #c194ef | #f1e8fa | The agent's things: Getting ahead squares and tags |
| Amber | #a2521f | — | #f6e7d9 | Conflicts only |

A replacement for purple must differ from pine in hue and lightness,
and must not be gold.

## Type scale

| Size | Used for |
|---|---|
| 28px Georgia, 25px on a phone | Title |
| 14px | To-dos, Worth knowing, Getting ahead, calendar events, greeting, sign-off |
| 13px | Locations, date line |
| 12px | Times, grey slot |
| 11px | Sources |
| 10px uppercase | Section labels |
| 9px | Tags, conflict flag |
| 8px | Product footer |

## 1. Today

Each event gets one line on the day rail, a thin vertical line with
the time on the left, then the name and the location after a middle
dot. Keep locations short so lines don't wrap. Don't break the rail
to show free time.

If the calendar is empty, write "Nothing on your calendar today."

When two events conflict, tint both lines warm and end the first
with CONFLICT. Never write "clash" or add a header above them.

Meeting prep can take one short line under its event.

## 2. Worth knowing

These are facts where the agent has nothing to do, marked with grey
squares. Include one only if it is new since the last memo and the
user would act differently or be annoyed to miss it. Show four at
most. This section is often empty.

## 3. Needs your input

These are questions that block something, marked with pine squares
and no number or date. Ask three at most. There are usually none.

The first memos also ask about calendar contradictions from
onboarding, marked "from onboarding" in tasks.md. Double-bookings
show as CONFLICT in Today instead.

## 4. Getting ahead

Each line is work the agent did or offers to do, marked with a
purple square and never numbered. A finished job reads like "Drafted
the reply to [name]. It's in your drafts, needs the figure." and is
tagged DRAFTED. An offer names the deliverable, like "Forward me the
PDF and I'll confirm the part and put both dates on the calendar."

A calendar offer reads like "Say yes and I'll put Mia's pickup at LAX
on your calendar for Thu 2pm." Nothing goes on the calendar without
a yes.

A workflow that ran since the last Morning Memo gets one line in the
next one, taken from its Last run line.

- Show four lines at most, workflow lines included. Other drafted or
  researched items still show their tag in the to-do list.
- If nothing was done or offered, leave the section out. Never
  invent a line.
- Don't repeat a to-do or a Worth knowing line.
- Check sent mail, and never offer something the user already did.
- Name the deliverable, not the intention: "I'll pull the times and
  unblock Sunday", not "I could look into that".

New work that isn't on the list belongs in the 1:1, not the memo.

## 5. Priority to-dos and 6. Remaining to-dos

Both lists use the same layout, and every to-do fits on one line.

Each line follows a fixed order. It starts with the number, then the
action, which is bold for priorities. The tag comes next if there is
one, followed by the RECOMMEND link if there is one. The date sits
last, in the grey slot, pushed to the far right so the dates line up
down the memo. Remaining to-dos are grouped under small category
labels that come from the user's life, not from a fixed list.

**Together, the two lists show every open item in the ledger, every
time, and each item appears once.** Never shorten the list to save
space. If it runs long, group it by category instead. Items that a
workflow file tracks stay out of these lists.

**Keep each line bare.** Why an item is stuck, who was called and its
history all belong in tasks.md, and the agent shares them when the
user asks. If a line only makes sense with that context, turn it
into a Needs your input question instead of adding a clause. Worth
knowing and Getting ahead lines are also one short sentence each,
with no "because", no aside and no hedging.

**The grey slot holds a date and nothing else.** Examples are "no
date", "due Sat 9/12", "waiting since 9/9" and "open 14 days".

**The whole memo uses one numbering sequence.** Priorities are
numbered 1 to 3, and Remaining to-dos continue from 4 through every
category. Numbers stay the same all day and are reassigned at the
next morning Desk run. The ledger uses the same numbers, so a reply
by number can be matched to it.

Don't add an owner to any line, a second grey line under anything,
or a tinted panel behind the priorities.

**Waiting-on items are to-dos, not offers.** When the user has
already sent an email and is waiting for a reply, it goes in
Remaining to-dos with "waiting since [date]" in the grey slot. It
never goes in Getting ahead, and the agent never offers to chase
something the user already chased. After five working days without
a reply, its status becomes "no reply in N days, chase?".

## The tags

The desk skill defines the tags. There are three of them, RECOMMEND,
DRAFTED and LET'S TALK, and all three are purple. A to-do with no tag
is simply the user's to handle.

In the memo, tags are labels, not buttons, and the only thing a user
can tap on a to-do line is a RECOMMEND link. The user hands work over
by replying in their own words, usually by number, such as "do 6 and
7". The next Desk run picks it up. For anything sooner, the user can
open the agent in Claude.

## 7. Footer

Sources line, then the Friday block on Fridays, then the sign-off.
The product footer last, 8px, light grey.

The sources line names what could NOT be opened, not just what
was. "Amazon blocks me, so the price is unverified" is the shape.

**The Friday block is at most two lines:**

    THIS WEEK
    5 memos, 12 items closed, 3 things you handed me.

    Ask me in your [Agent Name] project in a Cowork session to
    have a 1:1, and let's take some things off your plate.

Nothing else goes in the Friday block.

**The usage line appears every Friday, even when a number is zero.**
Don't skip it, soften it or pad it. Count only what tasks.md and
log.md record. Leave out any number that can't be counted honestly,
and leave out the whole line if none can.

## Build rules for the email

- Never put two cells side by side in a row of prose. Gmail's phone
  app squashes them together, as in "Morning MemoSept 12". Only the
  day rail and the to-do rows use two cells, with an explicit width
  on the narrow one.
- Draw section dividers as a top border on the section's own cell,
  not as a spacer table.
- Run edge to edge on one background, with no card border or frame.
- Use tables and inline styles with the colors written out. Don't
  use flexbox, grid, CSS variables or class selectors.
- Add a prefers-color-scheme block for dark mode, and never let
  color alone carry meaning.
- Always send the plain-text version, with the same markers and
  numbering.
- Use paper #fbfaf7, ink #16171a, grey #6d6f74 and hairline #dedbd3,
  plus the three signal colors.
- Keep the width to 600px, with 20px side padding, or 12px on a
  phone.

## Evening Debrief

The Evening Debrief uses the same look but is shorter. It covers
what closed today, what moved, tomorrow, and anything that needs an
answer before morning. It has no Getting ahead section and no Friday
block.

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
tasks.md, show in the memo the day before and the day of, and
disappear when done.

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
tomorrow, or if it matters most and can't be finished in one sitting,
so it needs some of today to move at all. Rank with what you know,
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

Open with the greeting from personality.md. Close with this sign-off,
word for word:

    Anything else I should know? Just hit reply.
    — [agent name]

The last line is "Office of One". If the user asked to remove it,
never add it back.

If an Evening Debrief has nothing in it, it is just this line,
followed by the sign-off:
"Nothing needs you tonight. See you in the morning."

The subject lines are "{AGENT_NAME}: Morning Memo, {weekday}" and
"{AGENT_NAME}: Evening Debrief".

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
