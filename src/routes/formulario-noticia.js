module.exports = (app) => {
    app.get('/formulario', (req, res) => {
        res.render('formulario')
    })
}