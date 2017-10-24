var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile("/home/tengxing/tmp/example/project/routes/index.html" )
});

module.exports = router;
