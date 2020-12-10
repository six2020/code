const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer(( req, res ) => {

    console.log(' req.url---->', req.url);
    console.log(' ---->', path.join(__dirname, 'www', 'index.html'));
    

    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'www', 'index.css'), ( err, data ) => {
            
            if(err){
                console.log('出错了')
                
            }else{
                res.write(data)
                res.end();
            }
            
        })
    }

    
    
}).listen(8081)