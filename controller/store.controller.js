const { Store } = require('../models/index')
const slugify = require('slugify')

exports.createStore = async (req, res, next) => {
    const { lojista, loja, cnpj } = req.body
    const slug = slugify(loja, {lower: true})
    
    const newStore = {
        lojista, loja, cnpj, slug
    };

    const storeAdded = await Store.create(newStore)

    return res.json(storeAdded)
}