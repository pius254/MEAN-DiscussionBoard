var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var auth = require('./controllers/auth');
var comment = require('./controllers/comment');

app.use(bodyParser.json());

app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
})

app.get('/api/message', comment.get);

app.post('/api/message', comment.post);

app.post('/auth/register', auth.register);

mongoose.connect("mongodb://localhost:27017/test", function (err, db) {
	if (!err) {
		console.log("we are connected to mongo");
	}else{
		console.log("Error Connecting to Mongo");
		throw err;
	}
})

var server = app.listen(5000, function(){
	console.log('Listening on port ', server.address().port);
})