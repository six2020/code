const fs = require('fs');

// fs.stat('./01.txt', (err, stats)=>{
fs.stat(__dirname, (err, stats)=>{
    if(err){

    }else{
        // console.log('stats ---->', stats.atime);
        // console.log('stats ---->', stats.ctime);
        // console.log('stats ---->', stats.mtime);
        
        console.log('stats.isFile() ---->', stats.isFile());
        console.log('stats.isDirectory() ---->', stats.isDirectory());
        
    }
})


