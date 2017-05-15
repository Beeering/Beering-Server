/**
 * Created by jisooyoon on 2017. 5. 8..
 */
var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET brewery detail. */
router.get('/', function(req, res, next) {
    res.send('GET beer');
});

/* GET brewery list. */
router.get('/', function(req, res, next) {
    res.send('GET beer list');
});

/* SET brewery. */
router.get('/', function(req, res, next) {
    res.send('SET beer');
});

/* DELETE brewery. */
router.get('/', function(req, res, next) {
    res.send('DEL beer');
});

module.exports = router;