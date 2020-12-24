const express = require('express');
const path = require('path')
let template = require('express-art-template')

let app = express();

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'express running...');
})

app.set('views', path.join(__dirname, 'template')) // specify the views directory  指定视图目录
app.set('view engine', 'art') // register the template engine   注册模板引擎

app.engine('art', template);


app.get('/', function (req, res) {
    res.render('index', {
        title: 'hello Express!'
    });
});