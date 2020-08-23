$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/homePage.feature");
formatter.feature({
  "name": "Home Page tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@homePage"
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
formatter.scenario({
  "name": "Navigation bar test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
    },
    {
      "name": "@bar"
    }
  ]
});
formatter.step({
  "name": "I login the page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_login_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify navigation buttons displayed following data:",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_navigation_buttons_displayed_following_data(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.write("08-23-2020 15:50:25 INFO: Expected navigation button: Home | Actual navigation button: Home");
formatter.write("08-23-2020 15:50:25 INFO: Expected navigation button: Search Restaurants | Actual navigation button: Search Restaurants");
formatter.write("08-23-2020 15:50:25 INFO: Expected navigation button: Search Fun Places | Actual navigation button: Search Fun Places");
formatter.write("08-23-2020 15:50:25 INFO: Expected navigation button: My Favorites | Actual navigation button: My Favorites");
formatter.write("08-23-2020 15:50:25 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 15:50:25");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});