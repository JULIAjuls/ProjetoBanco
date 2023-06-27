const express = require('express');
const router = express.Router();

const pessoaController = require('../controllers/pessoaController');

router.get('/pessoa/cadastro', pessoaController.cadastroView);


module.exports = router;