module.exports = function (sequelize, Sequelize) {
    return User = sequelize.define('user', {
        userName: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
}