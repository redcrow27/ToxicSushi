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
formatter.scenarioOutline({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@nav"
    }
  ]
});
formatter.step({
  "name": "I choose \"\u003crating\u003e\" rating option",
  "keyword": "Given "
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify rating is \"\u003crating\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "rating"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    },
    {
      "cells": [
        "3"
      ]
    },
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
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
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I choose \"1\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO: Selected rating: 1");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.SearchResPageTest.i_verify_rating_is(SearchResPageTest.java:161)\n\tat ✽.I verify rating is \"1\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:97)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Screenshot | 08-24-2020 19:41:00");
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
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I choose \"2\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO: Selected rating: 2");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.SearchResPageTest.i_verify_rating_is(SearchResPageTest.java:161)\n\tat ✽.I verify rating is \"2\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:97)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "Screenshot | 08-24-2020 19:41:00");
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
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I choose \"3\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO: Selected rating: 3");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat step_definitions.SearchResPageTest.i_verify_rating_is(SearchResPageTest.java:161)\n\tat ✽.I verify rating is \"3\"(file:///Users/redcrow/Desktop/Projects/ToxicSushi/src/test/resources/features/searchResPage.feature:97)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "Screenshot | 08-24-2020 19:41:00");
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
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I choose \"4\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO: Selected rating: 4");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"4\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO: Actual rating: 4");
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
formatter.step({
  "name": "I click \"Search Restaurants\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by rating",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I choose \"5\" rating option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_rating_option(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO: Selected rating: 5");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HomePageTest.iClickButton(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify rating is \"5\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_rating_is(java.lang.String)"
});
formatter.write("08-24-2020 19:41:00 INFO: Actual rating: 5");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});