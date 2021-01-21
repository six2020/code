const http = require('http');

// 查询所有数据
// let req = http.request('http://localhost:8080/books', res => {
//     let result = '';

//     res.on('data', chunk => {
//         result += chunk
//     });

//     res.on('end', (  ) => {
//         // console.log(' ====>>>>', '数据接收完成');
        
//         console.log('result ====>>>>', result);
        
//     })

// });
// 查询单挑数据
let req = http.request('http://localhost:8080/books/book/2', res => {
    let result = '';

    res.on('data', chunk => {
        result += chunk
    });

    res.on('end', (  ) => {
        // console.log(' ====>>>>', '数据接收完成');
        
        console.log('result ====>>>>', result);
        
    })

});

req.end();