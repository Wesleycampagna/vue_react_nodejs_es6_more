const app = require('./config/env')
/* 
const homePage = require('./routes/home')
const noticiasPage = require('./routes/noticia')
const formularioPage = require('./routes/formulario-noticia') 

homePage(app)
noticiasPage(app)
formularioPage(app) */

// start server on the specified port and binding host
app.listen(5060, function() {
  // print a message when the server starts listening
  console.log("server starting.. ");
});