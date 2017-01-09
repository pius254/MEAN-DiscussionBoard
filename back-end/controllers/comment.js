var Comment = require('../models/comment');

module.exports = {
	get: function (req, res) {
		Comment.find({}).exec(function (err, result) {
			res.send(result);
		});
	},
	post: function(req, res){
		console.log(req.body);
		var comment = new Comment(req.body);
		comment.save();
		res.status(200);
	}
}

