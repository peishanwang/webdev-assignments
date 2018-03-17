var mongoose = require('mongoose');
//var db = mongoose.createConnection('mongodb://localhost:27017/webdev', {useMongoClient: true})
var db = mongoose.createConnection('mongodb://localhost:27017/webdev');
module.exports = db;
