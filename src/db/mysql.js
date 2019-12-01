const mysql = require('mysql');
const {
    MYSQL_CONF
} = require('../conf/db');

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF);

// 开始连接
con.connect();
// console.log('db 连接成功')

// 统一执行sql语句
function exec(sql) {
    const promise = new Promise ((resolve, reject) => {
        // sql执行
        con.query(sql, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        })
    });
    return promise;
}

// con.end()

module.exports = {
    exec
};