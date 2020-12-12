const http = require('http');
const url = require('url');



http.createServer(( req, res ) => {

    if(req.url === '/favicon.ico'){
        res.end()
        return
    }
    
    console.log(' req.url====>>>>', req.url);


    // get 数据处理
    let {query: {a, b}} = url.parse(req.url, true);
    console.log('a ====>>>>', a);
    console.log('b ====>>>>', b);
    
    
    res.end('{"code": 0}')

}).listen(8080, (  ) => {
    console.log('running...')
})