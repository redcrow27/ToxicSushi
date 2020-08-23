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


  Scenario: Sign out test
    Given I login the page
    When I click "Sign out" button
    Then I verify "Hi, erdi" is not Displayed


  Scenario: Navigation bar test
   Given I login the page
    Then I verify navigation buttons displayed following data:
      |Home|
      |Search Restaurants|
      |Search Fun Places |
      |My Favorites      |


  Scenario: I'm hungry button test
    Given I login the page
    And I click "I'm hungry" button
    Then I verify "Search restaurants" is Displayed


  Scenario: Show me more button test
    Given I login the page
    And I click "Show me more" button
    Then I verify "We're happy to hear from you" is Displayed




