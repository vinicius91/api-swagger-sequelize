'use strict';

var util = require('util');

module.exports = {
    listCoordenada: list,
    saveCoordenada: save,
    findCoordenada: find,
    updateCoordenada: update,
    deleteCoordenada: remove
};


function find(req, res) {
  var coordenada_id = req.swagger.params.coordenada_id.value || null;

  
  res.json({
      'id': 1,
      'latitude': 1,
      'longitude': 12.5,
      'geom': 'string de geometria',
  });
}

function save(req, res) {
  
    res.json({
        'id': 1,
        'latitude': 1,
        'longitude': 12.5,
        'geom': 'string de geometria',
    });
}

function list(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  
    // this sends back a JSON response which is a single string
    res.json({
        'id': 1,
        'latitude': 1,
        'longitude': 12.5,
        'geom': 'string de geometria',
    });
  }
  
  function update(req, res) {
      // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
      var coordenada_id = req.swagger.params.coordenada_id.value || null;
    
      // this sends back a JSON response which is a single string
      res.json({
        'id': 1,
        'latitude': 1,
        'longitude': 12.5,
        'geom': 'string de geometria',
    });
  }

  function remove(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    var coordenada_id = req.swagger.params.coordenada_id.value || null;
  
    // this sends back a JSON response which is a single string
    res.json({
        'id': 1,
        'latitude': 1,
        'longitude': 12.5,
        'geom': 'string de geometria',
    });
}
