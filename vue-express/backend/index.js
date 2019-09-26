const express = require('express')
const body = require('body-parser')
const cors = require('cors')

const app = express()

app.use(body.json())
app.use(cors())

const api = require('./routes/api/api')
app.use('/api', api)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`server listen at port ${port}`)
})