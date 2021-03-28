const register = require('./register');
const login = require('./login');
const update = require('./update');
const getUser = require('./getUser');
const logout = require('./logout');

module.exports = {
  logout,
  getUser,
  update,
  login,
  register,
};