@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Verify that Start Application is visible
        Then Start Application step is visible

    Scenario: Verify that Payment Plan is visible
        Then Payment Plan step is visible

    Scenario: Verify that Review is visible
        Then Review step is visible

    Scenario: Verify the stepper colors are appropriately displayed
        Then Start Application color is displayed as Blue
        And Payment Plan color is displayed in Grey
        And Review color is displayed in Grey