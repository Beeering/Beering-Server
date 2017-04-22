/**
 * Created by jisooyoon on 2017. 4. 16..
 */

// var config = require('./config');
var mysql = require('promise-mysql');
var pool = mysql.createPool({
    host : "localhost",//config.db.mysql,
    user: 'beeringuser',
    password: 'beering',
    database: 'beering',
    connectionLimit: 20
});

module.exports = pool;