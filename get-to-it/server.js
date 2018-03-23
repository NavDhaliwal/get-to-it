const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
// const game = require('./server/routes/game');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/api', api);
// app.use('/game/:id', game);

// app.get('/game/:id', (req , res, next) => {
//   	console.log("Backend game called");
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

const wsServer = http.createServer(app);
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