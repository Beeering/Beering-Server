/**
 * Created by jisooyoon on 2017. 5. 8..
 */

var csv = require('csv-parser');
var fs = require('fs');
var db = require('./../../../db');
var _ = require('underscore');

/**
 *  AUTH: yjsgoon
 *  DESC: mclang_beer
 *  DATE: 2017. 5. 6.
 */
fs.createReadStream('../mclang_brewery_beer.csv')
    .pipe(csv())
    .on('data', function (data) {

        db.query("INSERT INTO beer(field_id, beer_engname, beer_korname, beer_image, nation_id, style_id, " +
            "beer_abv, beer_ibu, beer_srm, beer_kcal beer_feature, brewery_id, history, ipt_date, upt_date) " +
            "VALUES(2, ?, ?, ?, 1, 1, ?, ?, ?, ?, ?, ?, ?, now(), now());",
            [data.engname, data.korname, data.beer_image, data.ABV, Math.floor((Math.random() * 80) + 1),
                Math.floor((Math.random() * 90) + 10), Math.floor((Math.random() * 55) + 20), data.feature, data.brewery_id, data.about])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });