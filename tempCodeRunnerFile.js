// // // // app.get('/chat', (req, res) => {
// // // //     const filePath = join(__dirname, 'public', 'index.html');
// // // //     console.log(`Serving file: ${filePath}`);
// // // //     res.sendFile(filePath, (err) => {
// // // //         if (err) {
// // // //             console.error('Error sending file:', err);
// // // //             res.status(err.status).end();
// // // //         }
// // // //     });
// // // // });

// // // // // Handle WebSocket connections
// // // // io.on('connection', (socket) => {
// // // //     console.log('A user connected');

// // // //     socket.on('set username', (username) => {
// // // //         if (username) {
// // // //             console.log(`Username set: ${username}`);
// // // //             socket.username = username; // Store username in socket object
// // // //         } else {
// // // //             console.error('Username is not defined');
// // // //         }
// // // //     });

// // // //     socket.on('chat message', (msg) => {
// // // //         if (socket.username) {
// // // //             console.log(`Message from ${socket.username}: ${msg}`);
// // // //             fs.appendFile(log, `Message from ${socket.username}: ${msg}\n`, (err) => {});
// // // //             io.emit('chat message', `${socket.username}: ${msg}`); // Include username in emitted message
// // // //         } else {
// // // //             console.error('Username not set for the message');
// // // //         }
// // // //     });

// // // //     socket.on('disconnect', () => {
// // // //         console.log('User disconnected');
// // // //     });
// // // // });









// // // const express = require('express');
// // // const fs = require('fs');
// // // const path = require('path');
// // // const { createServer } = require('node:http');
// // // const { join } = require('node:path');
// // // const { Server } = require('socket.io');

// // // const app = express();
// // // const server = createServer(app);
// // // const io = new Server(server);

// // // let log = path.join(__dirname, 'log.txt');

// // // // Serve static files from the public directory
// // // // app.use(express.static(join(__dirname, 'public')));

// // // // Serve the initial HTML files
// // // app.get('/', (req, res) => {
// // //     const filePath = join(__dirname, 'public', 'name.html');
// // //     console.log(`Serving file: ${filePath}`);
// // //     res.sendFile(filePath, (err) => {
// // //         if (err) {
// // //             console.error('Error sending file:', err);
// // //             res.status(err.status).end();
// // //         }
// // //     });
// // // });

// // // app.get('/chat', (req, res) => {
// // //     const filePath = join(__dirname, 'public', 'index.html');
// // //     console.log(`Serving file: ${filePath}`);
// // //     res.sendFile(filePath, (err) => {
// // //         if (err) {
// // //             console.error('Error sending file:', err);
// // //             res.status(err.status).end();
// // //         }
// // //     });
// // // });

// // // // Handle WebSocket connections
// // // io.on('connection', (socket) => {
// // //     console.log('A user connected');

// // //     socket.on('set username', (username) => {
// // //         if (username) {
// // //             console.log(`Username set: ${username}`);
// // //             socket.username = username; // Store username in socket object
// // //         } else {
// // //             console.error('Username is not defined');
// // //         }
// // //     });

// // //     socket.on('chat message', (msg) => {
// // //         if (socket.username) {
// // //             console.log(`Message from ${socket.username}: ${msg}`);
// // //             fs.appendFile(log, `Message from ${socket.username}: ${msg}\n`, (err) => {});
// // //             io.emit('chat message', `${socket.username}: ${msg}`); // Include username in emitted message
// // //         } else {
// // //             console.error('Username not set for the message');
// // //         }
// // //     });

// // //     socket.on('disconnect', () => {
// // //         console.log('User disconnected');
// // //     });
// // // });

// // // server.listen(3000, '0.0.0.0', () => {
// // //     console.log('Server running at http://localhost:3000');
// // // });


























// // //name.html
// // <!DOCTYPE html>
// // <html lang="en">

// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>name</title>
// //     <style>
// //         div {
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //             height: 100vh;
// //         }

// //         input {
// //             text-align: center;
// //             display: inline-block;
// //             position: relative;

// //         }
// //     </style>
// // </head>

// // <body>
// //     <div>
// //         <form action="/submit" method="POST"></form><br>

// //         <input type="text" id="name" placeholder="enter your name" name="name" required><br>
// //         <input type="submit" id="button" value="Submit">
// //         </form>
// //     </div>
// //     <script src="/socket.io/socket.io.js"></script>
// //     <script>
// //         const socket = io();
// //         let enter = document.getElementById(`button`);
        
// //         enter.addEventListener(`click`, () => {
// //             event.preventDefault();
// //             let name = document.getElementById(`name`).value
// //             socket.emit('userName', name);
// //             window.location.href = `/chat`
// //         });




// //     </script>
// // </body>

// // </html>
















// index.html
// <html>
//   <head>
//     <meta name="viewport" content="width=device-width,initial-scale=1.0">
//     <title>Socket.IO chat</title>
//     <style>
//       body { margin: 0; padding-bottom: 3rem; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }

//       #form { background: rgba(0, 0, 0, 0.15); padding: 0.25rem; position: fixed; bottom: 0; left: 0; right: 0; display: flex; height: 3rem; box-sizing: border-box; backdrop-filter: blur(10px); }
//       #input { border: none; padding: 0 1rem; flex-grow: 1; border-radius: 2rem; margin: 0.25rem; }
//       #input:focus { outline: none; }
//       #form > button { background: #333; border: none; padding: 0 1rem; margin: 0.25rem; border-radius: 3px; outline: none; color: #fff; }

//       #messages { list-style-type: none; margin: 0; padding: 0; }
//       #messages > li { padding: 0.5rem 1rem; }
//       #messages > li:nth-child(odd) { background: #efefef; }
//     </style>
//   </head>
//   <body>
//     <ul id="messages"></ul>
//     <form id="form" action="">
//       <input id="input" autocomplete="off" /><button>Send</button>
//     </form>
//     <script src="/socket.io/socket.io.js"></script>
//     <script>
//       const socket = io();
//       const form = document.getElementById('form');
//       const input = document.getElementById('input');
//       const messages = document.getElementById('messages');
    
//       // Emit user name after receiving it from the previous page
//       const userName = prompt("Enter your name:"); // Or fetch from a stored value
//       socket.emit('userName', userName);
    
//       form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if (input.value) {
//           socket.emit('chat message', input.value);
//           input.value = '';
//         }
//       });
    
//       socket.on('chat message', ({ name, message }) => {
//         const item = document.createElement('li');
//         item.textContent = `${name}: ${message}`; // Display name and message
//         messages.appendChild(item);
//         window.scrollTo(0, document.body.scrollHeight);
//       });
//     </script>
    
    
//   </body>
// </html> 
