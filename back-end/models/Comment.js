var mongoose = require('mongoose');

module.exports = mongoose.model('comment', {
	msg: String
});