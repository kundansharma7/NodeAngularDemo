module.exports = function (sequelize, Sequelize) {
    return emplist = sequelize.define('empList', {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ename: {
            type: Sequelize.STRING
        },
        eaddress: {
            type: Sequelize.STRING
        },
        esal: {
            type: Sequelize.BIGINT
        }
    });
}