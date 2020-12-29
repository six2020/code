const Koa = require('koa')
const app = new Koa;
const render = require('koa-art-template');
const path = require('path')


// 模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
})

// 开启路由
require('./controllers')(app)


app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'index running...');
})