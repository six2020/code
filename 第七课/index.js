const http = require('http');
const path = require('path');
let staticServer = require('./02-staticserver');



http.createServer(( req, res ) => {
    
    staticServer(req, res, path.join(__dirname, 'www'))
    // staticServer(req, res, path.join( 'C:\\Users\\china\\Desktop'))

}).listen(8080, (  ) => {
    console.log(' ---->', 'running....');
    
})