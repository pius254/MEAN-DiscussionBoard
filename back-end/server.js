var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Comment = mongoose.model('comment', {
	msg: String
});

app.use(bodyParser.json());

app.use(function(req,res,next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	next();
})

app.post('/api/message', function(req, res){
	console.log(req.body);
	var comment = new Comment(req.body);
	comment.save();
	res.status(200);
})

function GetComments() {
	Comment.find({}).exec(function (err, result) {
		console.log(result);
	});
}

mongoose.connect("mongodb://localhost:27017/test", function (err, db) {
	if (!err) {
		console.log("we are connected to mongo");
		GetComments();
	}
})

var server = app.listen(5000, function(){
	console.log('Listening on port ', server.address().port);
})