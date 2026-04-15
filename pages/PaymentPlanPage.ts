import { Page } from "playwright";
import { BasePage } from "./BasePage";

export class PaymentPlanPage extends BasePage {
  // Text / headings
  readonly chooseAPaymentPlanText = this.page.locator("//*[text()='Choose a payment plan']");

  // Upfront section
  readonly upfrontPaymentOption = this.page.locator("//span[@class='payment-type'][contains(text(),'Upfront')]");
  readonly UpfrontText = this.page.locator("//span[@class='payment-type']");

  readonly upfrontPaymentAmount = this.page.locator("//span[@class='discount-price']");
  readonly payOnceTextUpFront = this.page.locator("//span[@class='discount-price']/span");
  readonly upfrontPaymentFrame = this.page.locator("(//mat-expansion-panel-header[@role='button'])[1]");

  readonly greenBadgeUpfrontDiscount = this.page.locator("//span[@class='chip-content']");
  readonly greenBadgeElectricBoltUpfrontDiscount = this.page.locator(
    "//span[@class='chip-content']/span[@class='material-symbols-outlined light-icon']"
  );
  readonly greenBadgeTextUpfrontDiscount = this.page.locator("//span[@class='chip-content']");

  readonly couponAvailableBadgeUpfrontDiscount = this.page.locator("//mat-chip[contains(@class, 'coupon-badge')]");
  readonly couponBoxCloseBtnX = this.page.locator(
    '//*[@id="cdk-accordion-child-0"]/div/div/div[3]/mat-form-field/div[1]/div[2]/div[2]/button/span[3]'
  );

  readonly basePriceTextUnderUpfront = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Base price')]"
  );
  readonly basePriceAmountUnderUpfront = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Base price')]/following-sibling::span"
  );

  readonly upfrontDiscountTextUnderUpfront = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Upfront')]"
  );
  readonly upfrontDiscountAmountUnderUpfront = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Upfront')]/following-sibling::span"
  );

  readonly iHaveAPromoCodeButtonUnderUpfront = this.page.locator(
    "//button[contains(text(), 'I have a promo code')]"
  );

  readonly subtotalTextUnderUpfront = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/div/span[contains(text(), 'Subtotal')]"
  );
  readonly subtotalAmountUnderUpfront = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/div/span[contains(text(), 'Subtotal')]/following-sibling::span"
  );

  readonly excludingFeesTextUnderUpfront = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/i[contains(text(), 'excluding fees')]"
  );

  // Installments section
  readonly installmentsPaymentOption = this.page.locator(
    "//span[@class='payment-type'][contains(text(),'Installments')]"
  );
  readonly installmentsPaymentFrame = this.page.locator("(//mat-expansion-panel-header[@role='button'])[2]");
  readonly installmentsPaymentAmount = this.page.locator("//span[@class='discount-price ng-star-inserted']");
  readonly perMonthTextInstallments = this.page.locator(
    "//span[@class='discount-price ng-star-inserted']/span"
  );

  readonly couponAvailableBadgeInstallments = this.page.locator(
    "(//mat-chip[contains(@class, 'coupon-badge')])[2]"
  );

  readonly basePriceTextUnderInstallments = this.page.locator(
    "//div[@class='content-panel-item coupon-section ng-star-inserted']/div/span[contains(text(), 'Base price')]"
  );
  readonly basePriceAmountUnderInstallments = this.page.locator(
    "//div[@class='content-panel-item coupon-section ng-star-inserted']/div/span[contains(text(), 'Base price')]/following-sibling::span"
  );

  readonly installmentsTextUnderInstallments = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installments')]"
  );
  readonly installmentsNumberUnderInstallments = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installments')]/following-sibling::span"
  );

  readonly pricePerInstallmentsTextUnderInstallments = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Price per installment')]"
  );
  readonly pricePerInstallmentsAmountUnderInstallments = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Price per installment')]/following-sibling::span"
  );

  readonly dueTodayTextUnderInstallments = this.page.locator(
    "//span[@class='sub-item-panel ng-star-inserted' and contains(text(), 'Due Today')]"
  );
  readonly firstMonthPaymentTextUnderInstallments = this.page.locator(
    "//div[@class='fee-items-holder']/span[contains(text(), 'First month')]"
  );
  readonly firstMonthPaymentAmountUnderInstallments = this.page.locator(
    "//div[@class='fee-items-holder']/span[contains(text(), 'First month')]/following-sibling::span"
  );

  readonly excludingFeesTextUnderInstallments = this.page.locator(
    "(//div[@class='content-panel-item ng-star-inserted']/i[contains(text(), 'excluding fees')])[2]"
  );

  readonly iHaveAPromoCodeButtonUnderInstallments = this.page.locator(
    "(//button[contains(text(), 'I have a promo code')])[2]"
  );

  // Buttons
  readonly inactiveNextButton = this.page.locator("//button[text()='Next']");
  readonly activeNextButton = this.page.locator("//button[@class = 'next-button' and text()='Next']");
  readonly backButton = this.page.locator("//span[@class='back-button']");

  // Footer & controls
  readonly footerText = this.page.locator(
    "(//p[@class = 'footer-text' and contains(text(), 'Need help?')])[2]"
  );

  readonly paymentPlanBoxes = this.page.locator(
    "//mat-accordion[@class='mat-accordion']/div/mat-expansion-panel/mat-expansion-panel-header"
  );

  readonly step1 = this.page.locator("//div[@class='step-circle'][contains(.,'1')]");
  readonly step2 = this.page.locator("//div[@class='step-circle'][contains(.,'2')]");
  readonly step3 = this.page.locator("//div[@class='step-circle'][contains(.,'3')]");


  /**
   * @param {Page} page
   */
  constructor(page: Page) {
    super(page);
  }

  async selectPaymentPlan(paymentPlan: string): Promise<void> {
    paymentPlan = paymentPlan.toLowerCase();
    switch (true) {
      case paymentPlan.includes("upfront"):
        await this.upfrontPaymentOption.click();
        break;
      case paymentPlan.includes("installments"):
        await this.installmentsPaymentOption.click();
        break;
      default:
        throw new Error(`Invalid payment plan: ${paymentPlan}`);
    }
  }

  async clickNextButton(): Promise<void> {
    await this.activeNextButton.click();
  }
}