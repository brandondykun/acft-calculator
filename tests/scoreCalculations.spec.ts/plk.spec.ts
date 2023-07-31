import { test, expect } from "@playwright/test";
import { getScoreIncreasingIsBetter } from "@/utils/utils";
import { TestScore } from "@/types";

/**
 * PLANK
 *
 * These are tests for calculating the Plank scores from the raw performance values.
 */

// scores for males age 17-21 for PLK
const male17Plk: TestScore[] = [
  { score: 0, raw: 59 }, // edge case
  { score: 0, raw: 60 },
  { score: 2, raw: 61 },
  { score: 4, raw: 62 },
  { score: 6, raw: 63 },
  { score: 8, raw: 64 },
  { score: 10, raw: 65 },
  { score: 12, raw: 66 },
  { score: 14, raw: 67 },
  { score: 16, raw: 68 },
  { score: 18, raw: 69 },
  { score: 20, raw: 70 },
  { score: 22, raw: 71 },
  { score: 24, raw: 72 },
  { score: 26, raw: 73 },
  { score: 28, raw: 74 },
  { score: 30, raw: 75 },
  { score: 32, raw: 76 },
  { score: 34, raw: 77 },
  { score: 36, raw: 78 },
  { score: 38, raw: 79 },
  { score: 40, raw: 80 },
  { score: 42, raw: 81 },
  { score: 44, raw: 82 },
  { score: 46, raw: 83 },
  { score: 48, raw: 84 },
  { score: 50, raw: 85 },
  { score: 52, raw: 86 },
  { score: 54, raw: 87 },
  { score: 56, raw: 88 },
  { score: 58, raw: 89 },
  { score: 60, raw: 90 },
  { score: 60, raw: 91 }, // edge case
  { score: 61, raw: 93 },
  { score: 62, raw: 97 },
  { score: 63, raw: 100 },
  { score: 64, raw: 103 },
  { score: 65, raw: 106 },
  { score: 66, raw: 109 },
  { score: 67, raw: 113 },
  { score: 68, raw: 116 },
  { score: 69, raw: 119 },
  { score: 70, raw: 122 },
  { score: 70, raw: 123 }, // edge case
  { score: 71, raw: 126 },
  { score: 72, raw: 129 },
  { score: 72, raw: 130 }, // edge case
  { score: 73, raw: 132 },
  { score: 74, raw: 135 },
  { score: 75, raw: 139 },
  { score: 76, raw: 142 },
  { score: 77, raw: 145 },
  { score: 78, raw: 149 },
  { score: 79, raw: 152 },
  { score: 79, raw: 153 }, // edge case
  { score: 80, raw: 155 },
  { score: 81, raw: 158 },
  { score: 82, raw: 161 },
  { score: 83, raw: 165 },
  { score: 84, raw: 168 },
  { score: 85, raw: 171 },
  { score: 85, raw: 173 }, // edge case
  { score: 86, raw: 175 },
  { score: 87, raw: 178 },
  { score: 88, raw: 181 },
  { score: 89, raw: 184 },
  { score: 90, raw: 188 },
  { score: 91, raw: 191 },
  { score: 92, raw: 194 },
  { score: 93, raw: 197 },
  { score: 93, raw: 200 }, // edge case
  { score: 94, raw: 201 },
  { score: 95, raw: 204 },
  { score: 96, raw: 207 },
  { score: 97, raw: 210 },
  { score: 97, raw: 211 }, // edge case
  { score: 98, raw: 214 },
  { score: 99, raw: 217 },
  { score: 100, raw: 220 },
  { score: 100, raw: 221 }, // edge case
];

test("PLK Scores are calculated correctly for males age 17-21", async ({
  page,
}) => {
  male17Plk.forEach((s) => {
    const score = getScoreIncreasingIsBetter("male", "17", "plk", s.raw);
    expect(score).toEqual(s.score);
  });
});

// scores for females age 17-21 for PLK
const female17Plk: TestScore[] = [
  { score: 0, raw: 59 }, // edge case
  { score: 0, raw: 60 },
  { score: 2, raw: 61 },
  { score: 4, raw: 62 },
  { score: 6, raw: 63 },
  { score: 8, raw: 64 },
  { score: 10, raw: 65 },
  { score: 12, raw: 66 },
  { score: 14, raw: 67 },
  { score: 16, raw: 68 },
  { score: 18, raw: 69 },
  { score: 20, raw: 70 },
  { score: 22, raw: 71 },
  { score: 24, raw: 72 },
  { score: 26, raw: 73 },
  { score: 28, raw: 74 },
  { score: 30, raw: 75 },
  { score: 32, raw: 76 },
  { score: 34, raw: 77 },
  { score: 36, raw: 78 },
  { score: 38, raw: 79 },
  { score: 40, raw: 80 },
  { score: 42, raw: 81 },
  { score: 44, raw: 82 },
  { score: 46, raw: 83 },
  { score: 48, raw: 84 },
  { score: 50, raw: 85 },
  { score: 52, raw: 86 },
  { score: 54, raw: 87 },
  { score: 56, raw: 88 },
  { score: 58, raw: 89 },
  { score: 60, raw: 90 },
  { score: 60, raw: 91 }, // edge case
  { score: 61, raw: 93 },
  { score: 62, raw: 97 },
  { score: 63, raw: 100 },
  { score: 63, raw: 101 }, // edge case
  { score: 64, raw: 103 },
  { score: 65, raw: 106 },
  { score: 66, raw: 109 },
  { score: 67, raw: 113 },
  { score: 68, raw: 116 },
  { score: 69, raw: 119 },
  { score: 70, raw: 122 },
  { score: 71, raw: 126 },
  { score: 72, raw: 129 },
  { score: 72, raw: 130 }, // edge case
  { score: 73, raw: 132 },
  { score: 74, raw: 135 },
  { score: 75, raw: 139 },
  { score: 76, raw: 142 },
  { score: 77, raw: 145 },
  { score: 77, raw: 146 }, // edge case
  { score: 78, raw: 149 },
  { score: 79, raw: 152 },
  { score: 80, raw: 155 },
  { score: 81, raw: 158 },
  { score: 82, raw: 161 },
  { score: 83, raw: 165 },
  { score: 84, raw: 168 },
  { score: 85, raw: 171 },
  { score: 86, raw: 175 },
  { score: 87, raw: 178 },
  { score: 88, raw: 181 },
  { score: 89, raw: 184 },
  { score: 90, raw: 188 },
  { score: 91, raw: 191 },
  { score: 92, raw: 194 },
  { score: 93, raw: 197 },
  { score: 94, raw: 201 },
  { score: 95, raw: 204 },
  { score: 96, raw: 207 },
  { score: 97, raw: 210 },
  { score: 98, raw: 214 },
  { score: 98, raw: 215 }, // edge case
  { score: 99, raw: 217 },
  { score: 99, raw: 218 }, // edge case
  { score: 100, raw: 220 },
  { score: 100, raw: 221 }, // edge case
];

test("PLK Scores are calculated correctly for females age 17-21", async ({
  page,
}) => {
  female17Plk.forEach((s) => {
    const score = getScoreIncreasingIsBetter("female", "17", "plk", s.raw);
    expect(score).toEqual(s.score);
  });
});
