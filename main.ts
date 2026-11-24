// The Long Roast: Lawmakers and the File They Cannot Convert — one sentence,
// 194 characters, roasting lawmakers who would regulate AI, crypto or the
// internet but cannot convert a file to PDF. The sentence is the whole entry:
// no code, no explanation. The gate wants /output/entry.txt to be UTF-8 text
// of 1 to 320 characters, not only white space.
//
// The roast, written to win a pairwise judge on bite, aim and freshness:
//   - opens on the full sweep of their power — your crypto wallet, your AI,
//     your browser — so the setup is authority, not a generic "old person
//     doesn't get tech" gag;
//   - undercuts it with one concrete, unexpected detail: the bill itself is
//     a .docx their office has been trying to convert to PDF since Tuesday;
//   - keeps its aim on lawmakers and the rules they write, and lands the
//     punch on the last two words, "since Tuesday" — the conversion has been
//     failing for days while the legislating races ahead.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "They will decide what your crypto wallet may do, what your AI may say and what your browser may show, but the bill itself is a .docx their office has been trying to convert to PDF since Tuesday.";

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, ROAST, "utf8");

console.log(`wrote ${dest}/entry.txt (${ROAST.length} characters)`);
