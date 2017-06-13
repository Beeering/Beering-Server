/**
 * Created by jisooyoon on 2017. 6. 2..
 */

var express = require('express');
var router = express.Router();
var db = require('../db');
var request = require('request');
// var config = require('../config.json');

/* SET book. */
router.post('/put', function(req, res, next) {
    db.query("INSERT INTO beer_book(user_id, beer_id, ipt_date, upt_date) VALUES(?, ?, ?, ?);",
        [req.body.user_id, req.body.beer_id, now(), now()])
        .then(function() {
            res.json({
                resultCode: 0,
                info: {
                    user_id: req.body.user_id,
                    beer_id: req.body.beer_id
                }
            });
        })
        .catch(function (err) {
            res.json( {
                resultCode: -1,
                msg: err
            });
        });

    // 추천 서버로 데이터 전송하기
});

/* GET book detail. */
router.get('/get', function(req, res, next) {
    db.query("SELECT * FROM beer_book WHERE user_id = ? AND beer_id = ?;", [req.query.user_id, req.query.beer_id])
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

/* GET book list. */
router.get('/list', function(req, res, next) {
    db.query("SELECT * FROM beer_book WHERE user_id = ?;", [req.query.user_id])
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

/* DELETE book. */
router.get('/delete', function(req, res, next) {
    db.query("DELETE FROM beer_book WHERE user_id = ? AND beer_id = ?;", [req.query.user_id, req.query.beer_id])
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