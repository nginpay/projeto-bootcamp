'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    loja: DataTypes.STRING,
    categoria: DataTypes.STRING,
    produto: DataTypes.STRING,
    slug: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    preco: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};