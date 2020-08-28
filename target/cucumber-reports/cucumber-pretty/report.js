$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/homePage.feature");
formatter.feature({
  "name": "Home Page tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@homePage"
    },
    {
      "name": "@smoke"
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
  "name": "Verify Title of the Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@homePage"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@title"
    }
  ]
});
formatter.step({
  "name": "I verify title is \"Toxic Sushi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_title_is(java.lang.String)"
});
formatter.write("08-27-2020 21:28:24 INFO: Actual title is: Toxic Sushi");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-27-2020 21:28:24");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});