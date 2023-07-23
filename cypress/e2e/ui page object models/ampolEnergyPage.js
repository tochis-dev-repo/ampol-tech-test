const BasePage = require('./basePage');

class AmpolEnergyPage extends BasePage {
  constructor() {
    super(Cypress.env('ampol_energy_url'));
  }

  get switchNowButton() {
    return this.getTagWithLabelText('[data-testid="Button"]', /switch now/i);

  }

  get switchNowNavButton() {
    return this.getTagWithLabelText('a', /switch now/i);
  }
  get electricityNavButton() {
    return this.getTagWithLabelText('a', /electricity/i);
  }

  get movingHomeNavButton() {
    return this.getTagWithLabelText('a', /moving home/i);
  }

  get aboutUsNavButton() {
    return this.getTagWithLabelText('a', /about us/i);
  }

  get helpAndSupportNavButton() {
    return this.getTagWithLabelText('a', /help and support/i);
  }

  get getInTouchNavButton() {
    return this.getTagWithLabelText('a', /get in touch/i);
  }
}

module.exports = AmpolEnergyPage;
