'use strict';

var util = require('util');

module.exports = {
    listEstaca: list,
    saveEstaca: save,
    findEstaca: find,
    updateEstaca: update,
    deleteEstaca: remove
};


function find(req, res) {
  var estaca_id = req.swagger.params.estaca_id.value || null;

  
  res.json({
      'id': 1,
      'numero': 1,
      'intermediario': 12.5,
      'relatorio': false,
      'coordenada_id': 1
  });
}

function save(req, res) {
  
    res.json({
        'id': 1,
        'numero': 1,
        'intermediario': 12.5,
        'relatorio': false,
        'coordenada_id': 1
    });
}

function list(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  
    // this sends back a JSON response which is a single string
    res.json({
        'id': 1,
        'numero': 1,
        'intermediario': 12.5,
        'relatorio': false,
        'coordenada_id': 1
    });
  }
  
  function update(req, res) {
      // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
      var estaca_id = req.swagger.params.estaca_id.value || null;
    
      // this sends back a JSON response which is a single string
      res.json({
          'id': 1,
          'numero': 1,
          'intermediario': 12.5,
          'relatorio': false,
          'coordenada_id': 1
      });
  }

  function remove(req, res) {
    // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
    var estaca_id = req.swagger.params.estaca_id.value || null;
  
    // this sends back a JSON response which is a single string
    res.json({
        'id': 1,
        'numero': 1,
        'intermediario': 12.5,
        'relatorio': false,
        'coordenada_id': 1
    });
}
