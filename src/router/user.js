const {
  login
} = require('../controller/login');

const {
  SuccessModel,
  ErrorModel
} = require('../model/resModel');

const handlerUser = (req, res) => {
  const method = req.method;

  if (method === 'POST' && req.path === '/api/user/login') {
    return login.then(user_data => {
      if (user_data.username) {
        return new SuccessModel('登陆成功')
      } else {
        return new ErrorModel('登陆失败')
      }
    })
  }
}

module.exports = handlerUser;
