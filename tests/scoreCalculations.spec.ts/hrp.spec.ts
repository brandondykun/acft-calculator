import { test, expect } from "@playwright/test";
import { getScoreIncreasingIsBetter } from "@/utils/utils";
import { TestScore } from "@/types";

/**
 * HAND RELEASE PUSHUP
 *
 * These are tests for calculating the Hand Release Pushups scores from the raw performance values.
 */

/**
 *
 * MALE SCORES
 *
 */

// scores for males age 17-21 for HRP
// ✅ VALIDATED FROM SCORE SHEET
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

test("HRP Scores are calculated correctly for males age 17-21", async () => {
  male17Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "17", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 22-26 for HRP
const male22Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 61, raw: 12 },
  { score: 62, raw: 13 },
  { score: 63, raw: 14 },
  { score: 63, raw: 15 }, // edge case
  { score: 64, raw: 16 },
  { score: 65, raw: 17 },
  { score: 66, raw: 20 },
  { score: 68, raw: 21 },
  { score: 69, raw: 22 },
  { score: 70, raw: 25 },
  { score: 71, raw: 26 },
  { score: 72, raw: 27 },
  { score: 72, raw: 28 }, // edge case
  { score: 73, raw: 30 },
  { score: 76, raw: 31 },
  { score: 77, raw: 32 },
  { score: 78, raw: 33 },
  { score: 79, raw: 34 },
  { score: 80, raw: 35 },
  { score: 82, raw: 37 },
  { score: 83, raw: 38 },
  { score: 84, raw: 40 },
  { score: 85, raw: 41 },
  { score: 86, raw: 42 },
  { score: 87, raw: 43 },
  { score: 88, raw: 44 },
  { score: 89, raw: 45 },
  { score: 90, raw: 46 },
  { score: 91, raw: 47 },
  { score: 92, raw: 48 },
  { score: 93, raw: 49 },
  { score: 94, raw: 50 },
  { score: 95, raw: 52 },
  { score: 96, raw: 53 },
  { score: 97, raw: 54 },
  { score: 98, raw: 57 },
  { score: 99, raw: 60 },
  { score: 100, raw: 61 },
  { score: 100, raw: 62 }, // edge case
];

test("HRP Scores are calculated correctly for males age 22-26", async () => {
  male22Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "22", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 27-31 for HRP
const male27Hrp: TestScore[] = [
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
  { score: 63, raw: 14 },
  { score: 64, raw: 16 },
  { score: 65, raw: 18 },
  { score: 66, raw: 20 },
  { score: 69, raw: 21 },
  { score: 70, raw: 23 },
  { score: 71, raw: 26 },
  { score: 72, raw: 27 },
  { score: 73, raw: 29 },
  { score: 74, raw: 30 },
  { score: 75, raw: 31 },
  { score: 77, raw: 32 },
  { score: 78, raw: 33 },
  { score: 79, raw: 34 },
  { score: 80, raw: 35 },
  { score: 81, raw: 36 },
  { score: 82, raw: 37 },
  { score: 83, raw: 38 },
  { score: 84, raw: 40 },
  { score: 85, raw: 41 },
  { score: 86, raw: 42 },
  { score: 87, raw: 43 },
  { score: 88, raw: 44 },
  { score: 89, raw: 45 },
  { score: 90, raw: 46 },
  { score: 91, raw: 47 },
  { score: 92, raw: 48 },
  { score: 93, raw: 49 },
  { score: 94, raw: 51 },
  { score: 95, raw: 52 },
  { score: 96, raw: 53 },
  { score: 97, raw: 55 },
  { score: 98, raw: 56 },
  { score: 99, raw: 59 },
  { score: 100, raw: 62 },
  { score: 100, raw: 63 }, // edge case
];

test("HRP Scores are calculated correctly for males age 27-31", async () => {
  male27Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "27", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 32-36 for HRP
const male32Hrp: TestScore[] = [
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
  { score: 63, raw: 13 },
  { score: 64, raw: 14 },
  { score: 64, raw: 15 }, // edge case
  { score: 65, raw: 16 },
  { score: 66, raw: 17 },
  { score: 67, raw: 19 },
  { score: 68, raw: 20 },
  { score: 69, raw: 21 },
  { score: 70, raw: 22 },
  { score: 71, raw: 23 },
  { score: 72, raw: 24 },
  { score: 73, raw: 26 },
  { score: 74, raw: 28 },
  { score: 75, raw: 29 },
  { score: 76, raw: 30 },
  { score: 77, raw: 31 },
  { score: 79, raw: 32 },
  { score: 81, raw: 33 },
  { score: 82, raw: 34 },
  { score: 82, raw: 35 }, // edge case
  { score: 83, raw: 36 },
  { score: 84, raw: 38 },
  { score: 85, raw: 39 },
  { score: 86, raw: 40 },
  { score: 87, raw: 41 },
  { score: 88, raw: 42 },
  { score: 89, raw: 43 },
  { score: 90, raw: 44 },
  { score: 91, raw: 45 },
  { score: 92, raw: 47 },
  { score: 93, raw: 48 },
  { score: 94, raw: 50 },
  { score: 95, raw: 52 },
  { score: 96, raw: 53 },
  { score: 97, raw: 54 },
  { score: 98, raw: 56 },
  { score: 99, raw: 59 },
  { score: 100, raw: 60 },
  { score: 100, raw: 61 }, // edge case
];

test("HRP Scores are calculated correctly for males age 32-36", async () => {
  male32Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "32", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 37-41 for HRP
const male37Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 61, raw: 11 },
  { score: 63, raw: 12 },
  { score: 64, raw: 13 },
  { score: 65, raw: 14 },
  { score: 66, raw: 15 },
  { score: 67, raw: 16 },
  { score: 68, raw: 17 },
  { score: 69, raw: 19 },
  { score: 70, raw: 20 },
  { score: 71, raw: 21 },
  { score: 72, raw: 22 },
  { score: 73, raw: 23 },
  { score: 74, raw: 24 },
  { score: 75, raw: 25 },
  { score: 76, raw: 26 },
  { score: 77, raw: 27 },
  { score: 78, raw: 28 },
  { score: 79, raw: 29 },
  { score: 80, raw: 30 },
  { score: 81, raw: 31 },
  { score: 83, raw: 32 },
  { score: 84, raw: 33 },
  { score: 85, raw: 34 },
  { score: 85, raw: 35 }, // edge case
  { score: 86, raw: 37 },
  { score: 87, raw: 38 },
  { score: 88, raw: 39 },
  { score: 89, raw: 41 },
  { score: 90, raw: 42 },
  { score: 91, raw: 43 },
  { score: 92, raw: 44 },
  { score: 93, raw: 45 },
  { score: 94, raw: 46 },
  { score: 95, raw: 48 },
  { score: 96, raw: 51 },
  { score: 97, raw: 53 },
  { score: 98, raw: 54 },
  { score: 99, raw: 57 },
  { score: 100, raw: 59 },
  { score: 100, raw: 60 }, // edge case
];

test("HRP Scores are calculated correctly for males age 37-41", async () => {
  male37Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "37", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 42-46 for HRP
const male42Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 62, raw: 11 },
  { score: 64, raw: 12 },
  { score: 65, raw: 13 },
  { score: 66, raw: 14 },
  { score: 67, raw: 15 },
  { score: 68, raw: 16 },
  { score: 69, raw: 17 },
  { score: 70, raw: 18 },
  { score: 71, raw: 19 },
  { score: 73, raw: 20 },
  { score: 74, raw: 21 },
  { score: 75, raw: 22 },
  { score: 76, raw: 23 },
  { score: 76, raw: 24 }, // edge case
  { score: 77, raw: 25 },
  { score: 78, raw: 26 },
  { score: 79, raw: 27 },
  { score: 80, raw: 28 },
  { score: 81, raw: 29 },
  { score: 82, raw: 30 },
  { score: 83, raw: 31 },
  { score: 85, raw: 32 },
  { score: 86, raw: 33 },
  { score: 87, raw: 34 },
  { score: 88, raw: 36 },
  { score: 89, raw: 37 },
  { score: 90, raw: 38 },
  { score: 91, raw: 41 },
  { score: 92, raw: 42 },
  { score: 93, raw: 43 },
  { score: 94, raw: 44 },
  { score: 95, raw: 46 },
  { score: 96, raw: 48 },
  { score: 97, raw: 50 },
  { score: 98, raw: 53 },
  { score: 99, raw: 55 },
  { score: 100, raw: 56 },
  { score: 100, raw: 57 }, // edge case
];

test("HRP Scores are calculated correctly for males age 42-46", async () => {
  male42Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "42", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 47-51 for HRP
const male47Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 63, raw: 11 },
  { score: 66, raw: 12 },
  { score: 68, raw: 13 },
  { score: 69, raw: 14 },
  { score: 70, raw: 15 },
  { score: 71, raw: 16 },
  { score: 72, raw: 17 },
  { score: 73, raw: 18 },
  { score: 74, raw: 19 },
  { score: 75, raw: 20 },
  { score: 77, raw: 21 },
  { score: 79, raw: 22 },
  { score: 80, raw: 23 },
  { score: 81, raw: 25 },
  { score: 82, raw: 27 },
  { score: 83, raw: 28 },
  { score: 84, raw: 29 },
  { score: 85, raw: 30 },
  { score: 86, raw: 31 },
  { score: 87, raw: 32 },
  { score: 89, raw: 33 },
  { score: 90, raw: 34 },
  { score: 91, raw: 36 },
  { score: 92, raw: 38 },
  { score: 93, raw: 39 },
  { score: 94, raw: 41 },
  { score: 95, raw: 42 },
  { score: 96, raw: 44 },
  { score: 97, raw: 47 },
  { score: 98, raw: 50 },
  { score: 99, raw: 53 },
  { score: 100, raw: 55 },
  { score: 100, raw: 56 }, // edge case
];

test("HRP Scores are calculated correctly for males age 47-51", async () => {
  male47Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "47", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 52-56 for HRP
const male52Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 64, raw: 11 },
  { score: 67, raw: 12 },
  { score: 69, raw: 13 },
  { score: 71, raw: 14 },
  { score: 72, raw: 15 },
  { score: 74, raw: 16 },
  { score: 76, raw: 17 },
  { score: 77, raw: 18 },
  { score: 78, raw: 19 },
  { score: 79, raw: 20 },
  { score: 80, raw: 21 },
  { score: 81, raw: 22 },
  { score: 83, raw: 23 },
  { score: 84, raw: 24 },
  { score: 85, raw: 25 },
  { score: 86, raw: 26 },
  { score: 87, raw: 27 },
  { score: 88, raw: 28 },
  { score: 89, raw: 30 },
  { score: 90, raw: 31 },
  { score: 91, raw: 32 },
  { score: 92, raw: 33 },
  { score: 93, raw: 34 },
  { score: 94, raw: 35 },
  { score: 95, raw: 38 },
  { score: 96, raw: 40 },
  { score: 97, raw: 43 },
  { score: 98, raw: 45 },
  { score: 99, raw: 48 },
  { score: 100, raw: 51 },
  { score: 100, raw: 52 }, // edge case
];

test("HRP Scores are calculated correctly for males age 52-56", async () => {
  male52Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "52", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 57-61 for HRP
const male57Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 65, raw: 11 },
  { score: 68, raw: 12 },
  { score: 71, raw: 13 },
  { score: 73, raw: 14 },
  { score: 75, raw: 15 },
  { score: 76, raw: 16 },
  { score: 78, raw: 17 },
  { score: 80, raw: 18 },
  { score: 81, raw: 19 },
  { score: 82, raw: 20 },
  { score: 83, raw: 21 },
  { score: 84, raw: 22 },
  { score: 86, raw: 23 },
  { score: 87, raw: 24 },
  { score: 88, raw: 25 },
  { score: 89, raw: 26 },
  { score: 90, raw: 29 },
  { score: 91, raw: 30 },
  { score: 92, raw: 31 },
  { score: 93, raw: 33 },
  { score: 94, raw: 34 },
  { score: 95, raw: 35 },
  { score: 96, raw: 37 },
  { score: 97, raw: 38 },
  { score: 98, raw: 40 },
  { score: 99, raw: 43 },
  { score: 100, raw: 46 },
  { score: 100, raw: 47 }, // edge case
];

test("HRP Scores are calculated correctly for males age 57-61", async () => {
  male57Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "57", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for males age 62+ for HRP
const male62Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 68, raw: 11 },
  { score: 71, raw: 12 },
  { score: 74, raw: 13 },
  { score: 76, raw: 14 },
  { score: 77, raw: 15 },
  { score: 79, raw: 16 },
  { score: 80, raw: 17 },
  { score: 81, raw: 18 },
  { score: 82, raw: 19 },
  { score: 83, raw: 20 },
  { score: 84, raw: 21 },
  { score: 85, raw: 22 },
  { score: 87, raw: 23 },
  { score: 89, raw: 24 },
  { score: 90, raw: 26 },
  { score: 91, raw: 29 },
  { score: 92, raw: 30 },
  { score: 93, raw: 31 },
  { score: 94, raw: 33 },
  { score: 95, raw: 34 },
  { score: 96, raw: 35 },
  { score: 97, raw: 37 },
  { score: 98, raw: 39 },
  { score: 99, raw: 41 },
  { score: 100, raw: 43 },
  { score: 100, raw: 44 }, // edge case
];

test("HRP Scores are calculated correctly for males age 62+", async () => {
  male62Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "62", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

/**
 *
 * FEMALE SCORES
 *
 */

// scores for females age 17-21 for HRP
// ✅ VALIDATED FROM SCORE SHEET
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

test("HRP Scores are calculated correctly for females age 17-21", async () => {
  female17Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "17", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 22-26 for HRP
const female22Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 62, raw: 11 },
  { score: 65, raw: 12 },
  { score: 68, raw: 13 },
  { score: 69, raw: 14 },
  { score: 70, raw: 15 },
  { score: 71, raw: 16 },
  { score: 72, raw: 17 },
  { score: 74, raw: 18 },
  { score: 76, raw: 19 },
  { score: 77, raw: 21 },
  { score: 78, raw: 22 },
  { score: 79, raw: 23 },
  { score: 82, raw: 24 },
  { score: 83, raw: 25 },
  { score: 84, raw: 26 },
  { score: 85, raw: 27 },
  { score: 86, raw: 28 },
  { score: 87, raw: 30 },
  { score: 88, raw: 31 },
  { score: 89, raw: 32 },
  { score: 90, raw: 33 },
  { score: 91, raw: 34 },
  { score: 92, raw: 35 },
  { score: 93, raw: 36 },
  { score: 94, raw: 37 },
  { score: 95, raw: 39 },
  { score: 96, raw: 42 },
  { score: 97, raw: 43 },
  { score: 98, raw: 46 },
  { score: 99, raw: 49 },
  { score: 100, raw: 50 },
  { score: 100, raw: 51 }, // edge case
];

test("HRP Scores are calculated correctly for females age 22-26", async () => {
  female22Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "22", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 27-31 for HRP
const female27Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 63, raw: 11 },
  { score: 65, raw: 12 },
  { score: 68, raw: 13 },
  { score: 70, raw: 14 },
  { score: 72, raw: 15 },
  { score: 74, raw: 16 },
  { score: 76, raw: 17 },
  { score: 77, raw: 18 },
  { score: 78, raw: 19 },
  { score: 79, raw: 20 },
  { score: 80, raw: 21 },
  { score: 82, raw: 22 },
  { score: 83, raw: 23 },
  { score: 84, raw: 24 },
  { score: 86, raw: 25 },
  { score: 87, raw: 26 },
  { score: 88, raw: 27 },
  { score: 89, raw: 28 },
  { score: 90, raw: 30 },
  { score: 91, raw: 32 },
  { score: 92, raw: 33 },
  { score: 93, raw: 34 },
  { score: 94, raw: 35 },
  { score: 95, raw: 36 },
  { score: 96, raw: 38 },
  { score: 97, raw: 39 },
  { score: 98, raw: 42 },
  { score: 99, raw: 45 },
  { score: 100, raw: 48 },
  { score: 100, raw: 49 }, // edge case
];

test("HRP Scores are calculated correctly for females age 27-31", async () => {
  female27Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "27", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 32-36 for HRP
const female32Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 64, raw: 11 },
  { score: 66, raw: 12 },
  { score: 70, raw: 13 },
  { score: 72, raw: 14 },
  { score: 73, raw: 15 },
  { score: 74, raw: 16 },
  { score: 75, raw: 17 },
  { score: 78, raw: 18 },
  { score: 80, raw: 19 },
  { score: 81, raw: 22 },
  { score: 83, raw: 23 },
  { score: 85, raw: 24 },
  { score: 87, raw: 25 },
  { score: 88, raw: 26 },
  { score: 89, raw: 28 },
  { score: 90, raw: 30 },
  { score: 91, raw: 31 },
  { score: 92, raw: 32 },
  { score: 93, raw: 34 },
  { score: 94, raw: 35 },
  { score: 95, raw: 36 },
  { score: 96, raw: 37 },
  { score: 97, raw: 40 },
  { score: 98, raw: 43 },
  { score: 99, raw: 46 },
  { score: 100, raw: 47 },
  { score: 100, raw: 48 }, // edge case
];

test("HRP Scores are calculated correctly for females age 32-36", async () => {
  female32Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "32", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 37-41 for HRP
const female37Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 67, raw: 11 },
  { score: 72, raw: 12 },
  { score: 76, raw: 13 },
  { score: 78, raw: 14 },
  { score: 79, raw: 15 },
  { score: 80, raw: 16 },
  { score: 82, raw: 17 },
  { score: 83, raw: 18 },
  { score: 84, raw: 19 },
  { score: 86, raw: 20 },
  { score: 88, raw: 21 },
  { score: 90, raw: 22 },
  { score: 91, raw: 23 },
  { score: 92, raw: 26 },
  { score: 93, raw: 27 },
  { score: 94, raw: 28 },
  { score: 95, raw: 31 },
  { score: 96, raw: 33 },
  { score: 97, raw: 34 },
  { score: 98, raw: 36 },
  { score: 99, raw: 39 },
  { score: 100, raw: 41 },
  { score: 100, raw: 42 }, // edge case
];

test("HRP Scores are calculated correctly for females age 37-41", async () => {
  female37Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "37", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 42-46 for HRP
const female42Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 67, raw: 11 },
  { score: 73, raw: 12 },
  { score: 79, raw: 13 },
  { score: 81, raw: 14 },
  { score: 83, raw: 15 },
  { score: 85, raw: 16 },
  { score: 86, raw: 17 },
  { score: 87, raw: 18 },
  { score: 88, raw: 19 },
  { score: 90, raw: 20 },
  { score: 91, raw: 21 },
  { score: 92, raw: 22 },
  { score: 93, raw: 23 },
  { score: 94, raw: 24 },
  { score: 95, raw: 26 },
  { score: 96, raw: 28 },
  { score: 97, raw: 30 },
  { score: 98, raw: 31 },
  { score: 99, raw: 34 },
  { score: 100, raw: 36 },
  { score: 100, raw: 37 }, // edge case
];

test("HRP Scores are calculated correctly for females age 42-46", async () => {
  female42Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "42", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 47-51 for HRP
const female47Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 67, raw: 11 },
  { score: 74, raw: 12 },
  { score: 81, raw: 13 },
  { score: 83, raw: 14 },
  { score: 84, raw: 15 },
  { score: 85, raw: 16 },
  { score: 86, raw: 17 },
  { score: 88, raw: 18 },
  { score: 89, raw: 19 },
  { score: 90, raw: 20 },
  { score: 91, raw: 21 },
  { score: 92, raw: 22 },
  { score: 93, raw: 23 },
  { score: 94, raw: 24 },
  { score: 95, raw: 25 },
  { score: 96, raw: 27 },
  { score: 97, raw: 30 },
  { score: 98, raw: 31 },
  { score: 99, raw: 34 },
  { score: 100, raw: 35 },
  { score: 100, raw: 36 }, // edge case
];

test("HRP Scores are calculated correctly for females age 47-51", async () => {
  female47Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "47", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 52-56 for HRP
const female52Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 67, raw: 11 },
  { score: 74, raw: 12 },
  { score: 82, raw: 13 },
  { score: 83, raw: 14 },
  { score: 87, raw: 15 },
  { score: 88, raw: 16 },
  { score: 90, raw: 17 },
  { score: 91, raw: 18 },
  { score: 92, raw: 19 },
  { score: 93, raw: 20 },
  { score: 94, raw: 22 },
  { score: 95, raw: 23 },
  { score: 96, raw: 24 },
  { score: 97, raw: 25 },
  { score: 98, raw: 26 },
  { score: 99, raw: 28 },
  { score: 100, raw: 30 },
  { score: 100, raw: 31 }, // edge case
];

test("HRP Scores are calculated correctly for females age 52-56", async () => {
  female52Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "52", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 57-61 for HRP
const female57Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 67, raw: 11 },
  { score: 77, raw: 12 },
  { score: 84, raw: 13 },
  { score: 89, raw: 14 },
  { score: 90, raw: 15 },
  { score: 91, raw: 16 },
  { score: 92, raw: 17 },
  { score: 94, raw: 18 },
  { score: 95, raw: 19 },
  { score: 96, raw: 20 },
  { score: 97, raw: 21 },
  { score: 98, raw: 22 },
  { score: 99, raw: 23 },
  { score: 100, raw: 24 },
  { score: 100, raw: 25 }, // edge case
];

test("HRP Scores are calculated correctly for females age 57-61", async () => {
  female57Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "57", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 62+ for HRP
const female62Hrp: TestScore[] = [
  { score: 0, raw: 3 }, // edge case
  { score: 0, raw: 4 },
  { score: 10, raw: 5 },
  { score: 20, raw: 6 },
  { score: 30, raw: 7 },
  { score: 40, raw: 8 },
  { score: 50, raw: 9 },
  { score: 60, raw: 10 },
  { score: 69, raw: 11 },
  { score: 79, raw: 12 },
  { score: 86, raw: 13 },
  { score: 89, raw: 14 },
  { score: 90, raw: 15 },
  { score: 91, raw: 16 },
  { score: 92, raw: 17 },
  { score: 94, raw: 18 },
  { score: 95, raw: 19 },
  { score: 96, raw: 20 },
  { score: 97, raw: 21 },
  { score: 98, raw: 22 },
  { score: 99, raw: 23 },
  { score: 100, raw: 24 },
  { score: 100, raw: 25 }, // edge case
];

test("HRP Scores are calculated correctly for females age 62+", async () => {
  female62Hrp.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "62", "hrp", s.raw);
    expect(score).toEqual(s.score);
  });
});
