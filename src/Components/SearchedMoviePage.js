import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../Services/ApiService'; 
import { Link } from 'react-router-dom';
import Pagination from './Pagination'; 

const SearchedMoviePage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const searchMovies = async () => {
      const { results, total_pages } = await ApiService.searchMovies(query, currentPage);
      setSearchResults(results);
      setTotalPages(total_pages);
    };

    searchMovies();
  }, [query, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h2>Search Results for "{query}"</h2>
      <div className="movie-list">
        {searchResults.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default SearchedMoviePage;
