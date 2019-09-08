const mysql = require('mysql')

const connection = () => {
    console.log('conexão realizada!')
    return mysql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: '',
        database: 'portal_noticia'
    })
}
     
module.exports = ()=> {
    console.log('autoload module!')
   return connection
}

/* module.exports = ()=> {
    console.log('autoload module!')

    // função construtora
    this.connection = () => {
        return mysql.createConnection({
            host: 'localhost',
            user: 'admin',
            password: '',
            database: 'portal_noticia'
        })
   }
} */