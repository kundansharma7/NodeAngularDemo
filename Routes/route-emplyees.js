const responseObject = require('../common/responseObject');
const { employeeService } = require('../Services/employee-service');
const config = require('getconfig');

function employeesListRoute(app) {
    require('../Models/models')(app);
    app.get(config.routes.allemplist, (async (req, res) => {
        app.logger.info('Inside all employee');
        try{
        var result = await employeeService.getAllEmployees(app, req);
        if (result.length >= 0) {
            res.send({
                success: "true",
                statusCode: 200,
                data: result
            });
        } else {
            app.logger.warn('No employee records found');
            res.send({
                success: "false",
                statusCode: 400,
                data: []
            });
        }
        }catch(ex) {
            app.logger.error('Handle exception in fetching record');
            res.send({
                success: "false",
                statusCode: 500,
                data: []
            });
        }
    }))
    app.get(config.routes.specificemp, (async (req, res) => {
        if (req.query.id !== undefined && req.query.id !== null && req.query.id !== '') {
            var result = await employeeService.getEmployees(app, req);
            if (result.length > 0) {
                res.send({
                    success: "true",
                    statusCode: 200,
                    data: result
                });
                //responseObject.getResponseObject(res, config, err, {id : person.id}, "Registered Successfully");
            } else {
                res.send({
                    success: "false",
                    statusCode: 500,
                    data: []
                });
            }
        } else {
            res.send({
                success: "false",
                statusCode: 500,
                data: []
            });
        }

    }));
    app.post(config.routes.emplist, (async (req, res) => {
        if ((req.body.ename !== undefined && req.body.ename !== null && req.body.ename !== '')
            && (req.body.eaddress !== undefined && req.body.eaddress !== null && req.body.eaddress !== '')
            && (req.body.esal !== undefined && req.body.esal !== null && req.body.esal !== '')) {
            let result = await employeeService.insertEmployee(app, req);
            console.log(result.id);
            if (result.id > 0) {
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
        }
    }))
    app.put(config.routes.emplist, (async (req, res) => {
        if ((req.body.ename !== undefined && req.body.ename !== null && req.body.ename !== '')
            && (req.body.eaddress !== undefined && req.body.eaddress !== null && req.body.eaddress !== '')
            && (req.body.esal !== undefined && req.body.esal !== null && req.body.esal !== '')) {
            let result = await employeeService.updateEmployee(app, req);
            // console.log(result.length);
            if (result.length > 0) {
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
        }
    }));
    app.delete(config.routes.emplist, (async (req, res) => {
        if (req.query.id !== undefined && req.query.id !== null && req.query.id !== '') {
            let result = await employeeService.deleteEmployee(app, req);
            if (result > 0) {
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
        }
    }));
}
module.exports.employeesListRoute = employeesListRoute;