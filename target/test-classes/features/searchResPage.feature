@searchRestaurantPage
Feature: Search Restaurant Page tests

  Background: Open user Toxic Sushi page
    Given I open Home page
    And I click "Search Restaurants" button


  Scenario: Verify all necessary fields available
    Then I verify all fields available following data:
      | Search By       |
      | Zip Code        |
      | Distance (mile) |
      | Type            |
      | Min Rating      |
      | Name            |


    @nav
  Scenario: Verify Search By field options
    Then I verify all fields available following data:
      | Current Location |
      | Zip Code         |

  @nav
   Scenario: Verify rating options
     Then I verify all fields available following data:
     |1|
     |2|
     |3|
     |4|
     |5|



