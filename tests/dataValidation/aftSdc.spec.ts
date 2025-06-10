import { test, expect } from "@playwright/test";
import aftData from "../../data/aft_scores.json";

/**
 * AFT SPRINT DRAG CARRY DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the SDC data used to score the AFT.
 */

// Male scoring intervals
const MALE_17_SDC_INTERVALS = 101;
const MALE_22_SDC_INTERVALS = 101;
const MALE_27_SDC_INTERVALS = 101;
const MALE_32_SDC_INTERVALS = 101;
const MALE_37_SDC_INTERVALS = 101;
const MALE_42_SDC_INTERVALS = 101;
const MALE_47_SDC_INTERVALS = 101;
const MALE_52_SDC_INTERVALS = 100;
const MALE_57_SDC_INTERVALS = 101;
const MALE_62_SDC_INTERVALS = 96;

// Female scoring intervals
const FEMALE_17_SDC_INTERVALS = 101;
const FEMALE_22_SDC_INTERVALS = 101;
const FEMALE_27_SDC_INTERVALS = 101;
const FEMALE_32_SDC_INTERVALS = 101;
const FEMALE_37_SDC_INTERVALS = 101;
const FEMALE_42_SDC_INTERVALS = 101;
const FEMALE_47_SDC_INTERVALS = 101;
const FEMALE_52_SDC_INTERVALS = 101;
const FEMALE_57_SDC_INTERVALS = 101;
const FEMALE_62_SDC_INTERVALS = 101;

/**
 * MALE TESTS
 */

test("Male 17-21 SDC data has the correct number of scoring intervals", async () => {
  const male17SDCScores = aftData.sdc.male[17];
  expect(male17SDCScores).toHaveLength(MALE_17_SDC_INTERVALS);
});

test("Male 22-26 SDC data has the correct number of scoring intervals", async () => {
  const male22SDCScores = aftData.sdc.male[22];
  expect(male22SDCScores).toHaveLength(MALE_22_SDC_INTERVALS);
});

test("Male 27-31 SDC data has the correct number of scoring intervals", async () => {
  const male27SDCScores = aftData.sdc.male[27];
  expect(male27SDCScores).toHaveLength(MALE_27_SDC_INTERVALS);
});

test("Male 32-36 SDC data has the correct number of scoring intervals", async () => {
  const male32SDCScores = aftData.sdc.male[32];
  expect(male32SDCScores).toHaveLength(MALE_32_SDC_INTERVALS);
});

test("Male 37-41 SDC data has the correct number of scoring intervals", async () => {
  const male37SDCScores = aftData.sdc.male[37];
  expect(male37SDCScores).toHaveLength(MALE_37_SDC_INTERVALS);
});

test("Male 42-46 SDC data has the correct number of scoring intervals", async () => {
  const male42SDCScores = aftData.sdc.male[42];
  expect(male42SDCScores).toHaveLength(MALE_42_SDC_INTERVALS);
});

test("Male 47-51 SDC data has the correct number of scoring intervals", async () => {
  const male47SDCScores = aftData.sdc.male[47];
  expect(male47SDCScores).toHaveLength(MALE_47_SDC_INTERVALS);
});

test("Male 52-56 SDC data has the correct number of scoring intervals", async () => {
  const male52SDCScores = aftData.sdc.male[52];
  expect(male52SDCScores).toHaveLength(MALE_52_SDC_INTERVALS);
});

test("Male 57-61 SDC data has the correct number of scoring intervals", async () => {
  const male57SDCScores = aftData.sdc.male[57];
  expect(male57SDCScores).toHaveLength(MALE_57_SDC_INTERVALS);
});

test("Male 62+ SDC data has the correct number of scoring intervals", async () => {
  const male62SDCScores = aftData.sdc.male[62];
  expect(male62SDCScores).toHaveLength(MALE_62_SDC_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 SDC data has the correct number of scoring intervals", async () => {
  const female17SDCScores = aftData.sdc.female[17];
  expect(female17SDCScores).toHaveLength(FEMALE_17_SDC_INTERVALS);
});

test("Female 22-26 SDC data has the correct number of scoring intervals", async () => {
  const female22SDCScores = aftData.sdc.female[22];
  expect(female22SDCScores).toHaveLength(FEMALE_22_SDC_INTERVALS);
});

test("Female 27-31 SDC data has the correct number of scoring intervals", async () => {
  const female27SDCScores = aftData.sdc.female[27];
  expect(female27SDCScores).toHaveLength(FEMALE_27_SDC_INTERVALS);
});

test("Female 32-36 SDC data has the correct number of scoring intervals", async () => {
  const female32SDCScores = aftData.sdc.female[32];
  expect(female32SDCScores).toHaveLength(FEMALE_32_SDC_INTERVALS);
});

test("Female 37-41 SDC data has the correct number of scoring intervals", async () => {
  const female37SDCScores = aftData.sdc.female[37];
  expect(female37SDCScores).toHaveLength(FEMALE_37_SDC_INTERVALS);
});

test("Female 42-46 SDC data has the correct number of scoring intervals", async () => {
  const female42SDCScores = aftData.sdc.female[42];
  expect(female42SDCScores).toHaveLength(FEMALE_42_SDC_INTERVALS);
});

test("Female 47-51 SDC data has the correct number of scoring intervals", async () => {
  const female47SDCScores = aftData.sdc.female[47];
  expect(female47SDCScores).toHaveLength(FEMALE_47_SDC_INTERVALS);
});

test("Female 52-56 SDC data has the correct number of scoring intervals", async () => {
  const female52SDCScores = aftData.sdc.female[52];
  expect(female52SDCScores).toHaveLength(FEMALE_52_SDC_INTERVALS);
});

test("Female 57-61 SDC data has the correct number of scoring intervals", async () => {
  const female57SDCScores = aftData.sdc.female[57];
  expect(female57SDCScores).toHaveLength(FEMALE_57_SDC_INTERVALS);
});

test("Female 62+ SDC data has the correct number of scoring intervals", async () => {
  const female62SDCScores = aftData.sdc.female[62];
  expect(female62SDCScores).toHaveLength(FEMALE_62_SDC_INTERVALS);
});
