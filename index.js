var bunyan = require("bunyan");
var PrettyStream = require("bunyan-prettystream");

module.exports = function(name, logLevel) {
  // Create a stdout pipe (to format the output from bunyan)
  var stdout = new PrettyStream();
  stdout.pipe(process.stdout);

  // Setup log
  var log = bunyan.createLogger({
    name: name,
    stream: stdout,
    level: logLevel
  });

  // Emplace the log in the global scope
  global.log = log;
};
