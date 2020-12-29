const Koa = require('koa');

const app = new Koa;




app.use(( ctx, next ) => {
    console.log('ctx ====>>>>', ctx);
    next()
})









app.use(( ctx, next ) => {
    // ctx.request
    ctx.response.status = 200;
    ctx.response.set("a", "123")
    ctx.body = {
        a: 1,
        b: 2
    }
})



// logger

// app.use(async (ctx, next) => {
//     console.log(' ====>>>>', 1);
    
//     await next();

//     console.log(' ====>>>>', 2);
    
//   });
  
//   // x-response-time
  
// app.use(async (ctx, next) => {
//     console.log(' ====>>>>', 3);
    
//     await next();

//     console.log(' ====>>>>', 4);
    
// });
  
//   // response
  
// app.use(async ctx => {
//     console.log(' ====>>>>', 5);
    
//     ctx.body = 'Hello World';
// });




app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'koa running....');
})