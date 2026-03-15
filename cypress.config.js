const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "./cypress/tests/**.*",
    baseUrl: "https://the-internet.herokuapp.com"
  },
  //set timeout for whole project
  //defaultCommandTimeout: 10000
});
