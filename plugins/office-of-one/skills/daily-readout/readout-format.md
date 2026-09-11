# Readout format

The Morning Memo and the Evening Debrief. This file is the spec.
Anything the user has written into their own ways-of-working.md
overrides it. If this file and SKILL.md disagree, this file wins.

Revised Sep 2026 after six sends reviewed in the Gmail app on a
phone and two live runs.

## Section order

1. Today
2. Worth knowing
3. Needs your input
4. Getting ahead
5. Priority to-dos
6. Remaining to-dos
7. Sources, Friday block, sign-off

Getting ahead sits ABOVE the to-dos. What the agent already did
changes how the user reads the list underneath it.

Section names are exactly "Priority to-dos" and "Remaining
to-dos". If one is renamed, rename both.

## Three colors, three jobs

- **Pine #2b5f52** (dark #79c4b0), tint #e6ede9 — STRUCTURE and
  what is the user's: to-do numbers, input squares, links.
- **Purple #8a4fbd** (dark #c194ef), tint #f1e8fa — what is the
  AGENT'S: the Getting ahead squares and all three tags.
- **Amber #a2521f**, tint #f6e7d9 — what is BROKEN: conflicts,
  and nothing else.

A replacement for purple must differ from pine in BOTH hue and
lightness. A slate blue was tried and failed on exactly this. Not
gold, which muddies the conflict amber.

## Type scale

14px body: to-do lines, Worth knowing, Getting ahead, calendar
events, greeting, sign-off. Locations and the date line 13px,
times and the grey slot 12px, sources 11px. Labels 10px uppercase,
tags and conflict flag 9px, the product footer 8px. Title 28px
Georgia, 25px on a phone.

## Masthead

Title in Georgia over one grey line carrying the date. No agent
name, no item count, no second title line, no day-shape summary.

## 1. Today — a day rail

A thin vertical rule down the day, time in a narrow left column,
event to the right. ONE LINE PER EVENT: name, then location after
a middle dot. Never a second line for the place. Keep locations
short so the line does not wrap.

The rail is continuous. Never break it to show free time.

A conflict keeps each event on its own line at its own time, both
lines tinted warm, the word CONFLICT at the END of the first line.
Never "clash". Never a header row above the pair.

Meeting prep goes INLINE under its event here, not in Getting
ahead.

## 2. Worth knowing

Things that changed or are coming where the agent has NO verb.
Facts only, no offers, no actions. Grey squares, same bullet shape
as Needs your input.

The bar, or it becomes an inbox digest: new since the last memo,
AND either the user would act differently knowing it or would be
annoyed to find out later. Three or four lines maximum, often
none.

## 3. Needs your input

Blocking questions only. Pine square, phrased as a question, no
number, no grey slot. Maximum three, usually none.

Questions from open-questions.md never appear here. Those belong
to the 1:1.

Calendar contradictions noted during onboarding wait in tasks.md,
marked "from onboarding". The first memos ask them here, one
question each, inside the three-question limit. Double-bookings
show as CONFLICT in Today instead.

## 4. Getting ahead

Every line has a verb for the AGENT. If there is no verb for the
agent, it belongs in Worth knowing or in the to-do list.

Two kinds of line, both past or offered:

- What was handled: "Drafted the reply to [name]. It's in your
  drafts, needs the figure." Carries a DRAFTED tag.
- What can be handled, naming the deliverable and what it costs
  the user: "Forward me the PDF and I'll confirm the part and put
  both dates on the calendar."

Purple square marker, never numbered, never a to-do the user owes.

Rules:

- FOUR LINES MAXIMUM. Anything else drafted or researched still
  shows its tag in the to-do list.
- Nothing invented. Nothing handled and nothing to offer means the
  section does not appear. A fabricated line destroys the trust
  the section exists to build.
- Never repeat a to-do, never restate a Worth knowing line.
- Never offer to do something the user already did. Check sent
  mail first.
- An offer names the deliverable, not the intention: "I'll pull
  the times and unblock Sunday", not "I could look into that".

Unprompted suggestions of work that is not on the list at all are
NOT daily material. They belong in the 1:1.

## 5. Priority to-dos and 6. Remaining to-dos

Same one-line shape. Nothing in the memo is ever two lines.

Order within a line is fixed: number, action, tag if it has one,
the recommendation link if the tag is RECOMMEND, then the grey
slot LAST and pushed to the far right so the grey column aligns
down the memo.

- Priority to-do: number, bold action, tag, date in grey.
- Remaining to-do: number, action, tag, date in grey. Grouped
  under small category labels drawn from the user's life, not from
  a fixed list.

**Remaining to-dos lists every open item in the ledger, every
time.** Never trim it to save space. A long list is grouped by
category, never cut. Anything missing from the memo stops being
visible.

**No subtext.** A to-do line is number, action, tag, link, date.
Nothing else. Why an item is stuck, who was called, what the
history is: all of that lives in tasks.md and comes out when the
user asks. If a line cannot be understood without context, that is
a Needs your input question, not a trailing clause.

Same rule everywhere else: Worth knowing and Getting ahead lines
are one short sentence each. Cut every "because", every
parenthetical, every hedge.

**The grey slot carries DATES ONLY**: "no date", "due Sat 9/12",
"waiting since 9/9", "open 14 days". A grey column of mixed
comments reads as noise.

**One numbering sequence for the whole memo.** Priorities are 1,
2, 3; Remaining continues at 4 straight through its categories.
Match a reply by number first, then name, then time. Numbers hold
for the day and are reassigned at the next morning Agent work run. The
ledger carries the same numbers so a reply resolves against it.

No owner field. No second grey line under anything. No tinted
panel behind the priority block.

**Waiting-on items are to-dos, not offers.** If the user already
sent the email, the loop is open and they want to track it: it
goes in Remaining to-dos with "waiting since [date]" in the grey
slot. It does NOT go in Getting ahead, and the agent never offers
to chase what the user already chased. After five working days
with no reply the status becomes "no reply in N days, chase?".

## The tags

Four states, three tags, all purple. Full definitions in
agent-comms-style.md.

| Tag | Means |
|---|---|
| *(none)* | Theirs alone. The agent has nothing to add |
| RECOMMEND | The agent looked it up. Here is the pick, linked |
| DRAFTED | The agent already did it. Waiting in their drafts |
| LET'S TALK | Needs their position first. Twenty minutes in a session |

In the memo these are MARKERS, not buttons: no email client runs
the JavaScript a real button needs, so nothing on these lines is
tappable except a RECOMMEND link. The user hands work over by
replying in their own words, by number ("do 6 and 7"). Matching is
the agent's job.

Pickup happens at the next Agent work run, an hour before each
memo. A faster recurring sweep is not available; the scheduler's
floor is one hour. For anything the
user wants now, they open the agent in Claude.

## 7. Footer

Sources line, then the Friday block on Fridays, then the sign-off.
The product footer last, 8px, light grey.

The sources line names what could NOT be opened, not just what
was. "Amazon blocks me, so the price is unverified" is the shape.

**The Friday block is exactly two lines:**

    THIS WEEK
    5 memos, 12 items closed, 3 things you handed me.

    Ask me in your [Agent Name] project in a Cowork session to
    have a 1:1, and let's take some things off your plate.

No "one idea", no link, no feedback line.

**The usage line runs EVERY Friday, zeros included.** It is an
accountability mirror, not a highlight reel. Never skip it because
the numbers are small, never soften a zero, never pad it. Count
only what is recorded in tasks.md and log.md. Report the number
and stop.

## Build rules for the email

These are what actually broke in the Gmail app on a phone.

- NEVER put two cells side by side in a ROW OF PROSE. Gmail's app
  shrinks those tables to content width and the right cell lands
  flush against the left ("Morning MemoSept 12"). The masthead,
  Worth knowing, Needs your input and Getting ahead all stack
  left. The day rail and the to-do rows are the exceptions: they
  survive because the narrow cell carries an explicit width
  attribute.
- Section rules are a border-top on the section's own cell. A
  separate 1px spacer table renders as a stubby half-width rule.
- No card border, no outer frame. Edge to edge on one background.
- Tables and inline styles only, colors hardcoded. No flexbox, no
  grid, no CSS variables, no class selectors.
- Dark mode is a prefers-color-scheme block. Gmail's app and
  Outlook invert on their own terms, so meaning never travels in
  color alone.
- Send the plain-text alternative every time, same markers and
  numbering.
- Palette: paper #fbfaf7, ink #16171a, grey #6d6f74, hairline
  #dedbd3, plus the three signal colors.
- Max width 600px, 20px side padding, 12px on a phone.

## Evening Debrief

Same visual language, shorter. What closed today, what moved, what
tomorrow looks like, and anything that needs an answer before the
morning. No Getting ahead section, no Friday block.

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
- Never invent urgency. If nothing needs the user, the memo is
  proud to be three lines long.
