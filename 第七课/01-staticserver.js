const http = require('http');
const fs = require('fs');
const path = require('path');

let staticServer = ( req, res, rootPath ) => {
    fs.readFile(path.join(rootPath, req.url), ( err, data ) => {
        if(err){
            console.log('出错啦！！！')
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"})
            res.end('500 服务器开小差啦！！ 程序员小哥正在···')
        }else{
            res.write(data);
            res.end()
        }
    })
}


let root = path.join(__dirname, 'www');

http.createServer(( req, res ) => {
    
    if(req.url === '/index.html'){

        staticServer(req, res, root)
    }else if(req.url === '/index.css'){

        staticServer(req, res, root)
    }else if(req.url === '/index.js'){

        staticServer(req, res, root)
    }else {
        res.end('404')
    }

}).listen(8080, (  ) => {
    console.log(' ---->', '服务器已启动！！');
    
})

