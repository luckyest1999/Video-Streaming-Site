const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const upload = require('../middlewares/uploadMiddleware');

router.post('/upload', upload.single('video'), videoController.uploadVideo);
router.get('/', videoController.getAllVideos);
router.get('/search', videoController.searchVideos);

module.exports = router;
