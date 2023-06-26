const Sequelize = require('sequelize');
const database = require('../db');

const Movimento = database.define('movimento',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    data_movimento: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    contacorrente_origem: {
        type: Sequelize.BIGINT
    },
    contacorrente_destino: {
        type: Sequelize.BIGINT
    },    
    observacao: {
        type: Sequelize.STRING
    }
})

module.exports = Movimento;