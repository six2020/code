const express = require('express');
const path = require('path')

let app = express();

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'express running...');
})

app.use(express.static(path.join(__dirname, 'static')))

// app.get('/index', ( req, res ) => {
//     res.send('get index')
// })
// app.post('/index', ( req, res ) => {
//     res.send('post index')
// })
// app.put('/index', ( req, res ) => {
//     res.send('put index')
// })
// app.delete('/index', ( req, res ) => {
//     res.send('delete index')
// })


// app.route('/index')
//     .all(( req, res, next ) => {
//         console.log(' ====>>>>', 'all----------');
//         next()
//     })
//     .get(( req, res ) => {
//         res.send('get index!')
//     })
//     .post(( req, res ) => {
//         res.send('post index!')
//     })
//     .put(( req, res ) => {
//         res.send('put index!')
//     })
//     .delete(( req, res ) => {
//         res.send('delete index!')
//     })


// ==================================================