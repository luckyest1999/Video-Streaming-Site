const Video = require('../models/Video');

// Upload video
const uploadVideo = async (req, res) => {
  try {
    const { title, description, category } = req.body; // Added category
    const video = new Video({
      title,
      description,
      category, // Save category
      url: `http://localhost:5000/uploads/${req.file.filename}`,
      thumbnail: '',
    });
    await video.save();
    res.status(201).json({ message: 'Video uploaded successfully', video });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload video' });
  }
};

// Fetch all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch videos' });
  }
};

// Search videos by title
const searchVideos = async (req, res) => {
  try {
    const searchQuery = req.query.q || '';
    const category = req.query.category || null;

    const filters = {
      title: { $regex: searchQuery, $options: 'i' },
    };

    if (category && category !== 'All') {
      filters.category = category; // Add category filter
    }

    const videos = await Video.find(filters);
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching videos' });
  }
};

module.exports = {
  uploadVideo,
  getAllVideos,
  searchVideos,
};
