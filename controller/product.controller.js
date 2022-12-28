const { Product } = require('../models/index')
const slugify = require('slugify')

exports.createProduct = async (req, res, next) => {

    const { loja, categoria, produto, imageUrl, preco } = req.body;

    if(!loja || !categoria || !produto || !preco){
        return res.status(302).json({msg: "o produto não pode ser cadastrado. Reveja as informações"})
    }

    const slugProduct = slugify(produto, {lower: true})

    const newProduct = {
        loja: loja,
        categoria: categoria,
        produto: produto,
        slug: slugProduct,
        imageUrl: imageUrl,
        preco: Number(preco)
    }

    const productAdded = await Product.create(newProduct)

    return res.status(200).json(productAdded)
}

exports.listProducts = async (req, res, next) => {

    const listAllProducts = await Product.findAll()

    return res.status(200).json(listAllProducts)

}


exports.productDetails = async (req, res, next) => {

}