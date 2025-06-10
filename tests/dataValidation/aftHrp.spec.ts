import { test, expect } from "@playwright/test";
import aftData from "../../data/aft_scores.json";

/**
 * AFT HAND RELEASE PUSHUP DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the HRP data used to score the AFT.
 */

// Male scoring intervals
const MALE_17_HRP_INTERVALS = 45;
const MALE_22_HRP_INTERVALS = 47;
const MALE_27_HRP_INTERVALS = 47;
const MALE_32_HRP_INTERVALS = 47;
const MALE_37_HRP_INTERVALS = 47;
const MALE_42_HRP_INTERVALS = 47;
const MALE_47_HRP_INTERVALS = 47;
const MALE_52_HRP_INTERVALS = 46;
const MALE_57_HRP_INTERVALS = 34;
const MALE_62_HRP_INTERVALS = 32;

// Female scoring intervals
const FEMALE_17_HRP_INTERVALS = 36;
const FEMALE_22_HRP_INTERVALS = 39;
const FEMALE_27_HRP_INTERVALS = 39;
const FEMALE_32_HRP_INTERVALS = 38;
const FEMALE_37_HRP_INTERVALS = 37;
const FEMALE_42_HRP_INTERVALS = 35;
const FEMALE_47_HRP_INTERVALS = 34;
const FEMALE_52_HRP_INTERVALS = 32;
const FEMALE_57_HRP_INTERVALS = 21;
const FEMALE_62_HRP_INTERVALS = 21;

/**
 * MALE TESTS
 */

test("Male 17-21 HRP data has the correct number of scoring intervals", async () => {
  const male17HRPScores = aftData.hrp.male[17];
  expect(male17HRPScores).toHaveLength(MALE_17_HRP_INTERVALS);
});

test("Male 22-26 HRP data has the correct number of scoring intervals", async () => {
  const male22HRPScores = aftData.hrp.male[22];
  expect(male22HRPScores).toHaveLength(MALE_22_HRP_INTERVALS);
});

test("Male 27-31 HRP data has the correct number of scoring intervals", async () => {
  const male27HRPScores = aftData.hrp.male[27];
  expect(male27HRPScores).toHaveLength(MALE_27_HRP_INTERVALS);
});

test("Male 32-36 HRP data has the correct number of scoring intervals", async () => {
  const male32HRPScores = aftData.hrp.male[32];
  expect(male32HRPScores).toHaveLength(MALE_32_HRP_INTERVALS);
});

test("Male 37-41 HRP data has the correct number of scoring intervals", async () => {
  const male37HRPScores = aftData.hrp.male[37];
  expect(male37HRPScores).toHaveLength(MALE_37_HRP_INTERVALS);
});

test("Male 42-46 HRP data has the correct number of scoring intervals", async () => {
  const male42HRPScores = aftData.hrp.male[42];
  expect(male42HRPScores).toHaveLength(MALE_42_HRP_INTERVALS);
});

test("Male 47-51 HRP data has the correct number of scoring intervals", async () => {
  const male47HRPScores = aftData.hrp.male[47];
  expect(male47HRPScores).toHaveLength(MALE_47_HRP_INTERVALS);
});

test("Male 52-56 HRP data has the correct number of scoring intervals", async () => {
  const male52HRPScores = aftData.hrp.male[52];
  expect(male52HRPScores).toHaveLength(MALE_52_HRP_INTERVALS);
});

test("Male 57-61 HRP data has the correct number of scoring intervals", async () => {
  const male57HRPScores = aftData.hrp.male[57];
  expect(male57HRPScores).toHaveLength(MALE_57_HRP_INTERVALS);
});

test("Male 62+ HRP data has the correct number of scoring intervals", async () => {
  const male62HRPScores = aftData.hrp.male[62];
  expect(male62HRPScores).toHaveLength(MALE_62_HRP_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 HRP data has the correct number of scoring intervals", async () => {
  const female17HRPScores = aftData.hrp.female[17];
  expect(female17HRPScores).toHaveLength(FEMALE_17_HRP_INTERVALS);
});

test("Female 22-26 HRP data has the correct number of scoring intervals", async () => {
  const female22HRPScores = aftData.hrp.female[22];
  expect(female22HRPScores).toHaveLength(FEMALE_22_HRP_INTERVALS);
});

test("Female 27-31 HRP data has the correct number of scoring intervals", async () => {
  const female27HRPScores = aftData.hrp.female[27];
  expect(female27HRPScores).toHaveLength(FEMALE_27_HRP_INTERVALS);
});

test("Female 32-36 HRP data has the correct number of scoring intervals", async () => {
  const female32HRPScores = aftData.hrp.female[32];
  expect(female32HRPScores).toHaveLength(FEMALE_32_HRP_INTERVALS);
});

test("Female 37-41 HRP data has the correct number of scoring intervals", async () => {
  const female37HRPScores = aftData.hrp.female[37];
  expect(female37HRPScores).toHaveLength(FEMALE_37_HRP_INTERVALS);
});

test("Female 42-46 HRP data has the correct number of scoring intervals", async () => {
  const female42HRPScores = aftData.hrp.female[42];
  expect(female42HRPScores).toHaveLength(FEMALE_42_HRP_INTERVALS);
});

test("Female 47-51 HRP data has the correct number of scoring intervals", async () => {
  const female47HRPScores = aftData.hrp.female[47];
  expect(female47HRPScores).toHaveLength(FEMALE_47_HRP_INTERVALS);
});

test("Female 52-56 HRP data has the correct number of scoring intervals", async () => {
  const female52HRPScores = aftData.hrp.female[52];
  expect(female52HRPScores).toHaveLength(FEMALE_52_HRP_INTERVALS);
});

test("Female 57-61 HRP data has the correct number of scoring intervals", async () => {
  const female57HRPScores = aftData.hrp.female[57];
  expect(female57HRPScores).toHaveLength(FEMALE_57_HRP_INTERVALS);
});

test("Female 62+ HRP data has the correct number of scoring intervals", async () => {
  const female62HRPScores = aftData.hrp.female[62];
  expect(female62HRPScores).toHaveLength(FEMALE_62_HRP_INTERVALS);
});
