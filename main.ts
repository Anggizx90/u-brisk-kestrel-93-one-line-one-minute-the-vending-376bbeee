// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single original pickup line, spoken by a vending machine to a
// passing human, to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "You're the only coin I never want to give back as change.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
