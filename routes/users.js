var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* SET users. */
router.post('/put', function(req, res, next) {
  db.query("INSERT INTO user(user_id, ipt_date, upt_date) VALUES(?, now(), now());", [req.body.user_id])
      .then(function (data) {
        res.json({
          resultCode: 0
        });
      })
      .catch(function (err) {
        res.json({
          resultCode: -1,
          msg: 'SQL Query Fail!!'
        });
      });
});

module.exports = router;