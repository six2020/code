const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');


function request(request_url) {

    let httpRequest = null;

    let { protocol } = url.parse(request_url);

    if (protocol == 'https:') {
        httpRequest = https
    } else if (protocol == 'http:') {
        httpRequest = http
    } else {
        throw new Error('参数协议无效')
    }


    return new Promise((resolve, reject) => {
        let req = httpRequest.request(request_url, res => {

            if (res.statusCode >= 200 && res.statusCode < 300 || res.statusCode == 304) {
                let str = '';
                res.on('data', chunk => {
                    str += chunk;
                })

                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        headers: res.headers,
                        body: str
                    })
                })
            } else if (res.statusCode == 301 || res.statusCode == 302) {

                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: null
                })
            }

        })

        req.on('error', e => {
            
            reject('请求失败')
        })

        req.end();
    })



}

(async function(){
    try{
        let {statusCode, headers, body} = await request('http://taobao.com');
        

        console.log(' statusCode====>>>>', statusCode);
        console.log(' headers.location====>>>>', headers.location);




        // 如果重定向，再次请求
        if(statusCode == 301 || statusCode == 302){
            
            try{
                let {statusCode, headers: headers2, body} = await request(headers.location);
                console.log(' statusCode2====>>>>', statusCode);
                console.log(' headers.location2====>>>>', headers2.location);
                // console.log('body ====>>>>', body);
                

                // 还重定向，再请求
                if(statusCode == 301 || statusCode == 302){
            
                    try{
                        let {statusCode, headers: headers3, body} = await request(headers2.location);
                        console.log(' statusCode3====>>>>', statusCode);
                        console.log(' headers.location3====>>>>', headers3.location);
                        // console.log('body ====>>>>', body);
                        
                    }catch(e){
                        console.log('e ====>>>>', e);
        
                    }
                    
                }


            }catch(e){
                console.log('e ====>>>>', e);

            }
            
        }
        
    }catch(err){

    }
})()





