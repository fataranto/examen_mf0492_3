const Image = require('../models/image');

exports.getForm = (req, res) => {
    res.render('index');
};

exports.postForm = (req, res) => {
    const exampleURL = "https://picsum.photos/id/0/5616/3744";
    console.log(req.body);

    const image = new Image({
        url : req.body.url
    });

    image.save()    
        .then(result => {
            console.log(result);
            res.send('URL inserida');
        }).catch(err => {
            console.log(err);
        });
    
};