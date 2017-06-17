const _ = require('underscore');
var employeeService = {};
employeeService.getAllEmployees = function (app, req) {
    return app.models.empList.findAll().then(users => {
         return  _.map(users, function(user){   //only trying to learn underscore
            let newItem = {};
            newItem.newid = user.id * 2;
            newItem.id = user.id;
            newItem.ename = user.ename;
            newItem.eaddress = user.eaddress;
            newItem.esal = user.esal;
            return newItem;
         });
    }).catch(err => {
        return err;
    });
}
employeeService.getEmployees = function (app, req) {
    return app.models.empList.findAll(
        {
            where: {
                id: req.query.id
            }
        }
    ).then(users => {
        //console.log(users);
        return users;
    }).catch(err => {
        return err;
    });
}
employeeService.insertEmployee = function (app, req) {
    return app.models.empList.create(
        {
            ename: req.body.ename,
            eaddress: req.body.eaddress,
            esal: req.body.esal
        }
    )
    /*.then(task => {
        console.log('***********', task)
        return true;
        //return task.destroy();
    }).then((err) => {
        console.log('#############', err)
        return false;
    })*/
}
employeeService.updateEmployee = function (app, req) {
    return app.models.empList.update(
        {
            ename: req.body.ename,
            eaddress: req.body.eaddress,
            esal: req.body.esal
        },
        {
            where: { id: req.body.id }
        }
    ).then(result => {
        return result;
    });
}
employeeService.deleteEmployee = function (app, req) {
    return app.models.empList.destroy({
        where: {
            id: req.query.id
        }
    }).then(result => {
        console.log(result);
        return result;
    })
}
module.exports.employeeService = employeeService; 