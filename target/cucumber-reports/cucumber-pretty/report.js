$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/searchResPage.feature");
formatter.feature({
  "name": "Search Restaurant Page tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all necessary fields available",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I verify all fields available following data:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-24-2020 22:25:33 INFO: Expected field: Search By | Actual field: Search By");
formatter.write("08-24-2020 22:25:33 INFO: Expected field: Zip Code | Actual field: Zip Code");
formatter.write("08-24-2020 22:25:33 INFO: Expected field: Distance (mile) | Actual field: Distance (mile)");
formatter.write("08-24-2020 22:25:33 INFO: Expected field: Type | Actual field: Type");
formatter.write("08-24-2020 22:25:33 INFO: Expected field: Min Rating | Actual field: Min Rating");
formatter.write("08-24-2020 22:25:33 INFO: Expected field: Name | Actual field: Name");
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search By field options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I verify all fields available following data:",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Current Location | Actual option: Current Location");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Zip Code | Actual option: Zip Code");
formatter.write("08-24-2020 22:25:33 INFO: Expected first option: Current Location | Actual first option: Current Location");
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify rating options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I verify all fields available following data:",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-24-2020 22:25:33 INFO: Expected option: 1 | Actual option: 1");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: 2 | Actual option: 2");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: 3 | Actual option: 3");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: 4 | Actual option: 4");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: 5 | Actual option: 5");
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded2.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify food options",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I verify all fields available following data:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: American | Actual food option: American");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Burgers | Actual food option: Burgers");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Chinese | Actual food option: Chinese");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Italian | Actual food option: Italian");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Japanese | Actual food option: Japanese");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Mexican | Actual food option: Mexican");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Pasta | Actual food option: Pasta");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Pizza | Actual food option: Pizza");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Sandwiches | Actual food option: Sandwiches");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Seafood | Actual food option: Seafood");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Steak | Actual food option: Steak");
formatter.write("08-24-2020 22:25:33 INFO: Expected food option: Sushi | Actual food option: Sushi");
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded3.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify zip code field enable to enter zip code",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I verify Zip Code field is disabled",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.iVerifyZipCodeFieldIsDisabled()"
});
formatter.write("08-24-2020 22:25:33 INFO:  Zip Code field is Displayed: true");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose \"Zip Code\" in \"Search By\" field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_in_field(java.lang.String,java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Search By field selected. ");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Zip Code field is Enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.iVerifyZipCodeFieldIsEnabled()"
});
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded4.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Zip code field accepts only valid zip codes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I enter \"20191\" in Zip Code Field",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_enter_in_Zip_Code_Field(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Zip Code entered: 20191");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Zip Code is exist",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Zip_Code_is_exist()"
});
formatter.write("08-24-2020 22:25:33 INFO:  Entered zip code: 20191 | Address line contains zip code: Address: 2303 Soapstone Dr Ste A, Reston, VA 20191-4422");
formatter.embedding("image/png", "embedded5.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"aaaa1\" in Zip Code Field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_enter_in_Zip_Code_Field(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Zip Code entered: aaaa1");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"Request failed.\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search result test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify all fields available following data:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Name of the place | Actual option: The Gourmet basket");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Rating stars | Actual option: 4.5");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Address | Actual option: Address: 6829 Tennyson Dr, McLean, VA 22101-5721");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Cuisines | Actual option: Cuisines:");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Phone | Actual option: Phone: +1 703-848-2456");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Price Range | Actual option: Price Range:");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Open now: Open Now | Actual option: Open now: Closed Now");
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded6.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify additional links in Search result",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify all fields available following data:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Reviews | Actual option: Reviews");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Directions | Actual option: Directions");
formatter.write("08-24-2020 22:25:33 INFO: Expected option: Share | Actual option: Share");
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded7.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Address line contains my current location",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify address line contains my current location",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.iVerifyAddressLineContainsMyCurrentLocation()"
});
formatter.write("08-24-2020 22:25:33 INFO:  My current zip code: 22101 | Address line contains zip code: Address: 6829 Tennyson Dr, McLean, VA 22101-5721");
formatter.embedding("image/png", "embedded8.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify entered zip code displayed after click the search button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I enter \"22180\" in Zip Code Field",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_enter_in_Zip_Code_Field(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Zip Code entered: 22180");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Zip Code is exist",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Zip_Code_is_exist()"
});
formatter.write("08-24-2020 22:25:33 INFO:  Entered zip code: 22180 | Address line contains zip code: Address: 141 Park St SE, Vienna, VA 22180-4607");
formatter.embedding("image/png", "embedded9.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I choose \"\u003crating\u003e\" rating option",
  "keyword": "Given "
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify rating is \"\u003crating\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rating"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    }
  ]
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"1\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected rating: 1");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.SearchResPageTest.i_verify_rating_is(SearchResPageTest.java:170)\n\tat ✽.I verify rating is \"1\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:97)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded10.png", "Screenshot | 08-24-2020 22:25:33");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"2\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected rating: 2");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.SearchResPageTest.i_verify_rating_is(SearchResPageTest.java:170)\n\tat ✽.I verify rating is \"2\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:97)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded11.png", "Screenshot | 08-24-2020 22:25:33");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"3\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected rating: 3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.SearchResPageTest.i_verify_rating_is(SearchResPageTest.java:170)\n\tat ✽.I verify rating is \"3\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:97)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded12.png", "Screenshot | 08-24-2020 22:25:33");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"4\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected rating: 4");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual rating: 4");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"5\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected rating: 5");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual rating: 5");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I choose \"\u003cfood\u003e\" food option",
  "keyword": "Given "
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify Cuisines section have \"\u003cfood\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "food"
      ]
    },
    {
      "cells": [
        "American"
      ]
    },
    {
      "cells": [
        "Burgers"
      ]
    },
    {
      "cells": [
        "Chinese"
      ]
    },
    {
      "cells": [
        "Italian"
      ]
    },
    {
      "cells": [
        "Japanese"
      ]
    },
    {
      "cells": [
        "Mexican"
      ]
    },
    {
      "cells": [
        "Pasta"
      ]
    },
    {
      "cells": [
        "Pizza"
      ]
    },
    {
      "cells": [
        "Sandwiches"
      ]
    },
    {
      "cells": [
        "Seafood"
      ]
    },
    {
      "cells": [
        "Steak"
      ]
    },
    {
      "cells": [
        "Sushi"
      ]
    }
  ]
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"American\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: American");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"American\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: American");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Burgers\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Burgers");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Burgers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027result\u0027])[2]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027FenerBahce.verizon.net\u0027, ip: \u0027fe80:0:0:0:1c68:c3ba:8c4f:c220%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/x8/s3dlcbw158q...}, goog:chromeOptions: {debuggerAddress: localhost:59647}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f863a2f6085d3f6e05938fd41c7e929b\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027result\u0027])[2]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\n\tat step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(SearchResPageTest.java:186)\n\tat ✽.I verify Cuisines section have \"Burgers\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:110)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded13.png", "Screenshot | 08-24-2020 22:25:33");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Chinese\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Chinese");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Chinese\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: Chinese");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Italian\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Italian");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Italian\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: Italian");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Japanese\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Japanese");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Japanese\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: Japanese");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Mexican\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Mexican");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Mexican\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: Mexican");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Pasta\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Pasta");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Pasta\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027result\u0027])[2]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027FenerBahce.verizon.net\u0027, ip: \u0027fe80:0:0:0:1c68:c3ba:8c4f:c220%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/x8/s3dlcbw158q...}, goog:chromeOptions: {debuggerAddress: localhost:60132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b5a0e49511d72682bd41e9765e0301e4\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027result\u0027])[2]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\n\tat step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(SearchResPageTest.java:186)\n\tat ✽.I verify Cuisines section have \"Pasta\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:110)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded14.png", "Screenshot | 08-24-2020 22:25:33");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Pizza\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Pizza");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Pizza\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: Pizza");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Sandwiches\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Sandwiches");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Sandwiches\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027result\u0027])[2]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027FenerBahce.verizon.net\u0027, ip: \u0027fe80:0:0:0:1c68:c3ba:8c4f:c220%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/x8/s3dlcbw158q...}, goog:chromeOptions: {debuggerAddress: localhost:60421}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4c20523eaf7be4a35117d29b3ddf9464\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027result\u0027])[2]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\n\tat step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(SearchResPageTest.java:186)\n\tat ✽.I verify Cuisines section have \"Sandwiches\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:110)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded15.png", "Screenshot | 08-24-2020 22:25:33");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Seafood\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Seafood");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Seafood\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027result\u0027])[2]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027FenerBahce.verizon.net\u0027, ip: \u0027fe80:0:0:0:1c68:c3ba:8c4f:c220%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/x8/s3dlcbw158q...}, goog:chromeOptions: {debuggerAddress: localhost:60675}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2bbfd8002c6cc3f4ec2ce4ddbafea78b\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027result\u0027])[2]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\n\tat step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(SearchResPageTest.java:186)\n\tat ✽.I verify Cuisines section have \"Seafood\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:110)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded16.png", "Screenshot | 08-24-2020 22:25:33");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Steak\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Steak");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Steak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: Steak");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I choose \"Sushi\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Selected food: Sushi");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Sushi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO: Actual food: Sushi");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search Restaurant based on name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I enter restaurant name as \"Kazan Restaurant\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_enter_restaurant_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify results list only the restaurants with the same name",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_results_list_only_the_restaurants_with_the_same_name()"
});
formatter.write("08-24-2020 22:25:33 INFO:  Entered restaurant name: Kazan Restaurant | Actual restaurant name: Kazan Restaurant");
formatter.embedding("image/png", "embedded17.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Reviews information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@searchRestaurantPage"
    }
  ]
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Reviews\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:25:33 INFO:  Click: Reviews button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify all fields available following data:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-24-2020 22:25:33 INFO: Expected fields: Date | Actual field info: 2016-08-244");
formatter.write("08-24-2020 22:25:33 INFO: Expected fields: Stars | Actual field info: 4.5");
formatter.write("08-24-2020 22:25:33 INFO: Expected fields: Actual review | Actual field info: This is not a restaurant. It is a Middle Eastern grocery store where you can buy about a dozen or more freshly-made prepared dishes. Some of the prepared food is excellent, especially the spicy meat and the spinach pastries, the tabouleh, and the eggplant dishes.");
formatter.write("08-24-2020 22:25:33 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded18.png", "Screenshot | 08-24-2020 22:25:33");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});