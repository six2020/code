const path = require('path');


// console.log('__dirname ---->', __dirname);




// /foo/bar/baz/asdf
// console.log(path.dirname('/foo/bar/baz/asdf/quux'));


// console.log('path.dirname("/foo/bar/baz/asdf/quux.html"); ---->', path.dirname('/foo/bar/baz/asdf/quux.html'));


// C:\Users\china\Desktop\code\第五节\path.js
// console.log('__fielname ---->', __filename);


// C:\Users\china\Desktop\code\第五节
// console.log(path.dirname( __filename ))



// -------------------------------------------------

// '/foo/bar/baz/asdf/quux.html'


// console.log(path.basename('/foo/bar/baz/asdf/quux.html'))


// console.log(path.basename('/foo/bar/baz/asdf/quux'))


// -------------------------------------------------


// console.log(
//     path.extname('aaaa/bbbb/index.html')
//     )


//     console.log(path.extname('index.coffee.md'))


//     console.log(path.extname('index.'))


//     console.log(path.extname('index'))


//     console.log(path.extname('.index'))


// ================================================


// {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
// }
// console.log("path == ", path.parse('/home/user/dir/file.txt'))



// let pp = {
//     root: '/',
//     dir: '/home/user/dir',
//     base: 'file.txt',
//     ext: '.txt',
//     name: 'file'
// }

// console.log("format == ", path.format(pp))


// ----------------------------------------------------------

// C:\Users\china\Desktop\code\第五节\aaa\bbb\ccc

// console.log(path.resolve('aaa', 'bbb', 'ccc'))

// console.log(path.resolve(__dirname, 'aaa', 'bbb', 'ccc'))


// console.log(path.resolve('/aaa', 'bbb', 'ccc'))
// console.log(path.resolve('/aaa', '/bbb', 'ccc'))


// console.log(
    // \foo\bar\baz\asdf\quux
    // path.resolve('/foo', 'bar', 'baz/asdf', 'quux')

    // // \foo\bar\baz\asdf
    // path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '..')

    // \foo\bar\baz\
    // path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '..', '..')
    // path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '../..')

// )


// ------------------------------------------------------------

// \foo\bar\baz\asdf
// console.log(
//     path.join('/foo', 'bar', '/baz/asdf', 'quux', '..')
// )



// ================================

// windows   \
// linux     /


// console.log(path.sep)



// console.log(path.delimiter);






