const router = require('express').Router();
const { route } = require('..');
const { Project } = require('../../models');

// CREATE new project
router.post('/', async (req, res) => {
    try {
      const projectData = await Project.create({
        name: req.body.name,
        description: req.body.description,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(projectData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
