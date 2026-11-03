# The Desk page: published at the end of the interview, kept current by the Desk

Date: 2026-11-02
Status: draft for approval
Source material: `office-of-one-desk-handoff.zip` (template/desk.html,
template/capabilities.json, schema/data-contract.md, prompts/*.md,
test/render-test.js). The README in that zip points to a "handoff doc"
with rules to change, build order and open risks. That doc was not in
the zip and has not been seen.

## Intent

When the interview ends, the person should be able to see what their
agent now knows and how it fits together, not just be told "your brain
has been updated". The visual is the radial brain map: life areas
round a ring, files as squares, notes as circles, lines where they
connect, red dashed lines where something is missing. Tapping a node
shows what it holds.

That map is the Brain tab of the Desk page in the handoff. The person
gets the whole Desk, not a one-off snapshot: the same page their agent
keeps current from then on, with Today, To-dos, Brain, Calendar and
Plan.

So there are two halves, and both are in scope:

1. **The interview publishes and fills the Desk page** at the close,
   and opens it on the Brain tab.
2. **The Desk runs (5am and 7pm) keep the page current** and read back
   what the person did on it.

## Goals

- At the end of the interview the person sees their own brain map,
  filled from what the interview just learned, with no setup card.
- From the first Desk run on, the page shows the same to-dos, drafts
  and calendar offers the memo talks about, and taps on the page
  (done, notes, sent, trust settings) reach the agent.
- "Run" on any to-do works from day one.
- Extra buttons appear only when the interview shows a need for them.

## Non-goals

- Changing the Morning Memo or Evening Debrief format. They may link
  to the page; nothing else changes in them.
- New agents beyond the three in the handoff (Task Runner, Agent
  Builder, Meeting Prep).
- Redesigning the page. desk.html is used as handed over, apart from
  the changes listed under "Changes to the page".
- Phone-only setup. Setup still needs a computer.

## Anti-goals (what would make this a failure even if it works)

- The page and tasks.md disagree. tasks.md stays the system of record;
  the page is a view of it plus a place to tap.
- Anything goes out without a tap. Drafts wait; money is always never.
- The interview runs past 30 minutes because of this.
- The person sees file names or internals. The page says "notes" and
  plain labels, never `people.md` or a path.
- Something is scheduled to run on a timer that the person did not
  agree to.
- Customer data lands in this repository. The template ships empty.

## Constraints

- Every rule in `CLAUDE.md` holds: verbatim scripted lines, no file
  names, blank beats guessed, derived stays labelled derived, only
  the memos and the Desk auto-scheduled, nothing leaves the project.
- Data contract limits: documents max 256 KiB, batches 50 writes,
  every write to an existing doc pinned with `if_version`. Agents
  never overwrite User fields.
- The page is published from template/desk.html with
  template/capabilities.json. The publisher adds the document
  skeleton.
- Any plugin file change: both manifests bumped, CHANGELOG entry,
  DEPENDENCIES.md worked through, `scripts/check-consistency.py`
  clean.

## Part 1: the interview publishes the Desk

### Where in the flow

- **Step 8 (Finish the brain files)** does the work, silently, after
  the brain files are confirmed complete and before "Your brain has
  been updated.":
  1. Publish desk.html with capabilities.json as a new private
     artifact. Record its URL in ways-of-working.md (Housekeeping,
     "Desk page:"). If one is already recorded (a resumed interview),
     update that page instead of making a second one.
  2. Seed it (below), in as few batches as the 50-write limit allows.
- **Step 10 (Close)** opens the page on the Brain tab after the
  closing lines, with one new scripted line introducing it (wording
  in "Theirs" below). The progress card still reaches 7 first.
- If publishing or seeding fails, the interview carries on and closes
  normally. Nothing is said in the interview; the first Desk run
  retries (Part 2). The page is never worth blocking setup for.

### What gets seeded

| Document | From | Notes |
|---|---|---|
| `meta/config` | personality.md, ways-of-working.md | agentName, userName, timezone, mail and calendar type from Step 3, voice. runnerTask set once the Task Runner exists. builderTask only if the Agent Builder was installed. |
| `brain/*` | every brain file and topic file | One node per file. See "The brain map" below. |
| `meta/brain` | open-questions.md, Step 5 partials | `gaps`: the missing links. `defaultNode`: the person's profile node, so the map opens on them. |
| `todos/*` | tasks.md (the Step 3/4 candidates) | state "bare", category from the data contract list, derived label kept in `detail`. One doc per item, doc id stable across runs (see Part 2). |
| `settings/trust` | fixed defaults | every category "ask", money "never". |
| `settings/protected` | ways-of-working.md | blocks the interview recorded (standing commitments it was told to protect). Empty if none. |
| `meta/today` | | headline "Set up today", updatedAt now. |
| `recs/*` | as-needed helpers | see "Buttons" below. |

Nothing is seeded for emails, prep, trips, calendar or handled. They
fill from the first Desk run.

### The brain map

- **Goals sit at the centre.** The core disc holds the person's name
  with every goal from goals.md across the middle as a larger circle,
  coloured by its area, labelled in plain words with its date ("Half
  marathon in April"). Each goal links to the topic it belongs to on
  the ring, so the lines run from what they want out to the parts of
  their life it touches. With no goals yet, the centre shows "No goals
  yet" as a missing link, since the interview always asks the goal
  question. This needs a page change: today renderBrain puts goals on
  the outer ring with everything else.
- **Each goal tells its story.** Lines run from a goal to the
  activities and to-dos that touch it, in three kinds:
  - *Feeds it* (solid, dark green): calendar time booked for it and
    to-dos tied to it, with this week's hours.
  - *Competes for its time* (dotted, amber): something booked over
    time the person keeps for the goal.
  - *Missing* (red dashed, in the panel): what the goal needs and
    the calendar or list doesn't have.
  Tapping a goal lists those three groups as plain facts with their
  source ("her email, Oct 29"), then one **SUGGESTION** card: Mira's
  conclusion, worded as a suggestion the person can take or leave
  ("You might move Thursday's Q4 prep to Friday morning... Want Mira
  to draft the calendar change?"), with "Yes, draft it" and "Not
  now". It is never worded as a statement ("Q4 prep is hurting your
  goal"). This is the same rule as the memo's RECOMMEND tag: facts
  read as facts, and the agent's own pick is always labelled as its
  own. "Yes, draft it" goes through the Task Runner like any to-do
  and only drafts. At most one suggestion per goal, and none when
  there is nothing to suggest.
  - Where it comes from: the Desk already writes a "touches" line
    linking each item to its goal (Reconcile step), and
    `meta/calendar` already carries the goal per series and hours per
    area per week. Write out adds a per-goal story doc
    (`brain/<goal id>` gains `story {feeds[], competes[], missing[],
    suggest}`), refreshed each run. At the end of the interview the
    story is built from the calendar's recurring pattern and the
    Step 3/4 to-dos only.
  - The map opens on the person's top goal, not their profile.
- **Squares** are the core brain files (ways of working, tasks, open
  questions, on the rim of the centre disc) and topic files (on the
  ring). `kind: "doc"`. goals.md is not drawn as a square; its goals
  are.
- **Circles** on the outer ring are facts worth seeing on their own:
  each person in people.md who matters (household, close colleagues)
  and standing details. `kind: "person"` or `"topic"`.
- **Area** comes from what the file is about, using the page's area
  list (Work, Projects, Career moves, Content, Family, Health,
  Community, Other, plus Core for the profile, ways of working and
  tasks). When unsure, Other. Never invent an area.
- **Links** follow real references: a goal that names a person, a
  topic file listed in ways-of-working, a to-do that touches a goal.
- **Missing links** (`meta/brain.gaps`) are the open questions with a
  clear pair: "goal X has no time in the calendar", "no one named for
  school pickup". Each has a one-line note.
- `status: "empty"` on any file the interview could not fill, so it
  shows the red ring.
- Labels and summaries are plain words. `path` is never set, and the
  panel never shows a file name. Derived facts stay marked as derived
  in `facts`.

### Buttons: always-on and as-needed

- **Always: the Task Runner.** Every Desk gets it, so "Run" works on
  any to-do from day one. It is created from prompts/task-runner.md
  with the placeholders filled, never on a timer, started only by the
  page. Its id goes in `meta/config.runnerTask`.
- **As needed: Meeting Prep.** If the Step 3 calendar sweep shows
  regular meetings with people outside the household, the interview:
  - installs the Agent Builder (prompts/agent-builder.md, never on a
    timer) and sets `meta/config.builderTask`, and
  - adds one `recs` doc of kind "agent" offering Meeting Prep.
  Meeting Prep itself is created only when the person taps "Build
  this agent" on the page. That tap is the agreement.
- If nothing points to Meeting Prep, neither the Agent Builder nor the
  offer is installed, and the page shows no build buttons.
- The catalog the Agent Builder reads (agent-catalog.md, holding the
  Meeting Prep section) ships with the plugin and is copied into the
  project when the Agent Builder is installed.
- None of this is mentioned in the interview. The person finds the
  buttons on the page.

## Part 2: the Desk keeps the page current

The page URL is read from ways-of-working.md. If there is none, the
Desk skips all of this (older installs keep working exactly as now).

### Read back first (new, between steps 1 and 2 of the run)

Before the sweep, read what the person did on the page since the last
run, and fold it into tasks.md and the log:

- `todos` with User fields: status done or closed, doneAt, notes.
  Close the matching tasks.md item; add notes to it.
- `emails` with status sent or skipped: mark the item handled.
- `decisions`: log line per decision.
- `settings/*`: trust, protected and rules become lines in
  ways-of-working.md.
- `agents` docs with status "live": list the agent in
  ways-of-working.md.
- `todos.run` results from the Task Runner: attach to the item.

tasks.md wins any conflict with the page except a User field, which
always wins.

### Write out (new, after step 4 "Work the list")

Project the run's results onto the page, pinned with `if_version`,
never touching User fields:

- `todos`: every open tasks.md item, with state and action from step
  4. Stable doc id per item (the ledger id tasks.md already carries,
  or one added for it). Items closed in tasks.md get no new writes;
  the page hides closed ones.
- `emails`: each draft from step 4, status pending.
- `calevents`, `calitems`, `meta/calendar`: the day's calendar and the
  offers.
- `brain` and `meta/brain`: only nodes whose file changed this run.
- `handled`: what the run closed.
- `meta/today`: headline and updatedAt.
- `recs`: at most 3 a run, per the contract.

If the page has never been published (Part 1 failed), the morning run
publishes and seeds it as Part 1 would, once.

## Changes to the page

Kept small:

- Strip anything that reveals a file name or path in the Brain panel.
- Hide "Run" when `meta/config.runnerTask` is empty and "Build this
  agent" when `builderTask` is empty (check the template; it may
  already).
- The render test (test/render-test.js) passes for blank, seeded,
  dark and phone, with no overflow and no stray tokens.

## Where the code goes

All plugin changes in `office-of-one/Office-Of-One`, on branch
`desk-page`:

- `plugins/office-of-one/desk-page/`: desk.html, capabilities.json,
  data-contract.md, task-runner.md, agent-builder.md,
  agent-catalog.md (Meeting Prep).
- `skills/onboarding-interview/SKILL.md` and `interview-guide.md`:
  Step 8 publish and seed, Step 10 open and scripted line.
- `skills/desk/SKILL.md`: read back and write out.
- `skills/setup-check/SKILL.md`: a "Desk page" line in the status
  check, and "set up my schedules" also rebuilds a missing Task
  Runner.
- `evals/`: a case for the seed.
- The render test, in `evals/` (never under `plugins/`).
- Manifests, CHANGELOG, DEPENDENCIES.md.

## Left to the builder

- Exact batching of the seed writes and the doc id scheme for todos.
- The area chosen for each core file.
- How the page detects a missing runner or builder, if it does not
  already.
- Wording inside skill files that the person never reads.

## Open risks

- **Can the helpers run?** The page starts the Task Runner and Agent
  Builder with `fire_trigger` on the "Claude Code Remote" server. The
  interview creates scheduled tasks in the Claude app. Whether a
  workshop customer has remote triggers, and whether a remote run can
  read the brain files, is the open question CLAUDE.md already lists
  for scheduled jobs. If it can't, "Run" can't work and the always-on
  promise fails.
- **Sending from the page.** The page can send mail with Gmail
  `send_message` after a tap. That is an explicit yes, but it is a new
  path out of the project and PRIVACY.md may need a line.
- **The interview budget.** Publishing and seeding must fit in Step 8
  without the person waiting on it.
- **Desk run length.** Read back plus write out adds work to every
  run.

## Settled after the builder check (calls made while writing this up)

- **Trust "Just do it" is removed from the page.** The Desk skill says
  never send as the user without review, even if ways-of-working.md
  says otherwise. So the trust control offers "Ask me" and "Never"
  only, an accepted "trust" rec can only set "ask", and the Desk
  treats any "auto" it finds as "ask". (Call made while writing this
  up.)
- **Outlook and other mail.** Already handled by the page: for
  Outlook, email cards open a prefilled compose in Outlook and
  calendar offers open a prefilled event, and nothing is sent from
  the page. "Other" gets "Open in mail". The Desk writes `emails`,
  `calevents` and `calitems` for everyone.
- **What the Brain tab may show.** Missing links come only from open
  questions about logistics (time, who covers what, a missing date),
  never from a sensitive inference. A fact the person never confirmed
  is shown with "(derived)" after it. Nothing is named that the
  person didn't name first. (Call made while writing this up.)

## Decided by the product owner (2026-11-02)

- **Name: "Your Desk".** The page is called Your Desk to the person.
  The CLAUDE.md rule that the Desk is internal and never brought up is
  relaxed for the page only: the 5am/7pm runs, their schedules and the
  word "run" stay unmentioned. CLAUDE.md, the desk skill's wording and
  the help skill change to match.
- **Run button: test it first.** Before any Task Runner or Agent
  Builder work, a throwaway spike checks (a) that a workshop
  customer's account can create and fire a Claude Code remote trigger
  from the page, and (b) that a remote run can read the brain files
  and write to the page with ArtifactData. The same spike checks that
  the local 5am/7pm Desk task can reach ArtifactData. If (a) or (b)
  fails, `runnerTask` and `builderTask` stay empty, the page hides
  Run and Build, and the rest of this design ships without them.
- **Drafts: both, kept in sync.** Each draft lives in the mail drafts
  folder (as today) and on the page.
  - The `emails` doc carries the mail draft's id (`draftId`).
  - Sending from the page (Gmail): the page sends, and the next Desk
    run deletes the matching mail draft. That is the only delete the
    Desk ever does, and only for a draft it wrote whose page copy is
    marked sent.
  - Sending from mail: the Desk's read back sees the draft gone and a
    sent message on the thread, and marks the page copy sent.
  - Skipping on the page: the next run deletes the mail draft too.
  - Editing in either place: mail wins until the page copy is
    `edited`; then the page copy wins and the Desk rewrites the mail
    draft from it.
  - Outlook and other mail: the page opens the mail draft instead of
    sending, so there is one place to send from.
  - The double-send guard: before sending, the page checks the
    thread's `sentMessageId`/status, and the Desk never marks a page
    copy pending again once it is sent or skipped.
- **Privacy: add a line.** The page lives in the person's own private
  claude.ai account, which counts as inside the promise. PRIVACY.md
  gets one plain line saying their Desk page holds a copy of what
  their agent knows and is private to them. The changelog says how to
  refresh the project copy of PRIVACY.md, since it does not follow
  the plugin.
