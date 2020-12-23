const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'running...');
})


app.use(express.static('./static'));

app.use(bodyParser.urlencoded({ extended: false }))



// let {pathnaem, query: {xxx}} = req.url(req.url);
// if(pathnaem == '/get' && req.method == 'get'){
//     xxx
// }


// get 数据处理 通过 req.query
// app.get('/index', ( req, res ) => {
//     console.log('req.query ====>>>>', req.query);
//     console.log('req.query.a ====>>>>', req.query.a);
//     console.log('req.query.b ====>>>>', req.query.b);
    
    
//     res.send('ok')
// })



// post 数据有两种
// 普通的数据
// 文件

app.post('/data', ( req, res ) => {
    
    console.log('req.body ====>>>>', req.body);
    

    res.send('ok!!!!')
})

