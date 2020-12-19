const http = require('http');
const path = require('path')
const template = require('art-template');



http.createServer(( req, res ) => {
    if(req.url === '/favicon.ico'){
        res.end('ok!!!')
        return
    }

    // var html = template(path.join(__dirname, 'view', 'index.art'), {
    //     title: 'hello 111111 222222222 !!!'
    // });

    // ===============================================

    // let art = `
    //     <ul> 
    //         {{each arr}}
    //             <li>{{$index}} ---- {{$value}}</li> 
    //         {{/each}} 
    //     </ul>`

    // let render = template.compile(art);

    // let html = render({
    //     arr: ['a', 'b', 'c']
    // })
    
    // console.log(' html====>>>>', html);
    
    // ===============================================

    // let art = `
    //     <ul> 
    //         {{each user}}
    //             <li>{{$index}} ---- {{$value}}</li> 
    //         {{/each}} 
    //     </ul>`;

    

    // let html = template.render(art, {
    //     user: {
    //         name: '张三',
    //         age: 100,
    //         job: 'web'
    //     }
    // });
    
    // console.log(' html====>>>>', html);

    res.end('html')
}).listen(8080, (  ) => {
    console.log(' ====>>>>', '++++++++++++');
    
})



