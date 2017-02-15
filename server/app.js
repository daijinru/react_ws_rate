var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
<<<<<<< HEAD
=======

>>>>>>> parent of 7662efb... add fs write text
var swig = require('swig');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

<<<<<<< HEAD
// websocket chat
var websocket = require('./libs/websocket.js');
websocket.websocket();
=======
var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 3001 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
});
>>>>>>> parent of 7662efb... add fs write text

// view engine setup
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'tpl');
app.engine('tpl', swig.renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', index);
app.use('/users', users);

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
