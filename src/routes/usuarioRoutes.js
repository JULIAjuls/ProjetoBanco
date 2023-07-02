const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.post('/usuario/home', usuarioController.homeView);

module.exports = router;