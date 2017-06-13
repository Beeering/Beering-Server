/**
 * Created by jisooyoon on 2017. 6. 2..
 */

var express = require('express');
var router = express.Router();
var request = require('request');
var curl = require('curl');
var config = require('../config');

/* GET recommendation. */
router.get('/get', function(req, res, next) {
    /*request({
        method: 'POST',
        preambleCRLF: true,
        postambleCRLF: true,
        url: config.server.recommend,
        multipart: [
            {
                'Content-Type': 'application/json',
                // body: '{ "user": "u1", "num": 4 }'
            },
            JSON.stringify({
                "user": "u1",
                "num": 4
            })
        ]
    },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json({
                resultCode: 0,
                info: response
            });
        }
        else {
            res.json({
                resultCode: -1,
                msg: 'Recommendation fail'
            })
        }
    });*/

    curl.postJSON(config.server.recommend, { "user": "u1", "num": 4 }, undefined, function(err, response, data){
        if (!err && response.statusCode == 200) {
            res.json({
                resultCode: 0,
                info: data
            });
        }
        else {
            res.json({
                resultCode: -1,
                msg: 'Recommendation fail'
            })
        }
    });

});

module.exports = router;