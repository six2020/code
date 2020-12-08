const fs = require("fs");
const path = require("path");

// 创建目录
// fs.mkdir(path.join(__dirname, 'bbb'), err=>{
//     if(err){
//         console.log('创建失败！')
//         return 
//     }

//     console.log("创建成功！")
// })


// 读取目录

fs.readdir(__dirname, (err, files)=>{
    if(err){
        console.log('err ---->', err);
        return
    }

    // console.log('files ---->', files);
    files.forEach(item=>{
        fs.stat(path.join(__dirname, item), (err, stats)=>{
            if(stats.isDirectory()){
                console.log(`${item} ---->`, '目录');
                
            }else if(stats.isFile()){
                console.log(`${item} ---->`, '文件');
            }
        })
    })
})



// 删除目录


// fs.rmdir(path.join(__dirname, 'aaa'), (err)=>{
//     if(err) return;

//     console.log('删除成功 ---->', '删除成功');
    
// })