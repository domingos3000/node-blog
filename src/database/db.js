const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const USER = process.env.USER_MONGO
const PASSWORD = process.env.PASSWORD_MONGO

mongoose.connect(
	`mongodb+srv://${USER}:${PASSWORD}@api-node-blog.zy23xgn.mongodb.net/?retryWrites=true&w=majority`
)
	.then(() => {
	console.log("Connetion Mongo OK!");
	})
	.catch(err => {
	console.log("Failed connetion Mongo! => " + err);
});


module.exports = mongoose;