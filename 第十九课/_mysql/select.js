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

connection.query(`SELECT * FROM t_student`, (error, results) => {
    if (error) {
        console.log('err ====>>>>', err);
        console.log('出错了')
    };

    // console.log('results ====>>>>', results);
    // console.log('results ====>>>>', results[0]);
    console.log('results ====>>>>', results[0].name);
    
    // if (results.affectedRows == 1) {
    //     console.log('delete 成功')
    // }
});


// 关闭连接
connection.end();