
// const fs = require('fs');
// const path = require('path');


// fs.readFile(path.join(__dirname, '01.txt'), (err, data)=>{
//     if(err) return;

//     console.log('data.toString() ---->', data.toString());
    
// })



// 创建Buffer实例

// let buf = Buffer.alloc(10);

// console.log('buf ---->', buf);

// const buf1 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

// console.log('buf1 ---->', buf1.toString());


// Unicode 所有的字符 ---> 字符集
// Unicode utf8  utf16 utf32
// 1 byte = 8 bit


// const buf2 = Buffer.from('abcd', 'utf8');
// const buf3 = Buffer.from('哈哈', 'utf8');

// console.log('buf2 ---->', buf2.toString());

// let arr = [];


// 功能方法

// console.log(Buffer.isEncoding('GBK'))
// console.log(Buffer.isEncoding('utf8'))

// console.log(Buffer.isBuffer(buf2))
// console.log(Buffer.isBuffer(arr))

// console.log('buf2 ---->', buf2);
// console.log('buf3 ---->', buf3);


// console.log('Buffer.byteLength(buf2) ---->', Buffer.byteLength(buf2));
// console.log('Buffer.byteLength(buf3) ---->', Buffer.byteLength(buf3));


// let buf = Buffer.alloc(5);

// buf.write('abcefg', 2, 5);

// console.log('buf ---->', buf);



// let buf = Buffer.from('abcde');

// console.log('buf ---->', buf);

// let buf1 = buf.slice();
// console.log('buf === buf1 ---->', buf === buf1);


// console.log('buf1 ---->', buf1);




// let strBuf = JSON.stringify(buf);

// console.log('strBuf ---->', strBuf);

const buf2 = Buffer.from('tést');
console.log(' ---->', buf2);








