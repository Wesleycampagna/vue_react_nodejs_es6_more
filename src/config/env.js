const express = require('express')
const path = require('path')
const consign = require('consign')

const app = express();

app.use(express.static(path.join(__dirname, '../', 'public')))
app.set('views', path.join(__dirname, '../', 'views'))

app.set('view engine', 'ejs')

/* Este consign tem acesso a todos os arquivos -> logo não precisa 
 voltar diretorios para que seja encontrado a pasta */
consign()
    .include('src/routes')
    .then('src/model/')
    .into(app)

module.exports = app