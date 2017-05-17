/**
 * Created by jisooyoon on 2017. 5. 17.
 */


var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var base_url = '../resource/beer/';

router.get('/get', function (req, res) {
    if (!req.query.filename) {
        res.json({
            resultCode: -1,
            msg: '파일명을 입력해주세요.'
        });
    }
    else {
        fs.readFile(base_url + req.query.filename, function (err, data) {
            if (err) {
                res.json({
                    resultCode: -1,
                    msg: '존재하지 않는 파일입니다.'
                });
            }

            res.sendFile(path.join(__dirname, base_url, req.query.filename));
        });
    }
});

module.exports = router;