const http = require('http');
const path = require('path');
const staticServer = require('./staticserver');

http.createServer(( req, res ) => {
    if(req.url === '/favicon.ico'){
        res.end();
        return
    }

    staticServer(req, res, path.join(__dirname, 'static'));
}).listen(8080, (  ) => {
    console.log(' ====>>>>', 'running...');
    
})