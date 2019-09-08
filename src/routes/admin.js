
module.exports = (app) => {
    controlForm = configControllers (app)

    app.get('/formulario', (req, res) => {
        res.render('admin/formulario')
    })

    app.post('/noticias/salvar', (req, res) => {
        
        controlForm.filterData(req.body , (err, result) => {
            // isso n sabia -> poder passar um json no render
            //res.send('form carregado server side!') anteriormente
            !err ? res.redirect('/noticias') : res.send({'error': 404})
        })
        
    })
}

function configControllers (app) {
    return require('../controllers/admin/formulario-noticia')(app)
}

/* 3 formas de se fazer a configuração dos controllers
1 - atribui  em indexedDB.js a criação do controlador
2 - dentro do module.exports aproveitando do app
3 - metodo a parte que retorna */

/* Uso do redirect depois foi show */

/* É importante sempre que fizer um post usar redirect para quebrar o F5 */