import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http:/localhost:3000/");
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ACFT Calculator/i);
});

test("has page heading", async ({ page }) => {
  // Get page heading.
  const title = page.getByRole("heading", { name: "ARMY ACFT CALCULATOR" });

  // Expects title to be visible.
  await expect(title).toBeVisible();
});

test("has call to action buttons", async ({ page }) => {
  // Get Calculate Score button.
  const calcScoreButton = page.getByRole("button", { name: "Calculate Score" });

  // Expects button to be visible.
  await expect(calcScoreButton).toBeVisible();

  // Get Calculate Score button.
  const viewMinMaxButton = page.getByRole("button", { name: "View Min/Max" });

  // Expects button to be visible.
  await expect(viewMinMaxButton).toBeVisible();
});
