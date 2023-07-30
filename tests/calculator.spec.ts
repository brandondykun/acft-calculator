import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http:/localhost:3000/calculator");
});

test("gender and age selects work correctly", async ({ page }) => {
  // select components
  const genderSelect = page.getByTestId("gender-input").getByRole("combobox");
  const ageSelect = page.getByTestId("age-input").getByRole("combobox");

  // select female in the gender dropdown
  await genderSelect.click();
  await page.getByLabel("Female", { exact: true }).click();

  // expect female to be displayed in the select box
  await expect(genderSelect).toHaveText("Female");

  // select male in the gender dropdown
  await genderSelect.click();
  await page.getByLabel("Male", { exact: true }).click();

  // expect male to be displayed in the select box
  await expect(genderSelect).toHaveText("Male");

  // select 32-36 age group in age dropdown
  await ageSelect.click();
  await page.getByText("32-36").click();

  // expect 32-36 to be displayed in the select box
  await expect(ageSelect).toHaveText("32-36");

  // select 17-21 age group in age dropdown
  await ageSelect.click();
  await page.getByText("17-21").click();

  // expect 17-21 to be displayed in the select box
  await expect(ageSelect).toHaveText("17-21");
});
