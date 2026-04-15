@sep19
Feature: Click next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page


    Scenario: Verify that user is able to move onto Step 2 with all fields
        When user enters valid info into the required fields
        And user selects an option from 'How did your hear about us' dropdown
        And user clicks on the next button on first step
        Then the payment step stepper circle is blue



    Scenario: Verify that user is able to move onto Step 2 with required fields only
        When user enters valid info into the required fields
        And user clicks on the next button on first step
        Then the payment step stepper circle is blue