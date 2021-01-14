exports.query = (sql, data=null, cb )=>{
    const mysql= require('mysql');

    let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db_six'
    });
    
    connection.connect();
        
    connection.query(sql, data, function (error, results) {
        if (error){
            cb(error);
            return
        }

        cb(null, results)
    });

    connection.end();
}