const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    media_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alt_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    media_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'project',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;
