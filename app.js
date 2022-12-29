const express = require('express');

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.status(200).json({
        msg: true
    })
})

app.get('/hello', (req, res) => {
    return res.status(200).json({
        Hello: 'Hello'
    })
})

require('./routes/routes')(app)
module.exports = app;