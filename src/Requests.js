const API_KEY="ba243dcc5d5562f685220601594ba335";

const requests={
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language-US`,
  fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated:`/movie/top-rated?api_key=${API_KEY}&language-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with-genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with-genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with-genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with-genres=10749`,
  fetchDocumentariesMovies:`/discover/movie?api_key=${API_KEY}&with-genres=99`,
  };

  export default requests;