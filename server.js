var express = require('express');
var app = express();
var path = require('path');

/* Static Assets */
app.use(express.static(path.join(__dirname, 'elements')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'media')));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
