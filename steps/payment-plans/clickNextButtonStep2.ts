import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page ,startApplicationPage} from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("the next button is disabled by default", async function () {
  await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});

When("user selects {string} plan", async function (plan: string) {
  await paymentPlanPage.selectPaymentPlan(plan);
});

Then("the next button is enabled", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

When("user clicks on the next button", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("the review step stepper circle is blue", async function () {
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

Then("the payment step stepper circle is green", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the start application step stepper circle is green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the upfront payment plan summary is displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.upfrontDiscountAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.subtotalTextUnderUpfront).toBeVisible();
});

Then("the installments payment plan summary is displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
  await expect(paymentPlanPage.installmentsNumberUnderInstallments).toBeVisible();
  await expect(paymentPlanPage.pricePerInstallmentsAmountUnderInstallments).toBeVisible();
  await expect(paymentPlanPage.firstMonthPaymentAmountUnderInstallments).toBeVisible();
});

Then("the back button is displayed and enabled", async function () {
  await expect(paymentPlanPage.backButton).toBeVisible();
  await expect(paymentPlanPage.backButton).toBeEnabled();
});

When("user clicks the back button", async function () {
  await paymentPlanPage.backButton.click();
});

Then("user should be navigated back to start application step", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});