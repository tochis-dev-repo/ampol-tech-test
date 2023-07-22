const BasePage = require('./basePage');

class HomePage extends BasePage {
  get yourVehicleButton() {
    return this.getTagWithLabelText('a', /your vehicle/i);
  }

  get yourBusinessButton() {
    return this.getTagWithLabelText('a', /your business/i);
  }

  get convenienceButton() {
    return this.getTagWithLabelText('a', /convenience/i);
  }

  get aboutAmpolButton() {
    return this.getTagWithLabelText('a', /about ampol/i);
  }

  hoverOverButton(button) {
    button.realHover({ scrollBehavior: "center" });
  }

  selectFromDropDown(name){
    this.getTagWithLabelText('a', name).click({force:true});
  }
}

module.exports = HomePage;
