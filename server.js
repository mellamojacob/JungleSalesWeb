'use strict';

var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://jvirgin:Turing95@ds011449.mlab.com:11449/heroku_w0m7vrgs', function(err) {
	if(err) {
		console.log('Failed to connect to Mongo Database')
	} else {
		console.log('Connected to mongo successfully!')
	}
});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
	var newSchema = mongoose.Schema({
		name: String
	});
	var Name = mongoose.model('Name', newSchema);

	var jason = new Name({name: "Jason"});
	console.log(jason.name);
})
//app.listen(process.env.PORT || 5000, () => console.log('All is ok!'));

