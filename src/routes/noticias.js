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
        const noticias = app.src.model.noticiasModel

        noticias.getAllNews(connection,  (err, result) => {
            // isso n sabia -> poder passar um json no render
            !err ? res.render('noticias/noticias', {noticias : result}) : res.send({'error': 404})
        })
    })
}