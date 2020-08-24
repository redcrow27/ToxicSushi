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
formatter.write("08-24-2020 00:39:28 INFO:  Click: Search Restaurants button");
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
    },
    {
      "name": "@nav"
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
formatter.write("08-24-2020 00:39:28 INFO:  Zip Code field is Displayed: true");
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
formatter.write("08-24-2020 00:39:28 INFO: Search By field selected. ");
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
formatter.write("08-24-2020 00:39:28 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-24-2020 00:39:28");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});