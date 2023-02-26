const express = require("express");
const mongoose = require('mongoose');
const mongoCredentials = require('./src/Database/credentials');
const favicon = require('serve-favicon');
const path = require('path');
const app = express();

const error404 = path.join(__dirname, "Public/404Error.html");

const frontRouter = require('./src/Controller/frontRouter');
const apiRouter = require('./src/Controller/apiRouter');

// Coneção com o banco
global.db = mongoose.connect(
    `mongodb://${mongoCredentials.HOSTNAME}:${mongoCredentials.PORT}/${mongoCredentials.DB}?authMechanism=DEFAULT`
);
 
// Use
app.use('/', frontRouter);
app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, "Public")));
app.use(favicon(path.join(__dirname, 'Public', 'img/icon', 'icon_rpg2.png')));

// Status Scenario
app.use((req, res) => res.status(404).sendFile(error404));

// Start
app.listen(4000, () => {
    console.log("Servidor ligado e disponivel em: http://localhost:4000");
    console.log("Para desligar o server, digite: ctrl + C")
})