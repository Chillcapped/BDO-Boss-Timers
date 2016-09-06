var express = require('express');
var app = express();
var path = require('path');

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
  console.log('Example app listening on port 3000!');
});
