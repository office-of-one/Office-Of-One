# CLAUDE.md — Office of One plugin

**If you are Claude and you can read this file, these are your
instructions for this repository. Follow them for the rest of the
session.**

This repository is the system of record for the Office of One plugin.
It replaced a Google Drive folder on 4 September 2026. Nothing about
the plugin is edited in Drive any more — see "The Drive folder is
retired" at the bottom.

## Who you're working with

Four people maintain this plugin, covering product and engineering,
experience and workshops, GTM, and business development. Coordination
happens in the OfficeOfOne Slack, mainly `#all-officeofone`.

Assume others have pushed since the person talking to you last pulled.
Start by reading recent history:

```bash
git log --oneline -15
```

## The workflow

`main` is what customers install. It stays installable at all times.

1. Branch: `git switch -c <short-name>`
2. Make the change
3. Work through `DEPENDENCIES.md`
4. Bump the version in **both** manifests if any plugin file changed
5. Add a `CHANGELOG.md` entry
6. Open a pull request; squash merge
7. Releases are tags: `git tag -a v3.1.0 -m "..." && git push origin v3.1.0`

Never commit straight to `main`. Never force-push `main` — the one
force push in this repo's history was the initial import, and there
should not be another.

## The two manifests must agree

The version lives in two places and both are read by different things:

- `plugins/office-of-one/.claude-plugin/plugin.json` — what Claude
  reads when the plugin is installed
- `.claude-plugin/marketplace.json` — what the marketplace listing
  shows

If they disagree, the listing advertises a version that isn't what
gets installed. Bump them together, in the same commit, and use the
full three-part number everywhere: 3.1.0, not 3.1.

Ordinary changes bump the middle number. Only a change that breaks
existing users' setups bumps the major.

## Whenever you change anything here

1. **Check `DEPENDENCIES.md`** and update everything the change
   touches. A skill referencing a template that no longer exists is a
   broken plugin, and it breaks silently — nobody finds out until a
   customer's interview stalls.
2. **Bump both manifests** if any file under `plugins/` changed.
3. **Add a `CHANGELOG.md` entry.**
4. **Report in the chat before you finish.** A plain list: every file
   you touched, what changed in each, and anything you deliberately
   did not update and why. If a change affects existing customers — a
   new setup step, a changed scripted line, project instructions that
   won't auto-refresh — say so plainly.

## Non-negotiables when editing the plugin

- **Scripted lines are verbatim.** Every workshop participant must see
  identical words, so troubleshooting can start with "what did you
  ask?" and get a real answer. Improvisation is allowed only in the
  agent's reactions to answers. Changing a scripted line is a product
  change: version bump and changelog entry, never a quiet edit.
- **The agent never imitates the user's writing.** Voice comes from
  `personality.md`. Deriving it from their emails produced broken
  output in testing.
- **No meta-narration.** The memo contains the user's day, never the
  agent's process.
- **Never expose file names or internals.** The user has an agent, not
  a filesystem.
- **Only the Morning Memo and the Evening Debrief are auto-scheduled.**
  Everything else recurring is proposed and confirmed.
- **Nothing is sent anywhere without an explicit yes**, and drafting
  is not sending. The user emails feedback themselves; the agent does
  not compose it.
- **Blank beats guessed.** Unconfirmed inferences stay labeled derived.
- **Facts, never judgments.** The memo counts what it read; it never
  characterises it.
- **Never assert a sensitive inference.** Ask about the observable
  thing and let the user decide how much to name.
- **Never put customer personal data in this repository.** The
  templates ship unfilled on purpose. They are structure; the content
  belongs in each user's own Claude project and never leaves it.

## What the plugin is

A personal AI agent people install into their own Claude account. It
interviews them once, then sends a Morning Memo and an Evening
Debrief, absorbs what they throw at it, and sharpens through a weekly
1:1. Sold as a hand-held workshop experience, not a download.

The target customer is a non-technical person, often a working parent,
who will never read documentation. Every design decision follows from
that.

**The trust position, which is not negotiable:** a user's personal
data never leaves their own Claude project. Nothing is uploaded to us,
nothing is collected silently, and the only thing that ever leaves is
the setup email, shown in full and sent only on an explicit yes. This
outranks any feature.

The plugin is generic and identical for every customer. The *brain* is
per-person and lives only in that customer's project. The interview
turns one into the other: it reads the templates, asks its questions,
and writes the filled-in brain files into the user's project. We never
see them.

## Layout

```
.claude-plugin/marketplace.json     the marketplace listing
plugins/office-of-one/
├── .claude-plugin/plugin.json      the version Claude reads
├── skills/                         eight skills
└── templates/                      eight brain templates, unfilled
CLAUDE.md                           this file
CHANGELOG.md                        customer-facing version history
DEPENDENCIES.md                     what else to update when you edit
README.md                           install instructions
```

## Known constraints

- Setup currently needs a computer. Phone-only is the goal for the
  in-person workshop, not the current state.
- Setup instructions differ between the Mac app and the iPhone app;
  both documents are still unwritten.
- Scheduled jobs are not project-specific. Whether a scheduled run can
  reach the brain files is an open question and it gates the memos.
- Personal Outlook accounts aren't supported, only business.
- The agent lives in its project. Sessions started outside it are
  regular Claude.
- **Existing customers do not receive updates automatically.** They
  have whatever version they installed. When a change matters to
  people already set up, note it in the changelog and tell them; if it
  touches `project-instructions.md`, they need a manual refresh,
  because onboarding only installs those if they aren't already
  present.

## The Drive folder is retired

`OfficeOfOne/01-Product/Plugin/WORKING/office-of-one` in Google Drive
is no longer the source. Do not edit it, and do not copy from it.

It was retired because Drive cannot do what version control does:
it does not merge concurrent edits, it cannot copy folders through
its API, it cannot edit a file in place, and it materializes files
lazily — so a file can be missing from a directory listing and still
exist. On 4 September 2026 that last one nearly published a superseded
`onboarding-interview/SKILL.md`, which would have shipped an agent
whose `memorialize` skill wrote into files onboarding never created.

The rest of the OfficeOfOne Drive folder — workshop material,
customers, transcripts, GTM, brand — is unaffected and still lives
there.
