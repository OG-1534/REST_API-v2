const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/', (req, res) => {
    res.send('POSTS')
});

router.post('/', (req,res) => {
    console.log(req.body);
});


module.exports = router;