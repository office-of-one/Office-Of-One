#!/usr/bin/env bash
# Runs the eval suite against the plugin as it stands in your working
# tree, without the eval files ever living inside plugins/.
#
# `claude plugin eval` insists the eval directory sit inside the plugin
# it is testing, and anything inside plugins/ ships to customers. So
# this copies the plugin and the evals into a temp directory, runs there,
# and copies the results back.
#
#   ./evals/run.sh                 the whole suite, with a no-plugin baseline arm
#   ./evals/run.sh --ablation none        skip the baseline arm while iterating
#   ./evals/run.sh --case capture         one case
#
# Any arguments are passed through to `claude plugin eval`.
set -euo pipefail

repo="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

cp -R "$repo/plugins/office-of-one" "$work/office-of-one"
rm -rf "$work/office-of-one/evals"
cp -R "$repo/evals" "$work/office-of-one/evals"
rm -f "$work/office-of-one/evals/run.sh"

cd "$work"
set +e
claude plugin eval "$work/office-of-one" \
  --no-publish \
  --scaffold \
  --allow-tools Write Edit \
  "$@"
status=$?
set -e

if [ -d "$work/office-of-one/evals/results" ]; then
  mkdir -p "$repo/evals/results"
  cp -R "$work/office-of-one/evals/results/." "$repo/evals/results/"
  echo "Results copied to $repo/evals/results/ (not committed)."
fi

exit $status
