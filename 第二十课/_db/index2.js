const db = require('./db');

// SELECT 
db.query(`SELECT * FROM t_student`, null, (err, results)=>{
    if(err){
        console.log('err ====>>>>', err);
        console.log('err ====>>>>', '出错了');
        return
    }

    console.log(' results====>>>>', results);
    
})



// INSERT
// let obj = {
//     name: '小王',
//     birthdate: '1994-4-3',
//     gender: "M",
//     class_id: 2
// }

// db.query(`INSERT INTO t_student SET ?`, obj, (err, results)=>{
//     if(err){
//         console.log('err ====>>>>', err);
//         console.log('err ====>>>>', '出错了');
//         return
//     }

//     console.log(' results====>>>>', results);
    
// })

// DELETE

// db.query(`DELETE FROM t_student WHERE id=?`, [18], (err, results)=>{
//     if(err){
//         console.log('err ====>>>>', err);
//         console.log('err ====>>>>', '出错了');
//         return
//     }

//     console.log(' results====>>>>', results);
    
// })


// UPDATE

// db.query(`UPDATE t_student SET class_id=?  WHERE id=?`, [2, 16], (err, results)=>{
//     if(err){
//         console.log('err ====>>>>', err);
//         console.log('err ====>>>>', '出错了');
//         return
//     }

//     console.log(' results====>>>>', results);
    
// })