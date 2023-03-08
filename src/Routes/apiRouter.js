var express = require("express");
var router = express.Router();
var userController = require("../Controller/UserController");

router.get("/", function (req, res) {
  res.send(`API Sistema`);
});

router.post("/register", (req, res) => {
  userController.newUser(req, res);
});

module.exports = router;
