const mysql = require('mysql')
     
module.exports = ()=> {
    return mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: '',
        database: 'portal_noticia'
    })
}