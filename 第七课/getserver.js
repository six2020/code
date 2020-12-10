const http = require("http");

let server = http.createServer(( req, res ) => {
    // console.log('req.method ---->', req.method);
    console.log('req.url ---->', req.url);

    console.log('req ---->', req);
    
    

    res.end('{code: 0}')
})


server.listen(8080, (  ) => {
    console.log('running...')
})