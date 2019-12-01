// 环境变量 dev/production
const env = process.env.NODE_ENV;

let MYSQL_CONF;

if (env === 'dev') {
    // 开发环境
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        prot: '3306',
        database: 'test'
    };
} else if (env === 'production') {
    // 生产环境
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        prot: '3306',
        database: 'test'
    };
}

module.exports = {
    MYSQL_CONF
};

