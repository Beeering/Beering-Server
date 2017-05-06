/**
 * Created by jisooyoon on 2017. 4. 21..
 */
var csv = require('csv-parser');
var fs = require('fs');
var db = require('./db');

/**
 *  AUTH: yjsgoon
 *  DESC: beer
 *  DATE: 2017. 5. 6.
 */
fs.createReadStream('./resource/db/mclang_brewery_beer.csv')
    .pipe(csv())
    .on('data', function (data) {
        // console.log('id: %s beer_image: %s engname: %s korname: %s feature: %s style: %s released date: %s ' +
        //             'IBU: %s ABV: %s about: %s is_beer: %s is_brewery_detail: %s brewery_id: %s',
        //             data.id, data.beer_image, data.engname, data.korname, data.feature, data.style, data.released_date,
        //             data.IBU, data.ABV, data.about, data.is_beer, data.is_brewery_detail, data.brewery_id);
        db.query("INSERT INTO beer(field_id, beer_engname, beer_korname, beer_image, nation_id, style_id, " +
                 "beer_abv, beer_ibu, beer_feature, brewery_id, history, description, ipt_date, upt_date) " +
                 "VALUES(2, ?, ?, ?, 1, 1, ?, ?, ?, ?, ?, 'need kcal', now(), now());",
            [data.engname, data.korname, data.beer_image, data.ABV, data.IBU, data.feature, data.brewery_id, data.about])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });


/**
 *  AUTH: yjsgoon
 *  DESC: brewery
 *  DATE: 2017. 5. 1.
 */
// fs.createReadStream('./resource/db/mclang_brewery_brewery.csv')
//     .pipe(csv())
//     .on('data', function (data) {
//         db.query("INSERT INTO brewery(brewery_engname, brewery_korname, brewery_location, brewery_location_detail, " +
//             "brewery_tel, brewery_history, brewery_url, ipt_date, upt_date) VALUES(?, ?, ?, ?, ?, ?, ?, now(), now());",
//             [data.engname, data.korname, data.location, data.location_detail,
//                 data.phone, data.description, data.homepage])
//             .then(function () {
//                 console.log('script success');
//             })
//             .catch(function (err) {
//                 console.log('script fail: ' + err);
//             });
//     });

/**
 *  AUTH: yjsgoon
 *  DESC: pub
 *  DATE: 2017. 5. 3.
 */
// fs.createReadStream('./resource/db/mclang_brewery_pub.csv')
//     .pipe(csv())
//     .on('data', function (data) {
//         db.query("INSERT INTO pub(pub_engname, pub_korname, pub_location, pub_brewery_id, ipt_date, upt_date) VALUES(?, ?, ?, ?, now(), now());",
//             [data.engname, data.korname, data.location, data.brewery_id])
//             .then(function () {
//                 console.log('script success');
//             })
//             .catch(function (err) {
//                 console.log('script fail: ' + err);
//             });
//     });