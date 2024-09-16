const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('HOME');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to DB')
);

// Listening to SERVER
app.listen(3000);