const express = require('express');

const router = express.Router();

const imagesController = require('../controllers/imageControllers');

router.get('/', imagesController.getForm);
router.post('/post-image', imagesController.postForm);

module.exports = router;