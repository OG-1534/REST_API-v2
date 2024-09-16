const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body parser');
require('dotenv/config');

app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');


// Middlewares
app.use(cors());
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('HOME');
});


//Connect to DB
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to DB');
    } catch (error) {
        console.error('Error connecting to DB:', error);
        process.exit(1);
    }
}

connectToDatabase();

// Listening to SERVER
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});