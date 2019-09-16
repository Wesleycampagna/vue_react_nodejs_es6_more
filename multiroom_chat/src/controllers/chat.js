module.exports.chat = (app, req, res) => {

    formData = req.body
    console.log(formData)
    
    /* validação do campo como não vazio e tamanho de valores entrados  */
    app.get('io').emit('clientConnect', {apelido: formData.apelido, msg: null}) // app.get recupera objetos globais
    
    res.render('chat', {dataForm : formData})
}