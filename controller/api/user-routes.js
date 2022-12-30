const router = require('express').Router();
const { route } = require('..');
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {

});

// Login
router.post('/login', async (req, res) => {

});


// Logout
router.post('/logout', (req, res) => {

});

module.exports = router;