const request = require('./request')

module.exports =  async (url) => {
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



