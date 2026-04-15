import type { Page } from "playwright";
import { BasePage } from "./BasePage";

export class StartApplicationPage extends BasePage {
  // Step titles
  readonly startApplicationText = this.page.locator("(//div[@class = 'step-title'])[1]");
  readonly paymentPlanText = this.page.locator("(//div[@class = 'step-title'])[2]");
  readonly reviewText = this.page.locator("(//div[@class = 'step-title'])[3]");

  // Step circles
  readonly startApplicationStepCircle = this.page.locator("(//*[@class='step-circle'])[1]");
  readonly paymentPlanStepCircle = this.page.locator("(//*[@class='step-circle'])[2]");
  readonly reviewStepCircle = this.page.locator("(//*[@class='step-circle'])[3]");

  // Name / contact fields
  readonly firstNameInputBox = this.page.locator("//input[@formcontrolname='firstName']");
  readonly lastNameInputBox = this.page.locator("//input[@formcontrolname='lastName']");
  readonly emailInputBox = this.page.locator("//input[@formcontrolname='email']");
  readonly phoneNumberInputBox = this.page.locator("//input[@formcontrolname='phoneNumber']");

  // How did you hear about us
  readonly howDidYouHearAboutUsDropDown = this.page.locator(
    "//mat-label[text()='How did you hear about us?']"
  );
  readonly emailOptionFromDropDown = this.page.locator(
    "//mat-option/span[contains(text(), 'Email')]"
  );
  readonly facebookOptionFromDropDown = this.page.locator(
    "//mat-option/span[contains(text(), 'Facebook')]"
  );
  readonly googleOption = this.page.locator(
    "//mat-option/span[contains(text(), 'Google')]"
  );
  readonly instagramOptionFromDropDown = this.page.locator(
    "//mat-option/span[contains(text(), 'Instagram')]"
  );
  readonly linkedInOptionFromDropDown = this.page.locator(
    "//mat-option/span[contains(text(), 'LinkedIN')]"
  );
  readonly twitterOptionFromDropDown = this.page.locator(
    "//mat-option/span[contains(text(), 'Twitter')]"
  );
  readonly referredByFriedOptionFromDropDown = this.page.locator(
    "//mat-option/span[contains(text(), 'Referred by a friend')]"
  );
  readonly otherOptionFromDropDown = this.page.locator(
    "//mat-option/span[contains(text(), 'Other')]"
  );

  // Parent fields (duplicate name/email/phone)
  readonly firstNameInputBoxForParents = this.page.locator("(//input[@formcontrolname='firstName'])[2]");
  readonly lastNameInputBoxForParents = this.page.locator("(//input[@formcontrolname='lastName'])[2]");
  readonly emailInputBoxForParents = this.page.locator("(//input[@formcontrolname='email'])[2]");
  readonly phoneNumberInputBoxForParents = this.page.locator("(//input[@formcontrolname='phoneNumber'])[2]");

  // Info text / pricing
  readonly flexiblePaymentsPlanAvailableText = this.page.locator(
    "//p[text() = 'Flexible payments plan available']"
  );
  readonly programStartDate = this.page.locator(
    "//div[contains(text(), 'Program Start Date')]/b[@class='info-value']"
  );
  readonly refundEndDate = this.page.locator("(//b[@class='info-value'])[2]");
  readonly programNameOnInfoCard = this.page.locator(
    "//p[@class='program-title primary-color']"
  );
  readonly programPrice = this.page.locator(
    "//div[@class='col-sm']/b[@class = 'info-primary']"
  );
  readonly programBasePrice = this.page.locator("//span[@class='ng-star-inserted']/s");
  readonly enterPersonalDetails = this.page.locator(
    "//b[contains(.,'Enter personal details')]"
  );
  readonly discountedPrice = this.page.locator("//b[@class='info-primary']");
  readonly originalPrice = this.page.locator("//s[contains(.,'$')]");

  // Footer
  readonly footer = this.page.locator(
    "//p[@class = 'footer-text' and contains(text(), 'Need help?')]"
  );

  // Button
  readonly nextButton = this.page.locator(
    "//button[@class = 'next-button'][contains(text(), 'Next')]"
  );

  /**
   * @param {Page} page
   */
  constructor(page: Page) {
    super(page);
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.firstNameInputBox.fill(firstName);
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.lastNameInputBox.fill(lastName);
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInputBox.fill(email);
  }

  async enterPhoneNumber(phoneNumber: string): Promise<void> {
    await this.phoneNumberInputBox.fill(phoneNumber);
  }

  async selectHowDidYouHearAboutUs(howDidYouHear: string): Promise<void> {
    const normalized = howDidYouHear.toLowerCase();
    await this.howDidYouHearAboutUsDropDown.click();
    switch (normalized) {
      case "email":
        await this.emailOptionFromDropDown.click();
        break;
      case "facebook":
        await this.facebookOptionFromDropDown.click();
        break;
      case "google":
        await this.googleOption.click();
        break;
      case "instagram":
        await this.instagramOptionFromDropDown.click();
        break;
      case "linkedin":
        await this.linkedInOptionFromDropDown.click();
        break;
      case "twitter":
        await this.twitterOptionFromDropDown.click();
        break;
      // no default to keep code clean; you can add it if needed
    }
  }

  async clickNextButton(): Promise<void> {
    await this.nextButton.click();
  }
}