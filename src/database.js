'use strict';

var Promise = require('bluebird');
var mongoose = require('mongoose');
Promise.promisifyAll(mongoose);


mongoose.connect('mongodb://jvirgin:Turing95@ds161471.mlab.com:61471/jungle_sales', function(err) {
	if(err) {
		console.log('Failed to connect to Mongo Database')
	} else {
		console.log('Connected to mongo successfully!')
	}
});


 var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// module.exports = db;