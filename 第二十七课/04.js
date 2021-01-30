const request = require('./request')

async function spider_request(url) {
    while (true) {
        
        try {
            let { statusCode, headers, body } = await request(url);

            if (statusCode == 200) {
                
                return { statusCode, headers, body }
            } else {
                url = headers.location;
            }

        } catch (e) {

            console.log(' ====>>>>', '出错了');

        }
    }
}

(async function () {
    try {
        let { statusCode, headers, body } = await spider_request('http://taobao.com');

        console.log('statusCode ====>>>>', statusCode);
        console.log('body ====>>>>', body);
        
    }catch(e){

    }
})()


