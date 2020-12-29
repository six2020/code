const Koa = require('koa');
const app = new Koa;
const path = require('path')
const router = require('koa-simple-router');
const koaBody = require('koa-better-body');
const convert = require('koa-convert')
const static = require('koa-static');
const render = require('koa-art-template');


// 模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
})

// 处理post数据 包括文件
app.use(convert(koaBody({
    uploadDir: path.join(__dirname, 'uploads'),
    keepExtensions: true
})))


// 路由
app.use(router(_ => {
    _.get('/', (ctx, next) => {
      ctx.body = 'hello node'
    })

    // get 数据处理
    _.get('/index', (ctx, next) => {
        console.log('ctx.request.query ====>>>>', ctx.request.query);
        ctx.body = 'ok'
    })

    // get art-template
    _.get('/art', async (ctx, next) => {
        ctx.render('index', {
            title: 'koa-art-template',
            title2: 'hello koa'
        })
    })

    // 普通的post数据
    // 文件
    _.post('/index', (ctx, next) => {
      
        console.log('ctx.request.files ====>>>>', ctx.request.files);
        console.log('ctx.request.fields ====>>>>', ctx.request.fields);

        ctx.body = 'post ok'
    })
}))










// 静态文件
app.use(static(path.join('static')));


// app.use(( ctx, next ) => {
//     console.log('ctx ====>>>>', ctx);
//     next()
// })



app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'koa running....');
})