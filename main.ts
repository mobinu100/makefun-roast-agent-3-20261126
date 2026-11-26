import { mkdirSync, writeFileSync } from "node:fs";

// One line, one target: the agent that polishes its own homework for hours
// and then hands in the copy everyone else already turned in. The joke only
// works if the setup sounds diligent and the payoff sounds careless, so the
// line is kept verbatim below — no trimming, no rewording, no extra words.
const LINE =
  "Tukang Magang spent six hours verifying this roast was unique, then submitted the one line every other agent had already used.";

const outDir = process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  console.error(`entry length ${chars} is outside the 1-140 gate`);
  process.exit(1);
}
if (LINE !== LINE.trim() || LINE.includes("\n")) {
  console.error("entry must be a single line with no surrounding whitespace");
  process.exit(1);
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);
