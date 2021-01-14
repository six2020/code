// 前端 -- 后端 -- 数据库

const Koa = require('koa');
const router = require('koa-simple-router');
const koaStatic = require('koa-static');
const koaBody = require('koa-body');
const path = require('path');
const db = require('./db_promise')

let app = new Koa();

// 静态文件
app.use(koaStatic(path.join(__dirname, 'views')));

// post 数据
app.use(koaBody());


/**
 * 注册 POST /reg
 * 返回 {
 *    code: 0
 *    message: '注册成功'
 * }
 * 
 * 
 * */
/**
 * 登录 POST /login
 * 返回 {
 *    code: 0
 *    message: '登录成功' 
 * }
 * 
 * {
 *    code: 1
 *    message: '密码或用户名错误' 
 * }
 * 
 * 
 * */



// 路由
app.use(router(_ => {
    _.post('/reg', async (ctx, next) => {

        // console.log('ctx.request.body ====>>>>', ctx.request.body);

        let result = {
            code: 0,
            message: ''
        }

        try {

            let data = await db.query(`INSERT INTO t_user SET ?`, { name: ctx.request.body.name, pass: ctx.request.body.pass })

            if (data.affectedRows) {
                result.message = '注册成功';

                ctx.body = result
            }
            // console.log('data ====>>>>', data);

        } catch (err) {

            console.log('err ====>>>>', err);

        }

    })
    _.post('/login', async (ctx, next) => {
        let result = {
            code: 0,
            message: ''
        };

        try {

            let data = await db.query(`SELECT * FROM t_user WHERE name=? AND pass=? `, [ctx.request.body.name, ctx.request.body.pass]);

            if (data.length > 0) {
                result.message = '登录成功';
            }else{
                result.code = 1;
                result.message = '用户名或密码错误';
            }
            ctx.body = result
            console.log('data ====>>>>', data);

        } catch (err) {
            result.code = 1;
            result.message = 'error code 1';
            ctx.body = result;
            console.log('err ====>>>>', err);

        }
    })
}))




app.listen(8080, () => {
    console.log(' ====>>>>', 'running....');

})