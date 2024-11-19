import React, { useState } from 'react';
import axios from 'axios';
import './VideoUpload.scss'

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true); // Show loader while uploading
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('video', videoFile);

    try {
      await axios.post('http://localhost:5000/videos/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('🎉 Video uploaded successfully!');
    } catch (error) {
      setMessage('❌ Failed to upload video. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="video-upload">
      <h2>Upload Your Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter video description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter video category"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="video">Video File:</label>
          <input
            id="video"
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            required
          />
        </div>
        <button type="submit" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {message && <p className={`message ${message.includes('Failed') ? 'error' : 'success'}`}>{message}</p>}
    </div>
  );
};

export default VideoUpload;

