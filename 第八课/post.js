const http = require('http');
const querystring = require('querystring');

http.createServer(( req, res ) => {

    if(req.url === '/favicon.ico'){
        res.end()
        return
    }
    
    console.log(' req.url====>>>>', req.url);

    let str = '';
    // post 数据处理
    //  aaa=123456&bbb=789789

    req.on('data', chunk => {
        str+=chunk

    })

    req.on('end', (  ) => {
        console.log('接收完成');
        

        let {aaa, bbb} = querystring.parse(str);

        console.log('aaa ====>>>>', aaa);
        console.log('bbb ====>>>>', bbb);
        
    })
    
    
    
    res.end('{"code": 0}')

}).listen(8080, (  ) => {
    console.log('running...')
})