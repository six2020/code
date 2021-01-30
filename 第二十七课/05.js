let request = require('./spider_request');


(async function () {
    try {
        let { statusCode, headers, body } = await request('http://jd.com');

        // console.log('statusCode ====>>>>', statusCode);
        // console.log('body ====>>>>', body);
        
    }catch(e){

    }
})()