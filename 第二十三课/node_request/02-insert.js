const http = require('http');
const querystring = require('querystring')

let obj = {

    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

};

let req = http.request('http://localhost:8080/books/book', obj, res => {
    let result = '';

    res.on('data', chunk => {
        result += chunk
    });

    res.on('end', () => {
        // console.log(' ====>>>>', '数据接收完成');

        console.log('result ====>>>>', result);

    })

});

const postData = querystring.stringify({
    'name': '你好世界',
    'author': '你好世界',
    'category': '你好世界',
    'description': '你好世界'
});

console.log(' postData====>>>>', postData);


req.write(postData);
req.end();