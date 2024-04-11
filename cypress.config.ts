const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}",
    baseUrl: "https://test-rpg.vercel.app",
    watchForFileChanges: false,
    screenshotsFolder: "tests/screenshot",
    videosFolder: "tests/videos",
    fixturesFolder: "tests/fixtures",
    viewportHeight: 960, // like macbook 16
    viewportWidth: 1650, // > than macbook-16 to avoid horizontal scrolling
  },
});
