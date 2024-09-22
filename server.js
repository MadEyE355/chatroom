const express = require('express');
const fs = require('fs');
const path = require('path');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const app = express();
const server = createServer(app);
const io = new Server(server);
let userName 
let log = path.join(__dirname, 'log.txt');

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.get('/chat', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'chat.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    // fs.appendFile(log, `a user connected\n`, (err) => {});

    // Variable to store the user's name
    let userName;

    socket.on('userName', (name) => {
        userName = name; // Store the user's name
        console.log('User name received:', userName);
        fs.appendFile(log, `${userName} connected`, (err) => {});
    });

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        fs.appendFile(log, `message: ${msg}\n`, (err) => {});
        
        // Emit the message with the user's name
        io.emit('chat message', { name: userName, message: msg });
    });
});

server.listen(3000, '0.0.0.0', () => {
    console.log('server running at http://localhost:3000');
});
