// MovieCard.js
import React from 'react';
import './MovieCard.scss';


const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-title">{movie.title}</div>
    </div>
  );
};

export default MovieCard;

