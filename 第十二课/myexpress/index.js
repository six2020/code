const express = require('express');

let app = express();


// app.get('/', ( req, res, next ) => {
//     // res.send([1, 2, 3])
//     // res.write('123456');
//     // res.end([1, 2, 3]);

//     console.log(' ====>>>>', 111);


//     next()
    
// })

// get  '/'

// app.get('/', ( req, res ) => {
    
//     console.log(' ====>>>>', 222);
    
//     res.send('666')
// })

// app.post('/', ( req, res ) => {
//     res.send('666 post')
// })


app.get('/a', ( req, res ) => {
    


    // res.json({a: 1, b: 2})
})



app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'running....');
    
})