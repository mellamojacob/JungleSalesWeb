'use strict';

var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
	company_name: String,
	phone_number: String,
	tier: String,
	salesperson: String
})

var model = mongoose.model('Company', companySchema);

module.exports = model;