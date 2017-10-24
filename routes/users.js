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
var  sql = 'SELECT * FROM t_book';


/* GET users listing. */
router.get('/', function(req, res, next) {
    //查
    connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        console.log(result);
        
        //把搜索值输出
       res.send(result);
    });
  //res.send('respond with a resource');
});

module.exports = router;
