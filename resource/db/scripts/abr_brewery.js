/**
 * Created by jisooyoon on 2017. 5. 8..
 */

var csv = require('csv-parser');
var fs = require('fs');
var db = require('./../../../db');

fs.createReadStream('../abr_brewery_nation.csv')
    .pipe(csv())
    .on('data', function (data) {
        db.query("INSERT INTO brewery(brewery_engname, brewery_location_detail, ipt_date, upt_date) VALUES(?, ?, now(), now());",
            [data.brew_name, data.brew_loc])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });