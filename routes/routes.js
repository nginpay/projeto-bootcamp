module.exports = app => {
    const router = require('express').Router();
    const userController = require('../controller/user.controller')
    const categoryController = require('../controller/category.controller')
    const storeController = require('../controller/store.controller')

    router.get('/user', userController.hello)
    router.post('/user', userController.createUser)

    router.post('/category', categoryController.createCategory)
    router.get('/categories', categoryController.listCategories)

    router.post('/store', storeController.createStore)

    app.use('/api', router)
}

