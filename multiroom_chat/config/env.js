const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('src/public'))
app.set('views', 'src/views')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

consign().include('src/routes')
        .then('src/models')
        .then('src/controllers')
        .into(app)

module.exports = app