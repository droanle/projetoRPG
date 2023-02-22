const express = require("express");
const favicon = require('serve-favicon');
const path = require('path');
const app = express();

const error404 = path.join(__dirname, "public/404Error.html");

var frontRouter = require('./routers/frontRouter');
var apiRouter = require('./routers/apiRouter');

// USE
app.use('/', frontRouter);
app.use('/api/', apiRouter);

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, 'public', 'img/icon', 'icon_rpg2.png')));

app.use((req, res) => res.status(404).sendFile(error404));

app.listen(3000, () => {
    console.log("Servidor ligado e disponivel em: http://localhost:3000");
    console.log("Para desligar o server, digite: ctrl + C")
})