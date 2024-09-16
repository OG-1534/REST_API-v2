const express = require('express');
const router = express.Router();
const post = require('../models/post');

// GETS ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err });
    }
});

// SUBMITS A POST
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

//RETRIEVES SPECIFIC POST
router.get('/:postId', async (req, res) => {
    try {
        const Post = post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//DELETE A POST
router.delete('/:postId', async (req,res) => {
    try {
        const removedPost = await post.remove({ _id: req.params.postId });
        res.json(removedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE A POST
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await post.updateOne(
            { _id: req.params.postId, },
            {$set: { title: req.body.title }}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;