const { constants } = require ("../constants");

const errorHandler = (err, req, res ,next) => { 
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            req.json({ title: "Validation Failed", message: err.message, stackTrace: err});
            break;
        case constants.NOT_FOUND:
            res.json({ title: "Not found", message: err.message, stackTrace: err.stack});
            default:
                break;
        case constants.UNAUTHORIZED:
            req.json({ title: "Unauthorized", message: err.message, stackTrace: err});
            break;

        case constants.FORBIDDEN:
            req.json({ title: "Forbidden", message: err.message, stackTrace: err});
            break;

        case constants.VALIDATION_ERROR:
            req.json({ title: "Validation Error", message: err.message, stackTrace: err});
                break;

    
        case constants.SERVER_ERROR:
            req.json({ title: "Server Error", message: err.message, stackTrace: err});
            break;
    }

};

module.exports = errorHandler;