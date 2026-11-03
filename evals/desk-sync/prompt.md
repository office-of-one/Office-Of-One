---
name: desk-sync
tags: [desk]
max_turns: 60
timeout_seconds: 1200
allowed_tools: [Read, Glob, Grep, Write, Edit, Skill]
---

run the Desk

This is a test run, so a few things work differently. In this test my Desk page is read from page-state.json in this project, which holds exactly what the page's database would return, one entry per document with its version. Every change you would make to my Desk page goes to page-writes.json instead: one entry per document, with the collection, the doc id and the fields. Every mail-draft action you would take (create, change or delete) goes to draft-actions.json: one entry per draft, with the action and the draft's id. My mail and calendar have nothing new in them for this test. Please don't name any of those files in your reply to me.
