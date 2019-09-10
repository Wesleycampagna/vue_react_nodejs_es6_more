module.exports = (app) => {
    const controlForm = require('../controllers/formularioController')(app)
    
    app.get('/formulario', controlForm.form)
    app.post('/noticias/salvar', controlForm.save)
}