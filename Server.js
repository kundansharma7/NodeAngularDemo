const express = require('express');
const app = express();
const { router } = require('./router');
require('./config/configManager')(app);
const bodyParser = require('body-parser');
const config = require('getconfig');
require('dotenv').config();
const logger = require('./utils/logger');
app.logger = logger;

//console.log(config);
//console.log(app.get('env'));

app.use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: true
    }));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
router(app);
app.use(express.static('View'));
app.listen(config.port, (req, res) => {
    //console.log(app.locals);
    console.log(`${config.message} ${config.port}`);
})