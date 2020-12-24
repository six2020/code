const express = require('express')

let app = express();

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'express running...');
})


app.use(( req, res, next ) => {
    console.log(' ====>>>>', 111);      // 1
    
    next()

    // console.log(' ====>>>>', 1111111);  // 4
    
});


// app.use(( req, res, next ) => {
//     console.log(' ====>>>>', 222);      // 2
    
//     next()

//     // console.log(' ====>>>>', 2222222);  // 3
    
// })

// app.use(( req, res ) => {
//     res.send({code: 0})
// })

// ==============================================

// app.get('/index', ( req, res, next ) => {
//     console.log(' ====>>>>', 'index1');
//     next()
    
// })

// app.get('/index', ( req, res, next ) => {
//     console.log(' ====>>>>', 'index2');
//     next()
// })

// app.get('/index', ( req, res ) => {
//     res.send('index')
// })

// ==============================================

// app.get('/aa', ( req, res, next ) => {
//     console.log(' ====>>>>', 111111);
//     next()
// }, ( req, res, next ) => {
//     console.log(' ====>>>>', 222222);
//     next('route')
// }, ( req, res, next) => {
//     console.log(' ====>>>>', '+++++++++++++++++');
    
//     res.send('aa-----------')
//     next()
// })

// app.get('/aa', ( req, res ) => {
//     console.log(' ====>>>>', 3333333);
//     // res.send('bb-----------')
//     res.send(bb)
// })

// 错误处理中间件
// app.use(function (err, req, res, next) {
//     console.log(' ====>>>>', 4444);
    
//     console.error(err.stack)
//     res.status(500).send('服务器端错误，请与管理员联系！！')
// })


// ==============================================

// let fn1 = ( req, res, next ) => {
//     console.log(' ====>>>>', 'fn11111');
//     next()
    
// };
// let fn2 = ( req, res, next ) => {
//     console.log(' ====>>>>', 'fn22222');

//     res.send('fn')
//     next()
// };

// app.get('/bb', [fn1, fn2], ( req, res ) => {
//     console.log(' ====>>>>', 'fn33333');
// })