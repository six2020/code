const Koa = require('koa');
let app = new Koa;
const router = require('koa-simple-router');
const fs = require('fs')
const path = require('path')

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'koa running...');
})

// app.use()

// app.use(( ctx, next ) => {
//     ctx.body = 'hello koa';
// })

let count = 0;

app.use(router(_ => {
    _.get('/', (ctx, next) => {
        ctx.type = 'html'
        ctx.body = fs.readFileSync(path.join(__dirname, 'static/request.html'))
    })



    _.get('/index', async (ctx, next) => {
        if(count >= 3){
            ctx.status = 500
            ctx.body = '请求次数过多，请稍后重试！！!!!';
            return
        }

        await next()
        
        if(ctx.bool){
            count++;
        }
    })
    _.get('/index', async (ctx, next) => {
        let random = Math.random() * 10

        await new Promise(( resolve, reject ) => {
            setTimeout((  ) => {
                if(random > 5){
                    ctx.body = `'request' ${random} 大于 5`;
                    ctx.bool = true;
                    resolve()
                }else{
                    ctx.body = `'request' ${random} < 5`;
                    resolve()
                }
            }, 100)
        })
    })




    // _.post('/name/:id', (ctx, next) => {
    //   // ...
    // })
  }))
