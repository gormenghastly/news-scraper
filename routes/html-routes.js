const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/saved', function(req, res) {
  res.render('saved.handlebars');
});

module.exports = router;
