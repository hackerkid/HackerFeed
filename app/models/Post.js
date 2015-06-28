var mongoose = require('mongoose');

module.exports = mongoose.model('Post', {
	 title:  String,
  	author: String,
  	url: String,
  	blogId: String,
    blogName: String,
    category: String,
  	body:   String,
  	comments: [{ body: String, date: Date }],
  	date: { type: Date, default: Date.now },
  	hidden: Boolean,
  	meta: {
    upVotes: Number,
    downVotes:  Number
    }
});
