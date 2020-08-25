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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
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
formatter.write("08-25-2020 10:44:09 INFO: Selected rating: 4");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
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
formatter.write("08-25-2020 10:44:09 INFO: Actual rating: 4");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
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
formatter.write("08-25-2020 10:44:09 INFO: Selected rating: 5");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
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
formatter.write("08-25-2020 10:44:09 INFO: Actual rating: 5");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Search by Type of food",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@nav"
    }
  ]
});
formatter.step({
  "name": "I choose \"\u003cfood\u003e\" food option",
  "keyword": "Given "
});
formatter.step({
  "name": "I click \"Search\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I verify Cuisines section have \"\u003cfood\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "food"
      ]
    },
    {
      "cells": [
        "American"
      ]
    },
    {
      "cells": [
        "Chinese"
      ]
    },
    {
      "cells": [
        "Italian"
      ]
    },
    {
      "cells": [
        "Japanese"
      ]
    },
    {
      "cells": [
        "Mexican"
      ]
    },
    {
      "cells": [
        "Pizza"
      ]
    },
    {
      "cells": [
        "Steak"
      ]
    },
    {
      "cells": [
        "Sushi"
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"American\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: American");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"American\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: American");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"Chinese\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: Chinese");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Chinese\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: Chinese");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"Italian\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: Italian");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Italian\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: Italian");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"Japanese\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: Japanese");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Japanese\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: Japanese");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"Mexican\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: Mexican");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Mexican\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: Mexican");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"Pizza\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: Pizza");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Pizza\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: Pizza");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"Steak\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: Steak");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Steak\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: Steak");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search Restaurants button");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Search by Type of food",
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
  "name": "I choose \"Sushi\" food option",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_choose_food_option(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Selected food: Sushi");
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
formatter.write("08-25-2020 10:44:09 INFO:  Click: Search button");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Cuisines section have \"Sushi\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchResPageTest.i_verify_Cuisines_section_have(java.lang.String)"
});
formatter.write("08-25-2020 10:44:09 INFO: Actual food: Sushi");
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});