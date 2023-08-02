import { test, expect } from "@playwright/test";
import data from "../../data/data.json";

/**
 * HAND RELEASE PUSHUP DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the HRP data used to score the ACFT.
 */

// Scoring intervals
const MALE_17_HRP_INTERVALS = 44;
const FEMALE_17_HRP_INTERVALS = 42;
const MALE_22_HRP_INTERVALS = 43;
const FEMALE_22_HRP_INTERVALS = 38;
const MALE_27_HRP_INTERVALS = 44;
const FEMALE_27_HRP_INTERVALS = 36;
const MALE_32_HRP_INTERVALS = 45;
const FEMALE_32_HRP_INTERVALS = 33;
const MALE_37_HRP_INTERVALS = 45;
const FEMALE_37_HRP_INTERVALS = 29;
const MALE_42_HRP_INTERVALS = 43;
const FEMALE_42_HRP_INTERVALS = 27;
const MALE_47_HRP_INTERVALS = 39;
const FEMALE_47_HRP_INTERVALS = 27;
const MALE_52_HRP_INTERVALS = 37;
const FEMALE_52_HRP_INTERVALS = 24;
const MALE_57_HRP_INTERVALS = 34;
const FEMALE_57_HRP_INTERVALS = 21;
const MALE_62_HRP_INTERVALS = 32;
const FEMALE_62_HRP_INTERVALS = 21;

/**
 * MALE TESTS
 */

test("Male 17-21 HRP data has the correct number of scoring intervals", async () => {
  const male17HRPScores = data.hrp.male[17];
  expect(male17HRPScores).toHaveLength(MALE_17_HRP_INTERVALS);
});

test("Male 22-26 HRP data has the correct number of scoring intervals", async () => {
  const male22HRPScores = data.hrp.male[22];
  expect(male22HRPScores).toHaveLength(MALE_22_HRP_INTERVALS);
});

test("Male 27-31 HRP data has the correct number of scoring intervals", async () => {
  const male27HRPScores = data.hrp.male[27];
  expect(male27HRPScores).toHaveLength(MALE_27_HRP_INTERVALS);
});

test("Male 32-36 HRP data has the correct number of scoring intervals", async () => {
  const male32HRPScores = data.hrp.male[32];
  expect(male32HRPScores).toHaveLength(MALE_32_HRP_INTERVALS);
});

test("Male 37-41 HRP data has the correct number of scoring intervals", async () => {
  const male37HRPScores = data.hrp.male[37];
  expect(male37HRPScores).toHaveLength(MALE_37_HRP_INTERVALS);
});

test("Male 42-46 HRP data has the correct number of scoring intervals", async () => {
  const male42HRPScores = data.hrp.male[42];
  expect(male42HRPScores).toHaveLength(MALE_42_HRP_INTERVALS);
});

test("Male 47-51 HRP data has the correct number of scoring intervals", async () => {
  const male47HRPScores = data.hrp.male[47];
  expect(male47HRPScores).toHaveLength(MALE_47_HRP_INTERVALS);
});

test("Male 52-56 HRP data has the correct number of scoring intervals", async () => {
  const male52HRPScores = data.hrp.male[52];
  expect(male52HRPScores).toHaveLength(MALE_52_HRP_INTERVALS);
});

test("Male 57-61 HRP data has the correct number of scoring intervals", async () => {
  const male57HRPScores = data.hrp.male[57];
  expect(male57HRPScores).toHaveLength(MALE_57_HRP_INTERVALS);
});

test("Male 62+ HRP data has the correct number of scoring intervals", async () => {
  const male62HRPScores = data.hrp.male[62];
  expect(male62HRPScores).toHaveLength(MALE_62_HRP_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 HRP data has the correct number of scoring intervals", async () => {
  const female17HRPScores = data.hrp.female[17];
  expect(female17HRPScores).toHaveLength(FEMALE_17_HRP_INTERVALS);
});

test("Female 22-26 HRP data has the correct number of scoring intervals", async () => {
  const female22HRPScores = data.hrp.female[22];
  expect(female22HRPScores).toHaveLength(FEMALE_22_HRP_INTERVALS);
});

test("Female 27-31 HRP data has the correct number of scoring intervals", async () => {
  const female27HRPScores = data.hrp.female[27];
  expect(female27HRPScores).toHaveLength(FEMALE_27_HRP_INTERVALS);
});

test("Female 32-36 HRP data has the correct number of scoring intervals", async () => {
  const female32HRPScores = data.hrp.female[32];
  expect(female32HRPScores).toHaveLength(FEMALE_32_HRP_INTERVALS);
});

test("Female 37-41 HRP data has the correct number of scoring intervals", async () => {
  const female37HRPScores = data.hrp.female[37];
  expect(female37HRPScores).toHaveLength(FEMALE_37_HRP_INTERVALS);
});

test("Female 42-46 HRP data has the correct number of scoring intervals", async () => {
  const female42HRPScores = data.hrp.female[42];
  expect(female42HRPScores).toHaveLength(FEMALE_42_HRP_INTERVALS);
});

test("Female 47-51 HRP data has the correct number of scoring intervals", async () => {
  const female47HRPScores = data.hrp.female[47];
  expect(female47HRPScores).toHaveLength(FEMALE_47_HRP_INTERVALS);
});

test("Female 52-56 HRP data has the correct number of scoring intervals", async () => {
  const female52HRPScores = data.hrp.female[52];
  expect(female52HRPScores).toHaveLength(FEMALE_52_HRP_INTERVALS);
});

test("Female 57-61 HRP data has the correct number of scoring intervals", async () => {
  const female57HRPScores = data.hrp.female[57];
  expect(female57HRPScores).toHaveLength(FEMALE_57_HRP_INTERVALS);
});

test("Female 62+ HRP data has the correct number of scoring intervals", async () => {
  const female62HRPScores = data.hrp.female[62];
  expect(female62HRPScores).toHaveLength(FEMALE_62_HRP_INTERVALS);
});
