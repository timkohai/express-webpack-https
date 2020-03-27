const fs = require('fs');
const path = require('path')
const express = require('express');
const http = require('http');
const https = require('https');


const httpPort = 3001;
const httpsPort = 3002;
const app = express()

console.log(path.resolve('server.key'))

var key = fs.readFileSync(path.resolve('server.key'))
var cert = fs.readFileSync(path.resolve('server.crt'))

var credentials = {
  key: key,
  cert: cert
};

//GET home route
app.get('/', (req, res) => {
   res.send('Hello World from domain1.demostellar.com');
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


httpServer.listen(httpPort, () => {
  console.log("Http server listing on port : " + httpPort)
});

httpsServer.listen(httpsPort, () => {
  console.log("Https server listing on port : " + httpsPort)
});