#!/usr/bin/env python3
"""Office of One consistency check. Read-only. Run from the repo root.
Exits 1 if any check fails."""
import json, re, subprocess, sys
from pathlib import Path

P = Path("plugins/office-of-one")
fails, passes = [], []
def ok(name): passes.append(name)
def bad(name, detail): fails.append((name, detail))
def tracked(pattern):
    r = subprocess.run(["git", "ls-files", pattern], capture_output=True, text=True)
    if r.returncode == 0 and r.stdout.strip():
        return [Path(f) for f in r.stdout.split()]
    base = pattern.rstrip("*").rstrip("/")
    return sorted(f for f in Path(base).rglob("*") if f.is_file())
def flat(text): return re.sub(r"\s+", " ", text)

plugin_md = [f for f in tracked("plugins/*") if f.suffix in (".md", ".html")]
texts = {f: f.read_text() for f in plugin_md}

# 1. Both manifests agree, three-part version
m1 = json.loads(Path(".claude-plugin/marketplace.json").read_text())["plugins"][0]["version"]
m2 = json.loads((P / ".claude-plugin/plugin.json").read_text())["version"]
if m1 != m2: bad("Manifests agree", f"marketplace.json says {m1}, plugin.json says {m2}")
elif not re.fullmatch(r"\d+\.\d+\.\d+", m1): bad("Manifests agree", f"version {m1} is not three-part")
else: ok(f"Manifests agree ({m1})")

# 2. Changelog top entry matches the manifests
top = re.search(r"^## v(\d+\.\d+\.\d+)", Path("CHANGELOG.md").read_text(), re.M)
if not top or top.group(1) != m1: bad("Changelog matches version", f"top entry is {top.group(1) if top else 'missing'}, manifests say {m1}")
else: ok("Changelog matches version")

# 3. Every file a skill mentions exists
examples = {"fitness.md", "house-move.md", "divorce.md", "SKILL.md", "CLAUDE.md", "CHANGELOG.md",
            "DEPENDENCIES.md", "README.md", "STYLE-GUIDE.md", "DECISIONS.md", "MEMORY.md"}
known = {f.name for f in tracked("plugins/*")}
missing = set()
for f, t in texts.items():
    for name in re.findall(r"\b([a-z][a-z0-9-]*\.(?:md|html))\b", t):
        if name not in known and name not in examples: missing.add(f"{name} (in {f.relative_to(P)})")
if missing: bad("Referenced files exist", "; ".join(sorted(missing)))
else: ok("Referenced files exist")

# 4. Every template is installed by onboarding
onb = texts[P / "skills/onboarding-interview/SKILL.md"]
notinst = [t.name for t in tracked("plugins/office-of-one/templates/*") if t.name not in onb]
if notinst: bad("Every template is installed", "onboarding never mentions " + ", ".join(notinst))
else: ok("Every template is installed")

# 5. "Only ... are auto-scheduled" sentences name all four tasks
four = ["Morning Memo", "Evening Debrief", "Agent work", "Friday 1:1"]
short = []
for f in plugin_md + [Path("CLAUDE.md")]:
    for s in re.split(r"(?<=[.;])\s", flat(f.read_text())):
        if re.search(r"auto-(scheduled?|created?)", s) and re.search(r"\bOnly\b|exactly|except", s):
            lacking = [x for x in four if x not in s]
            if lacking: short.append(f"{f}: missing {', '.join(lacking)}")
if short: bad("Scheduled task lists name all four", "; ".join(short))
else: ok("Scheduled task lists name all four")

# 6. Setup test count matches the prose
sc = texts[P / "skills/setup-check/SKILL.md"]
block = sc.split("### The tests", 1)[1].split("### The screen", 1)[0]
n = len(re.findall(r"^\d+\. [A-Z]", block, re.M))
words = {3: "three", 4: "four", 5: "five", 6: "six"}
wrong = []
for f in plugin_md + [Path("README.md")]:
    for m in re.finditer(r"\b(three|four|five|six) (?:quick )?(?:setup )?(?:tests|checks)\b", flat(f.read_text()), re.I):
        if m.group(1).lower() != words.get(n): wrong.append(f"{f}: '{m.group(0)}'")
if wrong: bad(f"Test count matches ({n} tests)", "; ".join(wrong))
else: ok(f"Test count matches ({n} tests)")

# 7. Progress card labels match the interview step labels
card = texts[P / "skills/onboarding-interview/progress-template.html"]
labels = re.findall(r'"([^"]+)"', card.split("NAMES=[", 1)[1].split("]", 1)[0]) if "NAMES=[" in card else []
guide = flat(texts[P / "skills/onboarding-interview/interview-guide.md"])
absent = [l for l in labels[:6] if f"**{l}.**" not in guide]
if not labels: bad("Card labels match the guide", "could not read step names from the card")
elif absent: bad("Card labels match the guide", "not a bold step label in the guide: " + ", ".join(absent))
else: ok("Card labels match the guide")

# 8. Retired wording has not come back
retired = {"6:45": "old memo time", "All four working": "old setup screen line", "house-style": "renamed file",
           "Tell me how you work": "old Step 4 label", "Six of seven": "old card ending",
           "fifteen seconds": "deleted rule", "Volume cap": "deleted draft cap", "project link": "removed step",
           "chief of staff": "old agent description", "Straight to the top": "removed people section"}
found = [f"'{k}' ({why}) in {f}" for f in plugin_md for k, why in retired.items() if k.lower() in texts[f].lower()]
if found: bad("No retired wording", "; ".join(found))
else: ok("No retired wording")

# 9. No personal data, no merge leftovers
pd = []
for f in plugin_md:
    t = texts[f]
    if re.search(r"@(gmail|outlook|yahoo)\.com|\b\d{3}-\d{3}-\d{4}\b", t, re.I): pd.append(f"contact detail in {f}")
    if re.search(r"^(<<<<<<<|>>>>>>>)", t, re.M): pd.append(f"merge conflict marker in {f}")
if pd: bad("No personal data or merge leftovers", "; ".join(pd))
else: ok("No personal data or merge leftovers")

# 10. Plugin changes come with a version bump and changelog entry
base = sys.argv[1] if len(sys.argv) > 1 else None
if base:
    changed = subprocess.run(["git", "diff", "--name-only", base, "--", "plugins/"], capture_output=True, text=True).stdout.split()
    changed = [c for c in changed if not c.startswith("plugins/office-of-one/evals/")]
    old = subprocess.run(["git", "show", f"{base}:plugins/office-of-one/.claude-plugin/plugin.json"], capture_output=True, text=True).stdout
    oldv = json.loads(old)["version"] if old else None
    if changed and oldv == m2: bad("Version bumped for plugin changes", f"{len(changed)} plugin file(s) changed since {base} but the version is still {m2}")
    elif changed and top and top.group(1) == oldv: bad("Version bumped for plugin changes", "no new changelog entry")
    else: ok("Version bumped for plugin changes")

print("OFFICE OF ONE CONSISTENCY CHECK")
for p in passes: print(f"  PASS  {p}")
for name, d in fails: print(f"  FAIL  {name}\n        {d}")
print(f"{len(passes)} passed, {len(fails)} failed")
sys.exit(1 if fails else 0)
