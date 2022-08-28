const mongoose = require('./../database/db');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

	title: {
		type: String,
		required: true
	},

	description: {
		type: String,
		required: true
	},

	category: {
		type: String,
		required: true
	},

	author: {
		type: String,
		required: true
	},

	createdAt: {
		type: Date,
		required: true,
		default: Date.now
	},

	image: {
		type: String,
		required: true,
	},

});


const Post = mongoose.model('Post', PostSchema);

module.exports = Post;