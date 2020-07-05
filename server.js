const fs = require('fs')
const https = require('https')
const express = require('express');
const app = express();
const path = require('path');

const  port = 443;

const html = fs.readFileSync('./client/build/index.html', 'utf-8');

const publicPath = path.join(__dirname, '..', '..', '..', 'etc', 'letsencrypt', 'live', 'alura.candidomendes.edu.br')

const httpsOptions = {
  key: fs.readFileSync(`${publicPath}/privkey.pem`),
  cert: fs.readFileSync(`${publicPath}/cert.pem`)
};

const publicPathClient = path.join(__dirname, 'client', "build");

app.use(express.static(publicPathClient));
app.use('*', express.static(publicPathClient));

https.createServer(httpsOptions, app).listen(port);
console.log('server running')