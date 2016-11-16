
var isNodeJS = require('isNodeJS');

module.exports = isNodeJS ?
  process.env.__DEV__ === "true" :
  global.__DEV__ === true;
