module.exports = (app) => {

    this.home = (req, res) => {
        getDataOf(app, (err, result) => {
            !err ? res.render('home/index', {fiveLastNews : result}) : res.send({error: err})
        })
    }

    return this
}

const getDataOf = (app, callback) => {
    const connection = app.src.model.databaseconnection()
    const noticias = new app.src.model.noticiasModel(connection)

    noticias.getFiveLast(callback)
}

/* 3 formas de se fazer a configuração dos controllers
1 - atribui  em indexedDB.js a criação do controlador
2 - dentro do module.exports aproveitando do app
3 - metodo a parte que retorna */

/* Uso do redirect depois foi show */

/* É importante sempre que fizer um post usar redirect para quebrar o F5 */