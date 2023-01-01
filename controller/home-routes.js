const router = require('express').Router();
const { User, Post, Project } = require('../models');

// All GET routes
// Homepage - all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Project,
                    attributes: ['name'],
                    include: [
                        {
                            model: User,
                            attributes: ['firstName', 'lastName']
                        }
                    ]
                },
            ],
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn, 
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one User
// Profile 
router.get('/profile/:id', async (req, res) => {
    try {
        
    } catch (err) {
        
    }
});

// GET one Post (later, potential to add search bar to homepage?)

// Login route
router.get('/login', async (req, res) => {
    try {
        
    } catch (err) {
        
    }
});

module.exports = router;
