const mysql = require('mysql');

// 创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_six'
});

// 执行连接
connection.connect();



// 操作数据库
// connection.query(`INSERT INTO t_student (name, birthdate, gender, class_id) VALUES ('小马', '1996-6-2', 'M', 2)`, (error, results) => {
//   if (error){
//       console.log('err ====>>>>', err);
//       console.log('出错了')
//   };

//   if(results.affectedRows == 1){
//       console.log('insert 成功')
//   }
// //   console.log('results ====>>>>', results);

// });

// (name, birthdate, gender, class_id)
// ('小马', '1996-6-2', 'M', 2)

let data = {
    name: '老马',
    birthdate: '1996-2-6',
    gender: 'M',
    class_id: 1
}
connection.query(`INSERT INTO t_student SET ? `, data, (error, results) => {
    if (error) {
        console.log('err ====>>>>', err);
        console.log('出错了')
    };

    if (results.affectedRows == 1) {
        console.log('insert 成功')
    }
});


// 关闭连接
connection.end();