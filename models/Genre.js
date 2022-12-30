const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model {}

Genre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {}
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'genre'
  }
);

module.exports = Genre;
