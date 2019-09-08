// let dbConnection = require('../model/database-connection')

module.exports = (app) => {
    
    
    app.get('/noticia', (req, res) => {
        
        const connection = app.src.model.databaseconnection()
        const Noticias = require('../model/noticiasModel')()

        const noticia = new Noticias(connection)
        
        noticia.getNewById(1, (err, result) => {
            !err ? res.render('noticias/noticia', {noticia : result}) : res.send({'error': 404})
        })
    })
}