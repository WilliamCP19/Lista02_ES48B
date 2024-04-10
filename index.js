const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');

const main = require('./main');

const port = 3000;
const servidor = express();

servidor.use(bodyParser.urlencoded({ extended: true }));
servidor.use(express.json());

servidor.engine('mustache', mustache());
servidor.set('view engine', 'mustache');
servidor.set('views', __dirname + '/telas');

servidor.get("/inverter", main.realizarInversao);

servidor.all('/login', main.realizarLogin);

servidor.listen (port, () => {
    console.log ("Rodando, na porta 3000...");
});