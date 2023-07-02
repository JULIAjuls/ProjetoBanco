const Usuario = require('../models/usuario')
const Pessoa = require('../models/pessoa')

function homeView(req, res){
    let usuario = {
        email: req.body.email,
        senha: req.body.senha
    }
    res.render("/home.html",{Pessoa},{Usuario});
}

// function home(req,res){
//     let usuario = {
//         email: req.body.email,
//         senha: req.body.senha
//     }
// }

module.exports =  {
    homeView
};