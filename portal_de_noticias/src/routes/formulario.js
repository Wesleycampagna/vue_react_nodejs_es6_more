module.exports = (app) => {
    const controlForm = require('../controllers/formularioController')(app)
    
    app.get('/formulario', controlForm.form)
    app.post('/salvar_form', controlForm.save)
}