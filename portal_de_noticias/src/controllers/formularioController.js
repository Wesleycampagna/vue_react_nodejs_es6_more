module.exports = (app) => {

    this.save = (req, res) => {

        console.log('salvando form')

        let value = filter(req.body)

        if (value !== true){
            console.log('-------------')
            res.render('admin/formulario', {error: value, news: req.body})
            return
        }else{
            console.log('enter');
            saveDataBase(req.body, app, (err, result) => {
                // isso n sabia -> poder passar um json no render
                //res.send('form carregado server side!') anteriormente
                !err ? res.redirect('/noticias') : res.send({'error': 404})
            })
        }
    }

    this.form = (req, res) => {
        console.log('render form')
        res.render('admin/formulario', {error: null, news: {}})
    }

    return this
}

const saveDataBase = (data, app, callback) => {
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

/* 3 formas de se fazer a configuração dos controllers
1 - atribui  em indexedDB.js a criação do controlador
2 - dentro do module.exports aproveitando do app
3 - metodo a parte que retorna */

/* Uso do redirect depois foi show */

/* É importante sempre que fizer um post usar redirect para quebrar o F5 */