const Sequelize = require('sequelize');
const database = require('../db');
 
const Pessoa = database.define('pessoa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(64),
        allowNull: false
    },
    cpf: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    dataNasc: {
        type: Sequelize.DATE,
        allowNull: false
    },
    telefone: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.BIGINT,
        allowNull: false
    },
})
 
module.exports = Pessoa;