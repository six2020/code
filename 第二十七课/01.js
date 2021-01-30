const http = require('http');
const fs = require('fs');
const path = require('path')


let req = http.request('http://www.baidu.com', res => {
    let str = '';
    res.on('data', chunk => {
        str += chunk;
    })

    res.on('end', ()=>{
        // console.log('str ====>>>>', str);
        
        fs.writeFile(path.join(__dirname, 'baidu.html'), str, err => {
            if(err){
                console.log(' ====>>>>', '出错了');
                return
            }

            console.log(' ====>>>>', '写入成功！');
            
        })
    })

})

// req.write()     
req.end();
