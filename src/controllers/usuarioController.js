const Usuario = require('../models/usuario')

function loginView(req, res){
    res.render("login.html");
}

function login(req,res){
    let usuario = {
        email: req.body.email,
        senha: req.body.senha
    }
}

module.exports =  {
    loginView
};