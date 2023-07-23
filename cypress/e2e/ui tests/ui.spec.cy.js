const HomePage = require('../ui page object models/ampolHomePage');
const AmpolChargePage = require('../ui page object models/ampolChargePage');
const AmpolEnergyPage = require('../ui page object models/ampolEnergyPage');
const AmpolEnergySignUpPage = require('../ui page object models/ampolEnergySignupPage');

describe('Part2: UI Testing', () => {
  const homePage = new HomePage();
  const ampolChargePage = new AmpolChargePage();
  const ampolEnergyPage = new AmpolEnergyPage();
  const ampolEnergySignupPage = new AmpolEnergySignUpPage();
  
  beforeEach(()=>{
    cy.intercept('POST', 'https://api.ampolenergy.com.au/onboarding/v1.0/lead').as('leadIdPostRequest');
  });
  
  it('should go to ampol home, verify urls, and send the user to sign up', () => {
    homePage.visit();
    homePage.hoverOverButton(homePage.yourVehicleButton);
    homePage.selectFromDropDown('EV Charging');

    cy.url().should('contain', 'https://ampcharge.ampol.com.au');

    ampolChargePage.ampolEnergyIcon.click({force: true});
    ampolEnergyPage.switchNowButton.click({force: true});

    cy.url().should('contain', 'https://energy.ampol.com.au/sign-up/postcode');
  });
  it('Bonus Scenario: Get the lead details by intercepting the lead post request, and write the files into your fixtures folder', () => {
    ampolEnergySignupPage.visit();
    ampolEnergySignupPage.enterPostcodeAndViewPlans('4011', 'Clayfield 4011 QLD');
    cy.wait('@leadIdPostRequest').then((interception) => {
      const response = interception.response.body
      cy.writeFile('cypress/fixtures/leadid-response.json', response);
      const leadId = response.leadId;
      cy.visit(`https://energy.ampol.com.au/sign-up/agent?leadid=${leadId}`);
    });
  });
});