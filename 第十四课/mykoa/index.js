const express = require('express');
const path = require('path');

let app = express();

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'express running....');
    
})


let count = 0;


app.get('/favicon.ico', ( req, res ) => {
    res.send('ok');
    return
})

app.get('/', ( req, res ) => {
    res.sendFile(path.join(__dirname, 'static/request.html'))
})


app.get('/index', ( req, res, next ) => {
    if(count >= 3){
        res.status(500).send('请求次数过多，请稍后重试！！!!!');
        return
    }
    next()
    console.log(' ====>>>>', '222');
    
    if(req.bool){
        count++;
    }
})
app.get('/index', ( req, res ) => {
    
    let random = Math.random() * 10

    setTimeout((  ) => {
        if(random > 5){
            res.send(`'request' ${random} 大于 5`);
            console.log(' ====>>>>', '111');
            
            req.bool = true;
        }else{
            res.send(`'request' ${random} < 5`);
        }
    }, 100)
    
})