// MovieList.js
import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss';
import { movieData } from '../../dummyData/movieData'; // Correctly import movieData

const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = movieData.filter(
      (movie) => movie.genre === category || category === 'All'
    );
    setMovies(filteredMovies);
  }, [category]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;