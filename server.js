const fs = require('fs');
const path = require('path')
const http = require('http');
const https = require('https');

const express = require('express');
const webpack = require('webpack');


const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);




const httpPort = 3001;
const httpsPort = 3002;
const app = express()

var key = fs.readFileSync(path.resolve('certificates/keys/server.key'))
var cert = fs.readFileSync(path.resolve('certificates/keys/server.crt'))

var credentials = {
  key: key,
  cert: cert
};

//GET home route
// app.get('/', (req, res) => {
//    res.send('Hello World from main.demoapp.com');
// });


app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


httpServer.listen(httpPort, () => {
  console.log("Http server listing on port : " + httpPort)
});

httpsServer.listen(httpsPort, () => {
  console.log("Https server listing on port : " + httpsPort)
});