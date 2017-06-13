/**
 * Created by jisooyoon on 2017. 6. 2..
 */

var express = require('express');
var router = express.Router();
var proxy = require('./proxy');
var config = require('../config');

/* TEST recommendation. */
router.get('/test', function(req, res, next) {
    proxy.recommendation("u1", 4);
});


/* GET recommendation. */
router.get('/get', function(req, res, next) {
    proxy.recommendation(req.query.user_id, req.query.num);
});

module.exports = router;