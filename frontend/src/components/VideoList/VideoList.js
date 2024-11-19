import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './VideoList.scss';
import Slider from 'react-slick';
import { Carousel } from 'react-bootstrap';


const VideoList = ({ searchQuery }) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };


  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/videos');
      setVideos(response.data);
    } catch (err) {
      setError('Failed to fetch videos.');
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="video-list">
      {error && <p className="error">{error}</p>}
      {videos.length > 0 ? (
        <Carousel>
          {videos.map((video) => (
            <Carousel.Item key={video._id}>
              <video controls>
                <source src={video.url} type="video/mp4" />
              </video>
              <Carousel.Caption>
                <h5>{video.title}</h5>
                <p>{video.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
};

export default VideoList;
