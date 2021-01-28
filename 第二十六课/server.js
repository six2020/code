const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path')
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: path.join(__dirname, 'uploads') }).any())

app.use('/', ( req, res ) => {
    
    if(req['headers']['origin'] === 'null'){
        res.setHeader('Access-Control-Allow-Origin', '*')
    }

    // get 数据
    // console.log('get 数据 ====>>>>', req.query);

    // post 数据
    // console.log('post 数据 ====>>>>', req.body);

    res.send('ok!');
})


app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'express 8080');
    
})