import * as express from "express";
import * as path from "path";
import {Server} from "ws";

// Get our API routes
// const game = require('./server/routes/game');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, '..','dist')));


// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..','dist','index.html'));
});

const httpServer = app.listen(8000, "localhost", () => {
	const {port} = httpServer.address();
	console.log('HTTP server is listening on %s',port);
});


let wsServer: Server = new Server({port:8085});

console.log('WebSocket server is listening on 8085');

wsServer.on('connection',  
	websocket => {
		websocket.send('This message is from the Web Socket server');
		websocket.on('message', message => {
			console.log('Server recived message: %s', message);
			let todayDate = new Date();
			websocket.send('Date pushed by server: '+todayDate.toString());
		})
	}
	);

