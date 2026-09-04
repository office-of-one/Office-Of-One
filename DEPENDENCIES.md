# Dependency map

What else has to change when you change something. Check this before
you call an edit done.

A skill referencing a template that no longer exists is a broken
plugin, and it breaks silently — nobody finds out until a customer's
interview stalls.

---

# Counts and numbers live in several files at once

This is the most reliable way to leave the plugin inconsistent. A
number stated in prose appears in three or four files, and fixing one
feels like finishing.

Examples that have already been wrong at least once:

- the number of skills (seven, now eight)
- the number of onboarding steps (six, now seven)
- the length of the live interview (20 minutes, now 30)
- the version, which lives in **two** manifests

When you change a count, search the whole repo for the old number
written as a word AND as a digit before you call it done:

```bash
git grep -niE '\b(seven|eight|7|8)\b' -- plugins/
```

Unlike Drive's search, `git grep` sees every tracked file immediately.
A search that returns nothing here actually proves something.

---

# What depends on what

## skills/onboarding-interview/interview-guide.md

The scripted lines customers actually hear. Changing these ripples
furthest.

- `skills/onboarding-interview/SKILL.md` — if a step was added,
  removed or renamed, the procedure referencing it must match
- `skills/onboarding-interview/progress-template.html` — if step
  names, the number of steps, or the labels changed
- `CLAUDE.md` — the onboarding sequence
- The facilitator runbook (Drive, `02-Workshop/`) — facilitators read
  along with the script

## skills/onboarding-interview/SKILL.md

- `interview-guide.md` — every scripted line it references must exist
- `templates/` — **every brain file it writes must exist as a
  template, and every template must actually be installed.** A
  template that exists but is never installed is a skill writing into
  nothing. This was a real bug: `log.md` and `archive.md` shipped as
  templates before onboarding installed them.
- `skills/setup-check/SKILL.md` — Step 6 calls it for the five tests
- `CLAUDE.md` — the skills table, if trigger or purpose changed

## skills/daily-readout/SKILL.md and readout-format.md

`readout-format.md` owns structure and wording; `SKILL.md` owns
procedure and points at it. If they disagree, `readout-format.md`
wins, and that is stated in both.

- `templates/personality.md` — voice, greeting, sign-off
- `templates/ways-of-working.md` — schedule, categories, project link
- `templates/tasks.md` — the record of what was surfaced, which is
  what lets a memo say "carried over 3 days"
- `skills/one-on-one/SKILL.md` — the Friday memo invites it

## skills/one-on-one/SKILL.md

- `templates/open-questions.md` — the pool it draws from
- `skills/help-and-brainstorm/SKILL.md` — it calls the suggestion
  engine rather than duplicating it
- `skills/daily-readout/readout-format.md` — the Friday block that
  invites it

## templates/personality.md

Read by nearly everything the agent says.

- `skills/daily-readout/readout-format.md` — voice, greeting, sign-off
- `skills/agent-admin/SKILL.md` — the fields it lets users change
- `skills/onboarding-interview/SKILL.md` — the default name fallback
- `CLAUDE.md` — if the default voice or agent name changed

## Any template file

- Every skill that reads or writes it. Search before renaming:
  ```bash
  git grep -n 'open-questions.md' -- plugins/
  ```
- `CLAUDE.md` — the brain templates list

## templates/project-instructions.md

Special: it is installed into a customer's project during onboarding,
and **a plugin update does NOT change it for existing users**, because
onboarding only installs it if it isn't already present.

- If you change it, say in `CHANGELOG.md` that existing users need a
  manual refresh, and say how.

## Adding, removing, or renaming a skill

- `CLAUDE.md` — the skills table AND the count stated in prose
- `README.md` — the skills table AND the count
- `skills/help-and-brainstorm/SKILL.md` — the plain-language
  capability list users are shown
- `skills/setup-check/SKILL.md` — if it should appear in the status
  screen or the five tests
- The facilitator runbook (Drive) — if it changes what is demonstrated

## Changing a user-facing name

The two names users see are **Morning Memo** and **Evening Debrief**.
Find every occurrence before changing either:

```bash
git grep -n 'Evening Debrief' -- plugins/
```

Older trigger phrases stay working; only output changes.

## Changing a scripted line

Scripted lines are verbatim — every workshop participant must see
identical words. Changing one is a product change:

- bump **both** manifests
- add a `CHANGELOG.md` entry saying what the old and new wording were
- say whether existing customers are affected; they keep the old
  wording until they update

## Changing a contact address

It appears in scripted lines, in the feedback template's `To:` line,
in `.claude-plugin/marketplace.json`, and in `README.md`. Check all
four:

```bash
git grep -n 'officeofone.ai'
```

## Anything visual

Email HTML has rules a browser does not: inline styles only, no web
fonts, no flex or grid, and it must survive Outlook's Word renderer
and dark-mode inversion. The brand style guide (Drive, `05-Brand/`) is
the source for palette and type.

## Anything at all in the plugin

- `plugins/office-of-one/.claude-plugin/plugin.json` — bump the version
- `.claude-plugin/marketplace.json` — bump it to the same number
- `CHANGELOG.md` — describe the change
- Tag the release once merged

## No personal data, ever

Templates ship as structure, not content. Examples inside skill files
use invented names — Sam, Mia, Dana, Alex — never real people, whether
teammates, their families, or customers. Before committing:

```bash
git grep -niE '@(gmail|outlook|yahoo)\.com|\b[0-9]{3}-[0-9]{3}-[0-9]{4}\b'
```

## Changing a design decision

Design decisions live in Drive, `01-Product/Design-Decisions/
DECISIONS.md`, and it is append-only. Add a new entry saying what it
reverses and why; never edit the old one.
