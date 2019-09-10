module.exports = (app) => {

    this.filterData = (data, callback) => {
        console.log('enter here')
        const connection = app.src.model.databaseconnection()
        const noticias = new app.src.model.noticiasModel(connection)

        noticias.save(data, callback)
    }

    return this
}


module.exports = (app) => {

    this.save = () => {
        
    }

    return this
}


const saveDataBase = (data, callback) => {
    const connection = app.src.model.databaseconnection()
    const noticias = new app.src.model.noticiasModel(connection)

    noticias.save(data, callback)
}


function filter(data) {

    jsonError = {}
    if (data.titulo === ''){
        let title = 'Titulo não deve ser nulo!'
        jsonError.title = title
        return jsonError
    }
    else
        return true
}

app.get('/formulario', (req, res) => {
    res.render('admin/formulario', {error: null, news: {}})
})

/* 3 formas de se fazer a configuração dos controllers
1 - atribui  em indexedDB.js a criação do controlador
2 - dentro do module.exports aproveitando do app
3 - metodo a parte que retorna */

/* Uso do redirect depois foi show */

/* É importante sempre que fizer um post usar redirect para quebrar o F5 */