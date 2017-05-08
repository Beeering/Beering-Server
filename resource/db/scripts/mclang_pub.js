/**
 * Created by jisooyoon on 2017. 5. 8..
 */

var csv = require('csv-parser');
var fs = require('fs');
var db = require('./../../../db');

/**
 *  AUTH: yjsgoon
 *  DESC: mclang_pub
 *  DATE: 2017. 5. 3.
 */
fs.createReadStream('../mclang_brewery_pub.csv')
    .pipe(csv())
    .on('data', function (data) {
        db.query("INSERT INTO pub(pub_engname, pub_korname, pub_location, brewery_id, ipt_date, upt_date) VALUES(?, ?, ?, ?, now(), now());",
            [data.engname, data.korname, data.location, data.brewery_id])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });