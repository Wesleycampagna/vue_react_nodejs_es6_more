const app = require('../config/env')
const homePageRoute = require('./routes/home')

// start routes
app.use('/', homePageRoute)

app.listen( 8080, () => console.log('server conectado!'))