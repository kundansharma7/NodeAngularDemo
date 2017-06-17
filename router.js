const { loginRoute } = require('./Routes/route-login');
const { employeesListRoute } = require('./Routes/route-emplyees');

function router (app) {
    loginRoute(app);
    employeesListRoute(app);

}

module.exports.router = router;