const express = require('express')
const body = require('body-parser')
const cors = require('cors')

const app = express()

app.use(body.json())
app.use(cors())

const api = require('./routes/api/api')
app.use('/api', api)

// handle production 
//if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'))

    // handle single page aplication - coloque depois de todas as rotas base do servidor
    app.get(/.*/, (req, res) => {
        
    })
//}


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server listen at port ${port}`)
})