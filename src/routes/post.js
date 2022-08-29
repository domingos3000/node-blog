const express = require('express');
const routes = express.Router();
const upload = require('./../config/upload');
const multer = require('multer');

const Post = require('./../model/Post');


// UPLOAD

const storage = multer(upload);

routes.post('/upload', storage.single('arquivo_upload'), (req, res) => {
	
	if(req.body.length < 0){

		return res.status(400).json({
			message: "Upload Failed! Please, Try Again.",
			status: 400
		})
	}

	res.status(201).json({
		message: "Upload realizado com sucesso!",
		status: 201
	})	
})

// CADASTRAR POSTS

routes.post('/add', storage.single('arquivo_upload'), async (req, res) => {

	
	try {

		const image = req.uploadedImage;
		const body = {...req.body, image}

		const data = await Post.create(body)

		return res.status(201).json({
			message: "Cadastrado com sucesso!",
			status: 201,
			data
		})

	} 
	catch (error) {

		res.status(400).json({
			message: "Request Failed! Try Again.",
			status: 400,
			error
		})

	} 

	
	

});

// LISTAR TODOS OS POSTS

routes.get('/', async (req, res) => {
	
	try {
		
		const data = await Post.find()

		return res.status(200).json(data)

	} 
	catch (error) {

		res.send({erro: error})

	} 	

});

// LISTAR APENAS UM POST

routes.get('/:id_post', async (req, res) => {
	
	const id_post = req.params.id_post;
	try {
		
		const data = await Post.findById(id_post)

		return res.status(200).json(data)

	} 
	catch (error) {

		res.send({erro: error})

	} 	

});


// ATUALIZANDO POST

routes.put('/update/:id_post', async (req, res) => {
	
	const id_post = req.params.id_post;

	try {
		
		const data = await Post.findByIdAndUpdate(id_post, req.body)

		return res.status(200).json(data)

	} 
	catch (error) {

		res.send({erro: error})

	} 	

});

// ELIMINAR POST

routes.delete('/delete/:id_post', async (req, res) => {
	
	const id_post = req.params.id_post;
	
	try {
		
		const data = await Post.findByIdAndRemove(id_post, req.body)

		res.status(200).json({"message" : "Eliminado com sucesso!"});

	} 
	catch (error) {

		res.send({erro: error})

	} 	

});







module.exports = routes;