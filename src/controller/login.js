// 登陆
const login = (loginData = {}) => {
  const { name, pw } = loginData;
  if (!name || !pw) {
    return {
      ...loginData,
      success: false
    }
  }
  return {
    ...loginData,
    success: true
  }
}

module.exports = {
  login
};
