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
formatter.write("08-24-2020 02:57:57 INFO:  Click: Search Restaurants button");
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
    },
    {
      "name": "@nav"
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
formatter.write("08-24-2020 02:57:57 INFO: Zip Code entered: 20191");
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
formatter.write("08-24-2020 02:57:57 INFO:  Entered zip code: 20191 | Address line contains zip code: Address: 2303 Soapstone Dr Ste A, Reston, VA 20191-4422");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-24-2020 02:57:57");
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
formatter.write("08-24-2020 02:57:57 INFO: Zip Code entered: aaaa1");
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
});