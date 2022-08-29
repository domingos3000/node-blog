const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const URI_MONGODB = process.env.URI_MONGO_CONNECT

mongoose.connect(URI_MONGODB)
	.then(() => {
	console.log("Connetion Mongo OK!");
	})
	.catch(err => {
	console.log("Failed connetion Mongo! => " + err);
});


module.exports = mongoose;