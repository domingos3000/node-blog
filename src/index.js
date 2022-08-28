require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();

const routes = require('./routes/post')
const bodyParser = require('body-parser');

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use(express.json());
app.use(bodyParser.urlencoded({extends: true}))

app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    }

    next();

})

app.get('/', (req, res) => {

    return res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.use('/post', routes);

const port = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log('Servidor ligado!')
})