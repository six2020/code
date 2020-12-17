const fs = require('fs');
const path = require('path');
const zlib = require('zlib');


let mime = require('./public/mime.json')

module.exports = ( req, res, rootPath ) => {


    let readable = fs.createReadStream(path.join(rootPath, req.url));
    readable.on('error', err => {
        console.log('出错啦！！！')
        res.removeHeader('Content-Encoding');
        res.removeHeader("Content-Type");

        res.setHeader("Content-Type", 'text/plain; charset=utf8');
        // res.end('500 服务器开小差啦！！ 程序员小哥正在···')
        // res.write('ok')
        res.end('404 资源未找到')

        console.log(' ====>>>>', 1);
        
    })

        let gz = zlib.createGzip()
        res.setHeader('content-encoding', 'gzip');
        
        let mimeType = "text/plain";

        let ext = path.extname(req.url);
        // console.log(' ====>>>>', ext);
        
        if(ext && mime[ext]){
            mimeType = mime[ext];
            if(mimeType && mimeType.startsWith('text')){
                mimeType = mimeType+'; charset=utf8';
            }
            res.setHeader("Content-Type", mimeType );
        }
        

        
        

    // readable.on("data", chunk => {
    //     console.log(' ====>>>>', 666666);
        
    //     req.write(chunk)

        readable.pipe(gz).pipe(res);
        console.log(' ====>>>>', 2);
    // })

    // let gz = zlib.createGzip()
    // res.setHeader('content-encoding', 'gzip');
    
    // let mimeType = "text/plain";

    // let ext = path.extname(req.url);

    // mimeType = mime[ext];

    // if(mimeType.startsWith('text')){
    //     mimeType = mimeType+'; charset=utf8';
    // }
    // res.setHeader("Content-Type", mimeType );

    // readable.pipe(gz).pipe(res);
    // console.log(' ====>>>>', 2);
    
    
    

    

    
    
    


    

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



