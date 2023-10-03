const app  = require('express')();
const express = require('express');
const {createServer} = require('node:http');
const {Server} = require('socket.io');
app.set("view engine", 'ejs');

const server = createServer(app);

const io = new Server(server);
app.use(express.json())
app.get("/", (req, res) =>{
    res.render('dummy')
})

io.on('connection', (socket) =>{



//    socket.broadcast.emit('hello')
    

     socket.on('chat message', (msg) =>{
        io.emit('chat message', msg);
     })    
  
    // socket.on('disconnect', () =>{
    //     console.log(`user is disconnected`);
    // })

})
server.listen(3000, () => console.log("listning on the port 3000 ......"));