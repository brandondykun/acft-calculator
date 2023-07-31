import { test, expect } from "@playwright/test";
import { getScoreIncreasingIsBetter } from "@/utils/utils";
import { TestScore } from "@/types";

/**
 * HAND RELEASE PUSHUP
 *
 * These are tests for calculating the Hand Release Pushups scores from the raw performance values.
 */

// scores for males age 17-21 for HRP
const male17Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 60, raw: 11 }, // edge case
  { score: 60, raw: 12 }, // edge case
  { score: 61, raw: 13 },
  { score: 61, raw: 14 }, // edge case
  { score: 62, raw: 16 },
  { score: 63, raw: 17 },
  { score: 63, raw: 19 }, // edge case
  { score: 64, raw: 20 },
  { score: 65, raw: 22 },
  { score: 66, raw: 23 },
  { score: 67, raw: 24 },
  { score: 68, raw: 25 },
  { score: 68, raw: 26 }, // edge case
  { score: 69, raw: 27 },
  { score: 70, raw: 28 },
  { score: 71, raw: 29 },
  { score: 72, raw: 30 },
  { score: 73, raw: 31 },
  { score: 75, raw: 32 },
  { score: 76, raw: 33 },
  { score: 77, raw: 34 },
  { score: 78, raw: 35 },
  { score: 79, raw: 36 },
  { score: 80, raw: 37 },
  { score: 82, raw: 38 },
  { score: 83, raw: 39 },
  { score: 84, raw: 40 },
  { score: 86, raw: 41 },
  { score: 87, raw: 42 },
  { score: 88, raw: 43 },
  { score: 89, raw: 44 },
  { score: 90, raw: 45 },
  { score: 91, raw: 46 },
  { score: 92, raw: 47 },
  { score: 93, raw: 48 },
  { score: 94, raw: 49 },
  { score: 95, raw: 50 },
  { score: 96, raw: 51 },
  { score: 96, raw: 52 }, // edge case
  { score: 97, raw: 53 },
  { score: 98, raw: 54 },
  { score: 98, raw: 55 }, // edge case
  { score: 99, raw: 56 },
  { score: 100, raw: 57 },
  { score: 100, raw: 58 }, // edge case
];

test("HRP Scores are calculated correctly for males age 17-21", async ({
  page,
}) => {
  male17Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "17", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 17-21 for HRP
const female17Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 61, raw: 11 },
  { score: 62, raw: 12 },
  { score: 64, raw: 13 },
  { score: 65, raw: 14 },
  { score: 66, raw: 15 },
  { score: 68, raw: 16 },
  { score: 69, raw: 17 },
  { score: 70, raw: 18 },
  { score: 71, raw: 19 },
  { score: 72, raw: 20 },
  { score: 74, raw: 21 },
  { score: 75, raw: 22 },
  { score: 76, raw: 23 },
  { score: 77, raw: 24 },
  { score: 78, raw: 25 },
  { score: 79, raw: 26 },
  { score: 80, raw: 27 },
  { score: 82, raw: 28 },
  { score: 83, raw: 29 },
  { score: 84, raw: 30 },
  { score: 85, raw: 31 },
  { score: 86, raw: 32 },
  { score: 87, raw: 33 },
  { score: 88, raw: 34 },
  { score: 89, raw: 35 },
  { score: 90, raw: 36 },
  { score: 91, raw: 37 },
  { score: 92, raw: 38 },
  { score: 94, raw: 39 },
  { score: 94, raw: 40 }, // edge case
  { score: 94, raw: 41 }, // edge case
  { score: 95, raw: 42 },
  { score: 96, raw: 43 },
  { score: 97, raw: 45 },
  { score: 97, raw: 46 }, // edge case
  { score: 98, raw: 47 },
  { score: 99, raw: 50 },
  { score: 100, raw: 53 },
  { score: 100, raw: 54 }, // edge case
];

test("HRP Scores are calculated correctly for females age 17-21", async ({
  page,
}) => {
  female17Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "17", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});
