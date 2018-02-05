'use strict';


var models = require('../models');

module.exports = {
    categoriaListar: listar,
    categoriaExibir: exibir,
    categoriaInserir: inserir,
    categoriaAtualizar: atualizar,
    categoriaRemover: remover
};

function listar(request, response) {
    models.Categoria.findAll({ order: [['nome', 'ASC']] })
    .then(registros => {
        return (Array.isArray(registros) && registros.length) ?
        response.json(registros) : response.send(204);
    }).catch(function (error) {
        console.log(error);
        response.status(500).send(error);
    });
}

function exibir(request, response) {
    var categoria_id = request.swagger.params.categoria_id.value || null;

    models.Categoria.findById(categoria_id)
    .then(registro => {
        return (registro) ?
        response.json(registro) :
        response.status(404).send('Categoria não encontrada.');
    }).catch(function (error) {
        console.log(error);
        response.status(500).send(error);
    });
}

function inserir(request, response) {
    var registro = null;
    return models.sequelize.transaction(function (t) {
        var body = request.swagger.params.body.value;

        return models.Categoria.create(
            body, { transaction: t }
        ).then(function (resultado) { registro = resultado });
    }).then(function () {
        response.status(201).send(registro);
    }).catch(function (error) {
        console.log(error);
        response.status(500).send(error);
    });
}

function atualizar(request, response) {
    return models.sequelize.transaction(function (t) {
        var categoria_id = request.swagger.params.categoria_id.value || null;
        var body = request.swagger.params.body.value;

        return models.Categoria.update(
            body, { where: { id: categoria_id }, transaction: t }
        );
    }).then(function () {
        exibir(request, response);
    }).catch(function (error) {
        console.log(error);
        response.status(500).send(error);
    });
}

function remover(request, response) {
    return models.sequelize.transaction(function (t) {
        var categoria_id = request.swagger.params.categoria_id.value || null;

        return models.Categoria.destroy({
            where: { id:categoria_id }, transaction: t
        });
    }).then(function () {
        response.status(200).send('Categoria removida com sucesso.');
    }).catch(function (error) {
        console.log(error);
        response.status(500).send(error);
    });
}