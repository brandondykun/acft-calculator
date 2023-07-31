import { test, expect } from "@playwright/test";
import { getScoreIncreasingIsBetter } from "@/utils/utils";
import { TestScore } from "@/types";

/**
 * MAXIMUM DEADLIFT
 *
 * These are tests for calculating the Maximum Deadlift scores from the raw performance values.
 */

// scores for males age 17-21 for MDL
const male17Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 61, raw: 150 },
  { score: 64, raw: 160 },
  { score: 67, raw: 170 },
  { score: 68, raw: 180 },
  { score: 69, raw: 190 },
  { score: 72, raw: 200 },
  { score: 74, raw: 210 },
  { score: 77, raw: 220 },
  { score: 79, raw: 230 },
  { score: 82, raw: 240 },
  { score: 83, raw: 250 },
  { score: 84, raw: 260 },
  { score: 87, raw: 270 },
  { score: 90, raw: 280 },
  { score: 91, raw: 290 },
  { score: 93, raw: 300 },
  { score: 95, raw: 310 },
  { score: 96, raw: 320 },
  { score: 99, raw: 330 },
  { score: 100, raw: 340 },
];

test("MDL Scores are calculated correctly for males age 17-21", async ({
  page,
}) => {
  male17Mdl.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "17", "mdl", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 17-21 for MDL
const female17Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 40, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 64, raw: 130 },
  { score: 71, raw: 140 },
  { score: 78, raw: 150 },
  { score: 87, raw: 160 },
  { score: 91, raw: 170 },
  { score: 94, raw: 180 },
  { score: 97, raw: 190 },
  { score: 98, raw: 200 },
  { score: 100, raw: 210 },
];

test("MDL Scores are calculated correctly for females age 17-21", async ({
  page,
}) => {
  female17Mdl.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "17", "mdl", s.raw);
    expect(score).toEqual(s.score);
  });
});
