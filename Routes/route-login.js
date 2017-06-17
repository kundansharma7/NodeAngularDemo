const { loginService } = require('../Services/login-service');
const config = require('getconfig');

function loginRoute(app) {
    require('../Models/models')(app);
    app.post(config.routes.login, (async(req, res) => {
        var result = await loginService.login(app, req);
        if(result.length > 0) {
            res.send({
                success: "true",
                statusCode: 200,
                data: result
            });
        } else {
            res.send({
                success: "false",
                statusCode: 500,
                data: []
            });
        }
    }));

    app.post(config.routes.signup, (async(req, res) => {
        var result = await loginService.signUp(app, req);
        if(result.length > 0) {
            res.send({
                success: "true",
                statusCode: 200,
                data: result
            });
        } else {
            res.send({
                success: "false",
                statusCode: 500,
                data: []
            });
        }
    }))
}
module.exports.loginRoute = loginRoute;