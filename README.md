# ampol-tech-test
A project written as a response to a technical test from ampol intended to demonstrate my abilities as an excellent SDET

## Installation & Setup: Local Machine
On your local machine, go to your CLI (Command Line Interface, for example - Terminal), navigate to the 
folder containing the package.json and enter the following command:
```bash
npm install
```
This will install all the necessary dependencies required for the project to run smoothly.

## Run all tests on local machine
You can run all tests by simply going to your CLI (Terminal) and entering the following command:
```bash
npx cypress run --env key=d752d6efd45a4c458b611524231407 --headless
```
**NOTE**
* I passed in the key as an environment variable on the local machine, but on the CI it is stored properly (as is the standard practice)
    * I didn't store the key in a config file, and ideally **the key should not be visible in a README file** I only showed the key here because this is a test project. Real projects should **NEVER** expose keys.


## Part One: API Test
### How to run the API Tests: Local Machine
This project was implemented using cypress, thus to run on your local machine, you can use one of the following commands:
#### npx cypress run |TEST_SPEC_PATH| --env ENVIRONMENT_VARIABLES
For example:
```bash
npx cypress run --spec "cypress/e2e/api tests/weather.api.spec.cy.js" --env key=d752d6efd45a4c458b611524231407 --headless
```

This will run the tests in headless mode.
Please note that in this example we passed in the *weather_api_server* and the *key* as environment variables.

To run and visualize the tests:
#### npx cypress open --env ENVIRONMENT_VARIABLES
For example:
```bash
npx cypress open --env key=d752d6efd45a4c458b611524231407
```

Notes
* You can access video results of the test in the _cypress/videos_ folder. Also the results will be displayed in the console of your CLI.

## Part Two: UI Test
### How to run the UI Tests: Local Machine
You can run in two ways.
* Use the Cypress interface by launching ```npx cypress open``` via your CLI(terminal)
* Use the Command ```npx cypress run --spec "cypress/e2e/ui tests/ui.spec.cy.js" --headless``` also via your CLI(terminal)
    * _Note: the path is the relative path of the ui tests as stored in this repo_

### Packages used in this project
The following packages were used:
* [xml-js](https://www.npmjs.com/package/xml-js): _this is an xml to json (and vice versa) parser. It was used to convert json objects to xml as requested_
* [cypress-real-events](https://www.npmjs.com/package/cypress-real-events): _this is a package I found to simulate real events, 
in this case the 'hover' event. The reason I used this package is because, the standard .trigger or invoke were not doing the job_
    * I will note that there is a drawback to using this package. It only works on chrome browsers 🙁. With enough time, I should be able to find a more suitable solution.

### To watch the project on CircleCI
You can watch the project via [this link](https://cloud.cypress.io/invitation/881bb8d1-40f1-46aa-a85e-37e218c8265a)

It will take you to cypress cloud, where I have set the project up through Circle CI to run anytime I make a push to my repo.

* The invitation links are limited as my cypress cloud account is free tier. If you need a new link, please contact me. 🙂