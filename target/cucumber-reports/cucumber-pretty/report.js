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
  "status": "skipped"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Verify Title of the Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
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
  "status": "skipped"
});
formatter.step({
  "name": "I verify title is \"Toxic Sushi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_title_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Log in credentials test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
    }
  ]
});
formatter.step({
  "name": "I login with invalid  credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_login_with_invalid_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify \"Error message\" as \"Your email or password is incorrect! Please try again!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I clear the fields",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_clear_the_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click \"close\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I login the page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_login_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify \"Hi message\" as \"Hi, erdi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "skipped"
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
      "name": "@singout"
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
  "status": "skipped"
});
formatter.step({
  "name": "I click \"Sign out\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify message does not exist as \"Hi, erdi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iVerifyMessageDoesNotExistAs(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "Open user Toxic Sushi page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "I open Home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iOpenHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Navigation bar test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
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
  "status": "skipped"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});