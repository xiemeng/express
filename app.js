
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');  // 日志输出插件

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));  // 设置视图模板，定义views为视图模板
app.set('view engine', 'pug');  // 设置视图格式为pug

app.use(logger('dev'));  // 日志输出
app.use(express.json());  // 解析带有json负载的传入请求
app.use(express.urlencoded({ extended: false }));  // 解析带有body的请求头
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录





module.exports = app;
