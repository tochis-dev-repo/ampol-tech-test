const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseUrl: "https://www.ampol.com.au/",
    ampol_charge_url: "https://ampcharge.ampol.com.au/",
    ampol_energy_url: "https://energy.ampol.com.au/",
    ampol_energy_sign_up_url: "https://energy.ampol.com.au/sign-up/postcode"
  }
});

