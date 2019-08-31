let dbConnection = require('../model/database-connection')

module.exports = (app) => {

    connection = dbConnection()
    app.get('/noticia', (req, res) => {
  
        connection.query('SELECT * FROM noticias', (err, result) => {
            // isso n sabia -> poder passar um json no render
            !err ? res.render('noticias', {noticias : result}) : res.send({'error': 404})
        })

/*         res.render('noticias') */
    })
}