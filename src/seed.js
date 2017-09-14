'use strict';

var Company = require('./models/company');


var companies = [
	'Feed the dog',
	'Walk the kids',
	'Water the trees'
];

companies.forEach(function (company, index) {
	Company.find({'company_name': company }, function(err, companies) {
		if (!err && !companies.length) {
			Company.create({company_name: company});
		}
	});
});


var User = require('./models/users');

var users = [
	'Arkin',
	'Virgin',
	'Kiernan'
];

users.forEach(function (user, index) {
	User.find({'name': user }, function(err, users){
		if (!err && !users.length) {
			User.create({name: user});
		}
	});
});