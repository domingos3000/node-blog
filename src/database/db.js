const mongoose = require('mongoose');
const PASSWORD = '';
mongoose.Promise = global.Promise;

mongoose.connect(
	`mongodb+srv://domingos3000:${process.env.PASSWORD_MONGO}@api-node-blog.zy23xgn.mongodb.net/?retryWrites=true&w=majority`
)
	.then(() => {
	console.log("Banco conectado!");
	})
	.catch(err => {
	console.log("Falha ao conectar " + err);
});

// mongoose.connect('mongodb://localhost/blognode')
// 	.then(() => {
// 	console.log("Banco conectado!");
// 	})
// 	.catch(err => {
// 	console.log("Falha ao conectar " + err);
// });

// mongodb+srv://domingos3000:<password>@api-node-blog.zy23xgn.mongodb.net/?retryWrites=true&w=majority

module.exports = mongoose;