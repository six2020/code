const http = require('http');

let server = http.createServer(( request, response ) => {

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf8"})
    if(  request.url === '/favicon.ico'){
        response.writeHead(200, {"Conten-Type": "text/plain"});
        response.end()

    }else if(request.url === '/aaa'){
        // console.log('request.url ---->', request.url);
    
        response.end("请求的路径为"+request.url)
    }else if(request.url === '/bbb'){
        // console.log('request.url ---->', request.url);
    
        response.end("请求的路径为"+request.url)
    }else if(request.url === '/index.html'){
        // console.log('request.url ---->', request.url);
    
        response.end("请求的路径为"+request.url)
    }else{
        response.end("404 页面没找到")
    }


    

    
});



server.listen(8080, (  ) => {
    console.log("server is running...\n=================")
})

