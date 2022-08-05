const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imagesSchema = Schema({
    url: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('image', imagesSchema);