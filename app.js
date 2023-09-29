const app  = require('express')();
const {createServer} = require('node:http');
const {Server} = require('socket.io');

const server = createServer(app);

const io = new Server(server);
app.use(express.json())
app.get("/", (req, res) =>{
    res.send("<h1>Chat Application</h1>")
})

io.on('connection', (socket) =>{
    console.log(`connected to ${socket}`)
})

app.listen(3000, () => console.log("listning on the port 3000 ......"));