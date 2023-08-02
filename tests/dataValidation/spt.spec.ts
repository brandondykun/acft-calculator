import { test, expect } from "@playwright/test";
import data from "../../data/data.json";

/**
 * STANDING POWER THROW DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the SPT data used to score the ACFT.
 */

// Scoring intervals
const MALE_17_SPT_INTERVALS = 61;
const FEMALE_17_SPT_INTERVALS = 45;
const MALE_22_SPT_INTERVALS = 62;
const FEMALE_22_SPT_INTERVALS = 47; // removed one because there is a duplicate interval
const MALE_27_SPT_INTERVALS = 61;
const FEMALE_27_SPT_INTERVALS = 48;
const MALE_32_SPT_INTERVALS = 62;
const FEMALE_32_SPT_INTERVALS = 46;
const MALE_37_SPT_INTERVALS = 61;
const FEMALE_37_SPT_INTERVALS = 44;
const MALE_42_SPT_INTERVALS = 59;
const FEMALE_42_SPT_INTERVALS = 46; // removed one because there is a duplicate interval
const MALE_47_SPT_INTERVALS = 58;
const FEMALE_47_SPT_INTERVALS = 42;
const MALE_52_SPT_INTERVALS = 54;
const FEMALE_52_SPT_INTERVALS = 41;
const MALE_57_SPT_INTERVALS = 50;
const FEMALE_57_SPT_INTERVALS = 40;
const MALE_62_SPT_INTERVALS = 42;
const FEMALE_62_SPT_INTERVALS = 40;

/**
 * MALE TESTS
 */

test("Male 17-21 SPT data has the correct number of scoring intervals", async () => {
  const male17SPTScores = data.spt.male[17];
  expect(male17SPTScores).toHaveLength(MALE_17_SPT_INTERVALS);
});

test("Male 22-26 SPT data has the correct number of scoring intervals", async () => {
  const male22SPTScores = data.spt.male[22];
  expect(male22SPTScores).toHaveLength(MALE_22_SPT_INTERVALS);
});

test("Male 27-31 SPT data has the correct number of scoring intervals", async () => {
  const male27SPTScores = data.spt.male[27];
  expect(male27SPTScores).toHaveLength(MALE_27_SPT_INTERVALS);
});

test("Male 32-36 SPT data has the correct number of scoring intervals", async () => {
  const male32SPTScores = data.spt.male[32];
  expect(male32SPTScores).toHaveLength(MALE_32_SPT_INTERVALS);
});

test("Male 37-41 SPT data has the correct number of scoring intervals", async () => {
  const male37SPTScores = data.spt.male[37];
  expect(male37SPTScores).toHaveLength(MALE_37_SPT_INTERVALS);
});

test("Male 42-46 SPT data has the correct number of scoring intervals", async () => {
  const male42SPTScores = data.spt.male[42];
  expect(male42SPTScores).toHaveLength(MALE_42_SPT_INTERVALS);
});

test("Male 47-51 SPT data has the correct number of scoring intervals", async () => {
  const male47SPTScores = data.spt.male[47];
  expect(male47SPTScores).toHaveLength(MALE_47_SPT_INTERVALS);
});

test("Male 52-56 SPT data has the correct number of scoring intervals", async () => {
  const male52SPTScores = data.spt.male[52];
  expect(male52SPTScores).toHaveLength(MALE_52_SPT_INTERVALS);
});

test("Male 57-61 SPT data has the correct number of scoring intervals", async () => {
  const male57SPTScores = data.spt.male[57];
  expect(male57SPTScores).toHaveLength(MALE_57_SPT_INTERVALS);
});

test("Male 62+ SPT data has the correct number of scoring intervals", async () => {
  const male62SPTScores = data.spt.male[62];
  expect(male62SPTScores).toHaveLength(MALE_62_SPT_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 SPT data has the correct number of scoring intervals", async () => {
  const female17SPTScores = data.spt.female[17];
  expect(female17SPTScores).toHaveLength(FEMALE_17_SPT_INTERVALS);
});

test("Female 22-26 SPT data has the correct number of scoring intervals", async () => {
  const female22SPTScores = data.spt.female[22];
  expect(female22SPTScores).toHaveLength(FEMALE_22_SPT_INTERVALS);
});

test("Female 27-31 SPT data has the correct number of scoring intervals", async () => {
  const female27SPTScores = data.spt.female[27];
  expect(female27SPTScores).toHaveLength(FEMALE_27_SPT_INTERVALS);
});

test("Female 32-36 SPT data has the correct number of scoring intervals", async () => {
  const female32SPTScores = data.spt.female[32];
  expect(female32SPTScores).toHaveLength(FEMALE_32_SPT_INTERVALS);
});

test("Female 37-41 SPT data has the correct number of scoring intervals", async () => {
  const female37SPTScores = data.spt.female[37];
  expect(female37SPTScores).toHaveLength(FEMALE_37_SPT_INTERVALS);
});

test("Female 42-46 SPT data has the correct number of scoring intervals", async () => {
  const female42SPTScores = data.spt.female[42];
  expect(female42SPTScores).toHaveLength(FEMALE_42_SPT_INTERVALS);
});

test("Female 47-51 SPT data has the correct number of scoring intervals", async () => {
  const female47SPTScores = data.spt.female[47];
  expect(female47SPTScores).toHaveLength(FEMALE_47_SPT_INTERVALS);
});

test("Female 52-56 SPT data has the correct number of scoring intervals", async () => {
  const female52SPTScores = data.spt.female[52];
  expect(female52SPTScores).toHaveLength(FEMALE_52_SPT_INTERVALS);
});

test("Female 57-61 SPT data has the correct number of scoring intervals", async () => {
  const female57SPTScores = data.spt.female[57];
  expect(female57SPTScores).toHaveLength(FEMALE_57_SPT_INTERVALS);
});

test("Female 62+ SPT data has the correct number of scoring intervals", async () => {
  const female62SPTScores = data.spt.female[62];
  expect(female62SPTScores).toHaveLength(FEMALE_62_SPT_INTERVALS);
});
