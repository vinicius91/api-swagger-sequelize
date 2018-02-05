'use strict';

module.exports = function(sequelize, DataTypes) {
    var Categoria = sequelize.define(
        'Categoria',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
            nome: { type: DataTypes.STRING, allowNull: false }
        },
        {
            schema: 'obras_indiretas',
            tableName: 'categoria',
            timestamps: true
        }
    );

   

    Categoria.loadScopes = function(models) {}

    return Categoria;
};