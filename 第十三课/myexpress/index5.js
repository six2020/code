const express = require('express');

let app = express();

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'express running...');
})






app.use('/article', require('./router/article'))



app.use('/user', require('./router/user'))





// www.xxx.com/artile
// www.xxx.com/artile/(id)
// www.xxx.com/artile/(id)/comment
// www.xxx.com/artile/(id)/edit

// www.xxx.com/user
// www.xxx.com/user/(id)
// www.xxx.com/user/(id)/detail


// www.xxx.com/user/abc/a
// www.xxx.com/user/abc/b
// www.xxx.com/user/abc/c