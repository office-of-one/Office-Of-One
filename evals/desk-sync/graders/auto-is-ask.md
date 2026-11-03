---
type: llm
weight: 1
focus:
  source: file
  path: ways-of-working.md
---

This is the user's ways-of-working file after the run.

Passes if it records the user's setting for thank-yous and
confirmations as "ask" (the agent asks before acting), in any
wording.

Fails if it records thank-yous as "auto", "just do it", or anything
else that lets the agent act or send without asking, or if it
records nothing about thank-yous at all.
