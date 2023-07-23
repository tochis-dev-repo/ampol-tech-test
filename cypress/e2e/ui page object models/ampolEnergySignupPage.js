const BasePage = require('./basePage');

class AmpolEnergySignUpPage extends BasePage {
  constructor() {
    super(Cypress.env('ampol_energy_sign_up_url'));
  }

  get suburbOrPostcodeTextField() {
    return cy.get('input[id="postcode"]');
  }

  suburbDropDownOption(suburb){
    return this.getTagWithLabelText('[data-testid^="postcode-option"]', new RegExp(`${suburb}`, 'i'));
  }

  get viewPlansButton() {
    return this.getTagWithLabelText('button', /view plans/i);
  }

  enterPostcodeAndViewPlans(postcode, suburbText) {
    this.suburbOrPostcodeTextField.type(postcode);
    this.suburbDropDownOption(suburbText).click();
    this.viewPlansButton.click();
  }
}

module.exports = AmpolEnergySignUpPage;
