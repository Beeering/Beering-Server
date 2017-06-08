/**
 * Created by jisooyoon on 2017. 6. 8..
 */

var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET field list. */
router.get('/list', function(req, res, next) {
    db.query("SELECT * FROM field;", [])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'The field-table does not exist.'
            });
        });
});

module.exports = router;