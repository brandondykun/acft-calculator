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
  const title = page.getByRole("heading", { name: "ARMY AFT/ACFT CALCULATOR" });

  // Expects title to be visible.
  await expect(title).toBeVisible();
});

test("has call to action buttons", async ({ page }) => {
  // Get Calculate AFT Score button.
  const calcAftScoreButton = page.getByRole("button", {
    name: "Calculate AFT Score",
  });

  // Expects button to be visible.
  await expect(calcAftScoreButton).toBeVisible();

  // Get Calculate ACFT Score button.
  const calcAcftScoreButton = page.getByRole("button", {
    name: "Calculate ACFT Score",
  });

  // Expects button to be visible.
  await expect(calcAcftScoreButton).toBeVisible();
});
