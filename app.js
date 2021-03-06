var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// Server DB 관리도구
var nodeadmin = require('nodeadmin');

var index = require('./routes/index');
var users = require('./routes/users');
var beer = require('./routes/beer');
var brewery = require('./routes/brewery');
var pub = require('./routes/pub');
var image = require('./routes/image');
var book = require('./routes/book');
var evaluation = require('./routes/evaluation');
var recommendation = require('./routes/recommendation');
var field = require('./routes/field');
var nation = require('./routes/nation');
var style = require('./routes/style');
var version = require('./routes/version');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/beer', beer);
app.use('/brewery', brewery);
app.use('/pub', pub);
app.use('/image', image);
app.use('/book', book);
app.use('/evaluation', evaluation);
app.use('/recommendation', recommendation);
app.use('/field', field);
app.use('/nation', nation);
app.use('/style', style);
app.use('/version', version);
app.use(nodeadmin(app));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
