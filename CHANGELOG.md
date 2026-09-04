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
