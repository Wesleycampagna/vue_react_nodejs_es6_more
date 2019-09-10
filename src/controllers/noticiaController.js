module.exports = (app) => {

    this.noticias = (req, res) => {
        
        const connection = app.src.model.databaseconnection()
        const noticias = new app.src.model.noticiasModel(connection)
    
        noticias.getAllNews((err, result) => {
            // isso n sabia -> poder passar um json no render
            !err ? res.render('noticias/noticias', {noticias : result}) : res.send({'error': 404})
        })
    }

    this.noticia = (req, res) => {
        
        const connection = app.src.model.databaseconnection()
        const Noticias = require('../model/noticiasModel')()
    
        const noticia = new Noticias(connection)
        
        noticia.getNewById(1, (err, result) => {
            !err ? res.render('noticias/noticia', {noticia : result}) : res.send({'error': 404})
        })
    }

    return this
}