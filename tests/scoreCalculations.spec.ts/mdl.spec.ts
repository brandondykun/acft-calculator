import { test, expect } from "@playwright/test";
import { getScoreIncreasingIsBetter } from "@/utils/utils";
import { TestScore } from "@/types";

/**
 * MAXIMUM DEADLIFT
 *
 * These are tests for calculating the Maximum Deadlift
 * scores from the raw performance values.
 */

/**
 *
 * MALE SCORES
 *
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

test("MDL Scores are calculated correctly for males age 17-21", async () => {
  male17Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "17",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 22-26 for MDL
const male22Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 61, raw: 150 },
  { score: 65, raw: 160 },
  { score: 67, raw: 170 },
  { score: 69, raw: 180 },
  { score: 70, raw: 190 },
  { score: 71, raw: 200 },
  { score: 73, raw: 210 },
  { score: 75, raw: 220 },
  { score: 77, raw: 230 },
  { score: 79, raw: 240 },
  { score: 81, raw: 250 },
  { score: 84, raw: 260 },
  { score: 86, raw: 270 },
  { score: 88, raw: 280 },
  { score: 89, raw: 290 },
  { score: 90, raw: 310 },
  { score: 92, raw: 320 },
  { score: 99, raw: 330 },
  { score: 100, raw: 340 },
];

test("MDL Scores are calculated correctly for males age 22-26", async () => {
  male22Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "22",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 27-31 for MDL
const male27Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 63, raw: 150 },
  { score: 65, raw: 160 },
  { score: 68, raw: 170 },
  { score: 69, raw: 180 },
  { score: 70, raw: 190 },
  { score: 71, raw: 200 },
  { score: 73, raw: 210 },
  { score: 75, raw: 220 },
  { score: 77, raw: 230 },
  { score: 79, raw: 240 },
  { score: 81, raw: 250 },
  { score: 84, raw: 260 },
  { score: 85, raw: 270 },
  { score: 87, raw: 280 },
  { score: 88, raw: 290 },
  { score: 89, raw: 300 },
  { score: 90, raw: 310 },
  { score: 92, raw: 320 },
  { score: 99, raw: 330 },
  { score: 100, raw: 340 },
];

test("MDL Scores are calculated correctly for males age 27-31", async () => {
  male27Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "27",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 32-36 for MDL
const male32Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 66, raw: 150 },
  { score: 68, raw: 160 },
  { score: 69, raw: 170 },
  { score: 70, raw: 180 },
  { score: 71, raw: 190 },
  { score: 73, raw: 200 },
  { score: 75, raw: 210 },
  { score: 77, raw: 220 },
  { score: 79, raw: 230 },
  { score: 71, raw: 240 },
  { score: 83, raw: 250 },
  { score: 85, raw: 260 },
  { score: 87, raw: 270 },
  { score: 88, raw: 280 },
  { score: 89, raw: 290 },
  { score: 90, raw: 300 },
  { score: 91, raw: 310 },
  { score: 93, raw: 320 },
  { score: 99, raw: 330 },
  { score: 100, raw: 340 },
];

test("MDL Scores are calculated correctly for males age 32-36", async () => {
  male32Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "32",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 37-41 for MDL
const male37Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 68, raw: 150 },
  { score: 70, raw: 160 },
  { score: 71, raw: 170 },
  { score: 72, raw: 180 },
  { score: 74, raw: 190 },
  { score: 76, raw: 200 },
  { score: 78, raw: 210 },
  { score: 81, raw: 220 },
  { score: 82, raw: 230 },
  { score: 84, raw: 240 },
  { score: 86, raw: 250 },
  { score: 88, raw: 260 },
  { score: 90, raw: 270 },
  { score: 91, raw: 280 },
  { score: 92, raw: 290 },
  { score: 93, raw: 300 },
  { score: 94, raw: 310 },
  { score: 95, raw: 320 },
  { score: 99, raw: 330 },
  { score: 100, raw: 340 },
];

test("MDL Scores are calculated correctly for males age 37-41", async () => {
  male37Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "37",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 42-46 for MDL
const male42Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 69, raw: 150 },
  { score: 73, raw: 160 },
  { score: 75, raw: 170 },
  { score: 76, raw: 180 },
  { score: 77, raw: 190 },
  { score: 79, raw: 200 },
  { score: 81, raw: 210 },
  { score: 84, raw: 220 },
  { score: 85, raw: 230 },
  { score: 86, raw: 240 },
  { score: 89, raw: 250 },
  { score: 91, raw: 260 },
  { score: 92, raw: 270 },
  { score: 93, raw: 280 },
  { score: 94, raw: 290 },
  { score: 95, raw: 300 },
  { score: 96, raw: 310 },
  { score: 97, raw: 320 },
  { score: 99, raw: 330 },
  { score: 100, raw: 340 },
];

test("MDL Scores are calculated correctly for males age 42-46", async () => {
  male42Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "42",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 47-51 for MDL
const male47Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 70, raw: 150 },
  { score: 78, raw: 160 },
  { score: 80, raw: 170 },
  { score: 81, raw: 180 },
  { score: 83, raw: 190 },
  { score: 85, raw: 200 },
  { score: 87, raw: 210 },
  { score: 89, raw: 220 },
  { score: 90, raw: 230 },
  { score: 91, raw: 240 },
  { score: 92, raw: 250 },
  { score: 93, raw: 260 },
  { score: 94, raw: 270 },
  { score: 95, raw: 280 },
  { score: 96, raw: 290 },
  { score: 97, raw: 300 },
  { score: 98, raw: 310 },
  { score: 99, raw: 320 },
  { score: 100, raw: 330 },
];

test("MDL Scores are calculated correctly for males age 47-51", async () => {
  male47Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "47",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 52-56 for MDL
const male52Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 70, raw: 150 },
  { score: 79, raw: 160 },
  { score: 84, raw: 170 },
  { score: 85, raw: 180 },
  { score: 86, raw: 190 },
  { score: 88, raw: 200 },
  { score: 90, raw: 210 },
  { score: 93, raw: 220 },
  { score: 94, raw: 230 },
  { score: 95, raw: 240 },
  { score: 96, raw: 250 },
  { score: 97, raw: 260 },
  { score: 98, raw: 270 },
  { score: 99, raw: 280 },
  { score: 100, raw: 290 },
];

test("MDL Scores are calculated correctly for males age 52-56", async () => {
  male52Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "52",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 57-61 for MDL
const male57Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 71, raw: 150 },
  { score: 79, raw: 160 },
  { score: 89, raw: 170 },
  { score: 91, raw: 180 },
  { score: 93, raw: 190 },
  { score: 94, raw: 200 },
  { score: 96, raw: 210 },
  { score: 97, raw: 220 },
  { score: 98, raw: 230 },
  { score: 99, raw: 240 },
  { score: 100, raw: 250 },
];

test("MDL Scores are calculated correctly for males age 57-61", async () => {
  male57Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "57",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for males age 57-61 for MDL
const male62Mdl: TestScore[] = [
  { score: 0, raw: 80 },
  { score: 10, raw: 90 },
  { score: 20, raw: 100 },
  { score: 30, raw: 110 },
  { score: 40, raw: 120 },
  { score: 50, raw: 130 },
  { score: 60, raw: 140 },
  { score: 72, raw: 150 },
  { score: 82, raw: 160 },
  { score: 92, raw: 170 },
  { score: 93, raw: 180 },
  { score: 94, raw: 190 },
  { score: 95, raw: 200 },
  { score: 98, raw: 210 },
  { score: 99, raw: 220 },
  { score: 100, raw: 230 },
];

test("MDL Scores are calculated correctly for males age 62+", async () => {
  male62Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "male",
      "62",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

/**
 *
 * FEMALE SCORES
 *
 */

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

test("MDL Scores are calculated correctly for females age 17-21", async () => {
  female17Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "17",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 22-26 for MDL
const female22Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 64, raw: 130 },
  { score: 71, raw: 140 },
  { score: 78, raw: 150 },
  { score: 87, raw: 160 },
  { score: 89, raw: 170 },
  { score: 91, raw: 180 },
  { score: 94, raw: 190 },
  { score: 96, raw: 200 },
  { score: 98, raw: 210 },
  { score: 99, raw: 220 },
  { score: 100, raw: 230 },
];

test("MDL Scores are calculated correctly for females age 22-26", async () => {
  female22Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "22",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 27-31 for MDL
const female27Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 64, raw: 130 },
  { score: 71, raw: 140 },
  { score: 79, raw: 150 },
  { score: 86, raw: 160 },
  { score: 89, raw: 170 },
  { score: 91, raw: 180 },
  { score: 94, raw: 190 },
  { score: 95, raw: 200 },
  { score: 98, raw: 210 },
  { score: 99, raw: 220 },
  { score: 100, raw: 230 },
];

test("MDL Scores are calculated correctly for females age 27-31", async () => {
  female27Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "27",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 32-36 for MDL
const female32Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 64, raw: 130 },
  { score: 71, raw: 140 },
  { score: 79, raw: 150 },
  { score: 88, raw: 160 },
  { score: 91, raw: 170 },
  { score: 93, raw: 180 },
  { score: 95, raw: 190 },
  { score: 96, raw: 200 },
  { score: 98, raw: 210 },
  { score: 99, raw: 220 },
  { score: 100, raw: 230 },
];

test("MDL Scores are calculated correctly for females age 32-36", async () => {
  female32Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "32",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 37-41 for MDL
const female37Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 65, raw: 130 },
  { score: 71, raw: 140 },
  { score: 79, raw: 150 },
  { score: 90, raw: 160 },
  { score: 93, raw: 170 },
  { score: 95, raw: 180 },
  { score: 97, raw: 190 },
  { score: 99, raw: 200 },
  { score: 100, raw: 210 },
];

test("MDL Scores are calculated correctly for females age 37-41", async () => {
  female37Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "37",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 42-46 for MDL
const female42Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 65, raw: 130 },
  { score: 71, raw: 140 },
  { score: 79, raw: 150 },
  { score: 90, raw: 160 },
  { score: 95, raw: 170 },
  { score: 96, raw: 180 },
  { score: 98, raw: 190 },
  { score: 99, raw: 200 },
  { score: 100, raw: 210 },
];

test("MDL Scores are calculated correctly for females age 42-46", async () => {
  female42Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "42",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 47-51 for MDL
const female47Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 67, raw: 130 },
  { score: 73, raw: 140 },
  { score: 79, raw: 150 },
  { score: 90, raw: 160 },
  { score: 97, raw: 170 },
  { score: 99, raw: 180 },
  { score: 100, raw: 190 },
];

test("MDL Scores are calculated correctly for females age 47-51", async () => {
  female47Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "47",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 52-56 for MDL
const female52Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 70, raw: 130 },
  { score: 80, raw: 140 },
  { score: 90, raw: 150 },
  { score: 97, raw: 160 },
  { score: 98, raw: 170 },
  { score: 99, raw: 180 },
  { score: 100, raw: 190 },
];

test("MDL Scores are calculated correctly for females age 52-56", async () => {
  female52Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "52",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 57-61 for MDL
const female57Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 71, raw: 130 },
  { score: 80, raw: 140 },
  { score: 90, raw: 150 },
  { score: 99, raw: 160 },
  { score: 100, raw: 170 },
];

test("MDL Scores are calculated correctly for females age 57-61", async () => {
  female57Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "57",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});

// scores for females age 62+ for MDL
const female62Mdl: TestScore[] = [
  { score: 0, raw: 60 },
  { score: 10, raw: 70 },
  { score: 20, raw: 80 },
  { score: 30, raw: 90 },
  { score: 40, raw: 100 },
  { score: 50, raw: 110 },
  { score: 60, raw: 120 },
  { score: 72, raw: 130 },
  { score: 80, raw: 140 },
  { score: 90, raw: 150 },
  { score: 99, raw: 160 },
  { score: 100, raw: 170 },
];

test("MDL Scores are calculated correctly for females age 62+", async () => {
  female62Mdl.forEach((s) => {
    const score: number = getScoreIncreasingIsBetter(
      "female",
      "62",
      "mdl",
      s.raw
    );
    expect(score).toEqual(s.score);
  });
});
