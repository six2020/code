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

connection.query(`UPDATE t_student SET name=?, birthdate=? WHERE id=?`, ['小二', '1997-7-6', 14], (error, results) => {
    if (error) {
        console.log('err ====>>>>', err);
        console.log('出错了')
    };

    console.log('results ====>>>>', results);
    
    if (results.affectedRows == 1) {
        console.log('update 成功')
    }
});


// 关闭连接
connection.end();