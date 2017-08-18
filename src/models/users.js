'use strict';

var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	name: String,
	phone_number: String,
	email: String, 
	companies: Array, 
	lives: String, 
	manager: String,
	points: Number
});

var model = mongoose.model('user', userSchema);

module.exports = model;