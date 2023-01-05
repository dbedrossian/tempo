const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profilePic: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  },
  {
    hooks: {
      beforeCreate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData;},
      beforeUpdate: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return userData;}
    },
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
