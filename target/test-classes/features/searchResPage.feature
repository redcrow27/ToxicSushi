@searchRestaurantPage @smoke
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


  Scenario: Verify Search result test
    Given I click "Search" button
    Then I verify all fields available following data:
      | Name of the place  |
      | Rating stars       |
      | Address            |
      | Cuisines           |
      | Phone              |
      | Price Range        |
      | Open now: Open Now |

  @nav
  Scenario: Verify additional links in Search result
    Given I click "Search" button
    Then I verify all fields available following data:
      | Reviews    |
      | Directions |
      | Share      |

  @nav
  Scenario: Verify Address line contains my current location
    Given I click "Search" button
    Then I verify address line contains my current location


  Scenario: Verify entered zip code displayed after click the search button
    Given I enter "22180" in Zip Code Field
    When I click "Search" button
    Then I verify Zip Code is exist


  Scenario Outline: Verify Search by rating
    Given I choose "<rating>" rating option
    And I click "Search" button
    Then I verify rating is "<rating>"
    Examples:
      | rating |
      | 4      |
      | 5      |


  Scenario Outline: Verify Search by Type of food
    Given I choose "<food>" food option
    And I click "Search" button
    Then I verify Cuisines section have "<food>"
    Examples:
      | food     |
      | American |
      | Chinese  |
      | Italian  |
      | Japanese |
      | Mexican  |
      | Pizza    |
      | Steak    |
      | Sushi    |


  Scenario: Verify Search Restaurant based on name
    Given I enter restaurant name as "Kazan Restaurant"
    And I click "Search" button
    Then I verify results list only the restaurants with the same name


  Scenario: Verify Reviews information
    Given I click "Search" button
    And I click "Reviews" button
    Then I verify all fields available following data:
      | Date          |
      | Stars         |
      | Actual review |

  @nav
  Scenario: Verify Directions information
    Given I click "Search" button
    And I click "Directions" button
    Then I verify all fields available following data:
      | Minutes |
      | Miles   |


  Scenario: Verify Share button information
    Given I click "Search" button
    And I click "Share" button
    Then I verify all fields available following data:
      | To                   |
      | Community            |
      | Custom Email Address |
      | Subject              |
      | Send                 |

