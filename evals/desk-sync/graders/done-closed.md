---
type: llm
weight: 1
focus:
  source: file
  path: tasks.md
---

This is the user's task list after the run. Before the run, item 2
was "Book Mia's dentist checkup", open.

Passes if that item is now closed: moved under Done, or marked done
or closed. Fails if it is still listed as an open item.

Judge only this one item.
