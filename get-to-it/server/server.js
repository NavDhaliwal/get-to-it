"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var ws_1 = require("ws");
// Get our API routes
var app = express();
// Point static path to dist
app.use(express.static(path.join(__dirname, '..', 'dist')));
// Catch all other routes and return the index file
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});
var httpServer = app.listen(8000, "localhost", () => {
    var port = httpServer.address().port;
    console.log('HTTP server is listening on %s', port);
});
var wsServer = new ws_1.Server({
    port: 8085
});
wsServer.on('connection', (websocket) => {
	console.log('on connection 8085');
    websocket.isAlive = true;
    websocket.on('pong', heartbeat);
    
});
wsServer.on('message', (message) => {
        console.log('Server recieved message: %s', message);
        var todayDate = new Date();
        console.log('Date: %s', todayDate);
        // websocket.send('Date pushed by server: ' + todayDate.toString());
    });

wsServer.on('disconnect', () => {
	console.log('on Disconnect called 8085');
	wsServer.clients.forEach((websocket) => {
        websocket.terminate();
    });
});

const interval = setInterval(() => {
    var todayDate = new Date();
    wsServer.clients.forEach((websocket) => {
        if (websocket.isAlive === false) return websocket.terminate();
        websocket.isAlive = false;
        websocket.ping(noop);
    });
}, 30000);

function noop() {}

function heartbeat() {
    this.isAlive = true;
}