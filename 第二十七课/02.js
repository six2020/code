const http = require('http');
const fs = require('fs');
const path = require('path')

let req = http.request('http://www.taobao.com', res => {

    // 状态码
    console.log('res.statusCode ====>>>>', res.statusCode);
    // 响应头
    console.log('res.headers ====>>>>', res.headers);

    if (res.statusCode >= 200 && res.statusCode < 300 || res.statusCode == 304) {
        let str = '';
        res.on('data', chunk => {
            str += chunk;
        })

        res.on('end', () => {
            // console.log('str ====>>>>', str);

        })
    } else if (res.statusCode == 301 || res.statusCode == 302) {

        // 不能请求 HTTPS
        // http.request(res.headers.location, res2 => {
        //     // 状态码
        //     console.log('res2.statusCode ====>>>>', res2.statusCode);

        //     // 响应头
        //     console.log('res2.headers ====>>>>', res2.headers);
        // })
    }
})

// req.write()     
req.end();
