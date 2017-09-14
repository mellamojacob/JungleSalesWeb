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
	ad_agency: String, 
	notes: String,
	priority: Number
})



var model = mongoose.model('companies', companySchema, 'companies');

module.exports = model;