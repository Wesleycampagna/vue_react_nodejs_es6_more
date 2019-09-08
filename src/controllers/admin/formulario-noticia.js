module.exports = (app) => {

    this.filterData = (data, callback) => {
        console.log('enter here')
        const connection = app.src.model.databaseconnection()
        const noticias = new app.src.model.noticiasModel(connection)

        noticias.save(data, callback)
    }

    return this
}