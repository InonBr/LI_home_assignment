const createAdminUserUrl = require('./urls');
const axios = require('axios');
const Users = require('../models/Users');

const createIfNotExist = () => {
  findAdmin('admin').then((user) => {
    if (!user) {
      createAdmin();
    }
  });
};

const findAdmin = async (userName) => {
  const user = await Users.findOne({ userName });

  return user;
};

const createAdmin = () => {
  axios.post(createAdminUserUrl.createAdminUserUrl);
};

module.exports = createIfNotExist;
