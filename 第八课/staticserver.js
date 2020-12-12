const fs = require('fs');
const path = require('path');

let mime = require('./public/mime.json')

module.exports = ( req, res, rootPath ) => {
    fs.readFile(path.join(rootPath, req.url), ( err, data ) => {
        if(err){
            console.log('出错啦！！！')
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"})
            // res.end('500 服务器开小差啦！！ 程序员小哥正在···')
            res.end('404 请求资源不存在')
        }else{

            // req.url  -->  /index.html

            let mimeType = "text/plain";

            let ext = path.extname(req.url);
            // console.log('ext ---->', ext);

            mimeType = mime[ext];

            if(mimeType.startsWith('text')){
                mimeType = mimeType+'; charset=utf8';
            }
            

            res.writeHead(200, 'ok!!!', {"Content-Type": mimeType });
            res.write(data);
            res.end()
        }
    })
}



