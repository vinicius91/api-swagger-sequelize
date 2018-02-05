'use strict';

var Fs = require('fs');
var Path = require('path');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('roadcalcapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    }
});

var db = {};

Fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function(file) {
    var model = sequelize.import(Path.join(__dirname, file));
    db[model.name] = model;
});

// Mapping associations
Object.keys(db).forEach(function(name) {
    if ('associate' in db[name]) {
        db[name].associate(db);
    }
});

// Mapping scopes
Object.keys(db).forEach(function(name) {
    if ('loadScopes' in db[name]) {
        db[name].loadScopes(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;