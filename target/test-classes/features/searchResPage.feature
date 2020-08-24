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


  Scenario: Verify Search By field options
    Then I verify all fields available following data:
      | Current Location |
      | Zip Code         |


  Scenario: Verify rating options
    Then I verify all fields available following data:
      | 1 |
      | 2 |
      | 3 |
      | 4 |
      | 5 |


  Scenario: Verify food options
    Then I verify all fields available following data:
      | American   |
      | Burgers    |
      | Chinese    |
      | Italian    |
      | Japanese   |
      | Mexican    |
      | Pasta      |
      | Pizza      |
      | Sandwiches |
      | Seafood    |
      | Steak      |
      | Sushi      |


  Scenario: Verify zip code field enable to enter zip code
    Given I verify Zip Code field is disabled
    And I choose "Zip Code" in "Search By" field
    Then I verify Zip Code field is Enabled


  Scenario: Verify Zip code field accepts only valid zip codes
    Given I enter "20191" in Zip Code Field
    When I verify Zip Code is exist
    And I enter "aaaa1" in Zip Code Field
    Then I verify "Request failed." message


  @nav
  Scenario: Verify Search result test
    Given I click "Search" button
    Then I verify all fields available following data:
      | Name of the place  |
      | Rating stars       |
      | Address            |
      | Cuisines           |
      | Phone      |
      | Price Range        |
      | Open now: Open Now |



