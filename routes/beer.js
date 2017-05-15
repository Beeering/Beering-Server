/**
 * Created by jisooyoon on 2017. 5. 9..
 */
var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET beer detail. */
router.get('/get', function(req, res, next) {
    db.query("SELECT * FROM beer WHERE beer_id = ?;", [req.body.beer_id])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'This beer does not exist.'
            });
        });
});

/* GET beer list. */
router.get('/list', function(req, res, next) {
    db.query("SELECT * FROM beer;", [])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'The beer-table does not exist.'
            });
        });
});

/* SET beer. */
router.get('/put', function(req, res, next) {
    res.json({
        resultCode: -1,
        msg: 'Don\'t implement'
    })
});

/* DELETE beer. */
router.get('/delete', function(req, res, next) {
    db.query("DELETE FROM beer WHERE beer_id = ?;", [req.body.beer_id])
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