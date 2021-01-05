class IndexController {
    constructor() { }

    index() {
        // return (ctx, next) => {
        //     ctx.body = 'hello world'
        // }
        let data = '图书馆首页！！！'
        return async function (ctx) {
            await ctx.render('index', {
                data
            });
        }
    }
}

module.exports = IndexController