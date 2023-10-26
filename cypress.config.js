const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // inside config.browsers array each object has information like
      // {
      //   name: 'chrome',
      //   channel: 'canary',
      //   family: 'chromium',
      //   displayName: 'Canary',
      //   version: '80.0.3966.0',
      //   path:
      //    '/Applications/Canary.app/Contents/MacOS/Canary',
      //   majorVersion: 80
      // }
      return {
        browsers: config.browsers.filter(
          (b) => b.family === 'chromium' && b.name !== 'electron'
        ),
      };
    },
    // Add a browser setting here, for example:
    browser: "chrome", // You can specify the browser you want to use
  },
});
