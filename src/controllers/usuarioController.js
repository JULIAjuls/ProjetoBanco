const Pessoa = require('../models/pessoa')
const Usuario = require('../models/usuario')

function loginView(req, res){
    res.render("login.html");
}

module.exports =  {
    loginView
};