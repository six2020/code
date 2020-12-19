const http = require('http');
const url = require('url')
const fs = require('fs')
const path = require('path')
const user = require('./user.json')

http.createServer(( req, res ) => {
    
    // console.log(' ====>>>>', url.parse(req.url));
    let {pathname, query: {id}} = url.parse(req.url, true);
    

    if(req.url === '/favicon.ico'){
        res.end('ok!!!')
        return
    }

    if(pathname === '/search'){
        let readable = fs.createReadStream(path.join(__dirname, 'view', 'search.html'));

        readable.pipe(res);
    }

    if(pathname === '/result'){
        let readable = fs.createReadStream(path.join(__dirname, 'view', 'result.html'));

        let str = "";
        readable.on('data', chunk => {
            str += chunk;
        })

        readable.on('end', (  ) => {
            
            // console.log('str ====>>>>', str);

            let user_id = user[id];

            console.log('user_id ====>>>>', user_id);
            
            
            str = str.replace('{{name}}',  user_id.name);
            str = str.replace('{{age}}',  user_id.age);
            str = str.replace('{{job}}',  user_id.job);

            res.end(str)
        })
    }

    // res.end('ok!!!')

}).listen(8080, (  ) => {
    console.log(' ====>>>>', 'running....');
    
})





