const multer = require('multer');
const path = require('path')

module.exports = {
	storage: multer.diskStorage({

		destination: (req, file, cb) => {
			
			cb(null, path.join(__dirname, '..', 'uploads'));

		},

		filename: (req, file, cb) => {

			const ext1 = file.originalname.split('.');

			const extensao = ext1[ext1.length - 1];

			const name = "banner_" + Date.now() + ".";

			const arquivo = name + extensao;

			req.uploadedImage = "uploads/" + arquivo
			
			cb(null, arquivo)
			
		}
	})
}