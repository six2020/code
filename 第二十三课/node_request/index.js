const http = require('http');
const fs = require('fs');
const path = require('path')

let req = http.request('http://www.baidu.com', res => {
    let result = '';

    res.on('data', chunk => {
        result += chunk
    });

    res.on('end', (  ) => {
        // console.log(' ====>>>>', '数据接收完成');
        
        // console.log('result ====>>>>', result);

        fs.writeFile(path.join(__dirname, 'baidu.html'), result, err => {
            if(err){
                console.log(' ====>>>>', 'err');
                return
            } 
            console.log(' ====>>>>', 'success');
            
        })
        
    })

});

req.end();