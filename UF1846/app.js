// Express modules
const express = require('express');
const mongoose = require('mongoose');

// Custom modules
const imageRoutes = require('./routes/imagesRoutes');

// Server variables
const app = express();
app.set('view engine', 'ejs');

const MONGODB_URI =
    'mongodb://127.0.0.1/picsum';

// Add middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(imageRoutes);

mongoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log('Error  al conectar a la base de datos:', err);
    });