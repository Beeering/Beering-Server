/**
 * Created by jisooyoon on 2017. 5. 9..
 */
var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET beer detail. */
router.get('/', function(req, res, next) {
    res.send('GET beer');
});

/* GET beer list. */
router.get('/', function(req, res, next) {
    res.send('GET beer list');
});

/* SET beer. */
router.get('/', function(req, res, next) {
    res.send('SET beer');
});

/* DELETE beer. */
router.get('/', function(req, res, next) {
    res.send('DEL beer');
});

module.exports = router;