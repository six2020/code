const EventEmitter = require('events');

let myEmitter = new EventEmitter();

myEmitter.on('xxx', ( a, b ) => {
    console.log('事件触发了！！！')

    console.log('a ---->', a);
    console.log('b ---->', b);
    
})


myEmitter.emit('xxx', 66, {name: 'six'})


