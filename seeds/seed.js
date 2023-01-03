const sequelize = require('../config/connection');
const { User, Project, Post } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  console.log('whoa');
  await sequelize.sync({ force: true });
  console.log('hi');
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });

  await Project.bulkCreate(projectData);

  await Post.bulkCreate(postData);

  process.exit(0);
}

seedDatabase();
