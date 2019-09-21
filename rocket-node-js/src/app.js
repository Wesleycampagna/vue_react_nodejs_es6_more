const app = require('../config/env')
const api = require('./routes/api')

// start routes
app.use('/api', api)

app.listen( 8071, () => console.log('server conectado!'))