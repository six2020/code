const express = require('express');

const app = express()

const path = require('path')


// app.use(express.static(path.join(__dirname, 'static') ))
// app.use(express.static(path.join(__dirname, 'public') ))
app.use('/static', express.static(path.join(__dirname, 'static') ))
app.use('/static', express.static(path.join(__dirname, 'public') ))

// app.use(( req, res, next ) => {
//     console.log(' ====>>>>', 111);

//     next()
// })


// app.get()

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'running...');
})

