/**
 * Created by jisooyoon on 2017. 4. 21..
 */
var csv = require('csv-parser');
var fs = require('fs');
var db = require('./db');

// fs.createReadStream('./resource/db/mclang_brewery_beer.csv')
//     .pipe(csv())
//     .on('data', function (data) {
//         console.log('id: %s beer_image: %s engname: %s korname: %s feature: %s style: %s released date: %s ' +
//                     'IBU: %s ABV: %s about: %s is_beer: %s is_brewery_detail: %s brewery_id: %s',
//                     data.id, data.beer_image, data.engname, data.korname, data.feature, data.style, data.released_date,
//                     data.IBU, data.ABV, data.about, data.is_beer, data.is_brewery_detail, data.brewery_id);
//     });

// id,beer_image,engname,korname,feature,style,released date,IBU,ABV,about,is_beer,is_brewery_detail,brewery_id

/*
fs.createReadStream('./resource/db/mclang_brewery_brewery.csv')
    .pipe(csv())
    .on('data', function (data) {
        console.log('id: %s engname: %s korname: %s est: %s location: %s location_detail: %s phone: %s homepage: %s ' +
            'description: %s logo_image: %s brand_image: %s',
            data.id, data.engname, data.korname, data.est, data.location, data.location_detail,
            data.phone, data.homepage, data.description, data.logo_image, data.brand_image);

        db.query("INSERT INTO data_store(?, ?, ?, ?, ?, ?, ?, ?, ?) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);",
            ['brewery_engname', 'brewery_korname', 'brewery_location', 'brewery_location_detail', 'brewery_tel',
                'brewery_history', 'brewery_url', 'ipt_date', 'upt_date',
                data.engname, data.korname, data.location, data.location_detail,
                data.phone, data.description, data.homepage, now(), now()])
            .then(function () {
                console.log('script success');
            })
            .catch(function (err) {
                console.log('script fail: ' + err);
            });
    });
*/
