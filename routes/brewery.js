/**
 * Created by jisooyoon on 2017. 5. 8..
 */
var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET brewery detail. */
router.post('/get', function(req, res, next) {
    db.query("SELECT * FROM brewery WHERE brewery_id = ?;", [req.body.brewery_id])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'This brewery does not exist.'
            });
        });
});

/* GET brewery list. */
router.get('/list', function(req, res, next) {
    db.query("SELECT * FROM brewery;", [])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'The brewery-table does not exist.'
            });
        });
});

/* SET brewery. */
router.post('/put', function(req, res, next) {
    res.json({
        resultCode: -1,
        msg: 'Don\'t implement'
    })
});

/* DELETE brewery. */
router.post('/delete', function(req, res, next) {
    db.query("DELETE FROM brewery WHERE brewery_id = ?;", [req.body.brewery_id])
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