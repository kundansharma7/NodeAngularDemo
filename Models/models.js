/*module.exports = function (sequlize, dataType) {
    return sequlize.define('users', {
        userid: {
            type: dataType.BIGINT
        },
        "password": {
            type: dataType.text
        }
    });
}*/

var Sequelize = require('Sequelize');

module.exports = function (app) {
    app.models = {};
    const sequelize = require('../config/mysqldb')(app);
    app.models.user = require('./userModel')(sequelize, Sequelize);
    app.models.empList = require('./empListModel')(sequelize, Sequelize);
    //console.log(connection);
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');

            app.models.user.sync().then(() => {
                // Table created
                //return User.create();
            });
            app.models.empList.sync();
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    //         next();
    //         global.models = models;
    //         global.db = db;

    //     }

    // }));
};