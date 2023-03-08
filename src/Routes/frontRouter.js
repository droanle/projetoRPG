const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) { res.redirect('/login'); });
router.get('/login', function (req, res) { res.sendFile(path.join(__dirname, "../Views/home.html")); });
router.get('/cadastro', function (req, res) { res.sendFile(path.join(__dirname, "../Views/cadastro.html")); });

module.exports = router;