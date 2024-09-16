const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const posts = await post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req,res) => {
    const Post = new post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await Post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;