const app = require('../config/env')
const api = require('./routes/api')
const express = require('express')
const path = require('path')
    
// start routes
app.use('/api', api)

app.use(express.static(path.join(__dirname, '../../rocket-react/build')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../rocket-react/build', 'index.html'))
})

app.listen( 8071, () => console.log('server conectado!'))
