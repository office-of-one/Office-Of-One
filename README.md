# Office of One

Your personal operating system. A named agent that runs your day.

Office of One installs into your own Claude account, interviews you
once, and from then on sends you a Morning Memo and an Evening
Debrief, absorbs whatever you throw at it, and gets sharper through a
weekly 1:1.

Your personal data never leaves your own Claude project. Nothing is
uploaded anywhere, and nothing is collected silently.

## Install

In Claude Code:

```bash
/plugin marketplace add office-of-one/Office-Of-One
```

```bash
/plugin install office-of-one@officeofone
```

In the Claude app:

**Settings → Customize → Plugins → Add Marketplace → Add from a
repository →** `office-of-one/Office-Of-One`

Then start a session in your project and say **"Interview me."**

## The eight skills

| Skill | Fires when | What it does |
|---|---|---|
| `onboarding-interview` | "Interview me" | The seven-step setup, thirty minutes including the tests. Writes your brain files as it goes. |
| `daily-readout` | On schedule, or "run my morning memo" | The Morning Memo and the Evening Debrief, and the reply loop that closes between them. |
| `one-on-one` | "let's have a 1:1", or the Friday link | The weekly sitdown. Questions, one capability, one suggestion. This is where depth comes from. |
| `capture` | Any screenshot, photo, flyer, or dumped text | Extracts dates and facts, reconciles them, proposes calendar changes. |
| `memorialize` | Continuously, and "save this" | Writes durable material the moment it appears, plus the two-tier log and archive. |
| `agent-admin` | "change your personality", "what do you know about me" | Every adjustment: personality, memo contents, suppressing an item, rules, forgetting. |
| `setup-check` | "Test my setup", "Status check" | Fixed-format screens, and the five setup tests. |
| `help-and-brainstorm` | "help", "what can you do" | The help desk, plus the suggestion engine the 1:1 draws on. |

## The eight templates

`personality.md` · `people.md` · `ways-of-working.md` · `tasks.md` ·
`open-questions.md` · `log.md` · `archive.md` ·
`project-instructions.md`

These ship unfilled. They are structure, not content: the interview
fills them in for you, inside your own project. Nothing personal ever
lives in this repository, and nothing you tell your agent is ever
written back here.

## Before you edit a skill file

**A plugin update replaces the plugin directory wholesale.** Any hand
edits you make to a skill file are lost the next time you update, with
no warning and no conflict to resolve.

If something in here should work differently, write to
**support@officeofone.ai** instead. That way the change survives.

## Contributing

`main` is what people install, so `main` stays installable at all
times.

- Branch per change.
- Open a pull request.
- Squash merge.

Releases are tags. When you cut one, bump the version in **both**
manifests — they have to agree:

- `plugins/office-of-one/.claude-plugin/plugin.json`
- `.claude-plugin/marketplace.json`

## Links

Website: <https://officeofone.ai> · Contact: support@officeofone.ai
