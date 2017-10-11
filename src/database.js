'use strict';

// var Promise = require('bluebird');
// var mongoose = require('mongoose');
// Promise.promisifyAll(mongoose);
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://jvirgin:Turing95!@cluster0-shard-00-00-3hvov.mongodb.net:27017,cluster0-shard-00-01-3hvov.mongodb.net:27017,cluster0-shard-00-02-3hvov.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'

MongoClient.connect(uri, function(err, db){
	if(err) {
		console.log('Error' + err);
	} else {
		console.log('Connected to mongo successfully!');
		//db.close();\
		module.exports = db;
	}
});





// module.exports = db;