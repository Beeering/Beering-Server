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
                    "entityId": "u0",
                    "eventTime": "현재 시각"
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
/*
    -d '{
    "event" : "$set",
        "entityType" : "user",
        "entityId" : "u0",
        "eventTime" : "2014-11-02T09:39:45.618-08:00"
}'
  */
/*
    request({
            method: 'PUT',
            preambleCRLF: true,
            postambleCRLF: true,
            uri: 'http://service.com/upload',
            multipart: [
                {
                    'content-type': 'application/json',
                    body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
                },
                { body: 'I am an attachment' },
                { body: fs.createReadStream('image.png') }
            ],
            // alternatively pass an object containing additional options
            multipart: {
                chunked: false,
                data: [
                    {
                        'content-type': 'application/json',
                        body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
                    },
                    { body: 'I am an attachment' }
                ]
            }
        },
        function (error, response, body) {
            if (error) {
                return console.error('upload failed:', error);
            }
            console.log('Upload successful!  Server responded with:', body);
        })
*/

});

module.exports = router;