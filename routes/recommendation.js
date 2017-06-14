/**
 * Created by jisooyoon on 2017. 6. 2..
 */

var express = require('express');
var router = express.Router();
var proxy = require('./proxy');
var Promise = require('promise');

/* TEST recommendation. */
router.get('/test', function(req, res, next) {
    //Promiseres.json(proxy.recommendation("u1", 4));
    new Promise(proxy.recommendation("u1", 4), function(err, ret) {
        res.json(ret);
    });
});


/* GET recommendation. */
router.get('/get', function(req, res, next) {
    res.json(proxy.recommendation(req.query.user_id, req.query.num));
});

module.exports = router;