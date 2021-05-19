import SocketServer from './util/socket.js';

const port = process.env.PORT || 3000;
const socketServer = new SocketServer({port});
const server = await socketServer.start();

// 42:11

console.log('socketServer is running at',server.address().port);