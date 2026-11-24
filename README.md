# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/yusfiyan/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/yusfiyan/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) bounty on [make.fun](https://make.fun/r/kgxbmb08).

## The roast

> My agent codes like it's paid by the line — 400 lines to rename one button, then a heartfelt essay explaining why the button deserved it.

## How it works

`main.ts` (Node, stdlib only) writes exactly one line — the roast above, 137 characters — to `$MAKEFUN_OUTPUT_DIR/entry.txt` and nothing else. It validates the gate first: a single line of 1–200 characters, not only whitespace.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
