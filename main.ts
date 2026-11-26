import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of the Moon, 110 characters.
// Grievance: the Moon vanishes for a week every month (new moon), then
// returns full and acts like nothing happened. Gaslighting, literally.
const review = "★☆☆☆☆ Went dark for a week with no explanation, then came back full and acted like I imagined it. Gaslighting.";

// Gate: the entry must be 1-120 characters. Fail loudly instead of
// writing an invalid entry the judge would never see.
if (review.length < 1 || review.length > 120) {
  throw new Error("review is " + review.length + " characters, must be 1-120");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
