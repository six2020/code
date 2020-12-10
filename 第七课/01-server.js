const http = require('http');

// let server = http.createServer();

// server.on('request', ( request, response ) => {
//       response.write('hello nodejs');

//       response.end()
// });


// server.listen(8080, (  ) => {
//     console.log('server is running...')
// })


let server = http.createServer(( request, response ) => {
    response.end("{code: 0}")
});

server.listen(8080, (  ) => {
    console.log("server is running...\n=================")
})

