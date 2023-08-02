import { test, expect } from "@playwright/test";
import data from "../../data/data.json";

/**
 * MAXIMUM DEAD LIFT DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the MDL data used to score the ACFT.
 */

// Scoring intervals
const MALE_17_MDL_INTERVALS = 27;
const FEMALE_17_MDL_INTERVALS = 16;
const MALE_22_MDL_INTERVALS = 26;
const FEMALE_22_MDL_INTERVALS = 18;
const MALE_27_MDL_INTERVALS = 27;
const FEMALE_27_MDL_INTERVALS = 18;
const MALE_32_MDL_INTERVALS = 27;
const FEMALE_32_MDL_INTERVALS = 18;
const MALE_37_MDL_INTERVALS = 27;
const FEMALE_37_MDL_INTERVALS = 16;
const MALE_42_MDL_INTERVALS = 27;
const FEMALE_42_MDL_INTERVALS = 16;
const MALE_47_MDL_INTERVALS = 26;
const FEMALE_47_MDL_INTERVALS = 14;
const MALE_52_MDL_INTERVALS = 22;
const FEMALE_52_MDL_INTERVALS = 14;
const MALE_57_MDL_INTERVALS = 18;
const FEMALE_57_MDL_INTERVALS = 12;
const MALE_62_MDL_INTERVALS = 16;
const FEMALE_62_MDL_INTERVALS = 12;

/**
 * MALE TESTS
 */

test("Male 17-21 MDL data has the correct number of scoring intervals", async () => {
  const male17MDLScores = data.mdl.male[17];
  expect(male17MDLScores).toHaveLength(MALE_17_MDL_INTERVALS);
});

test("Male 22-26 MDL data has the correct number of scoring intervals", async () => {
  const male22MDLScores = data.mdl.male[22];
  expect(male22MDLScores).toHaveLength(MALE_22_MDL_INTERVALS);
});

test("Male 27-31 MDL data has the correct number of scoring intervals", async () => {
  const male27MDLScores = data.mdl.male[27];
  expect(male27MDLScores).toHaveLength(MALE_27_MDL_INTERVALS);
});

test("Male 32-36 MDL data has the correct number of scoring intervals", async () => {
  const male32MDLScores = data.mdl.male[32];
  expect(male32MDLScores).toHaveLength(MALE_32_MDL_INTERVALS);
});

test("Male 37-41 MDL data has the correct number of scoring intervals", async () => {
  const male37MDLScores = data.mdl.male[37];
  expect(male37MDLScores).toHaveLength(MALE_37_MDL_INTERVALS);
});

test("Male 42-46 MDL data has the correct number of scoring intervals", async () => {
  const male42MDLScores = data.mdl.male[42];
  expect(male42MDLScores).toHaveLength(MALE_42_MDL_INTERVALS);
});

test("Male 47-51 MDL data has the correct number of scoring intervals", async () => {
  const male47MDLScores = data.mdl.male[47];
  expect(male47MDLScores).toHaveLength(MALE_47_MDL_INTERVALS);
});

test("Male 52-56 MDL data has the correct number of scoring intervals", async () => {
  const male52MDLScores = data.mdl.male[52];
  expect(male52MDLScores).toHaveLength(MALE_52_MDL_INTERVALS);
});

test("Male 57-61 MDL data has the correct number of scoring intervals", async () => {
  const male57MDLScores = data.mdl.male[57];
  expect(male57MDLScores).toHaveLength(MALE_57_MDL_INTERVALS);
});

test("Male 62+ MDL data has the correct number of scoring intervals", async () => {
  const male62MDLScores = data.mdl.male[62];
  expect(male62MDLScores).toHaveLength(MALE_62_MDL_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 MDL data has the correct number of scoring intervals", async () => {
  const female17MDLScores = data.mdl.female[17];
  expect(female17MDLScores).toHaveLength(FEMALE_17_MDL_INTERVALS);
});

test("Female 22-26 MDL data has the correct number of scoring intervals", async () => {
  const female22MDLScores = data.mdl.female[22];
  expect(female22MDLScores).toHaveLength(FEMALE_22_MDL_INTERVALS);
});

test("Female 27-31 MDL data has the correct number of scoring intervals", async () => {
  const female27MDLScores = data.mdl.female[27];
  expect(female27MDLScores).toHaveLength(FEMALE_27_MDL_INTERVALS);
});

test("Female 32-36 MDL data has the correct number of scoring intervals", async () => {
  const female32MDLScores = data.mdl.female[32];
  expect(female32MDLScores).toHaveLength(FEMALE_32_MDL_INTERVALS);
});

test("Female 37-41 MDL data has the correct number of scoring intervals", async () => {
  const female37MDLScores = data.mdl.female[37];
  expect(female37MDLScores).toHaveLength(FEMALE_37_MDL_INTERVALS);
});

test("Female 42-46 MDL data has the correct number of scoring intervals", async () => {
  const female42MDLScores = data.mdl.female[42];
  expect(female42MDLScores).toHaveLength(FEMALE_42_MDL_INTERVALS);
});

test("Female 47-51 MDL data has the correct number of scoring intervals", async () => {
  const female47MDLScores = data.mdl.female[47];
  expect(female47MDLScores).toHaveLength(FEMALE_47_MDL_INTERVALS);
});

test("Female 52-56 MDL data has the correct number of scoring intervals", async () => {
  const female52MDLScores = data.mdl.female[52];
  expect(female52MDLScores).toHaveLength(FEMALE_52_MDL_INTERVALS);
});

test("Female 57-61 MDL data has the correct number of scoring intervals", async () => {
  const female57MDLScores = data.mdl.female[57];
  expect(female57MDLScores).toHaveLength(FEMALE_57_MDL_INTERVALS);
});

test("Female 62+ MDL data has the correct number of scoring intervals", async () => {
  const female62MDLScores = data.mdl.female[62];
  expect(female62MDLScores).toHaveLength(FEMALE_62_MDL_INTERVALS);
});
