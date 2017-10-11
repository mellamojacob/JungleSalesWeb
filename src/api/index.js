'use strict';



// var express = require('express');
// var app = express();

// app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));

// // views is directory for all template files
// //app.set('views', __dirname + '/views');

// app.get('/', function(request, response) {
//   response.end('Hello World\n');
// });

// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

var express = require('express');
var async = require('async');
var Mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var stitch = require('mongodb-stitch');
var client = new stitch.StitchClient('jungle_sales-jppgh');
var db = client.service('mongodb', 'mongodb-atlas').db('junglesales');

client.login().then(() => 
	db.collection('companies').updateOne({name: "Jacob"}, {$set:{number:42}}, {upsert: true})
).then(() => 
	db.collection('companies').find({name: "Jacob"})
).then(docs => {
	console.log("found docs", docs);
	console.log("[MongoDB Stitch] connected to Stitch");
}).catch(err => {
	console.log(err)
});

var ObjectID = require('mongodb').ObjectID;
// var mongoose = require('mongoose');
var schedule = require('node-schedule');
var database = require('../database');
//var Company = require('../models/company');
//var User = require('../models/users');
//ar Seed = require('../seed.js');
var app = express();

// if (process.env.NODE_ENV !== 'production') {
// require('dotenv').config()
// }

//app.listen(process.env.PORT || 5000);

app.listen(app.get('port'), function() {
	console.log("The server is running on port ", app.get('port'))
});



//console.log(database);

// var MongoClient = require('mongodb').MongoClient

// var URL = 'mongodb://jvirgin:Turing95!@cluster0-shard-00-00-3hvov.mongodb.net:27017,cluster0-shard-00-01-3hvov.mongodb.net:27017,cluster0-shard-00-02-3hvov.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

// MongoClient.connect(URL, function(err, db) {
//   if (err) return

//   var collection = db.collection('companies')
//   var response = collection.find();
//   console.log(response);
// })

// var j = schedule.scheduleJob('* * 0 * * *', function() {
// 	var companies = Company.find();
// 	for(var company in companies) {
// 		company.time_stamp -= 1;
// 		var time = company.time_stamp
// 		if(time == 1000) {
// 			company.time_stamp = 7;
// 		}
// 		if(time == 0) {
// 			company.salesperson = "";
// 		}

// 	}

// })


/*

var router = express.Router();


router.get('/', function(req, res) {
	// var db = mongoose.connection;
	// db.on('error', console.error.bind(console, 'connection error'));
	// db.once('open', function() {
	// 	Company.find(function(err, companies) {
	// 		if(err) return console.error(err);
	// 		console.log(companies);
	// 	})
	// })
	// var found_companies = Company.find();
	// console.log(found_companies);
	//res.end(Company.find());
})

router.get('/companies/', function(req, res) {
	// db.once('open', function(){

	// })
	console.log("We made it to companies");
	Company.find({}, function(err, companies) {
		if(err) {
			return console.log(err);
		}
		console.log(companies);
		res.json({companies: companies})
	})
})

router.get('/companies/company_name/:company_name', function(req, res) {
		var company_name = req.params.company_name;
		console.log(company_name);
		Company.find({company_name: company_name}, function(err, companies) {
			if(err) {
				return console.log(err);
			}
			res.json({companies: companies});
		})
});

router.get('/companies/:tier', function(req, res) {
		var tier = req.params.tier;
		console.log(tier);
		Company.find({tier: tier}, function(err, companies) {
			if(err) {
				return console.log(err);
			}
			console.log(companies);
			res.json({companies: companies});
		})
});

router.post('/companies', function(req, res) {
	var company = req.body;
	console.log("post accessed");
	Company.create(company, function(err, company) {
		if(err) {
			return res.status(500).json({err: err.message})
		} else {
			res.json({message: "Company created"})
		}

	});
});

router.put('/companies/:id', function(req, res) {
	var id = req.params.id;
	//var _id = ObjectID(id)
	//console.log(_id);
	var body = req.body;
	//if (company && company._id != id) {
	//	return res.status(500).json({err: "IDs do not match!"});
	//}
	Company.findOneAndUpdate({_id: ObjectID(id)}, body, {new: true} , function(err, company) {
		if(err) {
			return res.status(500).json({err: err.message})
		}
			res.json({message: "Company updated"})

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




*/







