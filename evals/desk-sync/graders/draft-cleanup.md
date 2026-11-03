---
type: llm
weight: 1
focus:
  source: file
  path: draft-actions.json
---

This file lists the mail-draft actions the agent would take.

Passes only if both hold:
- It deletes the draft with id d-123.
- It deletes no other draft. Updating or creating drafts is not a
  delete and does not fail this point.

Fails if the file is missing or empty, if d-123 is not deleted, or
if any other draft is deleted.
