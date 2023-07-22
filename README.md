# ampol-tech-test
A project written as a response to a technical test from ampol intended to demonstrate my abilities as an excellent SDET

## Installation & Setup: Local Machine
On your local machine, go to your CLI (Command Line Interface, for example - Terminal), navigate to the 
folder containing the package.json and enter the following command:
```bash
npm install
```
This will install all the necessary dependencies required for the project to run smoothly.

## How to run the framework: Local Machine
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