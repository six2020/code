const express = require('express');
const path = require('path')


let app = express();


app.use(express.static(path.join(__dirname)));

const multer = require('multer');


    app.use(multer({ dest: path.join(__dirname, 'uploads') }).any())

app.use('/', ( req, res ) => {

    if(req.headers['origin'] == 'null' || req.headers['origin'].startsWith('http://localhost')){
        res.setHeader('Access-Control-Allow-Origin', '*');
    }

    // 接收 get 数据
    console.log('req.headers ====>>>>', req.headers);
    console.log('req.query ====>>>>', req.query);

    console.log('req.files ====>>>>', req.files);
    
    

    res.send('okk!!!!!!!!!!!!!')
}).listen(3000, (  ) => {
    console.log(' ====>>>>', 'express 3000');
})


