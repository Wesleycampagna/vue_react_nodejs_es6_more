const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

module.exports = app
