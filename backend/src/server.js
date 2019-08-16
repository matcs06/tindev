const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://mateus:mateus@cluster0-p32wr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(cors());
server.use(express.json()) //faz a requisição post entender que trabalhamos com .json atrvés do req.body
server.use(routes);

server.listen(3333);

// M - Model, V - View, C - Controller 