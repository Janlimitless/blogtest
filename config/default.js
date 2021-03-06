module.exports = {
    port: 3000,              //port程序启动要监听的端口：3000
    session: {               //express-session的配置信息
        secret: 'myblog',
        key: 'myblog',
        maxAge: 2592000000
    },
    mongodb: 'mongodb://localhost:27017/myblog'           //mongodb的地址，myblog为db名
};
