const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';

const ApiService = {
  fetchPopularMovies: async (page = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
      const data = await response.json();
      return { movies: data.results, total_pages: data.total_pages };
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      return { movies: [], total_pages: 1 };
    }
  },

  fetchTopRatedMovies: async (page = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`);
      const data = await response.json();
      return { movies: data.results, total_pages: data.total_pages };
    } catch (error) {
      console.error('Error fetching top rated movies:', error);
      return { movies: [], total_pages: 1 };
    }
  },

  fetchUpcomingMovies: async (page = 1) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`);
      const data = await response.json();
      return { movies: data.results, total_pages: data.total_pages };
    } catch (error) {
      console.error('Error fetching upcoming movies:', error);
      return { movies: [], total_pages: 1 };
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
        profile_path: member.profile_path 
          ? `https://image.tmdb.org/t/p/w500/${member.profile_path}`
          : null
      }));
    } catch (error) {
      console.error('Error fetching movie cast:', error);
      return [];
    }
    },

  searchMovies: async (query, page) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`);
    const data = await response.json();
    return { results: data.results, total_pages: data.total_pages };
  } catch (error) {
    console.error('Error searching movies:', error);
    return { results: [], total_pages: 1 };
  }
}
};

export default ApiService;
