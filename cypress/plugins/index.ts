const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions');
const dotenvPlugin = require('cypress-dotenv');

module.exports = (on, config) => {
  config = cypressBrowserPermissionsPlugin(on, config);
  config = dotenvPlugin(config,null,true);
  return config
}

