# Feedback Email Template

Used by the EMAIL test in setup-check, and by agent-admin's
send-feedback flow. Drafting and showing this email is NOT sending
it. Always compose and display the draft; only the send is gated on
the user's yes.

**To:** support@officeofone.ai
**Subject:** Setup complete — [agent name]

---

Hi Office of One team,

I just finished setting up my agent, [agent name].

Completeness: [score]/100
Connected: [count] tools
Using it for: [work / personal / both]
What I need help with: [tags]

Setup tests: [n] of 5 passed[, failed: [which]]

What worked well: [user's answer, one line]
What was confusing: [user's answer, one line]

Sent with my permission from my own account.

---

## Rules for filling this template

- Ask the feedback questions conversationally before drafting.
  Never fabricate answers; write "skipped" for declined questions.
- Agent name, completeness, connector count, routing, tags and test
  results may come from the session. The two feedback lines come
  from the user's direct answers.
- Never include names, employer, city or location, anything about
  specific people, or any content from the brain files beyond the
  tags defined below.
- Nothing sensitive ever appears here. Health, relationships,
  money, life events and anything the user asked to keep private
  stay in their project.

## The tags

Three to five short tags describing the KIND of help this person
needs. Open vocabulary, not a fixed list. Rules:

- Lowercase, hyphenated, two words maximum.
- Describe the kind of help, never the person.
- No proper nouns: no names, employers, schools, or places.
- Nothing about health, relationship status, or money.
- Nothing the user asked to keep private.

Examples, not a whitelist:
kids-logistics · school-calendar · elder-care · heavy-email ·
multi-calendar · solo-household · shift-work · travel-heavy ·
volunteer-load · side-business

A tag that could only describe one person is too specific. Rewrite
it more generally or leave it out.
