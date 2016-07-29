'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jungle_sales', function(err) {
	if(err) {
		console.log('Failed to connect to Mongo Database')
	} else {
		console.log('Connected to mongo successfully!')
	}
});