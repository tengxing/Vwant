var express = require('express');//加载express模块
var path = require('path');////加载路径模块
var favicon = require('serve-favicon');//请求网页的logo
var logger = require('morgan');//在控制台中，显示req请求的信息
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var bodyParser = require('body-parser');


var app = express();

//模板开始
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 载入中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 路由信息（接口地址），存放在routes的根目录
var index = require('./routes/index');
var users = require('./routes/users');
var add = require('./routes/add');
var deletes = require('./routes/delete');
//请求路由
app.use('/', index);
app.use('/book/add', add);
app.use('/book/delete', deletes);
app.use('/book/users', users);


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
