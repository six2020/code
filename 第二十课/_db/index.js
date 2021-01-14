const mysql= require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_six'
});
 
connection.connect();
 
// let obj = {
//     name: '小王',
//     birthdate: '1994-4-3',
//     gender: "M",
//     class_id: 2
// }
// insert 
// connection.query('INSERT INTO t_student SET ?', obj, function (error, results) {
//   if (error){
//       console.log('err ====>>>>', error);
//       console.log(' ====>>>>', '出错了');
//       return
//   }
  
//   console.log('results ====>>>>', results);
  

// });


// update
// connection.query('UPDATE t_student SET name=?, birthdate=?, class_id=? WHERE id=?', ['小王吧', '1994-2-1', 1, 17], function (error, results) {
//   if (error){
//       console.log('err ====>>>>', error);
//       console.log(' ====>>>>', '出错了');
//       return
//   }
  
//   console.log('results ====>>>>', results);
  

// });


// delete
// connection.query('DELETE FROM t_student WHERE id=?', [17], function (error, results) {
//   if (error){
//       console.log('err ====>>>>', error);
//       console.log(' ====>>>>', '出错了');
//       return
//   }
  
//   console.log('results ====>>>>', results);
  

// });


// selecte
// connection.query('SELECT * FROM t_student WHERE id=?', [20], function (error, results) {
//   if (error){
//       console.log('err ====>>>>', error);
//       console.log(' ====>>>>', '出错了');
//       return
//   }
  
//   console.log('results ====>>>>', results);
  

// });

// connection.query('SELECT count(*) AS total FROM t_student', function (error, results) {
//   if (error){
//       console.log('err ====>>>>', error);
//       console.log(' ====>>>>', '出错了');
//       return
//   }
  
//   console.log('results ====>>>>', results);
//   console.log('results[0].total ====>>>>', results[0].total);
  

// });

 
connection.end();