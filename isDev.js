require('isNodeJS');
var exposeToGlobal = require('exposeToGlobal');
module.exports = exposeToGlobal("isDev", isNodeJS ? process.env.__DEV__ === "true" : global.__DEV__ === true);
