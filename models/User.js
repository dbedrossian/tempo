const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(password) {
    // 
  }
}

User.init(
  {
    id: {},
    firstName: {},
    lastName: {},
    email: {},
    password: {},
    profilePic: {},
    bio: {}
  },
  {
    hooks: {
      beforeCreate: async (password) => {},
      beforeUpdate: async (password) => {}
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
