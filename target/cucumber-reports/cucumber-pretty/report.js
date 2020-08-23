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
formatter.step({
  "name": "I login the page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_login_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log in credentials test",
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
  "name": "I verify \"Hi message\" as \"Hi, erdi\"",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_as(java.lang.String,java.lang.String)"
});
formatter.write("08-23-2020 18:02:49 INFO:  Message type: Hi message Result: Hi, erdi");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 18:02:49");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Sign out\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-23-2020 18:02:49 INFO:  Click: Sign out button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with invalid  credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_login_with_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"Error message\" as \"Your email or password is incorrect! Please try again!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_as(java.lang.String,java.lang.String)"
});
formatter.write("08-23-2020 18:02:49 INFO:  Message type: Error message Result: Your email or password is incorrect! Please try again!");
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-23-2020 18:02:49");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});