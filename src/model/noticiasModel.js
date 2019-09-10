function Noticias (connection) {

    _connection = connection

    this.getAllNews = (callback) => {
        statement = 'SELECT * FROM noticias'
        _connection.query(statement, callback)
    }

    this.getNewById = (id, callback) => {
        statement = 'SELECT * FROM noticias WHERE id_noticia = ' + id
        _connection.query(statement, callback)
    }

    this.save = (data, callback) => {
        console.log('save? ')
        console.log(data)
        console.log('|')
        /* statement = 'INSERT INTO noticias (titulo, noticia) values (' 
        statement = statement.concat(data.titulo, ', ', data.noticia, ')')
        connection.query(statement, callback) */
        _connection.query('INSERT INTO noticias set ?', data, callback)
    }
}

module.exports = () => {
    return Noticias
}   