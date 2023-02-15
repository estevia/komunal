import './function.js';

const dotenvPlugin = require('cypress-dotenv');
module.exports = (on, config) => {
  config = dotenvPlugin(config,null,true)
  return config
}
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})