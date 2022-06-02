const { defineConfig } = require('cypress')

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  trashAssetsBeforeRuns: true,
  watchForFileChanges: false,
  video: true,
  videoUploadOnPasses: true,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  projectId: 'czd3j5',
  waitForAnimations: true,
  defaultCommandTimeout: 5000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://demoqa.com/',
    excludeSpecPattern: '**/examples/**',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
