import { test, expect } from "@playwright/test";
import { getScoreIncreasingIsBetter } from "@/utils/utils";
import { TestScore } from "@/types";

/**
 * STANDING POWER THROW
 *
 * These are tests for calculating the Standing Power Throw scores from the raw performance values.
 */

// scores for males age 17-21 for SPT
const male17Spt: TestScore[] = [
  { score: 0, raw: 4 },
  { score: 2, raw: 4.1 },
  { score: 4, raw: 4.2 },
  { score: 6, raw: 4.3 },
  { score: 8, raw: 4.4 },
  { score: 10, raw: 4.5 },
  { score: 12, raw: 4.6 },
  { score: 14, raw: 4.7 },
  { score: 16, raw: 4.8 },
  { score: 18, raw: 4.9 },
  { score: 21, raw: 5 },
  { score: 24, raw: 5.1 },
  { score: 28, raw: 5.2 },
  { score: 31, raw: 5.3 },
  { score: 34, raw: 5.4 },
  { score: 38, raw: 5.5 },
  { score: 42, raw: 5.6 },
  { score: 47, raw: 5.7 },
  { score: 52, raw: 5.8 },
  { score: 57, raw: 5.9 },
  { score: 60, raw: 6 },
  { score: 60, raw: 6.3 }, // edge case
  { score: 61, raw: 6.6 },
  { score: 62, raw: 6.9 },
  { score: 63, raw: 7.2 },
  { score: 63, raw: 7.3 }, // edge case
  { score: 64, raw: 7.4 },
  { score: 65, raw: 7.5 },
  { score: 66, raw: 7.7 },
  { score: 67, raw: 7.9 },
  { score: 68, raw: 8 },
  { score: 69, raw: 8.1 },
  { score: 70, raw: 8.2 },
  { score: 71, raw: 8.3 },
  { score: 72, raw: 8.4 },
  { score: 73, raw: 8.5 },
  { score: 74, raw: 8.6 },
  { score: 74, raw: 8.7 }, // edge case
  { score: 75, raw: 8.8 },
  { score: 76, raw: 8.9 },
  { score: 77, raw: 9 },
  { score: 78, raw: 9.1 },
  { score: 79, raw: 9.2 },
  { score: 80, raw: 9.3 },
  { score: 81, raw: 9.4 },
  { score: 82, raw: 9.5 },
  { score: 83, raw: 9.6 },
  { score: 84, raw: 9.7 },
  { score: 85, raw: 9.8 },
  { score: 86, raw: 9.9 },
  { score: 87, raw: 10 },
  { score: 87, raw: 10.1 }, // edge case
  { score: 88, raw: 10.3 },
  { score: 89, raw: 10.4 },
  { score: 90, raw: 10.5 },
  { score: 91, raw: 10.6 },
  { score: 92, raw: 10.7 },
  { score: 93, raw: 10.9 },
  { score: 94, raw: 11 },
  { score: 94, raw: 11.1 }, // edge case
  { score: 95, raw: 11.3 },
  { score: 96, raw: 11.5 },
  { score: 97, raw: 11.7 },
  { score: 98, raw: 12 },
  { score: 99, raw: 12.4 },
  { score: 100, raw: 12.6 },
  { score: 100, raw: 12.9 }, // edge case
];

test("SPT Scores are calculated correctly for males age 17-21", async ({
  page,
}) => {
  male17Spt.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "17", "spt", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 17-21 for SPT
const female17Spt: TestScore[] = [
  { score: 0, raw: 2 },
  { score: 2, raw: 2.7 },
  { score: 4, raw: 2.8 },
  { score: 6, raw: 2.9 },
  { score: 8, raw: 3 },
  { score: 11, raw: 3.1 },
  { score: 14, raw: 3.2 },
  { score: 18, raw: 3.3 },
  { score: 24, raw: 3.4 },
  { score: 32, raw: 3.5 },
  { score: 37, raw: 3.6 },
  { score: 44, raw: 3.7 },
  { score: 54, raw: 3.8 },
  { score: 60, raw: 3.9 },
  { score: 60, raw: 4.0 }, // edge case
  { score: 61, raw: 4.4 },
  { score: 62, raw: 4.6 },
  { score: 63, raw: 4.7 },
  { score: 65, raw: 4.8 },
  { score: 66, raw: 4.9 },
  { score: 68, raw: 5 },
  { score: 69, raw: 5.1 },
  { score: 71, raw: 5.2 },
  { score: 72, raw: 5.3 },
  { score: 74, raw: 5.4 },
  { score: 75, raw: 5.5 },
  { score: 76, raw: 5.6 },
  { score: 78, raw: 5.7 },
  { score: 80, raw: 5.8 },
  { score: 81, raw: 5.9 },
  { score: 83, raw: 6 },
  { score: 85, raw: 6.1 },
  { score: 86, raw: 6.2 },
  { score: 87, raw: 6.3 },
  { score: 88, raw: 6.4 },
  { score: 90, raw: 6.5 },
  { score: 91, raw: 6.6 },
  { score: 91, raw: 6.7 }, // edge case
  { score: 92, raw: 6.8 },
  { score: 93, raw: 6.9 },
  { score: 94, raw: 7 },
  { score: 94, raw: 7.1 }, // edge case
  { score: 95, raw: 7.2 },
  { score: 96, raw: 7.3 },
  { score: 97, raw: 7.5 },
  { score: 98, raw: 7.7 },
  { score: 98, raw: 8.0 }, // edge case
  { score: 99, raw: 8.2 },
  { score: 100, raw: 8.4 },
];

test("SPT Scores are calculated correctly for females age 17-21", async ({
  page,
}) => {
  female17Spt.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "17", "spt", s.raw);
    expect(score).toEqual(s.score);
  });
});
