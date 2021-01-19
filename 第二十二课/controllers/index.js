const router = require('koa-simple-router')

const IndexController = require('./indexController');

const indexController = new IndexController();

module.exports = (app) => {
    app.use(router(_ => {
        _.get('/', indexController.index())
        _.get('/index.html', indexController.index())
        // 获取图书
        _.get('/admin', indexController.actionAdmin())
        // 添加图书页
        _.get('/addpage', indexController.actionAddPage())
        _.post('/add', indexController.actionAdd())
        // 编辑图书
        _.get('/editpage', indexController.actionEditPage())
        _.post('/edit', indexController.actionEdit())
        // 删除图书
        _.get('/delete', indexController.actionDelete())

    }))
}

