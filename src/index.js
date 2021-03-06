const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //cria o servidor

app.use(bodyParser.json()); //identifica requisições json
app.use(bodyParser.urlencoded({ extended: false })) //identidica os parametros da url

require('./controllers/authController')(app); //referenciando authController repassando o objeto app;
require('./controllers/projectController')(app); //referenciando authController repassando o objeto app;

app.listen(3000);