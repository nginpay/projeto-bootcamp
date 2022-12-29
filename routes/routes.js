module.exports = app => {
    const router = require('express').Router();
    const userController = require('../controller/user.controller')
    const categoryController = require('../controller/category.controller')
    const storeController = require('../controller/store.controller')
    const productController = require('../controller/product.controller')

    router.get('/users', userController.listUsers)
    router.post('/user', userController.createUser)

    router.post('/category', categoryController.createCategory)
    router.get('/categories', categoryController.listCategories)

    router.post('/product', productController.createProduct)
    router.get('/products', productController.listProducts)

    router.post('/store', storeController.createStore)

    app.use('/api', router)
}

//usuário - criando uma ativação de usuário ou uma confirmação de cadastro.
//enviando um email para o email do usuário.