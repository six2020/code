let data = {
    db: (  ) => {
        return Promise.resolve('假装这是从数据库获取的数据！')
    },
    db1: (  ) => {
        return Promise.resolve('啊哈哈哈哈')
    }
};


module.exports = data;