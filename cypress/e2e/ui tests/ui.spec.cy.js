const HomePage = require('../ui page object models/ampolHomePage');
const AmpolChargePage = require('../ui page object models/ampolChargePage');
const AmpolEnergyPage = require('../ui page object models/ampolEnergyPage');

describe('Part2: UI Testing', () => {
  const homePage = new HomePage();
  const ampolChargePage = new AmpolChargePage();
  const ampolEnergyPage = new AmpolEnergyPage();

  it('should go to ampol home, verify urls, and send the user to sign up', () => {
    homePage.visit();
    homePage.hoverOverButton(homePage.yourVehicleButton);
    homePage.selectFromDropDown('EV Charging');

    cy.url().should('contain', 'https://ampcharge.ampol.com.au');

    ampolChargePage.ampolEnergyIcon.click({force: true});
    ampolEnergyPage.switchNowButton.click({force: true});

    cy.url().should('contain', 'https://energy.ampol.com.au/sign-up/postcode');
  });
});