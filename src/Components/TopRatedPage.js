import React, { useState, useEffect } from 'react';
import ApiService from '../Services/ApiService';
import { Link } from 'react-router-dom';

const TopRatedPage = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const movies = await ApiService.fetchTopRatedMovies();
      setTopRatedMovies(movies);
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div className="container">
      <h2>Top Rated Movies</h2>
      <div className="movie-list">
        {topRatedMovies.map(movie => (
          <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-name">
              <h3>{movie.title}</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
