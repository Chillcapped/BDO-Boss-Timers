var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var sessions = require('client-sessions');
var favicon = require('serve-favicon');

app.use(bodyParser.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(favicon(__dirname + '/app/static/images/favicon.png'));

// Load Routes
require('./api/routes/')(app);

/* Static Assets */
app.use(express.static(path.join(__dirname, 'app')));

// Defaults for sending non valid routes to index.html
app.get('/:a', function(req, res) {
  res.sendfile(path.join(__dirname, 'app', 'index.html'));
});
app.get('/:a/:b', function(req, res) {
  res.sendfile(path.join(__dirname, 'app', 'index.html'));
});
app.get('/:a/:b/:c', function(req, res) {
  res.sendfile(path.join(__dirname, 'app', 'index.html'));
});
app.get('/:a/:b/:c/:d', function(req, res) {
  res.sendfile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(3000, function () {
  console.log('BDO-Timers Available: 127.0.0.1:3000');
});
