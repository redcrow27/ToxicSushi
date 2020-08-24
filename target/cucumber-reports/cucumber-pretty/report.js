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
formatter.write("08-24-2020 12:27:34 INFO:  Click: Search Restaurants button");
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
    },
    {
      "name": "@nav"
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
formatter.write("08-24-2020 12:27:34 INFO: Zip Code entered: 22180");
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
formatter.write("08-24-2020 12:27:34 INFO:  Click: Search button");
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
formatter.write("08-24-2020 12:27:34 INFO:  Entered zip code: 22180 | Address line contains zip code: Address: 141 Park St SE, Vienna, VA 22180-4607");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-24-2020 12:27:34");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});