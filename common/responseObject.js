exports.getResponseObject = function (resp, config, err, items, message) {

    if (err) {
        resp.send({
            "statusCode": config.statusCode.serverError.service_unavailable,
            "response": {
                "state": config.out.err,
                "err": err,
                "message": message,
                "data": {}
            }
        });
    }
    else if (!err) {
        resp.send({
            "statusCode": config.statusCode.success.OK,
            "response": {
                "state": config.out.suc,
                "err": '',
                "message": message,
                "data": items
            }
        });
    }
    else {
        resp.send({
            "statusCode": config.statusCode.serverError.internal_server_error,
            "response": {
                "state": config.out.err,
                "err": 'undefined',
                "message": message,
                "data": {}
            }
        });
    }

};

exports.getBadRequestResponseObject = function (resp, config, message) {
    resp.send({
        "statusCode": config.statusCode.clientError.bad_request,
        "response": {
            "state": config.out.err,
            "err": '',
            "message": message,
            "data": {}
        }
    });
};

exports.sendUnauthorisedResponseObject = function (resp, config, message) {
    resp.send({
        "statusCode": config.statusCode.clientError.unauthorized,
        "response": {
            "state": config.out.err,
            "err": '',
            "message": message,
            "data": {}
        }
    });
};

exports.sendResponseMessage = function (res, config, data, message, state, statusCode) {
    res.send({
        "statusCode": statusCode,
        "response": {
            "state": state,
            "err": '',
            "message": message,
            "data": data
        }
    });
}