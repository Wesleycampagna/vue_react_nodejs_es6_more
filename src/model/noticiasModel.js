function Noticias (connection) {

    let _connection = connection

    this.getAllNews = (callback) => {
        let statement = 'SELECT * FROM noticias'
        _connection.query(statement, callback)
    }

    this.getNewById = (id, callback) => {
        let statement = 'SELECT * FROM noticias WHERE id_noticia = ' + id
        _connection.query(statement, callback)
    }

    this.save = (data, callback) => {
        console.log('save? ')
        console.log(data)
        console.log('|')
        /* statement = 'INSERT INTO noticias (titulo, noticia) values (' 
        statement = statement.concat(data.titulo, ', ', data.noticia, ')')
        connection.query(statement, callback) */
        let statement = 'INSERT INTO noticias set ?'
        _connection.query(statement, data, callback)
    }

    this.getFiveLast = (callback) => {
        let statement = 'SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5'
        _connection.query(statement,  callback)
    }
}

module.exports = () => {
    return Noticias
}   