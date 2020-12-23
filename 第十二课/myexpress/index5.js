const express = require('express');
const app = express()
const path = require('path')
const multer = require('multer')
const fs = require('fs')

app.listen(8080, (  ) => {
    console.log(' ====>>>>', 'running...');
})


app.use(express.static('./static'));

app.use( multer({ dest: path.join(__dirname, 'uploads/') }).any() );

// [
//     {
//       fieldname: 'myfile',
//       originalname: '1003.jpg',
//       encoding: '7bit',
//       mimetype: 'image/jpeg',
//       destination: 'uploads/',
//       filename: '3d4d40b19511eb4861104a19ba9f5014',
//       path: 'uploads\\3d4d40b19511eb4861104a19ba9f5014',
//       size: 50170
//     }
// ]


// [                                                              
//     {                                                                               
//       fieldname: 'myfile',                                                          
//       originalname: '1001.jpg',                                                     
//       encoding: '7bit',                                                             
//       mimetype: 'image/jpeg',                                                       
//       destination: 'C:\\Users\\china\\Desktop\\code\\第十二课\\myexpress\\uploads\\'    
//   ,                                                                                 
//       filename: '418b791280568df524c791a7ebbaf95d',                                 
//       path: 'C:\\Users\\china\\Desktop\\code\\第十二课\\myexpress\\uploads\\418b791280568df524c791a7ebbaf95d',                                                        
//       size: 43859                                                                   
//     }      
// ]                                                                         
app.post('/upload', ( req, res ) => {

    // console.log('req.files ====>>>>', req.files);

    let oldPath = req.files[0].path;
    let newPath = req.files[0].path + path.extname( req.files[0].originalname )

    fs.rename(oldPath, newPath, err => {
        if(err) console.log('err ====>>>>', err);
    })

    res.send('上传成功')
})

