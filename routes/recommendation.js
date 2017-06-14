/**
 * Created by jisooyoon on 2017. 6. 2..
 */

var express = require('express');
var router = express.Router();
var proxy = require('./proxy');
var Promise = require('promise');

/* TEST recommendation. */
router.get('/test', function(req, res, next) {
    res.json(proxy.recommendation(res, "u1", 4));
});

/* GET recommendation. */
router.get('/get', function(req, res, next) {
    res.json(proxy.recommendation(res, req.query.user_id, req.query.num));
});

module.exports = router;