const express = require('express');
const config = require('./config.json');

const app = express();
const http = require('http').Server(app);


app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

http.listen(config.PORT, function () {})
