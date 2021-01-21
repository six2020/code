const http = require('http');

let obj = {

    method: "DELETE"

};

let req = http.request('http://localhost:8080/books/book/13', obj, res => {
    let result = '';

    res.on('data', chunk => {
        result += chunk
    });

    res.on('end', () => {
        // console.log(' ====>>>>', '数据接收完成');

        console.log('result ====>>>>', result);

    })

});

req.end();