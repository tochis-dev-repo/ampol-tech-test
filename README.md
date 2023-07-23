# ampol-tech-test
A project written as a response to a technical test from ampol intended to demonstrate my abilities as an excellent SDET

## Installation & Setup: Local Machine
On your local machine, go to your CLI (Command Line Interface, for example - Terminal), navigate to the 
folder containing the package.json and enter the following command:
```bash
npm install
```
This will install all the necessary dependencies required for the project to run smoothly.
## Part One: API Test
### How to run the framework: Local Machine
This project was implemented using cypress, thus to run on your local machine, you can use one of the following commands:
#### npx cypress run --env ENVIRONMENT_VARIABLES
For example:
```bash
npx cypress run --env weather_api_server=https://api.weatherapi.com/v1/current.json,key=d752d6efd45a4c458b611524231407
```

This will run the tests in headless mode.
Please note that in this example we passed in the *weather_api_server* and the *key* as environment variables.

To run and visualize the tests:
#### npx cypress open --env ENVIRONMENT_VARIABLES
For example:
```bash
npx cypress open --env weather_api_server=https://api.weatherapi.com/v1/current.json,key=d752d6efd45a4c458b611524231407
```

Note: you can access video results of the test in the _cypress/videos_ folder. Also the results will be displayed in the console of your CLI.

## Part Two: UI Test
### How to run the UI Tests: Local Machine
You can run in two ways.
* Use the Cypress interface by launching ```cypress open``` via your terminal
* Use the Command ```cypress run cypress/e2e/ui tests/ui.spec.cy.js```
    * _Note: the path is the relative path of the ui tests as stored in this repo_

### Packages used in this project
The following packages were used:
* [xml-js](https://www.npmjs.com/package/xml-js): _this is an xml to json (and vice versa) parser. It was used to convert json objects to xml as requested_
* [cypress-real-events](https://www.npmjs.com/package/cypress-real-events): _this is a package I found to simulate real events, 
in this case the 'hover' event. The reason I used this package is because, the standard .trigger or invoke were not doing the job_
    * I will note that there is a drawback to using this package. It only works on chrome browsers 🙁. With enough time, I should be able to find a more suitable solution.