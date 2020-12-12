const url = require('url');

let strUrl = 'https://user:pass@sub.host.com:8080/p/a/t/h?query=string&a=666#hash';

let myURL =  url.parse(strUrl, true);

console.log('myURL ====>>>>', myURL);
