import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http:/localhost:3000/calculator");
});

test.describe("Max Dead lift Slider ", () => {
  test("add and minus buttons increase and decrease the score", async ({
    page,
  }) => {
    // select components
    const mdlRaw = page.getByTestId("mdl-raw");
    const mdlScore = page.locator("#mdl-score");
    const addButton = page.getByTestId("mdl-add-button");
    const minusButton = page.getByTestId("mdl-minus-button");

    // assert starting scores are correct
    await expect(minusButton).toBeDisabled();
    await expect(mdlRaw).toContainText("0 lbs");
    await expect(mdlScore).toContainText("Score: 0");

    // add to the score with 10 clicks
    await addButton.click({ clickCount: 10 });

    // expect score to be correct
    await expect(minusButton).toBeEnabled();
    await expect(mdlRaw).toContainText("100 lbs");
    await expect(mdlScore).toContainText("Score: 20");

    // subtract from the score
    await minusButton.click();

    // expect score to be correct
    await expect(mdlRaw).toContainText("90 lbs");
    await expect(mdlScore).toContainText("Score: 10");

    // reset the score to 0
    await minusButton.click({ clickCount: 9 });

    // expect score to be correct
    await expect(mdlRaw).toContainText("0 lbs");
    await expect(mdlScore).toContainText("Score: 0");
  });

  test("slider increases and decreases the score", async ({ page }) => {
    // select components
    const mdlRaw = page.getByTestId("mdl-raw");
    const mdlScore = page.locator("#mdl-score");
    const addButton = page.getByTestId("mdl-add-button");
    const minusButton = page.getByTestId("mdl-minus-button");
    const sliderHandle = page.locator("#mdl-slider").getByRole("slider");
    const sliderTrack = page.locator("#mdl-slider span").nth(1);

    // the value corresponding to the 100% of the slider
    const maxValue = 340;
    // drag-and-drop target value in percentage
    const targetValue = 0.5; // 50%

    // getting the slider bounding box size
    const sliderBoundingBox = await sliderTrack.boundingBox();

    // get the width of the slider on the screen
    const sliderWidth = sliderBoundingBox?.width;

    // assert starting scores are correct
    await expect(mdlRaw).toContainText("0 lbs");
    await expect(mdlScore).toContainText("Score: 0");
    await expect(minusButton).toBeDisabled();

    if (sliderWidth) {
      // slide the slider to the right 50 percent
      await sliderHandle.dragTo(sliderHandle, {
        force: true,
        targetPosition: {
          // moving the slider to the target value in %
          x: sliderWidth * targetValue,
          y: 0,
        },
      });
      await expect(mdlRaw).toContainText(`${maxValue * targetValue} lbs`);
      await expect(mdlScore).toContainText("Score: 67");

      // reset the slider back to 0
      await sliderHandle.dragTo(sliderHandle, {
        force: true,
        targetPosition: {
          // moving the slider to the target value in %
          x: sliderWidth * targetValue * -1,
          y: 0,
        },
      });
      await expect(mdlRaw).toContainText("0 lbs");
      await expect(mdlScore).toContainText("Score: 0");

      // slide the slider to the right 100 percent
      await sliderHandle.dragTo(sliderHandle, {
        force: true,
        targetPosition: {
          // moving the slider to the target value in %
          x: sliderWidth * 1,
          y: 0,
        },
      });
      await expect(mdlRaw).toContainText(`${maxValue * 1} lbs`);
      await expect(mdlScore).toContainText("Score: 100");
      expect(addButton).toBeDisabled();
    }
  });
});
