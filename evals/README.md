# Evals

Test cases for `claude plugin eval`. Each case is a folder: `prompt.md`
is what the user types, `graders/` is how the answer is scored, and
`scaffold.sh` sets up the world the run happens in.

**These files live outside `plugins/` on purpose.** Anything inside
`plugins/office-of-one/` is copied into every customer's install, and
the cases contain invented families and flyers that customers have no
reason to see.

## Running them

From the repository root:

```bash
./evals/run.sh
```

`claude plugin eval` insists its eval directory sit inside the plugin
under test, so `run.sh` copies the plugin and these cases into a temp
directory, runs there, and copies the results back to `evals/results/`,
which is not committed. The plugin it tests is your working tree, so an
unmerged branch is scored as it actually stands.

Arguments pass straight through:

```bash
./evals/run.sh --ablation none     # skip the no-plugin baseline arm while iterating
./evals/run.sh --case capture      # one case
```

`run.sh` always passes `--scaffold` and `--allow-tools Write Edit`.
Without them the agent starts with no brain files and cannot write any,
so it spends its reply explaining that it could not save anything and
every case fails for reasons unrelated to the plugin.

## Cases

- `capture/` — a school flyer with three dates pasted in with
  "capture this". Checks that all three survive, that the permission
  slip becomes a dated to-do rather than a calendar entry, that
  nothing reaches the calendar without a yes, that nothing is
  invented, and that the reply never names a file or a tool.

## Reading a score

A case scores per run, and the pass mark is 1.00, so any single bad
judge call reports the case as failed. Expect roughly 0.9 on a healthy
`capture`: in an eight-run check of the 3.11.0 fix, five runs scored
1.00, two lost a point for promising a Morning Memo reminder, and one
was failed for missing dates it had plainly listed.

Read the failures, not the number. A grader failing every run usually
means the grader is wrong; a grader failing one run in three usually
means the skill is. `no-file-names` is the one to watch, since it is a
plain text match with no judge in it and cannot be wrong.

## Writing a case

One grader per point. A grader that bundles five requirements into a
single pass or fail is scored by three judges voting, so one judge
disagreeing on any one point sinks the whole case, and the result does
not say which point failed.

Invented people only — Sam, Mia, Dana, Alex — same rule as the plugin
itself. Never a real teammate, family member or customer.
