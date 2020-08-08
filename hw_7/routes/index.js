var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/catalog', function (req, res) {
  res.render('catalog');
});

router.get('/carpet_plane', function (req, res) {
  res.render('carpet_plane');
});

router.get('/hat_invisibility', function (req, res) {
  res.render('hat_invisibility');
});

router.get('/nimbus', function (req, res) {
  res.render('nimbus');
});




module.exports = router;