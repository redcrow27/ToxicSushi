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
formatter.write("08-23-2020 22:41:32 INFO:  Click: Search Restaurants button");
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
    },
    {
      "name": "@nav"
    }
  ]
});
formatter.step({
  "name": "I verify all fields available followind data:",
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
  "location": "step_definitions.SearchResPageTest.i_verify_all_fields_available_followind_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-23-2020 22:41:32 INFO: Expected field: Search By | Actual field: Search By");
formatter.write("08-23-2020 22:41:32 INFO: Expected field: Zip Code | Actual field: Zip Code");
formatter.write("08-23-2020 22:41:32 INFO: Expected field: Distance (mile) | Actual field: Distance (mile)");
formatter.write("08-23-2020 22:41:32 INFO: Expected field: Type | Actual field: Type");
formatter.write("08-23-2020 22:41:32 INFO: Expected field: Min Rating | Actual field: Min Rating");
formatter.write("08-23-2020 22:41:32 INFO: Expected field: Name | Actual field: Name");
formatter.write("08-23-2020 22:41:32 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 22:41:32");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});