// modules
var express = require('express');
var app = express();

//set our port
var port = process.env.PORT || 3000;

app.use(express.static(__dirname+'/public'));

require('./app/routes')(app); //configure our routes

app.listen(port);

exports = module.exports = app;

