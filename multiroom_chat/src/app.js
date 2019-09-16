const app = require('../config/env')

const server = app.listen (8080, () => {
    console.log('listen at port 8080')
})

const io = require('socket.io').listen(server)

app.set('io', io) // interessante: a funtion set serve para atribuir global objects dentro do express

// criar a conexão por websocket
io.on('connection', (socket) => {
    console.log('user connected!')

    //socket.emit('disconnected', {apelido: 'jao'})
    socket.on('disconnect',  (socket) => {
        console.log('user disconnect!')
    })

    socket.on('msg-server', (data) => {
        socket.emit('msgToClient', {apelido: data.apelido, msg: data.msg})
        socket.broadcast.emit('msgToClient', {apelido: data.apelido, msg: data.msg})

        if (parseInt(data.hasConnected) === 0) {
            socket.emit('toAll', {apelido: data.apelido})
            socket.broadcast.emit('toAll', {apelido: data.apelido})
        }
    })
})

