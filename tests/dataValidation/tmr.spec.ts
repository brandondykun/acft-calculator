import { test, expect } from "@playwright/test";
import data from "../../data/data.json";

/**
 * TWO MILE RUN DATA VALIDATION TESTS
 *
 * These tests validate the completeness of the TMR data used to score the ACFT.
 */

// Both genders and all age groups should have 101 scoring intervals for the Two Mile Run
const TMR_INTERVALS = 101;

/**
 * MALE TESTS
 */

test("Male 17-21 TMR data has the correct number of scoring intervals", async () => {
  const male17TMRScores = data.tmr.male[17];
  expect(male17TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 22-26 TMR data has the correct number of scoring intervals", async () => {
  const male22TMRScores = data.tmr.male[22];
  expect(male22TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 27-31 TMR data has the correct number of scoring intervals", async () => {
  const male27TMRScores = data.tmr.male[27];
  expect(male27TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 32-36 TMR data has the correct number of scoring intervals", async () => {
  const male32TMRScores = data.tmr.male[32];
  expect(male32TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 37-41 TMR data has the correct number of scoring intervals", async () => {
  const male37TMRScores = data.tmr.male[37];
  expect(male37TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 42-46 TMR data has the correct number of scoring intervals", async () => {
  const male42TMRScores = data.tmr.male[42];
  expect(male42TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 47-51 TMR data has the correct number of scoring intervals", async () => {
  const male47TMRScores = data.tmr.male[47];
  expect(male47TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 52-56 TMR data has the correct number of scoring intervals", async () => {
  const male52TMRScores = data.tmr.male[52];
  expect(male52TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 57-61 TMR data has the correct number of scoring intervals", async () => {
  const male57TMRScores = data.tmr.male[57];
  expect(male57TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Male 62+ TMR data has the correct number of scoring intervals", async () => {
  const male62TMRScores = data.tmr.male[62];
  expect(male62TMRScores).toHaveLength(TMR_INTERVALS);
});

/**
 * FEMALE TESTS
 */

test("Female 17-21 TMR data has the correct number of scoring intervals", async () => {
  const female17TMRScores = data.tmr.female[17];
  expect(female17TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 22-26 TMR data has the correct number of scoring intervals", async () => {
  const female22TMRScores = data.tmr.female[22];
  expect(female22TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 27-31 TMR data has the correct number of scoring intervals", async () => {
  const female27TMRScores = data.tmr.female[27];
  expect(female27TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 32-36 TMR data has the correct number of scoring intervals", async () => {
  const female32TMRScores = data.tmr.female[32];
  expect(female32TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 37-41 TMR data has the correct number of scoring intervals", async () => {
  const female37TMRScores = data.tmr.female[37];
  expect(female37TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 42-46 TMR data has the correct number of scoring intervals", async () => {
  const female42TMRScores = data.tmr.female[42];
  expect(female42TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 47-51 TMR data has the correct number of scoring intervals", async () => {
  const female47TMRScores = data.tmr.female[47];
  expect(female47TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 52-56 TMR data has the correct number of scoring intervals", async () => {
  const female52TMRScores = data.tmr.female[52];
  expect(female52TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 57-61 TMR data has the correct number of scoring intervals", async () => {
  const female57TMRScores = data.tmr.female[57];
  expect(female57TMRScores).toHaveLength(TMR_INTERVALS);
});

test("Female 62+ TMR data has the correct number of scoring intervals", async () => {
  const female62TMRScores = data.tmr.female[62];
  expect(female62TMRScores).toHaveLength(TMR_INTERVALS);
});
