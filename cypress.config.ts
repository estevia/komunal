import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "6n12hw",
  env: {
    browserPermissions: {
      notifications: 'block',
    },
    webUrl: 'https://user.depositobpr.id',
  },
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  requestTimeout: 60000,
  viewportWidth: 1536,
  viewportHeight: 960,
  video: false,
  retries: {
    runMode: 2,
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
  },
})