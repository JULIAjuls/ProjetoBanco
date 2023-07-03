const Usuario = require('../models/usuario')
const Pessoa = require('../models/pessoa');
const { where, and } = require('sequelize');

function loginView(req, res){
    res.render("login.html",{});
}

function homeView(req, res){
    let usuario;

    Usuario.findOne({
        where: {email: req.body.email}
    }).then(async function(usuario){
        console.log(usuario);
        const pessoa = await Pessoa.findOne({ 
            where: {id: usuario.id}
        });
        console.log(pessoa)
        res.render("home.html",{usuario,pessoa});
    })
}


// function home(req,res){
//     let usuario = {
//         email: req.body.email,
//         senha: req.body.senha
//     }
// }

module.exports =  {
    loginView,
    homeView
};