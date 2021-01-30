let request = require('./spider_request');
const fs = require('fs');
const path = require('path');


(async function () {
    try {
        let { statusCode, headers, body } = await request('http://taobao.com');

        fs.writeFile(path.join(__dirname, 'taobao.html'), body, err=>{
            if(err){
                console.log(' ====>>>>', '写入失败');
                return
            }

            console.log(' ====>>>>', '写入成功');
            
        })

    }catch(e){

    }
})()