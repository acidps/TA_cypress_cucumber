# Description

This is an adptation of the course provided by cypress.io https://learn.cypress.io/testing-your-first-application using Cucumber.

# Run

Headless:

``npx cypress run``

Visual:

``npx cypress open`` 

# Pre-requisites

## node

## cypress testing application

Check https://learn.cypress.io/testing-your-first-application/app-install-and-overview for setup

- Clone the repo:

`git clone https://github.com/cypress-io/cypress-realworld-testing-course-app.git`

- Go to cloned repo directory:

`cd */cypress-realworld-testing-course-app.git`

- Install modules:

`npm install`

- Start the app:

`npm run dev`

## cypress 

- Check https://learn.cypress.io/testing-your-first-application/installing-cypress-and-writing-your-first-test

- Install:

`npm install cypress --save-dev`

- Start cypress: 

`npx cypress open`

## cypress cucumber-preprocessor

`npm install --save-dev cypress-cucumber-preprocessor`

Adapt cypress.config.js according to this documentation: https://docs.cypress.io/guides/references/configuration#Testing-Type-Specific-Options

## .cypress-cucumber-preprocessorrc.json

Manually, create the cucumber configuration file. 

Example:

```
{
    "json": {
      "enabled": false,
      "output": "jsonlogs/log.json",
      "formatter": "cucumber-json-formatter.exe"
    },
    "messages": {
      "enabled": false,
      "output": "jsonlogs/messages.ndjson"
    },
    "html": {
      "enabled": true
    },
    "stepDefinitions": [
      "[filepath]/**/*.{js,ts}",
      "[filepath].{js,ts}",
      "e2e/step_definitions/*.{js,ts}",
      "[filepath]\\***.{js,ts}",
      "[filepath].{js,ts}",
      "e2e\\step_definitions\\*.{js,ts}"
    ]
  }
  ```