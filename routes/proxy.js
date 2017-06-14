/**
 * Created by jisooyoon on 2017. 6. 14..
 */

var config = require('../config');
var curl = require('curl');

module.exports.trainData = function (mod, user_id, beer_id) {
    curl.postJSON(config.server.event,
        {"event": mod, "entityType": "user", "entityId": user_id, "targetEntityType": "item", "targetEntityId": beer_id}
        , undefined, function(err, response, data){
            if (!err && response.statusCode == 200) {
                return {
                    resultCode: 0,
                    info: data
                };
            }
            else {
                return {
                    resultCode: -1,
                    msg: 'Recommendation event server transfer fail!!'
                };
            }
        });
};

module.exports.recommendation = function (ret, user_id, num) {
    curl.postJSON(config.server.recommend, { "user": user_id, "num": num }, undefined, function(err, response, data){
        if (!err && response.statusCode == 200) {
            ret.json({
                resultCode: 0,
                info: data
            });
        }
        else {
            ret.json({
                resultCode: -1,
                msg: 'Recommendation fail'
            });
        }
    });
};