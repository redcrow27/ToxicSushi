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
  "status": "passed"
});
formatter.step({
  "name": "I verify title is \"Toxic Sushi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_title_is(java.lang.String)"
});
formatter.write("08-23-2020 17:30:11 INFO: Actual title is: Toxic Sushi");
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-23-2020 17:30:11");
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
  "status": "passed"
});
formatter.step({
  "name": "I verify \"Error message\" as \"Your email or password is incorrect! Please try again!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_as(java.lang.String,java.lang.String)"
});
formatter.write("08-23-2020 17:30:11 INFO:  Message type: Error message Result: Your email or password is incorrect! Please try again!");
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-23-2020 17:30:11");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear the fields",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_clear_the_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"close\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-23-2020 17:30:11 INFO:  Click: close button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login the page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_login_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"Hi message\" as \"Hi, erdi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.i_verify_as(java.lang.String,java.lang.String)"
});
formatter.write("08-23-2020 17:30:11 INFO:  Message type: Hi message Result: Hi, erdi");
formatter.embedding("image/png", "embedded2.png", "Screenshot | 08-23-2020 17:30:11");
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
  "name": "Sign out test",
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
  "status": "passed"
});
formatter.step({
  "name": "I click \"Sign out\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-23-2020 17:30:11 INFO:  Click: Sign out button");
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
formatter.write("08-23-2020 17:30:11 INFO: Hi, erdi is NOT displayed. Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded3.png", "Screenshot | 08-23-2020 17:30:11");
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
formatter.write("08-23-2020 17:30:11 INFO: Expected navigation button: Home | Actual navigation button: Home");
formatter.write("08-23-2020 17:30:11 INFO: Expected navigation button: Search Restaurants | Actual navigation button: Search Restaurants");
formatter.write("08-23-2020 17:30:11 INFO: Expected navigation button: Search Fun Places | Actual navigation button: Search Fun Places");
formatter.write("08-23-2020 17:30:11 INFO: Expected navigation button: My Favorites | Actual navigation button: My Favorites");
formatter.write("08-23-2020 17:30:11 INFO: Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded4.png", "Screenshot | 08-23-2020 17:30:11");
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
formatter.write("08-23-2020 17:30:11 INFO:  Click: I\u0027m hungry button");
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
formatter.write("08-23-2020 17:30:11 INFO: Search restaurants is displayed. Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded5.png", "Screenshot | 08-23-2020 17:30:11");
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
formatter.write("08-23-2020 17:30:11 INFO:  Click: Show me more button");
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
formatter.write("08-23-2020 17:30:11 INFO: We\u0027re happy to hear from you is displayed. Test completed. Screenshot: ");
formatter.embedding("image/png", "embedded6.png", "Screenshot | 08-23-2020 17:30:11");
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
  "name": "Search Restaurants test - Search button",
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
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search restaurants\" button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-23-2020 17:30:11 INFO:  Click: Search restaurants button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Search restaurants page open",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iVerifySearchRestaurantsPageOpen()"
});
formatter.write("08-23-2020 17:30:11 INFO: Expected Url: https://toxic-sushi-26692.herokuapp.com/search.html | Actual Url: https://toxic-sushi-26692.herokuapp.com/search.html");
formatter.embedding("image/png", "embedded7.png", "Screenshot | 08-23-2020 17:30:11");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});