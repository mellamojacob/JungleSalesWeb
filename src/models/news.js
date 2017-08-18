'use strict';

var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	salesperson: String,
	date_time: String,
	news: String
})

var model = mongoose.model('News', newsSchema);

module.exports = model;

