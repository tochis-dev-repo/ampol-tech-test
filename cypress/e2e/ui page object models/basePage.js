class BasePage {
    constructor(url) {
      this.url = url;
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    getTitle() {
      return cy.title();
    }

    getTagWithLabelText(tag, labelText){
      return cy.get(tag).contains(labelText).first();
    }
  }
  
  module.exports = BasePage;
  