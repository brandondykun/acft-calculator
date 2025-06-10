import { test, expect } from "@playwright/test";
import aftData from "../../data/aft_scores.json";

/**
 * AFT TWO MILE RUN DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the TMR data used to score the AFT.
 */

// Male scoring intervals
const MALE_17_TMR_INTERVALS = 100;
const MALE_22_TMR_INTERVALS = 98;
const MALE_27_TMR_INTERVALS = 97;
const MALE_32_TMR_INTERVALS = 100;
const MALE_37_TMR_INTERVALS = 99;
const MALE_42_TMR_INTERVALS = 99;
const MALE_47_TMR_INTERVALS = 99;
const MALE_52_TMR_INTERVALS = 98;
const MALE_57_TMR_INTERVALS = 101;
const MALE_62_TMR_INTERVALS = 101;

// Female scoring intervals
const FEMALE_17_TMR_INTERVALS = 100;
const FEMALE_22_TMR_INTERVALS = 100;
const FEMALE_27_TMR_INTERVALS = 101;
const FEMALE_32_TMR_INTERVALS = 101;
const FEMALE_37_TMR_INTERVALS = 101;
const FEMALE_42_TMR_INTERVALS = 101;
const FEMALE_47_TMR_INTERVALS = 101;
const FEMALE_52_TMR_INTERVALS = 101;
const FEMALE_57_TMR_INTERVALS = 101;
const FEMALE_62_TMR_INTERVALS = 101;

/**
 * MALE TESTS
 */

test("Male 17-21 TMR data has the correct number of scoring intervals", async () => {
  const male17TMRScores = aftData.tmr.male[17];
  expect(male17TMRScores).toHaveLength(MALE_17_TMR_INTERVALS);
});

test("Male 22-26 TMR data has the correct number of scoring intervals", async () => {
  const male22TMRScores = aftData.tmr.male[22];
  expect(male22TMRScores).toHaveLength(MALE_22_TMR_INTERVALS);
});

test("Male 27-31 TMR data has the correct number of scoring intervals", async () => {
  const male27TMRScores = aftData.tmr.male[27];
  expect(male27TMRScores).toHaveLength(MALE_27_TMR_INTERVALS);
});

test("Male 32-36 TMR data has the correct number of scoring intervals", async () => {
  const male32TMRScores = aftData.tmr.male[32];
  expect(male32TMRScores).toHaveLength(MALE_32_TMR_INTERVALS);
});

test("Male 37-41 TMR data has the correct number of scoring intervals", async () => {
  const male37TMRScores = aftData.tmr.male[37];
  expect(male37TMRScores).toHaveLength(MALE_37_TMR_INTERVALS);
});

test("Male 42-46 TMR data has the correct number of scoring intervals", async () => {
  const male42TMRScores = aftData.tmr.male[42];
  expect(male42TMRScores).toHaveLength(MALE_42_TMR_INTERVALS);
});

test("Male 47-51 TMR data has the correct number of scoring intervals", async () => {
  const male47TMRScores = aftData.tmr.male[47];
  expect(male47TMRScores).toHaveLength(MALE_47_TMR_INTERVALS);
});

test("Male 52-56 TMR data has the correct number of scoring intervals", async () => {
  const male52TMRScores = aftData.tmr.male[52];
  expect(male52TMRScores).toHaveLength(MALE_52_TMR_INTERVALS);
});

test("Male 57-61 TMR data has the correct number of scoring intervals", async () => {
  const male57TMRScores = aftData.tmr.male[57];
  expect(male57TMRScores).toHaveLength(MALE_57_TMR_INTERVALS);
});

test("Male 62+ TMR data has the correct number of scoring intervals", async () => {
  const male62TMRScores = aftData.tmr.male[62];
  expect(male62TMRScores).toHaveLength(MALE_62_TMR_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 TMR data has the correct number of scoring intervals", async () => {
  const female17TMRScores = aftData.tmr.female[17];
  expect(female17TMRScores).toHaveLength(FEMALE_17_TMR_INTERVALS);
});

test("Female 22-26 TMR data has the correct number of scoring intervals", async () => {
  const female22TMRScores = aftData.tmr.female[22];
  expect(female22TMRScores).toHaveLength(FEMALE_22_TMR_INTERVALS);
});

test("Female 27-31 TMR data has the correct number of scoring intervals", async () => {
  const female27TMRScores = aftData.tmr.female[27];
  expect(female27TMRScores).toHaveLength(FEMALE_27_TMR_INTERVALS);
});

test("Female 32-36 TMR data has the correct number of scoring intervals", async () => {
  const female32TMRScores = aftData.tmr.female[32];
  expect(female32TMRScores).toHaveLength(FEMALE_32_TMR_INTERVALS);
});

test("Female 37-41 TMR data has the correct number of scoring intervals", async () => {
  const female37TMRScores = aftData.tmr.female[37];
  expect(female37TMRScores).toHaveLength(FEMALE_37_TMR_INTERVALS);
});

test("Female 42-46 TMR data has the correct number of scoring intervals", async () => {
  const female42TMRScores = aftData.tmr.female[42];
  expect(female42TMRScores).toHaveLength(FEMALE_42_TMR_INTERVALS);
});

test("Female 47-51 TMR data has the correct number of scoring intervals", async () => {
  const female47TMRScores = aftData.tmr.female[47];
  expect(female47TMRScores).toHaveLength(FEMALE_47_TMR_INTERVALS);
});

test("Female 52-56 TMR data has the correct number of scoring intervals", async () => {
  const female52TMRScores = aftData.tmr.female[52];
  expect(female52TMRScores).toHaveLength(FEMALE_52_TMR_INTERVALS);
});

test("Female 57-61 TMR data has the correct number of scoring intervals", async () => {
  const female57TMRScores = aftData.tmr.female[57];
  expect(female57TMRScores).toHaveLength(FEMALE_57_TMR_INTERVALS);
});

test("Female 62+ TMR data has the correct number of scoring intervals", async () => {
  const female62TMRScores = aftData.tmr.female[62];
  expect(female62TMRScores).toHaveLength(FEMALE_62_TMR_INTERVALS);
});
