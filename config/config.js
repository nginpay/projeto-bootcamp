require('dotenv').config()

// module.exports = {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: process.env.DIALECT

module.exports = {
  dialect: 'sqlite',
  storage: './database.sqlite'
}