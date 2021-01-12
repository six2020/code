const mysql = require('mysql');

// 创建连接
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_six'
});
 
// 执行连接
connection.connect();

let get_data = "1; DELETE FROM t_table";

let sql = '';

connection.query('SELECT * FROM t_table WHERE id = 1; DELETE FROM t_table', (error, results) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

// 操作数据库
// connection.query('SELECT 1 + 1 AS solution', (error, results) => {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

 
// 关闭连接
connection.end();