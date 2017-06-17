/*
var fs = require('fs');
var sequelize = require('sequelize');
var path = require('path');
var configDir = __dirname;
var modelDir = configDir + '/../Models';
var dbPath = require(configDir/config.json)["settings"]["db"];

var sequelize = new sequelize(path, 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        idle: 1000
    },
    define: {
        timestamps: false
    },
    logging: true
});

var db = {};
fs.readFileSync(modelDir).filter((file) => {
    return(file.indeOf(".")!== 0) && (file!== "index.js");
}).forEach((file) => {
    var model = sequelize["import"](path.join(modelDir, file));
    db[model.name] = model;
});
Object.keys(db).forEach(function(modelname){
    if("associate" in db[modelName]) {
        db[modelName]
    }
})
*/
const Sequelize = require('Sequelize');
module.exports = function (app) {
    //"use strict";
    var host = app.locals.database.host,
    userName = app.locals.database.user,
    password = app.locals.database.password,
    database = app.locals.database.database;
    return connection = new Sequelize(database, userName, password, {
        host: 'localhost',
        dialect: 'mysql',

        pool: {
            max: 20,
            min: 0,
            idle: 10000
        },

        define: {
            timestamps: false
        },
        logging: true
    });
}