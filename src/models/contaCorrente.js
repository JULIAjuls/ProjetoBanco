const Sequelize = require('sequelize');
const database = require('../db');

const ContaCorrente = database.define('contaCorrente',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    numero: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_abertura: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    saldo: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})

module.exports = ContaCorrente;