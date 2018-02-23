// Get the dependencies

const express = require('express');//create server for us
const path = require('path');//move around the dirs
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));



// CORS
//security
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


function hello(req, res) {
  res.send("hello from the callback function")
}
//request/response
/*app.get('/', function (req, res) {
  //console.log("hello");
  //res.send("Hello World");
  res.send({hello : "Hello World"});
})*/
app.get('/', hello)




const port = process.env.PORT || '5000';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);

//var serverSide = require("./server/test-mongodb/app");
//serverSide(app);



// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//server.listen( port , () => console.log('Running'));
server.listen( port );
