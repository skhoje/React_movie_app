import React, { useState, useEffect } from 'react';
import ApiService from '../Services/ApiService';
import { Link } from 'react-router-dom';
const UpcomingPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const movies = await ApiService.fetchUpcomingMovies();
      setUpcomingMovies(movies);
    };

    fetchUpcomingMovies();
  }, []);

  return (
    <div className="container">
      <h2>Upcoming Movies</h2>
      <div className="movie-list">
        {upcomingMovies.map(movie => (
           <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-name" >
              <h3>{movie.title}</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingPage;
