/**
 * Created by jisooyoon on 2017. 5. 8..
 */

var csv = require('csv-parser');
var fs = require('fs');
var db = require('./../../../db');

/**
 *  AUTH: yjsgoon
 *  DESC: mclang_brewery
 *  DATE: 2017. 5. 1.
 */
fs.createReadStream('../mclang_brewery_brewery.csv')
    .pipe(csv())
    .on('data', function (data) {
        db.query("INSERT INTO brewery(brewery_engname, brewery_korname, brewery_location, brewery_location_detail, " +
            "brewery_tel, brewery_history, brewery_url, ipt_date, upt_date) VALUES(?, ?, ?, ?, ?, ?, ?, now(), now());",
            [data.engname, data.korname, data.location, data.location_detail,
                data.phone, data.description, data.homepage])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });