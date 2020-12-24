const express = require('express');
const path = require('path')

let app = express();

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'express running...');
})

app.use(express.static(path.join(__dirname, 'static')))


app.get('/index', ( req, res ) => {
    res.sendFile( path.join(__dirname, 'static', 'post.html') )
})
app.get('/index2', ( req, res ) => {
    res.send('index2')
})


// 重定向  
// www.aaa.com  -->  www.bbb.com    301 302

app.get('/search', ( req, res ) => {
    
    // res.send('6666')
    // res.redirect('https://www.baidu.com')
    // res.redirect(`https://www.baidu.com/s?wd=${req.query.val}`)
    // https://www.baidu.com/s?wd=
    // res.redirect('/index.html')
    res.redirect('/index2')
})