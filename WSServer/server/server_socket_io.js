import http from 'http';
// import handler from 'serve-handler';
import { Server } from 'socket.io';

// serve static assets
const server = http.createServer((request, response) => {
  // return handler(request, response, {
  //   public: './frontend'
  // });
});

const io = new Server(server, {
  cors: {
    origin: '*'
    // origin: 'http://localhost'
  }
});

io.on('connection', (socket) => {
  console.log(`connected: ${socket.id}`);
  // send all on connection established
  // io.emit('item:get', { items });
  socket.on('disconnect', () => {
    console.log(`disconnect: ${socket.id}`);
  });
});

io.on('connection', createListener(io));

const port = 9090;
// const port = process.env.PORT || 8008;
server.listen(port, () => console.log(`Server running at http://localhost:${port}`));

function createListener(io) {

  const eventGet = "test:get";

  return async function listeners(socket) {
    socket.on(eventGet, async (options = {}) => {
      console.log(`all ${namespace} requested with options: `, options);
      io.emit(eventGet, {value:"test message" });
    });
  }
}