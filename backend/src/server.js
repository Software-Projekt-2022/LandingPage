const { Server } = require("socket.io");
const { connectEventBus, listenForEvents } = require("./eventhandler.js");

const port = 4000;
const io = new Server(port);

let socket;

io.on('connection', sock => {
  socket = sock;
});