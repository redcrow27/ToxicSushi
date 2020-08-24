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
formatter.write("08-23-2020 23:38:04 INFO:  Click: Search Restaurants button");
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
    },
    {
      "name": "@nav"
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
formatter.write("08-23-2020 23:38:04 INFO: Expected option: Current Location | Actual option: Current Location");
formatter.write("08-23-2020 23:38:04 INFO: Expected option: Zip Code | Actual option: Zip Code");
formatter.write("08-23-2020 23:38:04 INFO: Expected first option: Current Location | Actual first option: Current Location");
formatter.write("08-23-2020 23:38:04 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 23:38:04");
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
formatter.write("08-23-2020 23:38:04 INFO:  Click: Search Restaurants button");
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
    },
    {
      "name": "@nav"
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
formatter.write("08-23-2020 23:38:04 INFO: Expected option: 1 | Actual option: 1");
formatter.write("08-23-2020 23:38:04 INFO: Expected option: 2 | Actual option: 2");
formatter.write("08-23-2020 23:38:04 INFO: Expected option: 3 | Actual option: 3");
formatter.write("08-23-2020 23:38:04 INFO: Expected option: 4 | Actual option: 4");
formatter.write("08-23-2020 23:38:04 INFO: Expected option: 5 | Actual option: 5");
formatter.write("08-23-2020 23:38:04 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-23-2020 23:38:04");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});