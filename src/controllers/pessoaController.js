const Pessoa = require('../models/pessoa')
const Usuario = require('../models/usuario')

function cadastroView(req, res){
    res.render("cadastro.html");
}

function cadastroPessoa(req,res){
    let pessoa = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        data_nascimento: req.body.data_nascimento,
        telefone: req.body.telefone,
        endereco: req.body.endereco,
        cep: req.body.cep
    }

    Pessoa.create(pessoa).then((result)=>{
        res.render("pessoa/cadastro.html", {pessoa});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastro.html", {erro});
    })

    let usuario = {
        pessoa_id: result.id,
        email: req.body.email,
        senha: req.body.senha
    }

    Usuario.create(usuario).then((result)=>{
        res.render("pessoa/cadastro.html", {cadastro});
    }).catch((err) => {
        console.log(err)
        let erro = err
        res.render("pessoa/cadastro.html", {erro});
    })
}

module.exports =  {
    cadastroView,
    cadastroPessoa
};