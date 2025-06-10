import { test, expect } from "@playwright/test";
import aftData from "../../data/aft_scores.json";

/**
 * AFT MAXIMUM DEAD LIFT DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the MDL data used to score the AFT.
 */

// Male scoring intervals
const MALE_17_MDL_INTERVALS = 26;
const MALE_22_MDL_INTERVALS = 27;
const MALE_27_MDL_INTERVALS = 27;
const MALE_32_MDL_INTERVALS = 28;
const MALE_37_MDL_INTERVALS = 28;
const MALE_42_MDL_INTERVALS = 28;
const MALE_47_MDL_INTERVALS = 27;
const MALE_52_MDL_INTERVALS = 26;
const MALE_57_MDL_INTERVALS = 18;
const MALE_62_MDL_INTERVALS = 16;

// Female scoring intervals
const FEMALE_17_MDL_INTERVALS = 17;
const FEMALE_22_MDL_INTERVALS = 18;
const FEMALE_27_MDL_INTERVALS = 19;
const FEMALE_32_MDL_INTERVALS = 18;
const FEMALE_37_MDL_INTERVALS = 17;
const FEMALE_42_MDL_INTERVALS = 16;
const FEMALE_47_MDL_INTERVALS = 15;
const FEMALE_52_MDL_INTERVALS = 14;
const FEMALE_57_MDL_INTERVALS = 12;
const FEMALE_62_MDL_INTERVALS = 12;

/**
 * MALE TESTS
 */

test("Male 17-21 MDL data has the correct number of scoring intervals", async () => {
  const male17MDLScores = aftData.mdl.male[17];
  expect(male17MDLScores).toHaveLength(MALE_17_MDL_INTERVALS);
});

test("Male 22-26 MDL data has the correct number of scoring intervals", async () => {
  const male22MDLScores = aftData.mdl.male[22];
  expect(male22MDLScores).toHaveLength(MALE_22_MDL_INTERVALS);
});

test("Male 27-31 MDL data has the correct number of scoring intervals", async () => {
  const male27MDLScores = aftData.mdl.male[27];
  expect(male27MDLScores).toHaveLength(MALE_27_MDL_INTERVALS);
});

test("Male 32-36 MDL data has the correct number of scoring intervals", async () => {
  const male32MDLScores = aftData.mdl.male[32];
  expect(male32MDLScores).toHaveLength(MALE_32_MDL_INTERVALS);
});

test("Male 37-41 MDL data has the correct number of scoring intervals", async () => {
  const male37MDLScores = aftData.mdl.male[37];
  expect(male37MDLScores).toHaveLength(MALE_37_MDL_INTERVALS);
});

test("Male 42-46 MDL data has the correct number of scoring intervals", async () => {
  const male42MDLScores = aftData.mdl.male[42];
  expect(male42MDLScores).toHaveLength(MALE_42_MDL_INTERVALS);
});

test("Male 47-51 MDL data has the correct number of scoring intervals", async () => {
  const male47MDLScores = aftData.mdl.male[47];
  expect(male47MDLScores).toHaveLength(MALE_47_MDL_INTERVALS);
});

test("Male 52-56 MDL data has the correct number of scoring intervals", async () => {
  const male52MDLScores = aftData.mdl.male[52];
  expect(male52MDLScores).toHaveLength(MALE_52_MDL_INTERVALS);
});

test("Male 57-61 MDL data has the correct number of scoring intervals", async () => {
  const male57MDLScores = aftData.mdl.male[57];
  expect(male57MDLScores).toHaveLength(MALE_57_MDL_INTERVALS);
});

test("Male 62+ MDL data has the correct number of scoring intervals", async () => {
  const male62MDLScores = aftData.mdl.male[62];
  expect(male62MDLScores).toHaveLength(MALE_62_MDL_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 MDL data has the correct number of scoring intervals", async () => {
  const female17MDLScores = aftData.mdl.female[17];
  expect(female17MDLScores).toHaveLength(FEMALE_17_MDL_INTERVALS);
});

test("Female 22-26 MDL data has the correct number of scoring intervals", async () => {
  const female22MDLScores = aftData.mdl.female[22];
  expect(female22MDLScores).toHaveLength(FEMALE_22_MDL_INTERVALS);
});

test("Female 27-31 MDL data has the correct number of scoring intervals", async () => {
  const female27MDLScores = aftData.mdl.female[27];
  expect(female27MDLScores).toHaveLength(FEMALE_27_MDL_INTERVALS);
});

test("Female 32-36 MDL data has the correct number of scoring intervals", async () => {
  const female32MDLScores = aftData.mdl.female[32];
  expect(female32MDLScores).toHaveLength(FEMALE_32_MDL_INTERVALS);
});

test("Female 37-41 MDL data has the correct number of scoring intervals", async () => {
  const female37MDLScores = aftData.mdl.female[37];
  expect(female37MDLScores).toHaveLength(FEMALE_37_MDL_INTERVALS);
});

test("Female 42-46 MDL data has the correct number of scoring intervals", async () => {
  const female42MDLScores = aftData.mdl.female[42];
  expect(female42MDLScores).toHaveLength(FEMALE_42_MDL_INTERVALS);
});

test("Female 47-51 MDL data has the correct number of scoring intervals", async () => {
  const female47MDLScores = aftData.mdl.female[47];
  expect(female47MDLScores).toHaveLength(FEMALE_47_MDL_INTERVALS);
});

test("Female 52-56 MDL data has the correct number of scoring intervals", async () => {
  const female52MDLScores = aftData.mdl.female[52];
  expect(female52MDLScores).toHaveLength(FEMALE_52_MDL_INTERVALS);
});

test("Female 57-61 MDL data has the correct number of scoring intervals", async () => {
  const female57MDLScores = aftData.mdl.female[57];
  expect(female57MDLScores).toHaveLength(FEMALE_57_MDL_INTERVALS);
});

test("Female 62+ MDL data has the correct number of scoring intervals", async () => {
  const female62MDLScores = aftData.mdl.female[62];
  expect(female62MDLScores).toHaveLength(FEMALE_62_MDL_INTERVALS);
});
