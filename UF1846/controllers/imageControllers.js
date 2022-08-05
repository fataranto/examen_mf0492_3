const Image = require('../models/image');

exports.getForm = (req, res) => {
    res.render('index');
};

exports.postForm = (req, res) => {
    const exampleURL = "https://picsum.photos/id/0/5616/3744";

};