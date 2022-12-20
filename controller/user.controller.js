const { User } = require('../models/index')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

exports.hello = (req, res) => {
    res.json({
        api_user: true
    })
}

exports.createUser = async (req, res, next) => {
    //1. recuperar os dados da requisição
    const newUser = req.body

    //2. criar o hash da senha do usuário
    req.body.password = bcrypt.hashSync(req.body.password, salt);

    //3. gravar na base de dados
    const userAdded = await User.create(newUser)

    //4. exibir o resultado
    return res.json(userAdded)
}
