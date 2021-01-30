const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const path = require('path')

fs.readFile(path.join(__dirname, 'index.html'), ( err, data ) => {
    let dom = new JSDOM(data.toString());


    console.log(' ====>>>>', dom.window.document.querySelector('.pp').textContent);
    console.log(' ====>>>>', dom.window.document.querySelector('a').getAttribute('href'));
    
});


