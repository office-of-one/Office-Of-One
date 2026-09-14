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

Above them sits a Georgia title with the date in grey underneath,
and nothing else. If either to-do section is renamed, rename both.

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

Carried over from the earlier spec because other skills point to
them. They cover content, not layout.

### Every action starts with a verb

Every priority and every action item begins with the verb that does
it. "Sign Sam's field trip form", not "Field trip form". "Pay
Mia's soccer fees", not "Soccer fees". "Send Dana the partner
brief", not "Partner brief to Dana".

This is not a style preference. A noun is a topic and a verb is an
instruction: the reader knows in one glance whether this is
something to do or something to know, and "done" means something
unambiguous when they reply.

There is no owner field, in the memo or in tasks.md. The verb says
who acts: the user, unless the line names someone else.

Calendar entries and "what moved today" lines are statements, not
actions, and are written as they are.

### Dates that are not events

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
becomes a Priority to-do when the ranking below promotes it, and
stops being one when the date passes.

### Choosing the Priority to-dos

Three at most. Rank by either of two rules:
- **Due today or tomorrow.** Deadline pressure.
- **The big rock.** Matters most and cannot be finished in one
  sitting, so it needs a piece of today or it never moves.

Rank on what you have rather than waiting for certainty, and let
the user correct you in the reply. A wrong ranking they fix is more
useful than no ranking.

### Facts, never judgments

The memo reports what it found. It does not grade it.

"Built from 9 emails, 2 call transcripts and 3 chat sessions" is a
fact the user can check. "The rest was noise" is the agent's
opinion of their mail, and it is the kind of line that is quietly
wrong on the day something mattered.

The same discipline applies to every number in the memo: count only
what was actually read or recorded. Never estimate, never round up,
never invent. If a count cannot be made honestly, omit the line.

### Closing the loop

The two are one conversation that runs all day. Neither is written
from scratch.

- Before writing, read tasks.md for what the last one surfaced and
  what is still open, and read any reply that came in since.
- Anything still open says so in its grey slot ("open 14 days"),
  and the full status note lives in tasks.md. Never resurface an
  item silently as though it were new.
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

### Greeting, sign-off and subject lines

The greeting from personality.md opens the body. The sign-off
closes it, verbatim:

    Anything else I should know? Just hit reply.
    — [agent name]

The product footer is the single line "Office of One". If the user
asked to remove it, it stays removed forever.

An Evening Debrief with genuinely nothing in it is one line,
"Nothing needs you tonight. See you in the morning.", then the
sign-off.

Subject lines:
- Morning Memo: "{AGENT_NAME}: Morning Memo, {weekday}"
- Evening Debrief: "{AGENT_NAME}: Evening Debrief"

### Extra sections the user asked for

Only those defined in personality.md or recorded under Memo format
in ways-of-working.md, one line each, after the to-dos and before
the footer.

### Plain-language rules

- Names, not descriptions ("Sam", not "your son").
- Times in the user's local timezone. No ISO dates.
- Personal details, health included, appear in the memo like any
  other fact.
- Never invent urgency. If nothing needs the user, the memo is
  proud to be three lines long.
