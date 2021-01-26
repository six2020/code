const http = require('http');

const url = require('url');

const querystring = require('querystring')



http.createServer(( req, res ) => {

    if(req.url == '/favicon.ico'){
        res.end();
        return
    }

    // console.log('req.headers ====>>>>', req.headers);

    // 文件的方式
    // req.headers ====>>>> {
    //     host: 'localhost:8080',
    //     connection: 'keep-alive',
    //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    //     accept: '*/*',
    //     origin: 'null',
    //     'sec-fetch-site': 'cross-site',
    //     'sec-fetch-mode': 'cors',
    //     'sec-fetch-dest': 'empty',
    //     'accept-encoding': 'gzip, deflate, br',
    //     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
    //   }
    
    // 域名的方式打开
    // req.headers ====>>>> {
    //     host: 'localhost:8080',
    //     connection: 'keep-alive',
    //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    //     accept: '*/*',
    //     origin: 'http://localhost:3000',
    //     'sec-fetch-site': 'same-site',
    //     'sec-fetch-mode': 'cors',
    //     'sec-fetch-dest': 'empty',
    //     referer: 'http://localhost:3000/',
    //     'accept-encoding': 'gzip, deflate, br',
    //     'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
    //   }

    if(req.headers['origin'] == 'null' || req.headers['origin'].startsWith('http://localhost')){
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    

    
    // let {query: {user, pass}} = url.parse(req.url, true)
    let {query: get_data} = url.parse(req.url, true)
    
    
    // console.log('req.body ====>>>>', req.body);

    let str = '';
    req.on('data', chunk => {
        str += chunk;
    })

    req.on('end', (  ) => {
        // console.log('str ====>>>>', str);

        let post_data = querystring.parse(str);

        console.log('post_data ====>>>>', post_data);
        
    })

    console.log('get_data ====>>>>', get_data);
    

    

    // console.log('query ====>>>>', query);
    // console.log('user ====>>>>', user);
    // console.log('pass ====>>>>', pass);
    // console.log('data ====>>>>', data);
    
    
    

    res.end('ok')

}).listen(8080, (  ) => {
    console.log(' ==========8080')
})