const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {},
    message: {},
    postId: {},

  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;
