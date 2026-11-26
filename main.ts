import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Going up. Floor twelve, where the meeting about the meeting is already running late.";

function formatEntry(): string {
  return ENTRY;
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), formatEntry() + "\n", "utf8");
console.log(`Wrote ${formatEntry().length} chars to ${join(outDir, "entry.txt")}`);
