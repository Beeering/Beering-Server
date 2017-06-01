/**
 * Created by jisooyoon on 2017. 5. 8..
 */

var csv = require('csv-parser');
var fs = require('fs');
var db = require('./../../../db');
var _ = require('underscore');

fs.createReadStream('../nrm_beer_ko.csv')
    .pipe(csv())
    .on('data', function (data) {
        var abv = data.beer_abv;
        var kcal = data.beer_kcal;

        if (!_.isNumber(abv))
            abv = -1;

        if (!_.isNumber(kcal))
            kcal = -1;

        db.query("INSERT INTO beer(field_id, beer_image, beer_engname, beer_korname, nation_id, style_id, " +
            "beer_abv, beer_ibu, beer_srm, beer_kcal, history, description, ipt_date, upt_date) " +
            "VALUES(1, ?, ?, ?, 1, 1, ?, ?, ?, ?, 'need ibu and brewery', now(), now());",
            [data.beer_image, data.beer_engname, data.beer_korname, abv, Math.floor((Math.random() * 80) + 1),
                Math.floor((Math.random() * 90) + 10), kcal, data.description])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });