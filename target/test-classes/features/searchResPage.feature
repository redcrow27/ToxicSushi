@searchRestaurantPage
Feature: Search Restaurant Page tests

  Background: Open user Toxic Sushi page
    Given I open Home page
    And I click "Search Restaurants" button

    @nav
  Scenario:  Verify all necessary fields available
    Then I verify all fields available followind data:
    |Search By|
    |Zip Code |
    |Distance (mile)|
    |Type           |
    |Min Rating     |
    |Name           |

