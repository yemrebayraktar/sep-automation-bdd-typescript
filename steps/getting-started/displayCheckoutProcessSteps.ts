import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("Start Application step is visible", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toBeVisible();
});

Then("Payment Plan step is visible", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toBeVisible();
});

Then("Review step is visible", async function () {
  await expect(startApplicationPage.reviewStepCircle).toBeVisible();
});


Then("Start Application color is displayed as Blue", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});
Then("Payment Plan color is displayed in Grey", async function () {
  // grey
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgba(0, 0, 0, 0)",
  );

});
Then("Review color is displayed in Grey", async function () {
  // grey
   await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
     "background-color",
     "rgba(0, 0, 0, 0)",
   );
});
