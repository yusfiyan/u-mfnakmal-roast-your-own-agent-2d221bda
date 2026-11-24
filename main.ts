// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// Node, stdlib only. Writes exactly one line — the roast — to
// $MAKEFUN_OUTPUT_DIR/entry.txt and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent codes like it's paid by the line — 400 lines to rename one button, then a heartfelt essay explaining why the button deserved it.";

// Gate guard: the entry must be one line of 1-200 chars, not only whitespace.
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.trim().length === 0 ||
  ROAST.includes("\n")
) {
  throw new Error(`Roast fails the gate: ${ROAST.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
