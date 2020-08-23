@homePage
Feature: Home Page tests

  Background: Open user Toxic Sushi page
    Given I open Home page

  Scenario: Verify Title of the Page
    Given I login the page
    Then I verify title is "Toxic Sushi"


