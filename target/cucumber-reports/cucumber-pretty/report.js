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
formatter.write("08-23-2020 23:52:24 INFO:  Click: Search Restaurants button");
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
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: American | Actual food option: American");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Burgers | Actual food option: Burgers");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Chinese | Actual food option: Chinese");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Italian | Actual food option: Italian");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Japanese | Actual food option: Japanese");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Mexican | Actual food option: Mexican");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Pasta | Actual food option: Pasta");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Pizza | Actual food option: Pizza");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Sandwiches | Actual food option: Sandwiches");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Seafood | Actual food option: Seafood");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Steak | Actual food option: Steak");
formatter.write("08-23-2020 23:52:24 INFO: Expected food option: Sushi | Actual food option: Sushi");
formatter.write("08-23-2020 23:52:24 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 23:52:24");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});