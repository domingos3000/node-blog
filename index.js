require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const cors = require('cors');

const routes = require('./src/routes/post')
const bodyParser = require('body-parser');

app.use(cors());

app.use('/uploads', express.static(path.resolve(__dirname, 'src','uploads')));
app.use(express.json());
app.use(bodyParser.urlencoded({extends: true}))

app.use((req, res, next) => {
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('X-Content-Type-Options', 'nosniff');

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    }

    next();

})

app.get('/', (req, res) => {

    return res.send({
        "message": "Olá, seja bem-vindo!"
    })
})

app.use('/post', routes);

const port = process.env.PORT || 3333;


app.listen(port , () => {
    console.log('Running...')
})