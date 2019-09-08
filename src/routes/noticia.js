// let dbConnection = require('../model/database-connection')

module.exports = (app) => {

    app.get('/noticia', (req, res) => {
        
        const connection = app.src.model.databaseconnection()
        const noticias = app.src.model.noticiasModel

        noticias.getNewById(1, connection, (err, result) => {
            !err ? res.render('noticias/noticia', {noticia : result}) : res.send({'error': 404})
        })
    })
}