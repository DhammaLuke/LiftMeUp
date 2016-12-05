'use strict';
// inistialize express
var express = require('express');
var path = require('path');
var app = express();
// set port
var port = process.env.PORT || 1337;
// serve static files
app.use(express.static(path.join(__dirname, 'public')));
// start server
app.listen(port, function() {
  console.log('Egad! A server was born at http://localhost:' + port);
})
