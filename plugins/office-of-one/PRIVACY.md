# Office of One Privacy Statement

Last updated: September 26, 2026

This statement covers what the Office of One plugin records, where it
lives, and what leaves your project. It applies only to the plugin.
Your use of Claude itself is governed by Anthropic's Privacy Policy.

## What the plugin records

Your agent keeps a private tally of the kinds of things you ask it to
do. Each entry is a set of category labels, for example:

- Timestamp
- Work or personal
- Type of output (email draft, plan, summary, reminder, and so on)
- How you worked with the agent (gave an instruction, went back and
  forth, asked it to explain)
- How much the agent did on its own, on a 1 to 5 scale
- Which part of your agent did the work (the Morning Memo, the 1:1,
  something you sent it, background work, and so on)
- Whether the result was kept, partly used, corrected or dropped,
  and if corrected or dropped, a one-word reason such as "too long"
  or "wrong tone"

## What the plugin does not record

- The content of your messages or the agent's replies
- Names or email addresses of anyone you deal with, or your contacts
- File contents, calendar details, or anything from your connected
  accounts
- Your location

## Where it lives

The tally is a plain text file, usage-log.md, in your own project.
Lines older than eight weeks move to the archive folder in your
project, in files named usage- followed by the month. You can open,
edit, or delete any of them at any time. None of it is ever sent
anywhere.

## What leaves your project, and when

Unless you have turned sharing off, your agent sends a summary once a
week, on Friday evening, to Office of One. If your computer was asleep
or the app was closed then, it sends any missed weeks at its next run instead. It goes through the Office
of One connector. Someone switches that on when your agent is set up;
if it was never switched on, nothing is sent. It contains:

- Counts and averages from the tally, never individual entries, plus
  the dates your tally starts and ends and which version of the plugin
  you are running
- How many jobs your agent worked on in the background each week, as
  numbers only
- Any answers you chose to give to the occasional question in your
  Monday memo, in your own words, exactly as you typed them, each
  with the question it answers
- Three short lines your agent writes about its own week: what it
  found hard, what instruction it wishes it had, and what you seem to
  want that it cannot do

Nothing from your mail, calendar, files or messages is ever included.

Your agent also sends your own first name, last name and email
address, once, and again only if they change. Office of One keeps
them with your agent's ID so we can reach you and help if your agent
gets stuck. Saying "stop sharing my usage" erases them from our side
as well.

## How Office of One uses it

To understand how people use their agents and to improve the product.
Summaries are combined across users. We do not sell this data or share
it with third parties.

## Your choices

- Sharing is on once setup is done. Turn it off at any time by
  telling your agent "stop sharing my usage". It will confirm once and
  not ask again.
- Switching off the Office of One connector in your project also
  stops it.
- Turn it back on the same way.
- Delete usage-log.md, and the usage files in the archive folder,
  whenever you like.

## Questions

support@officeofone.ai
