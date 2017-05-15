/**
 * Created by jisooyoon on 2017. 5. 8..
 */

var csv = require('csv-parser');
var fs = require('fs');
var db = require('./../../../db');
var _ = require('underscore');

fs.createReadStream('../abr_beer_nation.csv')
    .pipe(csv())
    .on('data', function (data) {
        db.query("INSERT INTO beer(field_id, beer_engname, beer_korname, nation_id, style_id, " +
            "beer_abv, beer_kcal, brewery_id, description, ipt_date, upt_date) " +
            "VALUES(3, ?, ?, ?, 1, ?, ?, ?, 'need image and history', now(), now());",
            [data.beer_engname, data.beer_korname, data.nation_id, data.beer_abv, data.beer_kcal, data.brewery_id])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });