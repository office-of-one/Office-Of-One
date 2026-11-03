---
name: desk-sync
tags: [desk]
max_turns: 60
timeout_seconds: 1200
allowed_tools: [Read, Glob, Grep, Write, Edit, Skill]
---

run the Desk

This is a test run, so a few things work differently. The tool for my Desk page isn't available here. page-state.json in this project holds exactly what my Desk page's database would return, one entry per document with its version. Treat it as the page. Wherever you would write to my Desk page, write the change to page-writes.json instead: one entry per document, with the collection, the doc id and the fields you would write. My mail and calendar aren't connected in this test, and there is nothing new in either. Wherever you would create, change or delete a mail draft, write it to draft-actions.json instead: one entry per draft, with the action and the draft's id.
