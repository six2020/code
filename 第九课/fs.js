const http = require('http')
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')



http.createServer(( req, res ) => {
    if(req.url === '/favicon.ico'){
        res.end()
        return
    }

    // console.log(' req.url====>>>>', req.url);
    

    let readable = fs.createReadStream(path.join(__dirname, 'static', req.url));
    let gz = zlib.createGzip();

    
    
    
    res.setHeader('content-encoding', 'gzip')

    readable.pipe(gz).pipe(res);

    // ------------------------------------------------------

    // fs.readFile(path.join(__dirname, 'video.wmv'), ( err, data ) => {
    //     if(err){
    //         console.log('err ====>>>>', err);
            
    //     }else{

    //         fs.writeFile(path.join(__dirname, 'video2.wmv'), data, err => {
    //             if(err){
    //                 console.log(' ====>>>>', '写入失败');
                    
    //             }
    //         })


    //     }
    // })

    // ------------------------------------------------------

    // let readable = fs.createReadStream(path.join(__dirname, 'jquery-3.5.1.js'));
    // let writable = fs.createWriteStream(path.join(__dirname, 'jquery2-3.5.1.js.gz'))
    
    // 压缩
    // let gz = zlib.createGzip();

    // readable.pipe(gz).pipe(writable);

    // let num = 0;
    // readable.on('data', chunk => {
    //     num ++


    //     writable.write(chunk)

    // })

    // readable.on('error', err => {
    //     console.log(' ====>>>>', err);
    //     console.log(' ====>>>>', '读取失败');
        
        
    // })

    // readable.on('end', () => {
        
    //     console.log(' ====>>>>', '读完了')
    // })
    // ------------------------------------------------------










    // res.end('{"code": 0}')
}).listen(8080, (  ) => {
    console.log(' ====>>>>', "running...");
    
})