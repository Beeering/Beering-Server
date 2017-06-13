/**
 * Created by jisooyoon on 2017. 6. 2..
 */

var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config.json');

/* GET recommendation. */
router.get('/get', function(req, res, next) {
    request({
        method: 'POST',
        preambleCRLF: true,
        postambleCRLF: true,
        url: config.server.recommend,
        multipart: [
            {
                'content-type': 'application/json',
                body: JSON.stringify({
                    "event": "$set",
                    "entityType": "user",
                    "entityId": "u0"
                })
            }
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
    });
});

module.exports = router;