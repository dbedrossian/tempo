const User = require('./User');
const Project =  require('./Project');
const Post = require('./Post');

User.hasOne(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(Post, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Post.belongsTo(Project, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Post };
