import type { Page } from "playwright";
import { BasePage } from "./BasePage";

export class ReviewPaymentPage extends BasePage {
  readonly paymentForm = this.page.locator("//form[@id='payment-form']");

  readonly paymentFrame = this.page
    .frameLocator("(//iframe[contains(@title, 'Secure payment')])[1]");

  readonly cardNumberInput = this.paymentFrame.locator("(//input[@type='text'])[1]");
  readonly expiryDateInput = this.paymentFrame.locator("(//input[@type='text'])[2]");
  readonly cvcInput = this.paymentFrame.locator("(//input[@type='text'])[3]");
  readonly countryDropDown = this.paymentFrame.locator("//select[@name = 'country']");
  readonly zipCodeInput = this.paymentFrame.locator("(//input[@type='text'])[4]");

  readonly byProvidingCardInformationText = this.page.locator(
    "//p[contains(., 'By providing your card information')]"
  );

  // Price / breakdown
  readonly productPriceText = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Product Price')]"
  );
  readonly productPriceAmount = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Product Price')]/following-sibling::span"
  );

  readonly installmentPriceText = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installment Price')]"
  );
  readonly installmentPriceAmount = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Installment Price')]/following-sibling::span"
  );

  readonly subtotalText = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Subtotal')]"
  );
  readonly subtotalAmount = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Subtotal')]/following-sibling::span"
  );

  readonly processingFeeText = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Processing')]"
  );
  readonly processingFeeAmount = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Processing')]/following-sibling::span"
  );

  readonly totalText = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Total')]"
  );
  readonly totalAmount = this.page.locator(
    "//div[@class='content-panel-item ng-star-inserted']/span[contains(text(), 'Total')]/following-sibling::span"
  );

  // Checkbox / links
  readonly termsAndConditionsCheckbox = this.page.locator("//input[@type = 'checkbox']");
  readonly termsAndConditionsLink = this.page.locator(
    "//u[normalize-space()='Terms and Conditions']"
  );
  readonly payButton = this.page.locator("//button[@type='button']");

  // iFrame error messages
  readonly cardNumberErrorMessage = this.paymentFrame.locator(
    "//p[@id='Field-numberError' and @class='p-FieldError Error' and @role='alert']"
  );
  readonly cardExpiryErrorMessage = this.paymentFrame.locator(
    "//p[@id='Field-expiryError' and @class='p-FieldError Error' and @role='alert']"
  );
  readonly cardCVCErrorMessage = this.paymentFrame.locator(
    "//p[@id='Field-cvcError' and @class='p-FieldError Error' and @role='alert']"
  );
  readonly zipCodeErrorMessage = this.paymentFrame.locator(
    "//p[@id='Field-postalCodeError' and @class='p-FieldError Error' and @role='alert']"
  );

  // Other UI elements
  readonly backButton = this.page.locator("(//span[@class='back-button'])[2]");
  readonly footerText = this.page.locator(
    "(//p[@class = 'footer-text' and contains(text(), 'Need help?')])[3]"
  );
  readonly progressBar = this.page.locator("//mat-spinner[@role='progressbar']");
  readonly readAgreeTerms = this.page.locator("//div[3]/div[4]/div[1]/div[2]/div/div[6]");
  readonly termsAgreementTextPop = this.page.locator("//h1[@id='mat-mdc-dialog-title-0']");

  /**
   * @param {Page} page
   */
  constructor(page: Page) {
    super(page);
  }

  async enterCardNumber(cardNumber: string = process.env.CARD_NUMBER ?? ""): Promise<void> {
    await this.cardNumberInput.fill(cardNumber);
  }

  async enterExpiryDate(expiryDate: string = process.env.CARD_EXPIRATION_DATE ?? ""): Promise<void> {
    await this.expiryDateInput.fill(expiryDate);
  }

  async enterCVC(cvc: string = process.env.CARD_SECURITY_CODE ?? ""): Promise<void> {
    await this.cvcInput.fill(cvc);
  }

  async enterZipCode(zipCode: string = process.env.ZIP_CODE ?? ""): Promise<void> {
    await this.zipCodeInput.fill(zipCode);
  }

  async clickTermsAndConditionsCheckbox(): Promise<void> {
    await this.termsAndConditionsCheckbox.click();
  }

  async clickBackButton(): Promise<void> {
    await this.backButton.click();
  }

  async clickPayButton(): Promise<void> {
    await this.payButton.click();
  }
}