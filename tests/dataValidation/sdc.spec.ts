import { test, expect } from "@playwright/test";
import data from "../../data/data.json";

/**
 * SPRINT DRAG CARRY DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the SDC data used to score the ACFT.
 */

// Scoring intervals
const SDC_INTERVALS = 101;
// Male 52-56 intervals
// Removed one interval because of duplicate scores
const MALE_52_INTERVALS = 100;
// Males over 62 only have 96 scoring intervals
const MALE_OVER_62_INTERVALS = 96;

/**
 * MALE TESTS
 */

test("Male 17-21 SDC data has the correct number of scoring intervals", async () => {
  const male17SDCScores = data.sdc.male[17];
  expect(male17SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 22-26 SDC data has the correct number of scoring intervals", async () => {
  const male22SDCScores = data.sdc.male[22];
  expect(male22SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 27-31 SDC data has the correct number of scoring intervals", async () => {
  const male27SDCScores = data.sdc.male[27];
  expect(male27SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 32-36 SDC data has the correct number of scoring intervals", async () => {
  const male32SDCScores = data.sdc.male[32];
  expect(male32SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 37-41 SDC data has the correct number of scoring intervals", async () => {
  const male37SDCScores = data.sdc.male[37];
  expect(male37SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 42-46 SDC data has the correct number of scoring intervals", async () => {
  const male42SDCScores = data.sdc.male[42];
  expect(male42SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 47-51 SDC data has the correct number of scoring intervals", async () => {
  const male47SDCScores = data.sdc.male[47];
  expect(male47SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 52-56 SDC data has the correct number of scoring intervals", async () => {
  const male52SDCScores = data.sdc.male[52];
  expect(male52SDCScores).toHaveLength(MALE_52_INTERVALS);
});

test("Male 57-61 SDC data has the correct number of scoring intervals", async () => {
  const male57SDCScores = data.sdc.male[57];
  expect(male57SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Male 62+ SDC data has the correct number of scoring intervals", async () => {
  const male62SDCScores = data.sdc.male[62];
  expect(male62SDCScores).toHaveLength(MALE_OVER_62_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 SDC data has the correct number of scoring intervals", async () => {
  const female17SDCScores = data.sdc.female[17];
  expect(female17SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 22-26 SDC data has the correct number of scoring intervals", async () => {
  const female22SDCScores = data.sdc.female[22];
  expect(female22SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 27-31 SDC data has the correct number of scoring intervals", async () => {
  const female27SDCScores = data.sdc.female[27];
  expect(female27SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 32-36 SDC data has the correct number of scoring intervals", async () => {
  const female32SDCScores = data.sdc.female[32];
  expect(female32SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 37-41 SDC data has the correct number of scoring intervals", async () => {
  const female37SDCScores = data.sdc.female[37];
  expect(female37SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 42-46 SDC data has the correct number of scoring intervals", async () => {
  const female42SDCScores = data.sdc.female[42];
  expect(female42SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 47-51 SDC data has the correct number of scoring intervals", async () => {
  const female47SDCScores = data.sdc.female[47];
  expect(female47SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 52-56 SDC data has the correct number of scoring intervals", async () => {
  const female52SDCScores = data.sdc.female[52];
  expect(female52SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 57-61 SDC data has the correct number of scoring intervals", async () => {
  const female57SDCScores = data.sdc.female[57];
  expect(female57SDCScores).toHaveLength(SDC_INTERVALS);
});

test("Female 62+ SDC data has the correct number of scoring intervals", async () => {
  const female62SDCScores = data.sdc.female[62];
  expect(female62SDCScores).toHaveLength(SDC_INTERVALS);
});
