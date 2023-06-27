const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/usuario/login', usuarioController.loginView);

module.exports = router;