@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed and enabled.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed start application step



    # Scenario: Verify that clicking on upfront payment plan activates the next button
    #     Then the next button is disabled by default
    #    When user selects upfront payment plan
    #    Then the next button is enabled

    # Scenario: Verify that clicking on installments payment plan activates the next button
    #    Then the next button is disabled by default
    #    When user selects installments payment plan
    #    Then the next button is enabled

    @sep16-1
    Scenario Outline: Verify clicking on any plan should activate the next button
        Then the next button is disabled by default
        When user selects "<paymentPlan>" plan
        Then the next button is enabled

        Examples:
            | paymentPlan  |
            | Upfront      |
            | Installments |

    @sep16-2
    Scenario: Verify after clicking the next button, step3 stepper color is blue
        When user selects "upfront" plan
        And user clicks on the next button
        Then the review step stepper circle is blue
        And the payment step stepper circle is green
        And the start application step stepper circle is green


    @sep16-3
    Scenario: Verify that payment summary is displayed after a payment plan is selected
        When user selects "upfront" plan
        Then the upfront payment plan summary is displayed
        When user selects "installments" plan
        Then the installments payment plan summary is displayed

    @sep16-4
    Scenario: Verify that the back button is displayed and enabled
        Then the back button is displayed and enabled
        When user clicks the back button
        Then user should be navigated back to start application step

