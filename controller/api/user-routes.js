const router = require('express').Router();
const { route } = require('..');
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Login
router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Sorry, your email had some wrong notes. Please try again!' });
        return;
      }
  
      const correctPassword = await userData.checkPassword(req.body.password);
  
      if (!correctPassword) {
        res
          .status(400)
          .json({ message: 'Sorry, your password had some wrong notes. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: userData, message: 'Successful login!' });
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;