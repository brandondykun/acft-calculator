import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http:/localhost:3000/calculator");
});

test.describe("Hand Release Pushup Slider", () => {
  test("should work correctly", async ({ page }) => {
    // select components
    const hrpRaw = page.getByTestId("hrp-raw");
    const hrpScore = page.locator("#hrp-score");
    const addButton = page.getByTestId("hrp-add-button");
    const minusButton = page.getByTestId("hrp-minus-button");
    const sliderHandle = page.locator("#hrp-slider").getByRole("slider");
    const sliderTrack = page.locator("#hrp-slider span").nth(1);

    // assert starting scores are correct
    expect(hrpRaw).toContainText("0 reps");
    expect(hrpScore).toContainText("Score: 0");
    expect(minusButton).toBeDisabled();

    // add to the score with 6 clicks
    await addButton.click({ clickCount: 6 });

    // expect score to be correct
    expect(minusButton).toBeEnabled();
    expect(hrpRaw).toContainText("6 reps");
    expect(hrpScore).toContainText("Score: 20");

    // subtract from the score
    await minusButton.click();

    // expect score to be correct
    expect(hrpRaw).toContainText("5 reps");
    expect(hrpScore).toContainText("Score: 10");
  });
});
