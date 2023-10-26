const { defineConfig } = require("cypress");

module.exports = defineConfig({
         defaultCommandTimeout: 5000,
         chromeWebSecurity: false, // Set to false to disable web security for Chrome (if needed)
         chromeExecutable: '/usr/bin/google-chrome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // inside config.browsers array each object has information like
    },
  },
});