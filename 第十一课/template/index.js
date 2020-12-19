const http = require('http');
const url = require('url')
const fs = require('fs')
const path = require('path')
const user_data = require('../user.json')
const template = require('art-template')
template.defaults.imports.map = function(aaa){
    switch(aaa){
        case 'name':
            return '姓名';
        case 'age':
            return '年龄';
        case 'job':
            return '工作'
    }
}

http.createServer(( req, res ) => {
    
    // console.log(' ====>>>>', url.parse(req.url));
    let {pathname, query: {id}} = url.parse(req.url, true);
    

    if(req.url === '/favicon.ico'){
        res.end('ok!!!')
        return
    }

    if(pathname === '/search'){
        let html = template(path.join(__dirname, 'view', 'search.art'), {})

        res.end(html);
    }

    if(pathname === '/result'){

        let user = user_data[id];

        let html = template(path.join(__dirname, 'view', 'result.art'), {
            user
        })

        res.end(html)
    }


    if(pathname === '/all'){

        let arr = [];

        for(key in user_data){
            arr.push( user_data[key] )
        }

        console.log('arr ====>>>>', arr);
        

        let html = template(path.join(__dirname, 'view', 'all.art'), {
            arr
        })


        res.end(html)
    }

}).listen(8080, (  ) => {
    console.log(' ====>>>>', 'running....');
    
})





