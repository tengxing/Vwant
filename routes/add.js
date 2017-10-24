var express = require('express');
var router = express.Router();
var URL = require('url');
//加载mysql模块
var mysql      = require('mysql');
//创建连接
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '123456',
database : 'ssm'
});

//执行创建连接 
connection.connect();
//SQL语句
var  addSql = 'INSERT INTO t_book(bookname,author,publish,price,time) VALUES(?,?,?,?,?)';


/* GET users listing. */
router.get('/', function(req, res, next) {
     //解析请求参数
    var params = URL.parse(req.url, true).query;
    var addSqlParams = [params.bookname, params.author, params.publish, params.price, params.time];
    console.info(addSqlParams)
      //增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }   
    res.send(result);          
    });
  //res.send('respond with a resource');
});

module.exports = router;
