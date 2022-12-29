const { Category } = require('../models/index')
const slugify = require('slugify')

exports.createCategory = async (req, res, next) => {
    const { loja, categoria } = req.body

    const slugCategory = slugify(categoria, {lower: true})

    const newCategory = {
        loja: loja,
        categoria: categoria,
        slug: slugCategory
    }

    //regra de negócio
    //não é permitido que uma loja tenha categorias duplicadas
    //porém, deve ser permitido que todas as lojas tenhem categorias iguais 
    //(ex. todas as lojas podem ter calçados)

    const CategoryValidate = await Category.findOne({where: {loja: newCategory.loja, slug: newCategory.slug}})
    if(CategoryValidate){
        return res.status(302).json({msg: "categoria já existente para essa loja"})
    }

    const categoryAdded = await Category.create(newCategory)

    return res.status(201).json(categoryAdded)
}

exports.listCategories = async (req, res, next) => {

    const listAllCategories = await Category.findAll();

    return res.status(200).json(listAllCategories)
}