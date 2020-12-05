const fs = require('fs');
const path = require("path");


// fs.writeFile(path.join(__dirname, '02.txt'), '呵呵呵呵', (err)=>{
//     if(err){
//         console.log('写入失败')
//     }else{
//         console.log('写入成功')
//     }
// });



let obj = fs.writeFileSync(path.join(__dirname, '03.txt'), '呵呵呵呵');