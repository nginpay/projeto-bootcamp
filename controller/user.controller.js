const { User } = require('../models/index')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const mail = require('../services/email.service')

exports.hello = (req, res) => {
    res.json({
        api_user: true
    })
}

exports.createUser = async (req, res, next) => {
    //1. recuperar os dados da requisição

    const { nome, email, senha } = req.body

    //2. criar o hash da senha do usuário
    const hashpassword = bcrypt.hashSync(senha, salt);

    const newUser = {
        nome: nome,
        email: email,
        senha: hashpassword
    }


    const userValidate = await User.findOne({where: {email}})

    if(userValidate){
        return res.status(302).json({msg: 'User exist'})
    }

    //3. gravar na base de dados
    const userAdded = await User.create(newUser)


    //4. envia email de confirmação
    mail.send(email, `Bem vindo ${nome}`, `Bem vindo à plataforma XPTO.`);

    //5. exibir o resultado
    return res.status(201).json(userAdded)
}


exports.listUsers = async (req, res, next) => {
    const usersList = await User.findAll()

    return res.status(200).json(usersList)
}
//autenticação usando o jwt
//middleware de autenticação - ctrl+c/crtl+v
//incluimos o middleware nas rotas privadas
//criar os métodos que ainda faltam para o crud de 
    //produtos
    //categorias
    //lojas