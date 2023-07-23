const BasePage = require('./basePage');

class AmpolChargePage extends BasePage {
  constructor() {
    super(Cypress.env('ampol_charge_url'));
  }

  get chargingAtHomeButton() {
    return this.getTagWithLabelText('a', /charging at home/i);
  }

  get chargingOnTheRoadButton() {
    return this.getTagWithLabelText('a', /charging on the road/i);
  }

  get businessSolutionsButton() {
    return this.getTagWithLabelText('a', /business solutions/i);
  }

  get faqsButton() {
    return this.getTagWithLabelText('a', /faqs/i);
  }

  get contactUsButton() {
    return this.getTagWithLabelText('a', /contact us/i);
  }

  get ampolEnergyIcon() {
    return cy.get('a.link[href="https://energy.ampol.com.au/"]');
  }
}

module.exports = AmpolChargePage;
