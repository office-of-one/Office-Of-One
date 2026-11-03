# Seeding the Desk page

How the brain files become the documents on the user's Desk page.
Onboarding follows this at the end of the interview. The Desk will
follow the same rules when it keeps the page current.

Write every document with the ArtifactData tool, using the page's
url. The collections and fields are in data-contract.md, next to this
file. The user never sees any of this: never name a file, a
collection or a tool to them.

## Config

`meta/config`: agentName and userName from personality.md; timezone,
mail ("gmail", "outlook" or "other") and calendar ("google",
"outlook" or "other") from ways-of-working.md; voice from
personality.md. Leave runnerTask and builderTask out. The page
cannot start a helper yet, so its Run and Build buttons stay hidden.

## Brain nodes

One `brain` document per node. Never set `path`.

- **The person.** doc_id `profile`, kind "profile", area "core",
  label their full name, short their first name, summary one line
  on who they are, facts from personality.md and ways-of-working.md.
- **Core files, drawn as squares on the rim of the centre.** kind
  "doc", area "core": ways-of-working.md as `how` ("How <first name>
  works"), tasks.md as `todos` ("To-do list"), open-questions.md as
  `openq` ("Open questions"). goals.md is not a node; its goals are.
- **Topic files, drawn as squares on the ring.** One per topic file
  listed in ways-of-working.md, plus people.md as `people`. doc_id
  is the file's stem. kind "doc". Pick the area from what it is
  about: career (work), ventures (side projects), job (career
  moves), content, family, health, coaching (community), other.
  When unsure, "other". Never invent an area.
- **People and details, drawn as circles on the ring.** One per
  person in people.md who matters (household, manager, close
  colleagues, frequent contacts), doc_id `person-<first name in
  lower case>`, kind "person"; and any standing detail worth seeing
  on its own (a weekly class, school pickup), kind "topic".
- `label` and `short` are plain words, `short` at most 12
  characters. `summary` is one line. `facts` are short lines; end any
  the user never confirmed with " (derived)". `links` lists the ids
  each node really refers to.
- `status: "empty"` on a node the interview could not fill.

## Goals and their story

One `brain` document per goal in goals.md, doc_id `goal-<n>` in the
order the user gave them, kind "goal", area from what the goal is
about, label the goal in plain words with its date ("Half marathon
in April"). `meta/brain.goalsOrder` lists them; `meta/brain.
defaultNode` is the first goal, or `profile` when there are none.

Each goal gets a `story`:

- `feeds`: `{id, note}` for each node that moves it forward, with a
  plain fact and its source: time booked on the calendar for it
  ("Morning runs: 3 booked this week, 3 hours"), a to-do tied to it,
  an email that bears on it ("her email, Oct 29").
- `competes`: `{id, note}` for something booked over time the user
  keeps for the goal. Facts only.
- `missing`: plain lines for what the goal needs and the calendar or
  list does not have ("No long run on the weekend calendar yet").
- `suggest`: at most one, and only when there is something useful to
  suggest. Worded as a suggestion the user can take or leave: start
  with "You might" and end with "Want <agent name> to …?". Never a
  statement or a judgment ("Q4 prep is hurting your goal" is never
  allowed). Offer only what the Desk can do: draft, look up, or hold
  time on the user's own calendar.

At the end of the interview the story comes only from the calendar's
recurring pattern and the to-dos found in Step 3 and Step 4. Blank
beats guessed: a goal with nothing found gets empty lists.

## Missing links

`meta/brain.gaps`: `{s, t, note}` for open questions in
open-questions.md that join two nodes and are about logistics (time,
who covers what, a missing date). Never one about something
sensitive, and never one that names something the user did not name
first.

## To-dos

One `todos` document per open item in tasks.md, doc_id `L<n>` from
the item's ledger number. title (starts with a verb), detail (keep
the derived label), category from the data contract list, state
"bare", status "open", from "Interview".

## Settings

- `settings/trust`: every category "ask", money "never".
- `settings/protected`: the protected time recorded in
  ways-of-working.md, one block each, `on: true`. Empty if none.
- `meta/today`: headline "Set up today", updatedAt now.

## Batching

Use "batch" writes, at most 50 per call, in this order: brain
nodes, goals and `meta/brain`, to-dos, settings, `meta/today`, and
`meta/config` last, so the setup card only disappears once
everything else is there. A document that already exists (a resumed
interview) is read first and written with its version as if_version.
