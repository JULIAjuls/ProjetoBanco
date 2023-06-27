const Sequelize = require('sequelize');
const database = require('../db');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(32),
        allowNull: false,
        unique: true
    },
    senha: {
        type: Sequelize.STRING(32),
        allowNull: false
    }
})
 
module.exports = Usuario;