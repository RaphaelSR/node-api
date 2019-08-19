const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); // Require em todos os files do diretorio selecionado

// Iniciando o app
const app = express();
app.use(express.json()); // Permite enviar dados para a aplicação em formato json

// Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', {
        useNewUrlParser: true
    });
requireDir('./src/models'); // Necessita do bd inicializado

// const Product = mongoose.model('Product');

// Rotas
app.use('/api', require("./src/routes"))

app.listen(3001);