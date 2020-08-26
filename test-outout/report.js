$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/workspace/CRB-Inventory/BNYM-POC-backend-master/src/test/java/com/bnym/poc/cucumber/Features/create.feature");
formatter.feature({
  "line": 1,
  "name": "Bnym create new",
  "description": "",
  "id": "bnym-create-new",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Bnym create test Scenario",
  "description": "",
  "id": "bnym-create-new;bnym-create-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user opened crbInventory page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is BNYMPOCFrontend",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user clicks on create button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003csource\u003e\" and \"\u003cdate of item\u003e\" and \"\u003cisin\u003e\" and \"\u003ccuspin\u003e\" and \"\u003csedol\u003e\" and \"\u003cprivate company name\u003e\" and \"\u003cnon permisible expected date\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "bnym-create-new;bnym-create-test-scenario;",
  "rows": [
    {
      "cells": [
        "source",
        "date of item",
        "isin",
        "cuspin",
        "sedol",
        "private company name",
        "non permisible expected date"
      ],
      "line": 9,
      "id": "bnym-create-new;bnym-create-test-scenario;;1"
    },
    {
      "cells": [
        "Stock",
        "12/31/2019",
        "is12877867",
        "cus95367678",
        "sed0912345678",
        "Tesla",
        "12/30/2022"
      ],
      "line": 10,
      "id": "bnym-create-new;bnym-create-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Bnym create test Scenario",
  "description": "",
  "id": "bnym-create-new;bnym-create-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user opened crbInventory page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of the page is BNYMPOCFrontend",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user clicks on create button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Stock\" and \"12/31/2019\" and \"is12877867\" and \"cus95367678\" and \"sed0912345678\" and \"Tesla\" and \"12/30/2022\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});