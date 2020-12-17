const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require('querystring');

let staticServer = require('./staticserver');



http.createServer(( req, res ) => {

    if(req.url === '/favicon.ico'){
        res.end()
        return
    }

    staticServer(req, res, path.join(__dirname, 'static'))
    // 处理 get 数据
    // let {pathname, query: {name, pass}} = url.parse(req.url, true);
    
    // 处理 post 数据
    // let data = '';
    // req.on('data', chunk => {
    //     data+=chunk;
    // });

    // req.on('end', (  ) => {

    // })
    
    // res.end('{"code": 0}')
}).listen(8080, (  ) => {
    console.log('running...')
})