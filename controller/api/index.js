const router = require('express').Router();

const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/posts', postRoutes);

module.exports = router;