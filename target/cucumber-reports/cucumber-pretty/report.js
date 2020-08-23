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
      "name": "@nav"
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
formatter.write("08-23-2020 16:27:31 INFO:  Click: Sign out button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"Hi, erdi\" is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iVerifyIsDisplayed(java.lang.String)"
});
formatter.write("08-23-2020 16:27:31 INFO: Hi, erdi is displayed: false");
formatter.write("08-23-2020 16:27:31 INFO:  Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 16:27:31");
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
  "name": "I\u0027m hungry button test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
    },
    {
      "name": "@nav"
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
  "name": "I click \"I\u0027m hungry\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-23-2020 16:27:31 INFO:  Click: I\u0027m hungry button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"Search restaurants\" is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iVerifyIsDisplayed(java.lang.String)"
});
formatter.write("08-23-2020 16:27:31 INFO: Search restaurants is displayed: true");
formatter.write("08-23-2020 16:27:31 INFO:  Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-23-2020 16:27:31");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});