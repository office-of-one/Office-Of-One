# Plugin changelog

Newest first. What changed, and why it mattered.

Versioning restarted at 1.0.0 on 1 September 2026. The 3.x line began
on 4 September 2026 when the plugin moved from Google Drive to this
repository. Always write the full three-part number — 3.1.0, not 3.1 —
in both manifests and in the tag.

Ordinary changes bump the middle number. Only a change that breaks
existing users' setups bumps the major.

Releases are git tags. The version in
`plugins/office-of-one/.claude-plugin/plugin.json` and in
`.claude-plugin/marketplace.json` must match the tag and each other.

**Existing customers do not update automatically.** They have whatever
version they installed.

## v3.23.0 — 2026-09-14

**Fixes from the second memo test.** A rerun with the made-up realtor
confirmed the shorter memo spec produces the same memo. It also found
one gap and five contradictions.

- **Requests from workflow clients no longer disappear.** Mail from
  someone in a workflow still waits for that workflow, unless it asks
  the user for something only they can decide, such as a meeting.
  Then the Desk adds a to-do. A workflow run that finds something
  needing the user also adds a to-do.
- **Dated to-dos appear in every memo,** matching the rule that every
  open to-do is listed. The capture skill now says the same.
- **Worth knowing and Getting ahead lines** can be one or two
  sentences, matching the spec's own example.
- **An offer to move a to-do forward** no longer counts as repeating
  it.
- **To-do numbers change when the Morning Memo is written,** not an
  hour earlier, so replies always match the last memo sent.
- **Money in the Desk skill:** a to-do is left for the user when it is
  a payment only they can make. How much time or money they'll commit
  still waits for their position. That list is renamed so it isn't
  confused with the "ask first" rules in the project instructions.
- **Email is always drafted for review.** The option to let the agent
  send without review is gone from ways-of-working, the project
  instructions, the memo skill, agent-admin and onboarding. The Desk
  skill states the rule again, since it was left behind when the Desk
  moved into its own skill, and it holds even if an older
  ways-of-working file says otherwise.
- **Asking to brainstorm gets up to three ideas straight away,** as it
  did before, instead of starting the full 1:1.

One scripted line is removed. Step 4 of onboarding no longer says
"Once you're comfortable and I know you better, you can tell me to
send things without your review, or change any of this." Existing
customers need a manual refresh of their project instructions to pick
up the change there.

## v3.22.0 — 2026-09-14

**A shorter, plainer memo spec.** The memo spec went from about 2,750
words to about 2,150, and it now reads in short, complete sentences
instead of clipped fragments. Colors and type sizes sit in two small
tables. History and reasoning the agent doesn't need are gone, and so
are rules repeated from the memo procedure and the Desk skill. Every
fixed line, color value, size and worked example is kept.

A few details changed along the way:
- The line "Nothing in the memo is ever two lines" contradicted the
  meeting prep rule. It now says no to-do is ever two lines.
- Worth knowing allows four lines at most, instead of "three or four".
- The dated to-do examples no longer show an owner, matching the rule
  that there is no owner field.
- "Action item" is now "to-do" in the memo spec.

Part of the fifth step of the simplification pass.

No scripted lines change.

## v3.21.0 — 2026-09-14

**A shorter memo procedure.** The memo skill drops rules it repeated
from elsewhere: the to-do line shape now points to the memo spec, the
list of auto-scheduled tasks stays in the files that create them, two
overlapping "never" rules are merged, and a repeated line about late
memos is gone. Nothing the memo does changes.

Part of the fifth step of the simplification pass.

No scripted lines change.

## v3.20.0 — 2026-09-14

**The 1:1 has three clear jobs.** It clarifies what the agent doesn't
know, helps the user, and finds one way to make the Desk better. Its
parts are now Catch up, Help (was Level up), Improve the Desk (was One
suggestion) and Check in. The suggestion rules moved into the 1:1
from the help skill, so they live in one place, and the 1:1 now
answers "brainstorm with me" too.

**`help-and-brainstorm` is now `help`.** It answers how-do-I questions
and points to support when the agent can't fix something.

Fourth step of the simplification pass.

No scripted lines change.

## v3.19.0 — 2026-09-14

**Fixes from a workflow test.** A test with a made-up user whose
workflow tracked 40 clients confirmed the Desk leaves workflow files
alone and the memo stays readable. It also found six gaps:

- **Mail from someone in a workflow** had no rule. The Desk may now
  read a workflow's tracker to recognize who is in it, and leaves
  their mail for that workflow. If the workflow only runs on request,
  the Desk adds one to-do to run it.
- **Daytime workflow runs never reached a memo,** because the Evening
  Debrief has no Getting ahead section. A workflow run now shows in
  the next Morning Memo.
- **The complete to-do list** now says Priority and Remaining to-dos
  together list every open item, each once.
- **Leaving a to-do bare** now allows "only the user can do it". A
  to-do that needs the user's position first is LET'S TALK, not bare.
- **Meeting prep** is the one exception to one line per calendar
  event.
- **The log template** no longer calls the memo a brief.

No scripted lines change.

## v3.18.0 — 2026-09-14

**Workflows.** Some users want a heavier job done regularly, such as
tracking clients and drafting follow-ups. That work doesn't fit the
task list: a large tracker would flood every memo. It now gets its
own workflow file, with a tracker, the steps the agent follows, and a
Last run line.

- The 1:1 proposes a workflow when the week shows a job like this,
  and builds it only after the user agrees. It runs on request or on
  a schedule the user chooses.
- Workflow items stay in their own file. They never go in the task
  list, and the Desk never works them.
- The memo leaves workflow items out of the to-do list. Each workflow
  that ran since the last memo gets one Getting ahead line instead.
- Workflows are listed in the setup file, next to topic files.

Third step of the simplification pass.

No scripted lines change.

## v3.17.0 — 2026-09-14

**The Desk has its own skill.** The Desk's rules were split between
the memo skill and the comms style file. They now live together in a
new `desk` skill: the run's steps, working the list, the finish check,
the tag definitions, and when to research, draft or offer a calendar
entry. The memo skill now only builds and sends the memos, and the
comms style file only covers how writing looks. Nothing the Desk does
changes, and it stays hidden from the user.

Second step of the simplification pass.

No scripted lines change.

**Existing customers** get this after updating. A scheduled Desk task
that still points at the memo skill keeps working: the memo skill
sends it to the desk skill.

## v3.16.0 — 2026-09-14

**A map of how the agent works.** The project instructions now open
with a short definition of each part: the Morning Memo and Evening
Debrief communicate and close the loop, the Desk does the work, the
Friday 1:1 clarifies, helps and improves the Desk, and workflows are
heavier jobs a user sets up for their own work, each in its own file
and set up only after the user agrees. This is the first step of a
simplification pass; later steps bring the skills in line with it.

No scripted lines change.

**Existing customers** need to replace their project's instructions
with the current `templates/project-instructions.md` to get the map.

## v3.15.0 — 2026-09-14

**Agent work is now The Desk.** The scheduled run that works the
user's list an hour before each memo is renamed The Desk: where work
is delegated and executed. It stays behind the scenes. The agent never
brings it up, and if the user asks what The Desk is in their scheduled
tasks, it says "The Desk is where your work is delegated and
executed."

Existing users already have a scheduled task named Agent work. When
they say "set up my schedules", the agent replaces it with The Desk
at the same times instead of creating a second task, so the work
never runs twice.

Also fixes the onboarding instruction that told the agent to run the
memo skill "in agent-work mode", which never existed.

**Scripted lines changed:**
- Answer when asked what it is. Old: "That's when I get your memo
  ready." New: "The Desk is where your work is delegated and
  executed."

**Existing customers** get the rename after updating, then say "set
up my schedules" to replace the old Agent work task. The project
instructions don't refresh on update: replace them with the current
`templates/project-instructions.md` for the renamed rule.

## v3.14.0 — 2026-09-14

**Nothing is left out for being personal.** An agent declined to keep
health details in the brain files, saying they didn't belong in
context read every session and pulled into memos. The plugin never
said that; the agent filled a gap with its own caution. Now it is
explicit: health, body, money, family and relationship details are
stored like anything else and appear in the memos wherever they help.
The only exceptions are what the user asks to forget or keep out, and
the Office of One setup email, which still never carries personal
details. The agent still never asserts a sensitive inference; once
the user has said something, it is a fact and gets used.

No scripted lines change.

**Existing customers** get the memo, memorialize and onboarding
changes when they update. The full rule lives in the project
instructions, which don't refresh on update: replace the project's
instructions with the current `templates/project-instructions.md`.

## v3.13.0 — 2026-09-14

**Agent work stays behind the scenes.** The agent was telling users
things like "if Agent work doesn't run, your memo won't either".
Nothing marked Agent work as internal, so the agent treated it like a
feature to explain. Now:

- A standing rule says Agent work is internal. The agent never names
  it, never explains how it connects to the memos, and never says
  what happens if it doesn't run. Asked what it is, the agent says
  "That's when I get your memo ready."
- The setup check still checks and creates Agent work, but never
  shows it. The "Set up my schedules" screen drops its Agent work
  line, the status screen leaves it out of the task list, and a
  missing Agent work run is reported as "Your Morning Memo isn't
  scheduled yet."
- Changing a memo time moves Agent work silently.
- The memo never explains why it is late or thin.

**Scripted lines changed:**
- "Set up my schedules" screen: the line "Agent work: [every day at
  TIMES / just created]" is removed.
- New answer when asked what Agent work is: "That's when I get your
  memo ready."

**Existing customers** get the setup check, memo and agent-admin
changes when they update. The standing rule lives in the project
instructions, which don't refresh on update; the same rule is copied
into the memo and setup check so it applies either way. For the full
rule, replace the project's instructions with the current
`templates/project-instructions.md`.

## v3.12.0 — 2026-09-14

**The interview no longer asks about schedule times.** Step 4 used to
ask whether the user wanted to change the times, the days or who gets
calendar invites, and Step 6 asked the same question again after the
Morning Memo test. Both questions are gone. The defaults are stated,
the schedules are created at those times, and the user can change
them any time by asking.

**Scripted lines changed:**
- Step 4. Removed: "Want to change the times, the days, or who else
  goes on your invites?"
- Step 6, after the Morning Memo test. Old: "Your Morning Memo is in
  your inbox now. It'll arrive every day at 6am, with the Evening
  Debrief at 8pm the night before, our 1:1 on Fridays, and invites
  going to you only. Want to change the times, the days, or who else
  goes on your invites?" New: "Your Morning Memo is in your inbox
  now." The times are already stated in Step 4.

**Existing customers** are unaffected unless they run a new interview.

## v3.11.0 — 2026-09-13

**Capture stops naming files.** A capture sometimes opened with
"Written to tasks.md:" or explained that something would be held
"in tasks.md" until a calendar was connected. The user has an agent,
not a filesystem. The skill now says where things went in plain
words — "On your list:" — and never names a file, folder, tool or
skill in anything the user reads, including asides about why
something could not be saved.

Found by the eval suite, which caught it in roughly one run in
three. Eight runs after the fix: clean in all eight.

No scripted lines change. Existing customers get this after
updating; nothing needs a manual refresh.

## v3.10.0 — 2026-09-13

**Every memo is checked before it goes out.** The agent now runs a
short list of checks on the finished memo and fixes whatever fails
before sending: every open to-do present and numbered straight
through, one line each with only a date in the grey slot, every link
opening, every number traceable to a source, tags matching what
actually happened, nothing the user already did, no talk of how the
memo was made, and a plain-text version that matches. A memo is never
sent with a check still failing.

Each check comes from a real miss: a memo that showed 8 of 25 to-dos,
unverified phone numbers, a wrong claim about a flight booking, and a
weekly count that could not be counted.

No scripted lines change. Existing customers get this after
updating; nothing needs a manual refresh.

## v3.9.0 — 2026-09-11

**Agent work offers calendar entries.** When a to-do needs the user
somewhere at a set time and place and it is not on their calendar,
such as an airport pickup, Agent work now offers to add it in one
Getting ahead line. Nothing is added without a yes, the entry goes to
the user only, and once it exists the item leaves the to-do list. A
Friday 1:1 test found the agent had filed a pickup as a to-do
without offering the calendar entry.

No scripted lines change. Existing customers get this after
updating; nothing needs a manual refresh.

## v3.8.0 — 2026-09-11

**A shorter goodbye.** After the tests, the interview now ends with
three short paragraphs instead of six. The results screen has
already told the user they're set, so the closing lines no longer
repeat it. They no longer ask the user to rename the project to the
agent's name.

**Scripted lines changed:**
- Closing lines. Old: six paragraphs, starting "That's all seven
  done, and your agent is set up. Every Friday we'll sit down for a
  few minutes..." and ending "So glad to be your new personal
  assistant, [Name]. Talk soon." New: "Congrats, your agent is set
  up. I'm here whenever you need me, and I'm excited to chat in
  detail on Friday for our first 1:1. I live here, in this project.
  Outside it, Claude won't know you the way I do. You can change my
  name or personality any time, and say 'help' whenever you're
  stuck. Talk soon, [Name]. — [Agent Name] 🤖"

**Existing customers** are unaffected unless they run a new
interview.

## v3.7.0 — 2026-09-11

Fixes three gaps found in a real Morning Memo test run.

**One result line when the Morning Memo test fails two ways.** If the
schedules are missing and the mail check also fails, or the memo
sends anyway, the setup screen shows the missing-schedule line.
Missing schedules stop every memo from arriving, so they come first.

**The Friday count only shows what can be counted.** The weekly usage
line still runs every Friday, zeros included, but shows only the
numbers that can be counted honestly from the task list and log. It
is left out if none can be counted, instead of guessing.

**An empty calendar has set wording.** When nothing is on the
calendar, Today reads "Nothing on your calendar today."

**Scripted lines changed:**
- Setup screen closing line. Old: "All four working. You're set."
  New: "All tests passed. You're set."
- Morning Memo, new: "Nothing on your calendar today." for an empty
  calendar.

**Existing customers** see this after updating. Nothing needs a
manual refresh.

## v3.6.0 — 2026-09-10

**The Morning Memo test sends a real memo.** The setup check's
Morning Memo test, in Step 6 and on "Test my setup", no longer shows
a sample in the chat. It runs one real Morning Memo from the user's
own mail, calendar and to-dos and emails it to their inbox. Every
to-do is listed; to keep the test quick, only two items are worked,
the most research-heavy first. If mail cannot send, the test fails
rather than showing the memo on screen. Scheduled runs still do the
full work.

**Scripted lines changed:**
- Step 6, after the Morning Memo test. Old: "That's your Morning
  Memo. It'll arrive every day at 6am, with..." New: "Your Morning
  Memo is in your inbox now. It'll arrive every day at 6am, with..."
- Setup check, new fail line: "I can't send your Morning Memo by
  email yet."

**Existing customers** see this the next time they run the setup
check after updating. Nothing needs a manual refresh.

## v3.5.0 — 2026-09-10

**Connectors are picked before the sweep.** Step 3 now opens by
listing every connector switched on in the project and asking
whether any should be left alone. The user switches those off in the
connectors menu; the agent records them in ways-of-working, and no
run ever reads from them, Agent work included.

**Calendar contradictions wait for the Morning Memo.** The interview
no longer asks about calendar contradictions or conflicts. They are
written to tasks, and the first memos ask them under Needs your
input; double-bookings show as CONFLICT in Today. Contradictions with
mail are still confirmed in Step 5.

**The progress card reaches the end.** The card is updated at the
start of every step, moves to Step 6 before the tests, and fills
completely at the close. It could previously stall at Step 5, and it
was built never to fill its last step.

**Schedule my tasks.** Step 4 is now "Schedule my tasks", and the
four scheduled tasks are created there, right after the memo times
are stated, instead of after Step 5. The last step on the card is
now "Agent setup complete".

**Scripted lines changed:**
- Step 3, new: "Here's what's switched on for me right now: [list].
  Is there anything here you'd like me to leave alone? If so, switch
  it off in the connectors menu and tell me when you're done."
- Step 4 label. Old: "Tell me how you work." New: "Schedule my
  tasks."
- The schedule confirmation line keeps its wording and is now said
  in Step 4.
- Closing lines. Old: "Six of seven done. The seventh is my
  favorite, because it never really ends. Every Friday..." New:
  "That's all seven done, and your agent is set up. Every Friday..."
- Progress card: the last step "Let's keep building" becomes "Agent
  setup complete", and the finished card reads "Agent setup
  complete" instead of "Six of seven done".

**Missed in the v3.2.0 entry.** These interview changes shipped in
v3.2.0 but were not listed then: the agent introduces itself as
"your new personal assistant" instead of "your new chief of staff",
in the opening line and the sign-off; Step 5 gained the rule "Focus
on high priority items first"; and the guide's line "Never call them
briefs" was removed. That rule still stands in the memo procedure
and the project instructions.

**Existing customers** only see these changes in a new interview.
Nothing needs a manual refresh.

## v3.4.0 — 2026-09-10

**Agent work: the work happens before the memo.** A user's memo came
back with 8 of about 25 open items and one draft. The spec invited
both: nothing required a complete list, a fifteen-second rule pushed
cutting, and drafts were capped at two. A new scheduled task, Agent
work, runs at 5am and 7pm local, one hour before each memo. It reads,
sweeps mail and calendar, folds what is new into tasks, then takes
every to-do as far as it can go on its own: looks it up and links one
pick (RECOMMEND), drafts what is already true (DRAFTED), or flags
what needs the user's position (LET'S TALK). It is not finished until
every open item has a state, and a bare item needs a reason. The
memos then present the work, after a quick catch-up on mail from the
last hour; if Agent work did not run, the memo does the work itself.

**The to-do list is always complete.** Remaining to-dos lists every
open item, grouped by category and never cut. The fifteen-second
rule is gone, and Getting ahead's four-line cap no longer hides work:
anything else drafted or researched still shows its tag in the list.

**Drafting.** The agent drafts everything that qualifies and asks
only after two drafts in a row go untouched for two days. This
replaces the cap of two drafts in flight.

**The memo times change.** The Morning Memo moves from 6:45am to
6am; the Evening Debrief stays at 8pm. There are now four
auto-scheduled tasks: the Morning Memo, the Evening Debrief, Agent
work and the Friday 1:1. Moving a memo moves its Agent work run;
turning off the Evening Debrief stops the 7pm run.

**Scripted lines changed:**
- Interview, Step 4 defaults. Old: "Your Morning Memo arrives every
  day at 6:45am, and your Evening Debrief at 8pm the night before."
  New: "Your Morning Memo arrives every day at 6am, and your Evening
  Debrief at 8pm the night before. I'll do the prep work an hour
  before each one."
- Step 6, after the Morning Memo test: "6:45am" becomes "6am".

**Existing customers** keep their current memo times and have no
Agent work task until they update and say "set up my schedules";
until then each memo does the work itself. Their project
instructions do not refresh on update: to have them name Agent work,
replace them with the current `templates/project-instructions.md`.

## v3.3.0 — 2026-09-10

**The Morning Memo has a new design**, revised after reviewing real
sends in the Gmail app on a phone. New section order: Today as a day
rail, Worth knowing, Needs your input, Getting ahead, Priority
to-dos, Remaining to-dos, then the footer. Three signal colors: pine
for what is the user's, purple for what is the agent's, amber for
conflicts. To-dos are one line with dates only in the grey slot, and
the email build rules survive phone mail apps. The Evening Debrief
is shorter.

**The agent works the list before writing.** Every run reads,
sweeps mail and calendar, folds what is new into tasks, then takes
each to-do as far as it can go on its own: looks it up and links one
pick (RECOMMEND), drafts what is already true (DRAFTED), or flags
what needs the user's position (LET'S TALK). At most two unrequested
drafts in flight. Replies resolve by number.

**New `agent-comms-style.md`** in the daily-readout skill: how
write-ups for the user and emails drafted as the user look, the
tags, and when to draft without asking.

**The tasks file becomes the ledger.** Numbers match the memo, and
items carry tags, thread pointers and what was found. It adds
Priority today (three at most) and the questions put to the user.
There is no owner field anywhere any more.

**Templates.** The setup template says where context lives (five
places, topic files included), records the system the user is moving
off, and keeps per-user memo format overrides in place of "Memo
sections beyond the standard". The project instructions make saving
silent, let the agent work the to-do list in a session (reversible
work done and reported, anything that sends, spends or commits asked
first), and make "track X" a check at every memo run. Open questions
are asked one at a time and each domain is marked covered, partial
or untouched. The people template drops "Straight to the top" and
"Just noise".

**Removed from the memo procedure:** catching up a missing log line
and condensing the month, guidance on the long memory, the rule to
surface tomorrow's deadlines today, handing replies off to the 1:1,
pointing product feedback to support, and the rule against quoting a
private message back.

**The Friday block is two lines:** the weekly usage count and the 1:1
invite. The "one idea" is gone; the suggestion now comes only in the
1:1.

**Scripted lines changed:**
- Friday 1:1 invite. Old: "Let's have our 1:1 and find a few more
  things I can take off your plate. Open your agent in Claude and say
  'let's do our 1:1'." New: "Ask me in your [Agent Name] project in a
  Cowork session to have a 1:1, and let's take some things off your
  plate."
- Friday feedback line removed. It read: "And if anything about me
  is working or not working, drop a note to support@officeofone.ai.
  A sentence is plenty."
- Interview, Step 4. Old: "Change the wording, the owner or the
  date, tell me to drop one, or add whatever isn't there." New:
  "Change the wording or the date, tell me to drop one, or add
  whatever isn't there."

**Existing customers** keep the old memo until they update. Brain
files already in their project, including tasks and ways-of-working,
keep their old layout until refreshed from the new templates, and
their project instructions need a manual refresh: replace them with
the current `templates/project-instructions.md`.

## v3.2.0 — 2026-09-10

**Step 6 (Test me) now runs for every user.** Some users never
reached the setup tests. The step sat after a long reference section,
opened with a precondition, and started by asking for a project link
that desktop-app users don't have. Step 6 now follows Step 5
directly, always runs, and has its own opening line. If time is
short, Step 5 questions are cut instead. A user who wants to skip the
tests is asked once; if they still decline, they are told to say
"Test my setup" later, and onboarding still counts as complete.

**The project link is gone.** Users are on the Claude desktop app, so
there is no browser address to paste. The link capture, the LINK test
and the link in the Friday Morning Memo are removed. There are now
four setup tests: calendar, Morning Memo, Friday 1:1 and email.

**Step 2 asks for the pre-work output.** The interview no longer
hands out the prompt for Claude or ChatGPT. Users run it as pre-work
and paste the result.

**Step 5 draws on the full question pool.** The 1:1 question pool
moved into Step 5, so the first sitting covers as much as it can: up
to 10 questions, starting with Yesterday. Whatever is left goes to
the Friday 1:1. Household is a new domain, Family is now Extended
family, and Voice no longer asks for writing samples, which
conflicted with the rule that the agent never imitates the user's
writing. The separate household, roster, weekly-skeleton and
what-gets-dropped questions are removed, so "Straight to the top"
and "Just noise" are no longer asked during onboarding.

**Brain files are created when missing.** Step 5 checks that the
brain files exist before its first question, creates any that are
missing, and saves each answer before asking the next. Some users
had finished onboarding without them.

**Topic files.** When a subject has real substance, such as fitness
goals, the agent starts a topic file for it (fitness.md), organized
into categories and listed in ways-of-working. Dated actions stay in
tasks and people stay in people. A sensitive subject gets a file only
when the user named it themselves. The memos, memorialize, the 1:1
and agent-admin all read topic files, and forgetting deletes from
them.

**The Friday 1:1 is consistently one of three auto-scheduled
tasks.** Several files still said only the Morning Memo and Evening
Debrief were auto-scheduled. All of them now name the Friday 1:1 too.

**Scripted lines changed:**
- Step 2. Old: "Now, have you chatted with Claude or ChatGPT
  before?..." followed by per-assistant instructions and the prompt.
  New: "If you have used Claude or ChatGPT before, this is where you
  can provide me the output of the prompt you ran as pre-work."
- Step 5, new: "We'll pick up the rest of my questions at our Friday
  1:1."
- Step 6 opening. Old: "One thing I need from you first. Copy the
  address of this project from your browser and paste it here..."
  New: "Before we wrap up, let's make sure everything works. I'll run
  four quick checks: your calendar, your Morning Memo, our Friday 1:1
  and email."
- Step 6, new, for a user who wants to skip: "These checks are how we
  make sure your Morning Memo will actually arrive. Can we run them
  now?" and "No problem. Whenever you're ready, just say 'Test my
  setup'."
- Closing lines. Old: "Nothing inside it moves, and the link you just
  gave me keeps working." New: "Nothing inside it moves."
- Setup screen. Old: "All five working. You're set." New: "All four
  working. You're set."
- Friday Morning Memo 1:1 line: the version with a link is removed.

**Existing customers** keep the old interview until they update.
Their project instructions do not refresh on update. To have the
agent consult topic files at the start of every session, replace the
project's instructions with the current
`templates/project-instructions.md`.

## v3.1.0 — 2026-09-04

**The feedback address changed from `email@officeofone.ai` to
`support@officeofone.ai`.** It appears in six scripted lines the agent
says out loud, in the pre-filled `To:` line of the feedback email
users send themselves, and in the marketplace listing's owner field.

This is a scripted-line change, which is why it gets a version of its
own rather than riding along with a docs edit. Customers already set
up will keep telling people the old address until they update.

**Repository documentation added:** `CLAUDE.md`, `CHANGELOG.md` and
`DEPENDENCIES.md` now live here rather than in Drive, rewritten for a
branch-and-pull-request workflow.

## v3.0.0 — 2026-09-04

Withdrawn same day and superseded by 3.1.0 before general
availability. Listed here because it briefly existed; there is no
v3.0.0 tag.

Clean slate replacing the old 2.4.x line entirely. Cut from the 1.5.0
Drive working tree; the 1.5.0 and 2.x numbers were never released from
here.

**The plugin now runs standalone.** The MCP connector, the X-API-Key
custom connector step and `mcp.officeofone.ai` are all removed,
deliberately. An MCP version may come later. This is the breaking
change the major version signals: anyone on 2.4.x has a connector step
that no longer exists.

**Eight skills**, adding `one-on-one` for the Friday 1:1.

**Three scheduled tasks:** Morning Memo, Evening Debrief, Friday 1:1.

**`setup-check` now runs five real tests** — link, calendar, memo,
1:1, email — instead of reporting connector status.

**Feedback is written by the user**, not composed by the agent.

---

# Earlier history (Drive era, 1.x)

Kept for reference. These versions were released as folders in
`RELEASES/`, not as tags, and are not installable from this repository.

## v1.5.0 — 2026-09-04

Never released on its own. This is the working tree that became 3.0.0,
recorded here because everything below ships in the version customers
install today, and nothing else documents it.

The theme was closing gaps between the workshop deck and the plugin,
where a participant would see one thing on screen and a different
thing in their chat.

**`log.md` and `archive.md` are now installed during onboarding.**
The significant one. Both templates had existed since 1.2.0 and
`memorialize` wrote to them on every durable fact, but onboarding only
ever installed five brain files plus the project instructions. The two
memory files were never created, so the skill meant to fill them had
nothing to write into, and the promise of decisions going back months
had no storage behind it. Onboarding now installs them and seeds
`log.md` with its first line. New hard rule: every file in
`templates/` is installed during onboarding.

**The default agent name is Agent OOO.** "Chief" is retired. It had
survived in `templates/personality.md` and the Step 1 fallback line
while the deck had said Agent OOO for a while, so anyone who declined
to name their agent got a different name from the one on screen.

**The Morning Memo default is 6:45am**, matching the deck, the sample
memo and the readout format. Two files were still saying 6am.

**Step 3 is now "Confirm what's connected"**, not "Connect me to your
world". Connectors are set up before the interview, so Step 3 confirms
them and never sends anyone away to authorise something mid-session —
which is what desynchronises a room. A missing mail or calendar gets
one scripted sentence and no chasing.

**The Friday 1:1 is actually scheduled.** Step 7 previously created
two scheduled tasks while `setup-check` tested for three and the deck
promised a weekly 1:1. It now creates all three and verifies them
before moving on.

**"Set up my schedules" works as a recovery phrase**, handled by both
`onboarding-interview` and `setup-check`. It checks which of the three
exist and builds only what's missing — the fix for an interview that
died between steps 6 and 7.

**`setup-check` test 3 confirms both daily schedules**, not just the
Morning Memo, and test 4 confirms the Friday schedule exists before
running its live question. Adds a "Set up my schedules" screen and a
nudge on the Status screen when the count is under three.

**The project link has a fallback.** A user who cannot produce the URL
in Step 6 gets one scripted line and the tests carry on, instead of
stalling the step.

**"Resume the interview" is named in the skill.** The resume path
already existed; nothing had told the user the phrase.

**Closing lines ask the user to rename their project** from *My Agent*
to their agent's name, and reassure them the link survives it.
Everyone in a workshop starts at *My Agent*, so the room can follow
along.

## v1.4.0 — 2026-09-04

Onboarding gets its progress card fixed and its scripts marked up.
No change to what onboarding asks or in what order.

**The progress card was showing the wrong step.** SKILL.md told the
agent to pass the number of steps COMPLETED; the template reads that
number as the step now IN PROGRESS, and renders "Step 3 of 7" with
only 1 and 2 ticked. The two files disagreed, so finishing step 3
produced a card that said step 3 was still open. `[[STEP]]` is now
defined once, in both files, as the step now in progress.

**The card renders at the start of a step, not the end.** It is a
progress indicator, so it should appear when the work begins.

**A card that does not visibly change is a bug.** New rule: never
re-send an identical card, and never deliver it as a repeated file
attachment under the same filename. Some clients cache that and show
the user the same card every time, which reads as the interview being
stuck.

**"Building your brain" is now "Building your agent"**, on the card,
in the fallback text line, and in the skill's own headings. The
internal files are still called brain files; that name was never
user-facing and has not changed.

**Bold is now part of the script.** Every step opens with its
progress card label in bold on its own line, so the words on the card
and the words the user reads are the same. Inside every scripted
question the operative ask is bold and the explanation and
recommendation around it stay plain. Whole lines are never bolded.
This is what makes a memo-length question answerable on a phone
without re-reading it.

**Onboarding stops suggesting connectors.** The Connector Report
listed what the user had and then what they "might also enjoy". That
turned minute four of the relationship into a setup chore list. It
now lists only what is connected, plus a sentence or two on what that
lets the agent see. A connector the user lacks surfaces later, in the
1:1, at the moment it actually blocks something.

**Step 4 stops asking about logistics and states them instead.**
Four of the five ways-of-working questions are gone. Email drafting,
calendar adds, invite rules and memo scheduling are now defaults the
agent announces:

- Emails and calendar invites are drafted for confirmation.
- Invites go to the user only until they name someone.
- The Morning Memo is every day at 6am local.
- The Evening Debrief is every day at 8pm local.

Then one offer, "Anything you'd change about that?", and one real
question, the to-dos. The reasoning is the same for all four:
nobody can sensibly choose a memo time before they have seen a memo,
or decide how much autonomy to hand an agent before watching it do
anything. Asking produces an arbitrary answer the user then lives
with.

**The to-do question stops starting from a blank list.** It used to
open with "where do they live today?" and pull a few items across.
People freeze on a blank list and hand back whatever they thought
about that morning, so the step produced three items and no signal.

It now runs in three beats. The agent shows four or five items it
derived from the Step 3 sweep, filtered hard: an action the user owns
plus a real date signal, and never a newsletter, promotion, receipt,
delivery notice or digest. Then it invites corrections and additions,
not just deletions, because the user has to be able to reword,
reassign, redate or drop anything the agent surfaced, and their
wording wins. Then it asks the only question no connector can answer:
"what's on your list that isn't written down anywhere?" That is the
mental load, and asking it against a list rather than a blank is what
makes the recall work. "Where do your to-dos live today?" moves last
and shrinks to inventory.

Derived items stay proposals until answered. Corrected ones count as
stated, untouched ones stay labeled derived, dropped ones are deleted
and never resurface. The Step 3 sweep now retains candidate action
items for this, silently.

**A date is not automatically a calendar entry.** New rule in
readout-format.md, and applied at capture time in the capture skill.
Most of what arrives from schools, clinics, leagues and admin has a
date and needs nobody anywhere at that time. Those are dated action
items: they live in tasks.md, the memo surfaces them the day before
and the day of, and they stay off the calendar. A calendar entry is
for something a person physically attends, at a time, in a place.
Filling a calendar that is already mostly other people's commitments
with things the user does not attend makes the one surface they check
less readable.

One notice often produces both, and they are separate records. A
Thursday math test is an action item ("Review with Sam for
Thursday's math test", due Wednesday) and no calendar entry. A
Saturday game is a calendar entry, plus an action item only if
something must happen first. Being unsure which is a reason to
propose both and let the user drop one, never a reason to record
neither.

Priorities remain not a third kind of record: a dated action item is
promoted by the existing ranking rules when its date arrives.

**Offers name their levers.** Both change offers used to read
"anything you'd change about that?", which sounds generous and lands
as work: the user has to re-read four sentences and work out which
parts were settings. Both now ask "want to change the times, the
days, or who else goes on your invites?" There is a general rule in
the guide now: an offer to change something always names what can be
changed.

**The defaults are offered again after the Morning Memo test**, in
Step 6, which is the first moment the user has evidence. Any change
is written to ways-of-working.md and to the scheduled tasks before
onboarding finishes. That is now the real decision point; Step 4 is
just disclosure.

No action needed for existing users. Anyone mid-interview finishes on
the old wording; the next interview uses the new one.

## v1.3.0 — 2026-09-03

The largest change since 1.0.0. The daily drip becomes a weekly 1:1,
the briefs become the Morning Memo and the Evening Debrief, and
onboarding grows a testing step.

**New names.** Users now receive a **Morning Memo** and an **Evening
Debrief**. Nothing user-facing says "brief" any more. Older trigger
phrases ("run my daily brief", "Test daily summary") still work, so
anyone trained in an earlier workshop is not stranded.

**New skill: `one-on-one`.** The weekly sitdown, invited from the
Friday memo and available any time the user asks. No question limit;
the user ends it. Questions come from the pool and from what actually
happened that week. Also carries one capability worth knowing and one
suggestion, and it is where the user reshapes their memo.

**The daily question is gone.** The memo is logistics only. The single
question it asks is "anything else I should know?"

**Onboarding is seven steps and thirty minutes.** Step 6 is "Test me":
project link, calendar write, Morning Memo, the 1:1, and email, run
live. A failed test reports but never blocks finishing. Step 7 is the
1:1 and never fills.

**Brain files are written as you go**, not batched at the end. An
interview interrupted at step 3 now resumes instead of restarting.

**The Evening Debrief is auto-created**, with only its time asked
(default 8pm). Agent-admin can turn it off permanently.

**Memo format rebuilt around replying inline.** Flat lines, no tables.
Action items numbered; priorities marked, not numbered; calendar never
numbered. Every priority and action starts with a verb. New sections:
Priorities with their ranking reason, Needs your input for blocking
questions, Remaining action items grouped by categories derived from
that person's life, and a Sources line that counts what the memo was
built from without characterising it.

**Personality is fixed at install** — professional, concise, friendly,
warm — and the three personality questions are gone from onboarding.
Users change it any time by asking.

**No sensitive-categories list.** The agent captures what the user
tells it. It never asserts a sensitive inference; it asks about the
observable thing instead. Life events are recorded as logistics, never
as meaning. Nothing sensitive leaves the project.

**Feedback goes direct.** The Friday 0-5 pulse is removed. The Friday
memo carries one line pointing at email@officeofone.ai; the user
writes it themselves. The setup email in Step 6 is the only note the
agent drafts, and it is shown in full and sent only on a yes.

**On brand.** The progress card and all email output now use the Office
of One palette, deep green and cream, per the new style guide in
05-Brand. The orange from earlier artwork is gone.

**EXISTING USERS NEED A MANUAL REFRESH.** `project-instructions.md`
changed, and onboarding only installs it when it is not already
present. Anyone set up before this release keeps the old instructions
until they replace them by hand, which means their agent will not know
about the 1:1 and will still call things briefs.

## v1.2.0 — 2026-09-02
Memory no longer depends on a session ending cleanly. It usually
doesn't: people close the app, get interrupted, run out of battery,
and anything waiting for a tidy ending was being lost.
- `memorialize` now writes as things happen — a decision, a new fact,
  a correction — rather than saving once at the end. Corrections in
  particular are written the moment they're given. It writes silently
  mid-conversation and only confirms when the user explicitly asked
  it to save something.
- `daily-readout` is now the safety net. Before writing the morning
  brief it checks whether yesterday's line exists and fills it in if
  a session was interrupted, and rolls the previous month into the
  archive if that hasn't happened yet. Silently, never in the brief.
- One line per day rather than per session; a bigger event later in
  the day rewrites the line rather than adding a second.
- The evening brief also fills today's line if nothing was recorded.

No action needed for existing users.

## v1.1.0 — 2026-09-02
Long memory now actually works. `log.md` and `archive.md` shipped in
1.0.0 but nothing wrote to them or read them, so they stayed empty.
- `memorialize` writes a dated line per session to `log.md`,
  condenses the previous month into `archive.md` at the start of each
  new month, and compresses months older than six months
- `agent-admin` draws on both files for "what do you know about me";
  "forget this" now deletes from them too
- `daily-readout` may reference the long memory when today connects
  to something past, sparingly and in one line
- Templates rewritten with their format and their writer named

## v1.0.0 — 2026-09-01
First numbered release. Fully self-contained: no server, no external
connector required. Seven skills, eight brain templates, the Building
Your Brain progress card, the drip queue, and the warm-register
interview scripts. Default agent name is "Office of One Agent".
