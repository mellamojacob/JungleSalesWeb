'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();



//app.listen(process.env.PORT || 5000);

require('./database');
// require('./seed');

// //app.use(parser.json());


// app.use('/api', router);

// var MongoClient = require('mongodb').MongoClient
//   , assert = require('assert');

// // Connection URL
// var url = 'mongodb://<jvirgin>:<Turing95>@ds011449.mlab.com:11449/heroku_w0m7vrgs';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   db.close();
// });

//var app = express();

if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
}

app.set( 'port', ( process.env.PORT || 5000 ));

//app.listen(process.env.PORT || 5000);




app.listen(app.get('port'), function() {
	console.log("The server is running on port ", app.get('port'))
});