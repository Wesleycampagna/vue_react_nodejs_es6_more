// let dbConnection = require('../model/database-connection')

/* 
first way to do
module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        
        const connection = app.src.model.databaseconnection()
  
        statement = 'SELECT * FROM noticias'

        connection.query(statement, (err, result) => {
            // isso n sabia -> poder passar um json no render
            !err ? res.render('noticias/noticias', {noticias : result}) : res.send({'error': 404})
        })

        // res.render('noticias')
    })
} */

module.exports = (app) => {

    app.get('/noticias', (req, res) => {
        
        const connection = app.src.model.databaseconnection()
        const noticias = new app.src.model.noticiasModel(connection)

        noticias.getAllNews((err, result) => {
            // isso n sabia -> poder passar um json no render
            !err ? res.render('noticias/noticias', {noticias : result}) : res.send({'error': 404})
        })
    })

    app.get('/noticia', (req, res) => {
        
        const connection = app.src.model.databaseconnection()
        const Noticias = require('../model/noticiasModel')()

        const noticia = new Noticias(connection)
        
        noticia.getNewById(1, (err, result) => {
            !err ? res.render('noticias/noticia', {noticia : result}) : res.send({'error': 404})
        })
    })
}