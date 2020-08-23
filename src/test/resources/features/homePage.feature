@homePage
Feature: Home Page tests

  Background: Open user Toxic Sushi page
    Given I open Home page

  Scenario: Verify Title of the Page
    Given I login the page
    Then I verify title is "Toxic Sushi"

  Scenario: Log in credentials test
    Given I login with invalid  credentials
    Then I verify "Error message" as "Your email or password is incorrect! Please try again!"
    And I clear the fields
    And I click "close" button
    When I login the page
    Then I verify "Hi message" as "Hi, erdi"



