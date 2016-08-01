'use strict';

var express = require('express');
var Company = require('../models/company');
var User = require('../models/users');
var async = require('async');

var router = express.Router();

router.get('/companies', function(req, res) {
	Company.find({}, function(err, companies) {
		if(err) {
			return console.log(err);
		}
		res.json({companies: companies})
	})
})

router.get('/companies/:company_name', function(req, res) {
		var company_name = req.params.company_name;
		console.log(company_name);
		Company.find({company_name: company_name}, function(err, companies) {
			if(err) {
				return console.log(err);
			}
			res.json({companies: companies});
		})
});

router.post('/companies', function(req, res) {
	var company = req.body;
	Company.create(company, function(err, company) {
		if(err) {
			return res.status(500).json({err: err.message})
		}
			res.json({'company': company, message: "Company created"})

	});
});

router.put('/companies/:id', function(req, res) {
	var id = req.params.id;
	var company = req.body;
	if (company && company._id != id) {
		return res.status(500).json({err: "IDs do not match!"});
	}
	Company.findByIdAndUpdate(id, company, {new: true}, function(err, company) {
		if(err) {
			return res.status(500).json({err: err.message})
		}
			res.json({'company': company, message: "Company updated"})

	});
});

router.get('/users', function(req, res) {
	User.find({}, function(err, users) {
		if(err) {
			return console.log(err);
		}
		res.json({users: users})
	})
})

router.get('/users/:user_name', function(req, res) {
		var user_name = req.params.user_name;
		console.log(user_name);
		User.find({name: user_name}, function(err, users) {
			if(err) {
				return console.log(err);
			}
			res.json({users: users});
		})
});

router.post('/users', function(req, res) {
	var user = req.body;
	Company.create(user, function(err, user) {
		if(err) {
			return res.status(500).json({err: err.message})
		}
			res.json({'user': user, message: "User created"})

	});
});

router.put('/users/:user_name', function(req, res) {
	var user_name = req.params.user_name;
	var companyName = req.body.companies;
	User.findOne({name: user_name}, function(err, user){
		if (err) return handleError(err);
		User.findByIdAndUpdate(user._id, {$push: {companies: companyName}}, {new: true}, function(err, user) {
			if(err) {
			return res.status(500).json({err: err.message})
		}
		res.json({'user': user, message: "User updated"})
		});
	});	
	
});

router.put('/users/:user_name/remove', function(req, res) {
	var user_name = req.params.user_name;
	var companyName = req.body.companies;
	User.findOne({name: user_name}, function(err, user){
		if (err) return handleError(err);
		User.findByIdAndUpdate(user._id, {$pull: {companies: companyName}}, {new: true}, function(err, user) {
			if(err) {
			return res.status(500).json({err: err.message})
		}
		res.json({'user': user, message: "User updated"})
		});
	});

});

module.exports = router;












