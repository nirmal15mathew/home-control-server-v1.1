const express = require('express');
let app = express()
const port = 8000
let server = app.listen(port) // create a express server with given port

app.use(express.static('/public'))


console.log('Server Started...');
console.log(`See at localhost:${port}`)
let socket = require('socket.io')
let io = socket(server) // create a socket from the express server

io.sockets.on('connection', newConnection)

function newConnection(socket){
    console.log(`[NEW CONNECTION]: ${socket.id}`); // when a new socket is connected, it reports in the console
    socket.on('test', (data)=>{
        // for debugging
        console.log(`[MESSAGE FROM ${socket.id}]: ${data.message}`)
    })
    socket.on('user:command', (data) => {
        // for debugging
        console.log(`[${data.command}]: ${data.value}`)
    })
}

// const PinManager = require('PinManager');

// const myManager = new PinManager()
// myManager.setPin(5)