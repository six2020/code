const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require('querystring');

let staticServer = require('./staticserver');

let user = {
    zhangsan: 45665
};

http.createServer(( req, res ) => {

    if(req.url === '/favicon.ico'){
        res.end()
        return
    }

    // 处理 get 数据
    let {pathname, query: {name, pass}} = url.parse(req.url, true);
    // console.log('query ====>>>>', query);
    // console.log('pathname ====>>>>', pathname);
    
    // 处理 post 数据
    let data = '';
    req.on('data', chunk => {
        data+=chunk;
    });

    req.on('end', (  ) => {
        
        // console.log('name ====>>>>', name);
        // console.log('pass ====>>>>', pass);
        if(pathname === '/login'){
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
            if(user[name] && user[name] === pass){
                res.end('{"code": 0, "msg": "登录成功"}')
            }else( 
                res.end('{"code": 1, "msg": "用户名或密码错误"}')
            )

        }else if(pathname === '/register'){
            // console.log(' pathname====>>>>', pathname);
            res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
            let {name: post_name, pass: post_pass} = querystring.parse(data);

            if(!post_name){
                res.end('{"code": 1, "msg": "请输入用户名"}')
            }else if(!post_pass){
                res.end('{"code": 1, "msg": "请输入密码"}')
            }else if(user[post_name]){
                res.end('{"code": 1, "msg": "用户名已注册"}')
            }else{
                res.end('{"code": 0, "msg": "注册成功"}');

                user[post_name] = post_pass;
            }
            
        }else{
            staticServer(req, res, path.join(__dirname, 'static'));
        }

        console.log('user ====>>>>', user);
    })
    
    // res.end('{"code": 0}')
}).listen(8080, (  ) => {
    console.log('running...')
})