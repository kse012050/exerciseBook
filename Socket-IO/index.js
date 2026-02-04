const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);

const io = new Server(server, {
    connectionStateRecovery: {}
});

// ✅ 메시지 저장소 (메모리)
const messages = [];
let messageId = 0;

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {

    console.log('user connected:', socket.id);

    socket.broadcast.emit('user connection', socket.id);
    socket.broadcast.emit('hi');

    // ✅ connectionStateRecovery 실패 시 offset 복구
    if (!socket.recovered) {

        const offset = socket.handshake.auth.offset || 0;

        messages
            .filter((m) => m.id > offset)
            .forEach((m) => {
                socket.emit('chat message', m.text, m.id);
            });
    }

    socket.on('chat message', (msg) => {
        console.log(messages);
        

        messageId++;

        const message = {
            id: messageId,
            text: msg
        };

        // ✅ 메시지 저장
        messages.push(message);

        io.emit('chat message', message.text, message.id);
    });

});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
