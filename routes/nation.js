/**
 * Created by jisooyoon on 2017. 6. 8..
 */

var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET nation list. */
router.get('/list', function(req, res, next) {
    db.query("SELECT * FROM nation;", [])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'The nation-table does not exist.'
            });
        });
});

module.exports = router;