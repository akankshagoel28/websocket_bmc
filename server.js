const ws = require("ws")
const express = require('express');

const expressServer = express();
const wsServer = new ws.Server({ 
server:expressServer.listen(3000),
host:"localhost",
path:"/"
 });
wsServer.on("connection", socket => {
    console.log("Client connected");
    socket.on("message", message => {
        console.log(message.toString());
        socket.send(message.toString());
    });
});
expressServer.listen( () => console.log("Server started"));
