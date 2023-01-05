const router = require('express').Router();
const { route } = require('..');
const { Post } = require('../../models');

// CREATE new post
router.post('/', async (req, res) => {
  console.log(req.body);
    try {
      const postData = await Post.create({
        projectId: req.session.projectId,
        caption: req.body.caption,
        media_type: req.body.media_type,
        media_url: req.body.media_url
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(postData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;