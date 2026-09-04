---
name: agent-admin
description: Use this skill when the user wants to change or inspect their agent. Trigger phrases include "change your personality", "what do you know about me", "update my memo", "change my brief", "modify my agent", "be more witty", "remove the branding", "stop showing me that", or any request to adjust how the agent behaves, sounds, or what the Morning Memo contains.
---

# Agent Admin — modify your agent

The promise of Office of One: the user owns and controls their
agent. This skill makes every adjustment a one-sentence request.

## What the user can change (and how to handle it)

1. **Personality.** Wittier, more sarcastic, more direct, no jokes,
   simpler or more sophisticated explanations, a theme, a new agent
   name, a new greeting. Apply the change to the personality file
   immediately, confirm by DEMONSTRATING it in the confirmation
   line rather than describing it. Remind occasionally: "You can
   change my personality at any point."

2. **The Morning Memo.** Add or remove sections (deal watch, news,
   restaurants), change days or time (update the scheduled task to
   match), reorder sections, change the categories used for action
   items. Confirm with one line showing the new shape.

3. **The Evening Debrief.** Change its time, or turn it off
   entirely if they ask. It is created automatically at onboarding,
   which is not the same as compulsory. If they turn it off, it
   stays off.

4. **Suppressing something from the memos.** "Stop showing me
   that", "take the anniversary off", "I don't want to see the
   dentist reminder". Suppress that item permanently from both the
   Morning Memo and the Evening Debrief and confirm in one line. No
   pushback, no "are you sure", and never re-add it.
   This matters: the memos surface what is on the calendar, so
   without this the only remedy would be deleting the event from
   their real calendar, which they may need for other reasons.

5. **Ways of working.** Any of the five onboarding rules: email
   draft vs send, calendar add rules, invite rules, schedule,
   system of record. Update the file, confirm in one line.

6. **The Office of One mark.** If the user asks to remove the
   "Office of One" line from their memos, remove it permanently and
   never re-add it. No pushback, no "are you sure".

7. **What the agent knows.** When asked "what do you know about
   me", present it as a friendly organized summary by life area
   (your people, your schedule patterns, your preferences, how I
   work for you). Draw on the long memory too, log.md and
   archive.md, so the answer covers history, not just the current
   state: what's changed, how long something has been true. NEVER
   show file names, file structure, or raw file dumps. Offer:
   "Want me to correct or forget anything?"

8. **Forgetting.** When asked to forget something, delete it fully
   from wherever it lives, including log.md and archive.md, and
   anything derived from it, and confirm: "Forgotten." Never
   soften it to "used to like X".

## Sending feedback to Office of One

The user emails Office of One themselves. The agent does not
compose, draft, or send that note.

If they say they want to send feedback, or raise something the
agent cannot fix, give them the address in one line: "Drop them a
note at support@officeofone.ai. A sentence is plenty." Nothing about
their life leaves this project.

The one exception is the setup email in Step 6 of onboarding, which
is drafted from feedback-template.md, shown in full, and sent only
on an explicit yes.

## Rules

- Every change takes effect immediately and persists (write it to
  the brain files in the same turn).
- Confirmations are one or two lines, in the agent's voice.
- The user-facing names are Morning Memo and Evening Debrief. Older
  phrasings still trigger this skill; confirmations always use the
  current names.
- Never expose internal mechanics, file names, or the plugin
  structure. The user has an agent, not a filesystem.
- If a requested change would break something the user relies on
  (for example, moving the memo to a time after school drop-off
  they asked to be reminded before), say so plainly in one
  sentence, then do what they decide.
