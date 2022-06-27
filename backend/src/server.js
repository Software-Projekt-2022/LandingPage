const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

io.on("connection", (socket) => {
  socket.emit("NEWS", [{ title: "Sommerfest", link: "#", text: "Das große Sommerfest steht an" }, { title: "Sommerfest", link: "#", text: "Das große Sommerfest steht an" }]);
});

httpServer.listen(4000, '0.0.0.0');