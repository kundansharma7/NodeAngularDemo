var conf = require('nconf');

module.exports = function (app) {
    conf.use('file', {file: __dirname + '/config.json'});
    try {
	    app.locals = conf.get().settings;
    }
    catch (error) {
        console.log("Error in ConfigManager: " + error.code + " " + error.message);
    }
};