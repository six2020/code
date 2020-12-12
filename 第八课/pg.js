const http = require('http');
const url = require('url');
const querystring = require('querystring');



http.createServer(( req, res ) => {
    if(req.url === '/favicon.ico'){
        res.end()
        return
    }
    
    // get 数据处理
    let {query: {c, d}} = url.parse(req.url, true);
    console.log('c ====>>>>', c);
    console.log('d ====>>>>', d);

    let str = '';
    // post 数据处理
    req.on('data', chunk => {
        str+=chunk

    })

    req.on('end', (  ) => {
        // console.log('接收完成');
        let {aaa, bbb} = querystring.parse(str);

        console.log('aaa ====>>>>', aaa);
        console.log('bbb ====>>>>', bbb);
        
    })
    
    
    res.end('{"code": 0}')

}).listen(8080, (  ) => {
    console.log('running...')
})