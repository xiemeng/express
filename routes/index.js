var express = require('express');
var router = express.Router(); // 创建一个路由器对象

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
