'use strict';

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String,
	phone_number: String,
	companies: Array
})

var model = mongoose.model('user', userSchema);

module.exports = model;