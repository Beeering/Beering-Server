/**
 * Created by jisooyoon on 2017. 5. 15.
 */

var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET pub detail. */
router.post('/get', function(req, res, next) {
    db.query("SELECT * FROM pub WHERE pub_id = ?;", [req.body.pub_id])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'This pub does not exist.'
            });
        });
});

/* GET pub list. */
router.get('/list', function(req, res, next) {
    db.query("SELECT * FROM pub;", [])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'The pub-table does not exist.'
            });
        });
});

/* SET pub. */
router.post('/put', function(req, res, next) {
    res.json({
        resultCode: -1,
        msg: 'Don\'t implement'
    })
});

/* DELETE pub. */
router.post('/delete', function(req, res, next) {
    db.query("DELETE FROM pub WHERE pub_id = ?;", [req.body.pub_id])
        .then(function () {
            res.json({
                resultCode: 0
            })
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: err
            })
        });
});

module.exports = router;