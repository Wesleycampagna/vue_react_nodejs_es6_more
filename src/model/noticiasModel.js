module.exports = () => {
    
    this.getAllNews = (connection, callback) => {
        statement = 'SELECT * FROM noticias'
        connection.query(statement, callback)
    }

    this.getNewById = (id, connection, callback) => {
        statement = 'SELECT * FROM noticias WHERE id_noticia = ' + id
        connection.query(statement, callback)
    }

    return this
}   