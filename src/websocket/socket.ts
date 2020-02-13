import { Server } from "http";

import socketIO from "socket.io";

let io: socketIO.Server | undefined;

export default {
  init: (httpServer: Server) => {
    io = socketIO(httpServer);
    return io;
  },
  getIO: () => {
    if (!io) throw "websocket not initializated";
    return io;
  }
};
