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
    const loginData = login(req.body);
    if (loginData.success) {
      return new SuccessModel(loginData, '登陆成功')
    } else {
      return new ErrorModel(loginData, '登陆失败')
    }
  }
}

module.exports = handlerUser;
