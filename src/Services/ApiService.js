// src/services/ApiService.js

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743'; // Replace 'YOUR_API_KEY' with your actual API key

const ApiService = {
  fetchPopularMovies: async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return [];
    }
  },

  fetchTopRatedMovies: async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return [];
    }
  },

  fetchUpcomingMovies: async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      return [];
    }
  },

  fetchMovieDetail: async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie detail:', error);
      return null;
    }
  },
     fetchMovieCast: async (movieId) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
      const data = await response.json();
      return data.cast.map(member => ({
        id: member.id,
        name: member.name,
        character: member.character,
        profile_path: member.profile_path // This is the image path of the cast member
          ? `https://image.tmdb.org/t/p/w500/${member.profile_path}`
          : null
      }));
    } catch (error) {
      console.error('Error fetching movie cast:', error);
      return [];
    }
    },

  searchMovies: async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  }
};

export default ApiService;
