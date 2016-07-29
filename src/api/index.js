'use strict';

var express = require('express');
var Company = require('../models/company');
var User = require('../models/users');

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

router.get('/users/:company_name', function(req, res) {
		var company_name = req.params.company_name;
		console.log(company_name);
		Company.find({company_name: company_name}, function(err, companies) {
			if(err) {
				return console.log(err);
			}
			res.json({companies: companies});
		})
});


module.exports = router;