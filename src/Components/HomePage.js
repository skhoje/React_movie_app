import React, { useState, useEffect } from 'react';
import ApiService from '../Services/ApiService';
import { Link } from 'react-router-dom';
import Pagination from './Pagination'; 

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPopularMovies = async (page) => {
      const { movies, total_pages } = await ApiService.fetchPopularMovies(page);
      setPopularMovies(movies);
      setTotalPages(total_pages);
    };

    fetchPopularMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h2>Popular Movies</h2>
      <div className="movie-list">
        {popularMovies.map(movie => (
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
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
