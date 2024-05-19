import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../Services/ApiService'; 


function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResponse = await ApiService.fetchMovieDetail(id);
        setMovie(movieResponse);

        const castResponse = await ApiService.fetchMovieCast(id);
        setCast(castResponse);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="top-box">
        <div className="movie-info">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p><strong>Rating:</strong> {movie.vote_average}</p>
            <p><strong>Release Date:</strong> {movie.release_date}</p>
            <p><strong>Overview:</strong> {movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="cast-box">
        <h3>Cast</h3>
        <div className="cast-list">
          {cast.map(actor => (
            <div key={actor.id} className="cast-item">
              <img src={actor.profile_path} alt={actor.name} className="actor-image" />
              <p>{actor.name}</p>
              <p>character: {actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
