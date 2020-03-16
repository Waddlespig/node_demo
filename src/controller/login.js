const {
  exec
} = require('../db/mysql');

// 登陆
const login = (loginData = {}) => {
  const { name, pw } = loginData;
  if (!name || !pw) {
    return {
      msg: '请输入用户名和密码',
      success: false
    }
  }
  const sql = `
    select username, realname from users where username=${name} and password=${pw};
  `
  return exec(sql).then(res => {
    return res[0] || {};
  })
}

module.exports = {
  login
};
