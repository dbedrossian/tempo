const router = require('express').Router();
const { route } = require('..');
const { Post } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
    try {
      const projectData = await Post.create({
        projectId: req.body.projectId,
        caption: req.body.caption,
        media: req.body.media,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(projectData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;