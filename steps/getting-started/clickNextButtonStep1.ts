import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

import { fa, faker } from "@faker-js/faker";

When("user enters valid info into the required fields", async function () {
  await startApplicationPage.enterFirstName(faker.person.firstName());
  await startApplicationPage.enterLastName(faker.person.lastName());
  await startApplicationPage.enterEmail(faker.internet.email());
  await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));
});

When("user selects an option from {string} dropdown", async function (string) {
  await startApplicationPage.selectHowDidYouHearAboutUs("instagram");
});

When("user clicks on the next button on first step", async function () {
  await startApplicationPage.clickNextButton();
});

Then("the payment step stepper circle is blue", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});
