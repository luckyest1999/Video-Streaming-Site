import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import './VideoList.scss';

const VideoList = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('All');

  const fetchVideos = async () => {
    try {
      const queryParams = category === 'All' ? `q=${searchQuery}` : `q=${searchQuery}&category=${category}`;
      const response = await axios.get(`http://localhost:5000/videos/search?${queryParams}`);
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Failed to load videos. Please try again later.');
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchVideos();
    } else {
      axios.get('http://localhost:5000/videos')
        .then(response => setVideos(response.data))
        .catch(error => console.error('Error fetching videos:', error));
    }
  }, [searchQuery]);

  const handleShowModal = (video) => {
    setSelectedVideo(video);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const filteredVideos = category === 'All'
    ? videos
    : videos.filter((video) => video.category === category);

  return (
    <div className="container mt-4">
      {error && <p className="text-danger">{error}</p>}
      <div className="text-center mb-4">
        <Button variant="secondary" onClick={() => handleCategoryChange('All')} className="mx-2">
          All
        </Button>
        <Button variant="secondary" onClick={() => handleCategoryChange('Action')} className="mx-2">
          Action
        </Button>
        <Button variant="secondary" onClick={() => handleCategoryChange('Drama')} className="mx-2">
          Drama
        </Button>
      </div>

      <div className="row g-3">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <div key={video._id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100" onClick={() => handleShowModal(video)} style={{ cursor: 'pointer' }}>
                <video className="card-img-top" controls>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5 className="card-title text-truncate">{video.title}</h5>
                  <p className="card-text text-truncate">{video.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            {searchQuery || category !== 'All' ? 'No videos match your search criteria.' : 'No videos uploaded yet.'}
          </p>
        )}
      </div>


      {selectedVideo && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedVideo.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <video width="100%" controls>
              <source src={selectedVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default VideoList;
