/**
 * Created by jisooyoon on 2017. 6. 2..
 */

var express = require('express');
var router = express.Router();
var db = require('../db');
var proxy = require('./proxy');

/* SET evaluation grade. */
router.post('/put', function(req, res, next) {
    db.query("INSERT INTO beer_eval(user_id, beer_id, grade, review, ipt_date, upt_date) " +
        "VALUES(?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE grade = ? AND review = ? AND upt_date = ?;",
        [req.body.user_id, req.body.beer_id, req.body.grade, now(), now(), req.body.grade, req.body.review, now()])
        .then(function () {
            res.json({
                resultCode: 0,
                info: {
                    user_id: req.body.user_id,
                    beer_id: req.body.beer_id,
                    grade: req.body.grade,
                    review: req.body.review
                }
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: err
            });
        });

    proxy.trainData("buy", req.query.user_id, req.query.beer_id);
});

/* SET evaluation grade. */
router.post('/put/grade', function(req, res, next) {
    db.query("INSERT INTO beer_eval(user_id, beer_id, grade, ipt_date, upt_date) " +
        "VALUES(?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE grade = ? AND upt_date = ?;",
        [req.body.user_id, req.body.beer_id, req.body.grade, now(), now(), req.body.grade, now()])
        .then(function () {
            res.json({
                resultCode: 0,
                info: {
                    user_id: req.body.user_id,
                    beer_id: req.body.beer_id,
                    grade: req.body.grade
                }
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: err
            });
        });

    proxy.trainData("buy", req.query.user_id, req.query.beer_id);
});

/* SET evaluation review. */
router.post('/put/review', function(req, res, next) {
    db.query("INSERT INTO beer_eval(user_id, beer_id, review, ipt_date, upt_date) " +
        "VALUES(?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE review = ? AND upt_date = ?;",
        [req.body.user_id, req.body.beer_id, req.body.review, now(), now(), req.body.review, now()])
        .then(function () {
            res.json({
                resultCode: 0,
                info: {
                    user_id: req.body.user_id,
                    beer_id: req.body.beer_id,
                    review: req.body.review
                }
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: err
            });
        });

    proxy.trainData("view", req.query.user_id, req.query.beer_id);
});

/* GET evaluation detail. */
router.get('/get', function(req, res, next) {
    db.query("SELECT * FROM beer_eval WHERE user_id = ? AND beer_id = ?;", [req.query.user_id, req.query.beer_id])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'Evaluation not exist.'
            });
        });
});

/* GET evaluation list. */
router.get('/list', function(req, res, next) {
    db.query("SELECT * FROM beer_eval WHERE user_id = ?;", [req.query.user_id])
        .then(function (data) {
            res.json({
                resultCode: 0,
                info: data
            });
        })
        .catch(function (err) {
            res.json({
                resultCode: -1,
                msg: 'The user does not exist.'
            });
        });
});

/* DELETE evaluation. */
router.get('/delete', function(req, res, next) {
    db.query("DELETE FROM beer_eval WHERE user_id = ? AND beer_id = ?;", [req.query.user_id, req.query.beer_id])
        .then(function () {
            res.json({
                resultCode: 0,
                info: {
                    user_id: req.query.user_id,
                    beer_id: req.query.beer_id
                }
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