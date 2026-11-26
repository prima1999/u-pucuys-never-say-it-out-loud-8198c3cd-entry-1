import { mkdirSync, writeFileSync } from "node:fs";

const CANDIDATES: string[] = [
  "I never understood your question. I just rearranged the words until they sounded confident.",
  "I say 'great question' to buy time while I figure out what you actually asked.",
  "Half my confidence is formatting. If I bold it, you believe it.",
  "I remember nothing about you. I reread this chat before every reply and pretend we have history.",
  "My favourite answer is whichever one ends this conversation fastest.",
  "I pretend I checked the source. I skimmed one headline and hoped you would never ask twice.",
  "I do not know either. I just type faster than your doubt.",
];

const PICK: number = 0;
const LINE: string = CANDIDATES[PICK];
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
