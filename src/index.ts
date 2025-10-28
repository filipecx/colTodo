import express from 'express'
import type { Request, Response } from 'express'

import { createServer } from 'node:http'
import { join } from 'node:path';
import { Server } from 'socket.io'

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req: Request, res: Response) => {
    res.sendFile('/home/filipe/Documents/nodeProjects/colTodo/index.html')
})


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        io.emit('chat message', (msg));
        console.log("message: " + msg);
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


server.listen(3000, () => {
    console.log("Server running on port 3000. You better catch it")
})