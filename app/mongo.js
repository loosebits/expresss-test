var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
module.exports = db;