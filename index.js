const express = require("express");
const mongoose = require("mongoose");
const mongoCredentials = require("./src/Database/credentials");
const favicon = require("serve-favicon");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const error404 = path.join(__dirname, "public/404Error.html");

const frontRouter = require("./src/Routes/frontRouter");
const apiRouter = require("./src/Routes/apiRouter");

// Coneção com o banco
mongoose.set("strictQuery", true);
global.db = mongoose.connect(
  `mongodb://${mongoCredentials.USERNAME}:${mongoCredentials.PASSWORD}@${mongoCredentials.HOSTNAME}:${mongoCredentials.PORT}/${mongoCredentials.DB}?authSource=admin`
);

// Use
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/bootstrap/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/bootstrap/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "/jquery",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

app.use(favicon(path.join(__dirname, "public", "img/icon", "icon_rpg2.png")));

// Router
app.use("/", frontRouter);
app.use("/api", apiRouter);

// Status Scenario
app.use((req, res) => res.status(404).sendFile(error404));

// Start
app.listen(4000, () => {
  console.log("Servidor ligado e disponivel em: http://localhost:4000");
  console.log("Para desligar o server, digite: ctrl + C");
});
