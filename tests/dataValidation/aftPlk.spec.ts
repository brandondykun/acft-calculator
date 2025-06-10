import { test, expect } from "@playwright/test";
import aftData from "../../data/aft_scores.json";

/**
 * AFT PLANK DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the PLK data used to score the AFT.
 */

// Both genders and all age groups should have 71 scoring intervals for the Plank
const PLK_INTERVALS = 71;

/**
 * MALE TESTS
 */

test("Male 17-21 PLK data has the correct number of scoring intervals", async () => {
  const male17PLKScores = aftData.plk.male[17];
  expect(male17PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 22-26 PLK data has the correct number of scoring intervals", async () => {
  const male22PLKScores = aftData.plk.male[22];
  expect(male22PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 27-31 PLK data has the correct number of scoring intervals", async () => {
  const male27PLKScores = aftData.plk.male[27];
  expect(male27PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 32-36 PLK data has the correct number of scoring intervals", async () => {
  const male32PLKScores = aftData.plk.male[32];
  expect(male32PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 37-41 PLK data has the correct number of scoring intervals", async () => {
  const male37PLKScores = aftData.plk.male[37];
  expect(male37PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 42-46 PLK data has the correct number of scoring intervals", async () => {
  const male42PLKScores = aftData.plk.male[42];
  expect(male42PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 47-51 PLK data has the correct number of scoring intervals", async () => {
  const male47PLKScores = aftData.plk.male[47];
  expect(male47PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 52-56 PLK data has the correct number of scoring intervals", async () => {
  const male52PLKScores = aftData.plk.male[52];
  expect(male52PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 57-61 PLK data has the correct number of scoring intervals", async () => {
  const male57PLKScores = aftData.plk.male[57];
  expect(male57PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Male 62+ PLK data has the correct number of scoring intervals", async () => {
  const male62PLKScores = aftData.plk.male[62];
  expect(male62PLKScores).toHaveLength(PLK_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 PLK data has the correct number of scoring intervals", async () => {
  const female17PLKScores = aftData.plk.female[17];
  expect(female17PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 22-26 PLK data has the correct number of scoring intervals", async () => {
  const female22PLKScores = aftData.plk.female[22];
  expect(female22PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 27-31 PLK data has the correct number of scoring intervals", async () => {
  const female27PLKScores = aftData.plk.female[27];
  expect(female27PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 32-36 PLK data has the correct number of scoring intervals", async () => {
  const female32PLKScores = aftData.plk.female[32];
  expect(female32PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 37-41 PLK data has the correct number of scoring intervals", async () => {
  const female37PLKScores = aftData.plk.female[37];
  expect(female37PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 42-46 PLK data has the correct number of scoring intervals", async () => {
  const female42PLKScores = aftData.plk.female[42];
  expect(female42PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 47-51 PLK data has the correct number of scoring intervals", async () => {
  const female47PLKScores = aftData.plk.female[47];
  expect(female47PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 52-56 PLK data has the correct number of scoring intervals", async () => {
  const female52PLKScores = aftData.plk.female[52];
  expect(female52PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 57-61 PLK data has the correct number of scoring intervals", async () => {
  const female57PLKScores = aftData.plk.female[57];
  expect(female57PLKScores).toHaveLength(PLK_INTERVALS);
});

test("Female 62+ PLK data has the correct number of scoring intervals", async () => {
  const female62PLKScores = aftData.plk.female[62];
  expect(female62PLKScores).toHaveLength(PLK_INTERVALS);
});
