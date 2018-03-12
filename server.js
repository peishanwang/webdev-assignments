// Get the dependencies

const express = require('express');//create server for us
const path = require('path');//move around the dirs
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'src')));


// CORS
//security
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


const port = process.env.PORT || '5000';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

//var serverSide = require("./server/test-mongodb/app");
//serverSide(app);


require("./assignment/app")(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});


//server.listen( port , () => console.log('Running'));
server.listen( port );


