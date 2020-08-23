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
  "name": "Sign out test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
    },
    {
      "name": "@hey"
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
  "name": "I click \"Sign out\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-23-2020 16:52:11 INFO:  Click: Sign out button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"Hi, erdi\" is not Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iVerifyIsNotDisplayed(java.lang.String)"
});
formatter.write("08-23-2020 16:52:11 INFO: Hi, erdi is NOT displayed. And test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 16:52:11");
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
formatter.scenario({
  "name": "Show me more button test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
    },
    {
      "name": "@hey"
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
  "name": "I click \"Show me more\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-23-2020 16:52:11 INFO:  Click: Show me more button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"We\u0027re happy to hear from you\" is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iVerifyIsDisplayed(java.lang.String)"
});
formatter.write("08-23-2020 16:52:11 INFO: We\u0027re happy to hear from you is displayed. And test completed. Screenshot: ");
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-23-2020 16:52:11");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});