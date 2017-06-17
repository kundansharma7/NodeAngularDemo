var loginservice = {};
loginservice.login = function (app, req) {
    if (req.body !== undefined && req.body !== null) {
        return app.models.user.findAll(
            {
                where: {
                    userName: req.body.userName,
                    password: req.body.password
                }
            }
        ).then(users => {
            //console.log(users);
            return users;
        }).catch(err => {
            return err;
        });
    }
}
loginservice.signUp = function(app, req) {
    return app.models.user.create(
        {
            userName: req.body.userName,
            password: req.body.password
        }
    )
}
module.exports.loginService = loginservice;