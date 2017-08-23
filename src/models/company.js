'use strict';

var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
	company_name: String,
	phone_number: String,
	tier: String,
	salesperson: String,
	state: String,
	time_stamp: Number, 
	contact: String, 
	contact_title: String,
	mobile_number: String,
	email: String,
	address: String, 
	city: String, 
	state: String, 
	zip: String, 
	Ad_agency: String, 
	Notes: String,
	Priority: Number
})

var model = mongoose.model('Company', companySchema);

module.exports = model;