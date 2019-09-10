module.exports = (app) => {
    app.get('/formulario', (req, res) => {
        res.render('admin/formulario', {error: null, news: {}})
    })

    app.post('/noticias/salvar', app.controllForm.save)
}

function configControllers (app) {
    return require('../controllers/admin/formulario-noticia')(app)
}
