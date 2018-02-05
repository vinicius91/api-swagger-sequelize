"use strict";

var JWT = require('jsonwebtoken');
var models = require('../models');

module.exports = {
    'token': tokenSecurityHandler
};

function tokenSecurityHandler(request, definition, key, callback) {
    try {
        var decoded = JWT.verify(key, process.env.JWT_SECRET);
        if(decoded) {
            models.Usuario.scope('complete').findOne({
                where: {username: decoded.username}
            }).then(resultado => {
                if(resultado) {
                    request.user_logged = resultado;
                    return callback();
                }
                return unauthorizedResponse(request);
            });
        } else {
            return unauthorizedResponse(request);
        }
    } catch (error) {
        return unauthorizedResponse(request);
    }
}

function unauthorizedResponse(request) {
    request.user_logged = null;
    request.res.status(401).json({message: "Unauthorized"});
    request.res.end();
}