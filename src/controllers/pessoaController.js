const Pessoa = require('../models/pessoa')
const Usuario = require('../models/usuario')

function cadastroView(req, res){
    res.render("cadastro.html",{});
}

async function cadastroPessoa(req,res){
    let pessoa = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dataNasc: req.body.dataNasc,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cep: req.body.cep
    }
    
    let usuario = {
        email: req.body.email,
        senha: req.body.senha
    }

    await Pessoa.create(pessoa).then(async (result) => {
        console.log("pessoa criada!")
        await Usuario.create(usuario).then((result)=>{
            res.render("cadastro.html", {usuario});
        }).catch((err) => {
            console.log(err)
            let erro = err
            res.render("cadastro.html", {erro});
        })
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("cadastro.html", {erro});
    }) 

    
}

module.exports =  {
    cadastroView,
    cadastroPessoa
};