const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

let mime = require('./public/mime.json');




module.exports = ( req, res, rootPath ) => {


    let readable = fs.createReadStream(path.join(rootPath, req.url));
    let gz = zlib.createGzip();

    readable.on('error', err => {
        console.log('err ====>>>>', err);
        console.log(' ====>>>>', '出错了');
        
        res.removeHeader('Content-Encoding');
        res.removeHeader('Content-Type');
        res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
        res.end('404 请求资源不存在');
        
    });

    let mimeType = "text/plain";

    let ext = path.extname(req.url);

    mimeType = mime[ext];  // mime[html1] --> undefined
    console.log('mimeType ====>>>>', mimeType);
    
    if(mimeType){
        if(mimeType.startsWith('text')){
            mimeType = mimeType+'; charset=utf8';
        }

        res.setHeader('Content-Type', mimeType); 
    }
    
    res.setHeader('Content-Encoding', 'gzip');
     // undefien
    readable.pipe(gz).pipe(res);




















    // fs.readFile(path.join(rootPath, req.url), ( err, data ) => {
    //     if(err){
    //         console.log('出错啦！！！')
    //         res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"})
    //         // res.end('500 服务器开小差啦！！ 程序员小哥正在···')
    //         res.end('404 请求资源不存在')
    //     }else{

    //         // req.url  -->  /index.html

    //         let mimeType = "text/plain";

    //         let ext = path.extname(req.url);
    //         // console.log('ext ---->', ext);

    //         mimeType = mime[ext];

    //         if(mimeType.startsWith('text')){
    //             mimeType = mimeType+'; charset=utf8';
    //         }
            

    //         res.writeHead(200, 'ok!!!', {"Content-Type": mimeType });
    //         res.write(data);
    //         res.end()
    //     }
    // })
}



