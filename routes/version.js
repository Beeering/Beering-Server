/**
 * Created by jisooyoon on 2017. 6. 8..
 */

var express = require('express');
var router = express.Router();
var config = require('../config');

/* GET version list. */
router.get('/list', function(req, res, next) {
    res.json({
        resultCode: 0,
        info: config.version
    });
});

module.exports = router;
