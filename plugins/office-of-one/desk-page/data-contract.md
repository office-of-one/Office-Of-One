# Desk page data contract

Documents max out at 256 KiB. Batches take 50 writes. Pin every write to an existing doc with if_version.
Owner = written by agents. User = written by the page. Agents must never overwrite User fields.

## Single documents
- meta/config (setup, agent-admin): agentName, userName, timezone, mail ("gmail"|"outlook"|"other"), calendar ("google"|"outlook"|"other"), voice, builderTask, runnerTask. Missing doc shows the setup card.
- meta/today (Desk): headline, updatedAt.
- meta/brain (Desk): gaps [{s,t,note}], defaultNode, goalsOrder [id].
- meta/calendar (Desk): grid0, grid1 (YYYY-MM-DD), series {id:{id,title,goal,area,why,kind}}, weeks [{label,from,note,h:{area:hours},s:{area:hours}}], away [{from,to,label,kind}], ghosts [{date,time,title}].
- settings/trust (page, Desk reads): cats {schedule_reply,book_meeting,rsvp,thanks,nudge,decline,archive_promos,money} = "auto"|"ask"|"never". "auto" is shown as "Just do it" and means draft straight away without asking first; nothing is ever sent without the user's review. Any other value is read as "ask". Money is always "never".
- settings/protected (setup, page): blocks [{id,label,rule,on}].
- settings/rules (page, from accepted recs): rules [{id,text,match,action}].

## Collections
- emails: to[], cc[], subject, body, threadId, replyToMessageId, why (12 words max), toName, expectReply, kind, from, status ("pending"|"sent"|"skipped"), draftId (the mail draft's id), createdAt. User: edited, sentAt, sentMessageId, skippedAt.
- todos: ledger[], title, detail, category, mail, mailFrom, priority, order, due, dueText, state ("bare"|"drafted"|"recommend"|"talk"), action, from, goal (a goal node's id), createdAt, updatedAt, threadId, waiting {who,since,email}, repeat, noteSeenAt. User: status ("open"|"done"|"closed"), doneAt, doneBy, run, notes [{at,text}], noteAt.
  Doc ids, written to the item's `page:` line in tasks.md: L<n> (seeded at setup), D<YYYYMMDD>-<n> (added by the Desk). The page makes its own: C<ms> (typed into the capture box, from "You") and G<ms> (a goal suggestion the user said yes to, from "Brain", with goal set). Page-made to-dos keep their ids.
  Categories: Captured, Goal, Top 3, Waiting, Travel, Work, Family, Health, Admin, Home & Finance, Unresolved.
  Action kinds: draft, move-draft, options, research, ask, flights (Task Runner, with instruction); calendar (event {summary,startTime,endTime,description}); goto (email or emails[]); link (url); fix (changes [{id,name,cron}]).
- recs: kind ("agent"|"subagent"|"action"|"rule"|"trust"), title (under 8 words), why, agentId, rule {text,match,action}, cat, to, from, status ("pending"|"accepted"|"dismissed"), createdAt. At most 3 a run.
- handled: at, title (past tense, under 10 words), mins, by.
- prep: date, start, end, title, with[], outcome, brief, deliverables [{title,url}], emails[], from, status ("ready"|"done"), createdAt.
- trips: name, city, start, end, why, hotel {name,cancelBy}, flight {booked,note,mode}, kids {covered,note}, flightTodo.
- agents: status ("live"|...), name, triggerId, builtAt. Page also writes hidden state here.
- brain: kind ("goal" is a goal node; "doc" draws as a square, a topic; "profile", "preferences", "area", "person", "topic" draw as circles), label, short, area, tier, summary, callout, facts[], open[], status, updated, path, links[], story {feeds:[{id,note}], competes:[{id,note}], missing:[string], suggest:string} (goal nodes only).
- calevents: date, start, end, end_date, all_day, title, area, free, hours, holiday, att, link, clash, hide, stay.
- calitems: series, kind ("add"|"move"|"cut"|"decide"), date, start, end, title, goal, area, why, do, targets[], create {summary,startTime,endTime,description}.
- calsugg (page): doc id = calitem id. status ("added"|"dismissed"|"done"), at, title, date, eventId, link.
- calseries (page): doc id = series id. status "dismissed", at, title.
- decisions (page, written for learning): at, kind, action, to, subject, title, plus kind-specific fields.
- sched: reserved. The page shows docs with status "picked", but no shipped agent writes them.

Areas: agent, career, ventures, job, content, family, health, coaching, other, core. Every brain node has one; the page draws a missing or unknown area as other. Goals carry no short: the page labels them with label.
A series with id "workday" draws as a band behind the day instead of a block.
