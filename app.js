'use strict';

var SwaggerExpressMW = require('swagger-express-mw');
var Express = require('express');
var Dotenv = require('dotenv').config();
var Multer = require('multer');

var app = require('express')();
//var securityHandler = require('./api/helpers/security_handler.js');

module.exports = app;

var config = {
    appRoot: __dirname,
    //swaggerSecurityHandlers: { token: securityHandler.token }
}

SwaggerExpressMW.create(config, function(error, swaggerExpress) {
    if (error) { throw error; }

    // Swagger UI
    var swaggerUiUrl = process.env.SWAGGERUI_URL || '/docs';
    var swaggerUiAPIDocs = process.env.SWAGGERUI_APIDOCS || '/api-docs';
    var swaggerUiDir = process.env.SWAGGERUI_DIR || 'public';
    app.use(swaggerExpress.runner.swaggerTools.swaggerUi({
        'swaggerUi': swaggerUiUrl,
        'apiDocs': swaggerUiAPIDocs,
        'swaggerUiDir': swaggerUiDir
    }));

    // Upload with multer
    app.use(Multer({ limits: { fileSize: 2000000 }}).any());

    // Static files
    //app.use('/obra-direta/diario/foto', Express.static(process.env.OD_DIARIO_FOTO_DIR));

    // middleware
    swaggerExpress.register(app);

    var port = process.env.SERVER_PORT || 3000;
    app.listen(port);
});
