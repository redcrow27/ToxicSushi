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
formatter.write("08-24-2020 22:49:41 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Directions information",
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
  "name": "I click \"Search\" button",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:49:41 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Directions\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 22:49:41 INFO:  Click: Directions button");
formatter.result({
  "status": "passed"
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
formatter.write("08-24-2020 22:49:41 INFO: Expected field: Minutes | Actual field: 2 mins");
formatter.write("08-24-2020 22:49:41 INFO: Expected field: Miles | Actual field: 0.4 mi");
formatter.write("08-24-2020 22:49:41 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-24-2020 22:49:41");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});