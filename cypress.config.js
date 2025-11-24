const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: [
      "cypress/e2e/**/*.cy.{js,mjs,ts}",
      "cypress/e2e/**/*.feature"
    ]
  },
});