@homePage @smoke
Feature: Home Page tests

  Background: Open user Toxic Sushi page
    Given I open Home page
    And I login the page

  @title
  Scenario: Verify Title of the Page
    Then I verify title is "Toxic Sushi"

  Scenario: Log in credentials test
    Given I verify "Hi message" as "Hi, erdi"
    And I click "Sign out" button
    When I login with invalid  credentials
    Then I verify "Error message" as "Your email or password is incorrect! Please try again!"

  Scenario: Sign out test
    When I click "Sign out" button
    Then I verify "Hi, erdi" is not Displayed

  Scenario: Navigation bar test
    Then I verify navigation buttons displayed following data:
      | Home               |
      | Search Restaurants |
      | Search Fun Places  |
      | My Favorites       |

  Scenario: I'm hungry button test
    And I click "I'm hungry" button
    Then I verify "Search restaurants" is Displayed

  Scenario: Show me more button test
    And I click "Show me more" button
    Then I verify "We're happy to hear from you" is Displayed

  Scenario: Search Restaurants test - Search button
    When I click "Search restaurants" button
    Then I verify Search restaurants page open





