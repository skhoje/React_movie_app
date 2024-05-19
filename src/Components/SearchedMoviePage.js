import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../Services/ApiService'; 
import { Link } from 'react-router-dom';

const SearchedMoviePage = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const results = await ApiService.searchMovies(query);
      setSearchResults(results);
    };

    searchMovies();
  }, [query]);

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
    </div>
  );
};

export default SearchedMoviePage;
