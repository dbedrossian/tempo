const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interest extends Model {}

Interest.init(
  {
    id: {},
    name: {}
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'interest'
  }
);

module.exports = Interest;
