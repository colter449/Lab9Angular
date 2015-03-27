var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
	title: String,
	upvotes: {type: Number, default: 0},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
	this.upvotes +=1;
	this.save(cb);
console.log("UPVOTES SHOULD BE INCREMENTED: " + this.upvotes); 
};

mongoose.model('Post',PostSchema);

